import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import DailyPicks from './DailyPicks';
import Form from './Form';


function App() {
  return (
    <UserProvider>
      <Routes>
    <Route path="/form" element={<Form/>} />
    <Route path="/" element={<DailyPicks/>} />
  </Routes>
    </UserProvider>
  
  );
}

export default App;
