'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfinitePosts } from '../queries'
import PostItem from './post-item'
import { PostItemSkeleton } from './post-list-skeleton'

export default function PostList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePosts()

  const { ref, inView } = useInView({ threshold: 1.0 })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  const posts = data.pages.flatMap((page) => page.results)

  return (
    <section className='custom-scrollbar flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 md:px-8'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

      <div ref={ref} className='w-full shrink-0' aria-hidden />

      {isFetchingNextPage && <PostItemSkeleton />}
    </section>
  )
}
