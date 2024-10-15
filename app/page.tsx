'use client'

import { useState } from 'react';
import InputForm from "./components/inputForm/InputForm";
import NameCard from "./components/NameCard";

export interface InputValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthdate: string;
  email: string;
}

export default function Home() {

  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthdate: '',
    email: ''
  });

  const [savedUserInfo, setSavedUserInfo] = useState<InputValues>(inputValue);


  console.log('saved', savedUserInfo)

  return (
    <div className="flex flex-col items-center p-20 bg-gray-50 h-screen">
      <div className="mb-40">
        <InputForm inputValue={inputValue} setInputValue={setInputValue} setSavedUserInfo={setSavedUserInfo} />
      </div>
      {savedUserInfo.firstName ? <NameCard savedUserInfo={savedUserInfo} /> : null}
    </div>
  );
}
