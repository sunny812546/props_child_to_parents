import React, { useEffect, useState } from "react";

const Child = ({ getTitle }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    getTitle(title);
  }, [title]);

  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
};

export default Child;
