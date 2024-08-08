import { ref } from "vue";
import { defineStore } from "pinia";

export const useSessionStore = defineStore('session', () => {
    const user = ref('')
    const token = ref(null)
    const isLoggedIn = ref(false)

    function createSession(userName, tokenVal) {
        user.value = userName
        token.value = tokenVal

        isLoggedIn.value = token.value !== null
    }

    function isLogged() {
        isLoggedIn.value = token.value !== null
    }

    function closeSession() {
        user.value = ''
        token.value = null
    }

    return { user, token, createSession, isLogged, isLoggedIn, closeSession }
})