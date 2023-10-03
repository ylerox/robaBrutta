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
<div className={`${styles.captionCard}`}>
        <a 
        href={`/characters/${props.character.id}`}>
        <p>{props.character.name}</p>
        <p>id: {props.character.id} </p>

        </a>
    
    
    <CharacterInfo id={props.character.id} name={props.character.name} species={props.character.species} status={props.character.status}/>



</div>
</div>



</>
}