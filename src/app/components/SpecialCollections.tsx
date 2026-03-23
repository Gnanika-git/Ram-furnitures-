import { ImageWithFallback } from './figma/ImageWithFallback';

export function SpecialCollections() {
  const collections = [
    {
      title: 'Luxury Living',
      description: 'Premium sofas, chairs, and coffee tables that redefine comfort and elegance.',
      image: 'https://images.unsplash.com/photo-1662059360857-9a46f20c85f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Smart Office',
      description: 'Ergonomic desks and chairs designed for productivity and style.',
      image: 'https://images.unsplash.com/photo-1595847902982-f20169d4ddad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Cozy Bedrooms',
      description: 'Complete bedroom sets for ultimate relaxation and peaceful sleep.',
      image: 'https://images.unsplash.com/photo-1678889284808-6913951fc6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Outdoor Paradise',
      description: 'Weather-resistant furniture for your patio, garden, or balcony.',
      image: 'https://images.unsplash.com/photo-1637267283847-99de76bddeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="bg-[#f5f0d4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#ffa500] mb-4">SPECIAL COLLECTIONS</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our curated collections designed for every space in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white">{collection.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{collection.description}</p>
                <button className="mt-4 px-6 py-2 bg-[#ffa500] text-black rounded hover:bg-[#ff8c00] transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
