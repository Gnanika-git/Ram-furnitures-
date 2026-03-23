import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-[#f5f0d4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <div>
            <h1 className="mb-4 text-4xl font-bold">
              Discover Your Comfort Zone.
            </h1>

            <p className="mb-4 text-gray-700">
              At Ram Furniture, we bring you premium-quality furniture designed
              to enhance your lifestyle and elevate your home interiors.
            </p>

            <p className="mb-6 text-gray-600">
              From modern sofas to elegant dining sets, our collections combine
              durability, comfort, and timeless design to suit every space.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                className="px-8 py-3 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors"
              >
                Explore Collection
              </button>

              <button
                type="button"
                className="px-8 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>✔ Premium Quality Materials</div>
              <div>✔ Modern & Stylish Designs</div>
              <div>✔ Affordable Pricing</div>
              <div>✔ Custom Furniture Options</div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.woodenstreet.de/image/data/blog-images/yellow-colour-combination/yellow-colour.jpg"
              alt="Modern living room furniture"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}