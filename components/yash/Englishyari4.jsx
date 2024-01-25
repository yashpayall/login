import React, { useState } from 'react'
import { Arow2Icon, ArrowIcon, ArrowIcon2, EnglishlogoIcon } from '../Icon'
import Link from 'next/link'
import Image from 'next/image'

const Englishyari4 = () => {
    return (
        <>
            <div className=' bg-[url("/img/starbg.png")] h-[100vh] overflow-auto justify-center items-center bg-cover bg-center mx-auto px-[16px] py-[66px] bg-[#EEECF8]'>
                <div className='mx-auto  flex justify-center'>
                    <Image src="/img/kismat.png" width={126} height={79} className='sm:hidden px-[16px] pb-[17px]' />
                </div>
                <div className='mb-[41px] pb-[61px] max-w-[1030px] w-full bg-white 
                rounded-[8px]
                shadow-[2.17687px_2.17687px_13.06122px_0px_rgba(0,0,0,0.12)]
                px-3 mx-auto'>
                    <div className='mx-auto pt-[48px] flex justify-center max-sm:hidden'>
                        <EnglishlogoIcon />
                    </div>
                    <div className="flex  pt-[48px] justify-center w-full">
                        <div className="">
                            <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[#30237B] w-[32px] h-[32px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#EEECF8] font-[700] font-Urbanist">
                                1
                            </p>
                            <p className="text-[16px] w-[120px] sm:w-[155px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                                OTP verification
                            </p>
                        </div>
                        <div className="bg-[#30237B] max-w-[136px] w-full h-[1px] mt-[40px]"></div>
                        <div className="ms-[20px]">
                            <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[white30237B] w-[32px] h-[32px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#EEECF8] font-[700] font-Urbanist">
                                2
                            </p>
                            <p className="text-[16px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                                Your Deals
                            </p>
                        </div>
                        <div className="bg-[#30237B] max-w-[136px] w-full h-[1px] mt-[40px]"></div>

                        <div className="ms-[20px]">
                            <p className="text-[16px] sm:text-[36px] mb-[18px]  mx-auto flex items-center justify-center text-[#fff] w-[32px] h-[32px] sm:w-[74px] sm:h-[74px] rounded-[50%] bg-[#30237B] font-[700] font-Urbanist">
                                3
                            </p>
                            <p className="text-[16px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]">
                                Questions
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-[53px] gap-[15px] max-sm:hidden'>
                        <div className='max-w-[427px] w-full h-[19px] bg-[#D9D9D9] rounded-[54px]'>
                            <div className='max-w-[25%] w-full rounded-[54px] h-[19px] bg-[#30237B]'></div>
                        </div>
                        <p className='text-[20px] font-semibold'>1/4</p>
                    </div>
                    <h1 className='text-[#25232F] md:text-[36px] text-[26px] font-bold text-center pt-[32px] font-Urbanist'>What is your learning goal?</h1>
                    <div className='flex max-md:flex-col items-center justify-center mt-[32px] max-w-[883px] w-full mx-auto gap-[21px]'>
                        <div className='max-w-[431px] w-full'>
                            <div className='flex items-center justify-between p-[11px] border-[0.6px] border-[#C0C0C0] rounded-[5px]'>
                                <label className='font-Urbanist md:text-[24px] text-[20px] text-[#25232F] font-normal' htmlFor="edu">Education</label>
                                <input name='yash' id='edu' type="radio" className='w-[26px] h-[26px]' />
                            </div>
                            <div className='mt-[21px] flex items-center justify-between p-[11px] border-[0.6px] border-[#C0C0C0] rounded-[5px]'>
                                <label className='font-Urbanist md:text-[24px] text-[20px] text-[#25232F] font-normal' htmlFor="living">Living Abroad</label>
                                <input name='yash' id='living' type="radio" className='w-[26px] h-[26px]' />
                            </div>
                        </div>
                        <div className='max-w-[431px] w-full'>
                            <div className='flex items-center justify-between p-[11px] border-[0.6px] border-[#C0C0C0] rounded-[5px]'>
                                <label className='font-Urbanist md:text-[24px] text-[20px] text-[#25232F] font-normal' htmlFor="education">Communication</label>
                                <input name='yash' id='education' type="radio" className='w-[26px] h-[26px]' />
                            </div>
                            <div className='mt-[21px] flex items-center justify-between p-[11px] border-[0.6px] border-[#C0C0C0] rounded-[5px]'>
                                <label htmlFor="hellow" className='font-Urbanist md:text-[24px] text-[20px] text-[#25232F] font-normal'>Career</label>
                                <input name='yash' id='hellow' type="radio" className='w-[26px] h-[26px]' />
                            </div>
                        </div>
                    </div>
                    <input name="" id="" placeholder='Goal not listed above? write here' className='font-Inter max-w-[883px] w-full mx-auto border-[1.5px] outline-none text-[18px] text-[#25232F] border-[#CBD5E1] rounded-[10px] shadow-[0px_169067px_338133px_0px_rgba(16,24,40,0.05)] flex items-center justify-center p-[15px_20px_20px_20px] mt-[32px] h-[57px] placeholder:text-[#25232F] placeholder:text-[18px] max-md:max-w-[431px]'></input>
                    <Link href="/englishyaari6">
                        <button className='flex max-w-[460px] w-full mx-auto mt-[31px] justify-center items-center gap-[8px] bg-[#2B1E72] rounded-[52px] text-[#fff] text-[20px] font-medium py-2 font-Urbanist hover:bg-[#EEECF8] group hover:text-[#25232F]'>
                            Continue
                            <ArrowIcon2 />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Englishyari4