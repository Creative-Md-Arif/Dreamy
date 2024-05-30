import { useState } from "react";

const Color = () => {
  const product = {
    id: 1,
    name: "Cool T-Shirt",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Green", hex: "#00FF00" },
      { name: "Blue", hex: "#0000FF" },
    ],
  };
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col gap-3">
      <h4>Select Colors</h4>
      <div className="">
        <p>Selected Color: {selectedColor.name}</p>
      </div>
      <div className="color-options flex pt-3 ">
        {product.colors.map((color) => (
          <div
            key={color.name}
            className="color-option mr-3 w-6 h-6 rounded-full"
            style={{
              backgroundColor: color.hex,
              border:
                selectedColor.name === color.name
                  ? "2px solid black"
                  : "1px solid grey",
            }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default Color;
