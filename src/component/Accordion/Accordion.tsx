
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {styled, Theme} from '@mui/material/styles';
import {createStyles, makeStyles} from '@mui/styles';


const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    root:{
      background:theme.palette.primary.light,
      width:'100%',
    }
  })
)

interface AccodionType{
  title:string,
  content:string,
}
export default function StyleAccordion(props:AccodionType) {
  const { title ,content } = props;
  const classes = useStyles();
  return (
    <div style={{padding:'10px 0px'}}>
      <Accordion sx={{background:theme => theme.palette.primary.light}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.root}
        >
          <Typography variant='h3'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h3' sx={{fontSize:'16px',fontWeight:'400'}}>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
