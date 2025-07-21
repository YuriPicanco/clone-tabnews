"use  client";
import Player from "../../Components/Player";
import Image from "next/image";
import foto from "../../public/Paula/Paula(6).jpeg";

import { useState, useEffect } from "react";

const bordas = {
   padding: 0,
   margin: 0,
   position: 'relative'
};

function Home() {
   const [mostraPlayer, setMostraPlayer] = useState(false);
   const [mostrarMensagem, setMostrarMensagem] = useState(true);
   
   //const foto = "../../public/Paula/Paula(6).jpeg"


   useEffect(()=>{
      const timer = setTimeout(()=> {
         setMostrarMensagem(false);
      }, 5000);


      return () => clearTimeout(timer)
   }, []);

   function exibeFilmeSelecionado(){
       setMostraPlayer(!mostraPlayer)
   }


   return (
      <div style={{ ...bordas }}>

         {mostrarMensagem && (<div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <div style={{ textAlign: 'center', background: 'transparent' }}>
            <Image
              src="/Paula/Paula(6).jpeg"
              alt="Bem-vindo"
              
              width={700}
              height={400}
              style={{ objectFit: 'cover', zIndex: -1 }}
              /*style={{
                 height: "90vh",
                 width: "100vw",
                 objectFit: "cover",
                 border: "none",
                 boxShadow: "0 0 0 transparent",
               }}*/
            />
            <p style={{ color: '#fff', marginTop: '1rem', fontSize: '1.2rem' }}>
              Tá tão linda quanto as lembranças que tenho na minha memória
            </p>
          </div>
        </div>)}
         <div
            style={{
               backgroundColor: "white",
               height: "10vh",
               alignItems: "center",
               ...bordas,
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <div
               style={{
                  backgroundColor: "white",
                  textAlign: "center",
                  ...bordas,
                  fontSize: "40px",
                  paddingLeft: "0px",
               }}
            >
               Vamos assistir a um filme? :D
            </div>
            <div>
               {/*<Player />*/}
            </div>
         </div>
         <div
            onClick={exibeFilmeSelecionado}
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
         >
            {mostraPlayer?(            
               <iframe 
                  name="Player" 
                  src="//%72%65%64%65%63%61%6E%61%69%73%2E%67%64/player3/server.php?server=RCFServer3&subfolder=ondemand&vid=MLNUMOSHMNSQNAMVMASMLHRS" 
                  frameborder="0" 
                  height="400" 
                  scrolling="no" 
                  width="640" 
                  allow="encrypted-media" 
                  allowFullScreen> 
               </iframe>):  "Millennium: Os homens que não amavam as mulheres"}
         </div>
      </div>
   );
}

export default Home;
