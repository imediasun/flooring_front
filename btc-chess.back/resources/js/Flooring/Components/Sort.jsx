import { useEffect, useRef, useState } from "react";
import SvgIcon from "./SvgIcon";

export default function SortTrigger({data, className = ""}) {

  const [openDrop, setOpenDrop] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const DropRef = useRef(null)

  const toggleDrop = () => {
    setOpenDrop((prevIndex) => !prevIndex)
  };

  const handleClickOutside = (event) => {
    if (DropRef.current && !DropRef.current.contains(event.target)) {
      setOpenDrop(false)
    }
  }

  const sortClick = (new_value) => {
    setSortValue(new_value)
    setOpenDrop(false)
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [])

  return (
    <div className={`sort-dropdown ${className} ${openDrop ? "_active" : ""}`} ref={DropRef}>
      <button type="button" aria-label="sort trigger btn" className='sort-dropdown__trigger' onClick={toggleDrop}>
        <span className='value'>Sort by</span>
        <span className='arrow'><SvgIcon name={"arrow-right-down"}/></span>
        <span className='settings'><SvgIcon name={"sort"}/></span>
      </button>
      <div className='sort-dropdown__menu'>
        <div className='sort-dropdown__menu-inner'>
          <button type='button' aria-label="sort btn" className={`sort-dropdown__btn ${sortValue == "" ? "_active" : ""}`} onClick={() => sortClick("")}>Sort 1</button>
          <button type='button' aria-label="sort btn" className={`sort-dropdown__btn ${sortValue == "Sort 2" ? "_active" : ""}`} onClick={() => sortClick("Sort 2")}>Sort 2</button>
          <button type='button' aria-label="sort btn" className={`sort-dropdown__btn ${sortValue == "Sort 3" ? "_active" : ""}`} onClick={() => sortClick("Sort 4")}>Sort 4</button>
          <button type='button' aria-label="sort btn" className={`sort-dropdown__btn ${sortValue == "Sort 4" ? "_active" : ""}`} onClick={() => sortClick("Sort 3")}>Sort 3</button>
        </div>
      </div>
    </div>
  )
}
