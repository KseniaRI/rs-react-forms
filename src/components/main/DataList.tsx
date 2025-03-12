import { FormDataStore } from '../../app/formsSlice';

const DataList = ({ data }: { data: FormDataStore }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => {
        if (key === 'picture' && value instanceof File) {
          const imageUrl = URL.createObjectURL(value);
          return (
            <li key={key}>
              {key} :{' '}
              <img
                src={imageUrl}
                alt={value.name}
                style={{ maxWidth: '200px' }}
              />
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
