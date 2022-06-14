
import { Box , Stack } from "@mui/material";
import Button from '../Button/Button';
const Footer = () => {
  return(
    <>
      <Box sx={{
        background:theme => theme.palette.primary.dark,
        width:'100%'
      }}>
        <Box sx={{width:'80%',margin:'auto',maxWidth:'1440px',padding:'15px 0px'}}>
          <Stack direction={{md:'column',xs:'column',lg:'row'}} justifyContent='space-between' alignItems='center'>
            <img src='./assets/image/logo.png'></img>
            <Button title='Get Started' width='282px'/>
            <Stack direction='row' spacing={2}>
              <img src='./assets/image/Instagram.png'></img>
              <img src='./assets/image/Twitter.png'></img>
              <img src='./assets/image/Twitter.png'></img>
            </Stack>
          </Stack>
        </Box>
        
      </Box>
    </>
  );
}

export default Footer;