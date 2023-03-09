
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as React from 'react';
import { StaffCard } from "./StaffCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.8)',
  padding: theme.spacing(5),
  marginBlockStart: '30px !important',
  marginLeft: '70px',
  marginRight: '70px',
  marginBottom: '50px',
  textAlign: 'center',
  alignItems: 'center',
  color: '#fff',
  position: 'releative',
}));


export const Slider = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const OurStaff = [
    {

      name: "Ahmet Oğuzhan Engin",
      title: "Frontend Developer",
      imgUrl: "https://picsum.photos/200/300?v=14",
      description: "Merhabalar, Bu projenin Frontend kısmında emeğim geçtiği için kendimi çok şansli hissetmekteyim.",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      github: "https://github.com/"
    },
    {

      name: "Ferdi Gökdemir",
      title: "Fullstack Developer",
      description: "Böyle bir prjenin ekip liderliğini yapmak benim için çok keyif vericiydi. Umarım  projemiz amacına ulaşır.",
      imgUrl: "https://picsum.photos/200/300?v=15",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      github: "https://github.com/"
    },
    {

      name: "Barış Şenyeli",
      title: "Backend Developer",
      description: "Böyle güzel bi projede backend tarafında çalışmak benim için çok keyif vericiydi. Güzel iş çıkardık.",
      imgUrl: "https://picsum.photos/200/300?v=16",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      github: "https://github.com/"
    },
    {

      name: "Serkan Akçay",
      title: "Backend Developer",
      description: "Takımımızla güzel bir iş çıkardığımızı düşünüyorum. Umarım herkes için yararlı olmuştur.",
      imgUrl: "https://picsum.photos/200/300?v=17",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      github: "https://github.com/"
    },


  ];
  return (
    <section >
      <Grid>
        <Box sx={{ flexGrow: 1, }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Item>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h3>Ekibimiz</h3><br />
                      <p>Bu Projenin Hayata Geçmesinde Emeği Geçen Ekip Arkadaşlarımız</p>
                      <br />
                      <div >
                        <Grid > 
                          <Carousel responsive={responsive} infinite={true} >
                            {
                              OurStaff.map((OurStaff, index) => {
                                return (
                                  <div className="item">
                                    <StaffCard key={index} {...OurStaff} />
                                  </div>
                                )
                              })
                            }

                          </Carousel>
                        </Grid>
                      </div>
                    </div>
                  }

                </TrackVisibility>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </section>
  )
}
