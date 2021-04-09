import React, { useEffect, useState } from 'react';
import { Icon } from 'rsuite';
import feedBackData from '../../feedbackData.json';
import './FeedBack.css';

const FeedBack = () => {
    const [feedBacks, setFeedBacks] = useState([]);
    useEffect(() => {
        setFeedBacks(feedBackData)
    }, []);

    return (

        <>
            <div className="col-md-12 feedback-section mb-4">
                <h3>Why you choose us</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, debitis.</p>
            </div>
            <div className="col-md-12">
                <div className="row">
                    {
                        feedBacks.map(({ image, name, description }) => {
                            return (
                                <div key={ Math.random() } className="col-md-4 mb-3">
                                    <div className="card edit-card">
                                        <img className="card-img-top" src={image} alt="" />
                                        <div className="card-body">
                                            <div className="d-flex">
                                              <Icon className="me-3 green" size="2x" icon="bell" />  
                                              <h5 className="card-title">{name}</h5>  
                                            </div>
                                            <p className="card-text mb-4 mt-3 edit-card-text">{description}</p>
                                            <button className="edit-button">See more <Icon className="ms-3" icon="long-arrow-right"/> </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>

    );
};

export default FeedBack;