import React, { useEffect } from 'react'
import Asosiy from './Components/Asosiy/Asosiy';
import { Routes, Route } from 'react-router-dom';
import NoteFound from './Components/Note_Found/NoteFound';
import Yangiliklar_All from './Components/Yangiliklar/Yangiliklar_All';
import KurslarAll from './Components/kurslar/KurslarAll'
import MediaAll from './Components/Media/MediaAll';
import Biz_Haqimizda from './Components/Biz_Haqimizda/Biz_Haqimizda';
import Register from './Components/Register/Register';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
      Aos.init();
  }, [])
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Asosiy/>}/> 
            <Route path='/yangiliklar' element={<Yangiliklar_All/>}/> 
            <Route path='/kurslar' element={<KurslarAll/>}/> 
            <Route path='/media' element={<MediaAll/>}/> 
            <Route path='/Biz_haqimizda' element={<Biz_Haqimizda/>}/> 
            <Route path='/register' element={<Register/>}/> 
            <Route path='*' element={<NoteFound/>}/> 
        </Routes>        
    </div>
  );
}

export default App;
