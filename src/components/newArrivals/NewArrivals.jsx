/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Title from "../Title";
import ProductCard from "./ProductCard";

const NewArrivals = ({products}) => {
  console.log(products);
  return (
    <section>
      <div className="container">
        <Title title="NEW ARRIVALS" />

        <div>
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
