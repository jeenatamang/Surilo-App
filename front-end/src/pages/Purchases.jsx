import React, { useState } from "react";
import { Eye } from "lucide-react";

const mockPurchases = [
  { id: "TXN-CP6DSMAL56AN", user: "vdvdvd", email: "ggg@gmail.com", music: "供養 Kuyo Suizen", artist: "Dario Calvaruso & Andrea Fernandez", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:54 AM" },
  { id: "TXN-ARAN2DHLS2BT", user: "vdvdvd", email: "ggg@gmail.com", music: "手向 Tamuke", artist: "Dario Calvaruso", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:50 AM" },
  { id: "TXN-LQEPNLCTEDNNT", user: "vdvdvd", email: "ggg@gmail.com", music: "天国への階段 Tengokuhenokaidan", artist: "Dario Calvaruso", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:48 AM" },
  { id: "TXN-QKS4B03R3KE6", user: "vdvdvd", email: "ggg@gmail.com", music: "Suddhikarana — Continuous Stream — F-432Hz", artist: "Dario Calvaruso & Andrea Fernandez", amount: "$13.50", status: "Completed", date: "Mar 30, 2026", time: "07:44 AM" },
  { id: "TXN-CDS20811U00H", user: "hey", email: "hey@gmail.com", music: "供養 Kuyo Prakriyā", artist: "Dario Calvaruso", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:41 AM" },
  { id: "TXN-27G3S13NMIEX", user: "hey", email: "hey@gmail.com", music: "Hifumi", artist: "Dario Calvaruso", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:33 AM" },
  { id: "TXN-1XCAQM6YP34D", user: "hey", email: "hey@gmail.com", music: "虚鈴 Kyorei", artist: "Dario Calvaruso & Andrea Fernandez", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:28 AM" },
  { id: "TXN-XH0YCU84NWZ4", user: "hey", email: "hey@gmail.com", music: "供養 Kuyo Suizen", artist: "Dario Calvaruso & Andrea Fernandez", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:22 AM" },
  { id: "TXN-PM68N2ZCC3B1", user: "hey", email: "hey@gmail.com", music: "A#-432Hz Suddhikarana Continuous Streaming", artist: "Dario Calvaruso & Andrea Fernandez", amount: "$13.50", status: "Completed", date: "Mar 30, 2026", time: "07:13 AM" },
  { id: "TXN-YH8KL93ZXA01", user: "hey", email: "hey@gmail.com", music: "手向 Tamuke", artist: "Dario Calvaruso", amount: "$4.50", status: "Completed", date: "Mar 30, 2026", time: "07:09 AM" },
];

const Purchases = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const filtered = mockPurchases.filter((p) => {
    const matchSearch =
      search === "" ||
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.user.toLowerCase().includes(search.toLowerCase()) ||
      p.music.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All Status" || p.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="text-white">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Purchases</h1>
        <p className="text-sm text-[#8a8a93] mt-1">View all music purchases and transactions</p>
      </div>

      <div className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl p-4 mb-6">
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Search by transaction ID, user, or music title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-[#13131a] border border-[#1c1c24] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#8a8a93] focus:outline-none focus:border-[#411217]"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-[#13131a] border border-[#1c1c24] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#411217] w-44"
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Refunded</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
            Apply Filters
          </button>
          <button
            onClick={() => { setSearch(""); setStatus("All Status"); }}
            className="bg-[#1c1c24] hover:bg-[#26262f] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1c1c24] text-[#8a8a93] text-xs">
              <th className="text-left px-5 py-3.5 font-medium">Transaction ID</th>
              <th className="text-left px-5 py-3.5 font-medium">User</th>
              <th className="text-left px-5 py-3.5 font-medium">Music</th>
              <th className="text-left px-5 py-3.5 font-medium">Amount</th>
              <th className="text-left px-5 py-3.5 font-medium">Status</th>
              <th className="text-left px-5 py-3.5 font-medium">Date</th>
              <th className="text-left px-5 py-3.5 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={p.id} className={`border-b border-[#1c1c24] last:border-0 hover:bg-[#13131a] transition-colors ${i % 2 === 0 ? "" : ""}`}>
                <td className="px-5 py-3.5">
                  <span className="text-[11px] font-mono bg-[#1c1c24] text-[#8a8a93] px-2 py-1 rounded">
                    {p.id}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <p className="font-medium text-white text-xs">{p.user}</p>
                  <p className="text-[11px] text-[#8a8a93]">{p.email}</p>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-[#1c1c24] shrink-0 flex items-center justify-center text-[10px] text-[#8a8a93]">
                      ♪
                    </div>
                    <div>
                      <p className="font-medium text-white text-xs leading-snug">{p.music}</p>
                      <p className="text-[11px] text-[#8a8a93]">{p.artist}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[#4ade80] font-semibold text-xs">{p.amount}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="bg-[#166534] text-[#4ade80] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <p className="text-xs text-white">{p.date}</p>
                  <p className="text-[11px] text-[#8a8a93]">{p.time}</p>
                </td>
                <td className="px-5 py-3.5">
                  <button className="flex items-center gap-1.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-[#8a8a93] text-sm">
            No purchases found
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchases;
