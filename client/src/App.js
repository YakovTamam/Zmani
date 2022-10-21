import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SupportPage from "./pages/SupportPage";
import ForgotPassword from "./pages/ForgotPassword";
import MyPage from "./pages/MyPage";
import BusinessSetting from "./pages/BusinessSetting";
import BusinessSetting2 from "./pages/BusinessSetting2";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/support' element={<SupportPage />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/business-setting' element={<BusinessSetting />} />
              <Route path='/business-setting2' element={<BusinessSetting2 />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
