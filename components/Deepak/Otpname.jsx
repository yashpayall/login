import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

export default function Otpname() {
  const [otp, setOtp] = useState("");
  const [style, setStyle] = useState({
    border: "1px solid #666476",
    height: "50px",
    width: "50px",
    borderRadius: "15px",
  });

  useEffect(() => {
    if (
      window != undefined &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      setStyle({
        border: "1px solid #666476",
        height: "50px",
        maxWidth: "50px",
        width: "100%",
        borderRadius: "10px",
        fontSize: "1.5rem",
      });
    }
  }, []);

  let containerStyle = {
    gap: "10px",
  };

  // Media query for mobile screens (adjust the max-width as needed)

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      className=""
      renderSeparator={<span></span>}
      containerStyle={containerStyle}
      inputStyle={style}
      renderInput={(props) => <input className="" {...props} />}
    />
  );
}
