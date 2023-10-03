type Props = {
    id: number,
    name: string,
    species: string,
    status: string
}


export default function CharacterInfo (prop: Props) {
    return <>
    <a href={`/characters/${prop.id}`}>
    <div>
    <p>specie: {prop.species}</p>
    <p>status: {prop.status}</p>
    </div>
    </a>

    </>

}