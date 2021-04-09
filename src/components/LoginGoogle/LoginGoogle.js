import React, { useContext} from 'react';
import './LoginGoogle.css';
import { Icon } from 'rsuite';
import { fireBaseInitialization, googleLogInSystem } from '../LoginManagement/LoginManagement';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import { localUserSave } from '../Utility/StoringUser';


fireBaseInitialization();

const LoginGoogle = () => {

    const { user, setUser } = useContext(UserContext);

    const history = useHistory();

    const handelSignIn = () => {

        googleLogInSystem()
            .then(result => {

                let newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    validation: true
                }
                setUser(newUser);
                history.replace('/');

            })
    }

    localUserSave(user);

    return (
        <div className="mb-5 col-md-4 d-flex flex-column">
            <div className="d-flex align-items-center">
                <hr style={{ width: "45%" }} /> OR <hr style={{ width: "45%" }} />
            </div>
            <button onClick={handelSignIn} className="google-btn d-flex align-items-center"> <span className="me-2 google-icon"><Icon size="2x" icon="google" /> </span>Continue using Google</button>
        </div>
    );
};

export default LoginGoogle;