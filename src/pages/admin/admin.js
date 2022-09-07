import React, { useState } from "react";
import "./admin.css";
import { SearchOrders } from "../../service/service";
import { SearchBar } from "../../components/search-bar/search-bar";
import {TableOrders} from "../../components/table-order/table-order";

export default function Admin() {
  const [listOrders, setListOrders] = useState({
    data: [],
    total: 0
  });
  const getListOrders = async (params) => {
    const results = await SearchOrders(params);
    setListOrders(results)
  };

  return (
    <div>
      <SearchBar onSearch={getListOrders}></SearchBar>
      <TableOrders data={listOrders}></TableOrders>
    </div>
  );
}
