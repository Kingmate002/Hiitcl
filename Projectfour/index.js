import { allproduct } from "./allproduct.js"

// FORM
const form = document.createElement('form')

const formBody = ['Name', 'Price', 'Description']

formBody.forEach(element => {
    const container = document.createElement('div')
    form.appendChild(container)

    const label = document.createElement('label')
    label.innerText = element
    container.appendChild(label)

    if (element === 'Name') {
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('class', 'name')
        container.appendChild(input)
    } else if (element === 'Price') {
        const input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('class', 'price')
        container.appendChild(input)
    } else {
        const textarea = document.createElement('textarea')
        textarea.setAttribute('class', 'description')
        container.appendChild(textarea)
    }
})

const formBtn = document.createElement('button')
formBtn.setAttribute('type', 'submit')
formBtn.innerText = 'Submit'
form.appendChild(formBtn)


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('.name').value
    const price = document.querySelector('.price').value
    const description = document.querySelector('.description').value

    if (name && price && description) {
        const item = {
            name,
            description,
            price
        }
        // console.log(allproduct)
        allproduct.push(item)
        // console.log(allproduct)
        removeTableBody()
        appendTableBody()

        document.querySelector('.name').value = ''
        document.querySelector('.price').value = ''
        document.querySelector('.description').value = ''

    } else {
        alert('All fields must be field')
    }
})

document.body.appendChild(form)

// TABLE

// create table
const table = document.createElement('table')
table.setAttribute('width', '100%')
table.setAttribute('border', '1')
table.setAttribute('cellspacing', '10px')
table.setAttribute('cellpadding', '5px')

// table head
const tableHead = document.createElement('thead')
table.appendChild(tableHead)

const tableHeadRow = document.createElement('tr')
tableHead.appendChild(tableHeadRow)

const headers = ['S/N', 'Name', 'Description', 'Price']

headers.forEach(element => {
    const th = document.createElement('th')
    th.innerText = element
    tableHeadRow.appendChild(th)
})

const removeTableBody = () => {
    const tableBody = document.querySelector('tbody')
    table.removeChild(tableBody)
}

const removeTableItem = (index) => {
    allproduct = allproduct.filter(item => allproduct.indexOf(item) !== index)
    removeTableBody()
    appendTableBody()
    // console.log(allProducts)
}


const appendTableBody = () => {
    // create table body
    const tableBody = document.createElement('tbody')
    table.appendChild(tableBody)

    allproduct.forEach((row, index) => {
        const tableBodyRow = document.createElement('tr')
        tableBody.appendChild(tableBodyRow)

        const td1 = document.createElement('td')
        td1.innerText = index + 1
        tableBodyRow.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerText = row.name
        tableBodyRow.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerText = row.description
        tableBodyRow.appendChild(td3)

        const td4 = document.createElement('td')
        td4.innerText = row.price
        tableBodyRow.appendChild(td4)

        const rmvBtn = document.createElement('button')
        rmvBtn.innerText = 'Remove'

        rmvBtn.addEventListener('click', () => {
            removeTableItem(index)
        })
        tableBodyRow.appendChild(rmvBtn)
    })
}

appendTableBody()

document.body.appendChild(table)
