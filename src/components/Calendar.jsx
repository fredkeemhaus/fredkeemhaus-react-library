import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

const Calendar = React.forwardRef((props, ref) => {
  const {
    selected,
    minDate = "",
    startDate = "",
    setStartDate,
    endDate = "",
    setEndDate,
    dateFormat,
    withPortal = false,
    showTimeSelect = false,
    timeFormat = false,
    timeIntervals = false,
    customInput = false,
    className,
  } = props;

  const onChange = React.useCallback(
    (date) => {
      if (!ref.current.props.endDate) {
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    },
    [ref, setEndDate, setStartDate]
  );

  React.useEffect(() => {
    onChange(startDate);
  }, [onChange, ref, startDate]);

  return (
    <Container>
      <DatePicker
        className={className}
        customInput={customInput}
        selected={selected}
        startDate={startDate}
        endDate={endDate}
        ref={ref}
        onChange={(date) => onChange(date)}
        minDate={minDate}
        dateFormat={dateFormat}
        withPortal={withPortal}
        locale={ko}
        showTimeSelect={showTimeSelect}
        timeFormat={timeFormat}
        timeIntervals={timeIntervals}
      />
    </Container>
  );
});

const Container = styled.div`
  .react-datepicker-wrapper {
    width: auto;
  }
`;

export default React.memo(Calendar);
