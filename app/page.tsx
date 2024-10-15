'use client'

import { useState } from 'react';
import InputForm from "./components/inputForm/InputForm";
import NameCard from "./components/nameCard/NameCard";
import * as styles from './page.tailwind';

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

  return (
    <div className={styles.pageContainer_tw}>
      <div className={styles.inputContainer_tw}>
        <InputForm inputValue={inputValue} setInputValue={setInputValue} setSavedUserInfo={setSavedUserInfo} />
      </div>
      {savedUserInfo.firstName ? <NameCard savedUserInfo={savedUserInfo} /> : null}
    </div>
  );
}
