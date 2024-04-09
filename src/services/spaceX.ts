import { type Doc, type APISpaceXResponse } from '../types/api'


export const getLaunchById = async ({id}: {id: string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
       
   
    
   const launch = (await res.json()) as Doc //la respuesta es de tipo Doc, ver en archivo types/api.ts
    return launch
}

export const getLatestsLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 12
            }
        })
    })
    
    const { docs: launches } = (await res.json()) as APISpaceXResponse
return launches;    
}

//const data = JSON.stringify(await res.json()) Primero pasamos a json la respuesta
//Crear carpeta types/api.ts
//usar quicktype para tipar los datos que trae la API. 
//quitar las comillas del principio y final.
//en quicktype tildar las opciones Typescript, interface only, verify JSON y use types.
//Así tendremos los datos de la API correctamente tipados para importarlos y utilizarlos.