const INDUSTRIES_BASE_URL = '/api/industries'
// const TECHNOLOGIES_BASE_URL = '/api/technologies'
const MESSAGES_BASE_URL = '/api/messages'

// Industries api actions
export const getIndustries = () => fetch(INDUSTRIES_BASE_URL)
  .then(industries => industries.json())
  .catch(error => console.log(error))

export const getIndustry = id => fetch(`${INDUSTRIES_BASE_URL}/${id}`)
  .then(industry => industry.json())
  .catch(error => console.log(error))

export const createIndustry = industry => fetch(INDUSTRIES_BASE_URL, {
    method: "POST",
    body: industry
  })
  .then(industry => industry.json())
  .catch(err => console.log(err))

export const updateIndustry = (id, industry) => fetch(`${INDUSTRIES_BASE_URL}/${id}`, {
    method: "PATCH",
    body: industry
  })
  .then(industry => industry.json())
  .catch(err => console.log(err))

export const deleteIndustry = id => fetch(`${INDUSTRIES_BASE_URL}/${id}`, { method: 'DELETE' })
  .then(id => console.log(`Industry with id ${id} was successfuly deleted`))
  .catch(error => console.log(error))

// Messages api actions
export const getMessages = () => fetch(MESSAGES_BASE_URL)
  .then(messages => messages.json())
  .catch(error => console.log(error))

export const getMessage = id => fetch(`${MESSAGES_BASE_URL}/${id}`)
  .then(message => message.json())