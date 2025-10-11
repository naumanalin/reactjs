import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="wrapper min-h-screen flex items-center justify-center">
        <SignIn />
    </section>
  )
}