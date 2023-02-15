const resBtn = document.querySelector('button')
const list = document.querySelector('ul')

const baseURL = `http://swapi.dev/api/`

const clickStr = () =>{
    console.log("Button Clicked")
}

const aldCallback = ({ data: Alderaan }) => displayAlderaan(Alderaan)
const errCallback = err => console.log(err)

const displayAlderaan = obj =>{
    console.log(obj.results[0])
    let { residents } = obj.results[0]
    console.log(residents)
    displayPeople(residents)
    
}

const displayPeople = arr  =>{
    
    for (i = 0; i < arr.length; i++){
        axios.get(arr[i]).then(response =>{
            let peeps = response.data.name
            console.log(peeps)
            // let { name } = response.data
            
            let listItem = document.createElement('li')
            listItem.textContent = peeps

            list.appendChild(listItem)
        })
        .catch(err => {err})
    }
}


const aldReq = () => axios.get(baseURL + 'planets/?search=Ald').then(aldCallback).catch(errCallback)











resBtn.addEventListener('click', aldReq)