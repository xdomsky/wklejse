import axios from "axios";
import React from "react";

const CutLinks = () => {
    const [customlinkacz, setcustomlinkacz] = React.useState('');
    const [destLinkacz, setdestlinkacz] = React.useState('');

    const handleSubmit = () => {
        if (destLinkacz === '') {
            alert('Pole nie może być puste!');
        } 
        else {
            postText(destLinkacz,customlinkacz);
        }
    }

    var statusEror = "";
    function isValidHttpUrl(string) {
      let url;
      try {
        url = new URL(string);
      } catch (_) {
        return false;
      }
      return url.protocol === "http:" || url.protocol === "https:";
    }
    const postText = (pc,cl) => {
      isValidHttpUrl(pc);
      axios.post('https://api.wklejse.tk/api/ujebLinka', {
        destURL: pc,
        customLink: cl,
      }).then(response => {
        statusEror = response.data.status;
        if (statusEror == "Utworzono skrócony link.") {
            document.getElementById("status").innerHTML = "Twój nowy skrócony link to: <a href=" + response.data.shortURL + ">" + response.data.shortURL + "</a>";
        } else {
          document.getElementById("status").innerHTML = response.data.status
        }
      }).catch(error => {
        alert('Połączenie odrzucone:', error.status);
      });
    }
    return ( 
        <>
        <div className="cutlinks">
            <input type="url" placeholder="Docelowa strona" name="destLink" id="destLink" value={destLinkacz} onChange={e => setdestlinkacz(e.target.value)} />
            <button onClick={handleSubmit}>Ujeb linka</button>
        </div>
        <div className="personal">
            <input type="text" placeholder="Personalizowany link" name="customLink" id="customLink" value={customlinkacz} onChange={e => setcustomlinkacz(e.target.value)} />
        </div>
        <div className="status-con">
            <span id="status"></span>
        </div>
        </>
     );
}
 
export default CutLinks;