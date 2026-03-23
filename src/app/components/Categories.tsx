import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    name: 'Living',
    description: '50+ Designs',
    image: 'https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600'
  },
  {
    name: 'Dining',
    description: '40+ Designs',
    image: 'https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600'
  },
  {
    name: 'Bedroom',
    description: '60+ Designs',
    image: 'https://images.unsplash.com/photo-1768946131535-b90bad125f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600'
  },
  {
    name: 'Office',
    description: '30+ Designs',
    image: 'https://images.unsplash.com/photo-1718049719677-85afb466425a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600'
  },
  {
    name: 'Kids',
    description: '25+ Designs',
    image: 'https://images.unsplash.com/photo-1769690398773-7bd5122ab719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600'
  },
  {
    name: 'Outdoor',
    description: '20+ Designs',
    image: 'https://images.unsplash.com/photo-1560990883-9b76fec399a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600'
  }
];

export function Categories() {
  return (
    <section id="categories" className="bg-[#f5f0d4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#ffa500] mb-4">RAM FURNITURE</h2>
          <button className="px-6 py-2 bg-[#ffa500] text-black rounded inline-block">
            CATEGORIES
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-[#e8e3c3] rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <ImageWithFallback
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3 text-center">
                <h4 className="mb-1">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
