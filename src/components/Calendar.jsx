import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

const Calendar = ({
  minDate = "",
  startDate,
  startDateLabel = "",
  endDate,
  endDateLabel = "",
  onChangeStartDate,
  onChangeEndDate,
  dateFormat,
  showTimeSelect = false,
  timeFormat = false,
  timeIntervals = false,
}) => {
  return (
    <Container>
      {startDateLabel && (
        <div>
          <p>{startDateLabel}</p>
        </div>
      )}
      <DatePicker
        selected={startDate}
        onChange={(date) => onChangeStartDate(date)}
        minDate={minDate}
        startDate={startDate}
        dateFormat={dateFormat}
        withPortal
        locale={ko}
        showTimeSelect={showTimeSelect}
        timeFormat={timeFormat}
        timeIntervals={timeIntervals}
      />
      {endDate && (
        <React.Fragment>
          <div>
            <p>{endDateLabel || "-"}</p>
          </div>
          <DatePicker
            selected={endDate}
            onChange={(date) => onChangeEndDate(date)}
            minDate={startDate}
            endDate={endDate}
            dateFormat={dateFormat}
            withPortal
            locale={ko}
          />
        </React.Fragment>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default React.memo(Calendar);
