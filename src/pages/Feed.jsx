import React, { useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import ModelCard from '../components/ModelCard.jsx'
export default function Feed(){
  const { formatMessage: t } = useIntl()
  const [predefined, setPredefined] = useState([])
  const [userFolderItems, setUserFolderItems] = useState([])
  useEffect(()=>{
    fetch('/src/assets/models/models.json').then(r=>r.json()).then(setPredefined).catch(()=>setPredefined([]))
    fetch('/user-models/index.json').then(r=>r.json()).then(setUserFolderItems).catch(()=>setUserFolderItems([]))
  }, [])
  const persistentFeed = useMemo(()=>[...userFolderItems, ...predefined], [userFolderItems, predefined])
  return (
    <section>
      <h2 className="section-title">{t({id:'feed_title'})}</h2>
      <div className="feed-list">
        {persistentFeed.map((item, i)=>(<ModelCard key={i} item={item} />))}
      </div>
    </section>
  )
}
