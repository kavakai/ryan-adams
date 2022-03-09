const getRyan = () => {
  return fetch("https://calm-headland-82293.herokuapp.com/")
    .then(response => checkResponse(response))
};

const getAlbum = (id) => {
    return fetch(`https://calm-headland-82293.herokuapp.com/album/${id}`)
        .then(response => checkResponse(response))
};

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error("Something went wrong. Refresh and try again.")
    } else {
        return response.json()
    }
};

export { getRyan, getAlbum }