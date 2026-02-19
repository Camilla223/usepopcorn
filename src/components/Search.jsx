import { useRef } from "react";
import { useKey } from "../hooks/useKey";

function Search({ query, handleChange }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    handleChange("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => handleChange(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
