export const Action = Object.freeze({
  LoadedGuestList: "LoadedGuestList",
  LoadedAlbums: "LoadedAlbums",
  StartedWaiting:"StartedWaiting",
  StoppedWaiting: "StoppedWaiting",
});

export function loadedGuestList(allGuests) {
  return {type: Action.LoadedGuestList, payload: allGuests};
}

export function loadedAlbums(albums) {
  return {type: Action.LoadedAlbums, payload: albums};
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

