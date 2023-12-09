import { useState } from "react";
import "./App.css"
function App() {

  const[activity,setactivity] = useState("");
  const[listdata,setlistdata] = useState([])
  
  function addactivity(){
    setlistdata((listdata)=>{
      const data =[...listdata,activity]
     console.log(data);
     setactivity("");
     return data;
    })
  }

  function removeactivity(i){
     const data1 = listdata.filter((elm,id)=>{
        return  i!= id;
     })
     setlistdata(data1)
  }

  
  function removeall(){
    setlistdata('')
  }


  return (
    <div >
       <div className="container">
            <div className="parent_container">
             <div className="heading">
             <h1>TODO LIST</h1>
             </div>
               <input type="text" placeholder="Add your Item" className="input" value={activity} onChange={(e)=>{
                setactivity(e.target.value)
               }}/>
               <button className="btn" onClick={addactivity}>ADD</button>
               { listdata.length == 0 ? <h2 className="heading">No items here</h2> :
                  <h2 className="heading">Here is your list</h2>
               }
               {listdata!=[] && listdata.map((data,i)=>{
                  return(
                     <>
                       <div key={i} className="newinput">{data}</div>
                       <button className="btn2" onClick={()=>removeactivity(i)}>Remove</button>  
                     </>
                  )
                    
               }) }
               { listdata.length >= 1 &&
                 <div className="btnlast">
                 <button className="btn1" onClick={removeall}>Remove All</button>
                 </div>
               }
          
              </div>
       </div>
    </div>
  );
}

export default App;
