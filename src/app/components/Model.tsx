import React from 'react'
import Models from './Models'
import { IModelProps } from '../types/producto';

const Model : React.FC<IModelProps> = ({model,toggleModel,carrito ,eliminar,vaciar})=> {
  return (
    <Models model={model} toggleModel={toggleModel}>
      <div className="max-h-[350px] overflow-y-auto">
    {carrito?.map((item)=>(
      <div className='flex items-center m-4 flex-grow bg-slate-300 rounded-md w-[90%] justify-between overflow-y-auto max-h-[100px]' key={item.id}>
        <div className="flex items-center space-x-8"><img className="w-[100px] h-[100px]  rounded-md  border border-slate-300" src={item.thumbnail}/>
         <div className=''><h1 className="text-black">{item.title}</h1>
          <strong className='text-black'>X{item.quantity}</strong>
         </div>
         <h1><strong className='text-black'>{item.price}$</strong></h1>
        </div>
       <button onClick={()=>eliminar(item.id)}  className="p-3 bg-slate-800 rounded-md m-4 hover:bg-slate-900 active:border active:translate-y-0.5">Eliminar</button>
      </div>
    ))}
    <div>
      <h1 className='text-black top-[600px] absolute text-[30px]'>Total: {carrito?.reduce((total, item) => total + item.price, 0)}$</h1>
    <button onClick={vaciar} className='p-3 bg-slate-800 rounded-md  top-[650px] hover:bg-slate-900 active:border active:translate-y-0.5 absolute w-[40%]'>Vaciar</button>
    </div>
    </div>
    </Models>
  )
}

export default Model