const INDUSTRIES_BASE_URL = '/api/industries'
const CATEGORIES_BASE_URL = '/api/categories'
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


// Categories actions
export const getCategories = () => fetch(CATEGORIES_BASE_URL)
  .then(categories => categories.json())
  .catch(error => console.log(error))

export const getCategory = catId => fetch(`${CATEGORIES_BASE_URL}/${catId}`)
  .then(category => category.json())
  .catch(err => console.log(err))

export const createCategory = data => fetch(CATEGORIES_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(category => category.json())
  .catch(err => console.log(err))

export const updateCategory = (catId, data) => fetch(`${CATEGORIES_BASE_URL}/${catId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(category => category.json())
  .catch(err => console.log(err))

export const deleteCategory = catId => fetch(`${CATEGORIES_BASE_URL}/${catId}`, {
    method: "DELETE"
  })
  .then(category => console.log("Category was successfuly deleted"))
  .catch(err => console.log(err))

// Technologies actions
export const getTechnology = (catId, techId) => fetch(`${CATEGORIES_BASE_URL}/${catId}/tech/${techId}`)
  .then(technology => technology.json())
  .catch(error => console.log(error))

export const createTechnology = (catId, technology) => fetch(`${CATEGORIES_BASE_URL}/${catId}/tech`, {
    method: "POST",
    body: technology
  })
  .then(technology => technology.json())
  .catch(error => console.log(error))

  export const updateTechnology = (catId, techId, technology) => fetch(`${CATEGORIES_BASE_URL}/${catId}/tech/${techId}`, {
    method: "PATCH",
    body: technology
  })
  .then(technology => technology.json())
  .catch(error => console.log(error))

export const deleteTechnology = (catId, techId) => fetch(`${CATEGORIES_BASE_URL}/${catId}/tech/${techId}`, {
    method: "DELETE"
  })
  .then(technology => console.log(`Technology with id ${techId} was successfuly deleted.`))
  .catch(error => console.log(error))

// Messages api actions
export const getMessages = () => fetch(MESSAGES_BASE_URL)
  .then(messages => messages.json())
  .catch(error => console.log(error))

export const getMessage = id => fetch(`${MESSAGES_BASE_URL}/${id}`)
  .then(message => message.json())