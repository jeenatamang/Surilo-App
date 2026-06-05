import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Mainlayout from './Components/Mainlayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MusicLibrary from './pages/Musiclibrary.jsx';
import VideoLibrary from './pages/Videolibrary.jsx';
import Artists from './pages/Artists.jsx';
import Albums from './pages/Albums.jsx';
import Genres from './pages/Genres.jsx';
import Users from './pages/Users.jsx';
import Subscriptions from './pages/Subscriptions.jsx';
import SubscriptionPlans from './pages/Subscriptionplans.jsx';
import Purchases from './pages/Purchases.jsx';
import Coupons from './pages/Coupons.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/music-library" element={<MusicLibrary />} />
          <Route path="/video-library" element={<VideoLibrary />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/users" element={<Users />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/coupons" element={<Coupons />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;