import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-800 text-white/60">
      <ClerkLoading>
        <div>Loading...</div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
    </div>
  )
}

export default SignInPage
