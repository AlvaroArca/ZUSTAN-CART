import { create } from "zustand";
import { Producto} from "../types/producto";
import { ICarrito } from "../types/producto";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCarrito = create<ICarrito>(persist((set) =>({
    carrito:[],
    items: 0,
    total: 0,
    setCarrito : (producto: Producto) => set(state=>{
        const estaCarrito = state.carrito.find(item=> item.id === producto.id)
        if(estaCarrito){
          const carrito =  state.carrito.map(item=>item.id=== producto.id ? {...item,quantity:state.items+1}: item)
          return{
            carrito : carrito,
            items: state.items + 1,
            total: state.total + producto.price
          }
        }
        return{
            carrito:[...state.carrito,{quantity:1,...producto}],
            items: state.items + 1,
            total: state.total + producto.price
        }
    }),
    eliminar : (id:number) => set(state=>{
        const carrito = state.carrito.filter(item=> item.id !== id)
        return{
            carrito: carrito,
            items: state.items - 1,
            total: state.total - (state.carrito.find(item=> item.id === id)?.price || 0)
        }
    }),
    vaciar:()=>{
      set(state=>{
        return{
          carrito:state.carrito = [],
          items: 0,
          total: 0
        }
      })
    
    },
   
}),
{name:"carrito",
  storage:createJSONStorage(()=>localStorage)
},
))