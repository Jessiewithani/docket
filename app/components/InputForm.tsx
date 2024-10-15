import { Dispatch, SetStateAction } from "react";

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
    <form className="bg-white shadow-lg gap-4 py-10 flex flex-col items-center px-10 " onSubmit={handleSubmit} role="form">
      <div className="flex gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm">First name</label>
          <input name="firstName" onChange={handleChange} placeholder="ex: Jessie" className="w-[300px] p-2 border rounded-md" value={inputValue.firstName}/>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm">Last name</label>
          <input name="lastName" onChange={handleChange} placeholder="ex: Le" className="w-[300px] p-2 border rounded-md" value={inputValue.lastName}/>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm">Phone number</label>
          <input name="phoneNumber" onChange={handleChange} placeholder="ex: 720-251-6378" className="w-[300px] p-2 border rounded-md" value={inputValue.phoneNumber}/>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm">Birthdate</label>
          <input name="birthdate" onChange={handleChange} placeholder="ex: 03/02/1990" className="w-[300px] p-2 border rounded-md" value={inputValue.birthdate}/>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
          <label className="text-sm">Email</label>
          <input name="email" onChange={handleChange} placeholder="ex: jessiethanh.02@gmail.com" className="p-2 border rounded-md w-full" value={inputValue.email}/>
        </div>
      <button className="hover:bg-gray-300 rounded-md bg-gray-200 text-black py-2 px-4 mt-4" type="submit">Submit</button>
    </form>
  )
}

export default InputForm;