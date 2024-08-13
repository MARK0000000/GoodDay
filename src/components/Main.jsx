import React, {useState, useEffect} from 'react'
import { Outlet} from 'react-router-dom';
import '../styles/style.scss'
import Header from './main/Header';
import Footer from './main/Footer';

export default function Main() {

  return (
    <>
    <Header/>
    <main className="container">
      <div className='main'>
        <Outlet />
      </div>
    </main>
    <Footer/>
    </>
  )
}
