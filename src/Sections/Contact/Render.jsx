import React from 'react'
import { Box, Text, Button } from '../../Components/Root/index'

const Render = () => {
    return (
        <Box className='font-barlow text-center mt-4 mb-20 md:mt-10 xl:mt-20 1440p:mt-24 1440p:mb-24'>
            <Text className='font-bold text-4xl mb-1 4 md:text-[5rem] xl:text-[7rem] xl:mb-10 1440p:text-[8rem] 1440p:mb-20'>
                Keep in Touch
            </Text>
            <Box className='xl:mt-4 py-4'>
                <Text className='text-xl md:text-3xl xl:text-4xl 1440p:text-5xl'>
                    Always interested to work on new projects.
                </Text>
                <Text className='px-4 text-xl md:text-3xl xl:text-4xl 1440p:text-5xl'>
                    Currently working @ <span className='text-primary'>Catchpoint</span>
                </Text>
            </Box>
            <Box horizontal className='justify-center gap-6 my-4 md:my-6 xl:mt-10 1440p:my-6 1440p:gap-8'>
                <a href="https://github.com/aniketrath" target="_blank" rel="noopener noreferrer">
                    <Button className='btn btn-sm md:btn-md md:text-xl xl:text-xl 1440p:text-3xl glass text-lg w-fit font-bold 1440p:py-3 1440p:px-6 1440p:btn-lg 1440p:my-8'>
                        Github
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/aniket-rath-19b04a195/" target="_blank" rel="noopener noreferrer">
                    <Button className='btn btn-sm md:btn-md md:text-xl xl:text-xl 1440p:text-3xl bg-blue-700 glass text-lg w-fit font-bold 1440p:py-3 1440p:px-6 1440p:btn-lg 1440p:my-8'>
                        LinkedIn
                    </Button>
                </a>
                <a href="https://www.instagram.com/kyouske_ryuga/" target="_blank" rel="noopener noreferrer">
                    <Button className='btn btn-sm md:btn-md md:text-xl xl:text-xl 1440p:text-3xl bg-red-700 glass text-lg w-fit font-bold 1440p:py-3 1440p:px-6 1440p:btn-lg 1440p:my-8'>
                        Insta
                    </Button>
                </a>
            </Box>
        </Box>
    )
}

export default Render