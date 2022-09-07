import DateTimePicker from "react-datetime-picker";
import React, { useState } from "react";
import "./search-bar.css";

export function SearchBar(props) {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [status, setStatus] = useState("");

  const onChangeStatus = (e) => {
    const selected = e.target.value;
    setStatus(selected);
  };

  const onSearch = () => {
    const fromDateUnix = Math.floor(new Date(fromDate).getTime());
    const toDateUnix = Math.floor(new Date(toDate).getTime());
    const params = {
      fromDate: fromDateUnix,
      toDate: toDateUnix,
      status,
    };
    props.onSearch(params);
  };
  return (
    <div className="searchBar">
      <div className="dateTime">
        <div>
          <p>From Date</p>
          <div className="boxDate">
            <DateTimePicker onChange={setFromDate} value={fromDate} />
          </div>
        </div>
        <div>
          <p>To Date</p>
          <div className="boxDate">
            <DateTimePicker onChange={setToDate} value={toDate} />
          </div>
        </div>
      </div>
      <div className="status">
        <div>
          <p>Status</p>
        </div>
        <div>
          <select value={status} onChange={(e) => onChangeStatus(e)}>
            <option value="" selected>
              All
            </option>
            <option value="success">Success</option>
            <option value="new">New</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>
      <div className="btnSearch">
        <div>
          <p>Search</p>
        </div>
        <div>
          <button onClick={onSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}
