import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Icon } from 'rsuite';
import { UserContext } from '../../App';
import { MealContext } from '../DeliveryDetail/DeliveryDetail';
import { PromiseSolve } from '../Utility/PromiseSolve';
import './EachMealCart.css';

const EachMealCart = (props) => {
    const { id, image, name, price, quantity } = props.meal;
    const [newquantity, setNewQuantity] = useState(quantity);
    const history = useHistory()

   
    const {mealCart, setMealCart } = useContext(UserContext);

    const { setTotalCount, setTotal} = useContext(MealContext);

    

   

const newHandelPlusMinus = (type)=>{

    PromiseSolve(()=>{
        let newNumber = type==="minus"?(newquantity>0?newquantity-1:0):newquantity+1;
        setNewQuantity(newNumber);
        return newNumber;
         
    }).then(result=>{

        PromiseSolve(()=>{
          const notEqualMealCart = mealCart.filter(meal => meal.id !== id); 
          const indexOfEqualMealCart = mealCart.findIndex(meal => meal.id === id) 
            const equalMealCart = mealCart.find(meal => meal.id === id);
            notEqualMealCart.splice(indexOfEqualMealCart, 0, {...equalMealCart, quantity: result})
            setMealCart(notEqualMealCart);
            return notEqualMealCart;

        })
        .then(result=>{
            setTotalCount(result.reduce((sum, mealdata) => sum + mealdata.quantity, 0));
            setTotal(result.reduce((sum, meal)=>sum+meal.quantity*meal.price,0));
        })   
    })

}

    
//  delete cart
const handelDelete = ()=>{

    PromiseSolve(()=>{
        const notEqualMealCart = mealCart.filter(meal => meal.id !== id);
        setMealCart(notEqualMealCart);
        return notEqualMealCart;
    }).then(result=>{
        setTotalCount(result.reduce((sum, mealdata) => sum + mealdata.quantity, 0));
        setTotal(result.reduce((sum, meal)=>sum+meal.quantity*meal.price,0));
    })

}



    return (

        
        <div className="d-flex justify-content-between align-items-center mt-3 meal-cart-2">
            <img style={{ width: "5rem", height: "5rem" }} src={image} alt="" />
            <div>
                <h5>{name}</h5>
                <h4>${price * newquantity}</h4>
            </div>
            <div className="edit-btn new-edit-btn d-flex justify-content-between align-items-center">
                <button onClick={() =>newHandelPlusMinus("minus") } className="edit-btn-bt new-edit-btn-bt">
                    <Icon icon="minus" />
                </button>
                {newquantity}
                <button onClick={() =>newHandelPlusMinus("plus") } className="edit-btn-bt new-edit-btn-bt">
                    <Icon icon="plus" />
                </button>
            </div>
            <button className="delete" onClick={handelDelete} ><Icon icon="close" /></button>
        </div>
        
    
    );
};

export default EachMealCart;