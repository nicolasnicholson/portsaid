import React from 'react';
import { useParams } from 'react-router-dom';

export function ProductDetail({ products }) {
  const { id } = useParams(); // Obtener el valor del parámetro de id
  const productId = parseInt(id); // Convertir el id a un número entero

  const product = products.find(product => product.id === productId);

  console.log(product)
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='flex justify-content-center items-center flex-col gap-2'>
      <img className='w-96' src={product.img} alt={product.name} />
      <div className='flex flex-col gap-1'>
      <strong className='uppercase'>{product.name}</strong>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>${product.price}</p>
      </div>
    </div>
  );
}
