import React from 'react'

export default function InfoWidget({links, activeLink, handleLinkClick}) {
  return (
    <div className="widget-info"> 
    {links.map((link, index) => 
    <>
        <span
        key={index}
        className={`widget-info__link ${activeLink === link.title ? 'widget-info__link_active' : ''}`}
        onClick={() => handleLinkClick(link.title)}
        >
        {link.title}
        </span>
        {link.link &&
          <button   onClick={(() => window.open(link.link, 'blank'))} className='timetable__webLinkBtn'>
            Перейти на сайт
        </button>    
        }
    </>
    )}  
    <hr className="widget-info__hr"/>
    <div className="widget-info__orangeLine"></div>
        {links.map((link, index) => 
            activeLink === link.title && <div className="widget-info__content" key={index}> {link.body}</div>
        )}

    </div> 
  )
}
