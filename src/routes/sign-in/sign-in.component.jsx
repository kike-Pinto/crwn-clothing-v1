import {
  auth, //<= is what getRedirectResult is going the get
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form-component'

const SignIn = () => {
  // useEffectAsync(async () => {
  //   const response = await getRedirectResult(auth)
  //   // console.log(response)
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }, [])

  // function useEffectAsync(effect, inputs) {
  //   useEffect(() => {
  //     effect()
  //   }, inputs)
  // }

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect()
  //   console.log({ user })
  // }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Poogle Popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
