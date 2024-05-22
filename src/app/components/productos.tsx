"use client"
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useCarrito } from '../Store/Carrito'
import useModel from '../hooks/useModel'
import Model from './Model'
import {Producto}  from '../types/producto'

const Productos: React.FC = () => {
  const[dinero ,setDinero] = useState(1234)
  const [nombre, setNombre] = useState("")
    const [model, toggleModel] = useModel()

    const data  = useFetch()
    const {carrito,items,total} = useCarrito(state=>{
        return {
            carrito: state.carrito,
            items: state.items,
            total: state.total  
        }
    })
    console.log(carrito)
    const {setCarrito , eliminar,vaciar} = useCarrito()
    const filtro = data.filter(item=>item.price <= dinero && (item.title.toLowerCase().includes(nombre.toLowerCase()) || item.category.toLowerCase().includes(nombre.toLowerCase())))
  return (
    <>
   <div className='flex w-full items-center p-5'>
  <div className=' justify-start min-w-[200px]'>
    <input type="range" min={12} max={2000} value={dinero} onChange={(e)=>setDinero(Number(e.target.value))}/> 
    {dinero}
    <input className='text-black m-5 rounded-md h-7 text-center' placeholder='Buscar'  type="text" onChange={(e)=>setNombre(e.target.value)}/>
  </div>
  <div className='flex justify-center flex-grow '>
    <h1 className='text-3xl text-center ml-[-300px] '>Nuestros Productos</h1>
  </div>
  <div className='flex justify-end'>
    <button 
      className='p-3 bg-slate-800 rounded-md m-4 hover:bg-slate-900 active:border active:translate-y-0.5' 
      onClick={toggleModel}
    >
      Carrito
    </button>
  </div>
</div>

    <div className='grid  grid-cols-4 w-full  p-5 gap-5'>
  {filtro.map((item : Producto)=>(
      <div key={item.id} className='p-3 h-100 items-center text-center justify-center bg-slate-700 rounded-md'>
        <div><img src={item.thumbnail} className='w-full h-[200px] rounded-md min-h-24  min-w-24 ' /></div>
        <div className='m-5 text-[25px]'><h1>{item.title}</h1></div>
        <div className='m-5 text-[25px]'><h2>{item.price}$</h2></div>
        <button onClick={()=>setCarrito(item)} className='p-3 bg-slate-800 rounded-md m-4 hover:bg-slate-900 active:border active:translate-y-0.5'>Comprar</button>
     </div>
   ))}
   </div>
   <Model model={model} toggleModel={toggleModel} carrito={carrito} eliminar={eliminar} vaciar={vaciar}/>
   </>
   )
}

export default Productos