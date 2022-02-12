// import React ,{useState} from 'react'

// const App = () => {
  
//   const [fileInputState, setFileInputState] = useState('');
//   const [previewSource, setPreviewSource] = useState('');
//   const [selectedFile, setSelectedFile] = useState();
//   const handleFileInputChange = (e) => {
//       const file = e.target.files[0];
//       previewFile(file);
//       setSelectedFile(file);
//       setFileInputState(e.target.value);
//   };

//   const previewFile = (file) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//           setPreviewSource(reader.result);
//       };
//   };

//   const handleSubmitFile = (e) => {
//       e.preventDefault();
//       if (!selectedFile) return;
//       const reader = new FileReader();
//       reader.readAsDataURL(selectedFile);
//       reader.onloadend = () => {
//         uploadImage(reader.result);
//       };
//       reader.onerror = () => {
//           console.error('AHHHHHHHH!!');
//       };
//   };

//   const uploadImage = async (base64EncodedImage) => {
//     try {
//         await fetch('http://localhost:8000/post', {
//             method: 'POST',
//             body: JSON.stringify({ file: base64EncodedImage,name:"cherios",price:10 }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         setFileInputState('');
//         setPreviewSource('');
//     } catch (err) {
//         console.error(err);
//     }
//   };

//   return (
//     <div>
//             <form onSubmit={handleSubmitFile} className="form">
//                 <input
//                     id="fileInput"
//                     type="file"
//                     name="image"
//                     onChange={handleFileInputChange}
//                     value={fileInputState}
//                     className="form-input"
//                 />
//                 <button className="btn" type="submit">
//                     Submit
//                 </button>
//             </form>
//     </div>
//   )
// }

// export default App