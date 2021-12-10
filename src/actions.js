export const Action = Object.freeze({
  LoadedGuestList: "LoadedGuestList",
  LoadedAlbums: "LoadedAlbums",
  StartedWaiting:"StartedWaiting",
  StoppedWaiting: "StoppedWaiting",
  AddConfirm: "AddConfirm",
});

export function loadedGuestList(allGuests) {
  return {type: Action.LoadedGuestList, payload: allGuests};
}

export function loadedAlbums(albums) {
  return {type: Action.LoadedAlbums, payload: albums};
}

export function addGuest(firstname, lastname){
  console.log("names ", firstname, lastname);
  const guest = {
    firstname,
    lastname,
  };
  console.log("guest ", guest);
  return dispatch => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guest),
    };
    console.log("options ", options);
    fetch(`https://project2.emanderson.me:8443/guests`, options)
    .then(assertResponse)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        console.log("true ", data.ok);
        console.log("result ", data.result);
      }
    });
  };
}

export function addConfirm(guest){
  return {type: Action.AddConfirm, payload: guest};
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
  console.log('fetchGuests')
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://project2.emanderson.me:8443/guests`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(loadedGuestList(data.result));
            dispatch(hideProgress());
      })
      .catch(rejected => {
        console.log(rejected);
      });
  };
}

export function fetchOneGuest(guest) {
  console.log('fetchOneGuest')
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://project2.emanderson.me:8443/guests/${guest}`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(loadedGuestList(data.result));
            dispatch(hideProgress());
      })
      .catch(rejected => {
        console.log(rejected);
      });
  };
}

