import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    return () => {
      document.body.removeChild(cursor);
    };
  }, []);

  return <style>{`
    .cursor {
      width: 12px;
      height: 12px;
      background-color: #4f46e5;
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      transition: transform 0.1s ease;
      mix-blend-mode: difference;
    }
  `}</style>;
};

export default Cursor;
