import React, { useState } from 'react'
import { ArrowIcon, CallerIcon, EyeIcon, EyyeIcon } from '../Icon'
import Image from 'next/image'
import Link from 'next/link'

const Englishyari2 = () => {
    const [password, setPassword] = useState(false)
    const [conformpassowrd, setconformPassowrd] = useState(false)
    return (
        <>
            <div className='bg-[url("/img/starbg.png")] bg-cover bg-center h-[1024px]  px-[16px] py-[66px] bg-[#EEECF8]'>
                <div className='max-w-[1030px] w-full pb-[164px] bg-white  px-[16px] mx-auto
                rounded-[8px]
                shadow-[2.17687px_2.17687px_13.06122px_0px_rgba(0,0,0,0.12)]'>
                    <Image src="/img/locker2.png" width={227} height={237} className='mx-auto pt-[197px]' />
                    <div className='max-w-[460px] w-full mx-auto'>
                        <h1 className='text-[#25232F] font-medium text-center md:text-[32px] text-[24px] pt-[50px] mx-auto font-Urbanist'>Enter your new password</h1>
                        <input type={password ? "text" : "password"} placeholder='Password' className='max-w-[460px] w-full h-[48px] border-[1.6px] border-[#CBD5E1] rounded-[10px] outline-none mt-2 pl-[20px]' />
                        <div className='relative'>
                            <div className='absolute top-[-32px] right-[20px]' onClick={() => setPassword(!password)}>
                                {password ? <EyyeIcon /> : <EyeIcon />}
                            </div>
                        </div>
                        <input type={conformpassowrd ? "text" : "password"} placeholder='Confirm Password' className='max-w-[460px] w-full h-[48px] border-[1.6px] border-[#CBD5E1] rounded-[10px] outline-none mt-[16px] pl-[20px]' />
                        <div className='relative'>
                            <div className='absolute top-[-32px] right-[20px]' onClick={() => setconformPassowrd(!conformpassowrd)}>
                                {conformpassowrd ? <EyyeIcon /> : <EyeIcon />}
                            </div>
                        </div>
                        <Link href="/englishyaari4">
                            <button className='flex max-w-[460px] w-full mt-[31px] justify-center items-center gap-[8px] bg-[#EEECF8] rounded-[52px] text-[#30237B] text-[20px] font-medium py-2 font-Urbanist hover:bg-[#2B1E72] group hover:text-white'>
                                Update Password
                                <ArrowIcon />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Englishyari2