import React, { useState } from "react";
import { Item } from "../../components/item/item";
import Payment from "../../components/payment/payment";
import "./market.css";

export default function Market() {
  const items = [
    {
      Id: "1",
      Name: "Macbook",
      Desc: "macbook pro 13 inch",
      CreateAt: 1661498415000,
      UpdateAt: 1661498415000,
      Price: 36000,
      Image: "",
    },
    {
      Id: "2",
      Name: "Iphone",
      Desc: "Iphone 13",
      CreateAt: 1661498529000,
      UpdateAt: 1661498529000,
      Price: 21000,
      Image: "",
    },
    {
      Id: "3",
      Name: "Imac",
      Desc: "Imac pro 2022",
      CreateAt: 1661498614000,
      UpdateAt: 1661498614000,
      Price: 42000,
      Image: "",
    },
    {
      Id: "4",
      Name: "Applewatch",
      Desc: "applewatch seri 6",
      CreateAt: 1661498655000,
      UpdateAt: 1661498655000,
      Price: 8000,
      Image: "",
    },
    {
      Id: "5",
      Name: "Airpod",
      Desc: "airpod 3",
      CreateAt: 1661498697000,
      UpdateAt: 1661498697000,
      Price: 4500,
      Image: "",
    },
    {
      Id: "6",
      Name: "Airtag",
      Desc: "air tag 1",
      CreateAt: 1661580461000,
      UpdateAt: 1661580461000,
      Price: 900,
      Image: "",
    },
    {
      Id: "7",
      Name: "Macpro",
      Desc: "Macpro",
      CreateAt: 1661498697000,
      UpdateAt: 1661498697000,
      Price: 125000,
      Image: "",
    },
    {
      Id: "8",
      Name: "MacMini",
      Desc: "Macmini",
      CreateAt: 1661580592000,
      UpdateAt: 1661580592000,
      Price: 28000,
      Image: "",
    },
    {
      Id: "9",
      Name: "Macos",
      Desc: "Mac os",
      CreateAt: 1661580592000,
      UpdateAt: 1661580592000,
      Price: 3000,
      Image: "",
    },
    {
      Id: "10",
      Name: "MacAir",
      Desc: "airpod 3",
      CreateAt: 1661498697000,
      UpdateAt: 1661498697000,
      Price: 25000,
      Image: "",
    },
  ];
  const [totalAmount, setTotalAmount] = useState(0);
  const [btnPopup, setBtnPopup] = useState(false);

  const fetchData = (item, isPlus) => {
    if (isPlus) {
      setTotalAmount(totalAmount + item.Price);
    } else {
      setTotalAmount(totalAmount - item.Price);
    }
  };
  let itemList = items.map((item) => {
    return <Item {...item} calback={fetchData}></Item>;
  });

  const purchaseClicked = () => {
    setBtnPopup(true);
  };
  const closePopup = () => {
    setBtnPopup(false);
    setTotalAmount(0);
  };
  return (
    <div>
      <div className="marketContainer">
        {!btnPopup ? (
          <div className="marketInnerContainer">
            {itemList}
            <h3 className="btnPurchase">
              <button onClick={purchaseClicked}>Thanh Toán</button>:{" "}
              {totalAmount}
            </h3>
          </div>
        ) : (
          <Payment
            isOpen={btnPopup}
            setTrigger={closePopup}
            totalAmount={totalAmount}
          ></Payment>
        )}
      </div>
    </div>
  );
}
