type PostItemProps = {
  title: string
  username: string
  content: string
  timeAgo: string
}

export default function PostItem({
  title,
  username,
  content,
  timeAgo,
}: PostItemProps) {
  return (
    <article className='flex shrink-0 flex-col overflow-hidden rounded-xl border bg-card shadow-sm shadow-accent/30'>
      <div className='flex items-center justify-between bg-accent px-4 py-3'>
        <h3 className='leading-tight font-medium text-white md:text-lg'>
          {title}
        </h3>
        <div className='flex shrink-0 items-center gap-3'></div>
      </div>

      <div className='flex flex-col gap-2 px-4 py-3'>
        <div className='flex items-start justify-between'>
          <span className='font-medium text-muted-foreground'>@{username}</span>
          <span className='text-sm text-muted-foreground'>{timeAgo}</span>
        </div>

        <p className='leading-relaxed wrap-break-word whitespace-pre-wrap'>
          {content}
        </p>
      </div>
    </article>
  )
}
