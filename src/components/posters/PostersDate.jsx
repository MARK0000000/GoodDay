import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ru } from 'date-fns/locale'; 
import chioceDate from '../../images/icons/choiceDate.svg';


registerLocale('ru', ru);


const getFormattedDateParts = (date) => {
  const day = date.toLocaleDateString('ru-RU', { day: 'numeric' });
  const month = date.toLocaleDateString('ru-RU', { month: 'long' }).slice(0, 4) + '.'; 
  const weekdays = {
    'понедельник': 'пн',
    'вторник': 'вт',
    'среда': 'ср',
    'четверг': 'чт',
    'пятница': 'пт',
    'суббота': 'сб',
    'воскресенье': 'вс'
  };

  const fullWeekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
  const weekday = weekdays[fullWeekday]; 

  const isWeekend = (date.getDay() === 0 || date.getDay() === 6); 
  
  return { day, month, weekday, isWeekend };
};

const PostersDate = ({setStartDate, startDate, setSelectedDate, selectedDate, resetPage, allDates, toggleAllDates}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(14)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); 

  const [widthOfDevice, setWidthOfDevice] = useState(window.innerWidth);

  useEffect(() => {
    if (widthOfDevice <= 1024) {
      setItemsPerPage(12)
    } 
    if (widthOfDevice <= 768) {
      setItemsPerPage(10)
    } 
    if (widthOfDevice <= 480) {
      setItemsPerPage(8)
    } 

  }, [widthOfDevice])

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < itemsPerPage; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + (currentPage * itemsPerPage) + i);
      dates.push(nextDate);
    }
    return dates;
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSelectDateFromPagination = (date) => {
      toggleAllDates(false)
      setSelectedDate(date.toISOString().split('T')[0]);
      setStartDate(date); 
      resetPage && resetPage()
  };

  const dates = generateDates();
  return (
    <div>
      <div className="postersDate">
        <button className={`postersDate__prev ${currentPage === 0 && 'postersDate__prev_disabled'}`} onClick={handlePrev}>
          &lt;
        </button>

        <div className={`postersDate__item postersDate__item_all ${allDates ? 'postersDate__item_selected' : ''}`} onClick={() => toggleAllDates(true)} >
          <span className="postersDate__day">Всё</span> 
        </div>

        {dates.map((date, index) => {
          const { day, month, weekday, isWeekend } = getFormattedDateParts(date);
          const isSelected = date.toISOString().split('T')[0] === selectedDate;

          return (
            <div 
              key={index} 
              className={`postersDate__item ${(isSelected && !allDates) ? 'postersDate__item_selected' : ''}`}
              onClick={() => handleSelectDateFromPagination(date)} 
            >
              <span className={`postersDate__weekday ${isWeekend ? 'postersDate__weekday_weekend' : ''}`}>{weekday}</span> 
              <span className="postersDate__day">{day}</span> 
              <span className="postersDate__month">{month}</span>
            </div>
          );
        })}
        
        <button className='postersDate__choiceDate' onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
          <img src={chioceDate} alt="" />
        </button>

        {isDatePickerOpen && (
          <div style={{ position: 'absolute', zIndex: 1, top: '90px', right: "0px" }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setSelectedDate(date.toISOString().split('T')[0]); 
                setCurrentPage(0); 
                setIsDatePickerOpen(false); 
                toggleAllDates(false)
              }}
              locale="ru" 
              dateFormat="dd.MM.yyyy" 
              inline 
            />
          </div>
        )}

        <button className='postersDate__next' onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PostersDate;