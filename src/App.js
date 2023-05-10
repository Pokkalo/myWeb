
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

import Profile from './components/pages/Profile';

function App() {

  const [submit, setSubmit] = useState(false)

  return (
    <div className="App">
      <Profile/>
    </div>
  );
}

export default App;
