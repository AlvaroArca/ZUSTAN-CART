
import { useEffect, useState } from 'react';
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
function useFetch(): Product[] {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(async res => await res.json())
      .then(res => setData(res.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return data;
}

export default useFetch;
