
import{ subscribeToHellfireClub } from './firebase/hellfire-clube.js'


const txtName = document.getElementsById('txtName')
const txtEmail = document.getElementsById('txtEmail')
const txtLevel = document.getElementsById('txtLevel')
const txtCharacter = document.getElementsById('txtCharacter')

const btnSubscribe = document.getElementsById('btnSubscribe')


btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await subscribeToHellfireClub (subscription)
    console.log('Inscrito com sucesso: ${subscritionId')
})