

import {Stack, Typography} from '@mui/material';
import './Member.css';

interface memberType{
  img:string,
  name:string,
  text:string,
  type:string,
}
const Member = (props:memberType) => {
  const { img , name , text ,type} = props;

  return(
    <>
      <Stack direction='column' spacing={3} alignItems='center' justifyContent='center'>
          {
            type === 'gif' &&
            <div className='mask'>
              <img src={img} style={{width:'196px'}}></img>
            </div>
          }
          {
            type === 'img' && 
              <img src={img}></img>
          }
        <Stack direction='column' spacing={0.5} alignItems='center' justifyContent='center'>
          <Typography sx={{color:theme => theme.palette.secondary.main,fontSize:'18px',fontWeight:'400',lineHeight:"22px",textAlign:'center'}}>{name}</Typography>
          <Typography sx={{color:'white',fontSize:'18px',fontWeight:'400',lineHeight:"22px"}}>{text}</Typography>
        </Stack>
      </Stack>
    </>
  );
}
export default Member;