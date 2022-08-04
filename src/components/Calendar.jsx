import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import ko from "date-fns/locale/ko";

// interface ICalendarProps {}

const Calendar = ({ selected, mode, onSelect, disabled = false }) => {
  return (
    <DayPicker
      selected={selected}
      mode={mode}
      locale={ko}
      onSelect={onSelect}
      disabled={disabled}
    />
  );
};

export default React.memo(Calendar);
