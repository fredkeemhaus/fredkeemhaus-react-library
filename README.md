# Installation

The package can be installed via npm:

```
npm i fredkeemhaus-react-library
```

Or via yarn:

```
yarn add fredkeemhaus-react-library
```

It is based on react-date picker. Therefore, the usage is the same.

```jsx
import React from "react";
import { Calendar } from "fredkeemhaus-react-library";

function App() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState();

  const onChangeStartDate = (date) => setStartDate(date);
  const onChangeEndDate = React.useCallback((date) => setEndDate(date), []);

  React.useEffect(() => {
    onChangeEndDate(startDate);
  }, [onChangeEndDate, startDate]);

  return (
    <div>
      <Calendar
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
```
