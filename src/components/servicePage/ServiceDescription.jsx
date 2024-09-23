import React from 'react'
import { getValueOrDefault } from '../../utils/getValueOrDefault'

export default function ServiceDescription({service}) {
  
  return (
    <section className="serviceDescription">
        <h3 className="serviceDescription__title">Описание</h3>
        <p className="serviceDescription__text">{getValueOrDefault(service.description, "Описание не указано")}</p>
    </section>
  )
}
