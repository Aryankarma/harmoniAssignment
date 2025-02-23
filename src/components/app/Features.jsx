import { Truck, Headphones, Shield } from "lucide-react"

const featuresData = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: Shield,
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
  },
]

export const Features = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-gray-200 p-4">
                <div className="rounded-full bg-black p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
