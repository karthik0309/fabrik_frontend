import React from 'react'
import classes from './FileInput.module.css'

const FileInput = ({value,handleChange,inputVal}) => {
  return (
    <div>
        <label htmlFor="fileInput" className={classes.file}>
            <i className="fas fa-plus"></i>
            <p>
                {value}
            </p>
        </label>
        <input
            id="fileInput"
            type="file"
            accept="image"
            name="picture"
            style={{ display: "none" }}
            onChange={e=>handleChange(e)}
            value={inputVal}
          />    
    </div>
  )
}

export default FileInput