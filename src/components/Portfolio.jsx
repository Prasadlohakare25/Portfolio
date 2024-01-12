import React from 'react'
import CurrencyConverter1 from "../Asset/Portfolio/CurrencyConverter1.jpg"

function Portfolio() {

    const portfolios = [
        {
            id: 1,
            src: CurrencyConverter1
        },
        {
            id: 2,
            src: CurrencyConverter1
        },
        {
            id: 3,
            src: CurrencyConverter1
        },
        {
            id: 4,
            src: CurrencyConverter1
        },
        {
            id: 5,
            src: CurrencyConverter1
        },
        {
            id: 6,
            src: CurrencyConverter1
        }

    ]

    return (
        <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check some of my works</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-0'>

                    {
                        portfolios.map((e) => (
                            <div key={e.id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={e.src} alt="" className='rounded-lg duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover":scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover":scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio