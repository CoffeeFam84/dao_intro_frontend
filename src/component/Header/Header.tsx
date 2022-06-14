import  style from './Header.module.css';
// import { Outlet, Link } from "react-router-dom";
import {Stack , IconButton, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
// import { Link } from 'react-scroll';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 720px)')
  const [hambuger,clickHambuger] = useState<boolean>(false);
  const handleClick = () => {
    clickHambuger(!hambuger);
  }
  return(
    <>
      <div className={style.container}>
        <div className={style.body}>
          {
            isMobile    && <IconButton color='secondary' onClick={handleClick}><MenuIcon/></IconButton>
          }
          <img src='./assets/image/logo.png'></img>
          {
            !isMobile && 
            <div className={style.menulist}>
              <a href=''>Home</a>
              <a href=''>Roadmap</a>
              <a href=''>FAQ</a>
              <a href=''>Team</a>
              <a href=''>Mint</a>
              <a href=''>DAO Games</a>
            </div>
          }
          <Stack direction='row' spacing={2}>
            <img src='./assets/image/Instagram.png'></img>
            <img src='./assets/image/Twitter.png'></img>
            <img src='./assets/image/Twitter.png'></img>
          </Stack>
        </div>
        {
          hambuger && isMobile && 
          <div className={style.mobile_menulist}>
              <a href=''>Home</a>
              <a href=''>Roadmap</a>
              <a href=''>FAQ</a>
              <a href=''>Team</a>
              <a href=''>Mint</a>
              <a href=''>DAO Games</a>
          </div>
        }
      </div>
    </>
  );
}
export default Header;