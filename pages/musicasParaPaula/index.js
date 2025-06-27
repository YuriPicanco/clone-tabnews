'use  client';
import Player from '../../Components/Player';
import Image from 'next/image'
import foto from '../../public/por-do-sol.jpg';



function Home(){
  const bordas = {
    padding: 0,
    margin: 0
  }
  



  return <div style={{...bordas}}>
            <div style={{backgroundColor: 'white', height: '10vh', alignItems: 'center', ...bordas, display: 'flex', justifyContent: 'space-between'}}>              
               <div style={{backgroundColor: 'white', textAlign: 'center', ...bordas, fontSize: '40px', paddingLeft: '0px'}}>
                  Vamos assistir ao pôr-do-sol?
              </div>

              <div>
                  <Player/>
              </div>
            </div>
              <Image 
                /*fill*/
                src={foto}
                style={{objectFit: 'cover', height: '90vh', width: '100vw'}}
              />

            </div>
}

export default Home;