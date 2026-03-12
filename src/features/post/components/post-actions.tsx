import { Delete02Icon, PencilEdit02Icon } from '@hugeicons/core-free-icons'
import PostActionDialog from './post-action-dialog'

export default function PostActions() {
  return (
    <div className='flex shrink-0 items-center gap-2'>
      <PostActionDialog
        triggerIcon={PencilEdit02Icon}
        triggerLabel='Edit post'
        title='Edit item'
      >
        <p>Edit Post Form</p>
      </PostActionDialog>

      <PostActionDialog
        triggerIcon={Delete02Icon}
        triggerLabel='Delete post'
        title='Are you sure you want to delete this item?'
      >
        <p>Delete Post Form</p>
      </PostActionDialog>
    </div>
  )
}
