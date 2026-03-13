import Icon from '@/components/ui/icon'
import IconButton from '@/components/ui/icon-button'
import { POSTS_LIMIT } from '@/lib/constants'
import {
  Comment03Icon,
  Delete02Icon,
  FavouriteIcon,
  PencilEdit02Icon,
  Share01Icon,
} from '@hugeicons/core-free-icons'

export default function PostListSkeleton() {
  return (
    <div className='custom-scrollbar flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 md:px-8'>
      {[...Array(POSTS_LIMIT).keys()].map((i) => (
        <PostItemSkeleton key={i} />
      ))}
    </div>
  )
}

export function PostItemSkeleton() {
  return (
    <div className='flex shrink-0 flex-col overflow-hidden rounded-xl border bg-card shadow-sm shadow-accent/30'>
      <div className='flex h-13 items-center justify-between bg-accent px-4 py-3 md:h-16 md:px-6'>
        <div />

        <div className='flex shrink-0 items-center gap-6 text-white'>
          <Icon icon={PencilEdit02Icon} className='md:size-5' />
          <Icon icon={Delete02Icon} className='md:size-5' />
        </div>
      </div>

      <div className='flex flex-col gap-3 px-4 py-2.5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2.5'>
            <div className='flex size-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent uppercase'>
              L
            </div>
            <div className='h-3 w-24 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700' />
          </div>

          <div className='h-3 w-10 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700' />
        </div>

        <div className='flex flex-col gap-2'>
          {[...Array(3).keys()].map((i) => (
            <div
              key={i}
              className='h-4 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700'
            />
          ))}
          <div className='h-4 w-2/5 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-700' />
        </div>

        <div className='mt-auto flex items-center gap-2 border-t border-border/40 pt-2'>
          <IconButton
            disabled
            icon={FavouriteIcon}
            label='0'
            aria-label='Like'
          />
          <IconButton disabled icon={Comment03Icon} label='Comment' />
          <IconButton
            disabled
            icon={Share01Icon}
            className='ml-auto'
            aria-label='Share'
          />
        </div>
      </div>
    </div>
  )
}
