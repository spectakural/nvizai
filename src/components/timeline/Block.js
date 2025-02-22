
const Block = ({ timeline }) => {
    const { month, year, title, description, icon } = timeline;
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
    <div className="flex flex-col py-4 text-center">
        <div className="month rounded bg-blue-400 min-w-[500]">
            { monthMap[month].slice(0,3) } { String(year).slice(2) }
        </div>
        <div className="title">
            { title }
        </div>
    </div>
  )
}

export default Block;