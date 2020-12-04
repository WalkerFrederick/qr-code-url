import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{backgroundColor: "#041E41", height: '100vh', width: '100vw'}}>
        <div style={{ width: '100%', display: 'flex', flexDirection: "row", justifyContent: 'center'}}>
        <div style={{ marginTop: 30, backgroundColor: "#fff", padding: 30 ,display: 'flex', flexDirection: "row", justifyContent: 'center'}}>

        <Switch>
          <Route path="/">
          </Route>
        </Switch>
        <Switch>
          <Route path="/:id" children={<QRCodeComp />} />
        </Switch>
        </div>
        </div>
      </div>
    </Router>
  );
}
function QRCodeComp() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <QRCode value={id} />
    </div>
  );
}
export default App;
