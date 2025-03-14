import { Route, Routes } from 'react-router';
import Main from './components/main/Main';
import UncontrolledForm from './components/uncontrolled/UncontrolledForm';
import ControlledForm from './components/controlled/ControlledForm';
import './App.css';

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
