import { product } from '../types';


export const BuyingProduct = ({product}:{product:product}) => {

    

  return (
    <li className='flex justify-between mt-1 mb-2'>
        <span className='text-sm font-semibold'>{ product.name }</span>
        <span className='font-bold'>{ product.price }€</span>
    </li>
  )
}
