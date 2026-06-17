import React, { useState } from "react";
import { Plus, Music } from "lucide-react";

const mockAlbums = [
  {
    id: 1,
    title: "Suddhikarana - Continuous Stream - F-432Hz",
    description: "F-432Hz uninterrupted continuous streaming. Ideal for sound meditation and prakriyā.",
    tracks: 1,
    status: "Active",
  },
  {
    id: 2,
    title: "Suddhikarana - Continuous Stream - A#-432Hz",
    description: "A#-432Hz uninterrupted continuous streaming. Ideal for sound meditation and prakriyā.",
    tracks: 1,
    status: "Active",
  },
  {
    id: 3,
    title: "Music Clip",
    description: "No description available",
    tracks: 0,
    status: "Active",
  },
  {
    id: 4,
    title: "Suddhikarana F-432Hz",
    description: "Music for emotional catharsis",
    tracks: 3,
    status: "Active",
  },
  {
    id: 5,
    title: "Suddhikarana",
    description: "No description available",
    tracks: 0,
    status: "Active",
  },
];

const Albums = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const filtered = mockAlbums.filter((a) => {
    const matchSearch =
      search === "" || a.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All Status" || a.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="text-white">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Albums</h1>
          <p className="text-sm text-[#8a8a93] mt-1">Manage music albums</p>
        </div>
        <button className="flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Add New Album
        </button>
      </div>

      <div className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl p-4 mb-6">
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Search albums..."
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
            <option>Active</option>
            <option>Inactive</option>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((album) => (
          <div key={album.id} className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl overflow-hidden">
            <div className="relative h-48 bg-[#161620] flex items-center justify-center">
              <span className="absolute top-3 right-3 bg-[#166534] text-[#4ade80] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                {album.status}
              </span>
              <p className="text-center text-sm font-semibold px-4 leading-relaxed text-[#c0c0cc]">
                {album.title}
              </p>
            </div>

            <div className="p-4">
              <p className="text-sm font-bold leading-snug mb-1 line-clamp-1">{album.title}</p>
              <p className="text-xs text-[#8a8a93] leading-relaxed line-clamp-2 mb-3">{album.description}</p>
              <p className="text-xs text-[#8a8a93] flex items-center gap-1.5 mb-4">
                <Music className="w-3.5 h-3.5" />
                {album.tracks} tracks
              </p>
              <button className="w-full bg-[#1c1c24] hover:bg-[#26262f] text-[#8a8a93] hover:text-white text-xs font-medium py-2 rounded-lg transition-colors">
                Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-[#8a8a93]">
          <Music className="w-10 h-10 mb-3 opacity-40" />
          <p className="text-sm">No albums found</p>
        </div>
      )}
    </div>
  );
};

export default Albums;
