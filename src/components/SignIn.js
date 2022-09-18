import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <div>
        <Button onClick={signInWithGoogle}>Sign in with google</Button>
    </div>
  )
}

export default SignIn
