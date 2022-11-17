let arrPeople = [
    {
        name: 'Matheus',
        nationality: 'Brasileiro',
        profession: 'Software Developer',
        age: 27,
        likeJavaScript: true
    },
    {
        name: 'Jão',
        nationality: 'Americano',
        profession: 'Estudante',
        age: 15,
        likeJavaScript: false
    },
    {
        name: 'Pedro',
        nationality: 'Brasileiro',
        profession: 'Developer',
        age: 19,
        likeJavaScript: true
    },
    {
        name: 'Judite',
        nationality: 'Brasileiro',
        profession: 'Atendente de Telemarketing',
        age: 31,
        likeJavaScript: false
    },
    {
        name: 'Maria',
        nationality: 'Portuguesa',
        profession: 'Software Developer',
        age: 15,
        likeJavaScript: true
    }
]
function filteredTable() {
    document.getElementById('table').innerHTML =
        `
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Nacionalidade</th>
                    <th>Profissão</th>
                    <th>Idade</th>
                    <th>Gosta de JavaScript</th>
                </tr> 
            </table>
        `
    const filteredArray = filterConditions()
    for (let i = 0; i < filteredArray.length; i++) {
        document.getElementById('table').innerHTML +=
            ` 
            <table>  
                <tr> 
                    <td>${filteredArray[i].name}</td>
                    <td>${filteredArray[i].nationality}</td>
                    <td>${filteredArray[i].profession}</td>
                    <td>${filteredArray[i].age}</th>
                    <td>${filteredArray[i].likeJavaScript}</td>
                </tr> 
            </table>   
        `
    }
}

function filterConditions() {
    const likeJavaScript = document.getElementById('likeJavaScript')
    const developer = document.getElementById('developer')
    const brazilian = document.getElementById('brazilian')
    const greaterThan = document.getElementById('greaterThan')

    let arrFilters = arrPeople
    if (likeJavaScript.checked == true) {
        arrFilters = arrFilters.filter(people => people.likeJavaScript == true)
    }
    if (developer.checked == true) {
        arrFilters = arrFilters.filter(people => people.profession.includes('Developer'))
    }
    if (brazilian.checked == true) {
        arrFilters = arrFilters.filter(people => people.nationality.includes('Brasileir'))
        // ou ===> arrPeople = arrPeople.filter(people => people.nationality.includes ('Brasileiro') || people.nationality.includes ('Brasileira'))
    }
    if (greaterThan.checked == true) {
        arrFilters = arrFilters.filter(people => people.age >= 18)
    }
    if (likeJavaScript.checked == false && developer.checked == false && brazilian.checked == false && greaterThan.checked == false) {
        arrFilters = arrPeople
    }
    return arrFilters
}

function clearFilters() {
    document.getElementById('likeJavaScript').checked = false
    document.getElementById('developer').checked = false
    document.getElementById('brazilian').checked = false
    document.getElementById('greaterThan').checked = false
    filteredTable()
}
filteredTable()    