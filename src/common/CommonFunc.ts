const commonFunc = {
  token: {
    getToken() {
      return localStorage.getItem('token')
    },
    setToken(token: string) {
      localStorage.setItem('token', token)
    }
  }
}

export default commonFunc