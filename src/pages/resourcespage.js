import React, { useState, useEffect } from "react";
import "./resourcespage.css";
import Topbar from '../component/navBar/topbar';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Popup from "reactjs-popup";
import { apiAddress } from "../component/API/api";
import { GetToken } from "../GlobalVariable";
import { useLocation } from "react-router-dom";




const ResourcesPage = () => {
    const location = useLocation();
    let run = true;
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    useEffect(() => {
        if (run === true) {
          const token = GetToken();
          console.log(token);
          setIsLoading(true);
          fetch(`${apiAddress}resource/view/${id}`, {
             method:'GET',
            headers: {
                // 'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              setResponseCode(response.status);
              
              return response.json();
            })
            .then((data) => {console.log("Hello");
              console.log(data); 
            })
            .catch((error) => {
              // handle errors
              console.error(error);
            });
    
          run = false;
        }
      }, []);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [responseNameCode, setResponseNameCode] = useState(null);
    const [responseCode, setResponseCode] = useState(null);
    const [openError, setOpenError] = useState(false);
    const closeModalError = () => setOpenError(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isCompleted, changeCompleted] = useState(false);

    return (
        <div class='resourcepage'>
            <Topbar />
            <div>
                <h1 id='resource_title'>Resources</h1>
                <div class='resource_title'>
                    <h2>Name</h2>
                    <h2>Link</h2>
                    <h2>Uploaded By</h2>
                    <h2>Uploaded On</h2>
                </div>
                <hr id='resource_divider' />

                {resource_listelement("Ram", "http://www.github.com", "hari", "2010/10/20")}

            </div>
            <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999 }}>
                <AddIcon />
            </Fab>
        </div>
    );
}


function resource_listelement(name, link, uploadedby, uploadedon) {
    return (<div class='resource_listelement'>
        <h3>{name}</h3>
        <h3><a href={link}>{link}</a></h3>
        <h3>{uploadedby}</h3>
        <h3>{uploadedon}</h3>
    </div>)
}

export default ResourcesPage
