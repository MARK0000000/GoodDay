import React from 'react';

export default function WorkTimeModal({ workTimeDetailed, workTimeModalActive }) {

  const daysOfWeek = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ];

  return (
    <div className={`serviceContent__workTimeDetailed ${workTimeModalActive && 'serviceContent__workTimeDetailed_active'}`}>
      {workTimeDetailed.map((day, index) => (
        <span key={index}>
          {day.isDayOff 
            ? `${daysOfWeek[index]}: Выходной`
            : `${daysOfWeek[index]}: ${day.start}:00 - ${day.end}:00`}
        </span>
      ))}
    </div>
  );
}