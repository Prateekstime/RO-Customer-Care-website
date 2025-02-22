

const AddressCard = ({ type, name, phone, address }) => {
  return (
    <div className="border border-gray-500 p-5 rounded-md mb-4">
      <div className="flex justify-between items-start">
        <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-md">
          {type}
        </span>
        <div className="space-x-2">
          <button className="bg-green-400 text-white px-3 py-1 rounded-md">
            Edit
          </button>
          <button className="bg-green-400 text-white px-3 py-1 rounded-md">
            Delete
          </button>
        </div>
      </div>
      <p className="text-grey-400  mt-2 font-semibold">
        {name} <span className="ml-2">{phone}</span>
      </p>
      <p className="text-grey-600 text-sm mt-1">{address}</p>
    </div>
  );
};

const ManageAddresses = () => {
  return (
    <div className="max-w-[90%] mx-auto p-5 text-bold">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>

      <button className="w-full border border-gray-500 p-3 text-left rounded-md flex items-center text-green-400 font-semibold">
        <span className="mr-2 text-xl">+</span> Add a New Address
      </button>

      <div className="mt-4">
        <AddressCard
          type="Home"
          name="Eleanor Pena"
          phone="+919876543210"
          address="4517 Washington Ave. Manchester, Kentucky 39485"
        />
        <AddressCard
          type="Office"
          name="Eleanor Pena"
          phone="+919876543210"
          address="3891 Ranchview Dr. Richardson, California 62639"
        />
      </div>
    </div>
  );
};

export default ManageAddresses;
