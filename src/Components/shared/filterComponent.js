import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const FilterComponent = ({
  label,
  isOpen,
  selectedItems,
  data,
  onToggle,
  onItemChange,
}) => {
  return (
    <div>
      <button
        className="menu-div d-flex justify-content-between px-3 align-items-center"
        onClick={() => onToggle(!isOpen)}
      >
        {label} {selectedItems.length ? "*" : ""} <IoIosArrowDown />
      </button>
      {isOpen && (
        <div>
          {Object.entries(data).map(([item, count]) => (
            <div key={item}>
              <label className="d-flex my-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={() => onItemChange(item)}
                />
                <div className="mt-1 px-2 d-flex justify-content-between">
                  {item} ({count})
                </div>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const FilterRangeComponent = ({
  label,
  isOpen,
  min,
  max,
  onToggle,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <div>
      <button
        className="menu-div d-flex justify-content-between px-3 align-items-center"
        onClick={() => onToggle(!isOpen)}
      >
        {label} {min > 0 || max > 0 ? "*" : ""} <IoIosArrowDown />
      </button>
      {isOpen && (
        <div className="px-4 mt-2">
          <div className="d-flex justify-content-between">
            <div className="input-div">
              <input
                className="a-input text-center"
                placeholder="Min"
                type="number"
                name="min"
                value={min}
                onChange={onMinChange}
              />
            </div>
            <div className="input-n-div px-2 d-flex justify-content-center align-items-center">
              to
            </div>
            <div className="input-div">
              <input
                className="a-input text-center"
                placeholder="Max"
                type="number"
                name="max"
                value={max}
                onChange={onMaxChange}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
