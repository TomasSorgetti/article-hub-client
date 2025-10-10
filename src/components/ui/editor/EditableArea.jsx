import { forwardRef, useEffect, useRef, useState } from "react";

const isContentEmpty = (html = "") => {
  const text = html
    .replace(/<br\s*\/?>/gi, "")
    .replace(/&nbsp;/g, "")
    .replace(/<[^>]*>/g, "")
    .trim();
  return text.length === 0;
};

const setCaretToEnd = (el) => {
  if (!el) return;
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(el);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
};

const EditableArea = forwardRef(
  (
    {
      initialValue = "",
      onInput,
      onSelectionChange,
      placeholder = "Write something here...",
    },
    ref
  ) => {
    const localRef = useRef(null);
    const targetRef = ref || localRef;
    const [empty, setEmpty] = useState(isContentEmpty(initialValue));

    useEffect(() => {
      const el = targetRef.current;
      if (!el) return;
      if (!el.innerHTML) el.innerHTML = initialValue;

      const handleSelection = () => {
        if (onSelectionChange) onSelectionChange();
      };

      document.addEventListener("selectionchange", handleSelection);
      return () =>
        document.removeEventListener("selectionchange", handleSelection);
    }, [initialValue, onSelectionChange, targetRef]);

    const handleInput = () => {
      const el = targetRef.current;
      if (!el) return;
      const html = el.innerHTML;
      const nowEmpty = isContentEmpty(html);
      setEmpty(nowEmpty);
      if (onInput) onInput(html);
    };

    const handleFocus = () => {
      const el = targetRef.current;
      if (!el) return;
      if (isContentEmpty(el.innerHTML)) {
        setCaretToEnd(el);
      }
    };

    return (
      <div className="relative">
        {empty && (
          <div
            className="absolute inset-0 p-4 text-font-secondary pointer-events-none text-left select-none"
            aria-hidden="true"
          >
            {placeholder}
          </div>
        )}

        <div
          ref={targetRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onFocus={handleFocus}
          spellCheck={true}
          className="min-h-[200px] p-4 focus:outline-none prose max-w-none text-left z-0"
          style={{
            direction: "ltr",
            unicodeBidi: "plaintext",
            textAlign: "left",
            whiteSpace: "pre-wrap",
          }}
        />
      </div>
    );
  }
);

export default EditableArea;
