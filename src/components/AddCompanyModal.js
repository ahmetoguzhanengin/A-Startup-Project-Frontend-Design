import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react"
import {GrClose} from   "react-icons/gr";
import { Container, Col, Row } from "react-bootstrap";

const style = {
    borderRadius: '2%',
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    heigth: 'auto',  
    minWidth: '400px',
    boxShadow: '0 0 15px 0 rgba(#000, .1)',
    padding: '30px',
    backgroundColor: 'rgba(0,0,0,0.9)',
    
  };

function AddCompanyModal() {

 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [formState, setFormState] = useState({});
    const [buttonText, setButtonText] = useState('Gönder');
    const [status, setStatus] = useState({});

    const changeHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

   const submitHandler =(event) => {
    event.preventDefault();
    setButtonText('Gönderiliyor...');
    const config = {
        SecureToken: "***",
        To : "***",
        From : "***",
        Subject : "***",
        Body :"***",
    };

    if(window.Email){
        window.Email.send(config).then(() => {
     
            setStatus({ success: true, message: 'Mesaj başarılı bir şekilde gönderildi!'});
            setButtonText("Gönder"); 
            
        
        }
    
    );
    }    
   };
  

  return (
    <div>
    <Button variant="h6"
          noWrap
          component="a"
          onClick={handleOpen}
            sx={{ my: 2, color: 'white', display: 'block' }}>FİRMA EKLE</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        
    
      <Box sx={style}>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          Firma Ekleme Formu
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2}}>
        <form onSubmit = {submitHandler}> 
      <Row>
          <Col sm={12} className="px-1">
              <input type = "text" name="CompanyName" value = {formState.CompanyName || "" } placeholder="Firma Adı:" onChange={changeHandler}/>
          </Col>
          <Col sm={12} className="px-1">
              <input type = "file" name="CompanyLogo" value = {formState.CompanyLogo || "" }  placeholder="Logo:" onChange={changeHandler}/>
          </Col>
         
          <Col sm={6} className="px-1">
              <input type = "text" name="CompanyLinkedin" value = {formState.CompanyLinkedin || "" }  placeholder="Linkedin Bağlantısı:" onChange={changeHandler}/>
          </Col>
          <Col sm={6} className="px-1">
              <input type = "text" name="CompanyInstagram" value = {formState.CompanyInstagram || "" }  placeholder="İnstagram Bağlantısı:" onChange={changeHandler}/>
          </Col>
          <Col sm={6} className="px-1">
              <input type = "text" name="CompanyTwitter" value = {formState.CompanyTwitter || "" }  placeholder="Twitter Bağlantısı:" onChange={changeHandler}/>
          </Col>
          <Col sm={6} className="px-1">
              <input type = "text" name="CompanyYoutube" value = {formState.CompanyYoutube || "" }  placeholder="Youtube Bağlantısı:" onChange={changeHandler}/>
          </Col>
          <Col>
              <textarea sm={12} row = "6" name ="description" value = {formState.description || "" }  placeholder = "Açıklama:" onChange={changeHandler}></textarea>
              <button type ="submit">{buttonText}</button>
              <br/>
              <br/>
              {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "info"}>{status.message}</p>
                  </Col>
                }
          </Col>
       
      </Row>
  </form>
        </Typography>
      </Box>
    </Modal>
  </div>
  

  )
}
export default AddCompanyModal