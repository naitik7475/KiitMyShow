import {useState} from "react";

const Calender = () => {

  const [time, setTime] = useState('');
  const [theater,setTheater] = useState('');


  const onChangeTime = (event) => {
    setTime(event.target.value);
  };

  const onChangeTheater = (event) =>{
    setTheater(event.target.value);
  }

  function getFormattedDates(count) {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < count; i++) {
      const futureDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const month = futureDate.getMonth();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const formattedMonth = months[month];
      const date = futureDate.getDate();
      const dayOfWeek = futureDate.getDay();
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const formattedDay = daysOfWeek[dayOfWeek];
    
      const formattedDate = {
        month: formattedMonth,
        date: date,
        day: formattedDay
      };
    
      dates.push(formattedDate);
    }
    
    return dates;
  }
  
  const dates = getFormattedDates(5);
  const [selectedDate, setSelectedDate] = useState('');
  
  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const times = [
    "09:00 am","12:30 am","04:00 pm","09:00 pm"
  ]

  const theaters = [
    "Bhubaneshwar","Patia","Kolkata"
  ]
  
  
  return (
    <>
      <div className="bg-slate-800 h-24 w-full flex">
        <div className="flex ml-6 bg-slate-800 items-center w-1/2 h-full">
          <div className="text-xl text-white font-semibold text-center m-6 p-4">Date</div>
          <ul className="flex w-full h-full">
            {dates.map((date, index) => (
              <li key={index} className="w-full bg-yellow-300">
                <button onClick={() => handleDateSelect(date)} className={`w-full h-full ${date.day === selectedDate.day ? 'bg-yellow-400 text-white' : 'bg-blue-900 text-white'}`}>
                <div className="flex flex-col">
                  <div className="font-thin text-sm">{date.month}</div>
                  <div className="font-semibold text-xl">{date.date}</div>
                  <div className="font-thin text-sm">{date.day}</div>
                </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center w-60">
        <label className="flex flex-col items-start ml-4">
            <p className="text-white font-semibold mb-2">Time</p>
            <select value={time} onChange={onChangeTime} className="bg-slate-800 text-white">
              {times.map((showtime,index)=>(
                <option value={index} key={index} className="text-white">{showtime}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-60 flex items-center justify-center">
        <label className="flex flex-col items-start">
            <p className="text-white font-semibold mb-2">Theater</p>
            <select value={theater} onChange={onChangeTheater} className="bg-slate-800 text-white">
              {theaters.map((theatername,index)=>(
                <option key={index} value={index}>{theatername}</option>
              ))}
            </select>
          </label>
        </div>
      
      </div>
    </>
  )
}

export default Calender;