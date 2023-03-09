import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 
export const CompanyCards = ({name, description, imgUrl,work,linkedin,instagram,twitter, youtube,}) => {
return(

    <Card sx={{ maxWidth: 345,  
     marginBlockStart:'30px !important',
      margin: 'auto',
     backgroundColor: '#fff',
    }}>
    <CardMedia
        sx={{ height: 100,
            width: 100,
            margin: 'auto',
              marginBlockStart: '10px',
              borderRadius: '50%',
            }}
        image= {imgUrl}
        title="green iguana"
      />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        <b>{name}</b>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Typography variant="body2" color="text.secondary">
    <Button sx={{
        color:"text.secondary",
        margin:'auto !important'
    }} href={work}><i><b>İş İlanları</b></i></Button><br/>
      </Typography>
    <Typography variant="p" color="text.secondary">
        <b>Sosyal Medya Hesapları</b>
      </Typography>
    <CardActions sx={{margin:'auto !important'}}>
      <Button sx={{
        fontSize: '11px',
        fomtWidth: '10px',
        margin:'auto !important'
    }} href={linkedin}>Linkedin</Button>
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
      <Button sx={{
        fontSize: '11px',
        fomtWidth: '10px',
        margin:'auto !important'
    }} href={youtube}>Youtube</Button>
    </CardActions>
  </Card>
   

)
}