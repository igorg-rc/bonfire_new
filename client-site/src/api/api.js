const MESSAGES_BASE_URL = '/api/messages'
// const INDUSTRIES_BASE_URL = '/api/industries'
// const TECHNOLOGIES_BASE_URL = '/api/technologies'

export const createMessage = message => fetch(MESSAGES_BASE_URL, {
  method: "POST",
  body: JSON.stringify(message),
  headers: {
    "Content-Type": "application/json"
  }
})
.then(message => message.json())
.catch(error => console.log(error))