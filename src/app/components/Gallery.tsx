import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern living room with painting',
    category: 'Living'
  },
  {
    url: 'https://images.unsplash.com/photo-1658893136904-63914a6b372c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Couch and coffee table with fireplace',
    category: 'Living'
  },
  {
    url: 'https://images.unsplash.com/photo-1631510083755-11ecb5172d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Green sofa with throw pillows',
    category: 'Living'
  },
  {
    url: 'https://images.unsplash.com/photo-1768946131535-b90bad125f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern bed with plush upholstery',
    category: 'Bedroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1768946131530-358c52c4c42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern bed with rounded headboard',
    category: 'Bedroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1612645213559-6af1d4edeaf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'White bed linen bedroom',
    category: 'Bedroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern dining room with table and chairs',
    category: 'Dining'
  },
  {
    url: 'https://images.unsplash.com/photo-1704040686533-694c5b9c52c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Chandelier dining room',
    category: 'Dining'
  },
  {
    url: 'https://images.unsplash.com/photo-1634208005816-e6d7498f8eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Dining table with flower vase',
    category: 'Dining'
  },
  {
    url: 'https://images.unsplash.com/photo-1718049719677-85afb466425a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Wooden desk with drawer',
    category: 'Office'
  },
  {
    url: 'https://images.unsplash.com/photo-1612813434847-b01fffea46ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern home office setup',
    category: 'Office'
  },
  {
    url: 'https://images.unsplash.com/photo-1718524767499-78ce54e0e188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Office desk with chair and plant',
    category: 'Office'
  },
  {
    url: 'https://images.unsplash.com/photo-1769690398773-7bd5122ab719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Cozy kids bedroom with window seat',
    category: 'Kids'
  },
  {
    url: 'https://images.unsplash.com/photo-1769690399035-2f4e60edf2ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Kids bedroom with teddy bear',
    category: 'Kids'
  },
  {
    url: 'https://images.unsplash.com/photo-1694885146901-b1d05cb1f549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Kids playroom with table and chairs',
    category: 'Kids'
  },
  {
    url: 'https://images.unsplash.com/photo-1560990883-9b76fec399a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Outdoor sectional sofa',
    category: 'Outdoor'
  },
  {
    url: 'https://images.unsplash.com/photo-1768527339600-3127e34acdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Two outdoor chairs with table',
    category: 'Outdoor'
  },
  {
    url: 'https://images.unsplash.com/photo-1613317447829-eea2ed59640f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Black metal outdoor furniture set',
    category: 'Outdoor'
  }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Office', 'Kids', 'Outdoor'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="bg-[#f5f0d4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#ffa500] mb-4">RAM FURNITURE</h2>
          <button className="px-6 py-2 bg-[#ffa500] text-black rounded inline-block mb-8">
            GALLERY
          </button>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#ffa500] text-black'
                    : 'bg-[#e8e3c3] text-gray-700 hover:bg-[#ffa500] hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm bg-[#ffa500] px-3 py-1 rounded-full inline-block">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            <p>No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
