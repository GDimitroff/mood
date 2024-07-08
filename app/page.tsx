import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-800 text-white">
      <div className="max-auto w-full max-w-[800px]">
        <h1 className="mb-4 text-6xl">
          <span className="text-pastelPink">Reflect.</span>{' '}
          <span className="text-pastelGreen">Understand.</span>{' '}
          <span className="text-pastelBlue">Grow.</span>
        </h1>
        <p className="mb-4 text-xl text-white/60">
          Welcome to Mood, the ultimate journal app. Using the power of AI, Mood analyzes your
          entries to track and understand your emotions. Start your journey towards emotional
          clarity today.
        </p>
        <div>
          <Link href="/journal">
            <button className="text-xlg rounded-lg bg-purple-200 px-4 py-2 text-gray-800 transition-all hover:bg-purple-400">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
