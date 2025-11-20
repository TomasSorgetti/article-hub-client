import { useRef, useState } from "react";
import Toolbar from "./Toolbar";
import EditableArea from "./EditableArea";

const Editor = ({
  content = "",
  error = "",
  placeholder = "Write something here...",
  handleChange = () => {},
  handleBlur = () => {},
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

  const handleEditorBlur = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;

    handleBlur({
      target: {
        name: "content",
        value: html,
      },
    });
  };

  return (
    <div className="relative w-full h-full">
      <div className="border border-border rounded-lg shadow-sm w-full h-full overflow-hidden">
        <Toolbar onCommand={exec} activeFormats={activeFormats} />
        <EditableArea
          ref={editorRef}
          value={content}
          onSelectionChange={updateActiveFormats}
          placeholder={placeholder}
          onInput={handleChange}
          onBlur={handleEditorBlur}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm absolute -bottom-6 left-0">
          {error}
        </p>
      )}
    </div>
  );
};

export default Editor;
