import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';

import Typography from '@mui/joy/Typography';

export const StaffCard = ({ name, title, description, imgUrl,linkedin,instagram,twitter, github }) => {

  return (

    <Card variant="outlined"
      sx={{   
        width:  {xs:'auto', md:340},
        margin: 'auto ',
        
      }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Typography level="body2">{name}</Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{
        my: 2,
        height: 100,
        width: 110,
        margin: 'auto',
        marginBlockStart: '10px',
        borderRadius: '50%',
      }}>
        <img
          src={imgUrl}
          loading="lazy"
          alt=""

        />
      </AspectRatio>
      <Typography level="h2" fontSize="md" sx={{
        mb: 0.5,
        marginBlockStart: '40px'
      }}>
        {description}
      </Typography>
      <Box sx={{
        display: 'flex',
        marginBlockStart: '40px'
      }}>
        <div>
          <Typography variant="p" color="text.secondary">
            <b>Sosyal Medya Hesapları</b>
          </Typography>
          
          <Button sx={{
        fontSize: '11px',
        fomtWidth: '10px',
        margin:'auto !important'
    }} href={linkedin}>Linkedin</Button>
      <Button sx={{
        fontSize: '11px',
        fomtWidth: '10px',
        margin:'auto !important'
    }} href={github}>GitHub</Button>
      <Button sx={{
        fontSize: '11px',
        fomtWidth: '10px',
        margin:'auto !important'
    }}  href={instagram}>Instagram</Button>
      <Button sx={{
        fontSize: '11px',
        fomtWidth: '10px',
        margin:'auto !important '
    }} href={twitter}>Twitter</Button>
    
        </div>

      </Box>
    </Card>


  )
}
