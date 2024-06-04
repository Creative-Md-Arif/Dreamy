/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ToastContainer } from "react-toastify";
import Title from "../Title";
import ProductCard from "./ProductCard";

const NewArrivals = ({ products }) => {
  return (
    <section>
      <ToastContainer/>
      <div className="container">
        <Title title="NEW ARRIVALS" />

        <div className="grid grid-cols-4 gap-10 py-10">
          {products.slice(0, 12).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
