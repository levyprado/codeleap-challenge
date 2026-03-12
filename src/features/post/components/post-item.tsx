import Icon from '@/components/ui/icon'
import IconButton from '@/components/ui/icon-button'
import { formatPostDate } from '@/lib/utils'
import {
  Comment03Icon,
  Delete02Icon,
  FavouriteIcon,
  PencilEdit02Icon,
  Share01Icon,
} from '@hugeicons/core-free-icons'
import { Post } from '../types'

type PostItemProps = {
  post: Post
}

export default function PostItem({ post }: PostItemProps) {
  const initial = post.username[0]

  return (
    <article className='flex shrink-0 animate-slide-up flex-col overflow-hidden rounded-xl border bg-card shadow-sm shadow-accent/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md'>
      <div className='flex items-center justify-between gap-1 bg-accent px-4 py-3'>
        <h3 className='leading-tight font-medium tracking-wide text-white md:text-lg'>
          {post.title}
        </h3>
        <div className='flex shrink-0 items-center gap-2'>
          <button
            aria-label='Edit post'
            className='rounded-lg p-1.5 text-white transition-colors hover:bg-white/10 md:p-2'
          >
            <Icon icon={PencilEdit02Icon} className='md:size-5' />
          </button>
          <button
            aria-label='Delete post'
            className='rounded-lg p-1.5 text-white transition-colors hover:bg-white/10 md:p-2'
          >
            <Icon icon={Delete02Icon} className='md:size-5' />
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-2 px-4 py-2.5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2.5'>
            <div className='flex size-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent uppercase'>
              {initial}
            </div>
            <span className='font-medium tracking-tight text-muted-foreground'>
              {post.username}
            </span>
          </div>
          <span className='text-sm font-medium text-muted-foreground'>
            {formatPostDate(post.created_datetime)}
          </span>
        </div>

        <p className='leading-relaxed wrap-break-word whitespace-pre-wrap'>
          {post.content}
        </p>

        <div className='mt-auto flex items-center gap-2 border-t border-border/40 pt-2'>
          <IconButton icon={FavouriteIcon} label='24' aria-label='Like' />
          <IconButton icon={Comment03Icon} label='Comment' />
          <IconButton
            icon={Share01Icon}
            className='ml-auto'
            aria-label='Share'
          />
        </div>
      </div>
    </article>
  )
}
