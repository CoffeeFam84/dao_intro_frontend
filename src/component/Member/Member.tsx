

import {Stack, Typography} from '@mui/material';


interface memberType{
  img:string,
  name:string,
  text:string
}
const Member = (props:memberType) => {
  const { img , name , text } = props;

  return(
    <>
      <Stack direction='column' spacing={3} alignItems='center' justifyContent='center'>
        <img src={img}></img>
        <Stack direction='column' spacing={0.5} alignItems='center' justifyContent='center'>
          <Typography sx={{color:theme => theme.palette.secondary.main,fontSize:'18px',fontWeight:'400',lineHeight:"22px",textAlign:'center'}}>{name}</Typography>
          <Typography sx={{color:'white',fontSize:'18px',fontWeight:'400',lineHeight:"22px"}}>{text}</Typography>
        </Stack>
      </Stack>
    </>
  );
}
export default Member;