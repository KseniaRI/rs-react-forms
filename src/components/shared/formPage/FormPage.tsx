import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { FormType } from '../../../utils/types';

const FormPage = ({
  children,
  formType,
}: {
  children: ReactNode;
  formType: FormType;
}) => {
  const pageTitle =
    formType === 'controlled'
      ? 'Controlled Form with react-hook-form'
      : 'Uncontrolled Form';

  return (
    <div>
      <h2>{pageTitle}</h2>
      {children}
      <NavLink to="/">Go to Main</NavLink>
    </div>
  );
};

export default FormPage;
