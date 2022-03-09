const getRyan = () => {
  return fetch("https://dashboard.heroku.com/apps/calm-headland-82293/")
    .then(response => checkResponse(response))
};

const getAlbum = (id) => {
    return fetch(`https://dashboard.heroku.com/apps/calm-headland-82293/${id}`)
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