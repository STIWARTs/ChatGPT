import "./Chat.css";
import {useContext} from "react";
import { MyContext } from "./MyContext.jsx";

function Chat() {
    const {newChat, prevChats} = useContext(MyContext);

    return (
        <>
            {newChat && <h1> Start a New Chat!</h1>}
            <div className="chats">
                {
                    prevChats?.map((chat, idx) => 
                        <div key={idx} className={chat.role === "user" ? "userDiv" : "gptDiv"}>
                        {
                            chat.role === "user"?
                            <p className="userMessage">{chat.content}</p>:
                            <p className="gptMessage">{chat.content}</p>
                        }
                        </div>
                    )
                }
            </div>
            {/* STATIC DATA */}
                {/* <div className="userDiv">
                    <p className="userMessage"> User Message </p>
                </div>
                <div className="gptDiv">
                    <p className="gptMessage">GPT Generated Message</p>
            </div> */}
            
        </>
    )
}

export default Chat; 