import { useState } from "react";

const ChoseSize = () => {
  const productSize = {
    id: 1,
    size: [
      { name: "Small", hex: "#FF0000" },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
  };

  const [selectedSize, setSelectedSize] = useState(productSize.size[0]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col gap-3">
      <h4>Select Size</h4>
      <div>
        <p>Selected Size: {selectedSize.name}</p>
      </div>
      <div className="flex gap-5">
        {productSize.size.map((size) => (
          <div
            key={size.name}
            className="border py-1 px-3 rounded-md"
            style={{
              border:
                selectedSize.name === size.name
                  ? "2px solid black"
                  : "1px solid grey",
            }}
            onClick={() => handleSizeSelect(size)}
          >
            {size.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoseSize;
