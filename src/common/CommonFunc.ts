const commonFunc = {
  localStorage: {
    token: {
      get: function () : string | null {
        return localStorage.getItem('token')
      },
      set: function (token: string) {
        localStorage.setItem('token', token)
      },
      remove: function () {
        localStorage.removeItem('token')
      }
    },
    theme: {
      get: function (): string | null {
        return localStorage.getItem('theme')
      },
      set: function (theme: 'dark' | 'light') {
        localStorage.setItem('theme', theme)
      },
      remove: function () {
        localStorage.removeItem('theme')
      }
    },
    showLastChat: {
      get: function (): boolean | null {
        if (localStorage.getItem('showLastChat') === null) {
          return null
        }
        return localStorage.getItem('showLastChat') === 'true'
      },
      set: function (showLastChat: boolean) {
        localStorage.setItem('showLastChat', showLastChat.toString())
      },
      remove: function () {
        localStorage.removeItem('showLastChat')
      }
    }
  }
}

export default commonFunc