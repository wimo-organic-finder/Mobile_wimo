const site = 'http://172.20.10.2:8000'
export const LOGIN_URL = site + '/oauth/token'
export const OAUTH_CLIENT_ID = 3
export const OAUTH_CLIENT_SECRECT = '0PEOKP3TUsMnehDlM7x087WR7KA3mX1rFoHsIIBM'

const headerGet = {
  headers: {
   "Content-Type": "application/json",
   "Accept": "application/json, text-plain, */*"
  },
  method: 'get'
}

export function getProduct () {
  const url = site + '/api/sales'
  return fetch(url,headerGet)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getProductById (id) {
  const url = site + '/api/sales/' + id
  return fetch(url,headerGet)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
