import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFact } from './redux/actions/dataActions';
import Fact from './Fact';

function App() {
  const dispatch = useDispatch();
   

useEffect(() => {
  dispatch(fetchFact());
}, [dispatch]);

return (
  <div className='App'>
    <h1>Cat Facts</h1>
    <Fact />
  </div>
)
}
export default App;