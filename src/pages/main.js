import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const textareaRef = React.useRef();
  const [typedText, setTypedText] = React.useState('');
  const [customlinkacz, setcustomlinkacz] = React.useState('');
  const history = useHistory();
  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
  }
  });
  const handleSubmit = () => {
    if (typedText === '') {
      alert('Pole nie może być puste!');
    }
    postText(typedText,customlinkacz);
    if (typedText.trim() !== '') {
      const newPageTitle = typedText.trim();
      const newPageUrl = `/${encodeURIComponent(newPageTitle)}`;
      history.push({}, newPageTitle, newPageUrl);
      // window.location = newPageUrl;
    }
  };
  var statusEror = "";
  const postText = (pc,cl) => {
    axios.post('https://api.wklejse.tk/api/utworzPaste', {
      pasteContent: pc,
      customLink: cl,
    }).then(response => {
      statusEror = response.data.status;
      if (statusEror == "Utworzono skrócony link.") {
        window.location = response.data.destURL;
      }
    }).catch(error => {
      alert('Połączenie odrzucone:', error.status);
    });
  }

  return (
    <>
    <div className='main'>
      <textarea className="textarea"value={typedText} onChange={e => setTypedText(e.target.value)} />
      <div className='buttons'>
        <input type="text" placeholder="Stwórz customy link" name="customLink" id="customLink" value={customlinkacz} onChange={e => setcustomlinkacz(e.target.value)}/>
        <button type="button" onClick={handleSubmit}>Stwórz nową paste</button>
      </div>
    </div>
    </>
  );
};

export default Main;