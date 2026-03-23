export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Amazing quality and beautiful designs! The living room sofa we purchased is extremely comfortable and looks stunning in our home.',
      image: '👩'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Great customer service and timely delivery. The office desk is exactly what I needed for my home office setup.',
      image: '👨'
    },
    {
      name: 'Anita Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Highly recommend RAM Furniture! The bedroom set is elegant and the quality is outstanding. Worth every penny!',
      image: '👩'
    },
    {
      name: 'Vikram Singh',
      location: 'Bangalore',
      rating: 5,
      text: 'The kids room furniture is perfect! Safe, durable, and my children absolutely love it. Excellent craftsmanship.',
      image: '👨'
    }
  ];

  return (
    <section className="bg-[#e8e3c3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#ffa500] mb-4">CUSTOMER REVIEWS</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f0d4] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="mb-0">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#ffa500]">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
