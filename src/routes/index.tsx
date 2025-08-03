import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { fetchPeopleList } from '@/utils/sw-api'
import { getIdFromUrl } from '@/utils/helper'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const navigate = useNavigate();

  const { isPending, isError, data } = useQuery({
    queryKey: ['peoples'],
    queryFn: fetchPeopleList,
  })

  const goToPeopleDetail = (peopleId:string) => {
    navigate({
      to: '/people/$peopleId',
      params: { peopleId },
    })
  }

  return (
    <main className="relative flex min-h-[100dvh] text-foreground font-base flex-col overflow-hidden items-center bg-background px-5 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className='mx-auto w-container max-w-full mt-24'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='leading-normal text-5xl'>
            Star Wars Character List
          </h1>
          <div className='flex flex-row mt-10 max-w-full'>
            {isPending && !isError && (
              <p>Fetching Star Wars People Data...</p>
            )}
            {isError && (
              <p>Error When Fetching People Data.</p>
            )}
            {!isPending && !isError && data && (
              <div className='w-full flex flex-row flex-wrap justify-center'>
                {data.map((people:any) => (
                  <Button className='m-2 w-60' onClick={() => {
                    goToPeopleDetail(getIdFromUrl(people.url));
                  }}>{people.name}</Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
