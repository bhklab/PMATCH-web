import React from 'react';

const Break = ({ image }) => {
    console.log(image);
    return (
        <div className="w-full">
            {image && (
                <div
                    className={`h-[500px] bg-no-repeat bg-cover bg-center bg-fixed mmd:bg-scroll`}
                    style={{ backgroundImage: `url('/images/breaks/${image}')` }}
                />
            )}
        </div>
    );
};

export default Break;
