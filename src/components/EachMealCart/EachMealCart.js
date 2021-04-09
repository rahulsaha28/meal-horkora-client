import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Icon } from 'rsuite';
import { UserContext } from '../../App';
import { MealContext } from '../DeliveryDetail/DeliveryDetail';

import { localMealCartGet, localMealCartSave, useLocalStorage } from '../Utility/StoringUser';


const EachMealCart = (props) => {
    const { id, image, name, price, quantity } = props.meal;
    const [newquantity, setNewQuantity] = useState(quantity);
    const history = useHistory()

    // const [mealCart, setMealCart] = useState(localMealCartGet()?.length>0? localMealCartGet() :[]);
    // const [mealCart, setMealCart] = useLocalStorage("mealCart", []);

    const {mealCart, setMealCart, handelPlusMinus, setTotalCount, setTotal} = useContext(MealContext);

    // const handelPlusMinus = () => {

      

    //     new Promise((resolve, reject)=>{
    //         const c = setNewQuantity(newquantity>0?newquantity-1:0)
            
    //         if(!c){
    //           resolve(newquantity>0?newquantity-1:0)  
    //         }
            
    //     }).then((c)=>{
         
    //       update(c)  
    //     })

    // }

    const update = (newquantity)=>{

        const notEqualMealCart = mealCart.filter(meal => meal.id !== id);

        const indexOfEqualMealCart = mealCart.findIndex(meal => meal.id === id)
        const equalMealCart = mealCart.find(meal => meal.id === id);

        

        // const newMealCart = [...notEqualMealCart, { ...equalMealCart, quantity: newquantity }];
        notEqualMealCart.splice(indexOfEqualMealCart, 0, {...equalMealCart, quantity: newquantity})

        
        setMealCart(notEqualMealCart);

        setTotalCount(notEqualMealCart.reduce((sum, mealdata) => sum + mealdata.quantity, 0));
        setTotal(notEqualMealCart.reduce((sum, meal)=>sum+meal.quantity*meal.price,0)); 

    }



    // useEffect(()=>handelPlusMinus(newquantity), [newquantity])





    return (
        <div className="d-flex justify-content-between align-items-center mt-3">
            <img style={{ width: "5rem", height: "5rem" }} src={image} alt="" />
            <div>
                <h5>{name}</h5>
                <h4>${price * newquantity}</h4>
            </div>
            <div className="edit-btn d-flex justify-content-between align-items-center">
                <button onClick={() => handelPlusMinus("minus",newquantity, setNewQuantity, update)} className="edit-btn-bt">
                    <Icon icon="minus" />
                </button>
                {newquantity}
                <button onClick={() =>handelPlusMinus("plus",newquantity, setNewQuantity, update) } className="edit-btn-bt">
                    <Icon icon="plus" />
                </button>
            </div>
        </div>
    );
};

export default EachMealCart;