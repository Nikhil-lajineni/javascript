import usersdata from "./UserData";
import "./Users.css";
function map(){
    return (
        <div className="usersContainer">
        <h2>User data</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas est culpa doloribus, explicabo sequi.</p>
        <button>Get Users</button>
        <div className="usersTable">
            <table rules="rows">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersdata.map(function(user){
                            return (
                                <tr>
                                    <td>
                                        <img src= {user.picture.medium} width={70} height={70}></img>
                                    </td>
                                    <td>
                                     {user.name.title} {user.name.first} {user.name.last}
                                         </td>
                                     <td>{user.gender}</td>
                                     <td>{user.email}</td>
                                </tr>
                            );
                        })
                        
                    };
                </tbody>
            </table>
        </div>
        </div>
        
);
};
export default map;