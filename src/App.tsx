import { Route, Routes } from 'react-router';
import './App.css';
import Main from './components/main/Main';
import UncontrolledForm from './components/uncontrolled/UncontrolledForm';
import ControlledForm from './components/controlled/ControlledForm';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route path="/uncontrolled" element={<UncontrolledForm />} />
      <Route path="/controlled" element={<ControlledForm />} />
    </Routes>
  );
}

export default App;
