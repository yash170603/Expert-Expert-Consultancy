import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NeetPG from "./components/NeetPG";
import NeetUG from "./components/NeetUG";
import SignInPage from "./components/SignInPage";

import TermsAndCondition from "./components/Footer/TermsAndCondition";
import RefundRule from "./components/Footer/RefundRule.jsx";
 
import ScrollSignup from "./components/scrollSignup.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<ScrollSignup />} />
          <Route path="/" element={<NeetPG />} />   {/* Home page */}
          <Route path="/neet-ug" element={<NeetUG />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/refund-rule" element={<RefundRule />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
