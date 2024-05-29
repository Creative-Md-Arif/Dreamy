/* eslint-disable react/prop-types */
import Title from "../Title"
import ProductCard from "../newArrivals/ProductCard"


const TopSelling = ({products}) => {
  return (
    <div>
      <div className="container">
        <Title title="Top Selling" />

        <div className="grid grid-cols-4 gap-10 py-10">
          {products.slice(12, 20).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopSelling
