import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [filteredProduct, setfilteredProduct] = useState([]);
  const { products, searchQuery } = useAppContext();

  useEffect(() => {
    if (searchQuery.length > 0) {
      setfilteredProduct(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setfilteredProduct(products);
    }
  }, [products, searchQuery]);
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">all products </p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProduct
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
