import React from 'react'
import { Box, Text } from '../../Components/Root/index'
import Timeline from './Experiece'

const Render = () => {
  return (
    <Box id='Experience' className="text-white font-barlow px-4 my-10 xl:px-[10vw] xl:text-2xl 1440p:px-[15vw] 1440p:text-3xl">
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        {Timeline.map((item, index) => (
            <li className='gap-3 mb-10' key={index}>
                {item.alignment === "end" && <hr />}
                <Box className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 1440p:h-6 1440p:w-6">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </Box>
                <Box className={`timeline-${item.alignment} bg-white/10 px-5 py-5 rounded-xl gap-2 ${item.alignment === "start" ? "md:text-end" : ""}`}>
                    <time className="font-mono italic text-lg md:text-xl xl:text-2xl 1440p:text-3xl">{item.date}</time>
                    <Text className="text-lg font-semibold md:text-xl xl:text-2xl 1440p:text-3xl">{item.title}</Text>
                    <Box horizontal className='justify-between my-1 underline underline-offset-2 md:text-xl 1440p:text-2xl'>
                        <Text>{item.company}</Text>
                        <Text>{item.location}</Text>
                    </Box>
                    <Text className='my-2 md:text-xl 1440p:text-2xl'>{item.workDes}</Text>
                </Box>
                <hr />
            </li>
        ))}
    </ul>
</Box>
  )
}

export default Render