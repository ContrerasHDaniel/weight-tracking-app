<script setup>
import { useSessionStore } from "@/stores/userSession";
import { useRouter } from "vue-router";

const router = useRouter()

const store = useSessionStore();

const handleSubmit = () => {
    store.createSession('Guest', 'gu3stT0k3n')
    router.push({
        name: 'home'
    })
}
</script>

<template>
    <div class="main-container">
        <div class="login-container">
            <div class="form-wrapper">
                <h1>Welcome</h1>
                <form @submit="handleSubmit" class="form-login">
                    <div class="input-group">
                        <label for="email">Email</label>
                        <div class="input-icon-container">
                            <input type="email" name="email" id="email" placeholder="Email" disabled />
                            <i class="fi fi-sr-user input-icon"></i>

                        </div>
                    </div>
                    <div class="input-group">
                        <label for="pwd">Password</label>
                        <div class="input-icon-container">
                            <input type="password" name="pwd" id="pwd" placeholder="Password" disabled />
                            <i class="fi fi-sr-lock input-icon"></i>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-login animate-pulse hover:animate-none">Log In</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-login {
    background-color: #9b72cf;
    width: 100%;
    color: white;
}

.input-group {
    display: flex;
    flex-direction: column;
    color: #ede5fa;
    margin-bottom: 2em;
}

.input-group label {
    font-weight: bold;
    font-size: 1.2em;
}

.input-icon-container input {
    width: 100%;
    font-size: 1.2em;
    padding-right: 2rem;
    background-color: transparent;
    border-bottom: 1px solid #c4baff;
}

.input-icon-container {
    position: relative;
    display: inline-block;
}

.input-icon {
    position: absolute;
    right: 10px;
    /* Adjust as needed */
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    /* Prevent icon from blocking input clicks */
}

::placeholder {
    color: #c8b6ff;
    opacity: 1;
    /* Firefox */
}

::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: #c8b6ff;
}

.form-wrapper h1 {
    color: #ede5fa;
    font-size: 1.7em;
    font-weight: 600;
    margin: 0 auto;
    margin-top: 1.7em;
    margin-bottom: 3em;
}

.form-wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 2em;
}

.btn {
    padding: 10px;
    border: none;
    box-shadow: 3px 3px 10px rgba(31, 38, 135, 0.38);
    border-radius: 7px;
    font-weight: bold;
    min-width: 200px;
    margin: 0 auto;
}

.login-container {
    width: 24rem;
    height: 36rem;
    background: rgba(253, 212, 253, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(239, 200, 235, 0.1);
}

.main-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url("../assets/back_02.jpg");
    background-size: cover;
    background-position: left -230px;

    @media screen and (max-width: 768px) {
        background-size: contain;
        background-position: 0 0;
    }
}
</style>