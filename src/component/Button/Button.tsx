
import { Button } from "@mui/material";

const GetButton  = (props:any) => {
  const { title , width } = props;
  return(
    <>
    <a href=' https://linktr.ee/daolabs' target='_blank'>
      <Button sx={{width:width,margin:'15px 0px'}} variant="contained" color='secondary' >
        {title}
      </Button>
    </a>
    </>
  );
}
export default GetButton;

