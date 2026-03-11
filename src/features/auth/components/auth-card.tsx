import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import { siteConfig } from '@/lib/constants'

export default function AuthCard() {
  return (
    <div className='mx-auto flex w-full max-w-lg animate-slide-up flex-col gap-6 rounded-xl border bg-card p-6 shadow-md md:p-8'>
      <h2 className='text-2xl leading-tight font-medium text-balance md:text-3xl'>
        Welcome to{' '}
        <span className='text-brand font-semibold'>{siteConfig.name}</span>!
      </h2>

      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2.5'>
          <Label>Please enter your username</Label>
          <Input placeholder='levyprado' />
        </div>

        <Button className='mt-2'>Enter</Button>
      </form>
    </div>
  )
}
