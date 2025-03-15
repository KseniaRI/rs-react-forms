import { ReactElement } from 'react';
import { getChildId } from './lib/getChildId';
import styles from './Field.module.css';

interface FieldProps {
  children: ReactElement;
  label?: string;
  htmlFor?: string;
  required?: boolean;
  error?: {
    message?: string;
  };
}

const Field = ({ children, label, htmlFor, required, error }: FieldProps) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {required && '*'}
      </label>
      {children}
      {error && <small className={styles.error}>{error.message}</small>}
    </div>
  );
};

export default Field;
