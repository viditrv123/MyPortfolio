import React from 'react';
import {Navbar, Nav, Col, Row, Image} from 'react-bootstrap';
import Logo from '../assets/MyLogo.png'
import Profile from '../assets/Profile Pic1.jpg'
import './style.css'
import { makeStyles } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillFilePdf } from 'react-icons/ai';
import {FaBloggerB} from 'react-icons/fa'
import {SiHackerearth, SiHackerrank, SiCodechef, SiCodeforces, SiTopcoder} from 'react-icons/si'
const Home=()=>{
    const useStyles = makeStyles((theme) => ({
        paper: {
          padding: '6px 16px',
        },
        secondaryTail: {
          backgroundColor: theme.palette.secondary.main,
        },
        
      }));
      const classes = useStyles();

      const achievement=[{}]

return(<div>

    
    
<div className="row">
<div className="col-md-4" >
<br></br><br></br>
    <Image src={Profile} className="avatar" style={{"width":"200px", "height":"200px","display": "block","marginRight":"auto","marginLeft":"auto"}} roundedCircle />
    <h1 style={{"textAlign":"center"}}>Hello World!<br /></h1><h2 style={{"textAlign":"center"}}>I am <br /> Vidit Singh Gautam</h2>
    <div style={{"display": "block","marginLeft":"40px", "marginRight":"35px"}}>
    <a href="www.facebook.com"><AiFillGithub size="2em" /></a>
    <a href="www.facebook.com"><AiFillLinkedin size="2em" /></a>
    <a href="www.facebook.com"><AiOutlineTwitter size="2em" /></a>
    <a href="www.facebook.com"><FaBloggerB size="2em" /></a>
    <a href="www.facebook.com"><SiHackerearth size="2em" /></a>
    <a href="www.facebook.com"><SiHackerrank size="2em" /></a>
    <a href="www.facebook.com"><SiCodechef size="2em" /></a>
    <a href="www.facebook.com"><SiCodeforces size="2em" /></a>
    <a href="www.facebook.com"><SiTopcoder size="2em" /></a>
    <a href="www.facebook.com"><AiFillFilePdf size="2em" /></a>
    </div>
    <br></br>
    <p></p>
    </div>
    
    <div className="col-md-8" style={{"overflowY":"scroll", "overflowY":"auto","width":"100%","height":"600px","padding":"0px"}}>
    <section id="education" style={{"background-color": "#f5f186",
"background-image": "linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)"}}> <h3>Education</h3>
<Timeline align="alternate">

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017-2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Sardar Vallabhbhai National Institute of Technology, Surat
            </Typography>
            <Typography><br></br><br></br>Bachelor of Technology, Mechanical Engineering </Typography>
            <Typography><br></br><br></br>CGPA-6.30</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2015-2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
          
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            City Montessori School, Lucknow
            </Typography>
            <Typography><br></br><br></br>Indian School Certificate</Typography>
            <Typography><br></br><br></br>Percentage: 91.5%</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2013-2014
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            City Montessori School, Lucknow
            </Typography>
            <Typography><br></br><br></br>Indian Certificate of Secondary Education</Typography>
            <Typography><br></br><br></br>Percentage: 91%</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      </Timeline>
      <hr></hr>
      </section>
    </div>
    </div>
</div>);
}
export default Home;






