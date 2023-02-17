import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SajjadAbout from './SajjadAbout';
import SajjadWorks from './SajjadWorks';
import SajjadBlogs from './SajjadBlogs';
import SajjadContact from './SajjadContact';
import SajjadHome from './SajjadHome';


function SajjadPages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SajjadHome/>} />
        <Route path='/about' element={<SajjadAbout/>} />
        <Route path='/works' element={<SajjadWorks/>} />
        <Route path='/blogs' element={<SajjadBlogs/>} />
        <Route path='/contact' element={<SajjadContact/>} />
      </Routes>
    </div>
  )
}

export default SajjadPages;
