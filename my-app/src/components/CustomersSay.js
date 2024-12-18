import React from 'react';

function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'John Doe', rating: 5, review: 'Best dining experience ever!' },
    { id: 2, name: 'Jane Smith', rating: 4, review: 'Great food and service.' },
    { id: 3, name: 'Sam Lee', rating: 5, review: 'I will definitely come back!' },
    { id :4, name: 'Peter John', rating: 5, review: 'Absolutely wonderful!'}
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <p><strong>{testimonial.name}</strong></p>
            <p><strong>Rating: {testimonial.rating} stars </strong></p>
            <p>{testimonial.review}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CustomersSay;
