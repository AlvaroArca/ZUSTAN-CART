import React from 'react';
import {  IModelPropss } from '../types/producto';
const Models: React.FC<IModelPropss> = ({ children, model, toggleModel }) => {

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget){
            toggleModel();}
    };
    return (
        model && (
            <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' onClick={handleClick}>
                <div>
                    <button 
                        onClick={toggleModel} 
                        className='p-2 bg-slate-800 rounded-md m-4 hover:bg-slate-900 active:border active:translate-y-0.5
                         relative  bottom-52 left-[600px] right-0 w-10 '
                    >
                        X
                    </button>
                </div>
                <div className='bg-slate-100  w-1/3 p-5 rounded-md min-h-[500px] min-w-[600px]' >
                    {children}
                </div>
            </div>
        )
    );
}

export default Models;
