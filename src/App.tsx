import "./App.css";
import FileUpload from "./components/fileUpload";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FileUpload fileType=".yml, .yaml" />
      </header>
    </div>
  );
}

export default App;
