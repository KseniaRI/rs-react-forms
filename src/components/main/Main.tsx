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
      <nav>
        <NavLink to="/uncontrolled">Go to Uncontrolled Form page</NavLink>
        <br />
        <NavLink to="controlled">Go to Controlled Form page</NavLink>
      </nav>
      <div>
        <p>Data from Controlled Form</p>
        {controlledFormData && <DataList data={controlledFormData} />}
      </div>
      <div>
        <p>Data from Uncontrolled Form</p>
        {uncontrolledFormData && <DataList data={uncontrolledFormData} />}
      </div>
    </div>
  );
};

export default Main;
