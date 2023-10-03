import { Character } from "@/types/character"
import CharacterInfo from "./CharacterInfo"
import styles from "../styles.module.css"
// import { useEffect } from "react"

type Props = {
    character: Character
    // sendResult(value: number): void
}

export default function CharacterCard(props: Props) {
//     useEffect(()=> {
//         const result = 3*3
//         props.sendResult(result)
// }, [])

    return<>

<div className={`${styles.containerCard}`}>
    
<img className={`${styles.imageCard}`} src={props.character.image}></img>
        <a 
        href={`/characters/${props.character.id}`}><p>id: {props.character.id}</p></a>
        {props.character.name == "Morty Smith"? 
        <p>Ciao {props.character.name}</p>:
        <p>Visita dettaglio di: {props.character.name}</p>
    }
    
    <div className={`${styles.captionCard}`}>
    <CharacterInfo id={props.character.id} name={props.character.name}/>
    <div>
    <p>{props.character.species}</p>
    <p>{props.character.status}</p>
    </div>


</div>
</div>



</>
}