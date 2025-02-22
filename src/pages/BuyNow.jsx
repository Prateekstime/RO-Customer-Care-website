import { useState } from "react";
import { Heart } from "lucide-react";
import Quality from "../assets/Quality.png";
import Customer from "../assets/Customer.png";
import { FaRupeeSign } from "react-icons/fa";
import BlueStar from "../assets/BlueStar.png";
import BuyNowImg from "../assets/BuyNow.png";
import MapPin from "../assets/MapPin.png";
import Offer1 from "../assets/Offer1.png";
import Offer2 from "../assets/Offer2.png";
import Offer3 from "../assets/Offer3.png";
import Offer4 from "../assets/Offer4.png";
import Offer5 from "../assets/Offer5.png";
import Offer6 from "../assets/Offer6.png";
import { NavLink } from "react-router-dom";

const BuyNow = () => {
  const [liked, setLiked] = useState(false);
  const [ratings] = useState([
    { star: 5, value: 0.2 },
    { star: 4, value: 0.4 },
    { star: 3, value: 0.6 },
    { star: 2, value: 0.8 },
    { star: 1, value: 1 },
  ]);
  const products = [
    { img: Offer1, title: "Whole House Filter with Two Replacement Filters" },
    { img: Offer2, title: "3000 Gallon Replacement Water Filter" },
    { img: Offer3, title: 'VYAIR 10" x 2.5" Water Filter Cartridge' },
    { img: Offer4, title: "Domestic RO Membrane Set of 1" },
    { img: Offer5, title: "EVERPURE Microfilter Pretreatment System" },
    { img: Offer6, title: "Kent Complete Filter Replacement" },
    { img: Offer2, title: "Kent Automated Water Softener, 3000 LPH" },
  ];
  // State for quantity
  const [quantity, setQuantity] = useState(3);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  const reviews = [
    {
      name: "Devon Lane",
      date: "24 Dec, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 4, // 4 stars filled
    },
    {
      name: "Eleanor Pena",
      date: "20 Jul, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 5, // 5 stars filled
    },
    {
      name: "Jane Cooper",
      date: "15 Jan, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 4, // 4 stars filled
    },
  ];
  return (
    <div className="flex flex-col gap-y-10 mx-20 my-10">
      {/*Body */}
      <div className="flex gap-x-20">
        {/*Left Side */}
        <div className="w-2/5 ">
          <div className="w-[400px] h-[400px] border border-gray-300 rounded-lg relative ">
            {/* Heart Icon Inside Image Container */}
            <button
              className={`absolute top-3 right-3 p-2 rounded-full border ${
                liked ? "border-red-500" : "border-gray-300"
              } cursor-pointer transition-all duration-300 hover:bg-gray-200`}
              onClick={() => setLiked(!liked)} // Toggle the liked state on click
            >
              <Heart
                className="w-5 h-5"
                style={{
                  color: liked ? "red" : "gray",
                  fill: liked ? "red" : "none",
                }}
              />
            </button>
            <div className="mt-9"></div>
            <div className="w-full p-4 relative mt-5">
              <img src={BuyNow} alt="Product" className="w-[80%] h-[80%]" />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
                <img
                  src={Offer1}
                  alt="Small 1"
                  className="w-12 h-12 rounded-md object-cover"
                />
                <img
                  src={BuyNow}
                  alt="Small 2"
                  className="w-12 h-12 rounded-md object-cover"
                />
                <img
                  src={BuyNow}
                  alt="Small 3"
                  className="w-12 h-12 rounded-md object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex w-[400px] space-x-4 h-[50px] mt-5">
            <NavLink to={"/cart"}>
              <button className="flex-1 px-4 py-2 text-[#66b3a1] rounded-lg border border-[#66b3a1] transition">
                Add to Cart
              </button>
            </NavLink>

            <button className="flex-1 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg hover:bg-[#66b3a1] transition">
              Buy Now
            </button>
          </div>
        </div>

        {/*Right Sidebar */}
        <div className=" flex flex-col w-full gap-10">
          {/*Product Description */}
          <div className="w-full bg-white p-4 rounded-lg shadow-lg">
            {/* Product Title*/}
            <span className="flex-wrap ">
              <p className="text-xl font-semibold">
                Prefilter RO Service Kit Pre-filter Housing Bowl
              </p>
              <p className="mb-4">
                + 2 Pcs. Spun Filter + SS Inlet Ball Valveeflon 1/4" + 3 Meter
                RO Pipe + 2 Ro Tap + 1/4" Connector For Water Purifier, Solid
                Filter Cartridge (5, Pack of 5)
              </p>
            </span>

            {/* Rating */}
            <div className="flex items-center  mb-3">
              <img src={BlueStar} alt="" />
              <span>4.96</span>
              <span className="ml-2 text-gray-500 text-sm">(2.3M Reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Price */}
              <p className="text-2xl mb-3">₹899.00</p>

              {/* Warranty */}
              <span className="flex items-center mb-4 gap-x-2">
                <div className="w-3 h-3 rounded-full bg-black"> </div>
                <p className=" text-lg">Warranty: NA</p>
              </span>
            </div>

            <div className="flex w-full gap-x-40 ">
              {/* Quantity Selector */}
              <div className="flex items-center justify-center mb-4 space-x-4">
                <button
                  className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-xl font-bold text-white"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <div className="w-15 h-12 flex items-center justify-center border border-gray-300 text-xl font-semibold">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-xl font-bold text-white"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>

              {/* Check Availability */}
              <div className="w-[40%] flex items-center justify-between mb-4">
                <span className="text-sm">Check Availability:</span>
                <div className="flex items-center justify-between space-x-2 w-full border-b border-gray-900">
                  <img src={MapPin} alt="Location Icon" className="w-6 h-6" />
                  <button className="px-4 py-2 text-[#7EC1B1]">Check</button>
                </div>
              </div>

              {/* Share Button */}
              <button className="w-[150px] h-[50px] px-4 py-2 border border-[#7EC1B1] text-[#7EC1B1] rounded-lg">
                Share
              </button>
            </div>
          </div>

          {/* Offers Section */}
          <div>
            <h3 className="text-lg font-semibold">Available Offers</h3>
            <div className="my-2 border-t border-dashed border-gray-400"></div>

            <div className="space-y-4">
              {/* Offer 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-white">
                  <span>%</span>
                </div>
                <div>
                  <div className="font-medium">UPI Off ₹50</div>
                  <div className="text-sm text-gray-600">
                    Pay using any UPI and get instant off ₹50
                  </div>
                </div>
              </div>

              {/* Offer 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-white">
                  <span>%</span>
                </div>
                <div>
                  <div className="font-medium">Debit Card Off ₹100</div>
                  <div className="text-sm text-gray-600">
                    Pay using Debit Card and get off ₹50
                  </div>
                </div>
              </div>

              {/* Offer 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#7EC1B1] flex items-center justify-center text-white">
                  <span>%</span>
                </div>
                <div>
                  <div className="font-medium">Credit Card Off 5%</div>
                  <div className="text-sm text-gray-600">
                    Pay using Credit Card and get 5% off
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-transparent text-[#7EC1B1] hover:text-lg transition-all">
              View More Offers
            </button>
          </div>

          {/*Description */}
          <div className="w-full">
            {/* Description with Bullet Points */}
            <div className="mb-4">
              <p className="text-xl font-semibold mb-2">Description</p>
              <div className="my-2 border-t border-dashed border-gray-400"></div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Netus bibendum duis
                  lorem ullamcorper id. Amet mattis eu fringilla nibh interdum.
                  Tempus turpis enim blandit eget viverra nulla. Vulputate nisi
                  dignissim ipsum ornare non. Ullamcorper vitae leo dictum a
                  sollicitudin quisque. Varius sed maecenas donec lobortis eu
                  ornare arcu fermentum. Aliquam maecenas non neque accumsan
                  tristique turpis. Commodo facilisis nunc in scelerisque aenean
                  dolor felis in odio. Non massa lacus auctor sit cursus mus
                  egestas. Porta sem aenean adipiscing nibh risus enim.
                </li>
                <li>
                  Pharetra sit in risus felis dictum enim suspendisse sodales.
                  Lobortis aliquam morbi tortor aliquet pretium eu. Porta
                  dapibus tristique sit fringilla ut eleifend. Condimentum
                  feugiat et massa odio sit. Odio imperdiet dignissim posuere
                  est quis ornare lorem dui amet. Facilisis gravida morbi sed
                  porttitor a amet tempor.
                </li>
                <li>
                  Eget sed ultrices mauris aliquam sed senectus quam sed
                  imperdiet. Arcu enim est facilisis consectetur. Facilisis.
                </li>
              </ul>
            </div>
          </div>

          {/*Customer Reviews */}
          <div>
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            <div className="my-2 border-t border-dashed border-gray-400"></div>
            <div className="w-[30%]">
              <div className="flex items-center gap-3 mb-3">
                <img src={BlueStar} alt="" />
                <span>4.96</span>
              </div>
              <span className="text-gray-800 text-md">2.3M Reviews</span>
              {/* Rating Rows */}
              {ratings.map((rating, index) => (
                <div key={rating.star} className="flex items-center mb-4">
                  {/* Star */}
                  <div className="flex items-center">
                    <span className="text-2xl text-[#7EC1B1]">★</span>
                  </div>
                  {/* Rating Value */}
                  <span className="ml-2 text-sm">{rating.star}</span>
                  {/* Rating Bar */}
                  <div className="w-full h-1 bg-gray-300 rounded-lg ml-4 mt-1">
                    <div
                      className="h-full bg-[#7EC1B1] rounded-lg"
                      style={{ width: `${rating.value * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="flex items-center space-x-4 mb-1 justify-between">
                  <div className="flex items-center space-x-4 mb-1 ">
                    <img
                      src={Customer}
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-600">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-2xl ${
                          index < review.rating
                            ? "text-[#7EC1B1]"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{review.review}</p>
              </div>
            ))}

            {/* Button to view more reviews */}
            <button className="bg-transparent text-[#7EC1B1] hover:text-lg transition-all">
              View More Reviews
            </button>
          </div>
        </div>
      </div>
      {/*Similar Products */}
      <div className="flex flex-col w-full">
        {/* Title Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Similar Products</h2>
        </div>

        {/* Horizontal Scrollable Products */}
        <div className="flex overflow-x-auto space-x-4 scrollbar-hidden">
          {products.map((offer, index) => (
            <div
              key={index}
              className="flex-none w-[calc(20%-1rem)] h-auto border border-gray-300 rounded-lg rounded-lg overflow-hidden shadow-md"
            >
              <div className="flex flex-col items-center justify-center  gap-2 py-5 px-2">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-[160px] h-[160px] mb-3 border border-gray-200 rounded-lg p-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {offer.title}
                </h3>
                {/* Rating Row */}
                <div className="flex items-center text-gray-600">
                  <img src={BlueStar} alt="Star" className="w-4 h-4 mr-1" />
                  <span className="font-semibold">4.81</span>
                  <span className="ml-1">(1.9M Reviews)</span>
                </div>
                {/* Price & Time */}
                <div className="flex items-center text-gray-600 gap-2">
                  <span className="font-semibold text-lg">₹299.00</span>
                  <span className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-black"></div> Time:
                    30 mins
                  </span>
                </div>
                <button className="px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
