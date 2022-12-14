import app from "./firebase/app.js"
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export  async function subscribeToHellfireClub(subscription) {
    const db = getfirestore(app)
    const hellfireCLubCollection = collection (db,'hellfire-clube')
    const docRef = await addDoc(hellfireCLubCollection, subscription)
    return docRef.id 
}