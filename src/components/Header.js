import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
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
  textAlign: 'left',
  color: '#fff',

}));

export const Header = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Her Yerden Çalışın, Her Şeyi Başarın", "Her Yer Ofisiniz Olsun", "İşinizi Dünyaya Açın"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 500;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return () => { clearInterval(ticker) };
  }, [text])
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }
  return (
    <Grid sx={{
      marginLeft: '70px',
      marginRight: '70px',
      marginBlockStart: '30px',
      marginBlockEnd: '30px'
    }}>
      <Box sx={{ flexGrow: 1, }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <div >
                      <h3>{`Yeni Nesil Çalışma ile `}<span className="wrap">{text}</span></h3><br />
                      <p>Yeni nesil çalışma yöntemi ile artık dilediğiniz, kendinizi rahat ve güvende hissettiğiniz heryerden çalışabilirsiniz. Artık bir ofise ihtiyacınız yok. Her yer sizin ofisiniz.</p>

                    </div>
                  </div>
                }

              </TrackVisibility>
            </Item>
          </Grid>
          <Grid item xs={6} sx={{  minWidth: {xs:"100%", md:"50%"}}}>
            <Item>
              <TrackVisibility>

                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <div className="banner-card">
                      <h3>Bize Dair</h3>
                      <p>Bizler remote çalışma modelini benimsemiş ve bizlere bu imkanı sunan firmaları ulaşılabilir kılmak için bir araya gelmiş bir ekibiz. Remote çalışma modeli sunan firmalara ulaşmak için bu siteyi kullanabilir daha çok firmanın teşvik olması için sayfamızı paylaşabilirsiniz.</p>
                    </div>
                  </div>
                }

              </TrackVisibility>
            </Item>

          </Grid>
          <Grid item xs={6} sx={{  minWidth: {xs:"100%", md:"50%"}}}>

            <Item>

              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <div className="banner-card">
                      <h3>Proje Amacı</h3>
                      <p>Bu projenin amacı remote çalışma modeli ile çalışma imkanı sunan firmalara ulaşımın kolaylaştırılması ve bu çalışma modelinin diğer firmalar tarafından da benimsenmesini sağlamaktır. Bu çalışma modelinin yaygınlaşmasını temenni eder ve tüm firmaları bu yönde adım atmaları için teşvik olmalarını dileriz.</p>

                    </div>
                  </div>
                }

              </TrackVisibility>

            </Item>

          </Grid>

        </Grid>
      </Box>

    </Grid>

  )
}