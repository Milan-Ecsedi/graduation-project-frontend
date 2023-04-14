import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

export function AccountCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <img src={localStorage.getItem('user.profile_pic')!} alt="profile pic"  onClick={handleShow}  style={{ width: '80px', height: '80px', borderRadius: '50%' }}/>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profil</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div style={{textAlign:'center'}}>
        <img src={localStorage.getItem('user.profile_pic')!} alt="profile pic"  onClick={handleShow}  style={{ width: '110px', height: '110px', borderRadius: '50%' }}/>
        <h2>{localStorage.getItem('user.name')}</h2>
        <p>{localStorage.getItem('user.email')}</p>
        <Link to='/profile' className='btn btn-success grow'>Profil megtekintése</Link>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}