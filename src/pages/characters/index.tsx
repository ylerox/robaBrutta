import CharacterCard from "@/components/characters/CharacterCard"
import { Character } from "@/types/character"
import axios from "axios"
import { useEffect, useState } from "react"

export default function CharacterPage() {

    const [isLoading, setIsLoading] = useState<boolean>()
    const [personaggi, setPersonaggi] = useState<Character[]>([])

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => setPersonaggi(response.data.results))
        .catch(error => console.log(error))
        .finally(()=> setIsLoading(false))
    }, [])
    return <>
    <p>pag personaggi</p>
    <div >
        {isLoading && <p>Caricamento dati....</p>}
        {/* personaggi?.map(personaggio => <CharacterCard character={personaggio}/>)*/}
    </div>
    {personaggi.map(personaggio => <CharacterCard character={personaggio}/>)}
    
    </>
}