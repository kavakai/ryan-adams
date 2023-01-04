const getRyan = () => {
  return fetch("https://ryan-adams-albums-g9fqkiltm-kavakai.vercel.app/")
    .then(response => checkResponse(response))
};

const getAlbum = (id) => {
    return fetch(`https://ryan-adams-albums-g9fqkiltm-kavakai.vercel.app/${id}`)
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