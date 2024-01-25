import React from 'react'
import Image from 'next/image'
import { ArrowIcon, EmailIcon, EnglishlogoIcon, GoogleIcon, NameIcon, NumberIcon, PasswordIcon } from '../Icon'
import Link from 'next/link'

const Ankit3 = () => {
    return (
        <>
            <div className='max-xl:px-10  m-auto bg-[url("/img/starbg.png")] bg-no-repeat bg-cover bg-center items-center py-[66px] '>
                <div className=" flex justify-center py-[26px] sm:hidden">
                    <Image src="/img/kismat.png" width={126} height={79} />
                </div>
                <div className="max-w-[1030px] w-full m-auto py-[33px]  sm:py-[66px] bg-white  flex flex-col items-center justify-center">
                    <div className="max-w-[460px] w-full">
                        <div className="max-sm:hidden flex justify-center">
                            <EnglishlogoIcon />
                        </div>
                        <div className="mt-[60px]">
                            <p className="text-[16px] font-bold text-center text-[#25232F] sm:text-[32px] sm:font-medium leading-[38px] font-urban">
                                How would you like to login?
                            </p>
                        </div>
                        <div className=" flex justify-center  ">
                            <div className="max-w-[460px]  w-full px-2">
                                <div className="group">
                                    <div className="max-w-[460px]  w-full   h-[54px] border border-[#DBDBDB] rounded-[53px] mt-[32px] flex justify-center items-center gap-[15px] group-hover:bg-[#30237B] ">
                                        <GoogleIcon />
                                        <p className="text-[16px] sm:text-[20px] font-medium font-urban text-[#25232F] leading-normal group-hover:text-[#fff]">
                                            Continue with Google
                                        </p>
                                    </div>
                                </div>
                                <div className="max-w-[460px] w-full  mt-[37px] flex justify-center border border-[#DBDBDB] relative">
                                    <p className="absolute top-[-14px] text-center bg-[#fff]">
                                        OR
                                    </p>
                                </div>

                                <div className="max-w-[460px] w-full    h-[48px] border border-[#DBDBDB] rounded-[10px] mt-[27px] flex items-center px-[20px] justify-between">
                                    <input
                                        className="outline-none"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                    <NameIcon />
                                </div>
                                <div className="max-w-[460px]     h-[48px] border border-[#DBDBDB] rounded-[10px] mt-[16px] flex items-center px-[20px] justify-between">
                                    <input
                                        className="outline-none"
                                        type="text"
                                        placeholder="Enter your email"
                                    />
                                    <EmailIcon />
                                </div>
                                <div className="max-w-[460px]     h-[48px] border border-[#DBDBDB] rounded-[10px] mt-[16px] flex items-center px-[20px] justify-between">
                                    <input
                                        className="outline-none"
                                        type="text"
                                        placeholder="Enter your number"
                                    />
                                    <NumberIcon />
                                </div>
                                <div className="max-w-[460px]     h-[48px] border border-[#DBDBDB] rounded-[10px] mt-[16px] flex items-center px-[20px] justify-between">
                                    <input
                                        className="outline-none"
                                        type="text"
                                        placeholder="Password"
                                    />
                                    <PasswordIcon />
                                </div>
                                <div className="max-w-[460px]  w-full    h-[48px] border border-[#DBDBDB] rounded-[10px] mt-[16px] flex items-center px-[20px] justify-between">
                                    <input
                                        className="outline-none"
                                        type="text"
                                        placeholder="Confirm Password"
                                    />
                                    <PasswordIcon />
                                </div>

                                <div className="group">
                                    <Link href="/Sourabh3" className="max-w-[460px]     h-[54px] border border-[#DBDBDB] rounded-[53px] mt-[32px] flex justify-center items-center gap-[15px] group-hover:bg-[#30237B] ">
                                        <p className="text-[16px] sm:text-[20px] font-medium font-urban text-[#25232F] leading-normal group-hover:text-[#fff]">
                                            Login
                                        </p>
                                        <ArrowIcon />
                                    </Link>
                                </div>
                                <div>
                                    <p className=" text-[16px] font-bold text-[#666476] sm:text-[24px] sm:font-medium font-urban text-center mt-[40px]">
                                        Don’t have an account{" "}
                                        <span className="text-[#30237B] underline">login here</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ankit3