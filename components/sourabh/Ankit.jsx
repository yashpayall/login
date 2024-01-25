import Image from 'next/image'
import React from 'react'
import { ArrowIcon, CallerIcon, EnglishlogoIcon } from '../Icon'
import Link from 'next/link'

const Ankit = () => {
    return (
        <>
            {/* <div className='bg-[url("/img/starbg.png")] bg-cover bg-center py-[66px] max-xl:px-3 bg-[#EEECF8]'>
                <div className='max-w-[1030px] h-[892px] pb-[61px] w-full bg-white px-3 mx-auto rounded-[8px] shadow-[2.17687px_2.17687px_13.06122px_0px_rgba(0,0,0,0.12)]'>
                    <div className='mx-auto pt-[48px] flex justify-center'>
                        <EnglishlogoIcon />
                    </div>
                    <div className='flex justify-between max-w-[672px] w-full mx-auto pt-[48px]'>
                        <div className='w-full flex items-center justify-center'>
                            <div className='max-w-[74px] max-sm:max-w-[32px] max-sm:max-h-[32px] w-full h-[74px] bg-[#30237B] rounded-full'><p className='text-white flex justify-center text-center font-Urbanist font-bold text-[36px] pt-[8px] max-sm:text-[15px]'>1</p></div>
                            <div className='bg-[#30237B] max-[146px] w-full h-[2px] ms-[45px] mr-[15px] max-sm:ml-[19px] max-sm:mr-[11px] max-sm:max-w-[64px]'></div>
                        </div>
                        <div className='w-full flex items-center justify-center '>
                            <div className='max-w-[74px] max-sm:max-w-[32px] max-sm:max-h-[32px] w-full h-[74px] bg-[#EEECF8] rounded-full'><p className='text-[#30237B] flex justify-center text-center font-Urbanist font-bold text-[36px] pt-[8px] max-sm:text-[15px]'>2</p></div>
                            <div className='bg-[#30237B] max-[146px] w-full h-[2px] ms-[45px] mr-[15px] max-sm:ml-[19px] max-sm:mr-[11px] max-sm:max-w-[64px] justify-center'></div>
                        </div>
                        <div className='max-w-[74px] max-sm:max-w-[32px] max-sm:max-h-[32px]  w-full h-[74px] bg-[#EEECF8] rounded-full'><p className='text-[#30237B] flex justify-center text-center font-Urbanist font-bold text-[36px] max-sm:text-[15px] pt-[8px]'>3</p></div>
                    </div>
                </div>
            </div> */}
            <div className='bg-[url("/img/starbg.png")] bg-cover bg-center py-[66px] max-xl:px-[16px] bg-[#EEECF8]'>
                <div className=" flex justify-center py-[26px] sm:hidden">
                    <Image src="/img/kismat.png" width={126} height={79} />
                </div>
                <div className='max-w-[1030px] h-[892px] pb-[61px] w-full bg-white px-3 mx-auto
                rounded-[8px]
                shadow-[2.17687px_2.17687px_13.06122px_0px_rgba(0,0,0,0.12)]'>
                    <div className='max-sm:hidden pt-[48px] flex justify-center'>
                        <EnglishlogoIcon />
                    </div>
                    <div className="flex  pt-[48px] justify-center w-full">
                        <div className="">
                            <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[#30237B] w-[50px] h-[50px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#EEECF8] font-[700] font-Urbanist">
                                1
                            </p>
                            <p className="text-[16px] w-[120px] sm:w-[155px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                                OTP verification
                            </p>
                        </div>
                        <div className="bg-[#30237B] max-w-[136px] w-full h-[1px] mt-[40px]"></div>
                        <div className="ms-[20px]">
                            <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[white30237B] w-[50px] h-[50px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#EEECF8] font-[700] font-Urbanist">
                                2
                            </p>
                            <p className="text-[16px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                                Questions
                            </p>
                        </div>
                        <div className="bg-[#30237B] max-w-[136px] w-full h-[1px] mt-[40px]"></div>

                        <div className="ms-[20px]">
                            <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[#fff] w-[50px] h-[50px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#30237B] font-[700] font-Urbanist">
                                3
                            </p>
                            <p className="text-[16px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                                Questions
                            </p>
                        </div>
                    </div>
                    <h1 className='font-Urbanist font-medium text-[#25232F] text-[32px] text-center mt-[68px]'>Enter your phone number</h1>
                    <p className='text-center text-[#666476] font-Inter text-[24px] font-normal'>A 6 digit code will be sent</p>
                    <div className='mx-auto mt-[40px] flex justify-center'>
                        <input type="number" placeholder='Enter your Number' className='max-w-[460px] outline-none w-full h-[48px] border-[1.6px] border-[#CBD5E1] rounded-[10px] mt-2 pl-[20px]' />
                        <div className='relative'>
                            <div className='absolute top-[22px] right-[20px]'><CallerIcon /></div>
                        </div>
                    </div>
                    <Link href="/Sourabh4" className='flex justify-center'>
                        <button className='flex max-w-[460px] w-full mt-[31px] justify-center items-center gap-[8px] bg-[#EEECF8] rounded-[52px] text-[#30237B] text-[20px] font-medium py-2 font-Inter hover:bg-[#2B1E72] group hover:text-white'>
                            Log In
                            <ArrowIcon />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Ankit