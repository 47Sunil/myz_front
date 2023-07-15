import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditorConfig from "./EditorConfig";
import "grapesjs/dist/css/grapes.min.css";
import "./styles.css";
import Topbar from "./Design/Topbar";
import TwoTopbar from "./Design/TwoTopbar";
import LeftSidebar from "./Design/LeftSidebar";
import RightSidebar from "./Design/RightSidebar";

const Editor = () => {
  const { id, pageType } = useParams();
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
      setEditor(EditorConfig(id, pageType));
    }
  });

  return (
    <div className="h-screen overflow-hidden bg-gray-400/40">
      <Topbar editor={editor} id={id} />
      <TwoTopbar editor={editor} />
      <LeftSidebar editor={editor} />
      <RightSidebar editor={editor} />
      <div id="gjs"></div>
    </div>
  );
};

export default Editor;
