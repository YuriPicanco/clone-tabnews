'use  client';
import  { useRef, useState, useEffect } from 'react'

export default function  Player(){
  const audioRef = useRef(null)
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const  playlist = [
      "/musicasParaPaula/ComeAndGetYourLove-Redbone.mp3",
      "/musicasParaPaula/a-ha-TakeOnMe.mp3",
      "/musicasParaPaula/OtisStacks-Sorry.mp3"
  ]

  //const play = () => audioRef.current.play();
  //const pause = () => audioRef.current.pause();

  useEffect(()=>{
      if(audioRef.current)
          audioRef.current.src = playlist[index]
          //audioRef.current.play()

      if(isPlaying)
        audioRef.current.play().catch(err => {
          console.error("Erro ao tocar após mudar index:", err);
        })
  },  [index])

  const handlePlay = () => {
    audioRef.current.play().catch((err) => {
      console.error("Falha ao tocar áudio:", err);
    });
  };

  //const  tocarPlayList  =()=>{
    //  audioRef.current.src = playlist[index];
      //audioRef.current.play()
  //}

  

  const proxima= () =>{
      setIndex((index + 1) % playlist.length)
  }

  return (  
    <div style={{marginRight: "5vw", width: "5vw"}}>
        <audio ref={audioRef} onEnded={proxima} controls/>
    </div>  )
}
//<button onClick={tocarPlayList}>Tocar playlist</button>