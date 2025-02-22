import React, { useState } from 'react';
import check from '../../assets/check.svg';
import close from "../../assets/close.svg";
import chat from "../../assets/chat.svg";
import star from "../../assets/Star.svg";
import file from "../../assets/file.svg";
import Mixer from "../../assets/mixer.webp";

const MyBooking = () => {
  const repeatCount = 5;
  const [toggleStar, setToggleStar] = useState(Array(repeatCount).fill(false));
  const [toggleWrite, settoggleWrite] = useState(false)
  const [thanks, setThanks] = useState(false)
  const [Change, setChange] = useState('')

  const Timeline = {
    service: { date: '28/12/2024', time: '06:30 PM', status: 'Service Registered', info: 'Issue: Beeping Sound' },
    Allocated: { date: '29/12/2024', time: '06:40 AM', status: 'Allocated', info: 'Manchester Branch' },
    Assigned: { date: '29/12/2024', time: '10:30 AM', status: 'Engineer Assigned', info: 'Jacob Jones' },
    Otp: { date: '29/12/2024', time: '12:15 PM', status: 'Service OTP Received', info: '8 6 9 7' },
    Summary: { date: '29/12/2024', time: '04:50 PM', status: 'Order Summary', info: '200002 - PQWN-RO - MEMBRANE 79', info2: '200002 - PQWN-RO - MEMBRANE 88' },
    Closed: { date: '30/12/2024', time: '06:30 PM', status: 'Case Closed' },
  };

  const toggleRate = (index) => {
    const updatedToggleStar = toggleStar.map((selected, i) => {
      if (i >= index + 1) {
        return selected;
      }
      return !toggleStar[index];
    });
    setToggleStar(updatedToggleStar);
  };

  const GiveThanks = () => {
    setThanks(true)
    settoggleWrite(false)
    setInterval(() => {
      setThanks(false)
    }, 400)
  }


  const handleChange = (e) => {
    setChange(e.target.value)
  }


  return (
    <>
      <div className="flex gap-10 relative">
        <div className="leftSide flex flex-col w-[55vw] min-h-[100vh] items-end">
          <div className="ProductDetail border-2 border-[#c7c7c5] w-[85%] h-[24vh] mt-8 mb-4 flex items-center justify-between px-4 shadow-inner shadow-slate-50">
            <div className="left flex flex-col gap-3">
              <h3 className="text-[#c7c7c5] text-md">Service Booking ID - ID32954621566</h3>
              <h1 className="text-lg font-[600] tracking-wide"> Water Purifier Regular Service</h1>
              <h2 className="text-md font-[400] tracking-wide"> Time: 1 Hour 30 Minutes</h2>
              <h1 className="text-lg font-[600] tracking-wide"> ₹1900</h1>
            </div>
            <div className="right border-2 border-[#c7c7c5] mx-4 px-2 py-1">
              <img src={Mixer} alt="Mixer" className="size-32" />
            </div>
          </div>
          <div className="CompletionTimeline border-2 border-[#c7c7c5] w-[85%] h-[85vh] flex flex-col gap-1 mb-4 px-6 py-6 shadow-inner shadow-slate-50">
            <div className="ServiceRegister flex items-center gap-8">
              <div className="dateTime flex flex-col gap-1 relative bottom-6">
                <span className="">{Timeline.service.date}</span>
                <span className="">{Timeline.service.time}</span>
              </div>
              <div className="Dot relative flex flex-col gap-[1px] items-center">
                <div className="p-[10px] rounded-full bg-red-600"></div>
                <div className="h-[11vh] w-[4px] bg-red-600"></div>
              </div>
              <div className="dateTime flex flex-col gap-1 relative bottom-6">
                <span className="text-lg font-[600]">{Timeline.service.status}</span>
                <span className="text-md font-[400]">{Timeline.service.info}</span>
              </div>
            </div>
            <div className="Allocation flex items-center gap-8">
              <div className="dateTime flex flex-col gap-1 relative bottom-6">
                <span className="">{Timeline.Allocated.date}</span>
                <span className="">{Timeline.Allocated.time}</span>
              </div>
              <div className="Dot relative flex flex-col gap-[1px] items-center">
                <div className="p-[10px] rounded-full bg-red-600"></div>
                <div className="h-[11vh] w-[4px] bg-red-600"></div>
              </div>
              <div className="info flex flex-col gap-1 relative bottom-1">
                <span className="text-lg font-[600]">{Timeline.Allocated.status}</span>
                <span className="text-md font-[400]">{Timeline.Allocated.info}</span>
                <button className="bg-[#c7c7c6] text-white rounded-md w-fit py-1 mt-2 px-4 font-semibold">Call Now</button>
              </div>
            </div>
            <div className="Assigned flex items-center gap-8">
              <div className="dateTime flex flex-col gap-1 relative bottom-6">
                <span className="">{Timeline.Assigned.date}</span>
                <span className="">{Timeline.Assigned.time}</span>
              </div>
              <div className="Dot relative flex flex-col gap-[1px] items-center">
                <div className="p-[10px] rounded-full bg-red-600"></div>
                <div className="h-[11vh] w-[4px] bg-red-600"></div>
              </div>
              <div className="info flex flex-col gap-1 relative bottom-1">
                <span className="text-lg font-[600]">{Timeline.Assigned.status}</span>
                <span className="text-md font-[400]">{Timeline.Assigned.info}</span>
                <button className="bg-[#c7c7c6] text-white rounded-md w-fit py-1 mt-2 px-4 font-semibold">Call Now</button>
              </div>
            </div>
            <div className="Otp flex items-center gap-8">
              <div className="dateTime flex flex-col gap-1 relative bottom-6">
                <span className="">{Timeline.Otp.date}</span>
                <span className="">{Timeline.Otp.time}</span>
              </div>
              <div className="Dot relative flex flex-col gap-[1px] items-center">
                <div className="p-[10px] rounded-full bg-red-600"></div>
                <div className="h-[11vh] w-[4px] bg-red-600"></div>
              </div>
              <div className="info flex flex-col gap-1 relative bottom-6">
                <span className="text-lg font-[600]">{Timeline.Otp.status}</span>
                <span className="text-md font-[400]">{Timeline.Otp.info}</span>
              </div>
            </div>
            <div className="Summary flex items-center gap-8">
              <div className="dateTime flex flex-col gap-1 relative bottom-6">
                <span className="">{Timeline.Summary.date}</span>
                <span className="">{Timeline.Summary.time}</span>
              </div>
              <div className="Dot relative flex flex-col gap-[1px] items-center">
                <div className="p-[10px] rounded-full bg-red-600"></div>
                <div className="h-[11vh] w-[4px] bg-red-600"></div>
              </div>
              <div className="info flex flex-col gap-1 relative bottom-3">
                <span className="text-lg font-[600]">{Timeline.Summary.status}</span>
                <span className="text-md font-[400]">{Timeline.Summary.info}</span>
                <span className="text-md font-[400]">{Timeline.Summary.info2}</span>
              </div>
            </div>
            <div className="Closed flex items-center gap-8">
              <div className="dateTime flex flex-col gap-1 relative bottom-2">
                <span className="">{Timeline.Closed.date}</span>
                <span className="">{Timeline.Closed.time}</span>
              </div>
              <div className="rounded-full relative bottom-4 bg-red-600">
                <img src={check} alt="" className="size-5 invert" />
              </div>
              <div className="info flex flex-col gap-1 relative bottom-4">
                <span className="text-lg font-[600]">{Timeline.Closed.status}</span>
              </div>
            </div>
          </div>
          <div className="Rating border-2 border-[#c7c7c5] w-[85%] h-[8vh] mb-4 px-4 flex items-center justify-between shadow-inner shadow-slate-50">
            <div className="stars flex items-center justify-center gap-1">
              {Array.from({ length: repeatCount }).map((_, index) => (
                <img
                  onClick={() => toggleRate(index)}
                  key={index}
                  src={star}
                  alt={`check-${index}`}
                  className={`${toggleStar[index] ? '' : 'opacity-[0.3]'} w-7 h-7 cursor-pointer`}
                />
              ))}
            </div>
            <h1 onClick={() => settoggleWrite(true)} className="text-[#c7c7c5] text-xl font-semibold cursor-pointer">Write a Review</h1>
          </div>
          <div className="Chat border-2 border-[#c7c7c5] w-[85%] h-[8vh] mb-4 flex gap-2 items-center px-4 shadow-inner shadow-slate-50">
            <img src={chat} alt="" className="size-5 cursor-pointer" />
            <span className="text-lg tracking-wide font-[500] cursor-pointer">Chat with us</span>
          </div>
        </div>
        <div className="rightSide flex flex-col w-[40vw] min-h-[100vh] items-center">
          <div className="download border-2 border-[#c7c7c5] w-[65%] h-[8vh] mb-4 mt-8 flex gap-2 items-center px-4 shadow-inner shadow-slate-50">
            <img src={file} alt="" className="opacity-[0.6] cursor-pointer" />
            <span className="text-lg text-[#8d8d8c] font-[500] cursor-pointer">Download Invoice</span>
          </div>
          <div className="ServiceAddress border-2 border-[#c7c7c5] w-[65%] h-[30vh] mb-4 shadow-inner shadow-slate-50 flex px-4 py-4 flex-col gap-3">
            <span className="text-[1.4rem] font-[600]">Service Address Details</span>
            <hr className="bg-[#a5a3a3] h-[2px] my-2" />
            <div className="address flex flex-col">
              <span className="text-[1.4rem] font-[600]">Eleanor Pena</span>
              <span className="text-[1.1rem] font-[600]">4517 Washington Ave. Manchester, </span>
              <span className="text-[1.1rem] font-[600]">Kentucky 39495</span>
              <span className="text-[1.1rem] font-[600]">Phone Number: +919876543210</span>
            </div>
          </div>
          <div className="PriceDetail border-2 border-[#c7c7c5] w-[65%] h-[62vh] mb-4 shadow-inner shadow-slate-50 flex px-4 py-6 flex-col gap-2">
            <span className="text-[1.4rem] font-[600]">Price Details</span>
            <hr className="bg-[#a5a3a3] h-[2px] my-2" />
            <div className="price flex items-center justify-between">
              <span className="text-[1.2rem] text-[#8d8d8c] font-[600]">Price (1 Items)</span>
              <span className="text-[1.2rem] text-[#8d8d8c]  font-[600]">₹2499</span>
            </div>
            <div className="discount flex items-center justify-between">
              <span className="text-[1.2rem] text-[#8d8d8c] font-[600]">Discount</span>
              <span className="text-[1.2rem] text-[#bcbc86]  font-[600]">-₹500</span>
            </div>
            <div className=" PlatformFee flex items-center justify-between">
              <span className="text-[1.2rem] text-[#8d8d8c] font-[600]">Platform Fee</span>
              <span className="text-[1.2rem] text-[#8d8d8c]  font-[600]">₹1</span>
            </div>
            <div className="debitCard flex items-center justify-between">
              <span className="text-[1.2rem] text-[#8d8d8c] font-[600]">Debit Card Off</span>
              <span className="text-[1.2rem] text-[#bcbc86]  font-[600]">-₹100</span>
            </div>
            <div className="debitCard flex items-center justify-between">
              <span className="text-[1.2rem] text-[#8d8d8c] font-[600]">Delivery Charges</span>
              <div className="deliveryCharge flex items-center justify-center gap-2">
                <div className="relative text-[1.2rem] text-[#8d8d8c] font-[600]">
                  ₹100
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-[#8d8d8c]"></div>
                </div>
                <span className="text-[1.2rem] text-[#8d8d8c] font-[600]">Free</span>
              </div>
            </div>
            <hr className="h-[2px] my-1 custom-dotted2" />
            <div className=" PlatformFee flex items-center justify-between">
              <span className="text-[1.2rem] text-[#242423] font-[600]">Total Amount</span>
              <span className="text-[1.2rem] text-[#1d1d1c]  font-[600]">₹1900</span>
            </div>
            <hr className="h-[2px] my-1 custom-dotted2" />
            <span className="text-[1rem] text-[#b5b4b4] font-[600]">You total saved on this order ₹700</span>
            <hr className="h-[2px] my-1 custom-dotted2" />
            <div className="offer flex gap-2 items-center">
              <span className="w-10 h-10 bg-black opacity-[0.3] text-lg text-white wrounded-full flex justify-center items-center rounded-full">%</span>
              <div className=" PlatformFee flex flex-col justify-center">
                <span className="text-[1rem] text-[#242423] font-[600]">1 Offer Applied On This Order</span>
                <span className="text-[0.85rem] text-[#1d1d1c] font-[600]">Debit Card Off ₹100</span>
              </div>
            </div>
          </div>
          <div className="PriceDetail border-2 border-[#c7c7c5] w-[65%] h-[8vh] mb-4 shadow-inner shadow-slate-50 cursor-pointer flex items-center px-4">
            <span className="text-lg text-[#8d8d8c] font-[500] ">Payment Mode : Debit Card</span>
          </div>
        </div>

        {/* Write a review section */}
        {toggleWrite ? (
          <div className="absolute h-screen w-screen flex z-40 items-start justify-center">
            <div className="flex flex-col w-[25vw] h-[40vh] z-40 px-4 py-4 bg-[#ffffff] fixed shadow-md border-[1px] rounded-lg">
              <div onClick={() => settoggleWrite(false)} className="closebtn absolute cursor-pointer w-10 h-10 bg-white flex justify-center items-center rounded-full -right-0 -top-12 shadow-md border-[1px]">
                <img src={close} alt="" className="size-8" />
              </div>
              <div className="writeHere flex flex-col gap-6">
                <span className="text-md">
                  Write a Review
                </span>
                <textarea onChange={handleChange} value={Change} name="review" id="review" className='h-[20vh] px-4 py-2 placeholder:text-[#c7c7c5] border-[1px]' placeholder='Write a Review' />
                <button onClick={GiveThanks} className="bg-[#7EC1B1] text-white tracking-wide rounded-md py-2">Submit</button>
              </div>
            </div>
          </div>
        ) : null}
        {thanks ? (
          <div className="absolute h-screen w-screen flex z-40 items-center justify-center">
            <button onClick={GiveThanks} className="z-40 px-6 py-4 fixed shadow-md text-lg border-[1px] bg-[#3A953A] text-white tracking-wide rounded-md ">Thank You</button>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default MyBooking;

