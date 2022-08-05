import React from "react";
import { DayPicker } from "react-day-picker";
import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import ko from "date-fns/locale/ko";
import "react-day-picker/dist/style.css";

const Calendar = ({ mode = "single", disabled = false }) =>
  // selected, mode, onSelect, disabled = false
  {
    // const [selected, setSelected] = React.useState();
    const [selectedRange, setSelectedRange] = React.useState();
    const [fromValue, setFromValue] = React.useState("");
    const [toValue, setToValue] = React.useState("");

    const [inputValue, setInputValue] = React.useState("");
    const [isPopperOpen, setIsPopperOpen] = React.useState(false);
    // const [range, setRange] = React.useState();

    const popperRef = React.useRef(null);
    const buttonRef = React.useRef(null);

    const [popperElement, setPopperElement] = React.useState(null);

    const handleFromChange = (e) => {
      setFromValue(e.target.value);
      const date = parse(e.target.value, "y-MM-dd", new Date());
      if (!isValid(date)) {
        return setSelectedRange({ from: undefined, to: undefined });
      }
      if (selectedRange?.to && isAfter(date, selectedRange.to)) {
        setSelectedRange({ from: selectedRange.to, to: date });
      } else {
        setSelectedRange({ from: date, to: selectedRange?.to });
      }
    };

    const handleToChange = (e) => {
      setToValue(e.target.value);
      const date = parse(e.target.value, "y-MM-dd", new Date());

      if (!isValid(date)) {
        return setSelectedRange({ from: selectedRange?.from, to: undefined });
      }
      if (selectedRange?.from && isBefore(date, selectedRange.from)) {
        setSelectedRange({ from: date, to: selectedRange.from });
      } else {
        setSelectedRange({ from: selectedRange?.from, to: date });
      }
    };

    const handleButtonClick = () => {
      setIsPopperOpen(!isPopperOpen);
    };

    const closePopper = () => {
      setIsPopperOpen(false);
      buttonRef?.current?.focus();
    };

    // const handleDaySelect = (date: Date) => {
    //   setSelected(date);
    //   if (date) {
    //     setInputValue(format(date, "y-MM-dd"));
    //     closePopper();
    //   } else {
    //     setInputValue("");
    //   }
    // };

    const handleRangeSelect = (range) => {
      setSelectedRange(range);
      if (range?.from) {
        setFromValue(format(range.from, "y-MM-dd"));
      } else {
        setFromValue("");
      }
      if (range?.to) {
        setToValue(format(range.to, "y-MM-dd"));
      } else {
        setToValue("");
      }
    };

    return (
      <div>
        <div ref={popperRef}>
          <button
            ref={buttonRef}
            type="button"
            className="pa2 bg-white button-reset ba"
            aria-label="Pick a date"
            onClick={handleButtonClick}
          >
            <span role="img" aria-label="calendar icon">
              📅
            </span>
          </button>
          <input
            type="text"
            placeholder={format(new Date(), "y-MM-dd")}
            value={fromValue}
            onChange={handleFromChange}
            className="input-reset pa2 ma2 bg-white black ba"
          />
          <input
            type="text"
            placeholder={format(new Date(), "y-MM-dd")}
            value={toValue}
            onChange={handleToChange}
            className="input-reset pa2 ma2 bg-white black ba"
          />
        </div>
        {isPopperOpen && (
          <DayPicker
            selected={selectedRange}
            mode={"range"}
            locale={ko}
            onSelect={handleRangeSelect}
            disabled={disabled}
          />
        )}
      </div>
    );
  };

export default React.memo(Calendar);
