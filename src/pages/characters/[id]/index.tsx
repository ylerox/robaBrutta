import { Character } from "@/types/character"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function CharacterDetailPage(){

    const [personaggio, setPersonaggio] = useState<Character>()
    const router = useRouter()
    const charId = router.query.id

    useEffect(() => {
        if (charId !== undefined)
        axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
        .then(response => setPersonaggio(response.data))
        .catch(error => console.log(error))
    }, [charId])

return <>
    <p>{personaggio?.name}</p>
    <img src={personaggio?.image}></img>
    </>
}