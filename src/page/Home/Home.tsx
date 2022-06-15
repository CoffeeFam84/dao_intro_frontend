
import { Typography  ,Stack, useMediaQuery } from '@mui/material';
import styles from './Home.module.css';
import ListItem from '../../component/ListItem/ListItem';
import Accordion from '../../component/Accordion/Accordion';
import { roadMapData , FAQData , roadType , FAQType } from '../../utils/type';
import Member from '../../component/Member/Member';
import Button from '../../component/Button/Button';


const Home = () => {
  
  const mdDown = useMediaQuery('(max-width:720px)');
  
  return(
    <>
      <div id='home' className={styles.container}>

        
        <div className={styles.top}>
          <div className={styles.top_body}>
            <Typography variant='h2' sx={{fontSize:{xs:'40px',md:'54px'},lineHeight:{xs:'50px',md:'70px'}}}>Decentralized<br/>Autonomous Organization</Typography>
            <Typography sx={{marginTop:'31px'}} variant='h5'>DAO refers to a revolutionary way of managing organizations, able <br/> to ensure transparency, immutability, autonomy and security thanks <br/> to smart contracts and blockchain technology.</Typography>

            <Typography sx={{marginTop:'30px',fontSize:'14px',fontWeight:'400',color:'rgba(255, 255, 255, 0.8)'}} variant='h5'>Learn more about the project</Typography>
            <Button title='Get Started' width='206px'/>
          </div>
        </div>


        <div className={styles.bottom}>
          <div className={styles.bottom_body}>
            <div className={styles.flex}>
              <div style={{marginRight:'30px',marginBottom:'30px'}}>
                <Typography variant='h2' sx={{fontSize:{xs:'40px',md:'54px'}}}>The Story</Typography>
                <Typography variant='h5'>In the middle of a dark night, after long years 
                of painstaking work, Dr. Dao found away to create a window into parallel worlds. After 
                that, teaming up with alternative Dao doctors from different universes, they created the Dao Club to explore incredible new open worlds together and make exciting discoveries.
                </Typography>
              </div>
              <div className={styles.story_img}>
                <img className={styles.img} src='./assets/image/Image.png'></img>
                <img className={styles.more_icon} src='./assets/image/Learn More.png'></img>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.list_item_box}>
          <div className={styles.list_item_body}>
            <div className={styles.list}>
              <ListItem img='./assets/image/1.png' title='DAO governace' content='Each owner has the same rights to the development decisions of the project' />
              <ListItem img='./assets/image/2.png' title='Incubator' content='Dr. Dao is an access pass for future collections developed by Dao Lab' />
              <ListItem img='./assets/image/3.png' title='Redistribution' content='50% of the volume traded in secondary markets is redistributed to Dr Dao Owners weekly' />
              <ListItem img='./assets/image/4.png' title='Staking' content='Dao Lab products generate passive income at our partner sites' />
              <ListItem img='./assets/image/5.png' title='Dao games P2R and P2e' content='(coming SOON)' />
            </div>
          </div>
        </div>

        <div id='roadmap' className={styles.road_map}>
          <div className={styles.road_map_body}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Typography variant='h2' sx={{fontSize:{xs:'40px',md:'54px',textAlign:'left'}}} >Roadmap</Typography>
            </div>
            <div style={{width : mdDown ? '100%' : ''}}>
              {
                roadMapData.map((info:roadType,index:number) => (
                  <Stack sx={{padding:'15px 0px'}} key={index} direction='row' alignItems='center' spacing={2}>
                    <img src={info.img}></img>
                    <Typography variant='h4' sx={{fontSize:{xs:'18px',sm:'20px'},lineHeight:'25px'}}>{info.text}</Typography>
                  </Stack>
                ))
              }
            </div>
          </div>
        </div>
        

        <div id='faq' className={styles.faq}>
          <div className={styles.faq_body}>
            <Typography variant='h2' sx={{textAlign:'center',marginBottom:'43px'}}>F.A.Q.</Typography>
            {
              FAQData.map((info:any,index:number) => (
                <Accordion key={index} title={info.title} content={info.content} />
              ))
            }   
          </div>
        </div>


        <div id='team' className={styles.team}>
          <div className={styles.team_body}>
          <Typography variant='h2' sx={{fontSize:{xs:'40px',md:'54px',textAlign:'center'}}} >Team</Typography>
            <Stack direction={{sm:"column",xs:'column',md:'row'}} spacing={5} justifyContent='center' sx={{mb:8,mt:5}}>
              <Member img='./assets/image/Image (0).png' name='Dr Dao Founder' text='Head of Marketing Artist' />
              <Member img='./assets/image/Image (1).png' name='Dr Dao Founder' text='Head of Project Artist' />
            </Stack>
            <Stack direction={{lg:'column',xs:'column',xl:'row'}} spacing={5} justifyContent='center'>
              <Stack direction={{md:'column',xs:'column',lg:'row'}} spacing={5} justifyContent='center'>
                <Member img='./assets/image/Image (2).png' name='Dr Dao Developer' text='' />
              
                <Stack direction={{sm:"column",xs:'column',md:'row'}} spacing={5} justifyContent='center'>
                  <Member img='./assets/image/Image (3).png' name='Dr Dao Developer' text='' />
                  <Member img='./assets/image/Image (4).png' name='Dr Dao Developer' text='' />
                </Stack>
              </Stack>
              
              <Stack direction={{sm:"column",xs:'column',md:'row'}} spacing={5} justifyContent='center'>
                <Member img='./assets/image/Image (5).png' name='Dr Dao Community Manager' text='' />
                <Member img='./assets/image/Image (6).png' name='Dr Dao Designer' text='' />
              </Stack>
            </Stack>
          </div>
        </div>
        

        <div  className={styles.partner}>
          <div className={styles.partner_body}>
            <Stack direction='column' spacing={7} justifyContent='center'>
              <Typography variant='h2' sx={{fontSize:{xs:'40px',md:'54px',textAlign:'center'}}} >Partners</Typography>
              <Stack direction={{sm:'column',xs:'column',md:'row'}} spacing={20}  justifyContent='center' >
                <Member img='./assets/image/LogoShirt (1) 1.png' name='Crosmonauts' text='' />
                <Member img='./assets/image/cyborgswap 1.png' name='CyborgSwap' text='' />
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;