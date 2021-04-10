import React, { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Icon, Message, Notification } from 'rsuite';
import { UserContext } from '../../App';

import EachMealCart from '../EachMealCart/EachMealCart';
import CartArrayLoding from '../LoadingSystem/CartArrayLoding';
import TotalCalculation from '../TotalCalculation/TotalCalculation';
import { message } from '../Utility/message';
import { useLocalStorage } from '../Utility/StoringUser';


export const MealContext = createContext();

const DeliveryDetail = () => {

    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, watch } = useForm({});
    let rd = watch('rd')



    const { mealCart, setMealCart} = useContext(UserContext);
    const [totalCount, setTotalCount] = useState(mealCart.reduce((sum, mealdata) => sum + mealdata.quantity, 0));
    const [total, setTotal] = useState(mealCart.reduce((sum, meal) => sum + meal.quantity * meal.price, 0));

    // 
    const [deliverDetail, setDeliverDetail] = useState({});
    

    const handelDeliver = data => {
        setDeliverDetail(data);
    }

    const handelPlaceOrder = ()=>{
        
        if(deliverDetail?.rd){
            setMealCart([]);
            history.replace('/place-order');
        }
        else{
          message('warning', 'Please Submit Your Location');
           
        }
        
        
        
        
    }

    


    return (
        <div className="container">
            <div className="row mt-5 mb-4">
                {
                    mealCart?.length === 0 ? (<CartArrayLoding />) :

                        (
                            <>
                                <div className="col-md-4 col-sm-12">
                                    <div>
                                        <h4>Edit delivery Detail</h4>
                                        <hr />
                                    </div>
                                    <form onSubmit={handleSubmit(handelDeliver)}>
                                        <div className="mb-3">
                                            <input {...register("rd", { required: true })} placeholder="Rd No" type="text" className="form-control" />
                                            {errors.rd && <Message type="error" description="Must be place" />}
                                        </div>
                                        <div className="mb-3">
                                            <input {...register("flat")} placeholder="Flat, Sublet or Floor" type="text" className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <input {...register("instruction")} placeholder="Add delivery Instructor" type="text" className="form-control" />

                                        </div>
                                        <button type="submit" className="btn btn-primary login-btn">Save & Continue</button>
                                    </form>
                                </div>
                                <div className="col-md-5 col-sm-12 ms-4">
                                    <div>
                                        <h5>From: Sylhet</h5>
                                        <h6>Arriving: 20-30 min</h6>
                                        <h6>{rd}</h6>
                                    </div>
                                    <div>

                                        <MealContext.Provider value={{ mealCart, setMealCart, setTotalCount, setTotal }}>
                                            {
                                                mealCart.map(meal => <EachMealCart key={Math.random()} meal={meal} />)
                                            }
                                        </MealContext.Provider>



                                    </div>
                                    <TotalCalculation totalCount={totalCount} total={total + 50} />
                                    <button onClick={handelPlaceOrder} className="btn btn-primary">Place order</button>
                                </div>

                            </>

                        )

                }

            </div>
        </div>
    );
};

export default DeliveryDetail;