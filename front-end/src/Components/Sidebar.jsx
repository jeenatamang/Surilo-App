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
    <div className="w-65 h-screen bg-[#0b0b0f] border-r border-[#1c1c24] flex flex-col p-6 fixed top-0 left-0 text-white font-sans select-none">
      <div className="flex items-center gap-3 pl-2 mb-8">
        <img
          className="w-9 h-9 rounded-full object-cover"
          src={Surilologo}
          alt="Surilo logo"
        />
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-wide">Surilo</span>
          <span className="text-xs text-[#8a8a93] mt-0.5">Admin Panel</span>
        </div>
      </div>

      <ul className="flex-1 list-none flex flex-col gap-1 overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden -ms-overflow-style:none scrollbar-width:none">
        <li>
          <NavLink to="/dashboard"
            className={({ isActive }) =>`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm 
            font-medium rounded-lg transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }>
            <LayoutDashboard className="w-4.5 h-4.5" />
            Dashboard{" "}
          </NavLink>
        </li>

        <li>
          <NavLink to="/music-library" className={({ isActive }) =>`w-full flex items-center gap-3 
          px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Music className="w-4.5 h-4.5" />
            Music Library
          </NavLink>
        </li>

        <li>
          <NavLink to="/video-library"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Video className="w-4.5 h-4.5" />
            Video Library
          </NavLink>
        </li>

        <li>
          <NavLink to="/artists" className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Users2 className="w-4.5 h-4.5" />
            Artists
          </NavLink>
        </li>

        <li>
          <NavLink to="/albums"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Disc className="w-4.5 h-4.5" />
            Albums
          </NavLink>
        </li>

        <li>
          <NavLink to="/genres"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Tags className="w-4.5 h-4.5" />
            Genres
          </NavLink>
        </li>

        <li>
          <NavLink to="/users"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }
          ><Users className="w-4.5 h-4.5" />
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/subscriptions"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }
          ><CreditCard className="w-4.5 h-4.5" />
            Subscriptions
          </NavLink>
        </li>

        <li>
          <NavLink to="/subscription-plans"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg
             transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`
            }><Layers className="w-4.5 h-4.5" />
            Subscription Plans
          </NavLink>
        </li>

        <li>
          <NavLink to="/purchases"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><ShoppingBag className="w-4.5 h-4.5" />
            Purchases
          </NavLink>
        </li>

        <li><NavLink
            to="/coupons"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium rounded-lg 
            transition-colors duration-200 ${isActive ? "bg-[#411217] text-white" : "text-[#8a8a93] hover:bg-[#16161f] hover:text-white"}`}
          ><Ticket className="w-4.5 h-4.5" />
            Coupons
          </NavLink>
        </li>
      </ul>


      <div className="flex items-center gap-3 pt-4 pb-1 px-2 border-t border-[#1c1c24] mt-auto">
        <div className="w-9 h-9 rounded-full bg-[#4a151b] flex items-center justify-center text-sm font-semibold">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white leading-tight">
            Admin
          </span>
          <span className="text-xs text-[#8a8a93]">Administrator</span>
        </div>
        <button
          className="ml-auto p-1 text-[#8a8a93] hover:text-white transition-colors duration-200"
          title="Logout"><LogOut className="w-4.5 h-4.5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
