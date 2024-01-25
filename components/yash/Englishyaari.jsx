import Image from 'next/image'
import React from 'react'
import { ArrowIcon, CallerIcon } from '../Icon'
import Link from 'next/link'

const Englishyaari = () => {
    return (
        <>
            <div className='bg-[url("/img/starbg.png")] h-[100vh] overflow-auto flex flex-col justify-center items-center bg-cover bg-center py-[66px] max-xl:px-[16px] bg-[#EEECF8]'>
                <div className=" flex justify-center py-[26px] sm:hidden">
                    <Image src="/img/kismat.png" width={126} height={79} />

                </div>
                <div className='max-w-[1030px] pb-[61px] w-full bg-white p-[100px_16px] md:py-[160px] mx-auto
                rounded-[8px]
                shadow-[2.17687px_2.17687px_13.06122px_0px_rgba(0,0,0,0.12)]'>
                    <Image src="/img/locker.png" width={227} height={237} className='mx-auto ' />
                    <div className='max-w-[460px] w-full mx-auto'>
                        <h1 className='text-[#25232F] font-medium text-center text-[32px] pt-[50px] mx-auto font-Urbanist'>Reset your password</h1>
                        <p className='text-[16px] text-[#666476] font-normal pt-[41px] font-Inter'>4 digit code will be sent on your number</p>
                        <input type="number" placeholder='Enter your Number' className='max-w-[460px] outline-none w-full h-[48px] border-[1.6px] border-[#CBD5E1] rounded-[10px] mt-2 pl-[20px]' />
                        <div className='relative'>
                            <div className='absolute top-[-32px] right-[20px]'><CallerIcon /></div>
                        </div>
                        <Link href="/otpname">
                            <button className='flex max-w-[460px] w-full mt-[31px] justify-center items-center gap-[8px] bg-[#EEECF8] rounded-[52px] text-[#30237B] text-[20px] font-medium py-2 font-Inter hover:bg-[#2B1E72] group hover:text-white duration-400 ease-in-out'>
                                Login
                                <ArrowIcon />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Englishyaari