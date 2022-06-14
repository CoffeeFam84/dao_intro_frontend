
import style from './ListItem.module.css';
import {Stack , Typography} from '@mui/material';

interface HomepropsType{
  img:string,
  title:string,
  content:string
}
const ListItem = (props:HomepropsType) => {
  const { img , title ,content } = props;
  return(
    <>    
      <Stack  direction='column' spacing={5} alignItems='center' sx={{marginBottom:'20px'}} >
        <img src={img}></img>
        <Stack direction='column' spacing={1} alignItems='center'>
          <Typography variant='h5' sx={{color:'#26D6BB'}}>{title}</Typography>
          <Typography variant='h6'>{content}</Typography>
        </Stack>
      </Stack>    
    </>
  );
}
export default ListItem;