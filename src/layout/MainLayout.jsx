// import React from 'react';
import { Home } from '../pages/Home';
import { About } from '../components/About';
import { Subscribe } from '../components/Subscribe';
import Shop from '../components/Shop';
import WhyUs from '../components/WhyUs';
import Stats from '../components/Stats';
import OurProducts from '../components/OurProducts';


export const MainLayout = () => {
  return (
    <div>
      <section id='home'>
      <Home/>
      <section id='stats'>
      <Stats/>
      </section>
      </section>
      <section id='us'>
      <WhyUs/>
      </section>
      <section id='about'>
      <About/>
      </section>
      <section id='products'>
      <OurProducts/>
      </section>
      <section id='shop'>
      <Shop/>
      </section>
      <section id='contact'>
      <Subscribe/>
      </section>
    </div>
  )
}
