import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Places =()=>{
    const [places, setPlaces] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/getplaces')
            // .then(res=>res.json())
            .then((data)=>{
                setPlaces(data.data);
            })
    },[])
    return (
       <div>
           <h3 className="text-center m-3">Currently Available Places</h3>
           <div className="d-flex flex-wrap justify-content-center">
              {places.map(place=>
                  <div key={place._id} className="border rounded shadow-lg p-2 m-4">
                      { <img src={place.Image} alt={place._id} width="350px" height="250px"/> }
                      <div className="my-2">Service Name : {place.Name}</div>
                      <div className="my-2">Short Description : { place.Description.slice(0,15)}...</div>
                      <Link to={`/place/${place._id}`}><button className="btn btn-warning">View Details</button></Link>
                  </div>
              )}
           </div>
       </div>
   )
}
export default Places;