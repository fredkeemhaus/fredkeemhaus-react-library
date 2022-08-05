# TOC

1. [Installaction](#installation)
2. [Functions](#functions)

# Installation

The package can be installed via npm:

```
npm i fredkeemhaus-react-library
```

Or via yarn:

```
yarn add fredkeemhaus-react-library
```

# Functions

- [Calendar (single, multiple)](#calendar)
- [Download to CSV](#cownload-to-csv)

# Calendar

It is based on react-date picker. Therefore, the usage is the same.

## Usage

### Single Calendar

```jsx
import React from "react";
import { Calendar } from "fredkeemhaus-react-library";

function App() {
  const [startDate, setStartDate] = React.useState(() => new Date());

  const startRef = React.useRef(null);
  return (
    <div>
      <Calendar
        selected={startDate}
        startDate={startDate}
        setStartDate={setStartDate}
        ref={startRef}
        dateFormat={"yyyy-MM-dd"}
        minDate={new Date()}
      />
    </div>
  );
}

export default App;
```

### Multiple Calendar

```jsx
import React from "react";
import { Calendar } from "fredkeemhaus-react-library";

function App() {
  const [startDate, setStartDate] = React.useState(() => new Date());
  const [endDate, setEndDate] = React.useState(startDate);

  const startRef = React.useRef(null);
  const endRef = React.useRef(null);

  return (
    <div>
      <Calendar
        selected={startDate}
        startDate={startDate}
        setStartDate={setStartDate}
        ref={startRef}
        dateFormat={"yyyy-MM-dd"}
        minDate={new Date()}
      />
      <Calendar
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
```

# Download to CSV

It is based on ReactCSV. Therefore, the usage is the same.

## Usage

```jsx
import React from "react";
import { DownloadToCSV } from "fredkeemhaus-react-library";

function App() {
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
    <DownloadToCSV
      buttonName={"Download me"}
      filename={"random.csv"}
      headers={headers}
      data={data}
    />
  );
}

export default App;
```
