import React, { useContext } from 'react';
import { Panel, Timeline } from 'rsuite';
import { UserContext } from '../../App';
import RiderImg from '../../image/Group 1151.png';
import RiderName from '../../image/Group 1152.png';
import './PlaceOrder.css';

const PlaceOrder = () => {
    
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    Google Map Will Show Later
                </div>
                <div className="col-md-5 col-sm-12">
                    <Panel className="place-cart d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                          <img className="rider-img"  src={RiderImg} alt=""/>  
                        </div>  
                        <Panel className="info mt-3 mb-2">
                            <Timeline>
                                <Timeline.Item>Your Location</Timeline.Item>
                                <Timeline.Item>
                                    Shop Address
                                    <p>Sylhet Shop</p>
                                </Timeline.Item>
                            </Timeline>
                        </Panel>
                        <div className="date mt-3 mb-3">
                            <h3>{new Date().toLocaleTimeString('en-DB')}</h3>
                        </div>
                        <Panel className="info-r">
                            <img className="me-2 cap" src={RiderName} alt=""/>Hamim
                        </Panel>

                        <div className="d-flex justify-content-center">
                          <button className="btn btn-primary w-75 mt-3">Contact</button>  
                        </div>
                        
                    </Panel>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;