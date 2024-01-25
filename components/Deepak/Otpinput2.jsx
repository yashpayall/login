import React, { useState, useRef } from "react";
import Image from "next/image";
import { EroIcon } from "./Icon";
import Otpname from "./Otpname";
import { ArrowIcon, EnglishlogoIcon } from "../Icon";
import Link from "next/link";
const Otpinput2 = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numerical input

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    // Move focus to the next input field
    if (index < length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }

    // Notify parent component about the OTP change
    const otpValue = otp.join("");
    onChange(otpValue);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move focus to the previous input field
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="bg-[url('/img/starbg.png')] bg-[#EEECF8] py-[100px] px-[16px]">
        <div className='mx-auto  flex justify-center'>
          <Image src="/img/kismat.png" width={126} height={79} className='sm:hidden pb-[17px]' />
        </div>
        <div className="w-full max-w-[1024px] rounded-[15px] shadow-[2px_2px_10px_3p_rgba(0,0,0,0.05);]
             bg-white p-[30px_24px] md:p-[40px_74px] lg:p-[150px_200px]  mx-auto  flex flex-col justify-center items-center shadow-[2.17687px_2.17687px_13.06122px_0px,rgba(0,0,0,0.12)]">
          <Image src="/img/otp 1.png" width={226} height={237} className="max-sm:hidden" />
          <div className="flex  pt-[48px] justify-center w-full">
            <div className="">
              <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[#EEECF8] w-[33px] h-[33px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#30237B] font-[700] font-Urbanist">
                1
              </p>
              <p className="text-[16px] w-[120px] sm:w-[155px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                OTP verification
              </p>
            </div>
            <div className="bg-[#30237B] max-w-[136px] w-full h-[1px]  mt-[20px] sm:mt-[40px]"></div>
            <div className="ms-[20px]">
              <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[white30237B] w-[33px] h-[33px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#EEECF8] font-[700] font-Urbanist">
                2
              </p>
              <p className="text-[16px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                Questions
              </p>
            </div>
          </div>
          <p className="md:text-[34px] text-[26px] font-[500]  font-Urbanist mt-[51px]">
            Enter your OTP
          </p>
          <p className="w-full  text-[#666476] text-center font-Inter md:text-[26px] text-[20px] font-[400] heading-[206%] ">
            A 6 digit code has been sent to mail and number
          </p>
          <div className="flex items-center w-full max-w-[582px] justify-between mt-[31px]">
            <p className=" text-[#666476] text-center text-[16px] sm:text-[24px] font-[500]">
              Email OTP (Tutor23@gmail.com){" "}
            </p>
            <p className=" text-[#30237B]   max-sm:ms-auto border-b-[2px] border-[#30237B] text-center text-[16px] sm:text-[24px] font-[400]">
              change
            </p>
          </div>
          <div className="mt-[16px]">
            {" "}
            <Otpname />
          </div>

          <Link href="/englishyaari5" className="w-full flex justify-center">
            <button className='flex max-w-[460px] w-full mt-[31px] justify-center items-center gap-[8px] bg-[#EEECF8] rounded-[52px] text-[#30237B] text-[20px] font-medium py-2 font-Inter hover:bg-[#2B1E72] group hover:text-white'>
              Login
              <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Otpinput2;
