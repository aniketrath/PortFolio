import React from 'react'
import { Harmonya, Cryptos, LoginUI } from '../../Images/index';
import { Box, Text } from '../../Components/Root/index';
import { Card } from '../../Components/index'


const projects = [
    {
        id: 1,
        Title: "Harmonya",
        About: "My First Project !! An Sample website based on Product Advertisements . Includes multiple routes for showcasing multiple scenarios for website statuses . ",
        Link: 'https://aniketrath.github.io/Harmonya/',
        Image: Harmonya,
        tags: ["React.js"]
    },
    {
        id: 2,
        Title: "Cryptos",
        About: "A Full scale Project based on React & Django frameworks. Also scalable on Docker  . The application is based on the idea to create an platform to compare Cryptocurrencies and NFTs.",
        Link: 'https://github.com/aniketrath/cryptos_',
        Image: Cryptos,
        tags: ["React.js", "Django", "Docker"]

    },
    {
        id: 3,
        Title: "Login.UI",
        About: "A Simple Project based on React and Express showcasing minimal UI/UX for an Login screen ans using Express for Minimal Login Authentication. requires to be locally hosted.",
        Link: 'https://github.com/aniketrath/Login.uI',
        Image: LoginUI,
        tags: ["React.js", "Express", "MongoDB"]
    },

]

const Render = () => {
    return (
        <Box className=''>
            <Box className='bg-zinc-900 py-4 px-2 md:py-8 md:px-4 1440p:py-12 1440p:px-8'>
                <Text className='text-3xl font-semibold text-white mb-4 px-2 font-barlow md:text-[3rem] md:mb-8 1440p:text-[4rem] 1440p:mb-12'>
                    My Competencies :
                </Text>
                <Box horizontal className='my-4 text-xl gap-4 justify-center flex-wrap md:max-w-[50vw] md:mx-auto 1440p:my-6 1440p:text-[1.75rem] '>
                    <Box className='bg-orange-600 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        HTML
                    </Box>
                    <Box className='bg-blue-600 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        CSS
                    </Box>
                    <Box className='bg-yellow-600 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        JavaScript
                    </Box>
                    <Box className='bg-cyan-600 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        React.js
                    </Box>
                    <Box className='border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        Express.js
                    </Box>
                    <Box className='bg-green-800 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        Django
                    </Box>
                    <Box className='bg-cyan-600 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        Docker
                    </Box>
                    <Box className='bg-orange-800 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        Grafana
                    </Box>
                    <Box className='border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        Linux
                    </Box>
                    <Box className='bg-zinc-600 border-2 glass text-white px-4 py-2 rounded-lg w-fit font-barlow font-bold  1440p:px-6 1440p:py-3'>
                        Networking
                    </Box>
                </Box>
            </Box>

            <Box className='px-2 my-4 md:my-8 md:px-4 1440p:px-8 1440p:my-10'>
                <Text className='text-3xl font-semibold text-white mb-4 px-2 font-barlow md:text-[3rem] 1440p:text-5xl 1440p:mb-8 1440p:text-[4rem]'>
                    My Creative work :
                </Text>
                <Text className='text-xl font-semibold text-gray-400 mb-4 px-2 font-barlow md:mt-2 md:text-3xl md:mb-10 1440p:text-[2.5rem] 1440p:mb-12'>
                    Here are some projects I have worked upon :
                </Text>

                <div className='gap-4 carousel carousel-center md:flex md:flex-row md:justify-center md:flex-wrap'>
                    {
                        projects.map((item, id) => (
                            <div className='sm:carousel-item'>
                                <Card
                                    image_src={item.Image}
                                    about={item.About}
                                    link={item.Link}
                                    title={item.Title}
                                    tags={item.tags}
                                />
                            </div>
                        ))
                    }
                </div>
            </Box>
        </Box>

    )
}

export default Render