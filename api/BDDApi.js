
const headerGet = {
  headers: {
   "Content-Type": "application/json",
   "Accept": "application/json, text-plain, */*"
  },
  method: 'get'
}

export function getProduct () {
  const url = 'http://192.168.1.36:8000/api/produit'
  return fetch(url,headerGet)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getProductById (id) {
  const url = 'http://192.168.1.36:8000/api/produit/' + id
  return fetch(url,headerGet)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
