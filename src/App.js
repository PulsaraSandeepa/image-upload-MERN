import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FilesUpload from "./components/files-upload";

function App() {
  return (
    <div className="App">
      <h2>React File Upload Demo</h2>
      <FilesUpload />
    </div>
  );
}

export default App;
