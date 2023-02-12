import React, {useState, useEffect, useCallback} from 'react';
import io from 'socket.io-client';
import {useLocation } from 'react-router-dom'
import Header from './Header';
import RTCMultiConnection from 'rtcmulticonnection';
import FeaturesZigzag from './FeaturesZigzag';

//const socket = io.connect('http://143.215.113.213:5000');
function Newsletter() {
  const [connection, setConnection] = useState(new RTCMultiConnection());

  const [callMembers, setCallMembers] = useState(1);
  const [alignment, setAlignment] = useState("");
  const [divStyle, setDivStyle] = useState("fgh");
  const [videoElements, setVideoElements] = useState([]);
  const location = useLocation();
  const username = location.state ? location.state.username : null;
  const language = location.state ? location.state.language : null;
  const RoomId = location.state ? location.state.roomNumber : null;
  try {
   connection.open(RoomId);
       
      } catch (error) {
      connection.join(RoomId);
      }
  function onStream(event) {
        if (event.type == 'local') {
          console.log(event.type);
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          } else {
            console.error("Fullscreen API is not supported in this browser");
          }
          return;
      }
  
      if (event.type == 'remote') {
          var numberOfUsers = connection.getAllParticipants().length;
          console.log("number", numberOfUsers);
          if (numberOfUsers == 1) {
            document.body.insertBefore(event.mediaElement,)
          } else {
              showSecondAndUpcomingVideosInSmallDiv(event);
          }
        }
      };
  useEffect(() => {
   // console.log(document.body);

    //setVideoElements([...videoElements, event.mediaElement]);
    
    connection.socketURL = 'https://muazkhan.com:9001/';
    //connection.session = { audio: true, video: true };
    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };
    connection.onstream = onStream;
    // if(callMembers < 5){
    //   if (callMembers <3) {
    //     setAlignment("cols-"+callMembers.toString());
    //     setDivStyle("h-[40rem] bg-indigo-500 place-items-center");
    //   }
    //   else { 
    //     setAlignment("cols-"+Math.ceil(callMembers/2).toString());
    //     setDivStyle("h-80 bg-indigo-500 place-items-center");
    //   }
    // }
    // else {
    //   setAlignment("rows-"+ Math.ceil(callMembers/3).toString() + " grid-flow-col");
    //   setDivStyle("h-80 bg-indigo-500 place-items-center");
    // }
  }, []);


  const grid = "grid md:grid-"+ "cols-2"+" gap-4 items-center";

  return (
    <>
        
            {/* {videoElements.map((videoElement,index) =>(<div className='"grid place-items-center"'>
          <div className = {grid}> <div className={divStyle}><FeaturesZigzag key={index} video={videoElement} /></div> </div></div>))} */}
    </>
  );
}


export default Newsletter;
