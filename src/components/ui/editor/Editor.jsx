import { useRef, useState } from "react";
import Toolbar from "./Toolbar";
import EditableArea from "./EditableArea";

const Editor = ({
  content = "",
  placeholder = "Write something here...",
  handleChange = () => {},
}) => {
  const editorRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({});

  const exec = (cmd, value = null) => {
    if (cmd === "createLink") {
      const url = prompt("Introduce el enlace:");
      if (!url) return;
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, value);
    }
    updateActiveFormats();
  };

  const updateActiveFormats = () => {
    const formats = [
      "bold",
      "italic",
      "underline",
      "insertUnorderedList",
      "insertOrderedList",
      "formatBlock",
      "createLink",
    ];
    const result = {};
    formats.forEach((f) => {
      try {
        result[f] = document.queryCommandState(f);
      } catch {
        result[f] = false;
      }
    });
    setActiveFormats(result);
  };

  return (
    <div className="border border-border rounded-lg shadow-sm w-full h-full overflow-hidden">
      <Toolbar onCommand={exec} activeFormats={activeFormats} />
      <EditableArea
        ref={editorRef}
        value={content}
        onSelectionChange={updateActiveFormats}
        placeholder={placeholder}
        onInput={handleChange}
      />
    </div>
  );
};

export default Editor;
