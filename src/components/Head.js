import { useState, useEffect } from "react";
import {ArrowRightCircle} from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: theme.spacing(5),
    marginBlockStart:'30px !important',
    marginLeft:'70px',
    marginRight:'70px',
    marginBottom:'50px',
    textAlign: 'left',
    color: '#fff',
  
  }));
  
export const Head = () =>{ 
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Evden", "Güvenli"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length+1);
        
        setText(updateText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item> 
                <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <div className="banner">
                        <h3>Merhaba!</h3><br/>
                        <h3>{`Bizlere `}<span className="wrap">{text}</span> Çalışma İmkanı Verdiğiniz İçin Teşekkür Ederiz.</h3>
                        <p>Herkesin evden çalışmasına imkan verip, güvende çalışmalarını sağladığınız için teşekkür eder diğer firmalarında bu çalışma şeklini örnek almalarını dileriz.</p>                
                       <Box><Button 
                      
                       href="/"
                       sx={{
                         paddingLeft:'0%',
                         color: '#fff',
                         textDecoration: 'none',
                       }}
                       
                >Bize Dair</Button><ArrowRightCircle size={25} /></Box> 
                        </div> 
                        </div>
                        }
                        
                        </TrackVisibility>
            </Item>
          </Grid>
          
        </Grid>
      </Box>
      

    )
}