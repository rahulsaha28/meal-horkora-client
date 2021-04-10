import React from 'react';
import { Panel, Placeholder } from 'rsuite';

const CartArrayLoding = () => {
    const { Paragraph, Graph } = Placeholder;
    return (
            <>
            <div className="col-md-4 col-sm-12">
                <Paragraph active>
                    
                </Paragraph>
            </div>
            <div className="col-md-7 col-sm-12">
                    <div className="d-flex justify-content-between align-items-center mt-3 meal-cart-2">
                        <Graph active/>
                    </div>
               
            </div>
       </>
    );
};

export default CartArrayLoding;