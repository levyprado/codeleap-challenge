import Button from '../ui/button'
import Input from '../ui/input'
import Label from '../ui/label'
import Textarea from '../ui/textarea'

export default function CreatePostForm() {
  return (
    <div className='flex shrink-0 flex-col gap-5'>
      <h2 className='text-xl font-semibold text-balance md:text-3xl'>
        What&apos;s on your mind?
      </h2>

      <form className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2.5'>
          <Label>Title</Label>
          <Input placeholder='How to join CodeLeap' />
        </div>
        <div className='flex flex-col gap-2.5'>
          <Label>Content</Label>
          <Textarea placeholder='Create a good project in the challenge and...' />
        </div>

        <Button className='ml-auto px-8'>Create Post</Button>
      </form>
    </div>
  )
}
