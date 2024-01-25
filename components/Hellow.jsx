import React, { useState } from 'react'

const Hellow = () => {
    const [item, setitem] = useState('')
    return (
        <>
            <div className='gap-[20px] w-[700px]'>
                <button className='bg-slate-300' onClick={() => setitem('first')}>
                    click first
                </button>
                <button className='bg-[blue] text-white' onClick={() => setitem('second')}>
                    click second
                </button>
                <button className='bg-[red]' onClick={() => setitem('third')}>
                    click third
                </button>
            </div>
            <div className=''>
                {
                    item === 'first' && (
                        <p className='text-bold text-[32px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis eos qui sequi praesentium delectus, quod minus cumque ex voluptas.</p>
                    )
                }
            </div>
            <div className=''>
                {
                    item === 'second' && (<p className='text-[red] text-bold text-[32px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam velit nisi ut quod dolorem nihil rerum voluptate laboriosam porro praesentium laborum alias, libero ipsum iste aut quae? Architecto illum ipsam, quos fugiat iste nihil facilis incidunt provident, commodi optio dolorum!</p>)
                }
            </div>
            <div className=''>
                {
                    item === 'third' && (
                        <p className='text-[blue] text-bold text-[32px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia beatae ipsa soluta similique molestias, vel odio neque ab deleniti aliquam illum animi ut optio amet repudiandae recusandae minima id quas nihil obcaecati, doloremque maxime. Est saepe iusto, cupiditate magnam fugit nisi mollitia voluptates vel omnis, amet sed fugiat adipisci minima ipsum, ut ab aperiam corporis maxime. Maxime quaerat necessitatibus sint perferendis ducimus soluta expedita animi nobis ex modi mollitia praesentium pariatur maiores rerum assumenda inventore ipsa nesciunt, similique illo quos delectus porro tempore. Nihil voluptatibus laboriosam maxime inventore corrupti nobis quod aperiam mollitia ad alias ab, incidunt placeat ullam!</p>
                    )
                }
                <button className='p-4 bg-green-100' onClick={() => setitem(false)}>Exit</button>
            </div>
        </>
    )
}

export default Hellow