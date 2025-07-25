import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../Store/API/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  //   const [cart, setCart] = useState();
  const dispatch = useDispatch();

  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">💖 Your Wishlist</h2>

      {wishlist.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((course) => (
            <div
              key={course.id}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
                <button
                  onClick={() => dispatch(removeFromWishlist(course.id))} // ← Only pass course.id
                  className="w-full bg-white text-red-600 py-2 rounded hover:shadow-lg text-sm"
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Your wishlist is empty 🫧</p>
      )}
    </section>
  );
};

export default Wishlist;
