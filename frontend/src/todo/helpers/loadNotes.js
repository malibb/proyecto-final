

export const loadNotes = async () =>{
    console.log('Holi');
    const info = []

    const resp = await fetch('http://localhost:3000/api/v1/tasks')
    const data = await resp.json()

    info.push(data)

    return info

}