/* eslint-disable react/prop-types */
import { CiShoppingBasket } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/dreamySlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div >
      {/* image hover  */}
      <div className=" group ">
        <div
          onClick={handleDetails}
          className=" relative overflow-hidden h-[400px] flex items-center justify-center border"
        >
          <img src={product.image} alt="product image" className="w-[60%] " />
          <div
            className=" absolute h-full w-full bg-black_rgba flex items-center justify-center -bottom-10 group-hover:bottom-0 
             opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Link
              to="/"
              className=" absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-3xl"
            >
              Sale
            </Link>
          </div>
        </div>
      </div>
      {/* image hover end */}
      <div className="flex flex-col gap-2 p-2 border border-t-0 h-[170px] ">
        <h4 className=" font-titleFont text-xl font-medium ">
          {product.title}
        </h4>
        <div className="flex gap-3">
          <p className=" font-paragraphFont text-xs font-bold text-[#FFC633]">
            Rating {product.rating.rate}
          </p>
          <p className=" font-paragraphFont text-xs font-bold text-[#FFC633]">
            Sale {product.rating.count}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" font-paragraphFont text-xl font-bold text-black">
            ${product.price}
          </p>
          {/* Add to cart button */}
          <Link to="#">
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  }),toast.success(`${product.title} is added`, {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                   
                   
                    })
                )
              }
              className="flex items-center justify-center text-xl w-8 h-8 bg-[#9A9A9A] rounded-full text-white hover:bg-[#FFC633] hover:text-black transition-all duration-300"
            >
              <CiShoppingBasket />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
