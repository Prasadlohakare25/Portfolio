import React from 'react'

function About() {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white lg:pl-20'>
            <div className='max-w-screen flex flex-col justify-center mx-auto p-4 w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, quae ipsum? Dolorum sequi, ratione ut laudantium illo nihil exercitationem in asperiores libero atque impedit ea doloremque, itaque nulla fugit corrupti, quisquam totam recusandae saepe quos iure vel iste hic. Incidunt voluptatum error voluptas laboriosam? Mollitia debitis fugiat voluptates autem atque.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla odit debitis eaque dicta maiores atque provident? Fugit totam laudantium vero facere laboriosam labore dolorem enim exercitationem voluptas consectetur fuga placeat quibusdam ea, ipsa quae ullam. Dolore, rem fuga odio ut consequatur incidunt? Tempore iste velit officiis numquam cumque quibusdam?
                </p>
            </div>
        </div>
    )
}

export default About