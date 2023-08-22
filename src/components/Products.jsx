import React from 'react';
import { Link, useParams } from 'react-router-dom';

export function Products({ products }) {
  const { category } = useParams();
  const filteredProducts = category ? products.filter(product => product.category === category) : products;

  return (
    <main className='flex justify-center items-center mx-12 my-9'>
      <ul className='grid grid-cols-4 gap-5'>
        {filteredProducts.map(product => (
          <li className='flex flex-col gap-3 justify-center' key={product.id}>
            <Link to={`/products/${category}/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <div className='flex flex-col'>
                <strong className='uppercase'>{product.name}</strong>
                ${product.price}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
