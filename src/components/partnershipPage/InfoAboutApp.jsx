import React from 'react';
import phone from '../../images/other/phone.png';
import useEndpoints from '../../api/apiConfig';
export default function InfoAboutApp() {
  const endpoints = useEndpoints();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${endpoints.PDF + 'presentation'}`;
    link.download = 'presentation.pdf';
    link.click();
  };

  return (
    <section className='infoAboutApp__container'>
      <article className="infoAboutApp__content">
        <h2 className="infoAboutApp__title">Что такое Good Day?</h2>
        <p className="infoAboutApp__text">
          Мы - мобильное приложение Good Day, которое позволяет экономить
          всегда и везде Экономия касается не только денег, но и времени. Секрет
          нашего успеха наши партнеры. На данный момент, Good Day имеет
          представительства более чем в 20 городах Беларуси и России и более
          1600 партнеров, которые нам доверяют и помогают каждый день делать
          наших клиентов чуть более счастливыми, чем вчера.
        </p>
        <button className="infoAboutApp__button" onClick={handleDownload}>Презентация</button>
      </article>
      <img src={phone} alt="" className="infoAboutApp__img" />
    </section>
  );
}