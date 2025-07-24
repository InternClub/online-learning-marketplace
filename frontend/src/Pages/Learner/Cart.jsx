import React from 'react';

const cartItems = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    instructor: "Jane Cooper",
    price: 80,
    image: "/images/aws.jpg"
  },
  {
    id: 2,
    title: "Responsive UI with Tailwind",
    instructor: "Adam Smith",
    price: 70,
    image: "/images/tailwind.jpg"
  }
];

const LearnerCart = () => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6">🛒 Learner Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center bg-gray-100 rounded-lg shadow p-4 hover:shadow-md transition duration-300">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">Instructor: {item.instructor}</p>
            </div>
            <div className="text-right text-green-600 font-semibold text-base">
              ${item.price}
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <span className="text-xl font-bold">Total</span>
        <span className="text-xl font-bold text-green-700">${totalPrice}</span>
      </div>
    </section>
  );
};

export default LearnerCart;
