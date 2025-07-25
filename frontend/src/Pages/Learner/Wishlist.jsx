// Wishlist.jsx
import { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "Advanced JavaScript Course",
      price: "$49.99",
      image: "https://via.placeholder.com/120", // Replace with actual course image
    },
    {
      id: 2,
      title: "React UI Components Kit",
      price: "$29.99",
      image: "https://via.placeholder.com/120",
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">🌟 Learner Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-indigo-600 font-bold">{item.price}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove ❌
              </button>
            </div>
          </div>
        ))}
        {wishlist.length === 0 && (
          <p className="col-span-full text-center text-gray-500 italic">No wishes yet! 🌈</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
