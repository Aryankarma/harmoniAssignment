import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductGrid = ({ products, onProductClick }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="w-1 bg-orange-500 h-6 mr-2"></div>
          <h2 className="text-2xl font-bold">Our Products</h2>
        </div>
        <h3 className="text-2xl font-bold mb-8">Explore Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="cursor-pointer flex h-full flex-col justify-between text-center"
              onClick={() => onProductClick(product.id)}
            >
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4 bg-gray-100 flex items-center justify-center ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute scale-75 m-auto inset-0 h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-orange-500 font-bold">${product.price}</span>
                  <div className="ml-2 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                    <span className="text-gray-500 text-sm ml-1">(125)</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-black text-white w-full rounded-none hover:bg-gray-800">
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
