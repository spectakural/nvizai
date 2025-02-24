import Block from './Block';
import { useEffect } from 'react';

const Timeline = ({ messages }) => {
    console.log("Jello")
    const timelineData = [
        {
          month: "Jan",
          year: "2025",
          title: "Project Kickoff",
          description: "Initiate project, define scope, and finalize team roles and responsibilities.Initiate project, define scope, and finalize team roles and responsibilitiesInitiate project, define scope, and finalize team roles and responsibilitiesInitiate project, define scope, and finalize team roles and responsibilitiesInitiate project, define scope, and finalize team roles and responsibilities",
        },
        {
          month: "Feb",
          year: "2025",
          title: "Data Collection",
          description: "Gather and preprocess geography-related datasets for training the model.",
        },
        // Add more entries as needed
      ];
    // log the height of the first Block component
    // useEffect(() => {
    //     console.log(messages?document.get("timeline-diagram")[0].clientHeight:null);
    // }, [Block]);
    return (
        <div className="w-full bg-zinc-300 flex justify-center items-center  ">
            {/* <div className="timeline-diagram bg-red-500 max-h-[500] max-w-[1000] overflow-x-scroll "> */}
            <div className="max-w-6xl py-2 overflow-x-scroll h-full flex items-center">
                {/* <div className='bg-black'> */}

                    <div className='flex justify-between items-center py-2 h-auto'>

                        {messages?.map((timeline, index)=>(
                            <Block key={index} {...timeline} position={index%2===0?'top':'bottom'} isFirst={index===0} isLast={index === messages.length-1} />
                        ))}

                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
