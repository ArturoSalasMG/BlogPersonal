import './App.css';
import Bg from './Components/Bg';

function App() {
    return (
        <>
            <div className="background-container">
                <Bg />
            </div>
            <div className="centered-content h-full ">
                <div className='d-flex h-full text-center content-center justify-center hidden'>
                    <h1 className='text-5xl text-primary'>Jesus Salas</h1>
                    <p className=''>soy <span className='text-primary'>&lt;div&gt; Desarrollador WEB &lt;/div&gt;</span></p>
                </div>
                <div className='d-flex h-full text-center content-center justify-center'>
                    <h1 className='text-5xl text-danna font-bold mb-8'>Danna</h1>
                    <p className=' text-3xl'>💛💛💛Te amo con todo mi corazon💛💛💛
                    </p>
                </div>
            </div>
            <div className="content-container hidden">
                <div className='text-[#000000]'>
                    <h1>Hola Arturo Salas</h1>
                    <p>Este es el contenido de la página que se desplaza.</p>
                    <p>Agrega más contenido aquí para hacer scroll.</p>
                    {/* Agrega más contenido aquí */}
                </div>
            </div>
        </>
    );
}

export default App;