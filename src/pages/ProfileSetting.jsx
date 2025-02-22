import { useState } from "react";
import img from "../assets/img.png";
import { NavLink } from "react-router-dom";

const ProfileSetting = () => {
  const [user, setUser] = useState({
    firstName: "Eleanor",
    lastName: "Pena",
    gender: "Female",
    email: "eleanorpena@abcd.com",
    mobile: "+919876543210",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="max-w-9xl mx-auto p-8 ml-18 mr ">
        <div className="flex items-center">
          <div className=" gap-4 w-100 p-2  border-gray-300 ">
            <div className="flex border border-gray-300 shadow">
              <img
                src={img}
                alt="Profile"
                className="rounded-full p-2 w-20 h-20 shadow"
              />
              <p className=" text-gray-600 p-2">Hello,</p>
              <h2 className="text-lg font-bold m-8 ">
                {/* {user.firstName} {user.lastName} */}Eleanor Pena
              </h2>
            </div>
            <div></div>
            <ul className="mt-4 space-y-2 border border-gray-300 shadow">
              <NavLink to={"/my-booking"}>
                <li className="p-2 border-b border-gray-300  items-center cursor-pointer  hover:bg-gray-100">
                  My Bookings
                </li>
              </NavLink>

              <NavLink to={"/my-amc-plain"}>
                <li className="p-2 border-b border-gray-300  cursor-pointer hover:bg-gray-100">
                  My AMC Plans
                </li>
              </NavLink>

              <NavLink to={"/manage-addresses"}>
                <li className="p-2 border-b border-gray-300  cursor-pointer hover:bg-gray-100">
                  Manage Address
                </li>
              </NavLink>
              <NavLink to={"/payment-method"}>
                <li className="p-2 border-b border-gray-300  cursor-pointer hover:bg-gray-100">
                  Manage Payment
                </li>
              </NavLink>

              <NavLink to={"/favourite-items"}>
                <li className="p-2 border-b border-gray-300  cursor-pointer hover:bg-gray-100">
                  Favorite Items
                </li>
              </NavLink>

              <NavLink to={"/refer"}>
                <li className="p-2 border-b border-gray-300  cursor-pointer hover:bg-gray-100">
                  Refer & Earn
                </li>
              </NavLink>

              <NavLink to={"/help-support"}>
                <li className="p-2 border-b border-gray-300  cursor-pointer hover:bg-gray-100">
                  Help & Support
                </li>
              </NavLink>
            </ul>
          </div>

          <div className="">
            <div className="flex justify-center items-center  ml-82">
              <div className="bg-white  rounded-lg    p-2 mr-22  ">
                <label className="font-bold block  ">
                  Your Name{" "}
                  <span className="text-green-500 text-sm cursor-pointer w-60 float-right">
                    Edit
                  </span>
                </label>
                <div className="flex ">
                  <input
                    type="text"
                    defaultValue="Eleanor"
                    className="w-full p-2 mt-1 border rounded-md border-gray-300 me-2"
                  />
                  <input
                    type="text"
                    defaultValue="Pena"
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  />
                </div>

                <label className="font-bold block mt-4 pt-3">Your Gender</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center  p-2 mt-1 border border-gray-300 rounded-md">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-2"
                    />{" "}
                    Male
                  </label>
                  <label className="flex items-center   p-2 mt-1 border border-gray-300 rounded-md">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked
                      className="mr-2"
                    />{" "}
                    Female
                  </label>
                </div>

                <label className="font-bold block mt-4 w-60 pt-3">
                  Email Address{" "}
                  <span className="text-green-500 text-sm cursor-pointer  float-right">
                    Edit
                  </span>
                </label>
                <input
                  type="email"
                  value="eleanorpena@abcd.com"
                  className="w-70 p-2 mt-1 border border-gray-300 rounded-md"
                />

                <label className="font-bold block mt-4 w-60 pt-3">
                  Mobile Number{" "}
                  <span className="text-green-500 text-sm cursor-pointer float-right">
                    Edit
                  </span>
                </label>
                <input
                  type="text"
                  value="+919876543210"
                  className="w-60 p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold gap-2">FAQs</h3>
          <div className="mt-2 text-gray-700">
            <p className="font-semibold ">
              What happens when I update my email address (or mobile number)?
            </p>
            <div className="gap-2">
              {" "}
              <p className="pt-2">
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account-related communication on your updated
                email address (or mobile number).
              </p>
            </div>
          </div>

          <div className="mt-4 text-gray-700">
            <p className="font-semibold">
              When will my Techno RO account be updated with the new email
              address (or mobile number)?
            </p>
            <p className="pt-2">
              It happens as soon as you confirm the verification code sent to
              your email (or mobile) and save the changes.
            </p>
          </div>

          <div className="mt-4 text-gray-700 pt-3">
            <p className="font-semibold">
              What happens to my existing Techno RO account when I update my
              email address (or mobile number)?
            </p>
            <p className="pt-2">
              Updating your email address (or mobile number) doesn't invalidate
              your account. Your account remains fully functional. You'll
              continue seeing your order history, saved information, and
              personal details.
            </p>
            <NavLink to={"/delete-account"}>
              <button className="mt-6 text-red-600 hover:underline">
                Delete Account
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
