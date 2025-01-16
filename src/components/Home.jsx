import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNeetUg = () => { navigate('/neet-ug'); }
  const handleNeetPg = () => { navigate('/neet-pg'); }

  return (
    <>
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-white tracking-wide transform transition-all duration-300 hover:scale-105 hover:underline">
            Expert Educational Consultancy
          </h1>

          <div className='flex flex-col space-y-6'>
            <button 
              onClick={handleNeetUg} 
              className="bg-white/20 text-white font-semibold px-8 py-4 rounded-lg
                       transform transition-all duration-300
                       hover:bg-white hover:text-indigo-800
                       hover:scale-105 hover:shadow-2xl
                       active:scale-95
                       border-2 border-white/30"
            >
              NEET UG
            </button>

            <button 
              onClick={handleNeetPg} 
              className="bg-white/20 text-white font-semibold px-8 py-4 rounded-lg
                       transform transition-all duration-300
                       hover:bg-white hover:text-indigo-800
                       hover:scale-105 hover:shadow-2xl
                       active:scale-95
                       border-2 border-white/30"
            >
              NEET PG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;