import { Children, createContext, useContext, useState } from "react";


export const userContext = createContext({});


const ContextComponent = ({ children }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [inputsValues, setInputValues] = useState([]);


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
    setInputValues
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


