import React from 'react';
import { UserDetails } from '../pages/UserDetails';
import { Footer } from './Footer';
import {Header } from './Header';
export const DefaultLayout = () => {
      return (
        <div className='default-layout'>
            <header className='header'>
                <Header/>
            </header>
            <main><UserDetails/></main>
            <footer className='footer'>
                <Footer/>
            </footer>
        </div>
      )
    }
    