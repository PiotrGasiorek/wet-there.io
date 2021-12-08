import React, { useState } from 'react';
import Board from './Board';
import Header from './Header';

function Main() {
    const [apiResponse, setApiResponse] = useState('');

    const handleApiResponse = (response) => {
      setApiResponse(response);
    }
    return (
        <main className='main'>
            <Header
                handleApiResponse={handleApiResponse} 
            />
            <Board 
                searchedLocation={apiResponse}
            />
        </main>
    );
  }
  
  export default Main;