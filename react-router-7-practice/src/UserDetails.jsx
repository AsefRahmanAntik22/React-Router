import { Link, useParams } from "react-router"

export default function UserDetails(){
    const paramsData=useParams();
    console.log(paramsData.id);

    return <div style={{ marginLeft: 20 }}>
        <h1>User Detail Page</h1>
        <h2>User Id is : {paramsData.id}</h2>
        <h3><Link to="/user"> Back</Link></h3>
       
    </div>
}