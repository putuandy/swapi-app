import { fetchDataFromUrl } from "@/utils/sw-api"
import { Button } from "./ui/button"
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "./ui/skeleton"
import { getKeyFromUrl } from "@/utils/helper"

const DisplayButton = ({url}:{url:string}) => {
    const { isPending, isError, data } = useQuery({
        queryKey: [getKeyFromUrl(url)],
        queryFn: () => fetchDataFromUrl(url),
    })

    return (
        <>
            {isPending && !isError && (
                <Skeleton className="sm:w-[150px] w-[150px] text-main-foreground bg-main border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none h-8 px-4 py-2" />
            )}
            {!isPending && !isError && data && (
                <Button className="h-8 m-1">{data.name ?? data.title}</Button>
            )}
        </>
    )
}

export default DisplayButton;