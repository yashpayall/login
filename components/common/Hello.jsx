import React, { useState } from 'react'
import { Card, petrol, slidebar } from './Helper';
import Image from 'next/image';
import { AppleIcon, DotIcon, FacebookIcon, FirstIcon, GooglePLayIcon, InstagramIcon, PlayIcon, TiktokIcon, TwiterIcon, StarIcon, SearchIcon } from '../Icon';
import Link from 'next/link';
import { list } from 'postcss';
import DealsCard from './DealsCard';


export const Hello = () => {
    const [active, setactive] = useState('deals')
    // const [yash, setyash] = useState('ravi')
    return (
        <>
            <div className='bg-[#F9FAFB] max-w-[1498px] w-full mx-auto'>
                <Image src="/img/burger.png" width={1498} height={320} />
            </div>
            <div className='bg-[#F9FAFB] mx-auto px-[12px]'>
                <div className='max-w-[1129px] w-full mx-auto pt-[45px]'>
                    <div className='flex gap-[5px] items-center'>
                        <DotIcon />
                        <p className='font-Poppins text-[24px] font-[500]'>All Categories</p>
                    </div>
                </div>
                <div className='flex gap-[18px]  mt-[45px] scrollbar-hide overflow-x-auto items-center p-[20px_10px] max-w-[1129px] w-full mx-auto'>
                    {slidebar.map((items, index) => (
                        <div className=' max-w-[207px] w-full py-[20px] px-[22px] bg-white h-[100px] shadow-md shadow-[gray] rounded-[8px]'>
                            <div className='flex items-center gap-[21px]'>
                                <p className='max-w-[60px] w-full h-[60px]'>{items.transportimg}</p>
                                <p className='text-[14px] font-[500] font-Poppins leading-[14px] max-[82px] w-full text-black'>{items.transporttext}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='max-w-[1129px] w-full mx-auto scrollbar-hide mt-[45px]'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-Poppins sm:text-[18px] md:text-[24px] sm:max-w-[500px]  max-w-[230px] w-full font-[500]'>Business Reviews and Ratings See More</h1>
                        <p className='md:text-[16px] text-[14px] font-Poppins text-[#0000AD] font-[500]'>See More</p>
                    </div>
                    <div className='max-w-[1129px] w-full mx-auto mt-[45px] scrollbar-hide overflow-auto'>
                        <div className='flex gap-[16px] w-[1129px]'>
                            {petrol.map((items, index) => (
                                <div className='mb-[3px] max-w-[170px] w-full shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_4px_rgba(16,24,40,0.08)] rounded-[12px] p-[8px]'>
                                    <div className='w-full  max-w-[169px]' >  <Image src={items.petrol} width={169} height={180} /></div>
                                    <p className='text-[#667085] text-[10px] font-Poppins font-[500] pt-[8px]'>{items.shell}</p>
                                    <div className='flex mt-[8px] gap-[6px] items-center' >
                                        <Image src={items.profileimg2} width={24} height={24} />
                                        <p className='font-Poppins  text-[10px] font-[500]'>{items.friendly}</p>
                                    </div>
                                    <div className='flex max-w-[82px] w-full gap-[2px] mt-[8px]'>
                                        {items.star.map((yash, i) => (
                                            <p>  {yash.starimg}
                                            </p>
                                        ))}
                                        <p className='text-[#667085] font-Poppins font-[400] text-[12px] pl-[3px]'>{items.five}</p>
                                    </div>
                                    <div className='flex items-center mt-[8px] justify-center gap-[3px]'>
                                        <p>{items.like}</p>
                                        <p className='text-[10px] font-Poppins font-[400] text-[#667085]'>{items.hundered}</p>
                                        <p>{items.coment}</p>
                                        <p className='text-[#667085] font-Poppins font-[400] text-[12px] pl-[3px]'>{items.hundered}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='max-w-[1129px] w-full mx-auto scrollbar-hide mt-[45px]'>
                    <div className='flex items-center justify-between'>
                        <h1 className='font-Poppins sm:text:-[18px] md:text-[24px] font-[500] sm:max-w-[500px]  max-w-[230px] w-full'>Business Reviews and Ratings See More</h1>
                        <p className='md:text-[16px] text-[14px] font-Poppins text-[#0000AD] font-[500]'>See More</p>
                    </div>
                    <div className='max-w-[1129px] w-full mx-auto mt-[45px] scrollbar-hide overflow-x-auto'>
                        <div className='mb-[3px] flex gap-[16px] w-[1129px]'>
                            {petrol.map((items, index) => (
                                <div className='max-w-[170px] w-full shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_4px_rgba(16,24,40,0.08)] rounded-[12px] p-[8px]'>
                                    <div className='w-full  max-w-[169px]' >  <Image src={items.petrol} width={169} height={180} /></div>
                                    <p className='text-[#667085] text-[10px] font-Poppins font-[500] pt-[8px]'>{items.shell}</p>
                                    <div className='flex mt-[8px] gap-[6px] items-center' >
                                        <Image src={items.profileimg2} width={24} height={24} />
                                        <p className='font-Poppins  text-[10px] font-[500]'>{items.friendly}</p>
                                    </div>
                                    <div className='flex max-w-[82px] w-full gap-[2px] mt-[8px]'>
                                        {items.star.map((yash, i) => (
                                            <p>  {yash.starimg}
                                            </p>
                                        ))}
                                        <p className='text-[#667085] font-Poppins font-[400] text-[12px] pl-[3px]'>{items.five}</p>
                                    </div>
                                    <div className='flex items-center mt-[8px] justify-center gap-[3px]'>
                                        <p>{items.like}</p>
                                        <p className='text-[10px] font-Poppins font-[400] text-[#667085]'>{items.hundered}</p>
                                        <p>{items.coment}</p>
                                        <p className='text-[#667085] font-Poppins font-[400] text-[12px] pl-[3px]'>{items.hundered}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='max-w-[1063px] w-full mx-auto mt-[75px] pb-[45px]'>
                    <h1 className='text-[24px] font-[500] font-Poppins'>More To Explore</h1>
                    <div className='flex justify-around max-w-[339px] w-full items-center mt-[18px] gap-[55px]'>
                        <h1 className={`text-[#98A2B3] text-[14px] font-Poppins font-[400] ${active == 'deals' ? 'border-b-[2px] border-[#00f] text-[blue] ' : 'text-[#98A2B3]'}`} onClick={() => setactive('deals')}> Deals</h1>
                        <h1 className={`text-[#98A2B3] text-[14px] font-Poppins font-[400] ${active == 'flashsale' ? 'border-b-[2px] border-[#00f] text-[#00f] ' : 'text-[#98A2B3]'}`} onClick={() => setactive('flashsale')} >Flash Sale</h1>
                        <h1 className={`text-[#98A2B3] text-[14px] font-Poppins font-[400] ${active == 'events' ? 'border-b-[2px] border-[#00f] text-[#00f] ' : 'text-[#98A2B3]'}`} onClick={() => setactive('events')}>Events</h1>
                    </div>
                    {active == 'deals' && <DealsCard />}
                    {active == 'Flashsale' && "Flashsale"}
                    {active == 'Events' && "Events"}

                </div>
                <div className='mx-auto'>
                    {/* <form action=".php">
                        <input type="text" placeholder='hllow' className={`text-[#98A2B3] text-[14px] font-Poppins font-[400] ${active == 'Ravi' ? 'border-b-[2px] border-[#00f] text-[#00f] ' : 'text-[#98A2B3]'}`} />
                        <input type="text" />
                    </form> */}
                    {/* <h1 className='font-extrabold'>heelo world </h1> */}
                </div>
            </div>
        </>
    );
};


