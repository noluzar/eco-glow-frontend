import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isToday } from "date-fns";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="p-4 bg-[#afad55] text-white shadow-lg  w-full">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-white hover:text-gray-200">
          <IoChevronBack size={24} />
        </button>
        <h2 className="text-xl font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={nextMonth} className="text-white hover:text-gray-200">
          <IoChevronForward size={24} />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-gray-900 bg-gray-100 rounded-md">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-2 font-semibold">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-center pt-2">
        {days.map((day) => (
          <div
            key={day}
            className={`p-3 ${
              isSameMonth(day, monthStart) ? "bg-white text-gray-900" : "text-gray-400"
            } ${isToday(day) ? "bg-gray-300 text-gray-900 font-bold" : ""}`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
