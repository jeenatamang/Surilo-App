import React from "react";
import { 
  DollarSign, 
  CheckCircle, 
  Users, 
  Music, 
  TrendingUp, 
  ListMusic 
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#13131a] text-white font-sans selection:bg-[#411217]">
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, Admin</h1>
          <p className="text-sm text-[#8a8a93] mt-1">Here's what's happening with your music today</p>
        </div>
        <div className="text-xs text-[#8a8a93] font-medium pt-1">
          Monday, April 6, 2026
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6 max-w-5xl">
        <div className="bg-[#240e11] border border-[#4a151b] rounded-xl p-5 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#8a8a93] font-medium">Total Revenue</span>
            <span className="text-2xl font-bold tracking-tight">$148.50</span>
            <span className="text-xs text-[#4ade80] font-medium mt-1">+$67.50 this week</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#3d1318] flex items-center justify-center text-[#ef4444]">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-[#12121a] border border-[#1c1c24] rounded-xl p-5 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#8a8a93] font-medium">Monthly Recurring Revenue</span>
            <span className="text-2xl font-bold tracking-tight">$82.40</span>
            <span className="text-xs text-[#4ade80] font-medium mt-1">9 active subscribers</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#162a1c] flex items-center justify-center text-[#22c55e]">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>


        <div className="bg-[#12121a] border border-[#1c1c24] rounded-xl p-5 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#8a8a93] font-medium">Total Users</span>
            <span className="text-2xl font-bold tracking-tight">23</span>
            <span className="text-xs text-[#8a8a93] font-medium mt-1">+0 this week</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1c1c24] flex items-center justify-center text-[#8a8a93]">
            <Users className="w-5 h-5" />
          </div>
        </div>


        <div className="bg-[#12121a] border border-[#1c1c24] rounded-xl p-5 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#8a8a93] font-medium">Total Music</span>
            <span className="text-2xl font-bold tracking-tight">8</span>
            <span className="text-xs text-[#8a8a93] font-medium mt-1">8 active</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1c1c24] flex items-center justify-center text-[#8a8a93]">
            <Music className="w-5 h-5" />
          </div>
        </div>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 max-w-5xl">
        
        <div className="flex flex-col gap-6">
          <div className="bg-[#12121a] border border-[#1c1c24] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wide">
              <TrendingUp className="w-4 h-4 text-[#a855f7]" />
              <h2>Active Subscriptions by Plan</h2>
            </div>
            <div className="flex flex-col gap-3">

              <div className="flex items-center justify-between p-4 bg-[#161622] rounded-xl border border-[#1c1c24]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2e1065] flex items-center justify-center text-[#a855f7] text-xs font-bold"></div>
                  <div>
                    <p className="text-sm font-semibold">Premium Monthly</p>
                    <p className="text-xs text-[#8a8a93]">7 subscribers</p>
                  </div>
                </div>
                <span className="text-sm font-bold">77.8%</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#161622] rounded-xl border border-[#1c1c24]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2e1065] flex items-center justify-center text-[#a855f7] text-xs font-bold"></div>
                  <div>
                    <p className="text-sm font-semibold">Premium Yearly</p>
                    <p className="text-xs text-[#8a8a93]">3 subscribers</p>
                  </div>
                </div>
                <span className="text-sm font-bold">33.3%</span>
              </div>
            </div>
          </div>


          <div className="bg-[#12121a] border border-[#1c1c24] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wide">
              <Users className="w-4 h-4 text-[#22c55e]" />
              <h2>Recent Subscriptions</h2>
            </div>
            <div className="flex flex-col divide-y divide-[#1c1c24]">

              <div className="flex justify-between items-center py-3.5 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium">test</p>
                  <p className="text-xs text-[#8a8a93]">test98@gmail.com</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-[#22c55e]">Premium Monthly</p>
                  <p className="text-[10px] text-[#8a8a93] mt-0.5">4 days ago</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-3.5 last:pb-0">
                <div>
                  <p className="text-sm font-medium">vdvdvd</p>
                  <p className="text-xs text-[#8a8a93]">ggg@gmail.com</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-[#22c55e]">Premium Monthly</p>
                  <p className="text-[10px] text-[#8a8a93] mt-0.5">1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">

          <div className="bg-[#12121a] border border-[#1c1c24] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wide">
              <ListMusic className="w-4 h-4 text-[#ef4444]" />
              <h2>Most Played Songs</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1c1c24] flex items-center justify-center text-xs">
                      <Music className="w-5 h-5"></Music>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Track Title {item}</p>
                      <p className="text-xs text-[#8a8a93]">Artist Name</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#8a8a93] font-semibold">0 plays</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Top Selling Songs */}
          <div className="bg-[#12121a] border border-[#1c1c24] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wide">
              <DollarSign className="w-4 h-4 text-[#22c55e]" />
              <h2>Top Selling Songs</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1c1c24] flex items-center justify-center text-xs"></div>
                  <div>
                    <p className="text-sm font-medium">Suddhikaraṇa — Continuous Stream</p>
                    <p className="text-xs text-[#8a8a93]">$13.50</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-white bg-[#1c1c24] px-2 py-1 rounded">4 sales</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;