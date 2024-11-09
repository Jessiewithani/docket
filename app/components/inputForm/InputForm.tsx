import { Dispatch, SetStateAction, useState } from "react";
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

  const [errors, setErrors] = useState({
    phoneNumber: '',
    birthdate: '',
    email: ''
  })

  const validatePhoneNumber = (number: string) => {
    console.log(`|${inputValue.phoneNumber}|`)
    const phoneRegex = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{3})$/

    //input.phoneNumber --M matches phoneRegex return true
    if (number.match(phoneRegex)) {
      console.log('number', inputValue.phoneNumber)
      return true
    }
    return false
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.match(emailRegex)) {
      return true
    }
    return false
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prevValues) => ({
      ...prevValues,
      [name]: value
    }))

    if (!validatePhoneNumber(inputValue.phoneNumber)) {
      setErrors((prevError) => ({
        ...prevError, phoneNumber: 'Phone number must be 7 digits'
      }))
    } else {
      setErrors((prevError) => ({
        ...prevError, phoneNumber: ''
      }))
    }

    if (!validateEmail(inputValue.email)) {
      setErrors((prevError) => ({
        ...prevError, email: 'Email is invalid!'
      }))
    } else {
      setErrors((prevError) => ({
        ...prevError, email: ''
      }))
    }
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
          <input name="firstName" onChange={handleChange} placeholder="ex: Jessie" className="w-[300px] p-2 border rounded-md" value={inputValue?.firstName}/>
        </div>
        <div className={styles.labelInputContainer_tw}>
          <label className={styles.label_tw}>Last name</label>
          <input name="lastName" onChange={handleChange} placeholder="ex: Le" className="w-[300px] p-2 border rounded-md" value={inputValue?.lastName}/>
        </div>
      </div>
      <div className={styles.inputFields_tw}>
        <div className={styles.labelInputContainer_tw}>
          <label className={styles.label_tw}>Phone number</label>
          <input name="phoneNumber" onChange={handleChange} placeholder="ex: 720-251-6378" className="w-[300px] p-2 border rounded-md" value={inputValue?.phoneNumber} />
          {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber}</p>}
        </div>
        <div className={styles.labelInputContainer_tw}>
          <label className={styles.label_tw}>Birthdate</label>
          <input name="birthdate" onChange={handleChange} placeholder="ex: 03/02/1990" className="w-[300px] p-2 border rounded-md" value={inputValue?.birthdate}/>
        </div>
      </div>
      <div className={styles.email_tw}>
        <label className={styles.label_tw}>Email</label>
        <input name="email" onChange={handleChange} placeholder="ex: jessiethanh.02@gmail.com" className="p-2 border rounded-md w-full" value={inputValue?.email} />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
      </div>
      <button className={styles.button_tw} type="submit">Submit</button>
    </form>
  )
}

export default InputForm;