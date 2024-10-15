import { Dispatch, SetStateAction } from "react";
import * as styles from './form.tailwind';

interface InputValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthdate: string;
  email: string;
}

interface Props {
  inputValue: InputValues
  setInputValue: Dispatch<SetStateAction<InputValues>>
  setSavedUserInfo: Dispatch<SetStateAction<InputValues>>
}

const InputForm: React.FC<Props> = ({ inputValue, setInputValue, setSavedUserInfo }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSavedUserInfo(inputValue);
  };

  return (
    <form className={styles.form_tw} onSubmit={handleSubmit} role="form">
      <div className={styles.inputFields_tw}>
        <div className={styles.labelInputContainer_tw}>
          <label className={styles.label_tw}>First name</label>
          <input name="firstName" onChange={handleChange} placeholder="ex: Jessie" className="w-[300px] p-2 border rounded-md" value={inputValue.firstName}/>
        </div>
        <div className={styles.labelInputContainer_tw}>
          <label className={styles.label_tw}>Last name</label>
          <input name="lastName" onChange={handleChange} placeholder="ex: Le" className="w-[300px] p-2 border rounded-md" value={inputValue.lastName}/>
        </div>
      </div>
      <div className={styles.inputFields_tw}>
        <div className={styles.labelInputContainer_tw}>
          <label className={styles.label_tw}>Phone number</label>
          <input name="phoneNumber" onChange={handleChange} placeholder="ex: 720-251-6378" className="w-[300px] p-2 border rounded-md" value={inputValue.phoneNumber}/>
        </div>
        <div className={styles.labelInputContainer_tw}>
          <label className={styles.label_tw}>Birthdate</label>
          <input name="birthdate" onChange={handleChange} placeholder="ex: 03/02/1990" className="w-[300px] p-2 border rounded-md" value={inputValue.birthdate}/>
        </div>
      </div>
      <div className={styles.email_tw}>
        <label className={styles.label_tw}>Email</label>
        <input name="email" onChange={handleChange} placeholder="ex: jessiethanh.02@gmail.com" className="p-2 border rounded-md w-full" value={inputValue.email}/>
      </div>
      <button className={styles.button_tw} type="submit">Submit</button>
    </form>
  )
}

export default InputForm;