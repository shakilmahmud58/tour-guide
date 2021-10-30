import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, useParams } from "react-router";
import useAuth from "../hooks/useAuth";


const PlaceDetails=()=>{
    const {id} = useParams();
    const {user,userEmail} = useAuth();
    const [place,setPlace] = useState([]);
    const btnClicked=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/interested_places',{user: user, email:userEmail, Place : place[0], request : 0}).then((res)=>{
            console.log('data added');
        })
    }
    const deleteItem=(id)=>{
        const confirm = window.confirm('Are You really wnat to delete it?')
        if(confirm){
            axios.post('http://localhost:5000/deleteplace',{id:id}).then(res=>{
                //console.log(res.data);
                if(res.data.deletedCount>0)
                {
                    <Redirect to="/home" />
                }
            });
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/place/${id}`).then(res=>{
            console.log(res.data);
            setPlace(res.data);
        })
    },[])
    
    return (
         <div>
             {
                 place.map(item=>
                 <div key={item._id}>
                     <div className="my-4">{item.Name}</div>
                     <img src={item.Image} alt={item._id} width="80%" height="400px"/>
                     <div className="my-4">{item.Description}</div>
                     <div className="my-4">
                         <button type="submit" className="btn btn-success mx-1" onClick={btnClicked}>Interested</button>
                         <button type="submit" className="btn btn-danger mx-1" onClick={ ()=>deleteItem(item._id)}>Delete</button>
                     </div>
                 </div>)

             }

         </div>
    )
}

export default PlaceDetails;