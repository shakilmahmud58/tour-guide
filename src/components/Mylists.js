import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const Mylists = ()=>{
    const [lists,setLists]= useState([]);
    const {userEmail} = useAuth();   
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
        axios.post('http://localhost:5000/mylists',{email:userEmail}).then(res=>{
            console.log(res.data);
            setLists(res.data);
        })
    }
    useEffect(()=>{
       getLists();
    },[])
    return(
        <div style={{minHeight:"400px"}}>
            <div className="d-flex justify-content-between my-3">
                <div className="ms-5">Requested Place</div>
                <div>Status</div>
                <div></div>
            </div>
            {
               <div className="my-5"> {lists.length?'':"No item available right now" }</div>
            }
            { 
              lists.map((item)=>
              <div key={item._id} className="d-flex justify-content-between my-2">
                  <div className="ms-5">{item.Place.Name} (Id:{item.Place._id})</div>
                  <div>{item.request? 'Request accpted': 'Pending'}</div>
                  <div>
                      <button className="btn btn-danger mx-2" onClick={ ()=>deleteRequest(item._id) }>Delete</button>
                  </div>
              </div>)

            }
        </div>
    )
}
export default Mylists;