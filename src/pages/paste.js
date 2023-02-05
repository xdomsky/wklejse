import axios from "axios";
const Paste = ({match}) => {
    var statusEror = "";
    const pasteId = match.params.pasteurl;
    const postText = (pasteId) => {
        axios.post('https://api.wklejse.tk/api/bierPaste', {
          pasteId: pasteId,
        }).then(response => {
          statusEror = response.data.status;
          if (statusEror === "Kod paste prawidłowy") {
            document.getElementById("pasta").value = (response.data.pasteContent);
          }
        }).catch(error => {
          alert('Połączenie odrzucone:', error.status);
        });
    }
    postText(pasteId);
    return (
        <div className="paste">
            <h1>{pasteId}</h1>
            <textarea readOnly id="pasta"></textarea>
        </div>
     );
}
 
export default Paste;