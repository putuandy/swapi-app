import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { fetchPeopleDetail } from '@/utils/sw-api'
import { useQuery } from '@tanstack/react-query'
import People from '@/components/People'

export const Route = createFileRoute('/people/$peopleId')({
  component: PeopleDetail,
})

function PeopleDetail() {
    const navigate = useNavigate()
    const { peopleId } = Route.useParams()

    const { isPending, isError, data } = useQuery({
    queryKey: [`people/${peopleId}`],
    queryFn: () => fetchPeopleDetail(peopleId),
  })

    return (
    <main className="relative flex min-h-[100dvh] text-foreground font-base flex-col overflow-hidden items-center bg-background px-5 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className='mx-auto w-container max-w-full mt-24'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='leading-normal text-5xl'>
            Star Wars Character Detail
          </h1>
          <Button onClick={() => {
            navigate({to: '/'})
          }}>Back To People List</Button>
          <div className='flex mt-10 w-full'>
            {isPending && !isError && (
              <p>Fetching Character Detail...</p>
            )}
            {!isPending && isError && (
              <p>Error fetching Character detail</p>
            )}
            {!isPending && !isError && data && (
              <People people={data} />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
