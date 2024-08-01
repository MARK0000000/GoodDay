import React, {useState, useRef} from 'react'
import MyInput from '../UI/input/MyInput'
import MyPasswordInput from '../UI/input/MyPasswordInput'
import { validatePassword } from '../../utils/validation'
import { useAuth } from '../../hooks/useAuth'
import { fetchPost } from '../../api/fetch'
import endpoints from '../../api/apiConfig'

export default function SingIn() {
    const {login} = useAuth()

    const [loaderForAuth, setloaderForAuth] = useState('')
    const emailInput = useRef();
    const passwordInput = useRef();

    const [emailVal, setEmailVal] = useState('')
    const [passwordVal, setPasswordVal] = useState([])

    const  handleLogin = async (event) => {
    event.preventDefault()

    let email, password;

    email = emailInput.current.value;
    password = passwordInput.current.value;
    
    if (email === "") {
      setEmailVal(`пустой`)
      return;
    }

    // let validationPassword = validatePassword(password)
    // if (validationPassword !== true) {
    //   setPasswordVal(validationPassword.map(error => `${error}`));
    //   return;
    // } else {
        setloaderForAuth("_sending")
        const personData = {
            email: email,
            password: password,
        }
        const getUser = await fetchPost(personData, endpoints.LOGIN);
        getUser && await login( getUser );
    //}
  }



  return (
    <form className='login__form' onSubmit={handleLogin}>
        <MyInput 
            type="email" 
            placeholder='email' 
            ref={emailInput}  
            autoComplete="email"
            onFocus={() => setEmailVal('')}
        /> 
        <span>
            {emailVal}
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
        <button 
            className={`login__btn login__btn${loaderForAuth}`} 
            >
            Войти
        </button>
    </form>
  )
}
