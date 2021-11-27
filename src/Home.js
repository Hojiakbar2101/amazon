import React from "react";
import "./Home.css";
import Product from "./Product";
// https://aggie.io/rfr9rl8fr
const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__image"
      />
      {/* Pruduct */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innavation Creates Radically Successful Businesses PaperBack"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="18964011"
          title="Kenwood KMM021 7QT Chef Titanium Kitchen Machine"
          price={349}
          rating={3}
          image="https://m.media-amazon.com/images/I/81tCWi0BusL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="00087524"
          title="L8star Fitness Tracker, Continuous Heart Rate Monitor IP67 Waterproof Smart Activity"
          price={20}
          rating={1}
          image="https://m.media-amazon.com/images/I/61ZBJMdyq3L._AC_SX679_.jpg"
        />
        <Product
          id="14698223"
          title="ATPro 1080p Webcam with Microphone for Desktop or Laptops, USB HD Plug and Play Computer Web Camera for Streaming"
          price={7}
          rating={1}
          image="https://m.media-amazon.com/images/I/61dy8KNWTdS._AC_SY879_.jpg"
        />
        <Product
          id="12321341"
          title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
          price={999.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SX342_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="25451535"
          title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
          price={11.96}
          rating={2.99}
          image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="15489701"
          title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
          price={24.49}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
        />
        <Product
          id="18956102"
          title="System Design Interview – An insider's guide, Second Edition"
          price={35.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41WOfByjSPL._SX331_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="00516327"
          title='HP Pavilion Gaming Laptop 15-dk0096wm - Core i5-9300H - 8 GB RAM - 256 GB SSD - GTX 1650 4 GB Graphics Card - 15.6" Full HD 1920x1080 LCD - Webcam - Wireless - Bluetooth - Windows 10'
          price={739}
          rating={5}
          image="https://m.media-amazon.com/images/I/711l-WRAV-L._AC_SX466_.jpg"
        />
        <Product
          id="17546327"
          title="Xiaomi Mi 10T - Smartphone 6 GB + 128 GB, Dual Sim, Alexa Hands-Free, Nero (Cosmic Black)"
          price={899}
          rating={4}
          image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="14796132"
          title="System Design Interview – An insider's guide, Second Edition"
          price={350}
          rating={2}
          image="https://m.media-amazon.com/images/I/814Ih1CPFDL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
