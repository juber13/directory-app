import { Children, createContext, useContext, useEffect, useState } from "react";


export const userContext = createContext({});


const ContextComponent = ({ children }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [inputsValues, setInputValues] = useState(JSON.parse(localStorage.getItem('userInfo')) || []);
  const [show , setShow] = useState(true);


  const addLocalStorage = () => {
    localStorage.setItem('userInfo', JSON.stringify(inputsValues));
  }

  useEffect(() => {
    addLocalStorage()
  },[inputsValues])
  



  const data = {
    name,
    dob,
    aadhar,
    phone,
    age,
    setName,
    setDob,
    setAadhar,
    setPhone,
    setAge,
    inputsValues,
    setInputValues,
    show,
    setShow
  }

  return (
    <userContext.Provider value={{ data }}>
      {children}
    </userContext.Provider>
  )
}

export const getUserContext = () => {
  return useContext(userContext)
}

export default ContextComponent;


