import React from 'react'

const Boxportion = () => {
    return (
        <>
            <div className='sm:max-w-[600px] max-w-[431px] w-full m-auto flex items-center gap-[25px] pt-[38px] justify-between'>
                <div className='sm:max-w-[74px] max-w-[32px] w-full sm:h-[74px] h-[32px] rounded-full bg-[#EEECF8]'>
                    <p className='flex text-[15px] sm:text-[36px] pt-[5px] sm:pt-[10px] justify-center items-center text-center '>1</p>
                </div>
                <div className='bg-black max-w-[100px] sm:max-w-[146px] w-full h-[1px]'></div>
                <div className='sm:max-w-[74px] max-w-[32px] w-full sm:h-[74px] h-[32px] rounded-full bg-[#EEECF8]'>
                    <p className='flex text-[15px] sm:text-[36px] pt-[5px] sm:pt-[10px] justify-center items-center text-center '>2</p>
                </div>
                <div className='bg-black max-w-[100px] sm:max-w-[146px] w-full h-[1px]'></div>
                <div className='sm:max-w-[74px] max-w-[32px] w-full sm:h-[74px] h-[32px] rounded-full bg-[#EEECF8]'>
                    <p className='flex text-[15px] sm:text-[36px] pt-[5px] sm:pt-[10px] justify-center items-center text-center '>3</p>
                </div>
            </div>
            <div className='max-w-[431px] sm:max-w-[666px] w-full m-auto flex justify-between '>
                <p className=' text-[14px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]'>Otp Verification</p>
                <p className='text-[14px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]'>Your Deals</p>
                <p className='text-[14px] sm:text-[20px] font-[500] font-Urbanist text-[#666476]'>Question</p>
            </div>
        </>
    )
}

export default Boxportion