import Image from 'next/image'
import foto from '../assets/por-do-sol.jpg';

const bordas = {
  padding: 0,
  margin: 0
}

function Home(){
  return <div style={{...bordas}}>
            <div style={{backgroundColor: 'black', height: '95vh', alignItems: 'center', ...bordas}}>
              <div style={{backgroundColor: 'white', textAlign: 'center', ...bordas, fontSize: '40px'}}>
                Vamos assistir ao pôr-do-sol?
              </div>
              <Image 
                /*fill*/
                src={foto}
                style={{objectFit: 'cover', height: '95vh', width: '100vw'}}
              />

            </div>
        </div>
}

export default Home;