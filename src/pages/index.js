import React from 'react';
import { NavBar } from '../components/NavBar';
import { Head } from '../components/Head';
import { Companies} from '../components/Companies';

import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function index() {
  return (
    <div>

        <NavBar/>
        <Head/>
        <Companies/>
        <br/>
        <br/>
        <Footer/>

        </div>
  )
}

export default index