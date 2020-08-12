import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="s"
      />
      <div className="home__row">
        <Product
          id="123456"
          title="The Lean Startup : Now Constant Innvoation Creats Redically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="123456782"
          title="Kenwood KM020 Titanium Major Stand Mixer 220-240 Volt/ 50-60Hz INTERNATIONAL VOLTAGE & PLUG FOR OVERSEAS USE ONLY WILL NOT WORK IN THE US, OUR PRODUCT ARE BRAND NEW, WE DO NOT SELL USED OR REFURBISHED"
          price={11.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41hbQSkaNxL._AC_.jpg"
        />
      </div>
      {/* ********* */}
      <div className="home__row">
        <Product
          id="1234563"
          title="Smart Watch, UMIDIGI UFit Fitness Tracker for Men Women with Blood Oxygen Meter Heart Rate Monitor Blood Pressure Monitor 5ATM Waterproof, Smartwatch for iPhone Android Phones"
          price={646.7}
          rating={3}
          image="https://m.media-amazon.com/images/I/610jLK5gCaL._AC_UY218_.jpg"
        />
        <Product
          id="123456453"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={619.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/6162WMQWhVL._AC_UY218_.jpg"
        />
        <Product
          id="123456"
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
          price={423.8}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12233456"
          title="SAMSUNG 65-inch Class Crystal UHD TU-7000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65TU7000FXZA, 2020 Model)"
          price={347.9}
          rating={3}
          image="https://m.media-amazon.com/images/I/71qqCWuXuYL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
