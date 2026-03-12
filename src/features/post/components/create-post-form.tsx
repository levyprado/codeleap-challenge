'use client'

import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import IconButton from '@/components/ui/icon-button'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Textarea from '@/components/ui/textarea'
import { useAuthStore } from '@/features/auth/auth-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { ImageIcon, Loading03Icon } from '@hugeicons/core-free-icons'
import { useForm } from 'react-hook-form'
import { CreatePostFormData, createPostSchema } from '../types'

export default function CreatePostForm() {
  const { username } = useAuthStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
  })

  const onSubmit = async (data: CreatePostFormData) => {
    if (!username) return

    reset()
    console.log(data)
  }

  return (
    <div className='flex shrink-0 flex-col gap-4'>
      <h2 className='text-xl font-semibold text-balance md:text-3xl'>
        What&apos;s on your mind?
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='title'>Title</Label>
          <Input
            id='title'
            type='text'
            placeholder='How to join CodeLeap'
            required
            {...register('title')}
            aria-invalid={!!errors.title}
          />
          {errors.title && (
            <span className='animate-slide-up text-sm font-medium text-destructive'>
              {errors.title.message}
            </span>
          )}
        </div>
        <div className='flex flex-col gap-2.5'>
          <Label htmlFor='content'>Content</Label>
          <Textarea
            id='content'
            placeholder='Create a good project in the challenge and...'
            required
            {...register('content')}
            aria-invalid={!!errors.content}
          />
          {errors.content && (
            <span className='animate-slide-up text-sm font-medium text-destructive'>
              {errors.content.message}
            </span>
          )}
        </div>

        <div className='flex items-center justify-between pt-2'>
          <IconButton icon={ImageIcon} aria-label='Attach Image' />

          <Button
            type='submit'
            disabled={isSubmitting || !isValid}
            className='ml-auto px-8'
          >
            {isSubmitting ? (
              <>
                <Icon icon={Loading03Icon} size={20} className='animate-spin' />
                Creating...
              </>
            ) : (
              'Create Post'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
