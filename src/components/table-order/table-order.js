import React, { useState } from "react";
import "./table-order.css";

export function TableOrders(props) {
  const convertTime = (timeIUnix) => {
    var time = new Date(timeIUnix);
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      time.getDate() +
      "/" +
      (time.getMonth() + 1) +
      "/" +
      time.getFullYear() +
      "  " +
      strTime
    );
  };
  return (
    <div className="table">
      <table>
        <tr>
          <th>User</th>
          <th>Trans Id</th>
          <th>Zp Trans Token</th>
          <th>Detail Item</th>
          <th>Create At</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
        {props.data.data
          ? props.data.data.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{order.app_user}</td>
                  <td>{order.app_trans_id}</td>
                  <td>{order.zp_trans_token}</td>
                  <td></td>
                  <td>{convertTime(order.created_at)}</td>
                  <td>{order.price}</td>
                  <td>{order.status}</td>
                </tr>
              );
            })
          : ""}
      </table>
      <div className="total">
        <h5>Total: {props.data.total}</h5>
      </div>
    </div>
  );
}
