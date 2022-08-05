import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

const Calendar = ({
  minDate = "",
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  showTimeSelect = false,
  timeFormat = false,
  timeIntervals = false,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => onChangeStartDate(date)}
        minDate={minDate}
        startDate={startDate}
        dateFormat="yyyy-MM-dd"
        withPortal
        locale={ko}
        showTimeSelect={showTimeSelect}
        timeFormat={timeFormat}
        timeIntervals={timeIntervals}
      />
      {endDate && (
        <DatePicker
          selected={endDate}
          onChange={(date) => onChangeEndDate(date)}
          minDate={startDate}
          endDate={endDate}
          dateFormat="yyyy-MM-dd"
          withPortal
          locale={ko}
        />
      )}
    </div>
  );
};
export default React.memo(Calendar);
