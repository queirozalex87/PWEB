const form = document.getElementById('form')
const clearButton = document.querySelector('.clearForm')

const name = document.getElementById('name')
const email = document.getElementById('email')
const commentary = document.getElementById('commentary')
const searchs = Array.from(document.querySelectorAll('input[name="search"]'))
const feedback = document.getElementById('feedback')

const radioMap = new Map([
  ['yes', true],
  ['no', false]
])
let feedbackResponse = false

form.addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()
  validate()
})

clearButton.addEventListener('click', (event) => {
  event.preventDefault()
  clear()
})

searchs.map(search => {
  search.addEventListener('change', (event) => {
    feedbackResponse = radioMap.get(event.target.value)
  })
})

const validate = () => {
  const nameValidator = name && name.value.length <= 10
  const emailValidator = email && email.value.includes('@') && email.value.includes('.')
  const commentaryValidator = commentary.value != "" && commentary.value.length <= 20

  if ((nameValidator || emailValidator) && commentaryValidator) {
    feedback.textContent = feedbackResponse ? 'Volte sempre à está página!' : 'Que bom que você voltou a visitar esta página'
    return
  }

  feedback.textContent = ''
}

const clear = () => {
  form.reset()
}