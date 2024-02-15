import InputGroup from "./Components/InputGroup"
import Header from "./Components/Header"
import Results from "./Components/results"
import { useState } from "react"
function App() {
  const [invData,setInvData]=useState({
    initialInvestment:1200,
    annualInvestment:200,
    expectedReturn:6,
    duration:10
  })
const validData=invData.duration>=1
  function handleClick(event){
    const {name,value}=event.target
  
    setInvData((prevData)=>{
      return {...prevData,
      [name]:Number(value)
      }
    })
  }

  return (<>
    <Header/>
    <InputGroup handleClick={handleClick} invData={invData}/>
    {!validData&& <p className="center">Please enter valid data</p>}
    {validData&&<Results invData={invData}/>}
    </>
  )
}

export default App
