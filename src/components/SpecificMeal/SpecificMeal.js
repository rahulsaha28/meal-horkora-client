import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Icon } from 'rsuite';
import { UserContext } from '../../App';
import mealsData from '../../data.json';
import { useLocalStorage } from '../Utility/StoringUser';
import './SpecificMeal.css';

const SpecificMeal = () => {
    const { type, id } = useParams();
    const [meal, setMeal] = useState({});
    const [quantity, setQuantity] = useState(0);
    // const { mealCart, setMealCart } = useContext(UserContext);
    const [ mealCart, setMealCart] = useLocalStorage('mealCart', []); 
    const history = useHistory();

    
    
    useEffect(() => {
        setMeal(mealsData.find(result => result.id == id))
        

    }, []);

    

    const handelMealAdd = () => {

        let newMealCart = [...mealCart ,{ ...meal, quantity }];

        try{
            setMealCart(newMealCart);
        //    history.replace('/delivery-detail');
        }
        catch(error){
            console.log("error");
        }
        

        

    }


    return (
        <div className="container">
            <div className="row">
                <div className="edit-flex col-md-12 d-flex flex-md-row justify-content-evenly align-items-center p-3">
                    <div>
                        <h3>{meal.name}</h3>
                        <p>{meal.description}</p>
                        <div className="d-flex">
                            <span className="price">${meal.price}</span>
                            <div className="ms-3 edit-btn d-flex justify-content-between align-items-center">
                                <button onClick={() => setQuantity(quantity ? quantity - 1 : 0)} className="edit-btn-bt">
                                    <Icon icon="minus" />
                                </button>
                                {quantity}
                                <button onClick={() => setQuantity(quantity + 1)} className="edit-btn-bt">
                                    <Icon icon="plus" />
                                </button>
                            </div>
                        </div>

                        <button onClick={handelMealAdd} className="mt-4 add-btn"><Icon icon="shopping-cart" /> Add</button>

                    </div>
                    <img className="s-medium" src={meal.image} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default SpecificMeal;