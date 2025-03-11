import { NavLink } from 'react-router';

const Main = () => {
  return (
    <div>
      <p>Main page</p>
      <nav>
        <NavLink to="/uncontrolled">Go to Uncontrolled Form page</NavLink>
        <br />
        <NavLink to="controlled">Go to Controlled Form page</NavLink>
      </nav>
    </div>
  );
};

export default Main;
