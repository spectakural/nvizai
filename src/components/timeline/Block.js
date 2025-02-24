
// const Block = ({ timeline }) => {
//     const { month, year, title, description, icon } = timeline;
//     const monthMap = {
//         1: "January",
//         2: "February",
//         3: "March",
//         4: "April",
//         5: "May",
//         6: "June",
//         7: "July",
//         8: "August",
//         9: "September",
//         10: "October",
//         11: "November",
//         12: "December"
//     }
//   return (
//     <div className="flex flex-col py-4 text-center">
//         <div className="month rounded bg-blue-400 min-w-[500]">
//             { monthMap[month].slice(0,3) } { String(year).slice(2) }
//         </div>
//         <div className="title">
//             { title }
//         </div>
//     </div>
//   )
// }

// export default Block;


const Block = ({ 
    month = "Jan",
    year = "2025",
    title = "Project Phase",
    description = "Phase description goes here",
    position = "top", // 'top' or 'bottom'
    isFirst = false,
    isLast = false
  }) => {

    const monthMap = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }

    return (
      <div id="timeline-diagram" className={`timeline-diagram relative flex flex-col items-center ${position==="top" ? "-translate-y-1/2 top-[16px]" : "translate-y-1/2 bottom-[16px]"}` } >
        {/* ${position==="top" ? "-translate-y-1/2" : "translate-y-1/2"} */}
        {/* Horizontal line */}
        <div className={`absolute ${position==="top" ? "bottom-[15px]" : "top-[15px]"} transform  h-[2px] bg-white ${isLast? 'w-0':'w-[230px]'}`} style={{
        // <div className={`absolute ${position==="top" ? "bottom-[15px]" : "top-[15px]"} transform  h-[2px] bg-white ${isLast? 'w-0':'w-[230px]'}`} style={{
          left: '50%'
        }} />

        {/* Vertical line */}
        <div className={`absolute ${position==="top" ? "bottom-[15px]" : "top-[15px]"} transform  h-[36px] w-[2px] bg-white`} style={{
        }} />

        
        {/* Date circle */}
        <div className="relative z-10 flex flex-col items-center ">
          <div className="bg-orange-500 border-2 border-gray-300 rounded-full px-4 py-1 text-sm text-white font-bold">
            {monthMap[month]?.slice(0,3)} {year}
          </div>
        </div>
  
        {/* Content */}
        {/* <div className={`flex flex-col items-center w-64 ${position === 'top' ? 'order-first mb-4' : 'order-last mt-4'}`}>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full">
            <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-snug">{description}</p>
          </div>
        </div> */}
        <div className={`flex flex-col items-center w-64 ${position === 'top' ? 'order-first mb-4' : 'order-last mt-4'}`}>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full">
            <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-snug">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Block;