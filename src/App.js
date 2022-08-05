import { parseISO } from "date-fns";
import React from "react";
import Calendar from "./components/Calendar";
// import { Calendar } from "fredkeemhaus-react-library";

function App() {
  const [startDate, setStartDate] = React.useState(() => new Date());
  const [endDate, setEndDate] = React.useState(startDate);

  const startRef = React.useRef(null);
  const endRef = React.useRef(null);

  return (
    <div>
      <Calendar
        className="form-input text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 p-2 border border-slate-400 rounded"
        selected={startDate}
        startDate={startDate}
        setStartDate={setStartDate}
        ref={startRef}
        dateFormat={"yyyy-MM-dd"}
        minDate={new Date()}
      />
      <Calendar
        className="form-input text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 p-2 border border-slate-400 rounded"
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        setEndDate={setEndDate}
        ref={endRef}
        dateFormat={"yyyy-MM-dd"}
        minDate={startDate}
      />
    </div>
  );
}

export default App;
