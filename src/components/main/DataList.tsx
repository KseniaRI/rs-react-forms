import { FormDataStore } from '../../app/formsSlice';
import { FormType } from '../../utils/types';
import styles from './Main.module.css';

const DataList = ({
  data,
  formType,
}: {
  data: FormDataStore;
  formType: FormType;
}) => {
  return (
    <div className={styles.dataListWrap}>
      <h3>{`Data from ${formType === 'controlled' ? 'Controlled' : 'Uncontrolled'} form:`}</h3>
      <ul className={styles.dataList}>
        {Object.entries(data).map(([key, value]) => {
          if (key === 'picture' && typeof value === 'string') {
            return (
              <li key={key} className={styles.dataListItem}>
                <span className={styles.dataListItemDetail}>{key} :</span>
                <div className={styles.imgWrap}>
                  <img
                    src={value}
                    alt={'Uploaded'}
                    style={{ maxWidth: '200px' }}
                  />
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
                <span className={styles.dataListItemResult}>
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
