import React from 'react';

const TotalCalculation = (props) => {
    const { totalCount, total } = props
    return (
        <div>
            <div className="mt-5">
                        <h4>Subtotal: {totalCount}</h4>
                        <h6>Tax: $50</h6>
                        <h6>Delivery Fee: $0</h6>
                        <h6>Total: $ {total}</h6>

            </div>
        </div>
    );
};

export default TotalCalculation;