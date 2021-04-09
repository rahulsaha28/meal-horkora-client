import React from 'react';
import { Placeholder, Panel } from 'rsuite';

const CardLoading = () => {
    const { Paragraph } = Placeholder
    return (
        <>
            <div className="col-md-4 mb-5">
                <Panel className=" meal-cart" shaded bodyFill>
                    <Paragraph graph="image" style={{ width: "200px" }} active />
                    <Panel>
                        <Paragraph active />
                    </Panel>
                </Panel>
            </div>
            <div className="col-md-4 mb-5">
                <Panel className=" meal-cart" shaded bodyFill>
                    <Paragraph graph="image" style={{ width: "200px" }} active />
                    <Panel>
                        <Paragraph active />
                    </Panel>
                </Panel>
            </div>
            <div className="col-md-4 mb-5">
                <Panel className=" meal-cart" shaded bodyFill>
                    <Paragraph graph="image" style={{ width: "200px" }} active />
                    <Panel>
                        <Paragraph active />
                    </Panel>
                </Panel>
            </div>
        </>
    );
};

export default CardLoading;