import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import { Button, Input } from '@material-ui/core'
import { db, auth } from '../firebase'




function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        console.log(photoURL)
    } 
  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input value={msg} onChange={e => setMsg(e.target.value)} placeholder="Message..."/>
        <Button type="submit" >Send</Button>
      </form>
    </div>
  )
}

export default SendMessage
