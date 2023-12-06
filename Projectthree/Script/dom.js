// const container = document.querySelector('div')
const container = document.querySelectorAll('div')
const classContainer = document.getElementsByClassName('field')

// console.log(container)
// console.log(classContainer)

// container.forEach(Element => {
//     console.log(element)
// })

// classContainer.forEach(Element => {
//     console.log(element)
// })
// for (let index = 0; index < classContainer.length; index++) {
//     const element = classContainer[index]
//     consle.log(element)
// }

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const errMsg = document.querySelector('errMsg')


// console.log(allInput)

const login = () => {
    // console.log(allInputs)

    const credentials = {
        email: '',
        password: ''
    }

    allInputs.forEach(element => {
        // console.log(element.value)
        // console.log(element.name)

        if (element.name === 'email') {
            if (element.value.includes('.') && element.value.includes('@')) {
                credentials.email = element.value
            }
            else {
                errMsg.innerText = 'Incorrect Email address'
            }
        } else if (element.name === 'password') {
            if (element.value.length < 8) {
                errMsg.innerText = 'Password too short'
            }
            else {
                credentials.password = element.value
            }
        }

    })


    console.log(credentials)
    removePopup()
}
const showpopup = () => {
    const popup = document.createElement('div')
    const btnContainer = document.createElement('div')
    const info = document.createElement('p')
    const yesBtn = document.createElement('button')
    const noBtn = document.createElement('button')

    info.innerText = 'Are you sure you want to login?'
    yesBtn.innerText = 'Yes'
    noBtn.innerText = 'No'

    btnContainer.appendChild(yesBtn)
    btnContainer.appendChild(noBtn)
    btnContainer.className = 'btnContainer'

    popup.setAttribute('class', 'popup')


    popup.appendChild(info)
    popup.appendChild(btnContainer)
    document.body.appendChild(popup)

    noBtn.addEventListener('click', () => {
        removepopup()
    })

    yesBtn.addEventListener('click', () => {
        login()
    })
    // yesBtn.setAttribute('onclick', 'login()')

}

const removePopup = () => {
    const popup = document.querySelector('.popup')
    if (popup !== null) {
        popup.remove()
    }

}

btn.addEventListener('click', (event) => {
    event.preventDefault()

    if (errMsg.innerText !== '') {
        errMsg.innerText = ''
    }

    showPopup()
})
