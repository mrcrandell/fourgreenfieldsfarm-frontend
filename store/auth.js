import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    userAccess: {},
    user: {
      exp: 0
    },
  }),
  getters: {
    isTokenValid: (state) => state.userAccess && new Date() < new Date(state.user?.exp * 1000),
  },
  actions: {
    /* async login({ email, password }) {
      
    }, */
    logout() {
      this.user = null
      this.userAccess = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  },
  persist: true,
})