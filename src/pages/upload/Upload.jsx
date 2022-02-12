import React,{useState} from 'react'
import { API } from '../../backend'
import Button from '../../components/button/Button'
import FileInput from '../../components/fileInput/FileInput'
import Loader from '../../components/loader/Loader'
import TextInput from '../../components/textInput/TextInput'
import ImageViewer from '../../components/threeDViewer/ImageViewer'
import classes from './Upload.module.css'

const Upload = () => {
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [loader, setLoader] = useState(false)
  const [inputData,setInputData]=useState({
    name:'',
    price:0,
    error:'',
    success:'',
  })

  const handleInputChange=(e)=>{
    setInputData({...inputData,
    [e.target.name]:e.target.value})
  }

  const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

  const handleSubmitFile = (e) => {
      e.preventDefault();
      if (!selectedFile || inputData.name==='' || inputData.price===""){
        setInputData({...inputData,error:"Enter all fileds"})
      };

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        uploadImage(reader.result)
      };
      reader.onerror = () => {
          console.error("nope");
      };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
        setLoader(true)
      const res=await fetch(`${API}/post`, {
            method: 'POST',
            body: JSON.stringify({ 
            file: base64EncodedImage,
            name:inputData.name,
            price:inputData.price 
          }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(res.status>=200 && res.status<=300){
          setFileInputState('');
          setSelectedFile()
          setInputData({name:'',price:0,error:'',success:'successfully added'})
        }else if(res.status==400){
          setInputData({...inputData,error:"name should be unique"})
        }
        setLoader(false)
    }catch (err) {
      setInputData({...inputData,error:err})
    }
  };

  return (
    <div className={classes.upload__container}>
      <h2 className={classes.h2}>
        Upload a new 3d model
      </h2>

      {inputData.error!=="" && 
      <p className={classes.para}>
        {inputData.error}
      </p>}
      
      {inputData.success!=="" && 
      <p className={classes.added}>
        {inputData.success}
      </p>}

      {loader && <Loader/>}
      <div className={classes.info}>
       
        <div className={classes.info__input}>
          <TextInput 
          type="text"
          placeholder="Enter name"
          name="name"
          handleCahnge={e=>handleInputChange(e)}
          value={inputData.name}
          />
           <TextInput placeholder="Enter price"
           type="number"
           name="price"
           handleCahnge={e=>handleInputChange(e)}
           value={inputData.price}
           />

          <div className={classes.col}>
            <FileInput 
            value="upload" 
            handleChange={handleFileInputChange}
            inputVal={fileInputState}/>
            <Button value="submit" handleClick={handleSubmitFile}/>
          </div>

        </div>
        <div className={classes.preview}>
            {selectedFile && <ImageViewer img={URL.createObjectURL(selectedFile)}/>}
        </div>
      </div>
    </div>
  )
}

export default Upload