import { defineStore } from 'pinia';
import jwtDecode from 'jwt-decode';

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
    async login({ email, password } : { email: string, password: string }) {
      await $fetch(`/api/user/auth`, {
        method: 'POST',
        body: { email, password }
      })
        .then((response: any) => {
          console.log(response);

          const { token }: { token: string } = response;
          this.userAccess = token;
          this.user = jwtDecode(token);
          // const token = response.token;

          /* Update Pinia state */
          /* this.user = response
          this.token = this.user.jwt_token
          // Store user in local storage to keep them logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(this.user))
          localStorage.setItem('token', JSON.stringify(this.token)) */
        })
        .catch(error => { throw error })
    },
    logout() {
      /* this.user = null
      this.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token') */
    }
  },
  persist: true,
})