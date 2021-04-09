import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import bgImage from '../../image/bannerbackground.png';
import { useForm } from 'react-hook-form';
import { Message } from 'rsuite';
import LoginGoogle from '../LoginGoogle/LoginGoogle';


const Login = () => {
    const {register, formState:{ errors }, handleSubmit} = useForm({});

    const handelLogIn = data=>console.log(data);

    return (
        <div className="container-fluid" style={{backgroundImage:`url(${bgImage})`, backgroundPosition:"top"}}>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <form className="edit-form p-4" onSubmit={handleSubmit(handelLogIn)}>
                        <div className="mb-3">
                            <input {...register("email", {required:true, pattern:/\S+@gmail.com/g})} placeholder="Email" type="email" className="form-control"/>
                            {errors.email && <Message type="error" description="email must be @gmail.com"/>}
                        </div>
                        <div className="mb-3">
                            <input {...register("password", {required:true, minLength:6})} placeholder="Password" type="password" className="form-control"/>
                            {errors.password && <Message type="error" description="password length must be 6 or getter"/>}
                        </div>
                        <button type="submit" className="btn btn-primary login-btn">Login</button>
                        <p className="extra">No account creact one <Link to="/create-account">account</Link></p>
                    </form>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                    <LoginGoogle/>
                </div>
            </div>
        </div>
    );
};

export default Login;