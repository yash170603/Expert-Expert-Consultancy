import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NeetPG from "./components/NeetPG";
import NeetUG from "./components/NeetUG";
import SignInPage from "./components/SignInPage";
// import Home from "./components/Home";
import TermsAndCondition from "./components/Footer/TermsAndCondition";
import RefundRule from "./components/Footer/RefundRule.jsx";
import FAQ from "./components/FAQ.jsx";
import ScrollSignup from "./components/scrollSignup.jsx";
import { SignupProvider } from "./components/context/SignUpContext";
import ServerFrontend from "./components/serverFrontend.jsx";
import AdminPage from "./components/admin/AdminPage.jsx"
import AdminLogin from "./components/admin/AdminLogin.jsx"
import TestimonialManager from "./components/admin/TestimonialManager"
import NewsManager from "./components/admin//NewsManager"
import Layout from "./components/UserPages/layout.jsx";


const App = () => {
  return (
    <div>
      <SignupProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<NeetPG />} />   {/* Home page */}
          <Route path="/sign-in" element={<SignInPage />} /> 
          <Route path="/neet-ug" element={<NeetUG />} />

          
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/refund-rule" element={<RefundRule />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sign-up" element={<ScrollSignup />} />
          <Route path="/neet-ug" element={<NeetUG />} />
          <Route path="/refund-rule" element={<RefundRule />} />
          <Route path="/check" element={<ServerFrontend />} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/admin-page" element={<AdminPage/>} />
          <Route path="/testimonialmanager" element={<TestimonialManager />} />
          <Route path="/newsmanager" element={<NewsManager />} />
          <Route path="/dashboard/*" element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
      </SignupProvider>
    </div>
  );
};

export default App;
