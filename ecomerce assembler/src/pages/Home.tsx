import { HomeProduct } from '../components/HomeProduct';
import { products } from '../data/products';



export const Home = () => {
  return (
    <div>
      <h1 className='font-bold text-xl mb-3'>WELCOME TO SHOPOROMA</h1>

      <div className="mx-auto">
        {
          products.map(product => <HomeProduct key={product.id} product={product} />)
        }
        
      </div>
    </div>
  )
}
