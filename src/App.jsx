import { useEffect, useState } from "react";
function TitleUpdate() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.title = inputValue || "React App";
  }, [inputValue]);
  return (
    <input
      type="text"
      placeholder="Type Something"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
export default TitleUpdate;

//This Will used or gives output like if anything you made changes it will shows on title
