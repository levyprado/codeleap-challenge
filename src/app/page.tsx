import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Textarea from '@/components/ui/textarea'

export default function HomePage() {
  return (
    <>
      <div className='mx-auto flex h-[95dvh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border'>
        <div className='bg-brand px-6 py-4'>
          <h1 className='text-xl font-bold text-balance text-white'>
            CodeLeap Network
          </h1>
        </div>

        <div className='flex flex-1 flex-col gap-12 overflow-hidden bg-card px-4 py-6 md:px-8'>
          {/* Create Post */}
          <div className='flex shrink-0 flex-col gap-5'>
            <h2 className='text-xl font-semibold text-balance md:text-3xl'>
              What&apos;s on your mind?
            </h2>

            <form className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2.5'>
                <Label>Title</Label>
                <Input placeholder='How to join CodeLeap' />
              </div>
              <div className='flex flex-col gap-2.5'>
                <Label>Content</Label>
                <Textarea placeholder='Create a good project in the challenge and...' />
              </div>

              <Button>Create Post</Button>
            </form>
          </div>

          {/* Posts */}
          <section className='custom-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto pr-2'>
            {[...Array(10).keys()].map((i) => (
              <article
                key={i}
                className='flex shrink-0 flex-col overflow-hidden rounded-xl border bg-card shadow-sm shadow-accent/30'
              >
                <div className='flex items-center justify-between bg-accent px-4 py-3'>
                  <h3 className='leading-tight font-medium text-white md:text-lg'>
                    My First Post at CodeLeap Network!
                  </h3>
                  <div className='flex shrink-0 items-center gap-3'></div>
                </div>

                <div className='flex flex-col gap-2 px-4 py-3'>
                  <div className='flex items-start justify-between'>
                    <span className='font-medium text-muted-foreground'>
                      @Victor
                    </span>
                    <span className='text-sm text-muted-foreground'>25m</span>
                  </div>

                  <p className='leading-relaxed wrap-break-word whitespace-pre-wrap'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis tempore expedita laudantium doloremque illo
                    recusandae, pariatur id eos ab dicta commodi eum, rerum
                    animi obcaecati odit deserunt temporibus nisi quibusdam
                    dolores quas quia necessitatibus officiis. Fuga beatae dicta
                    in sapiente, similique cum labore modi ducimus mollitia.
                    Officia assumenda quis quos.
                  </p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
