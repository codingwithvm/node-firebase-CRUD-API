import { getAllUsers } from '../firebase/db.js'

async function getUsers(req, res) {

    getAllUsers()
        .then(users => {
            res.send({ status: "ok", users })
        })
}

export default getUsers