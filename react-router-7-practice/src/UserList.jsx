import { Link } from "react-router"

export default function UserList(){
const userData=[
      {id:1,name:'Antik'},
        {id:2,name:'Asef'},
        {id:3,name:'Rahman'},
        {id:4,name:'Faysal'},
        {id:5,name:'Alve'},
        {id:6,name:'Ainea'},
]
    return <div style={{ marginLeft: 20 }}>
        <h1>User list Page</h1>
        {
            userData.map((item)=>(
                <div>
                <h4><Link to={"/user/"+item.id}>{item.name}</Link></h4>
                </div>
            ))
        }
    </div>
}