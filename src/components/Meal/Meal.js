import React from 'react';
import { Panel } from 'rsuite';
import './Meal.css';

const Meal = (props) => {
    const { name, image, price } = props.meal;
    
    return (

        <Panel className=" meal-cart" shaded bodyFill>
            <div className="d-flex justify-content-center">
              <img src={image} height="240"/>  
            </div>
            <Panel header={name}>
                <p>Lorem ipsum dolor sit</p>
                <h5>$ {price}</h5>
            </Panel>
        </Panel>

    );
};

export default Meal;