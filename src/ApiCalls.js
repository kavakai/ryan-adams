const getRyan = () => {
  return fetch("http://localhost:4020/")
    .then(response => checkResponse(response))
};

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error("Something went wrong. Refresh and try again.")
    } else {
        return response.json()
    }
};

export { getRyan }