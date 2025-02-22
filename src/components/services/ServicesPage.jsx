import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import AMC from "../../assets/AMC.png";
import AMCPlan from "../../assets/AMCPlan.png";
import BlueStar from "../../assets/BlueStar.png";
import RepairService from "../../assets/RepairService.png";
import ROinstallation from "../../assets/ROinstallation.png";
import Service from "../../assets/Service.png";
import Service1 from "../../assets/Service1.png";
import Service2 from "../../assets/Service2.png";
import UnIn from "../../assets/UnIn.png";
import UnInService from "../../assets/UnInService.png";
import Quality from "../../assets/Quality.png";
import Customer from "../../assets/Customer.png";
import Gift from "../../assets/GiftBox.png"

const ServicesPage = () => {
    const reviews = [
        {
            name: "Devon Lane",
            date: "24 Dec, 2024",
            review: "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
            rating: 4, // 4 stars filled
        },
        {
            name: "Eleanor Pena",
            date: "20 Jul, 2024",
            review: "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
            rating: 5, // 5 stars filled
        },
        {
            name: "Jane Cooper",
            date: "15 Jan, 2024",
            review: "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
            rating: 4, // 4 stars filled
        },
    ];
    return (
      <div className="flex flex-col gap-5 mx-4 my-6">
        {/*Title */}
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-900"></div>
          <span
            className="mx-2
                text-3xl font-semibold "
          >
            Services
          </span>
          <div className="flex-grow border-t border-gray-900"></div>
        </div>
        {/*Middle*/}
        <div className="flex flex-col font-sans mt-5 mx-20 gap-8">
          {/*Our Services*/}
          <div className="grid grid-cols-4 gap-6">
            <div className="border border-gray-300 p-4 rounded-lg text-center">
              <img
                src={RepairService}
                alt="Repair"
                className="w-full h-auto "
              />
              <div className="pt-4">
                <h4 className="text-lg font-semibold">Repair</h4>
              </div>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg text-center">
              <img src={Service} alt="Service" className="w-full h-auto" />
              <div className="pt-4">
                <h4 className="text-lg font-semibold">Service</h4>
              </div>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg text-center">
              <img
                src={UnIn}
                alt="Installation/Uninstallation"
                className="w-full h-auto"
              />
              <div className="pt-4">
                <h4 className="text-lg font-semibold">
                  Installation/Uninstallation
                </h4>
              </div>
            </div>

            <div className="border border-gray-300 p-4 rounded-lg text-center">
              <img src={AMCPlan} alt="AMC Plan" className="w-full h-auto" />
              <div className="pt-4">
                <h4 className="text-lg font-semibold">AMC Plan</h4>
              </div>
            </div>
          </div>
          {/*Body */}
          <div className="flex gap-x-40">
            {/* Sidebar */}
            <div className=" flex flex-col w-1.5/5 p-6 gap-10">
              {/*Sort by */}
              <div>
                <h3 className="text-lg font-semibold ">Sort By</h3>
                {/* Gray Dashed Line */}
                <div className="my-2 border-t border-dashed border-gray-400"></div>
                <ul className="space-y-3">
                  <li>
                    <input type="checkbox" id="popular" className="mr-2" />
                    <label htmlFor="popular">Popular</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="price-low-high"
                      className="mr-2"
                    />
                    <label htmlFor="price-low-high">Price Low - High</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="price-high-low"
                      className="mr-2"
                    />
                    <label htmlFor="price-high-low">Price High - Low</label>
                  </li>
                  <li>
                    <input type="checkbox" id="latest" className="mr-2" />
                    <label htmlFor="latest">Latest</label>
                  </li>
                </ul>
              </div>

              {/* Price Section */}
              <div>
                <h3 className="text-lg font-semibold">Price</h3>
                <div className=" items-center space-x-4">
                  {/* Two black circles connected with gray line */}
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-black"></div>
                    <div className="h-[10px] w-[100%] bg-gray-300"></div>{" "}
                    {/* Increased height */}
                    <div className="w-5 h-5 rounded-full bg-black"></div>
                  </div>

                  {/* Price Range */}
                  <span className="flex items-center mt-2">
                    <FaRupeeSign className=" text-md" />
                    <span className="text-xl">99 -</span>
                    <FaRupeeSign className=" text-md" />
                    <span className="text-xl">9999 </span>
                  </span>
                </div>
              </div>

              {/* Offers Section */}
              <div>
                <h3 className="text-lg font-semibold">Offers</h3>
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

              {/*Customer Reviews */}
              <div>
                <h3 className="text-lg font-semibold">Customer Reviews</h3>
                <div className="my-2 border-t border-dashed border-gray-400"></div>
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
                    <p className="text-sm text-gray-600 mb-2">
                      {review.review}
                    </p>
                  </div>
                ))}

                {/* Button to view more reviews */}
                <button className="bg-transparent text-[#7EC1B1] hover:text-lg transition-all">
                  View More Reviews
                </button>
              </div>

              {/* Techno RO Promise */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Techno RO Promise
                </h3>
                <div className="my-2 border-t border-dashed border-gray-400"></div>
                <div className="flex gap-3">
                  <ul className="space-y-3">
                    <li>
                      <span className="text-xl mx-1">✓</span>Verified
                      Professionals
                    </li>
                    <li>
                      <span className="text-xl mx-1">✓</span>assle-Free Booking
                    </li>
                    <li>
                      <span className="text-xl mx-1">✓</span>Transparent Pricing
                    </li>
                    <li>
                      <span className="text-xl mx-1">✓</span>Genuine Spare Parts
                    </li>
                  </ul>
                  <img src={Quality} alt="" />
                </div>
              </div>
            </div>

            {/*Sevices Provided */}
            <div className="w-full p-2 border border-gray-500">
              {/*Repair Section */}
              <div>
                <div>
                  <h3 className="text-2xl  my-4">Repair</h3>
                  {/* Gray Dashed Line */}
                  <div className="my-2 border-t border-dashed border-gray-400"></div>
                </div>
                <div className="flex flex-col mx-1 gap-y-1">
                  {/*Card 1*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={Service1}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 2*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={Service1}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 3*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={Service1}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 4*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={Service1}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Service Section*/}
              <div>
                <div>
                  <h3 className="text-2xl  my-4">Service</h3>
                  {/* Gray Dashed Line */}
                  <div className="my-2 border-t border-dashed border-gray-400"></div>
                </div>
                <div className="flex flex-col mx-1 gap-y-1">
                  {/*Card 1*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={Service2}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 2*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={Service2}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 3*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={Service2}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation/Uninstallation Section*/}
              <div>
                <div>
                  <h3 className="text-2xl  my-4">
                    Installation/Uninstallation
                  </h3>
                  {/* Gray Dashed Line */}
                  <div className="my-2 border-t border-dashed border-gray-400"></div>
                </div>
                <div className="flex flex-col mx-1 gap-y-1">
                  {/*Card 1*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={UnInService}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 2*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={UnInService}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*AMC Plan Section */}
              <div>
                <div>
                  <h3 className="text-2xl my-4">AMC Plan</h3>
                  {/* Gray Dashed Line */}
                  <div className="my-2 border-t border-dashed border-gray-400"></div>
                </div>
                <div className="flex flex-col mx-1 gap-y-1">
                  {/*Card 1*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={AMC}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 2*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={AMC}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 3*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={AMC}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Card 4*/}
                  <div className="flex border border-gray-500 rounded-md py-1">
                    <div className="flex justify-between border-b border-gray-300 h-[200px]">
                      {/* Left Column - Image and Buy Now Button */}
                      <div className="w-1/2 relative">
                        <img
                          src={AMC}
                          alt="Product"
                          className="w-[300px] h-[180px]"
                        />
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#7EC1B1] text-white rounded-lg">
                          Buy Now
                        </button>
                      </div>

                      {/* Right Column - 5 rows of text */}
                      <div className="w-full p-4">
                        {/* Service Name */}
                        <h2 className="text-lg font-semibold">
                          Water Purifier Check-up
                        </h2>

                        {/* Rating Row */}
                        <div className="flex items-center text-gray-600">
                          <img
                            src={BlueStar}
                            alt="Star"
                            className="w-4 h-4 mr-1"
                          />
                          <span className="font-semibold">4.81</span>
                          <span className="ml-1">(1.9M Reviews)</span>
                        </div>

                        {/* Price & Time */}
                        <div className="flex items-center text-gray-600 gap-2">
                          <span className="font-semibold text-lg">₹299.00</span>
                          <span className=" flex items-center">
                            <div className="w-3 h-3 rounded-full bg-black"></div>{" "}
                            Time: 30 mins
                          </span>
                        </div>

                        {/* Description */}
                        <p className=" text-gray-600 mb-2">
                          Complete check-up to identify issues before repair.
                        </p>

                        {/* View Details */}
                        <button className="text-[#7EC1B1] font-semibold">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Rewads & Gifts */}
        <div
          className="w-[1860px] max-w-[100%] h-[400px] flex items-center justify-between 
                            bg-[#E5DAA1] px-[50px] mx-auto  rounded-[16px]"
        >
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Refer and Earn Rewards
            </h2>
            <p className="text-lg text-gray-600">
              Invite and get{" "}
              <span className="font-semibold">₹100 cash back</span> on your
              purchase.
            </p>
            <button
              className="w-[160px] h-[48px] bg-[#0000004D]
             text-white font-medium rounded-lg"
            >
              Learn More
            </button>
          </div>

          <div>
            <img
              src={Gift}
              alt="Gift Box"
              className="w-[200px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default ServicesPage;
