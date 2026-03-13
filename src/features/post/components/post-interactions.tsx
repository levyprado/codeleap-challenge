import IconButton from '@/components/ui/icon-button'
import { Comment03Icon, FavouriteIcon } from '@hugeicons/core-free-icons'
import { toast } from 'sonner'

export default function PostInteractions() {
  const onClick = () => {
    toast.info('Feature not available in API', { duration: 2000 })
  }

  return (
    <div className='mt-auto flex items-center gap-2 border-t border-border/40 pt-2'>
      <IconButton
        icon={FavouriteIcon}
        onClick={onClick}
        aria-label='Like post'
      />
      <IconButton
        icon={Comment03Icon}
        onClick={onClick}
        label='Comment'
        aria-label='View comments'
      />
    </div>
  )
}
