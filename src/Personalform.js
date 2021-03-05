
import { Button, Form, Col, Container  } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {PrismaClient, prismaclient} from '@prisma/client';
import 'bootstrap/dist/css/bootstrap.min.css';


const Personalform = async () => {
  //const [Personal, setPersonal] = useState(null);
  const prisma = new PrismaClient()
  const Personal = await prisma.dP_T_Mitarbeiter.findMany();
  console.log(Personal);
  var i=0;
  
  
  
  return (
    <h1>Personalbogen</h1>


  );
};


export default Personalform;