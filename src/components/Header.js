import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Return</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <a href="tel:+998992807576">+998 (99) 280 75 76</a></p>
            </div>
          </div>
        </div>
      </header>
      <section className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h1>
                <Link>Khadicha.</Link>
              </h1>
            </div>
            <div className="col-5"></div>
            <div className="col-5"></div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Header