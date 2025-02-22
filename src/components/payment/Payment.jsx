import  { useState } from "react";
import { Landmark, CheckCircle, ShoppingBag } from "lucide-react";
import phonePeLogo from "../../assets/images.jpg";

import { NavLink, useNavigate } from "react-router-dom";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("visa");
  const navigate = useNavigate();
  const goToSuccessPage = () => {
    navigate("/paymentSuccess");
  };

  return (
    <div>
      <div className="w-350 mx-auto mt-12 p-6 bg-white  rounded-lg  border-gray-200">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Section: Payment Methods */}
          <div className="col-span-2 space-y-6">
            <div className=" border border-gray-300 rounded w-223  p-4 mb-4">
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
                <button className="text-teal-500 border border-teal-500  px-2 py-1 rounded text-sm">
                  Change
                </button>
              </div>
            </div>
            {/* UPI */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <div className="flex justify-between items-center font-semibold text-gray-700">
                <span>UPI</span>
                <button className="text-teal-500 border border-teal-500 px-2 py-1 rounded text-sm">
                  Add New UPI
                </button>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded mt-2">
                <img src={phonePeLogo} alt="PhonePe Logo" className="w-8 h-8" />
                <span>PhonePe UPI</span>
              </div>
            </div>

            {/* Net Banking */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <div className="flex justify-between items-center font-semibold text-gray-700">
                <span>Net Banking</span>
                <button className="text-teal-500 border border-teal-500 px-2 py-1 rounded text-sm">
                  Add New Bank
                </button>
              </div>
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded mt-2">
                <Landmark className="text-gray-600 w-6 h-6" />
                <span>SBI Net Banking</span>
              </div>
            </div>

            {/* Credit/Debit Cards */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <div className="flex justify-between items-center font-semibold text-gray-700">
                <span>Credit/ Debit/ ATM Card</span>
                <button className="text-teal-500 border border-teal-500 px-2 py-1 rounded text-sm">
                  Add New Card
                </button>
              </div>
              <div className="mt-2 space-y-2">
                <div
                  className={`flex items-center gap-3 p-3 border rounded cursor-pointer ${
                    selectedMethod === "mastercard"
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedMethod("mastercard")}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                    alt="Mastercard Logo"
                    className="w-8 h-6"
                  />
                  <span>**** **** **** 3456</span>
                </div>
                <div
                  className={`flex items-center gap-3 p-3 border rounded cursor-pointer ${
                    selectedMethod === "visa"
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedMethod("visa")}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa Logo"
                    className="w-10 h-6"
                  />
                  <span>**** **** **** 5678</span>
                  {selectedMethod === "visa" && (
                    <CheckCircle className="text-green-500 ml-auto" />
                  )}
                </div>
              </div>
            </div>

            {/* COD */}
            <div className="p-4 border border-gray-300 rounded-lg">
              <div className="font-semibold text-gray-700">COD</div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-3 p-3 border rounded cursor-pointer border-gray-300">
                  <ShoppingBag className="text-blue-500" />
                  <span>Pay Online</span>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded cursor-pointer border-gray-300">
                  <ShoppingBag className="text-green-500" />
                  <span>Pay Cash</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4">
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

          {/* Right Section: Price Details & Offers */}
          <div className="col-span-1 space-y-6">
            {/* Price Details */}
            <div className="bg-white rounded  p-6  border border-gray-300">
              <h2 className="font-semibold mb-4">Price Details</h2>
              <div className="space-y-2 text-sm border-t pt-2 p-5 border-gray-300">
                <div className="flex justify-between">
                  <span>Price (3 items)</span>
                  <span>₹1187</span>
                </div>
                <div className="flex justify-between text-green-500">
                  <span>Discount</span>
                  <span>-₹300</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>₹3</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>
                    <span className="text-gray-400 line-through">₹300</span>
                    <span className="text-green-500 ml-1">Free</span>
                  </span>
                </div>
                <div className="border-t pt-2 flex justify-between border-gray-300 font-semibold">
                  <span>Total Amount</span>
                  <span>₹900</span>
                </div>
                <div className="text-green-500 border-t border-gray-300 text-xs">
                  Your total savings on this order ₹600
                </div>
              </div>
            </div>

            {/* Offers */}
            <div className="bg-white rounded p-6 border border-gray-300">
              <h2 className="font-semibold mb-4">Offers</h2>
              <div className="space-y-4 border-t pt-2 p-5 border-gray-300">
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
            <div className="flex items-center justify-center text-sm gap-2">
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
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Payment;
