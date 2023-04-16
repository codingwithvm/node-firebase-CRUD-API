import { getDocUser } from "../firebase/db.js"

async function getUser(req, res) {
    const id = req.params.id

    getDocUser(id)
        .then(response => {
            res.send(response)
        })
}

export default getUser