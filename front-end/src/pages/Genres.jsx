import React, { useState } from "react";
import { Plus, Music } from "lucide-react";
import fukeImg from "../assets/image2.jpg";
import freqImg from "../assets/image3.jpg";
import songImg from "../assets/image4.jpg";

const mockGenres = [
  {
    id: 1,
    name: "Fuke-suizen",
    description: "Zen Koten Kyoku - ancient musical piece for Zen practices",
    tracks: 8,
    color: "#96191a",
    status: "Active",
    image: fukeImg,
  },
  {
    id: 2,
    name: "Frequency",
    description: "Dario Calvaruso's selected binaural-frequencies for Navakarana Prakriya-s, practice and teaching tools.",
    tracks: 0,
    color: "#96191a",
    status: "Active",
    image: freqImg,
  },
  {
    id: 3,
    name: "Song",
    description: "No description available",
    tracks: 0,
    color: "#dc2626",
    status: "Active",
    image: songImg,
  },
];

const Genres = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const filtered = mockGenres.filter((g) => {
    const matchSearch =
      search === "" || g.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All Status" || g.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="text-white">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Genres</h1>
          <p className="text-sm text-[#8a8a93] mt-1">Manage music genres</p>
        </div>
        <button className="flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Add New Genre
        </button>
      </div>

      <div className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl p-4 mb-6">
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Search genres..."
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((genre) => (
          <div key={genre.id} className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl overflow-hidden">
            <div className="relative h-52">
              <img src={genre.image} alt={genre.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute top-3 right-3 bg-[#166534] text-[#4ade80] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                {genre.status}
              </span>
            </div>

            <div className="p-4">
              <p className="text-sm font-bold mb-1">{genre.name}</p>
              <p className="text-xs text-[#8a8a93] leading-relaxed line-clamp-2 mb-3">{genre.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#8a8a93] flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5" />
                  {genre.tracks} tracks
                </span>
                <span className="text-xs font-mono" style={{ color: genre.color }}>
                  {genre.color}
                </span>
              </div>
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
          <p className="text-sm">No genres found</p>
        </div>
      )}
    </div>
  );
};

export default Genres;
