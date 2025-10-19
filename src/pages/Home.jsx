import React from 'react'
import { useIntl } from 'react-intl'
import '@google/model-viewer'
export default function Home(){
  const { formatMessage: t } = useIntl()
  return (
    <section className="grid">
      <div className="card" style={{gridColumn:'span 12'}}>
        <div className="content">
          <h1>{t({id:'home_title'})}</h1>
          <p className="small">{t({id:'home_sub'})}</p>
        </div>
      </div>
      <div className="card" style={{gridColumn:'span 12'}}>
        <div className="mv-wrap">
          <model-viewer src="/src/assets/models/cocacola.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls auto-rotate></model-viewer>
        </div>
        <div className="content">
          <p className="small">{t({id:'ar_hint'})}</p>
        </div>
      </div>
    </section>
  )
}
