import { Button } from "@/components/ui/button"

export const Banner = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Discover Your Next Favorite Item</h2>
          <p className="mb-8 text-md text-gray-300">
            Browse our exclusive collection and find the perfect product tailored just for you.
          </p>
          <div className="flex space-x-4">
            <Button asChild className="bg-white text-black hover:bg-gray-100">
              <a href="/shop">Shop</a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black">
              <a href="/learn-more">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
