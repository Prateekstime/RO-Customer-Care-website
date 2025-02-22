
import WaterFilter from "../../assets/Water.png";
import Offer1 from "../../assets/Offer1.png";
import Offer2 from "../../assets/Offer2.png";
import Offer3 from "../../assets/Offer3.png";
import Offer4 from "../../assets/Offer4.png";
import Offer5 from "../../assets/Offer5.png";
import Offer6 from "../../assets/Offer6.png";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import ChevronRight from "../../assets/ChevronRight.png";
import Repair from "../../assets/Repair.png";
import Maintenance from "../../assets/Maintenance.png";
import Servicing from "../../assets/Servicing.png";
import Uninstallation from "../../assets/Uninstallation.png";
import Purifier from "../../assets/Purifier.png";
import WaterQuality from "../../assets/WaterQualityTesting.png";
import SystemCheckup from "../../assets/SystemCheckup.png";
import star from "../../assets/star.png";
import users from "../../assets/users.png";
import Booked1 from "../../assets/Booked1.png";
import Booked2 from "../../assets/Booked2.png";
import Booked3 from "../../assets/Booked3.png";
import Booked4 from "../../assets/Booked4.png";
import Booked5 from "../../assets/Booked5.png";
import Fstar from "../../assets/Fstar.png";
import Video from "../../assets/Video.png";
import Video1 from "../../assets/Video1.png";
import Video2 from "../../assets/Video2.png";
import Video3 from "../../assets/Video3.png";
import Video4 from "../../assets/Video4.png";
import Profile from "../../assets/Profile.png";
import Gift from "../../assets/GiftBox.png";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-8  items-center justify-center ">
      {/*Web Banner */}
      <div className="w-full h-[352px] bg-[rgba(31,61,77,1)]">
        <div className="flex items-center justify-center gap-40 pt-10">
          {/* Left Side - Text & Button */}
          <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="font-poppins font-semibold text-[32px] leading-[48px] text-white text-center">
              Get exciting offers on <br />
              first service booking
            </h2>
            <button className="w-[220px] h-[52px] px-[32px] py-[16px] bg-[rgba(0,0,0,0.3)] text-white text-lg font-medium rounded-lg">
              Book Service Now
            </button>
          </div>

          {/* Right Side - Banner Image */}
          <div className="relative flex justify-center items-center">
            <img
              src={WaterFilter}
              alt="Banner"
              className="w-[480px] h-[280px] object-cover"
            />
          </div>
        </div>

        {/* 3 Dots Slider Icon - Positioned at Bottom Center of the Container */}
        <div className="flex justify-center gap-2">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
      </div>

      {/*Offers*/}
      <div className="relative w-full flex justify-between items-center px-4">
        {/* Left Arrow Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={LeftArrow}
            alt="Left Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>

        {/* Right Arrow Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>
        {/* Cards Container */}
        <div className="flex justify-between w-full gap-2">
          {/* Card 1 */}
          <div className="flex-1 bg-[#8EB7CB] rounded-[16px] p-[16px] flex flex-col gap-[16px] border border-gray-300">
            <img
              src={Offer1}
              alt="Offer"
              className="w-full h-[110px] object-cover rounded-md"
            />
            <div className="flex justify-center">
              <p className="text-lg font-semibold text-center font-semibold text-center h-[50px]">
                Great Deals on Branded Spare Parts
              </p>
            </div>
            <div className="flex justify-end">
              <img
                src={ChevronRight}
                alt="Chevron Right"
                className="w-[90px] h-[30px] cursor-pointer"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-[#998FCC] rounded-[16px] p-[16px] flex flex-col gap-[16px] border border-gray-300">
            <img
              src={Offer2}
              alt="Offer"
              className="w-full h-[110px] object-cover rounded-md"
            />
            <div className="flex justify-center">
              <p className="text-lg font-semibold text-center font-semibold text-center h-[50px]">
                20% Off on Microfiber Water Cartridge Filter
              </p>
            </div>
            <div className="flex justify-center">
              <button className="w-[100px] py-2 bg-[#0000004D] text-white rounded-lg">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-[#A3CC8F] rounded-[16px] p-[16px] flex flex-col gap-[16px] border border-gray-300">
            <img
              src={Offer3}
              alt="Offer"
              className="w-full h-[110px] object-cover rounded-md"
            />
            <div className="flex justify-center">
              <p className="text-lg font-semibold text-center font-semibold text-center h-[50px]">
                10% Off on Pre-filter Housing
              </p>
            </div>
            <div className="flex justify-center">
              <button className="w-[100px] py-2 bg-[#0000004D] text-white rounded-lg">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-1 bg-[#CC8FCC] rounded-[16px] p-[16px] flex flex-col gap-[16px] border border-gray-300">
            <img
              src={Offer4}
              alt="Offer"
              className="w-full h-[110px] object-cover rounded-md"
            />
            <div className="flex justify-center">
              <p className="text-lg font-semibold text-center font-semibold text-center h-[50px]">
                20% Off on Microfiber Water Softener
              </p>
            </div>
            <div className="flex justify-center">
              <button className="w-[100px] py-2 bg-[#0000004D] text-white rounded-lg">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex-1 bg-[#A3CC8F] rounded-[16px] p-[16px] flex flex-col gap-[16px] border border-gray-300">
            <img
              src={Offer5}
              alt="Offer"
              className="w-full h-[110px] object-cover rounded-md"
            />
            <div className="flex justify-center">
              <p className="text-lg font-semibold text-center font-semibold text-center h-[50px]">
                15% Off on Carbon Block Filter
              </p>
            </div>
            <div className="flex justify-center">
              <button className="w-[100px] py-2 bg-[#0000004D] text-white rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="flex-1 bg-[#8FCCAD] rounded-[16px] p-[16px] flex flex-col gap-[16px] border border-gray-300">
            <img
              src={Offer6}
              alt="Offer"
              className="w-full h-[110px] object-cover rounded-md"
            />
            <div className="flex justify-center">
              <p className="text-lg font-semibold text-center h-[50px]">
                25% Off on Domestic RO Membrane
              </p>
            </div>
            <div className="flex justify-center">
              <button className="w-[100px] py-2 bg-[#0000004D]  text-white rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*What you are Looking For */}
      <div className="w-full h-[700px] px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-left p-5">
          What are you looking for?
        </h2>

        {/* 2x3 Matrix of Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10 border border-gray-300 h-[520px]  px-[80px] py-[40px] gap-x-20 gap-y-10 rounded-lg">
          {/* Card 1 */}
          <div className="flex items-center justify-between bg-[#A3E595] rounded-[20px]  p-[16px]">
            <p className="text-lg font-semibold">Repair</p>
            <img src={Repair} alt="Repair" className="w-[108px] h-[108px]" />
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-between bg-[#E5BD95] rounded-[16px] p-[16px]">
            <p className="text-lg font-semibold">Servicing</p>
            <img
              src={Servicing}
              alt="Servicing"
              className="w-[112px] h-[80px]"
            />
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-between bg-[#E5A395] rounded-[16px] p-[16px]">
            <p className="text-lg font-semibold">Installation/Uninstallation</p>
            <img
              src={Uninstallation}
              alt="Installation"
              className="w-[108px] h-[108px]"
            />
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-between bg-[#B095E5] rounded-[16px] p-[16px]">
            <p className="text-lg font-semibold">Maintenance</p>
            <img
              src={Maintenance}
              alt="Maintenance"
              className="w-[108px] h-[108px]"
            />
          </div>

          {/* Card 5 */}
          <div className="flex items-center justify-between bg-[#96BEE7] rounded-[16px] p-[16px]">
            <p className="text-lg font-semibold">Water Quality Testing</p>
            <img
              src={WaterQuality}
              alt="Water Quality Testing"
              className="w-[108px] h-[108px]"
            />
          </div>

          {/* Card 6 */}
          <div className="flex items-center justify-between bg-[#E595D8] rounded-[16px] p-[16px]">
            <p className="text-lg font-semibold">System Checkup</p>
            <img
              src={SystemCheckup}
              alt="System Checkup"
              className="w-[108px] h-[80px]"
            />
          </div>
        </div>

        {/* Last Row - Two Icons with Text */}
        <div className="flex gap-10">
          {/* Icon 1 */}
          <div className="flex items-center gap-1">
            <img src={star} alt="Star" className="w-[50px] h-[50px] mb-2" />
            <div className="text-center">
              <p className="text-xl font-semibold">4.8</p>
              <p className="text-sm">Service Rating</p>
            </div>
          </div>

          {/* Icon 2 */}
          <div className="flex items-center gap-2">
            <img src={users} alt="Users" className="w-[50px] h-[50px] mb-2" />
            <div className="text-center">
              <p className="text-xl font-semibold">10M+</p>
              <p className="text-sm">Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/*  Our Most Booked Services */}
      <div className="relative w-full justify-between items-center px-4">
        {/* Left Arrow Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={LeftArrow}
            alt="Left Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>

        {/* Right Arrow Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>
        <h2 className="text-3xl font-semibold text-left p-5">
          Our Most Booked Services
        </h2>

        {/* Container for Cards */}
        <div className="grid grid-cols-5 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img
              src={Booked1}
              alt="RO System Cleaning"
              className="w-[230px] h-[150px]
                          rounded-t-[16px] object-cover mb-4"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">RO System Cleaning</p>
              <div className="flex items-left mt-2">
                <img
                  src={Fstar}
                  alt="Rating"
                  className="w-[16px] h-[16px] mr-2"
                />
                <p className="text-sm">4.87 (3.9M)</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img
              src={Booked2}
              alt="Softener Installation"
              className="w-[230px] h-[150px]
                          rounded-t-[16px] object-cover mb-4"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">Softener Installation</p>
              <div className="flex items-center mt-2">
                <img
                  src={Fstar}
                  alt="Rating"
                  className="w-[16px] h-[16px] mr-2"
                />
                <p className="text-sm">4.72 (3.5M)</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img
              src={Booked3}
              alt="Water Dispenser Repair"
              className="w-[230px] h-[150px]
                          rounded-t-[16px] object-cover mb-4"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">Water Dispenser Repair</p>
              <div className="flex items-center mt-2">
                <img
                  src={Fstar}
                  alt="Rating"
                  className="w-[16px] h-[16px] mr-2"
                />
                <p className="text-sm">4.78 (2.8M)</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img
              src={Booked4}
              alt="Water Cooler Repair"
              className="w-[230px] h-[150px]
                          rounded-t-[16px] object-cover mb-4"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">Water Cooler Repair</p>
              <div className="flex items-center mt-2">
                <img
                  src={Fstar}
                  alt="Rating"
                  className="w-[16px] h-[16px] mr-2"
                />
                <p className="text-sm">4.75 (837K)</p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img
              src={Booked5}
              alt="Water Ionizer Repair"
              className="w-[230px] h-[150px]
                          rounded-t-[16px] object-cover mb-4"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">Water Ionizer Repair</p>
              <div className="flex items-center mt-2">
                <img
                  src={Fstar}
                  alt="Rating"
                  className="w-[16px] h-[16px] mr-2"
                />
                <p className="text-sm">4.70 (1.9M)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   Services by product category */}
      <div className="relative w-full px-4">
        {/* Left Arrow Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={LeftArrow}
            alt="Left Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>

        {/* Right Arrow Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>
        <h2 className="text-3xl font-semibold text-left p-5">
          Services by product category
        </h2>
        <div className="w-full flex gap-2">
          <div className="flex-1 flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img src={Purifier} alt="Purifiers" />
            <p>Purifiers</p>
          </div>
          <div className="flex-1 flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img src={Offer5} alt="Water Softener" />
            <p>Water Softener</p>
          </div>
          <div className="flex-1 flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img src={Offer3} alt="Water Dispenser" />
            <p>Water Dispenser</p>
          </div>
          <div className="flex-1 flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img src={Offer4} alt="Water Cooler" />
            <p>Water Cooler</p>
          </div>
          <div className="flex-1 flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img src={Offer2} alt="Water Ionizer" />
            <p>Water Ionizer</p>
          </div>
          <div className="flex-1 flex flex-col items-center p-4 border border-gray-300 rounded-[16px]">
            <img src={Offer1} alt="Water Tank" />
            <p>Water Tank</p>
          </div>
        </div>
      </div>

      {/*What Our Engineers Say */}
      <div className="relative w-full px-5">
        {/* Left Arrow Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={LeftArrow}
            alt="Left Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>

        {/* Right Arrow Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[50px] w-[40px] 
    rounded-xl border-b-4 border-gray-400 shadow-lg"
        >
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="w-[10px] h-[15px] cursor-pointer"
          />
        </button>
        <h2 className="text-3xl font-semibold text-left mb-10">
          What Our Engineers Say
        </h2>

        {/* Row of 5 Containers */}
        <div className="flex justify-between gap-4">
          {/* Container 1 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src={Video}
              alt="Video"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Container 2 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src={Video1}
              alt="Video 1"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Container 3 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src={Video2}
              alt="Video 2"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Container 4 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src={Video3}
              alt="Video 3"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Container 5 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src={Video4}
              alt="Video 4"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/*Feedback */}
      <div className="w-full px-4">
        {/* Row of 5 Cards */}
        <div className="flex justify-between gap-4 mt-10">
          {/* Card 1 */}
          <div
            className="flex-1 border-4 border-[#005580] rounded-[16px] p-[8px] flex flex-col items-center relative
                    bg-[#B46FB4]"
          >
            {/* Profile Image Positioned at Top Border */}
            <div className="absolute top-[-60px] w-[120px] h-[120px] rounded-full border-4 border-white">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-[40px] text-center">
              Lorem ipsum dolor sit amet consectetur. Pellentesque platea nunc
              nunc sed mattis. Ut faucibus fames ut viverra risus. Id nibh
              blandit mauris habitasse facilisis. Enim imperdiet feugiat massa
              aliquet nunc iaculis. Cursus neque sit interdum nam in libero.
              Amet neque ultricies aliquam ut commodo. Mauris adipiscing aenean
              erat rhoncus at. Turpis tortor at netus velit ut quisque.
              Hendrerit amet odio arcu placerat. Nunc neque vitae quam velit sed
              augue egestas eu. Aliquam eu.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="flex-1 border-4 border-[#005580] rounded-[16px] p-[8px] flex flex-col items-center relative
                    bg-[#70B570]"
          >
            <div className="absolute top-[-60px] w-[120px] h-[120px] rounded-full border-4 border-white">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-[40px] text-center">
              Lorem ipsum dolor sit amet consectetur. Pellentesque platea nunc
              nunc sed mattis. Ut faucibus fames ut viverra risus. Id nibh
              blandit mauris habitasse facilisis. Enim imperdiet feugiat massa
              aliquet nunc iaculis. Cursus neque sit interdum nam in libero.
              Amet neque ultricies aliquam ut commodo. Mauris adipiscing aenean
              erat rhoncus at. Turpis tortor at netus velit ut quisque.
              Hendrerit amet odio arcu placerat. Nunc neque vitae quam velit sed
              augue egestas eu. Aliquam eu.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="flex-1 border-4 border-[#005580] rounded-[16px] p-[8px] flex flex-col items-center relative
                    bg-[#70B5B5]"
          >
            <div className="absolute top-[-60px] w-[120px] h-[120px] rounded-full border-4 border-white">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-[40px] text-center">
              Lorem ipsum dolor sit amet consectetur. Pellentesque platea nunc
              nunc sed mattis. Ut faucibus fames ut viverra risus. Id nibh
              blandit mauris habitasse facilisis. Enim imperdiet feugiat massa
              aliquet nunc iaculis. Cursus neque sit interdum nam in libero.
              Amet neque ultricies aliquam ut commodo. Mauris adipiscing aenean
              erat rhoncus at. Turpis tortor at netus velit ut quisque.
              Hendrerit amet odio arcu placerat. Nunc neque vitae quam velit sed
              augue egestas eu. Aliquam eu.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="flex-1 border-4 border-[#005580] rounded-[16px] p-[8px] flex flex-col items-center relative
                    bg-[#B5B570]"
          >
            <div className="absolute top-[-60px] w-[120px] h-[120px] rounded-full border-4 border-white">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-[40px] text-center">
              Lorem ipsum dolor sit amet consectetur. Pellentesque platea nunc
              nunc sed mattis. Ut faucibus fames ut viverra risus. Id nibh
              blandit mauris habitasse facilisis. Enim imperdiet feugiat massa
              aliquet nunc iaculis. Cursus neque sit interdum nam in libero.
              Amet neque ultricies aliquam ut commodo. Mauris adipiscing aenean
              erat rhoncus at. Turpis tortor at netus velit ut quisque.
              Hendrerit amet odio arcu placerat. Nunc neque vitae quam velit sed
              augue egestas eu. Aliquam eu.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="flex-1 border-4 border-[#005580] rounded-[16px] p-[8px] flex flex-col items-center relative
                    bg-[#7070B5]"
          >
            <div className="absolute top-[-60px] w-[120px] h-[120px] rounded-full border-4 border-white">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-[40px] text-center">
              Lorem ipsum dolor sit amet consectetur. Pellentesque platea nunc
              nunc sed mattis. Ut faucibus fames ut viverra risus. Id nibh
              blandit mauris habitasse facilisis. Enim imperdiet feugiat massa
              aliquet nunc iaculis. Cursus neque sit interdum nam in libero.
              Amet neque ultricies aliquam ut commodo. Mauris adipiscing aenean
              erat rhoncus at. Turpis tortor at netus velit ut quisque.
              Hendrerit amet odio arcu placerat. Nunc neque vitae quam velit sed
              augue egestas eu. Aliquam eu.
            </p>
          </div>
        </div>
      </div>

      {/*Rewads & Gifts */}
      <div
        className="w-[1860px] max-w-[100%] h-[400px] flex items-center justify-between 
                bg-[#E5DAA1] px-[50px] mx-auto my-5 rounded-[16px]"
      >
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Refer and Earn Rewards
          </h2>
          <p className="text-lg text-gray-600">
            Invite and get <span className="font-semibold">₹100 cash back</span>{" "}
            on your purchase.
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

export default Home;
