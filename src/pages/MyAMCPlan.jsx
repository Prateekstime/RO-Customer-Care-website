
import image_icon from "../assets/AMC.png";

const MyAMCPlan = () => {
  return (
    <div>
      <div className=" mt-[10px] left-0 w-full flex items-center justify-center ">
        <div className="flex-1 border-t border-gray-400"></div>
        <h2 className="mx-4 text-xl font-bold text-gray-800">My AMC PLAN</h2>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>
      <div className="ml-[60px] mt-[30px] flex space-x-4">
        <div className=" max-w-sm mt-[5px] text-black bg-white rounded-xl shadow-lg p-5 border border-gray-700">
          <div className="relative">
            <img src={image_icon} alt="Image Icon" />
          </div>

          {/* Plan Details */}
          <div className="flex space-x-4 mt-4 justify-between items-center">
            <h2 className="text-xl font-semibold">Gold AMC Plan</h2>
            <span className="text-green-400 font-bold text-sm">Valid</span>
          </div>
          <div className=" flex space-x-4 mt-4  items-center">
            <span className=" text-gray-800">Plan ID:</span>{" "}
            <span className="text-gray-400 text-sm">AMCGOLD23812422</span>
          </div>
          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">&#8377;1999.00</p>
            <p className="text-gray-400 text-sm">Validity: 1 Year</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Purchased Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2024</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Expire Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2025</p>
          </div>

          <div className="mt-4 text-sm">
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service One{" "}
              <span className="text-green-400 font-semibold">Done</span>
            </p>
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service Two{" "}
              <span className="text-yellow-400 font-semibold">On Going</span>
            </p>
          </div>

          {/* Services & Products */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">
              Services and Products Include
            </h3>
            <ul className="text-sm mt-2 space-y-1">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Service
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Filter
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Membrane
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Electric Parts
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Faulty Parts
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-sm mt-[5px] text-black bg-white rounded-xl shadow-lg p-5 border border-gray-700">
          <div className="relative">
            <img src={image_icon} alt="Image Icon" />
          </div>

          {/* Plan Details */}
          <div className="flex space-x-4 mt-4 justify-between items-center">
            <h2 className="text-xl font-semibold">Gold AMC Plan</h2>
            <span className="text-red-400 font-bold text-sm">Expired</span>
          </div>
          <div className=" flex space-x-4 mt-4 items-center">
            <span className=" text-gray-800">Plan ID:</span>{" "}
            <span className="text-gray-400 text-sm">AMCGOLD23812422</span>
          </div>
          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">&#8377;1999.00</p>
            <p className="text-gray-400 text-sm">Validity: 1 Year</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Purchased Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2023</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Expire Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2024</p>
          </div>

          <div className="mt-4 text-sm">
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service One{" "}
              <span className="text-green-400 font-semibold">Done</span>
            </p>
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service Two{" "}
              <span className="text-green-400 font-semibold">Done</span>
            </p>
          </div>

          {/* Services & Products */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">
              Services and Products Include
            </h3>
            <ul className="text-sm mt-2 space-y-1">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Service
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Filter
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Membrane
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Electric Parts
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Faulty Parts
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-sm mt-[5px] text-black bg-white rounded-xl shadow-lg p-5 border border-gray-700">
          <div className="relative">
            <img src={image_icon} alt="Image Icon" />
          </div>

          {/* Plan Details */}
          <div className="flex space-x-4 mt-4 justify-between items-center">
            <h2 className="text-xl font-semibold">Gold AMC Plan</h2>
            <span className="text-red-400 font-bold text-sm">Expired</span>
          </div>
          <div className=" flex space-x-4 mt-4 items-center">
            <span className=" text-gray-800">Plan ID:</span>{" "}
            <span className="text-gray-400 text-sm">AMCGOLD23812422</span>
          </div>
          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">&#8377;1999.00</p>
            <p className="text-gray-400 text-sm">Validity: 1 Year</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Purchased Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2022</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Expire Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2023</p>
          </div>

          <div className="mt-4 text-sm">
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service One{" "}
              <span className="text-green-400 font-semibold">Done</span>
            </p>
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service Two{" "}
              <span className="text-green-400 font-semibold">Done</span>
            </p>
          </div>

          {/* Services & Products */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">
              Services and Products Include
            </h3>
            <ul className="text-sm mt-2 space-y-1">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Service
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Filter
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Membrane
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Electric Parts
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Faulty Parts
              </li>
            </ul>
          </div>
        </div>
        <div className=" max-w-sm mt-[5px] text-black bg-white rounded-xl shadow-lg p-5 border border-gray-700">
          <div className="relative">
            <img src={image_icon} alt="Image Icon" />
          </div>

          {/* Plan Details */}
          <div className="flex space-x-4 mt-4 justify-between items-center">
            <h2 className="text-xl font-semibold">Gold AMC Plan</h2>
            <span className="text-red-400 font-bold text-sm">Expired</span>
          </div>
          <div className=" flex space-x-4 mt-4  items-center">
            <span className=" text-gray-800">Plan ID:</span>{" "}
            <span className="text-gray-400 text-sm">AMCGOLD23812422</span>
          </div>
          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">&#8377;1999.00</p>
            <p className="text-gray-400 text-sm">Validity: 1 Year</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Purchased Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2021</p>
          </div>

          <div className=" flex space-x-4 mt-4 justify-between items-center">
            <p className="text-lg text-gray-800  mt-2">Expire Date:</p>
            <p className="text-gray-400 text-sm">10 March, 2022</p>
          </div>

          <div className="mt-4 text-sm">
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service One{" "}
              <span className="text-green-400 font-semibold">Done</span>
            </p>
            <p className="flex space-x-4 mt-4 justify-between items-center">
              Plan Service Two{" "}
              <span className="text-green-400 font-semibold">Done</span>
            </p>
          </div>

          {/* Services & Products */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">
              Services and Products Include
            </h3>
            <ul className="text-sm mt-2 space-y-1">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Service
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✔</span> Filter
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Membrane
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Electric Parts
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Faulty Parts
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[20px] flex items-center justify-center ">
        <div className="bg-blue-400 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition">
          Load More
        </div>
      </div>
    </div>
  );
};

export default MyAMCPlan;
