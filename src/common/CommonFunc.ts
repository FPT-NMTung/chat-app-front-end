const commonFunc = {
  localStorage: {
    token: {
      /**
       * Get token from localStorage
       * @returns token | null
       */
      get: function () {
        return localStorage.getItem('token')
      },

      /**
       * Set token to localStorage
       * @param token string
       */
      set: function (token: string) {
        localStorage.setItem('token', token)
      }
    },
    theme: {
      /**
       * Get theme from localStorage
       * @returns theme | null
       */
      get: function (): string | null {
        return localStorage.getItem('theme')
      },

      /**
       * Set theme to localStorage
       * @param theme 'dark' | 'light'
       */
      set: function (theme: 'dark' | 'light') {
        localStorage.setItem('theme', theme)
      }
    }
  }
}

export default commonFunc