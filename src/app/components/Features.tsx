export function Features() {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Durable materials with expert craftsmanship.',
      icon: '✨'
    },
    {
      title: 'Modern Designs',
      description: 'Stylish furniture for contemporary homes.',
      icon: '🎨'
    },
    {
      title: 'Custom Solutions',
      description: 'Furniture tailored to your needs.',
      icon: '🛠️'
    },
    {
      title: 'Free Delivery',
      description: 'Fast and secure delivery to your doorstep.',
      icon: '🚚'
    },
    {
      title: 'Easy Assembly',
      description: 'Simple setup with clear instructions.',
      icon: '📦'
    },
    {
      title: 'Warranty',
      description: '5-year warranty on all products.',
      icon: '🛡️'
    }
  ];

  return (
    <section className="bg-[#e8e3c3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#ffa500] mb-4">WHAT WE OFFER</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Ram Furniture, we pride ourselves on delivering exceptional quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f5f0d4] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
