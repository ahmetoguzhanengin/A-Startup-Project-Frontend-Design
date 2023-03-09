import {Row} from "react-bootstrap";
import  {CompanyCards} from "../components/CompanyCards";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: theme.spacing(5),
    marginBlockStart:'30px !important',
    marginLeft:'70px',
    marginRight:'70px',
    marginBottom:'50px',
    textAlign: 'center',
    color: '#fff',
  
  }));
  
export const Companies = () => {
    const RemoteCompanies = [
        {
          name: "Trendyol Group",
          description: "We were founded in 2010 with a dynamic and agile start-up spirit. Since then, we have grown into a decacorn, backed by Alibaba, General Atlantic, Softbank,  funds.",
          imgUrl: "https://picsum.photos/200/300?v=1",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Getir",
          description: "Getir is a technology company that joins the worlds of mobile technology and logistics, providing unprecedented solutions to the delivery of goods in urban areas.",
          imgUrl: "https://picsum.photos/200/300?v=2",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Hepsiburada",
          description: "We are a leading commerce platform in Turkey and as the end of June 2022, we connected 46.5 million members and a fast growing base of 88.7 thousand Merchants. ",
          imgUrl: "https://picsum.photos/200/300?v=3",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Akinon",
          description: "We are a leading commerce platform in Turkey and as the end of June 2022, we connected 46.5 million members and a fast growing base of 88.7 thousand Merchants. ",
          imgUrl: "https://picsum.photos/200/300?v=4",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "n11.com",
          description: "Getir is a technology company that joins the worlds of mobile technology and logistics, providing unprecedented solutions to the delivery of goods in urban areas.",
          imgUrl: "https://picsum.photos/200/300?v=5",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Uzay Bilgi Teknolojileri",
          description: "We were founded in 2010 with a dynamic and agile start-up spirit. Since then, we have grown into a decacorn, backed by Alibaba, General Atlantic, Softbank,  funds.",
          imgUrl: "https://picsum.photos/200/300?v=6",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Vbt Yazılım ve Danışmanlık",
          description: "Getir is a technology company that joins the worlds of mobile technology and logistics, providing unprecedented solutions to the delivery of goods in urban areas.",
          imgUrl: "https://picsum.photos/200/300?v=7",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Monster Notebook ",
          description: "We were founded in 2010 with a dynamic and agile start-up spirit. Since then, we have grown into a decacorn, backed by Alibaba, General Atlantic, Softbank,  funds.",
          imgUrl: "https://picsum.photos/200/300?v=8",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Turkcell Group",
          description: "We were founded in 2010 with a dynamic and agile start-up spirit. Since then, we have grown into a decacorn, backed by Alibaba, General Atlantic, Softbank,  funds.",
          imgUrl: "https://picsum.photos/200/300?v=9",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Atmosware",
          description: "We were founded in 2010 with a dynamic and agile start-up spirit. Since then, we have grown into a decacorn, backed by Alibaba, General Atlantic, Softbank,  funds.",
          imgUrl:"https://picsum.photos/200/300?v=10",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Vodafone",
          description: "We were founded in 2010 with a dynamic and agile start-up spirit. Since then, we have grown into a decacorn, backed by Alibaba, General Atlantic, Softbank,  funds.",
          imgUrl: "https://picsum.photos/200/300?v=12",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        {
          name: "Venta Yazılım",
          description: "We were founded in 2010 with a dynamic and agile start-up spirit. Since then, we have grown into a decacorn, backed by Alibaba, General Atlantic, Softbank,  funds.",
          imgUrl: "https://picsum.photos/200/300?v=13",
          work: "https://www.linkedin.com/",
          linkedin: "https://www.linkedin.com/",
          instagram:"https://www.instagram.com/",
          twitter:"https://www.twitter.com/",
          youtube:"https://www.youtube.com/",
        },
        
      ];
    return(
      <Box sx={{ flexGrow: 1
      }}>
      <Grid container spacing={6}>
        <Grid item xs={12}  >
          <Item> 
          <TrackVisibility>
                    {({isVisible}) =>
                     <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        
                        <h2>Firmalar</h2>
                        <p>Remote çalışmayı destekleyip, insan hayatına önem veren firma listesini görmektesiniz.
                        </p>
                        </div>}
                        </TrackVisibility>
                        <Row >
                                    {
                                        RemoteCompanies.map((RemoteCompanies, index) => {
                                            return (
                                                <CompanyCards key ={index} {...RemoteCompanies}/>
                                            )
                                        })
                                    }
                                </Row>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
    
      
    )
}