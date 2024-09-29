import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyListTable from "./MyListTable/MyListTable";


const MyList = () => {
     const { user } = useContext(AuthContext);
     const [item, setItem] = useState([])


     useEffect(() => {
          fetch(`http://localhost:5000/myList/${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    setItem(data)

               })
     }, [user?.email])
     return (
          <div className="mx-10 mt-4">
               {
                    item.map(spot => <MyListTable spot={spot} key={spot._id}></MyListTable>)
               }
          </div>
     );
};

export default MyList;