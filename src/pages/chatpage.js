import React,{useState,useEffect} from "react";
import "./chatpage.css";
import Chatelement from "../component/chatelement/chatelement";
import Topbar from "../component/navBar/topbar";
import MemberListBox from "../component/memberListBox/memberListBox";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Popup from "reactjs-popup";
import { apiAddress } from "../component/API/api";
import { GetToken } from "../GlobalVariable";
import { useLocation } from "react-router-dom";


const Chatpage = () => {
  const msgList=[{
    id:1,
    sender:"Ramesh",
    messege:"Hello",
    isSelfSender:false,
  },{
    id:3,
    sender:"Ramesh",
    messege:"Hello",
    isSelfSender:false,
  },{
    id:4,
    sender:"Ramesh",
    messege:"Hello",
    isSelfSender:false,
  },{
    id:5,
    sender:"Ramesh",
    messege:"Hello",
    isSelfSender:false,
  },{
    id:6,
    sender:"Ramesh",
    messege:"Hello",
    isSelfSender:false,
  },{
    id:7,
    sender:"Ramesh",
    messege:"Hello",
    isSelfSender:false,
  },{
    id:9,
    sender:"Ramesh",
    messege:"Hello",
    isSelfSender:false,
  },
]
const location = useLocation();
    let run = true;
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    useEffect(() => {
        if (run === true) {
          const token = GetToken();
          // console.log(token);
          setIsLoading(true);
          fetch(`${apiAddress}chat/see/${id}`, {
             method:'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              console.log(response.status);
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
    <div class="chatpage">
      <Topbar />
      <div className="Chat_Division">
      <div className="ChatSection">
        <h1 class="chattitle">Discussion</h1>
        <hr id="chatdivider" />
        <div class="chat-container">
          <div class="chatpagechats">
          {
            msgList.map((msg)=>
            <Chatelement key={msg.id } {...msg}/>)
          }
          </div>
          <div class="chatinput">
            <input type="text" placeholder="Type your message..."  />
            <button onclick="">Post</button>
          </div>
        </div>
      </div>
        
        <MemberListBox />
      </div>
    </div>
  );
};

export default Chatpage;
