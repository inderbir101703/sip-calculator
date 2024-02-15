export default function UserInput({type,addClasses,id,handleClick,name,labelText,value,...props}){
    return <span>
        <label htmlFor={id}>{labelText}</label>
    <input id={id} type={type} className={addClasses} name={name} {...props} onChange={handleClick} value={value} /></span>

}
UserInput.defaultProps={
    type:"text",
    id:"input",
    labelText:"Please enter the Value"
}