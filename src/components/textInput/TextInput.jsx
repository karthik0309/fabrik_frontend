import classes from './TextInput.module.css'

const TextInput=({type,placeholder,handleCahnge,name,value})=>{
    return(
        <div>
            <input type={type}
            placeholder={placeholder}
            className={classes.input__field}
            onChange={handleCahnge}
            name={name}
            value={value}
            />
        </div>
    )
}

export default TextInput