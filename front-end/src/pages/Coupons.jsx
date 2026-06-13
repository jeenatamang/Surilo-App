import React from 'react';
import { Plus, Eye, Edit2 } from 'lucide-react';

const Coupons = () => {
  // Mock data matching the image provided
  const couponsData = [
    {
      id: 1,
      code: 'abc11',
      name: 'fff',
      assignedUser: 'demo',
      assignedEmail: 'demo1234@gmail.com',
      songs: '2 song(s)',
      access: '1 days',
      expires: 'Feb 24, 2026',
      status: 'Redeemed',
    },
    {
      id: 2,
      code: 'poojan1234',
      name: 'Poojan Rawal',
      assignedUser: 'test',
      assignedEmail: 'test66@test.com',
      songs: '2 song(s)',
      access: '5 days',
      expires: 'Feb 24, 2026',
      status: 'Redeemed',
    },
  ];

  return (
    <div className="text-white font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Coupons</h1>
          <p className="text-sm text-gray-400">Create and manage song access coupons</p>
        </div>
        <button className="flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
          <Plus size={18} />
          Create Coupon
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-[#2D163D] border border-[#3E1F54] rounded-lg p-4">
          <h3 className="text-xs text-gray-300 font-medium mb-2">Total Coupons</h3>
          <p className="text-3xl font-bold text-white">2</p>
        </div>
        <div className="bg-[#142E1B] border border-[#1C4026] rounded-lg p-4">
          <h3 className="text-xs text-gray-300 font-medium mb-2">Active</h3>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="bg-[#1C2341] border border-[#27325D] rounded-lg p-4">
          <h3 className="text-xs text-gray-300 font-medium mb-2">Redeemed</h3>
          <p className="text-3xl font-bold text-white">2</p>
        </div>
        <div className="bg-[#1C1C1F] border border-[#2A2A2E] rounded-lg p-4">
          <h3 className="text-xs text-gray-300 font-medium mb-2">Expired</h3>
          <p className="text-3xl font-bold text-white">2</p>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-[#151216] border border-[#262227] rounded-lg p-4 flex gap-4 items-center mb-6">
        <input 
          type="text" 
          placeholder="Search by code, name, or user..." 
          className="flex-1 bg-[#1E1B20] border border-[#332E36] rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-red-500"
        />
        <select className="bg-[#1E1B20] border border-[#332E36] rounded px-4 py-2 text-sm text-white focus:outline-none w-48">
          <option>All Status</option>
          <option>Active</option>
          <option>Redeemed</option>
          <option>Expired</option>
        </select>
        <button className="bg-[#dc2626] hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
          Filter
        </button>
        <button className="bg-[#333036] hover:bg-gray-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
          Clear
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-[#151216] border border-[#262227] rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1B181E] text-gray-400 border-b border-[#262227]">
            <tr>
              <th className="px-6 py-4 font-medium">Code / Name</th>
              <th className="px-6 py-4 font-medium">Assigned To</th>
              <th className="px-6 py-4 font-medium">Songs</th>
              <th className="px-6 py-4 font-medium">Access</th>
              <th className="px-6 py-4 font-medium">Expires</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#262227]">
            {couponsData.map((coupon) => (
              <tr key={coupon.id} className="hover:bg-[#1A171D] transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-white">{coupon.code}</div>
                  <div className="text-xs text-gray-400 mt-1">{coupon.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-white">{coupon.assignedUser}</div>
                  <div className="text-xs text-gray-400 mt-1">{coupon.assignedEmail}</div>
                </td>
                <td className="px-6 py-4 text-gray-300">{coupon.songs}</td>
                <td className="px-6 py-4 text-gray-300">{coupon.access}</td>
                <td className="px-6 py-4 text-red-500 text-xs">{coupon.expires}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#1C2C4E] text-[#4E88FF] border border-[#274073]">
                    {coupon.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="bg-[#1C549C] hover:bg-blue-600 p-1.5 rounded transition-colors" title="View">
                    <Eye size={16} className="text-white" />
                  </button>
                  <button className="bg-[#B48216] hover:bg-yellow-600 p-1.5 rounded transition-colors" title="Edit">
                    <Edit2 size={16} className="text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Coupons;