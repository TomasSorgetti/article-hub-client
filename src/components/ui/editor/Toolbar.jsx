import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Code,
} from "lucide-react";

const BUTTONS = [
  { icon: Bold, command: "bold", title: "Negrita" },
  { icon: Italic, command: "italic", title: "Cursiva" },
  { icon: Underline, command: "underline", title: "Subrayado" },
  { icon: List, command: "insertUnorderedList", title: "Lista" },
  { icon: ListOrdered, command: "insertOrderedList", title: "Lista numerada" },
  { icon: Link, command: "createLink", title: "Enlace" },
  { icon: Code, command: "formatBlock", value: "pre", title: "Código" },
];

const Toolbar = ({ onCommand, activeFormats }) => {
  return (
    <div className="flex flex-wrap gap-1 border-b border-border p-2 bg-background">
      {BUTTONS.map(({ icon: Icon, command, value, title }) => {
        const isActive = activeFormats[command];
        return (
          <button
            type="button"
            key={command + (value || "")}
            title={title}
            onMouseDown={(e) => {
              e.preventDefault();
              onCommand(command, value);
            }}
            data-active={isActive}
            data-label={`select ${title}`}
            className={`p-2 rounded-md transition-colors cursor-pointer ${
              isActive
                ? "bg-gray-100 text-black"
                : "text-font-secondary hover:bg-gray-100 hover:text-black"
            }`}
          >
            {Icon ? <Icon size={18} /> : null}
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;
