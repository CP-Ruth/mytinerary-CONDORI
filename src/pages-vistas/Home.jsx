import React, { useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import './styles.css'


function Home() {
  let img = [
    { href: 'src/assets/argentina.jpg', namepais: 'Argentia' },
    { href: 'src/assets/francia.jpg', namepais: 'Francia' },
    { href: 'src/assets/canada.jpg', namepais: 'Canada' },
    { href: 'src/assets/brasil.jpg', namepais: 'Brasil' },
    { href: 'src/assets/escocia.jpg', namepais: 'Escocia' }
  ]

  const [imagenActual, setImagenActual] = React.useState(0);
  //const cantidad = img.length;
  //useEffect(() => {  }, [])


  return (
    <>
      <div className="container">
        <button onClick={() => handlerBack()}><IoIosArrowBack />Back</button>

        {img.map((each, key) => {
          return (
            <div>
               {imagenActual === key && <img key={key} src={each.href} alt={each.namepais}/>}
            </div>
          )
        }

        )}


        <button onClick={() => handlerNext()}><IoIosArrowForward />Next</button>
      </div>





    </>
  )
}

export default Home