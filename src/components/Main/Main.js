import React, { useEffect, useState } from 'react';

import './Main.css';
import mealData from '../../data.json';
import Meal from '../Meal/Meal';
import FeedBack from '../FeedBack/FeedBack';
import { Link, useParams } from 'react-router-dom';
import CardLoading from '../LoadingSystem/CardLoading';

const Main = () => {
    const { type="BreakFast" } = useParams();
    
    const [meals, setMeals] = useState([]);
    const [activeB, setActiveB] = useState('');
    const [activeL, setActiveL] = useState('');
    const [activeD, setActiveD] = useState('');
    useEffect(()=>{
        switch(type){
            case "BreakFast":
                setActiveB('active');
                setActiveD('')
                setActiveL('')
                break;
            case "Lunch":
                setActiveB('');
                setActiveD('')
                setActiveL('active')
                break;
            case "Dinner":
                setActiveB('');
                setActiveD('active')
                setActiveL('')
                break;
             default:
                setActiveB('');
                setActiveD('')
                setActiveL('')
        }

        !type?setMeals(mealData.filter(mealdata=>mealdata.level==="BreakFast")):setMeals(mealData.filter(mealdata=>mealdata.level===type));
       
        console.log(meals)
    }, [type])
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <Link className={`btn-custom ${activeB}`} to="/meal/BreakFast">BreakFast</Link>
                    <Link className={`btn-custom ${activeL}`} to="/meal/Lunch">Lunch</Link>
                    <Link className={`btn-custom ${activeD}`} to="/meal/Dinner">Dinner</Link>
                </div>
                <div className="col-md-12 mt-5">
                    <div className="row">
                        {
                            
                            meals.length>0?meals.map(meal=><Link key={Math.random()} className="col-md-4 mb-5" to={`/meal/${type}/${meal.id}`}><Meal  meal={meal}/></Link>):
                            <CardLoading/>
                        }
                       
                    </div>
                </div>
            </div>
            <FeedBack/>
        </div>
    );
};

export default Main;