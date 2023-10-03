import { Episode } from "@/types/episode"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type ApiResponse = {
    data: Episode
}

export default function EpisodePage() {

    const router = useRouter()
    const episodeId = router.query.id
    const [episode, setEpisode] = useState<Episode>()

    useEffect(()=> {
        if (episodeId !== undefined)
        axios.get(`https://ruckandmortyapi.com/api/episode/${episodeId}`)
        .then((response: ApiResponse) => setEpisode(response.data))
        .catch(error => console.log(error))
    },[episodeId]) 

    return <>
    <p>Episodio: {episodeId} {episode?.name}</p>
    </>
}