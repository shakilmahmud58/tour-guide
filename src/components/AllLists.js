import axios from 'axios';
import { useEffect, useState } from 'react';

const AllLists = ()=>{
    const [lists,setLists]= useState([]);
    const acceptRequest=(id)=>{
    
        axios.post('http://localhost:5000/acceptrequest',{id:id}).then(res=>{
            //console.log(res.data);
            if(res.data.modifiedCount>0)
            {
                getLists();
            }
        });
    }
    
    const deleteRequest=(id)=>{
        const confirm = window.confirm('Are You really wnat to delete it?')
        if(confirm){
            axios.post('http://localhost:5000/deleterequest',{id:id}).then(res=>{
                //console.log(res.data);
                if(res.data.deletedCount>0)
                {
                    const newLists = lists.filter((item)=>{return item._id != id});
                    setLists(newLists);
                }
            });
        }
    }
    const getLists=()=>{
        axios.get('http://localhost:5000/requestlists').then(res=>{
            console.log(res.data);
            setLists(res.data);
        })
    }
    useEffect(()=>{
       getLists();
    },[])
    return(
        <div style={{minHeight:"400px"}}>
            <div className="d-flex justify-content-around my-3">
                <div>Username</div>
                <div>User Email</div>
                <div>Requested PLace</div>
                <div>Status</div>
                <div></div>
            </div>
            {
               <div className="my-5"> {lists.length?'':"No item available right now" }</div>
            }
            { 
              lists.map((item)=>
              <div key={item._id} className="d-flex justify-content-around my-2">
                  <div>{item.user}</div>
                  <div>{item.email}</div>
                  <div>{item.Place.Name} (Id:{item.Place._id})</div>
                  <div>{item.request? 'Request accpted': 'Pending'}</div>
                  <div>
                      {item.request? '' :<button className="btn btn-success" onClick={ ()=>acceptRequest(item._id) }>Accept</button> }
                      <button className="btn btn-danger mx-2" onClick={ ()=>deleteRequest(item._id) }>Delete</button>
                  </div>
              </div>)

            }
        </div>
    )
}
export default AllLists;