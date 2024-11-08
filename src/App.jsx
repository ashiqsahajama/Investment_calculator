import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import Results from "./components/Result"
import { useState } from "react";
function App() {
  const [userinfo,setUserInfo] = useState({
    initialInvestment:1000,
    annualInvestment:6000,
    expectedReturn:10,
    duration:6,
  });

  const inputIsValid = userinfo.duration>=1;
  
  function handleUserInfo(inputIdentifier,newValue){
    setUserInfo(prevInfo =>{
        return{
            ...prevInfo,
            [inputIdentifier]:+newValue
        }})
  }

  return (
    <div id="root">
      <Header/>
     <UserInfo onChange={handleUserInfo} userinfo={userinfo}/>
     {!inputIsValid&&<p className="center">Invalid duration</p>}
     {inputIsValid&&<Results userdata ={userinfo}/>}
    </div>
  )
}

export default App
