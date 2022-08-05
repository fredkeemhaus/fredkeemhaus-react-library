import React from "react";
import { Calendar, DownloadToCSV } from "fredkeemhaus-react-library";

function App() {
  const [startDate, setStartDate] = React.useState(() => new Date());
  const [endDate, setEndDate] = React.useState(startDate);

  const startRef = React.useRef(null);
  const endRef = React.useRef(null);

  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];

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
      <DownloadToCSV
        buttonName={"download me"}
        filename={"CJLogistics"}
        headers={headers}
        data={data}
      />
    </div>
  );
}

export default App;
