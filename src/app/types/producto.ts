import { persist } from 'zustand/middleware';
export interface Producto {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity? : number;
    description: string;
  }

  export interface IModelProps {
    model: boolean;
    toggleModel: () => boolean;
    carrito?: Producto[];
    
    children?: React.ReactNode;
    eliminar: (id: number) => void;
    vaciar: () => void;
    
  }
  export interface ICarrito {
    carrito: Producto[];
    items: number;
    
    total: number;
    setCarrito: (producto: Producto) => void;
    eliminar: (id: number) => void;
    vaciar: () => void;
    
}
export interface IModelPropss {
    model: boolean;
    toggleModel: () => boolean;
    children?: React.ReactNode;
  }