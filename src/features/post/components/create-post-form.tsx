import Button from '@/components/ui/button'
import IconButton from '@/components/ui/icon-button'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Textarea from '@/components/ui/textarea'
import { ImageIcon } from '@hugeicons/core-free-icons'

export default function CreatePostForm() {
  return (
    <div className='flex shrink-0 flex-col gap-4'>
      <h2 className='text-xl font-semibold text-balance md:text-3xl'>
        What&apos;s on your mind?
      </h2>

      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <Label>Title</Label>
          <Input placeholder='How to join CodeLeap' />
        </div>
        <div className='flex flex-col gap-2.5'>
          <Label>Content</Label>
          <Textarea placeholder='Create a good project in the challenge and...' />
        </div>

        <div className='flex items-center justify-between pt-2'>
          <IconButton icon={ImageIcon} aria-label='Attach Image' />

          <Button className='ml-auto px-8'>Create Post</Button>
        </div>
      </form>
    </div>
  )
}
