import  style from './Header.module.css';
// import { Outlet, Link } from "react-router-dom";
import {Stack , IconButton, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
import { Link } from 'react-scroll';

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
              <Link className={style.link} to="home" spy={true} smooth={true}>Home</Link>
              <Link className={style.link} to="roadmap" spy={true} smooth={true}>Roadmap</Link>
              <Link className={style.link} to="faq" spy={true} smooth={true}>FAQ</Link>
              <Link className={style.link} to="team" spy={true} smooth={true}>Team</Link>
              <Link className={style.link} to="mint" spy={true} smooth={true}>Mint</Link>
              <Link className={style.link} to="dao_game" spy={true} smooth={true}>DAO Games</Link>
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
              <Link className={style.link} to="home" spy={true} smooth={true}>Home</Link>
              <Link className={style.link} to="roadmap" spy={true} smooth={true}>Roadmap</Link>
              <Link className={style.link} to="faq" spy={true} smooth={true}>FAQ</Link>
              <Link className={style.link} to="team" spy={true} smooth={true}>Team</Link>
              <Link className={style.link} to="mint" spy={true} smooth={true}>Mint</Link>
              <Link className={style.link} to="dao_game" spy={true} smooth={true}>DAO Games</Link>
          </div>
        }
      </div>
    </>
  );
}
export default Header;