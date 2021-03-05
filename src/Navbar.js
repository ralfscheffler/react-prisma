import './css/w3.css';

import { useState,useEffect } from 'react';


import {Link} from 'react-router-dom'
import {PrismaClient} from '@prisma/client';
//import useFetch from './components/useFetch';
//import 'bootstrap/dist/css/bootstrap.min.css';

//const router = useRouter();
function Switchtab(e){
    
    const tabs = document.getElementsByClassName('tablink');
    

    for (var i=0;i < tabs.length; i++){
        tabs[i].classList.remove('w3-red');
        
    }
    e.target.classList.add('w3-red');
    //if(e.currentTarget.id==='stdf'){                    
    //}
}
const prisma = new PrismaClient();
const Navbar =  async  () => {
    
    const data = await prisma.dP_L_Location.findMany();
    //const [data,setData] = useState();
   

    //useEffect(()=>{
    //    const fetchData = async()=>{
            
    //        const result = await axios.get('http://scheffler-hardcore.com:2010/hardcore/dp/DP_L_Location');
    //        setData(result.data.value);
           
    //    };
    //    fetchData();
   // },[]);   
    //const data = useFetch('http://scheffler-hardcore.com:2010/hardcore/dp/DP_L_Location')
    
    return ( 
        <div className="w3-bar w3-black">
            <Link to='/Personalform'>
            <button id="pers" className="w3-bar-item w3-button tablink w3-red" onClick={(e)=>{Switchtab
                (e)}}>Personal
             Verwaltung</button></Link>
            <Link to='/Shiftplan'>
            <button id="stdf" className="w3-bar-item w3-button tablink" onClick={(e)=>{Switchtab
                (e)}}>Stundeneingabe</button></Link>
            <Link to='/Reports'>
            <button id="rep" className="w3-bar-item w3-button tablink" onClick={(e)=>{Switchtab
                (e)}}>Reporte</button></Link>
            <Link to='/Einstellungen'>
            <button id="einst" className="w3-bar-item w3-button tablink" onClick={(e)=>{Switchtab
                (e)}}>Einstellungen</button></Link>
               
            
            
            
            <select className="w3-select w3-bar-item w3-margin-right w3-right">
                {data && (data.map(item=>(
                    <option key ={item.id}>{item.name}</option>
                
                )))} ;
                
                
            </select>
            <button id="login" className="w3-bar-item w3-button w3-right w3-margin-right" >anmelden</button>
  </div>
     );
}
 
export default Navbar;