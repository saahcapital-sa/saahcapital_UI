import React, {useState} from 'react'
import { Form, Button, Image} from 'react-bootstrap'
import { BsPaperclip } from 'react-icons/bs'

const messages = [{
    img: "images/chatImg1.jpg",
    text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel met scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
    sendedTime: "6:21 PM",
    sendedDate: "4th July",
    receive: true,
},{
    img: "images/chatImg2.jpg",
    text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel met scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
    sendedTime: "6:21 PM",
    sendedDate: "4th July",
    receive: false,
},{
    img: "images/chatImg1.jpg",
    text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel met scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
    sendedTime: "6:21 PM",
    sendedDate: "4th July",
    receive: true,
}]

const ChatBox = () => {
    const [file, setFile] = useState(null);
    const [messageText, setMessageText] = useState('');
  
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          setFile(URL.createObjectURL(selectedFile));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send message, image, and file to the server or store locally
        // Reset states after sending
        setMessageText('');
        setImage(null);
        setFile(null);
      };

    return (
        <div className="chatBoxCard">
            <div className="chatHeader">
                {true ? <Image src="images/chatImg1.jpg" /> : <span>AZ</span>}
                <div className="chatHeaderContent">
                    <h6>Payment Issue</h6>
                    <ul>
                        <li>David Smith</li>
                        <li>21 Feb 2020</li>
                        <li>Last Reply: 24 min ago</li>
                    </ul>
                </div>
            </div>
            <div className="chatBox">
                {messages.map((message, index) => (
                    <div key={index} className={message.receive ? "message message-recevive" : "message message-send"}>
                        <div className="messageImg">
                            <Image src={message.img} />
                            <span>{message.sendedTime}</span>
                            <span>{message.sendedDate}</span>
                        </div>
                        <div className="messageText">
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Form className="chatForm" onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Type a message here"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
                <div className='fileInput'>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                    />
                    <BsPaperclip />
                </div>
                <Button type='button' className='sendBtn'>
                    <Image src="images/navigationIcon.svg" />
                </Button>
            </Form>
        </div>
    )
}

export default ChatBox