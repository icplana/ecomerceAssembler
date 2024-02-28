import { products } from "../data/products"
import { product } from "../types"





export const FullProduct = ({productId})=> {
    const productInfo:product = products.find( product => product.id === productId )
  return (
    <div className="px-2">
        <h1 className="text-2xl font-bold mb-2">{ productInfo.name }</h1>
        <img className="mb-2" src={productInfo.images[0]} alt="" />
        <p className="italic mb-2">{productInfo.description}</p>
        <p className="font-bold text-xl mb-2">{productInfo.price}€</p>
        <p className="font-semibold mb-2">{productInfo.brand}</p>
        <p className=" text-xl text-yellow-500 mb-4">{productInfo.rating}/5</p>
        <div>
            <h3 className="text-xl font-semibold">Reviews</h3>
            <ul>
                {
                    productInfo.reviews.map(review => {
                        return(
                            <li className="mb-3 border rounded-sm px-2 py-1" key={review.id}>
                                <p>{ review.comment }</p>
                                <p className="italic">{ review.date }</p>
                                <p className=" text-xl text-yellow-500 mb-4">{ review.rating }/5</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}
