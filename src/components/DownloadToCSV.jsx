import React from "react";
import { CSVLink } from "react-csv";

const DownloadToCSV = ({ className, buttonName, filename, data, headers }) => {
  return (
    <CSVLink
      className={className}
      data={data}
      filename={filename}
      headers={headers}
      target={"_blank"}
    >
      {buttonName}
    </CSVLink>
  );
};

export default DownloadToCSV;
