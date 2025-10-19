import React, { useMemo, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Feed from './pages/Feed.jsx'
import About from './pages/About.jsx'
import { IntlProvider, useIntl } from 'react-intl'
import { messages } from './i18n/messages.js'
function NavBar({ locale, setLocale }){
  const { formatMessage: t } = useIntl()
  return (<header className="header">
      <div className="brand">Vision3D</div>
      <nav className="nav">
        <NavLink to="/" end className="link">{t({id:'nav_home'})}</NavLink>
        <NavLink to="/feed" className="link">{t({id:'nav_feed'})}</NavLink>
        <NavLink to="/about" className="link">{t({id:'nav_about'})}</NavLink>
      </nav>
      <div className="lang-switcher">
        <button className={locale==='es'?'active':''} onClick={()=>setLocale('es')}>ES</button>
        <button className={locale==='en'?'active':''} onClick={()=>setLocale('en')}>EN</button>
      </div>
    </header>)
}
export default function App() {
  const [locale, setLocale] = useState(navigator.language.startsWith('en') ? 'en' : 'es')
  const intlMessages = useMemo(() => messages[locale] || messages.es, [locale])
  return (
    <IntlProvider locale={locale} messages={intlMessages}>
      <div className="app">
        <NavBar locale={locale} setLocale={setLocale} />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">© {new Date().getFullYear()} Vision3D</footer>
      </div>
    </IntlProvider>
  )
}
