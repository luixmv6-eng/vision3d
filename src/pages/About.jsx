import React from 'react'
import { useIntl } from 'react-intl'
export default function About(){
  const { formatMessage: t } = useIntl()
  return (
    <section className="grid">
      <div className="card" style={{gridColumn:'span 12'}}>
        <div className="content">
          <h2 className="section-title">{t({id:'about_title'})}</h2>
          <h3>{t({id:'mission'})}</h3><p className="small">{t({id:'mission_body'})}</p>
          <h3>{t({id:'vision'})}</h3><p className="small">{t({id:'vision_body'})}</p>
          <h3>{t({id:'values'})}</h3>
          <ul>
            <li className="small">{t({id:'values_list_1'})}</li>
            <li className="small">{t({id:'values_list_2'})}</li>
            <li className="small">{t({id:'values_list_3'})}</li>
            <li className="small">{t({id:'values_list_4'})}</li>
            <li className="small">{t({id:'values_list_5'})}</li>
            <li className="small">{t({id:'values_list_6'})}</li>
            <li className="small">{t({id:'values_list_7'})}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
