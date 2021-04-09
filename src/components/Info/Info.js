import React from 'react';
import './Info.css';
import bgImage from '../../image/bannerbackground.png';
import { Input, InputGroup } from 'rsuite';
import Icon from 'rsuite/lib/Icon/Icon';

const Info = () => {
    return (
        <div className="Info d-flex flex-md-column justify-content-center align-items-center info-div" style={{backgroundImage:`url(${bgImage})`}}>
            <h2 className="mb-4">Best Food When You Are Hungary</h2>
            <div className="search">
               <InputGroup>
                <Input/>
                <InputGroup.Button>
                    <Icon icon="search"/>
                </InputGroup.Button>
            </InputGroup> 
            </div>
            
        </div>
    );
};

export default Info;