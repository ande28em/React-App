import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGuest, fetchGuest } from "./actions";
import {useState} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function UpdateGuest() {
  const params = useParams();
  const guest = useSelector((state) => state.guest);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuest(params.id));
  }, [dispatch]);

  const[firstN, setFirst] = useState('');
  const[lastN, setLast] = useState('');

  return (
    
    <body style={{textAlign: "center",}}>
      <h2>Update Guest</h2>
      {guest && guest.length > 0 &&
        <span>
            <table style={{textAlign: "center", marginLeft: "auto", marginRight: "auto",}} border = "1" cellPadding = "3">
              {
                guest.map(curr => <tr key = {
                  curr.id
                }>
                  <th>{curr.id}</th>
                  <th>{curr.firstName}</th>
                  <th>{curr.lastName}</th>
                  <th><Link to={`/`}><button type = "button">Return</button></Link></th>
                </tr>)
              }
              <tr>
                <td>{guest[0].id}</td>
                <td><input type="text" id="first" value={firstN} onChange={event => setFirst(event.target.value)} /></td>
                <td><input type="text" id="last" value={lastN} onChange={event => setLast(event.target.value)} /></td>
                <td><button id="submit" onClick = {() => dispatch(updateGuest(guest[0].id, firstN, lastN))}>Update</button></td>
              </tr>
            </table>
        </span>}
      
    </body>
  );
}