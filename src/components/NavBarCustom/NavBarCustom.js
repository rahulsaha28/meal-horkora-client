import React, { useContext, useEffect } from 'react';
import Logo from '../../image/logo (1).png';
import './NavBarCustom.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Icon from 'rsuite/lib/Icon/Icon';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { localUserDelete, localUserGet } from '../Utility/StoringUser';
import { Dropdown } from 'rsuite';

const NavBarCustom = () => {
    const { user, setUser } = useContext(UserContext);
    useEffect(()=>{
        setUser(localUserGet());
    },[])

    const handelSignOut = ()=>{
        localUserDelete();
        setUser({});

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img className="s-70x70" src={Logo} alt=""/> <span className="meal">Meal</span> Horkcra
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#FoodNavBar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="FoodNavBar" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2">
                        <li className="nav-item me-2">
                            <Link to="/delivery-detail" className="nav-link">
                               <Icon className="cart-icon" size="lg" icon="shopping-cart"/>
                            </Link>
                            </li>
                         {
                             user?.email?
                             (
                             <li className="nav-item me-2">
                                 <Dropdown title={user.name}>
                                    <Dropdown.Item>
                                        <button onClick={handelSignOut}>
                                          <Icon icon='sign-out' /> Logout  
                                        </button>
                                       
                                    </Dropdown.Item>
                                 </Dropdown>
                             </li>
                             ):
                             (<>
                                <li className="nav-item me-2"><Link to="/login"  className="nav-link">Login</Link></li>
                                <li className="nav-item me-5"><Link to="/create-account" className="nav-link bt-primary">Signup</Link></li>
                            </>)
                         }   
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBarCustom;