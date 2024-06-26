import React from 'react';

const Break = ({ image }) => {
    return (
        <div className="w-full">
            <div
                className={`bg-[url('/images/breaks/${image}')] h-[400px] bg-no-repeat bg-cover bg-center bg-fixed mmd:bg-scroll`}
            />
        </div>
    );
};

export default Break;
