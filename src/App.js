import Game from './Components/Game';
import './App.css';

function App() {
  return (
    <div className='h-screen bg-[#2E4053] text-white'>
    <div className="grid place-items-center md:pt-32 pt-20 ">
      <h1 className='text-5xl  text-[#007bff]'>Tic Tac Toe</h1>
      <Game />
    </div>
    </div>
  );
}

export default App;
