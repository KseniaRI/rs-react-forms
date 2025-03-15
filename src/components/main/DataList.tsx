import { useEffect, useState } from 'react';
import { FormDataStore } from '../../app/formsSlice';
import { FormType } from '../../utils/types';
import styles from './Main.module.css';

const DataList = ({
  data,
  formType,
  isNew,
}: {
  data: FormDataStore;
  formType: FormType;
  isNew: boolean;
}) => {
  const [highlight, setHighlight] = useState(isNew);

  useEffect(() => {
    if (isNew) {
      const timer = setTimeout(() => setHighlight(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isNew]);

  return (
    <div className={`${styles.dataListWrap} ${highlight ? styles.new : ''}`}>
      <h3>{`Data from ${formType === 'controlled' ? 'Controlled' : 'Uncontrolled'} form:`}</h3>
      <ul className={styles.dataList}>
        {Object.entries(data)
          .reverse()
          .map(([key, value]) => {
            if (key === 'picture' && typeof value === 'string') {
              return (
                <li key={key} className={styles.dataListItem}>
                  <span className={styles.dataListItemDetail}>{key} :</span>
                  <div className={styles.imgWrap}>
                    <img src={value} alt={'Uploaded'} />
                  </div>
                </li>
              );
            } else if (key === 'accept') {
              return (
                <li key={key} className={styles.dataListItem}>
                  <span className={styles.dataListItemDetail}>{key} :</span>
                  <span className={styles.dataListItemResult}>
                    {value ? 'accepted' : 'denied'}
                  </span>
                </li>
              );
            } else {
              return (
                <li key={key} className={styles.dataListItem}>
                  <span className={styles.dataListItemDetail}>{key} :</span>
                  <span
                    className={`${styles.dataListItemResult} ${key === 'country' ? styles.country : ''}`}
                  >
                    {value.toString()}
                  </span>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};
export default DataList;
