import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGuest, fetchGuests, removeGuest } from "./actions";
import { Link } from "react-router-dom";
import {useState} from "react";

export function GuestList() {
  const allGuests = useSelector((state) => state.allGuests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);

  const[firstN, setFirst] = useState('');
  const[lastN, setLast] = useState('');

  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      </head>
    <body style={{textAlign: "center",}}>
      <h2>Guest List</h2>
      {allGuests && allGuests.length > 0 &&
        <span>
            <table style={{textAlign: "center", marginLeft: "auto", marginRight: "auto",}} border = "1" cellPadding = "3">
              <tr>
                <th>Guest ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
              {
                allGuests.map(curr => <tr key = {
                  curr.id
                }>
                  <td>{curr.id}</td>
                  <td>{curr.firstName}</td>
                  <td>{curr.lastName}</td>
                  <td><button id="delete" onClick = {() => dispatch(removeGuest(curr.id))}>Delete</button></td>
                  <td><Link to={`/update/${curr.id}`}><button type = "button">Update</button></Link></td>
                </tr>)
              }
              <tr>
                <td>{allGuests[allGuests.length - 1].id + 1}</td>
                <td><input type="text" id="first" value={firstN} onChange={event => setFirst(event.target.value)} /></td>
                <td><input type="text" id="last" value={lastN} onChange={event => setLast(event.target.value)} /></td>
                <td><button id="submit" onClick = {() => dispatch(addGuest(firstN, lastN))}>Insert</button></td>
                <td><Link to={`/print`}><button type = "button">Print</button></Link></td>
              </tr>
            </table>
        </span>}
      
    </body>
    </html>
  );
}