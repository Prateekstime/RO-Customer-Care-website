import { CheckCircle } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
// import successImage from "../assets/success.png";
const PaymentSuccess = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profileSettings");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Confetti Effect */}
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-full h-full bg-transparent animate-confetti"></div>
          </div>

          {/* Success Icon */}
          <div className="flex flex-col items-center">
            {/* <img src={successImage} alt="Payment Success" className="w-32 h-32 mb-4" /> */}
            <CheckCircle className="text-green-500 w-16 h-16" />
            <h2 className="text-xl font-semibold mt-2 text-gray-800">
              Payment Successful!
            </h2>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-6 text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Thank you for Ordering!
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. In viverra mus molestie
            metus curabitur semper nec accumsan tincidunt.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 border w-42 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition">
            View Order
          </button>
          <NavLink to={"/"}>
            <button
              onClick={goToProfile}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
            >
              Continue Shopping
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
