import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {

 const [showPaymentSection, setShowPaymentSection] = useState(false);
 const navigate = useNavigate();

 const goToPayment = () => {
   navigate("/payment");
 };

 const goToSuccessPage = () => {
   navigate("/payment");
 };


  return (
    <>
      <div className="w-375">
        <div className="max-w-[1390px] mx-auto p-6">
          <h1 className="text-center text-2xl font-semibold border-b border-gray-200 pb-4 mb-6">
            My Cart
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              {/* Delivery Address */}
              <div className="bg-white rounded  p-4 mb-4 border  border-gray-300">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-600">Deliver to: </span>
                    <span className="font-medium">Jane Cooper, 39495</span>
                    <span className="bg-gray-100 px-2 py-0.5 text-xs ml-2">
                      Home
                    </span>
                    <div className="text-sm text-gray-600 mt-1">
                      4517 Washington Ave, Manchester, Kentucky 39495
                    </div>
                  </div>
                  <button className="text-teal-500 text-sm">Change</button>
                </div>
              </div>

              {/* Cart Items */}
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded border border-gray-300 p-4 mb-4"
                >
                  <div className="flex gap-4 ">
                    <div className="w-24 h-24 bg-gray-50 rounded flex items-center justify-center">
                      <img
                        src="/kent-filter.jpg"
                        alt="KENT Gold Filter"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">
                          KENT Gold Spare Kit Gold Pleated Filter Cartridge
                          (0.5, Pack Of 1)
                        </h3>
                        <div className="text-sm">
                          <span className="text-gray-600">
                            Delivery by Sun Jun 2024
                          </span>
                          <span className="text-teal-500 ml-2">₹100 Free</span>
                        </div>
                      </div>

                      <div className="mt-2">
                        <span className="text-gray-400 line-through text-sm">
                          ₹398
                        </span>
                        <span className="font-medium ml-2">₹299</span>
                        <span className="text-teal-500 text-sm ml-2">
                          25% Off
                        </span>
                        <span className="text-teal-500 text-sm ml-2">
                          1 Offer Available
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center">
                          <button className="w-6 h-6 rounded-full bg-teal-100 text-teal-500 flex  items-center justify-center">
                            -
                          </button>
                          <span className="mx-4 border border-gray-500 p-2  ">
                            3
                          </span>
                          <button className="w-6 h-6 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center">
                            +
                          </button>
                        </div>
                        <button className="text-teal-500 border border-teal-500 p-1 rounded text-sm">
                          Mark as Favorite
                        </button>
                        <button className="text-teal-500 text-sm border border-teal-500 p-1 rounded">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {!showPaymentSection ? (
                <button
                  className="w-40 bg-teal-500 text-white py-3 rounded font-medium ml-auto block"
                  onClick={() => setShowPaymentSection(true)}
                >
                  Place Order
                </button>
              ) : null}
            </div>

            <div className="md:w-1/">
              {/* Price Details */}
              <div className="bg-white rounded border border-gray-300  pt-2 p-5 mb-3 ">
                <h2 className="font-semibold mb-4">Price Details</h2>
                <div className="space-y-2 text-sm border-t pt-2 border-gray-300">
                  <div className="flex justify-between pt-3">
                    <span>Price (3 items)</span>
                    <span>₹1187</span>
                  </div>
                  <div className="flex justify-between pt-3 ">
                    <span>Discount</span>
                    <span className="text-green-500 ">-₹300</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span>Platform Fee</span>
                    <span>₹3</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span>Delivery Charges</span>
                    <span>
                      <span className="text-gray-400 line-through">₹300</span>
                      <span className="text-green-500 ml-1">Free</span>
                    </span>
                  </div>
                  <div className="border-t pt-2 flex justify-between  border-gray-300 font-semibold pt-3">
                    <span>Total Amount</span>
                    <span>₹900</span>
                  </div>
                  <div className="text-green-500 text-xs border-t border-gray-300 pt-2">
                    Your total savings on this order ₹600
                  </div>
                </div>
              </div>

              {/* Offers */}
              <div className="bg-white rounded border border-gray-300 h-61   p-2 mb-4">
                <h2 className="font-semibold mb-4">Offers</h2>
                <div className="space-y-5 border-t border-gray-300 ">
                  {[
                    "UPI Off ₹50",
                    "Debit Card Off ₹100",
                    "Credit Card Off 5%",
                  ].map((offer, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 text-sm">
                        %
                      </div>
                      <div>
                        <div className="font-medium text-sm">{offer}</div>
                        <div className="text-xs text-gray-600">
                          {index === 0
                            ? "Pay using any UPI and get instant off ₹50"
                            : index === 1
                            ? "Pay using Debit Card and get off ₹100"
                            : "Pay using Credit Card and get 5% off"}
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="text-teal-500 text-sm">
                    View More Offers
                  </button>
                </div>
              </div>

              {/* Safe and Secure Payments Section */}
              <div className="flex items-center justify-center mt-6 p-4 bg-gray-50 rounded shadow text-sm text-gray-700">
                <svg
                  className="w-14 h-10 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  ></path>
                </svg>
                Safe and Secure Payments. Easy Returns. 100% Authentic Products
                and Services.
              </div>
              <div className="flex items-center justify-center text-sm pt-3 gap-2">
                <span className="text-gray-600">Need Help? Visit the</span>
                <a href="#" className="text-teal-500">
                  Help Center
                </a>
                <span className="text-gray-600">or</span>
                <a href="#" className="text-teal-500">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          {showPaymentSection && (
            <div className="bg-white rounded ">
              <div className="text-sm mb-3 border-1 h-10 p-1 text-2xl border-gray-300 w-199 rounded">
                If you are booking any services, please select a time slot for
                the technician.
                <button className="ml-2  text-teal-500 border-1  border-teal-500 px-3 py-1 rounded text-sm">
                  Select Time Slot
                </button>
              </div>
              <div className="flex items-center mb-3">
                <div className="text-sm mb-3 w-200 border-1 h-10 p-2 text-2xl border-gray-300 rounded">
                  <input type="checkbox" id="gst" className="mr-2" />
                  <label htmlFor="gst">Use GST Invoice</label>
                </div>
              </div>
              <div
                onClick={goToPayment}
                className="text-sm mb-3 w-200 border-1 h-10 p-2 text-2xl border-gray-300 rounded"
              >
                <h3 className="font-medium text-teal-500 mb-2">
                  4 Payment Options
                </h3>
              </div>
              <div className="text-sm mb-3 w-200 border-1 h-10 p-2 text-2xl border-gray-300 rounded">
                <p>
                  Order confirmation email will be sent to your register email
                  id{" "}
                </p>
              </div>
              <div className="flex justify-end mt-4 mr-136">
                <NavLink to={"/cart"}>
                  <button
                    className="border border-teal-500 text-teal-500 px-4 py-2 rounded mr-2"
                    onClick={() => setShowPaymentSection(false)}
                  >
                    Back to Cart
                  </button>
                </NavLink>
                <button
                  onClick={goToSuccessPage}
                  className="bg-teal-500 text-white px-4 py-2 rounded"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
