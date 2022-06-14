import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material"; 
import Home from "../page/Home/Home";
import Header from "../component/Header/Header";
import Footer from '../component/Footer/Footer';
import {theme} from '../theme/Theme';
const RouterControl = () => {
  return(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default RouterControl;