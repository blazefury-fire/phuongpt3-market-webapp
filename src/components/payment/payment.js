import React, { useState } from "react";
import CountdownTimer from "../../pages/countdownTimer";
import { CreateOrder, CheckOrderStatus } from "../../service/service";
import "./payment.css";
import { ZLQRCode } from "../qr-code/qr-code";

export default function Payment(props) {
  const [userName, setUserName] = useState("");
  const [isOpenQRCode, setIsOpenQRCode] = useState(false);
  const [orderUrl, setOrderUrl] = useState("");
  const timeExpried = 15 * 60 * 990;
  const timeNow = new Date().getTime();

  const dateTimeExpried = timeNow + timeExpried;

  const onClose = () => {
    props.setTrigger();
  };

  const onClickZLGateway = async () => {
    const data = {
      userName,
      totalAmount: props.totalAmount,
    };
    const responseData = await CreateOrder(data);
    if (responseData.return_code !== 1) {
      alert("Vui long thu lai!");
    } else {
      window.open(responseData.order_url, "_blank");
      await CheckOrderStatus(responseData.order_id);
    }
  };

  const onClickQRCode = async () => {
    const data = {
      userName,
      totalAmount: props.totalAmount,
    };
    const responseData = await CreateOrder(data);
    if (responseData.return_code !== 1) {
      alert("Vui long thu lai!");
    } else {
      setIsOpenQRCode(true);
      setOrderUrl(responseData.order_url);
      await CheckOrderStatus(responseData.order_id);
    }
  };

  return props.isOpen ? (
    <div className="popup">
      <div>
        <div className="contentInner">
          <p>Nhập tên của bạn: </p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div>
          <p>Tổng giá trị đơn hàng là: {props.totalAmount}</p>
        </div>
        <div>
          <p>
            Vui lòng thanh toán bằng:{" "}
            <button onClick={onClickQRCode}>QR Code</button> hoặc{" "}
            <button onClick={onClickZLGateway}>Zalogateway</button>
          </p>
        </div>
      </div>
      <div>
        <ZLQRCode isOpen={isOpenQRCode} value={orderUrl}></ZLQRCode>

        {isOpenQRCode ? <CountdownTimer targetTime={dateTimeExpried} /> : ""}
      </div>
      <div>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  ) : (
    ""
  );
}
