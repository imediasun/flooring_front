import { useState, useRef, useEffect } from "react";
import SvgIcon from "./SvgIcon";
import React, { forwardRef } from "react";

export const SelectField = forwardRef(
  (
    {
      value = "",
      register,
      holder,
      items,
      onChangeForm,
      ...props
    },
    ref
  ) => {
    const selectRef = useRef(null);
    
    const [isOpened, setIsOpened] = useState(false);

    const toggle = () => setIsOpened((prev) => !prev);
    const close = () => setIsOpened(false)

    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        close()
      }
    }

    const onOptionClickHandle = (newValue) => {
      close();
      onChangeForm && onChangeForm(register.name, newValue);
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      }
    }, [])

    return (
      <div
        ref={selectRef}
        className={`form-field__select ${isOpened ? "_opened" : ""}`}
      >
        <input
          type="hidden"
          value={value}
          {...register}
          {...props}
        />
        <button
          className={`form-field__select-toggler`}
          type="button"
          aria-label="Select"
          onClick={toggle}
        >
          {value ? (
            <span className="form-field__select-toggler-text">{value}</span>
          ) : (
            <span className="form-field__select-toggler-holder">{holder}</span>
          )}
          <SvgIcon name="arrow" />
        </button>
        <ul className="form-field__select-list">
          {items.map((item) => (
            <li
              key={item}
              className={`form-field__select-list-item ${item === value ? "_active" : ""}`}
            >
              <button
                className="form-field__select-list-btn"
                type="button"
                aria-label={item}
                onClick={() => onOptionClickHandle(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
)