const url = 'http://192.168.1.27:8000'

const headerGet = {
  headers: {
   "Content-Type": "application/json",
   "Accept": "application/json, text-plain, */*"
  },
  method: 'get'
}

export function getProduct () {
  const fullurl = url + '/api/produit'
  return fetch(fullurl,headerGet)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getProductById (id) {
  const fullurl = url + '/api/produit/' + id
  return fetch(fullurl,headerGet)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
