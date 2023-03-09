import React from 'react'
import { NavBar } from '../components/NavBar';
import {Header} from '../components/Header';
import { Footer } from '../components/Footer';
import {Slider } from '../components/Slider';

import 'bootstrap/dist/css/bootstrap.min.css';
function about() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default about