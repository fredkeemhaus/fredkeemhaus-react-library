import React from "react";
import Calendar from "./components/Calendar";
// import { Calendar } from "fredkeemhaus-react-library";

function App() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState();

  const onChangeStartDate = (date) => setStartDate(date);
  const onChangeEndDate = React.useCallback((date) => setEndDate(date), []);

  React.useEffect(() => {
    onChangeEndDate(startDate);
  }, [onChangeEndDate, startDate]);

  console.log(startDate, endDate);

  return (
    <div>
      <Calendar
        className="form-input text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 p-2 border border-slate-400 rounded"
        startDateLabel={""}
        startDate={startDate}
        endDate={endDate}
        onChangeEndDate={onChangeEndDate}
        onChangeStartDate={onChangeStartDate}
        dateFormat={"yyyy-MM-dd"}
        minDate={startDate}
      />
    </div>
  );
}

export default App;
