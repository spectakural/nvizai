import Block from './Block';

const Timeline = ({ messages }) => {
    console.log("Jello")
    return (
        <div className="w-full bg-zinc-300 h-full my-auto flex justify-center items-center">
            <div className="timeline-diagram bg-red-500 max-h-[500] max-w-[1000] overflow-x-scroll ">

                {messages?.map((timeline, index)=>(
                    <Block key={index} timeline={timeline} />
                ))}...
            </div>
        </div>
    );
};

export default Timeline;
