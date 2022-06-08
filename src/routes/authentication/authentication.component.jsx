import SignUpForm from '../../components/sign-up-form/sign-up-form-component'
import SignInForm from '../../components/sign-in-form/sign-in-form-component'

import './authentication.styles.scss'

const Authentication = () => {
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

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect()
  //   console.log({ user })
  // }

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
