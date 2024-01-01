import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage, SignupPage } from "./Routes";
import { Suspense } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/sign-up"} element={<SignupPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
