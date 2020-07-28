export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/dienay"

export const token = window.localStorage.getItem("token")

export const axiosConfig = {
    headers: {
      auth: token
    }
  }
