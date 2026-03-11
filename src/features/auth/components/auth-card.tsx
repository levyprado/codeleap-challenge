import { siteConfig } from '@/lib/constants'
import SignupForm from './signup-form'

export default function AuthCard() {
  return (
    <div className='mx-auto flex w-full max-w-lg animate-slide-up flex-col gap-6 rounded-xl border bg-card p-6 shadow-md md:p-8'>
      <h2 className='text-2xl leading-tight font-medium text-balance md:text-3xl'>
        Welcome to{' '}
        <span className='text-brand font-semibold'>{siteConfig.name}</span>!
      </h2>

      <SignupForm />
    </div>
  )
}
