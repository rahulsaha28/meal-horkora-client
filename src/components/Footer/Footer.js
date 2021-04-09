import React from 'react';
import './Footer.css';
import brandLogo from '../../image/logo (1).png';

const Footer = () => {
    return (
        <div className="edit-footer">
            <div className="container">
                <div className="row p-4">
                    <div className="col-md-4">
                        <img className="s-70x70" src={brandLogo} alt="" /><span className="meal">Meal</span> Horkcra
                    </div>
                    <div className="col-md-4">
                        <ul className="edit-ul">
                            <li>About Online Food</li>
                            <li>Read Our Blog</li>
                            <li>Sign Up To Deliver</li>
                            <li>Add Your Restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="edit-ul">
                            <li>Gets Help</li>
                            <li>Read FAQs</li>
                            <li>View All Cities</li>

                        </ul>
                    </div>
                </div>
                <div className="row"></div>
            </div>
        </div>
    );
};

export default Footer;