import { useContext, useState } from 'react';
import { ListContext } from '../components/setting/setting';
const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);

  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
