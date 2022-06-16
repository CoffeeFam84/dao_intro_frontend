
import { Button } from "@mui/material";

const GetButton  = (props:any) => {
  const { title , width } = props;
  return(
    <>
      <Button sx={{width:width,margin:'15px 0px'}} variant="contained" color='secondary' >{title}</Button>
    </>
  );
}
export default GetButton;

