import React, {useRef, useState} from 'react'
import MyInput from '../../components/UI/input/MyInput'
import InfoAboutApp from '../../components/partnershipPage/InfoAboutApp';
import InfoPartnership from '../../components/partnershipPage/InfoPartnership';
import UsPartners from '../../components/partnershipPage/UsPartners';
import phone from '../../images/other/phone.png'

export default function Partnership() {

    const companyNameInput = useRef();
    const companyContactInput = useRef();
    const fieldOfActivityInput = useRef();
    const activityInput = useRef();
    const cityInput = useRef();
    const nameInput = useRef();
    const phoneInput = useRef();
  
    const [companyNameVal, setCompanyNameVal] = useState('')
    const [companyContactVal, setCompanyContactVal] = useState('')
    const [fieldOfActivityVal, setFieldOfActivityVal] = useState('')
    const [activityVal, setActivityVal] = useState('')
    const [cityVal, setCityVal] = useState('')
    const [nameVal, setNameVal] = useState('')
    const [phoneVal, setPhoneVal] = useState('')

    function handleSubmit (event) {
        event.preventDefault()


        let companyName,
            companyContact,
            fieldOfActivity, 
            activity,
            city,
            name, 
            phone;

        companyName = companyNameInput.current.value
        companyContact = companyContactInput.current.value
        fieldOfActivity = fieldOfActivityInput.current.value
        activity = activityInput.current.value
        city = cityInput.current.value
        name = nameInput.current.value
        phone = phoneInput.current.value
    
    }

  return (
    <>
    <section className='partnership'>
        <h2 className="partnership__title">Стать партнёром Good Day</h2>
        <div className="partnership__content">
            <form action="" className="partnership__form" onSubmit={handleSubmit}>

                <label htmlFor="companyNameInput" className="partnership__label">Название компании</label>
                <MyInput ref={companyNameInput} id='companyNameInput'/>
                <span className="partnership__inputVal">{companyNameVal}</span>

                <label htmlFor="companyContactInput" className="partnership__label">Сайт компании или страница в соцсетях</label>
                <MyInput ref={companyContactInput} id='companyContactInput' placeholder='http://'/>
                <span className="partnership__inputVal">{companyContactVal}</span>

                <label htmlFor="fieldOfActivityInput" className="partnership__label">Сфера деятельности</label>
                <MyInput ref={fieldOfActivityInput} id='fieldOfActivityInput' placeholder='Выберите сферу'/>
                <span className="partnership__inputVal">{fieldOfActivityVal}</span>

                <label htmlFor="activityInput" className="partnership__label">Услуга или товар который вы хотите разместить</label>
                <MyInput ref={activityInput} id='activityInput' placeholder='Краткое описание'/>
                <span className="partnership__inputVal">{activityVal}</span>

                <label htmlFor="cityInput" className="partnership__label">Город, где будет продаваться услуга</label>
                <MyInput ref={cityInput} id='cityInput'/>
                <span className="partnership__inputVal">{cityVal}</span>

                <label htmlFor="nameInput" className="partnership__label">Имя</label>
                <MyInput ref={nameInput} id='nameInput' placeholder='Введите Ваше имя'/>
                <span className="partnership__inputVal">{nameVal}</span>

                <label htmlFor="phoneInput" className="partnership__label">Телефон для связи</label>
                <MyInput ref={phoneInput} id='phoneInput' placeholder='+375111111111'/>
                <span className="partnership__inputVal">{phoneVal}</span>

                <button className="partnership__formBtn">
                    Отправить
                </button>
            </form>
            <div className="partnership__contacts">
                <h3 className="partnership__title">Наши контакты</h3>
                <span className="partnership__contact">Email</span>
                <span className="partnership__contact">partners@good-day.by</span>
            </div>
        </div>
    </section>
    <InfoAboutApp/>
    <InfoPartnership/>
    <UsPartners/>
    <div className="becomePartner">
        <img src={phone} alt="" className="becomePartner__img" />
        <div className="becomePartner__content">
            <span className="becomePartner__text becomePartner__text_bold">Good Day</span>
            <span className="becomePartner__text">для вашего бизнеса</span>
            <button className="becomePartner__button">Стать партнером</button>
        </div>
    </div>
    </>
  )
}
