import axios from "axios";

export async function CreateOrder(data) {
  //Move to new file
  const body = {
    app_user: data.userName,
    item: "[]",
    price: data.totalAmount,
  };
  let responseData = await axios
    .post("http://localhost:5000/order", body)
    .then((res) => res.data);
  return responseData;
}

export async function CheckOrderStatus(orderId) {
  let checkOrderStatus = setInterval(async () => {
    await axios.get(`http://localhost:5000/order/${orderId}`).then((res) => {
      if (res.data.status === "success") {
        alert("Thanh toan thanh cong");
        clearInterval(checkOrderStatus);
      }
    });
  }, 3000);
  return;
}

export async function SearchOrders(data) {
  const params = {
    limit: 100,
    offset: 0,
    from_date: data.fromDate,
    to_date: data.toDate,
    status: data.status,
  };

  const res = await axios.get("http://localhost:5000/orders/search", {
    params,
  });
  return res.data;
}
