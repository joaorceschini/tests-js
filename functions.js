const axios = require("axios")

const functions = {
  soma: (valor1, valor2) => valor1 + valor2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "João" }
    user["lastName"] = "Rafael"
    return user
  },
  fetchUser: () => axios.get("https://jsonplaceholder.typicode.com/users/9")
    .then(response => response.data)
    .catch(err => console.error(err))
}

module.exports = functions;