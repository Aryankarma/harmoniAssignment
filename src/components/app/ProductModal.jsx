"use client";

import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="w-auto p-4">
        <div className="flex flex-col gap-2 md:flex-row w-[90%]">
          <div className="aspect-square relative max-h-[200px] md:max-h-[300px] bg-gray-50 rounded-lg p-2 w-full">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="absolute scale-75 m-auto inset-0 h-full object-contain"
              />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2 h-full">
            <div className="flex flex-col items-left gap-2 ">
              <DialogTitle className="text-xl font-semibold">
                {product.title}
              </DialogTitle>

              <div className="flex">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating.rate)
                          ? "fill-yellow-400 stroke-yellow-400"
                          : "fill-gray-200 stroke-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>
            <p className="text-2xl font-bold ">${product.price}</p>
            <p className="text-sm text-gray-600  line-clamp-3">
              {product.description}
            </p>
            <div className="flex items-center gap-4 ">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 text-lg border-r hover:bg-yellow-400 bg-white border"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 text-lg border-r hover:bg-yellow-400 bg-white border"
                >
                  +
                </button>
              </div>
              <Button
                className="w-full bg-black text-white hover:bg-gray-800"
                size="lg"
                onClick={() => onAddToCart(quantity)}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
