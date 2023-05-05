const express = require("express")
const axios = require("axios")

const app = express()
const port = 3002

const debug_url = "https://en.wikipedia.org/wiki/Computer"
const random_url = "https://en.wikipedia.org/wiki/Special:Random"

async function getWiki(url) {

    return axios.get(url)
        .then((res) => {
            //console.log("url: " + res.request.res.responseUrl);
            return res.data
        })
        .catch(err => console.warn(err));
}


app.get("/api", async (req, res) => {
    const wiki_data = await getWiki(random_url)
                            .catch(err => console.warn(err))
    res.status(200).send(wiki_data)
})

app.listen(port, () => {
    console.log(`Started listening on port ${port}.`)
})