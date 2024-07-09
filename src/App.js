import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Gallery from './Galary';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(()=>{
    },[])
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(  
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }
  return (
    <div style={{backgroundColor:"pink"}}>
      <center>
      <h1 style={{color:"blue"}}>Gallery Snapshot</h1><br></br>
        <marquee style={{color:"green"}}><h1>Search Whatever You Want</h1></marquee><br></br>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" style={{height:"25px",borderRadius:"5px"}} onChange={changeHandler} value={search}/><br /><br />
          <input placeholder='Search' style={{height:"20px",backgroundColor:"blue",color:"white",borderRadius:'5px'}} type="submit" name="Search" />
        </form>
        <br />
        {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
      </center>
    </div>
  )
}

export default App
