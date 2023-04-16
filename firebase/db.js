import app from "./app.js"

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore"

const db = getFirestore(app)

async function addUser(data) {
    const { username, pass } = data

    const userData = { username, pass }

    try {
        const docRef = await addDoc(collection(db, "users"), userData)

        const message = { message: "Document written", id: docRef.id }
        return message
    } catch (e) {
        const message = { message: "Error adding document: ", error: e }
        return message
    }
}

async function getAllUsers() {
    const querySnapshot = await getDocs(collection(db, "users"))

    const users = []

    querySnapshot.forEach(doc => {
        users.push({ id: doc.id, data: doc.data() })
    })

    return users
}

async function getDocUser(id) {
    const docRef = doc(db, "users", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        const response = {
            message: "User found!",
            data: docSnap.data()
        }

        return response
    } else {
        const reponse = {
            messsage: "User not found!"
        }

        return reponse
    }
}

async function updateDataUser(id, data) {
    const userRef = doc(db, "users", id)

    try {
        await updateDoc(userRef, data)

        return { message: "user update success" }
    } catch (e) {
        return { message: "Error: ", e }
    }
}

async function deleteDataUser(id) {
    const docRef = doc(db, "users", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        await deleteDoc(doc(db, "users", id))

        return { message: "Delete user success" }
    } else {
        return { message: "Delete user error, user not found" }
    }
}

export {
    db,
    addUser,
    getAllUsers,
    getDocUser,
    updateDataUser,
    deleteDataUser
}