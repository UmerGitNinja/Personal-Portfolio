import React, { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = React.memo(({ mouse, hidden }) => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (cursorDot && cursorOutline) {
      cursorDot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      cursorOutline.style.transform = `translate(${mouse.x - 30}px, ${mouse.y - 32}px)`;
    }
  }, [mouse]);

  return (
    <div className={`cursor ${hidden}`}>
      <div className="cursor-dot" ref={cursorDotRef} data-cursor-dot></div>
      <div className="cursor-outline" ref={cursorOutlineRef} data-cursor-outline></div>
    </div>
  );
});

export default Cursor;