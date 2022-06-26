import  style from './Header.module.css';
// import { Outlet, Link } from "react-router-dom";
import {Stack , IconButton, useMediaQuery , Typography } from '@mui/material';
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
          <img style={{width:'60px'}} src='./assets/image/drdao-logo.png'></img>
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
            <a href='https://medium.com/@drdao.club' target='_blank'><img src='./assets/image/Instagram.png'></img></a>
            <a href='https://twitter.com/DrDaoClub' target='_blank'><img src='./assets/image/Twitter.png'></img></a>
            <a href='https://discord.gg/tCNHG9bnyS' target='_blank'><img src='./assets/image/Vk.png'></img></a>
            <a href='https://raritysniper.com/nft-drops-calendar' target='_blank'><img src='./assets/image/sniper.png' style={{width: '20px', height: '20px'}}></img></a>
          </Stack>
          <a target='_blank' href="https://nftcalendar.io/event/maximaze-your-passive-income-with-dr-dao-nfts/">
              <Stack direction='row' spacing={2} alignItems='center'>             
                <Typography 
                sx={{
                  color:'white',
                  fontSize:'18px',
                  fontWeight:'400',
                  whiteSpace:'no-wrap',
                  display:{xs:'none',md:'none',lg:'block'}
                }}
                >
                  As seen on
                </Typography>
                <img style={{width:'60px'}} src='./assets/image/nft-calendar-transparent.png'></img>
              </Stack>
            </a>
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