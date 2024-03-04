import React from 'react'
import CurrencyConverter1 from "../Asset/Portfolio/CurrencyConverter1.jpg"

function Portfolio() {

    const portfolios = [
        {
            id: 1,
            src: "https://firebasestorage.googleapis.com/v0/b/prasad-portfolio25.appspot.com/o/riylestate1.png?alt=media&token=bfb06867-bf0c-4cde-8b4b-e260a0c0070c",
            codeSrc: "https://github.com/Prasadlohakare25/Riyl-Estate",
            name: "Riyl Estate",
            demoImg: [
                "https://github.com/Prasadlohakare25/Riyl-Estate",
            ],
        },
        {
            id: 2,
            src: "https://firebasestorage.googleapis.com/v0/b/prasad-portfolio25.appspot.com/o/blogify.png?alt=media&token=e09e5742-71c8-40a2-bdda-295ea222db97",
            codeSrc: "https://github.com/Prasadlohakare25/Blogify",
            name: "Blogify",
            demoImg: [
                "https://github.com/Prasadlohakare25/Blogify",
            ]
        },
        {
            id: 3,
            src: "https://firebasestorage.googleapis.com/v0/b/prasad-portfolio25.appspot.com/o/wordcounter.png?alt=media&token=43ba5b8a-46be-499a-a9f9-9c7d1023b780",
            codeSrc: "https://github.com/Prasadlohakare25/WordCounter",
            name: "Word Counter",
            demoImg: [
                "https://github.com/Prasadlohakare25/WordCounter",
            ]
        },
        {
            id: 4,
            src: CurrencyConverter1,
            codeSrc: "",
            name: "Currency Converter",
            demoImg: [

            ]
        },

    ]

    // const handleDemo = async(e)=>{
    //     let demo = await e.target.demoImg;
    //     navigate("/")
    // }

    return (
        <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full pt-8 sm:pt-24 text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check some of my works</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-0'>

                    {
                        portfolios.map((e) => (
                            <div key={e.id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={e.src} alt="" className='rounded-lg duration-200 hover:scale-105 h-[160px] sm:[200px] transition-hover overflow-hidden' />
                                <p className='text-center truncate text-lg font-semibold pt-2'>{e.name}</p>
                                <div className='flex items-center justify-center py-1'>
                                    {/* <button className='w-1/2 px-6 m-4 duration-200 hover":scale-105 text-green-600 font-semibold' >Demo</button> */}
                                    <button className='w-full px-6 py-1 m-4 duration-200 hover":scale-105 text-white font-semibold bg-green-600 rounded'>
                                        <a href={e.codeSrc}>Code</a></button>
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