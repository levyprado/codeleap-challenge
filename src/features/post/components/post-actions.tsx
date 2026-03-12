import { Delete02Icon, PencilEdit02Icon } from '@hugeicons/core-free-icons'
import { Post } from '../types'
import DeletePostForm from './delete-post-form'
import EditPostForm from './edit-post-form'
import PostActionDialog from './post-action-dialog'

type PostActionsProps = {
  post: Post
}

export default function PostActions({ post }: PostActionsProps) {
  return (
    <div className='flex shrink-0 items-center gap-2'>
      <PostActionDialog
        triggerIcon={PencilEdit02Icon}
        triggerLabel='Edit post'
        title='Edit item'
      >
        <EditPostForm post={post} />
      </PostActionDialog>

      <PostActionDialog
        triggerIcon={Delete02Icon}
        triggerLabel='Delete post'
        title='Are you sure you want to delete this item?'
      >
        <DeletePostForm postId={post.id} />
      </PostActionDialog>
    </div>
  )
}
