import { NavLink, useSearchParams } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import DataList from './DataList';
import styles from './Main.module.css';

const Main = () => {
  const [searchParams] = useSearchParams();
  const newData = searchParams.get('newData');

  const controlledFormData = useAppSelector(
    state => state.forms.controlledFormData
  );
  const uncontrolledFormData = useAppSelector(
    state => state.forms.uncontrolledFormData
  );

  return (
    <div className={styles.mainPage}>
      <h1 className={styles.title}>React Forms: controlled and uncontrolled</h1>
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="controlled">
          Go to Controlled Form page
        </NavLink>
        <NavLink className={styles.link} to="/uncontrolled">
          Go to Uncontrolled Form page
        </NavLink>
      </nav>
      <div className={styles.formResults}>
        {controlledFormData && (
          <DataList
            data={controlledFormData}
            formType="controlled"
            isNew={newData === 'controlled'}
          />
        )}
        {uncontrolledFormData && (
          <DataList
            data={uncontrolledFormData}
            formType="uncontrolled"
            isNew={newData === 'uncontrolled'}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
