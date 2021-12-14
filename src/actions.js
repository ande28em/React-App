export const Action = Object.freeze({
  LoadedGuestList: "LoadedGuestList",
  LoadedAlbums: "LoadedAlbums",
  StartedWaiting:"StartedWaiting",
  StoppedWaiting: "StoppedWaiting",
  LoadedGuest: "LoadedGuest",
  RemovedGuest: "RemovedGuest",
});

export function removedGuest(id) {
  return {type: Action.RemovedGuest, payload: id};
}

export function loadedGuestList(allGuests) {
  return {type: Action.LoadedGuestList, payload: allGuests};
}

export function loadedGuest(guest) {
  return {type: Action.LoadedGuest, payload: guest};
}

export function loadedAlbums(albums) {
  return {type: Action.LoadedAlbums, payload: albums};
}

export function updateGuest(id, firstname, lastname) {
  return dispatch => {
    const options = {
      method: 'PATCH',
    };
    fetch(`https://project2.emanderson.me:8443/guests/${id}/${firstname}/${lastname}`, options)
    .then(assertResponse)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        
      }
    });
  };
}

export function addGuest(firstname, lastname){
  const guest = {
    firstname,
    lastname,
  };
  return dispatch => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guest),
    };
    fetch(`https://project2.emanderson.me:8443/guests`, options)
    .then(assertResponse)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        fetchGuests();
        document.location.reload(true);
      }
    });
  };
}

export function removeGuest(id) {
  return dispatch => {
    const options = {
      method: 'DELETE',
    };
    fetch(`https://project2.emanderson.me:8443/guests/${id}`, options)
    .then(assertResponse)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        dispatch(removedGuest(id));
      }
    });
  };
}

export function showProgress() {
  return {type: Action.StartedWaiting};
}

export function hideProgress() {
  return {type: Action.StoppedWaiting};
}

function assertResponse(response) {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

export function fetchGuests() {
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://project2.emanderson.me:8443/guests`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadedGuestList(data.result));
            dispatch(hideProgress());
      })
      .catch(rejected => {
        console.log(rejected);
      });
  };
}

export function fetchGuest(id) {
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://project2.emanderson.me:8443/guests/${id}`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadedGuest(data.result));
            dispatch(hideProgress());
      })
      .catch(rejected => {
        console.log(rejected);
      });
  };
}

