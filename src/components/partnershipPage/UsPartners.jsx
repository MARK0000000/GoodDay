import React from 'react'
import par1 from '../../images/other/партнеры1.png'
import par2 from '../../images/other/партнеры2.png'
import par3 from '../../images/other/партнеры3.png'
import par4 from '../../images/other/партнеры4.png'
import par5 from '../../images/other/партнеры5.png'
import par6 from '../../images/other/партнеры6.png'
import par7 from '../../images/other/партнеры7.png'
import par8 from '../../images/other/партнеры8.png'
import par9 from '../../images/other/партнеры9.png'

export default function UsPartners() {
  
  return (
    <section className='usPartners'>
        <h3 className="usPartners__title">
            Наши партнёры
        </h3>
        <div className='usPartners__icons-box'>
            <img src={par1} alt="" className="usPartners__icon" />
            <img src={par2} alt="" className="usPartners__icon" />
            <img src={par3} alt="" className="usPartners__icon" />
            <img src={par4} alt="" className="usPartners__icon" />
            <img src={par5} alt="" className="usPartners__icon usPartners__icon_border" />
            <img src={par6} alt="" className="usPartners__icon" />
            <img src={par7} alt="" className="usPartners__icon" />
            <img src={par8} alt="" className="usPartners__icon" />
            <img src={par9} alt="" className="usPartners__icon" />
            <div className="usPartners__more-icon">
                <span>и еще более 1200 компаний</span>
            </div>
        </div>
    </section>
  )
}
