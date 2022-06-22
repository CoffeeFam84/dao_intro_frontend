
import { Box , Stack } from "@mui/material";
import Button from '../Button/Button';
const Footer = () => {
  return(
    <>
      <Box sx={{
        background:theme => theme.palette.primary.dark,
        width:'100%'
      }}>
        <Box sx={{width:'85%',margin:'auto',maxWidth:'1440px',padding:'30px 0px'}}>
          <Stack direction={{md:'column',xs:'column',lg:'row'}} justifyContent='space-between' alignItems='center'>
            <img style={{width:'60px'}} src='./assets/image/drdao-logo.png'></img>
            <Button title='Get Started' width='282px'/>
            <Stack direction='row' spacing={2}>
              <a href='https://medium.com/@drdao.club' target='_blank'><img src='./assets/image/Instagram.png'></img></a>
              <a href='https://twitter.com/DrDaoClub' target='_blank'><img src='./assets/image/Twitter.png'></img></a>
              <a href='https://discord.gg/tCNHG9bnyS' target='_blank'><img src='./assets/image/Vk.png'></img></a>
              <a href='https://raritysniper.com/nft-drops-calendar' target='_blank'><img src='./assets/image/sniper.png' style={{width: '20px', height: '20px'}}></img></a>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Footer;