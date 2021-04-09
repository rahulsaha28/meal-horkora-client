import { useEffect, useState } from 'react';

const localUserSave = (user) => {
    user?.email && localStorage.setItem('user', JSON.stringify(user));
}

const localUserGet = () => {
    let user = localStorage.getItem('user');
    return JSON.parse(user);
}

const localUserDelete = () => {
    localStorage.clear('user');
}

// meal card
const localMealCartSave = (mealCart) => {
    localStorage.setItem('mealCart', JSON.stringify(mealCart));
}

const localMealCartGet = () => {
    let mealCart = localStorage.getItem('mealCart');
    return JSON.parse(mealCart);
}

const localMealCartDelete = () => {
    localStorage.clear('mealCart');
}


// custom hook
const useLocalStorage = (key, initialValue) => {


    const item = window.localStorage.getItem(key);
    const initial = item ? JSON.parse(item) : initialValue;

    const [value, setValue] = useState(initial);

    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

}







export { useLocalStorage, localUserSave, localUserGet, localUserDelete, localMealCartSave, localMealCartGet, localMealCartDelete }