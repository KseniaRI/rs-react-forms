import { FormDataStore } from '../../app/formsSlice';

const DataList = ({ data }: { data: FormDataStore }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => {
        if (key === 'picture' && typeof value === 'string') {
          return (
            <li key={key}>
              {key} :{' '}
              <img src={value} alt={'Uploaded'} style={{ maxWidth: '200px' }} />
            </li>
          );
        } else if (key === 'accept') {
          return (
            <li key={key}>
              {key} : {value ? 'accepted' : 'denied'}
            </li>
          );
        } else {
          return (
            <li key={key}>
              {key} : {value.toString()}
            </li>
          );
        }
      })}
    </ul>
  );
};
export default DataList;
