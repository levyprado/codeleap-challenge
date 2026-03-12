'use client'

import { usePosts } from '../queries'
import PostItem from './post-item'

export default function PostList() {
  const { data } = usePosts()
  const posts = data.results

  return (
    <section className='custom-scrollbar flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 md:px-8'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  )
}
