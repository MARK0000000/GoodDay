import React, {useState, useRef} from 'react'
import MyInput from '../UI/input/MyInput'
import MyPasswordInput from '../UI/input/MyPasswordInput'
import { validatePassword } from '../../utils/validation'
import { useAuth } from '../../hooks/useAuth'
import { fetchPost } from '../../api/fetch'
import { validateRepeatPassword } from '../../utils/validation'
import endpoints from '../../api/apiConfig'


export default function SingUp() {
    const {login} = useAuth()
    const [loaderForAuth, setloaderForAuth] = useState('')

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const countryInput = useRef();
    const cityInput = useRef();
    const passwordInput = useRef();
    const repeatPasswordInput = useRef();  
    const fromInput = useRef();
  
    const [firstNameVal, setFirstNameVal] = useState('')
    const [lastNameVal, setLastNameVal] = useState('')
    const [emailVal, setEmailVal] = useState('')
    const [phoneVal, setPhoneVal] = useState('')
    const [countryVal, setCountryVal] = useState('')
    const [cityVal, setCityVal] = useState('')
    const [passwordVal, setPasswordVal] = useState([])
    const [repPasswordVal, setRepPasswordVal] = useState("")
    const [fromVal, setFromVal] = useState('')
  
    const  handleLogin = async (event) => {
    event.preventDefault()


    let firstName,
        lastName,
        email, 
        phone,
        city,
        country, 
        password, 
        repeatPassword,
        from;

    firstName= firstNameInput.current.value
    lastName = lastNameInput.current.value
    email = emailInput.current.value
    phone = phoneInput.current.value
    country = countryInput.current.value
    city = cityInput .current.value
    password = passwordInput.current.value
    repeatPassword = repeatPasswordInput.current.value
    from = fromInput.current.value


    if (firstName === "") {
        setFirstNameVal(`Введите имя`)
        return;
    } 
    if (lastName === "") {
        setLastNameVal(`Введите фамилию`)
        return;
    } 
    if (email === "") {
      setEmailVal(`Введите email`)
      return;
    } 
    if (phone === "") {
        setPhoneVal(`Введите номер телефона`)
        return;
    } 
    if (country === "") {
        setCountryVal(`Укажите страну`)
        return;
    } 
    if (city === "") {
        setCityVal(`Укажите город`)
        return;
    } 
  
    // let validationPassword = validatePassword(password)
    // if (validationPassword !== true) {
    //   setPasswordVal(validationPassword.map(error => `${error}`));
    //   return;
    // }
    let validationRepeatPassword =  validateRepeatPassword(password, repeatPassword)
    if (validationRepeatPassword !== true) {
      setRepPasswordVal(`пароли не совпадают`)
      return;

    }
    if (from === "") {
        setFromVal(`Укажите организацию`)
        return;
    } 
    setloaderForAuth("_sending")
    const personData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        countryId: country,
        cityId: city,
        password: password,
        from: from,
    }
    const  newUser = await fetchPost(personData, endpoints.REGISTRATION);
    console.log(newUser)
    newUser && await login( newUser );
    
  }


  return (
    <form className='login__form' onSubmit={handleLogin}>
        <MyInput
            placeholder="Имя"
            type="text"
            ref={firstNameInput}
            onFocus={() => setFirstNameVal('')}
            autoComplete="username"
        />
        <span>
            {firstNameVal}
        </span>

        <MyInput
            placeholder="Фамилия"
            type="text"
            ref={lastNameInput}
            onFocus={() => setLastNameVal('')}
        />
        <span>
            {lastNameVal}
        </span>

        <MyInput type="email" placeholder='email' 
            ref={emailInput}  
            onFocus={() => setEmailVal('')}
        /> 
        <span>
            {emailVal}
        </span>

        <MyInput
            placeholder="Номер телефона"
            type="tel"
            ref={phoneInput}
            onFocus={() => setPhoneVal('')}
            autoComplete="telephone"
        />
        <span>
            {phoneVal}
        </span>

        <MyInput
            placeholder="Страна"
            type="country"
            ref={countryInput}
            onFocus={() => setCountryVal('')}
            autoComplete="country"
        />
        <span>
            {countryVal}
        </span>

        <MyInput
            placeholder="Город"
            type="city"
            //autocomplete="city"
            ref={cityInput}
            onFocus={() => setCityVal('')}
        />
        <span>
            {cityVal}
        </span>

        <MyPasswordInput
              placeholder="Пароль"
              ref={passwordInput}
              onFocus={() => setPasswordVal([])}
              autoComplete="current-password"
        />
        {passwordVal.map((item) => 
            <p>
            {item}
            </p>
        )}
        <MyPasswordInput 
            placeholder="Повторите пароль"
            ref={repeatPasswordInput}
            onFocus={() => setRepPasswordVal("")}
            autoComplete="current-password"
        />
        <span>
            {repPasswordVal}
        </span>
        <MyInput
            placeholder="Организация"
            type="text"
            ref={fromInput}
            onFocus={() => setFromVal('')}
        />
        <span>
            {fromVal}
        </span>

        <button 
            className={`login__btn login__btn${loaderForAuth}`} 
            >
            Зарегестрироваться
        </button>


    </form>
  )
}
