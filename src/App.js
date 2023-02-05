import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Paste from "./pages/paste";
import Page404 from "./pages/Page404";
import CutLinks from "./pages/cutLinks.js"
import Nav from "./pages/navigation";

function App() {
  const path = window.location.pathname;
  console.log(path)
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cutlinks" component={CutLinks} />
          <Route path="/paste/:pasteurl" component={Paste}/>
          <Route component={Page404} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
