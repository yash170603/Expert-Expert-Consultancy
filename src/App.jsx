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
import AdminLogin from "./components/AdminLogin.jsx"
import NewsManager from "./components/admin/adminPages/NewsManager.jsx"
import Layout from "./components/UserPages/layout.jsx";
import QuestionAnswers from "./components/QuestionAnswers.jsx"
import AdminLayout from "./components/admin/layout.jsx";
import {Toaster} from 'react-hot-toast'
import VerifyPage from "./components/verifyPage/page.jsx";

const App = () => {
  return (
    <div>
      <SignupProvider>
      <BrowserRouter>
      <Toaster/>
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
          <Route path="/admin-page/*" element={<AdminLayout/>} />
          <Route path="/newsmanager" element={<NewsManager />} />
          <Route path="/dashboard/*" element={<Layout/>}/>
           <Route path="/verify-email" element={<VerifyPage/>}/>
          <Route path="/qna" element={<QuestionAnswers />} />
        </Routes>
      </BrowserRouter>
      </SignupProvider>
    </div>
  );
};

export default App;
