import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from "./components/intro";
import Product from "./components/product";
import WaitList from "./components/waitlist";
import Contact from "./components/contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import FAQs from "./components/FAQs";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQs />} />
        {/* <Route path="/.well-known/assetlinks.json" element={<AssetLink />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <>
      <Intro />
      <main>
        <Product />
        <WaitList />
      </main>
      <Contact />
    </>
  );
}

export default App;
