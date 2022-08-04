import React from "react";
// import Calendar from "./components/Calendar";
import { Calendar } from "fredkeemhaus-react-library";

function App() {
  const [range, setRange] = React.useState();

  return (
    <div>
      <Calendar selected={range} onSelect={setRange} mode={"range"} />
    </div>
  );
}

export default App;
