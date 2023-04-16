import { addUser } from "../firebase/db.js"

async function registerUser(req, res) {
    addUser(req.body).then(response => {
        res.send({ response })
    })
}

export default registerUser