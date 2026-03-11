import PostItem from './post-item'

export default function PostList() {
  return (
    <section className='custom-scrollbar flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 md:px-8'>
      {[...Array(10).keys()].map((i) => (
        <PostItem
          key={i}
          title='My First Post at CodeLeap Network!'
          username='Victor'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...'
          timeAgo='25m'
        />
      ))}
    </section>
  )
}
