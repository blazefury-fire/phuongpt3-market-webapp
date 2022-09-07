import React from "react";
import QRCode from "qrcode.react";

export function ZLQRCode(props) {
  return props.isOpen ? (
    <QRCode
      id="qrcode"
      value={props.value}
      size={290}
      level={"H"}
      includeMargin={true}
    />
  ) : (
    ""
  );
}
