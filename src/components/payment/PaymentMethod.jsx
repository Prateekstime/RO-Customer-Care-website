

const PaymentMethods = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h2 className="text-lg font-semibold mb-4">Manage Payment Methods</h2>

      {/* UPI Section */}
      <div className="border border-gray-500 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">UPI</h3>
          <button className="bg-teal-400 text-black px-3 py-1 rounded-md text-sm">
            Add New UPI
          </button>
        </div>
        <div className="mt-3 flex justify-between items-center border border-gray-500 p-3 rounded-lg">
          <div className="flex items-center">
            <span className="text-3xl mr-3">📱</span>
            <span>PhonePe UPI</span>
          </div>
          <button className="text-teal-300">Remove</button>
        </div>
      </div>

      {/* Net Banking Section */}
      <div className="border border-gray-500 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">Net Banking</h3>
          <button className="bg-teal-400 text-black px-3 py-1 rounded-md text-sm">
            Add New Bank
          </button>
        </div>
        <div className="mt-3 flex justify-between items-center border border-gray-500 p-3 rounded-lg">
          <div className="flex items-center">
            <span className="text-3xl mr-3">🏦</span>
            <span>SBI Net Banking</span>
          </div>
          <button className="text-teal-300">Remove</button>
        </div>
      </div>

      {/* Credit/Debit Cards Section */}
      <div className="border border-gray-500 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">Credit/ Debit/ ATM Card</h3>
          <button className="bg-teal-400 text-black px-3 py-1 rounded-md text-sm">
            Add New Card
          </button>
        </div>

        {/* Card 1 */}
        <div className="mt-3 flex justify-between items-center border border-gray-500 p-3 rounded-lg">
          <div className="flex items-center">
            <span className="text-3xl mr-3">💳</span>
            <span>**** **** **** 3456</span>
          </div>
          <button className="text-teal-300">Remove</button>
        </div>

        {/* Card 2 */}
        <div className="mt-3 flex justify-between items-center border border-gray-500 p-3 rounded-lg">
          <div className="flex items-center">
            <span className="text-3xl mr-3">💳</span>
            <span>**** **** **** 7890</span>
          </div>
          <button className="text-teal-300">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
