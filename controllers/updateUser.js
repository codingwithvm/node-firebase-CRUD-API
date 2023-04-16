import { updateDataUser } from "../firebase/db.js"

async function updateUser(req, res) {
    const id = req.params.id
    const { username, pass } = req.body
    const data = { username, pass }

    const update = updateDataUser(id, data)
    update.then(response => {
        res.send(response)
    })
}

export default updateUser