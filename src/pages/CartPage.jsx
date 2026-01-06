import { useDispatch, useSelector } from "react-redux";
import { X, ShoppingCart, Lock, CheckCircle } from "lucide-react";
import { removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: cart } = useSelector((state) => state.cart);

  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-3 leading-tight sm:leading-snug md:leading-snug">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Manage your bookings and proceed to checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-lg border-2 border-blue-100">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 mb-6">
              <ShoppingCart size={40} className="text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
              Looks like you haven't added any tickets yet. Start exploring!
            </p>
            <button
              onClick={() => navigate("/home")}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all transform hover:scale-105 font-bold text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl"
            >
              Explore Tickets
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold">
                  {cart.length}
                </span>
                Items in Cart
              </h2>

              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 flex gap-4 shadow-md hover:shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all"
                >
                  {/* Item Image */}
                  <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-blue-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 sm:mb-3">
                      {item.title}
                    </h3>

                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600 font-medium">Quantity:</span>
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-700 rounded-lg font-bold text-xs sm:text-sm md:text-base">
                          {item.quantity || 1} ticket(s)
                        </span>
                      </div>

                      {item.selectedSeats && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 font-medium">Seats:</span>
                          <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-emerald-100 text-emerald-700 rounded-lg font-bold text-xs sm:text-sm md:text-base">
                            {item.selectedSeats.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-600 font-medium">Total:</span>
                      <p className="font-bold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      dispatch(removeFromCart({ id: item.id, selectedSeats: item.selectedSeats }))
                    }
                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 sm:p-3 rounded-xl transition-all self-start transform hover:scale-110"
                  >
                    <X size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl sticky top-24 border-2 border-blue-100">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-blue-600 text-white text-xs sm:text-sm md:text-base font-bold">
                    📋
                  </span>
                  Order Summary
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-blue-200 text-sm sm:text-base md:text-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Subtotal</span>
                    <span className="font-bold text-base sm:text-lg text-gray-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Taxes & Fees (10%)</span>
                    <span className="font-bold text-base sm:text-lg text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Total Items</span>
                    <span className="font-bold text-base sm:text-lg text-gray-900">{cart.length}</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 sm:p-5 rounded-xl border-2 border-amber-200 mb-6 sm:mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold text-base sm:text-lg">Final Total</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-bold py-3 sm:py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg flex items-center justify-center gap-2">
                    <Lock size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    Proceed to Payment
                  </button>

                  <button
                    onClick={() => navigate("/movies")}
                    className="w-full border-2 border-blue-600 text-blue-600 font-bold py-2.5 sm:py-3 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 text-sm sm:text-base"
                  >
                    Continue Shopping
                  </button>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-200 p-3 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <CheckCircle size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-600" />
                    <span className="font-bold text-emerald-900 text-sm sm:text-base">Secure & Encrypted</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-700">Your payment is protected with 256-bit SSL encryption</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Features */}
        {cart.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🛡️</div>
              <p className="font-bold text-gray-900 mb-2">Secure Checkout</p>
              <p className="text-sm text-gray-600">Industry-standard SSL encryption protects your data</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold text-gray-900 mb-2">Instant Confirmation</p>
              <p className="text-sm text-gray-600">Receive your tickets immediately after payment</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-amber-200 text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">⏱️</div>
              <p className="font-bold text-gray-900 mb-2">Time to Act</p>
              <p className="text-sm text-gray-600">Limited stock - secure your seats now!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
