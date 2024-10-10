import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ru } from 'date-fns/locale'; // Импортируем русскую локаль
import chioceDate from '../../images/icons/choiceDate.svg';

// Регистрируем русскую локаль
registerLocale('ru', ru);

// Функция для получения дня, месяца и дня недели
const getFormattedDateParts = (date) => {
  const day = date.toLocaleDateString('ru-RU', { day: 'numeric' });
  const month = date.toLocaleDateString('ru-RU', { month: 'long' }).slice(0, 4) + '.'; // Ограничиваем до 4 символов и добавляем точку
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
  const weekday = weekdays[fullWeekday]; // Получаем сокращение

  // Проверяем, является ли день выходным
  const isWeekend = (date.getDay() === 0 || date.getDay() === 6); // 0 - воскресенье, 6 - суббота
  
  return { day, month, weekday, isWeekend };
};

const PostersDate = ({setStartDate, startDate, setSelectedDate, selectedDate, resetPage}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(14)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // Состояние для управления видимостью календаря

  const [widthOfDevice, setWidthOfDevice] = useState(window.innerWidth);
  // Сопоставление полных названий дней недели с их сокращениями
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

  // Генерируем массив дат
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

  // Обработка нажатия кнопки "Prev"
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Обработка нажатия кнопки "Next"
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  // Обработка выбора элемента пагинации
  const handleSelectDateFromPagination = (date) => {
    const newSelectedDate = date.toISOString().split('T')[0]; // Получаем дату в формате ГГГГ-ММ-ДД

    if (newSelectedDate !== selectedDate) { 
      setSelectedDate(newSelectedDate);
      setStartDate(date); 
      resetPage && resetPage()
    }
  };

  const dates = generateDates();

  return (
    <div>
      <div className="postersDate">
        <button className={`postersDate__prev ${currentPage === 0 && 'postersDate__prev_disabled'}`} onClick={handlePrev}>
          &lt;
        </button>
        {dates.map((date, index) => {
          const { day, month, weekday, isWeekend } = getFormattedDateParts(date);
          // Проверяем, соответствует ли элемент пагинации выбранной дате
          const isSelected = date.toISOString().split('T')[0] === selectedDate;

          return (
            <div 
              key={index} 
              className={`postersDate__item ${isSelected ? 'postersDate__item_selected' : ''}`}
              onClick={() => handleSelectDateFromPagination(date)} // Обработка клика по элементу пагинации
            >
              <span className={`postersDate__weekday ${isWeekend ? 'postersDate__weekday_weekend' : ''}`}>{weekday}</span> 
              <span className="postersDate__day">{day}</span> 
              <span className="postersDate__month">{month}</span>
            </div>
          );
        })}
        
        {/* Кнопка для открытия/закрытия выбора даты */}
        <button className='postersDate__choiceDate' onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
          <img src={chioceDate} alt="" />
        </button>

        {/* Компонент выбора даты */}
        {isDatePickerOpen && (
          <div style={{ position: 'absolute', zIndex: 1, top: '90px', right: "0px" }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setSelectedDate(date.toISOString().split('T')[0]); // Сохраняем выбранную дату в формате ГГГГ-ММ-ДД
                setCurrentPage(0); // Сбрасываем текущую страницу при выборе новой даты
                setIsDatePickerOpen(false); // Закрываем календарь после выбора даты
              }}
              locale="ru" // Устанавливаем локаль на русский
              dateFormat="dd.MM.yyyy" // Формат даты
              inline // Отображаем календарь встроенным
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