const axios = require("axios");

axios.get("https://en.wikipedia.org/wiki/Dog")
    .then(res => console.log(res.data))
    .catch(err => console.warn("Error bad", err))