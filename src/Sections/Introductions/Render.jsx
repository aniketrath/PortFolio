import React from 'react'
import { Box, Button, Text } from '../../Components/Root/index'

const Render = () => {

    return (
        <Box>
            <Box className='content-end bg-red-700 h-fit px-2 pt-2'>
                <Text className='text-center font-barlow font-medium text-[15rem] text-neutral 1440p:text-[20rem]'>
                    {"{"}<span className='text-zinc-300'>A</span>{"}"}
                </Text>
            </Box>
            <Box className='font-barlow'>
                <Box className='gap-1 mt-4 px-2'>
                    <Text className="mb-4 mt-2 text-4xl font-bold text-red-600 xl:text-[3.5rem] 1440p:text-[3.5rem]">Aniket Rath</Text>
                </Box>
                <Text className="px-5 py-3 text-2xl font-semibold text-gray-400 md:mb-6 md:w-[55vw] md:text-3xl 1440p:text-4xl">
                    <span className='font-semibold text-white'>System Engineer. </span>
                    A self-taught developer, with a Bachelor's in Computer Science. Currently working at
                    <span className='text-blue-400'> Catchpoint</span>
                </Text>
            </Box>

            <Box className='gap-2 my-2 px-4'>
                <a href="https://github.com/aniketrath" target="_blank" rel="noopener noreferrer">
                    <Button className="btn glass w-fit min-w-48 rounded-xl border-2 py-2 text-xl text-white lg:btn-md 1440p:btn-lg 1440p:text-3xl">
                        Github
                    </Button>
                </a>
            </Box>
        </Box>
    )
}

export default Render