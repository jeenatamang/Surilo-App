import React from "react";
import { NavLink } from "react-router-dom";
import Surilologo from "../assets/logo.png";
import {
  LayoutDashboard,
  Music,
  Video,
  Users2,
  Disc,
  Tags,
  Users,
  CreditCard,
  Layers,
  ShoppingBag,
  Ticket,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-43.75 h-screen bg-[#0d0d12] border-r border-[#1c1c24] flex flex-col py-5 px-3 fixed top-0 left-0 text-white font-sans select-none z-50">
      <div className="flex items-center gap-2 pl-1 mb-6">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={Surilologo}
          alt="Surilo logo"
        />
        <div className="flex flex-col">
          <span className="text-[13px] font-bold tracking-wide leading-tight">Navakaraṇa</span>
          <span className="text-[10px] text-[#8a8a93] mt-0.5">Admin Panel</span>
        </div>
      </div>

      <ul className="flex-1 list-none flex flex-col gap-0.5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-width:none">
        <li>
          <NavLink to="/dashboard"
            className={({ isActive }) =>`w-full flex items-center gap-2.5 px-3 py-2 text-[13px] 
            font-medium rounded-lg transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }>
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/music-library" className={({ isActive }) =>`w-full flex items-center gap-2.5 
          px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Music className="w-4 h-4 shrink-0" />
            Music Library
          </NavLink>
        </li>

        <li>
          <NavLink to="/video-library"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Video className="w-4 h-4 shrink-0" />
            Video Library
          </NavLink>
        </li>

        <li>
          <NavLink to="/artists" className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Users2 className="w-4 h-4 shrink-0" />
            Artists
          </NavLink>
        </li>

        <li>
          <NavLink to="/albums"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Disc className="w-4 h-4 shrink-0" />
            Albums
          </NavLink>
        </li>

        <li>
          <NavLink to="/genres"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Tags className="w-4 h-4 shrink-0" />
            Genres
          </NavLink>
        </li>

        <li>
          <NavLink to="/users"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }
          ><Users className="w-4 h-4 shrink-0" />
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/subscriptions"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }
          ><CreditCard className="w-4 h-4 shrink-0" />
            Subscriptions
          </NavLink>
        </li>

        <li>
          <NavLink to="/subscription-plans"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }><Layers className="w-4 h-4 shrink-0" />
            Subscription Plans
          </NavLink>
        </li>

        <li>
          <NavLink to="/purchases"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><ShoppingBag className="w-4 h-4 shrink-0" />
            Purchases
          </NavLink>
        </li>

        <li><NavLink
            to="/coupons"
            className={({ isActive }) =>
              `w-full flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Ticket className="w-4 h-4 shrink-0" />
            Coupons
          </NavLink>
        </li>
      </ul>


      <div className="flex items-center gap-2 pt-3 pb-1 px-1 border-t border-[#1c1c24] mt-auto">
        <div className="w-8 h-8 rounded-full bg-[#4a151b] flex items-center justify-center text-sm font-semibold shrink-0">
          A
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[13px] font-medium text-white leading-tight truncate">
            Admin
          </span>
          <span className="text-[11px] text-[#8a8a93] truncate">Administrator</span>
        </div>
        <button
          className="ml-auto p-1 text-[#8a8a93] hover:text-white transition-colors duration-200 shrink-0"
          title="Logout"><LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
