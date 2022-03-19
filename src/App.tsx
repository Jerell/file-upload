import { useRef, useState } from "react";
import "./App.css";
import FileUpload from "./components/fileUpload";

function App() {
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const onFileSelect = (f: any) => {
    setLoading(true);
    console.log(f);
    setSelectedFile(f);
    const reader = new FileReader();
    reader.readAsDataURL(f);
    console.log(reader);
  };

  return (
    <div className="App" onDoubleClick={() => setLoading(false)}>
      <header className="App-header">
        <FileUpload
          fileType=".yml, .yaml"
          loading={loading}
          onFileSelect={onFileSelect}
        />
      </header>
    </div>
  );
}

export default App;
