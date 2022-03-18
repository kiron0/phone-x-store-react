import React from 'react';
import './Header.css'
import logo from '../Header/images/favicon.png'

const Header = () => {
    return (
        <div>
            <div className="collapse header" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4>Find the phone of your choice</h4>
                            <p>We do not guaranteed that the information on this page is 100% accurate
                                notes.</p>
                        </div>
                    </div>
                    {/* <div id="theme-toggler" className="fas fa-moon"></div> */}
                </div>
            </div>

            <div className="navbar navbar-light py-4">
                <div className="container">
                    <img className='img-fluid icon' src={logo} alt="" />
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <strong className="title">Phone X Store</strong>
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

// let themeToggler = document.querySelector('#theme-toggler');

// themeToggler.onclick = () => {
//   themeToggler.classNameList.toggle('fa-sun');
//   if (themeToggler.classNameList.contains('fa-sun')) {
//     document.body.classNameList.add('active');
//   } else {
//     document.body.classNameList.remove('active');
//   }
// }

export default Header;