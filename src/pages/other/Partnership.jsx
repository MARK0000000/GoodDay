// Partnership.js
import React, { useRef, useState } from 'react';
import MyInput from '../../components/UI/input/MyInput';
import InfoAboutApp from '../../components/partnershipPage/InfoAboutApp';
import InfoPartnership from '../../components/partnershipPage/InfoPartnership';
import UsPartners from '../../components/partnershipPage/UsPartners';
import BreadCrumbs from '../../components/main/Breadcrambs';
import BecomePartnes from '../../components/partnershipPage/BecomePartnes';
import { fetchPost } from '../../api/fetch';
import useEndpoints from '../../api/apiConfig';

export default function Partnership() {
  const endpoints = useEndpoints();

  const companyNameInput = useRef();
  const companyContactInput = useRef();
  const fieldOfActivityInput = useRef();
  const activityInput = useRef();
  const cityInput = useRef();
  const nameInput = useRef();
  const phoneInput = useRef();

  const [isSubmit, setIsSubmit] = useState(false)
  const [errors, setErrors] = useState({
    companyName: '',
    companyContact: '',
    fieldOfActivity: '',
    activity: '',
    city: '',
    name: '',
    phone: '',
  });

  const validateInput = (inputValue, inputName) => {
    if (!inputValue.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [inputName]: 'Поле не заполнено' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' }));
    }
  };

  const handleFocus = (inputName) => {
    setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const companyName = companyNameInput.current.value;
    const companyContact = companyContactInput.current.value;
    const fieldOfActivity = fieldOfActivityInput.current.value;
    const activity = activityInput.current.value;
    const city = cityInput.current.value;
    const name = nameInput.current.value;
    const phone = phoneInput.current.value;

    validateInput(companyName, 'companyName');
    validateInput(companyContact, 'companyContact');
    validateInput(fieldOfActivity, 'fieldOfActivity');
    validateInput(activity, 'activity');
    validateInput(city, 'city');
    validateInput(name, 'name');
    validateInput(phone, 'phone');

    if (
      !errors.companyName &&
      !errors.companyContact &&
      !errors.fieldOfActivity &&
      !errors.activity &&
      !errors.city &&
      !errors.name &&
      !errors.phone
    ) {
      const data = {
        companyName: companyName,
        webLink: companyContact,
        businessArea: fieldOfActivity,
        serviceOrProduct: activity,
        cityName: city,
        partnerName: name,
        phone: phone,
      };
      console.log(data)
      const res = fetchPost(data, endpoints.PARTNERSHIP_FORM);
    }
  };

  return (
    <>
      <BreadCrumbs current={'Для вашего бизнеса'} />
      <section className='partnership'>
        <h2 className='partnership__title'>Стать партнёром Good Day</h2>
        <div className='partnership__content'>
          <form action='' className='partnership__form' onSubmit={handleSubmit}>
            <label htmlFor='companyNameInput' className='partnership__label'>
              Название компании
            </label>
            <MyInput
              ref={companyNameInput}
              id='companyNameInput'
              onFocus={() => handleFocus('companyName')}
            />
            <span className='partnership__inputVal'>{errors.companyName}</span>

            <label htmlFor='companyContactInput' className='partnership__label'>
              Сайт компании или страница в соцсетях
            </label>
            <MyInput
              ref={companyContactInput}
              id='companyContactInput'
              placeholder='http://'
              onFocus={() => handleFocus('companyContact')}
            />
            <span className='partnership__inputVal'>{errors.companyContact}</span>

            <label htmlFor='fieldOfActivityInput' className='partnership__label'>
              Сфера деятельности
            </label>
            <MyInput
              ref={fieldOfActivityInput}
              id='fieldOfActivityInput'
              placeholder='Выберите сферу'
              onFocus={() => handleFocus('fieldOfActivity')}
            />
            <span className='partnership__inputVal'>{errors.fieldOfActivity}</span>

            <label htmlFor='activityInput' className='partnership__label'>
              Услуга или товар который вы хотите разместить
            </label>
            <MyInput
              ref={activityInput}
              id='activityInput'
              placeholder='Краткое описание'
              onFocus={() => handleFocus('activity')}
            />
            <span className='partnership__inputVal'>{errors.activity}</span>

            <label htmlFor='cityInput' className='partnership__label'>
              Город, где будет продаваться услуга
            </label>
            <MyInput
              ref={cityInput}
              id='cityInput'
              onFocus={() => handleFocus('city')}
            />
            <span className='partnership__inputVal'>{errors.city}</span>

            <label htmlFor='nameInput' className='partnership__label'>
              Имя
            </label>
            <MyInput
              ref={nameInput}
              id='nameInput'
              placeholder='Введите Ваше имя'
              onFocus={() => handleFocus('name')}
            />
            <span className='partnership__inputVal'>{errors.name}</span>

            <label htmlFor='phoneInput' className='partnership__label'>
              Телефон для связи
            </label>
            <MyInput
              ref={phoneInput}
              id='phoneInput'
              placeholder='+375111111111'
              onFocus={() => handleFocus('phone')}
            />
            <span className='partnership__inputVal'>{errors.phone}</span>

            <div>
              <button className='partnership__formBtn'>Отправить</button>
            </div>
          </form>
          <div className='partnership__contacts'>
            <h3 className='partnership__title'>Наши контакты</h3>
            <span className='partnership__contact'>Email</span>
            <span className='partnership__contact'>partners@good-day.by</span>
          </div>
        </div>
      </section>
      <InfoAboutApp />
      <InfoPartnership />
      <UsPartners />
      <BecomePartnes />
    </>
  );
}