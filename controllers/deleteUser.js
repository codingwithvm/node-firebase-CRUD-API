import { deleteDataUser } from "../firebase/db.js"

async function deleteUser(req, res) {
    const id = req.params.id

    deleteDataUser(id)
        .then(response => {
            res.send(response)
        })
}

export default deleteUser