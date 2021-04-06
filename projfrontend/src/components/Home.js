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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillFilePdf, AiFillMail } from 'react-icons/ai';
import {FaBloggerB} from 'react-icons/fa'
import {SiHackerearth, SiHackerrank, SiCodechef, SiCodeforces, SiTopcoder} from 'react-icons/si'
import {BiLink} from 'react-icons/bi'
import {GrAchievement} from 'react-icons/gr'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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

      const achievement=[{"year":"2019-2020","heading":"The world","cgpa":"6.13","institute":"CMS"},
                          {"year":"2018-2019","heading":"The world hello","cgpa":"9","institute":"SVNIT"},
                          {"year":"2019-2020","heading":"The world","cgpa":"6.13","institute":"CMS"},
                          {"year":"2018-2019","heading":"The world hello","cgpa":"9","institute":"SVNIT"}]

      const project=[{"heading":"VSG1","description":"kergsbjbejskrbgdvjsbgevd","src":Profile,"glink":"", "link":""},
      {"heading":"VSG2","description":"jkngjhgjked","src":Logo,"glink":"", "link":""}
    ]

return(<div>

    
    
<div className="row">
<div className="col-md-4" >
<br></br>
    <Image src={Profile} className="avatar" style={{"width":"200px", "height":"200px","display": "block","marginRight":"auto","marginLeft":"auto"}} roundedCircle />
    <h1 style={{"textAlign":"center"}}>Hello World!<br /></h1><h2 style={{"textAlign":"center"}}>I am <br /> Vidit Singh Gautam</h2><br /><p style={{"textAlign": "center"}}>A Full Stack developer, Blockchain developer, Competitive Coder, based in Lucknow, India.</p>
    <div style={{"display": "block","marginLeft":"30px"}}>
    <a href="https://github.com/viditrv123"><AiFillGithub size="2em" /></a>
    <a href="https://www.linkedin.com/in/vidit-singh-gautam-642290178/"><AiFillLinkedin size="2em" /></a>
    <a href="https://twitter.com/ViditSinghGaut1"><AiOutlineTwitter size="2em" /></a>
    <a href="https://www.blogger.com/blog/posts/387435847157758210"><FaBloggerB size="2em" /></a>
    <a href="https://www.hackerearth.com/@viditsingh329"><SiHackerearth size="2em" /></a>
    <a href="https://www.hackerrank.com/vidit_rv123"><SiHackerrank size="2em" /></a>
    <a href="https://www.codechef.com/users/vidit_rv123"><SiCodechef size="2em" /></a>
    <a href="https://codeforces.com/profile/vidit_rv123"><SiCodeforces size="2em" /></a>
    <a href="https://www.topcoder.com/members/vidit_rv123"><SiTopcoder size="2em" /></a>
    <a href="mailto:viditsingh329@gmail.com?subject=Mail from Our Site"><AiFillMail size="2em" /></a>
    <a href="www.facebook.com"><AiFillFilePdf size="2em" /></a>
    </div>
    <Image src={Logo} style={{"width":"100px","height":"100px","display": "block","marginRight":"auto","marginLeft":"auto"}}></Image>
    </div>
    
    <div className="col-md-8" style={{"overflowY":"scroll", "overflowY":"auto","width":"100%","height":"600px","padding":"0px"}}>
    <section id="projects" style={{"background-color": "#c7e9fb",
"background-image": "linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%)"
}}>
<h3 style={{"textAlign":"center", "textDecoration":"underline"}}>Projects</h3>
    <div className="row">
    {project.map((value,key)=>{
      return(<div className="col-md-4">
    <br/><Card style={{"width":"100%","marginLeft":"10px"}} >
      <CardActionArea>
        <CardMedia
          style={{"height":"250px", "width":"100%"}}
          
          image={value.src}

          
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {value.heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {value.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="www.facebook.com"><AiFillGithub size="2em" /></a>
      <a href="www.facebook.com"><BiLink size="2em" /></a>
      
      </CardActions>
    </Card>
    <br />
    
  </div>)
    })}
      </div>
    </section>
    <section id="achievement" style={{"background-color": "#f5f186",
"background-image": "linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)"}}> <h3 style={{"textAlign":"center", "textDecoration":"underline"}}>Achievements</h3>
<Timeline align="alternate">
{achievement.map((value, key)=>{
  if(key%2==0){
  return(<div><TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {value.year}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <GrAchievement />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            {value.heading}
            </Typography>
            <Typography><br></br><br></br>{value.institute}</Typography>
            <Typography><br></br><br></br>{value.cgpa}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem></div>)
  }
  else{
    return(<div><TimelineItem>
        
        
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            {value.heading}
            </Typography>
            <Typography><br></br><br></br>{value.institute}</Typography>
            <Typography><br></br><br></br>{value.cgpa}</Typography>
          </Paper>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot>
            <GrAchievement />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" style={{"textAlign":"left"}}>
            {value.year}
          </Typography>
        </TimelineOppositeContent>
      </TimelineItem>
      </div>)
  }
})}
      
      </Timeline>
      <hr></hr>
      </section>
    </div>
    </div>
</div>);
}
export default Home;






