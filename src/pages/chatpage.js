import React from "react";
import "./chatpage.css";
import Chatelement from '../component/chatelement/chatelement'
import Topbar  from '../component/navBar/topbar';


const Chatpage = () => {
    return (
        <div class="chatpage">
            <Topbar />
            <h1 class='chattitle'>Discussion</h1>
            <hr id='chatdivider' />
            <div class='chat-container'>
                <div class='chatpagechats'>
                    <Chatelement sender='Ramesh' messege='Hello' />
                    <Chatelement sender='Ramesh' messege='Test 1' />
                    <Chatelement sender='Ramesh' messege='Hello' />
                    <Chatelement sender='Ramesh' messege='Hello' />
                </div>
                <div class='chatinput'>
                    <input type="text" placeholder="Type your message..." />
                </div>
            </div>
        </div>
    );
}

export default Chatpage


