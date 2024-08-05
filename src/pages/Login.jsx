import React, {useState, useContext, useEffect, useRef} from 'react';
import MyInput from '../components/UI/input/MyInput';
import { validatePassword, validateRepeatPassword } from '../utils/validation';
import { fetchPost } from '../api/fetch';
import { useAuth } from '../hooks/useAuth';
import MyPasswordInput from '../components/UI/input/MyPasswordInput';
import SingUp from '../components/login/SingUp';
import SingIn from '../components/login/SingIn';
import { fetchDelete } from '../api/fetch';

const Login = ({}) => {
  const [typeOfLog, setTypeOfLog] = useState('in')
 
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
