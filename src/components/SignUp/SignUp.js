import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Message } from 'rsuite';
import bgImage from '../../image/bannerbackground.png';
import LoginGoogle from '../LoginGoogle/LoginGoogle';

const SignUp = () => {

    const  { register, handleSubmit, formState:{errors}, watch, setError}  = useForm({})
    
    const handelSignUp = data=>{
        if(watch('password')=== watch('repassword')){

            console.log(data)

        }else{

            setError('repassword', 'Password must be match')
            
        }
    }

    return (
        <div className="container-fluid" style={{backgroundImage:`url(${bgImage})`, backgroundPosition:"top"}}>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <form className="edit-form p-4" onSubmit={handleSubmit(handelSignUp)}>
                    <div className="mb-3">
                            <input  {...register("name", {required:true})} placeholder="Name" type="text" className="form-control" />
                            {errors.name && <Message type="error" description="Name required"/>}
                        </div>
                        <div className="mb-3">
                            <input {...register("email", {required:true, pattern:/\S+@gmail.com/g})} placeholder="Email" type="email" className="form-control" />
                            {errors.email && <Message type="error" description="email must be @gmail.com"/>}
                        </div>
                        <div className="mb-3">
                            <input {...register("password", {required:true, minLength:6})} placeholder="Password" type="password" className="form-control" />
                            {errors.password && <Message type="error" description="password length must be 6 or getter"/>}
                        </div>
                        <div className="mb-3">
                            <input {...register("repassword", {required:true, minLength:6})} placeholder="Conform Password" type="password" className="form-control" />
                            {errors.repassword && <Message type="error" description="password must be Match"/>}
                        </div>
                        <button type="submit" className="btn btn-primary login-btn">Signup</button>
                        <p className="extra">Already have an <Link to="/login">account</Link></p>
                    </form>
                    
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                <LoginGoogle/> 
                </div>
            </div>
        </div>
    );
};

export default SignUp;