import Repair from "../../assets/Repair.png";
import Maintenance from "../../assets/Maintenance.png";
import Servicing from "../../assets/Servicing.png";
import Uninstallation from "../../assets/Uninstallation.png";
import WaterQuality from "../../assets/WaterQualityTesting.png";
import SystemCheckup from "../../assets/SystemCheckup.png";
import Video from "../../assets/Video.png";
import Video1 from "../../assets/Video1.png";
import Video2 from "../../assets/Video2.png";
import Video3 from "../../assets/Video3.png";
import Video4 from "../../assets/Video4.png";
import Profile from "../../assets/Profile.png";
import Gift from "../../assets/GiftBox.png";
import GoRightButton from "../ui/GoRightButton.jsx";
import GoLeft from "../ui/GoLeft";
import Banner from "../home/Banner";
import ProductCard from "../home/ProductCard";
import ServiceCard from "./ServiceCard.jsx";
import CategoryCard from "./CategoryCard.jsx";
import QuickLinkCard from "./QuickLinkCard.jsx";
import CustomerReviewCard from "./CustomerReviewCard.jsx";
import BrandCarousel from "./BrandCorousel.jsx";
import EngineerCard from "./EngineerCard.jsx";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center ">
   
      <Banner />
      <div className="relative w-full max-w-[1440px] flex justify-between items-center ">
        <ProductCard />
      </div>

      <div className="w-full max-w-[1420px] h-auto px-4">
        <h2 className="text-3xl font-semibold text-left p-5 text-blue-900">
          What are you looking for?
        </h2>

        <div className="grid grid-cols-6 gap-4 mb-10 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 h-auto px-[40px] py-[20px] rounded-lg shadow-md">
  {/* Card 1 */}
  <div className="flex flex-col items-center justify-between  p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28 flex items-center justify-center mb-2  rounded-full bg-gradient-to-r from-green-200 to-emerald-300">
      <img
        src={Repair}
        alt="Repair"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-green-900 text-center">
      Repair
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center justify-between p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2  rounded-full bg-gradient-to-r from-amber-200 to-orange-300 ">
      <img
        src={Servicing}
        alt="Servicing"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-amber-900 text-center">
      Servicing
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center justify-between p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2  rounded-full  bg-gradient-to-r from-red-200 to-pink-300">
      <img
        src={Uninstallation}
        alt="Installation/Uninstallation"
        className="h-12  object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-red-900 text-center">
      Installation / <br /> Uninstallation
    </p>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col items-center justify-betweenrounded-[20px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2  bg-gradient-to-r from-purple-200 to-indigo-300  rounded-full">
      <img
        src={Maintenance}
        alt="Maintenance"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-purple-900 text-center">
      Maintenance
    </p>
  </div>

  {/* Card 5 */}
  <div className="flex flex-col items-center justify-betweenp-6 p-6  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2 bg-gradient-to-r from-blue-200 to-cyan-300 rounded-full">
      <img
        src={WaterQuality}
        alt="Water Quality Testing"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-blue-900 text-center">
      Water Quality Testing
    </p>
  </div>

  {/* Card 6 */}
  <div className="flex flex-col items-center justify-betweenrounded-[40px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28 flex items-center justify-center mb-4  bg-gradient-to-r from-pink-200 to-rose-300 rounded-full ">
      <img
        src={SystemCheckup}
        alt="System Checkup"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-pink-900 text-center">
      System Checkup
    </p>
  </div>
</div>

      </div>


      {/*   Services by product category */}
      <div className="relative w-full max-w-[1420px] ">
        {/* Left Arrow Button */}
       
        <h2 className="text-3xl font-semibold text-left p-5 text-blue-900">
          Services by product category
        </h2>
       <div className=" w-full max-w-[1440px] ">
        <CategoryCard />
       </div>
      </div>

      <div>
        <EngineerCard />
      </div>
      <div className="w-full max-w-[1440px] ">
      <BrandCarousel />
      <CustomerReviewCard />

      </div>
      <QuickLinkCard />
      
      <div className="relative w-full max-w-[1420px] justify-between items-center ">
    
        <h2 className="text-3xl font-semibold text-left p-5 text-blue-900">
          Our Most Booked Services
        </h2>

        {/* Container for Cards */}
       <ServiceCard />
      </div>


      {/*Rewards & Gifts */}
      <div
        className="w-full max-w-[1420px] h-[400px] flex items-center justify-between 
                bg-gradient-to-r from-amber-200 to-yellow-300 px-[50px] mx-auto my-5 rounded-[16px] shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-amber-900">
            Refer and Earn Rewards
          </h2>
          <p className="text-lg text-amber-800">
            Invite and get <span className="font-semibold">₹100 cash back</span>{" "}
            on your purchase.
          </p>
          <button className="w-[160px] h-[48px] bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-md hover:scale-105">
            Learn More
          </button>
        </div>

        <div className="transition-transform duration-300 hover:scale-110">
          <img
            src={Gift}
            alt="Gift Box"
            className="w-[200px] h-auto object-cover drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
