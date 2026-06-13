import React, { useState } from "react";
import { Plus, Eye, MonitorOff } from "lucide-react";
import tengokuImg from "../assets/images1.jpg";

const mockVideos = [
  {
    id: 1,
    title: "天国への階段 Tengokuhe no kaidan",
    artist: "Dario Calvaruso",
    views: 3,
    price: "$0.00",
    quality: "1080p",
    status: "Active",
    thumbnail: tengokuImg,
  },
];


const VideoLibrary = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [status, setStatus] = useState("All Status");
  const [videos, setVideos] = useState(mockVideos);

  const filtered = videos.filter((v) => {
    const matchSearch =
      search === "" ||
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.artist.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All Status" || v.status === status;
    return matchSearch && matchStatus;
  });

  return (
    <div className="text-white">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Video Library</h1>
          <p className="text-sm text-[#8a8a93] mt-1">Manage your video content</p>
        </div>
        <button className="flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Upload New Video
        </button>
      </div>

      <div className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl p-4 mb-6">
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Search by title, artist, or album..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-[#13131a] border border-[#1c1c24] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#8a8a93] focus:outline-none focus:border-[#411217]"
          />
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="bg-[#13131a] border border-[#1c1c24] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#411217] w-44"
          >
            <option>All Genres</option>
            <option>Classical</option>
            <option>Jazz</option>
            <option>Electronic</option>
          </select>
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
            onClick={() => { setSearch(""); setGenre("All Genres"); setStatus("All Status"); }}
            className="bg-[#1c1c24] hover:bg-[#26262f] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 [&>*]:max-w-[270px]">
        {filtered.map((video) => (
          <div key={video.id} className="bg-[#0f0f16] border border-[#1c1c24] rounded-xl overflow-hidden">
            <div className="relative">
              {video.thumbnail ? (
                <img src={video.thumbnail} alt={video.title} className="w-full h-36 object-cover" />
              ) : (
                <div className="w-full h-36 bg-[#1c1c24] flex items-center justify-center text-[#8a8a93] text-xs">
                  No Thumbnail
                </div>
              )}
              <span className="absolute top-2 left-2 bg-[#1c1c24] text-[#8a8a93] text-[10px] font-semibold px-2 py-0.5 rounded">
                {video.quality}
              </span>
              <span className="absolute top-2 right-2 bg-[#166534] text-[#4ade80] text-[10px] font-semibold px-2 py-0.5 rounded">
                {video.status}
              </span>
            </div>

            <div className="p-3">
              <p className="text-sm font-semibold leading-snug line-clamp-2 mb-1">{video.title}</p>
              <p className="text-xs text-[#8a8a93] mb-2">{video.artist}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#8a8a93] flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {video.views}
                </span>
                <span className="text-xs font-semibold text-[#4ade80]">{video.price}</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 mb-1.5">
                <button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-medium py-1.5 rounded transition-colors">
                  View
                </button>
                <button className="bg-[#b45309] hover:bg-[#92400e] text-white text-xs font-medium py-1.5 rounded transition-colors">
                  Edit
                </button>
                <button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-medium py-1.5 rounded transition-colors">
                  Delete
                </button>
              </div>
              <button className="w-full bg-[#1c1c24] hover:bg-[#26262f] text-[#8a8a93] hover:text-white text-xs font-medium py-1.5 rounded transition-colors">
                Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-[#8a8a93]">
          <MonitorOff className="w-10 h-10 mb-3 opacity-40" />
          <p className="text-sm">No videos found</p>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;
