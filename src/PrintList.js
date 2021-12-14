import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGuests } from "./actions";
import { Link } from "react-router-dom";

export function Print() {
  const allGuests = useSelector((state) => state.allGuests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);

  return (
    
    <body style={{textAlign: "center",}}>
      <h2>Guest List</h2>
      {allGuests && allGuests.length > 0 &&
        <span>
            <table style={{textAlign: "center", marginLeft: "auto", marginRight: "auto",}} border = "1" cellPadding = "3">
              <tr>
                <th>Guest ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th><Link to={`/`}><button type = "button">Exit</button></Link></th>
              </tr>
              {
                allGuests.map(curr => <tr key = {
                  curr.id
                }>
                  <td>{curr.id}</td>
                  <td>{curr.firstName}</td>
                  <td>{curr.lastName}</td>
                  <td>&nbsp;</td>
                </tr>)
              }
            </table>
        </span>}
      
    </body>
  );
}