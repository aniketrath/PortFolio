import React from 'react';
import { Box, Text } from '../Root/index'

const Cards = ({ image_src, title, about, link, tags }) => {
    const handleButtonClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    };
    return (
        <Box className="card bg-base-100 min-w-96 border-2 border-gray-400/10 shadow-xl md:w-[28vw] 1440p:min-w-[400px] 1440p:w-[30vw]">
            <figure>
                <img src={image_src} alt="OOPS !!" className="w-full h-auto" />
            </figure>
            <Box className="card-body">
                <Text className="card-title font-barlow font-bold text-4xl text-white mb-2 md:text-5xl 1440p:text-6xl">
                    {title}
                </Text>
                <Box horizontal className='gap-2 mb-2 flex-wrap'>
                    {
                        tags.map((item, id) => (
                            <Box key={id} className="badge badge-primary font-barlow font-bold text-lg py-3 1440p:text-xl 1440p:py-4 1440p:px-4">
                                {item}
                            </Box>
                        ))
                    }
                </Box>
                <Text className='text-lg md:text-xl 1440p:text-2xl'>
                    {about}
                </Text>
                <Box className="card-actions justify-end">
                    <button onClick={handleButtonClick} className="my-1 btn glass text-lg 1440p:text-xl 1440p:py-3 1440p:px-6">
                        Github
                    </button>
                </Box>
            </Box>
        </Box>
    )
}
export default Cards