import React from 'react'
import '@google/model-viewer'
import { useIntl } from 'react-intl'
export default function ModelCard({ item }){
  const { locale } = useIntl()
  const name = locale.startsWith('en') ? (item.name_en || item.name) : (item.name_es || item.name)
  const description = locale.startsWith('en') ? (item.description_en || item.description) : (item.description_es || item.description)
  return (
    <div className="card">
      <div className="mv-wrap">
        <model-viewer src={item.src} ar ar-modes="webxr scene-viewer quick-look" camera-controls touch-action="pan-y" shadow-intensity="1" exposure="0.9" alt={name}></model-viewer>
      </div>
      <div className="content">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}}>
          <strong>{name}</strong><span className="badge">.glTF</span>
        </div>
        <p className="small">{description}</p>
      </div>
    </div>
  )
}
