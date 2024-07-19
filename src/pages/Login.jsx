import React, {useState, useContext, useEffect, useRef} from 'react';
import MyInput from '../componenets/UI/input/MyInput';
import { validatePassword, validateRepeatPassword } from '../utils/validation';
import { fetchPost } from '../APi/fetch';
import { useAuth } from '../hooks/useAuth';
import MyPasswordInput from '../componenets/UI/input/MyPasswordInput';
import SingUp from '../componenets/login/SingUp';
import SingIn from '../componenets/login/SingIn';
import { fetchDelete } from '../APi/fetch';

const Login = ({}) => {
  //fetchDelete('https://api-gd.sava.site/user/delete')

  const [typeOfLog, setTypeOfLog] = useState('in')
  const {login} = useAuth()

  

  // const restorePassword = event => {
  //   event.preventDefault()
  //   let email, code, password, repeatPassword;
  //   email = emailInput.current.value
  //   if (email !== "") {
  //     setEnterEmail(true)

  //   } 
  // }

  // const [forgotPasswordPage, setForgotPasswordPage] = useState(false)
  // const [enterEmail, setEnterEmail] = useState(false)
  // const [correctCode, setCorrectCode] = useState(false)

 
  return (
    <div className='container container_login'>
      <div className='login'>
        <h1 className='login__title'>
          <span onClick={() => setTypeOfLog('in')} className={`${typeOfLog == "in" ? "active" : ""}`}>Авторизация</span>
          <span className='login__title_slash'>  /  </span>
          <span onClick={() => setTypeOfLog('up')} className={`${typeOfLog == "up" ? "active" : ""}`}>Регистрация</span>
        </h1>
          {typeOfLog === 'up' ?
              <SingUp/>
              :
              <SingIn/>

          }
      </div>
    </div> 
  );
}


export default Login;
