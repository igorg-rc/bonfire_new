const TECHNOLOGIES_BASE_URL = '/api/categories'
const INDUSTRIES_BASE_URL = '/api/industries'
const MESSAGES_BASE_URL = '/api/messages'

export const getTechnologies = () => fetch(TECHNOLOGIES_BASE_URL)
  .then(technologies => technologies.json())
  .catch(error => console.log(error))

export const getIndustries = () => fetch(INDUSTRIES_BASE_URL)
  .then(industries => industries.json())
  .catch(error => console.log(error))

export const createMessage = message => fetch(MESSAGES_BASE_URL, {
  method: "POST",
  body: JSON.stringify(message),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(message => message.json())
.catch(error => console.log(error))