import UserInput from "./userInput"
export default function InputGroup({handleClick,invData}){
   
    return <form id="user-input">
        <span className="input-group">
            <UserInput type="number" required name="initialInvestment" labelText="Initial investment" handleClick={handleClick} value={invData.initialInvestment}/>
            <UserInput type="number" required name="annualInvestment" labelText="Annual Investment" handleClick={handleClick} value={invData.annualInvestment}/>
       </span>
       <span className="input-group">
       <UserInput type="number" required name="expectedReturn" labelText="Expected Return" handleClick={handleClick} value={invData.expectedReturn}/>
       <UserInput type="number" required name="duration" labelText="Duration" handleClick={handleClick} value={invData.duration}/>
       </span>

   
  </form>
}
