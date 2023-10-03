type Props = {
    id: number,
    name: string,
}


export default function CharacterInfo (prop: Props) {
    return <>
    <a href={`/characters/${prop.id}`}><p>id: {prop.id}</p></a>
    
    <p>{prop.name}</p>


    </>

}