import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGuests } from "./actions";

export function GuestList() {
  const allGuests = useSelector((state) => state.allGuests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGuests());
  }, [dispatch]);
  let items = []
  if (allGuests != null && allGuests.length > 0){
    for (let i = 0; i < allGuests.length; i++){
      items.push(<p>ID {allGuests[i].id} : {allGuests[i].firstName} {allGuests[i].lastName}</p>)
    }
  }

  return (
    <>
      <h2>Guest List</h2>
      {allGuests && allGuests.length > 0 &&
        <span>
          {items}
        </span>}
    </>
  );
}