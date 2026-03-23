export function About() {
  return (
    <section id="about" className="bg-[#f5f0d4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#ffa500] mb-2">RAM FURNITURE</h2>
          <button className="px-6 py-2 bg-[#ffa500] text-black rounded inline-block mb-8">
            ABOUT
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Image Section */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Furniture"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div>
            <h3 className="mb-4">Our Craftsmanship Story</h3>
            <p className="mb-4 text-gray-700">
              At Ram Furniture, we blend creativity, quality materials, and expert techniques to design furniture that enhances modern living.
            </p>
            <p className="text-gray-700">
              Every piece is crafted for durability, comfort, and timeless elegance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}