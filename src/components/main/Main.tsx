import { NavLink } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import DataList from './DataList';

const Main = () => {
  const controlledFormData = useAppSelector(
    state => state.forms.controlledFormData
  );
  const uncontrolledFormData = useAppSelector(
    state => state.forms.uncontrolledFormData
  );

  return (
    <div>
      <p>Main page</p>
      <nav>
        <NavLink to="/uncontrolled">Go to Uncontrolled Form page</NavLink>
        <br />
        <NavLink to="controlled">Go to Controlled Form page</NavLink>
      </nav>
      {controlledFormData && <DataList data={controlledFormData} />}
      {uncontrolledFormData && <DataList data={uncontrolledFormData} />}
    </div>
  );
};

export default Main;
