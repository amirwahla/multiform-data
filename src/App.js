import axios from "axios";
import React,{useState} from "react";

function App() {
  const [name, setname] = useState("")
  const [file, setfile] = useState()

  const handleSubmit=(e)=>{
// e.preventDefault()
    const data=new FormData()
    data.append("name",name)
    data.append("file",file)
    console.log(data,"test");
    axios.post("https://httpbin.org/anything",data).then(res=>console.log(res.data)).catch(err=>console.log(err))
  }
  return (
    <div className="App">
     App
<form action="#">
<input type="text" onChange={e=>setname(e.target.value)}/>
<input type="file" onChange={e=>{setfile(e.target.files[0])}}/>

<button onClick={handleSubmit}>submit</button>

</form>
    </div>
  );
}

export default App;
