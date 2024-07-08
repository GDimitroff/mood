import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-800 text-white/60">
      <ClerkLoading>
        <div>Loading...</div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignUp />
      </ClerkLoaded>
    </div>
  )
}

export default SignUpPage
