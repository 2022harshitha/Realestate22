import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import { Router, Route, Form,} from 'react-router-dom'
import Header from './components/header/Header'
import Formbox from './components/formbox/Formbox'
import Formbox1 from './components/formbox1/Formbox1'
import Formbox2 from './components/formbox2/Formbox2'
import Formbox3 from './components/formbox3/Formbox3'
const App = () => {
  return (
    <div className='main-wrapper'>
      <Sidebar/>
      <div className='main-content'>

      <Header/>   
     <Formbox/>
     <Formbox1 />
     <Formbox2 />
     <Formbox3 />
      </div>
    </div>
  )
}

export default App