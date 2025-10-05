<template>
  <div class="login-page">
    <div class="login-box">
      <!-- Bitecod Logo -->
      <h1 class="logo">
        B<span class="i-wrap"><span class="i-dot"></span><span class="i-body">i</span></span>tecod
      </h1>
      <p class="tagline">Your Digital Eye</p>

      <form @submit.prevent="handleLogin">
        <div class="field">
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Username"
            required
          />
        </div>

        <div class="field">
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div class="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" @click.prevent>Forgot Password</a>
        </div>

        <div class="actions">
          <button type="submit">LOGIN</button>
        </div>

        <div class="links">
          Don’t have an account? <a href="#">Register here</a>
        </div>

      </form>
      <!-- Footer / Legal -->
      <div class="footer">
        © 2025 Bitecod. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginPage',
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')

    const handleLogin = () => {
      if (username.value === 'admin' && password.value === '1234') {
        router.push('/dashboard')
      } else {
        alert('Invalid username or password')
      }
    }

    return { username, password, handleLogin }
  }
}
</script>

<style scoped>
/* Smooth flowing 3-color gradient */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 50%, #06b6d4 100%);
}

/* Login Box */
.login-box {
  width: 400px;
  padding: 50px 30px;
  border-radius: 40px 0 40px 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: #fff;
  box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Bitecod Logo */
.logo {
  font-size: 4.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 4px; /* tagline right below logo */
}

.i-wrap {
  position: relative;
  display: inline-block;
}

.i-dot {
  position: absolute;
  top: -15px; /* adjusted for bigger i */
  left: 50%;
  width: 14px;
  height: 14px;
  background: #00c2a8; /* colorful dot */
  border-radius: 50%;
  transform: translateX(-50%);
}

.i-body {
  line-height: 0;
  display: inline-block;
  color: #1e40af;
  font-size: 4.5rem; /* match larger logo size */
}

.tagline {
  font-size: 1rem;
  color: #d1d5db;
  margin-bottom: 25px;
  text-align: center;
}

/* Input Fields */
.field {
  width: 100%;
  margin-bottom: 20px;
}

.field input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 25px;
  border: 2px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s, background 0.3s;
}

.field input:focus {
  border-color: #00c2a8;
  background: rgba(255,255,255,0.15);
}

.field input::placeholder {
  color: #ddd;
}

/* Options Row */
.options {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #fff;
  margin-bottom: 20px;
}

.options a {
  color: #fff;
  text-decoration: none;
}

.options a:hover {
  text-decoration: underline;
}

/* Button */
.actions button {
  width: 100%;
  padding: 12px 0;
  border-radius: 25px;
  border: none;
  background: #000;
  color: #3b82f6;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.2s, background 0.3s;
}

.actions button:hover {
  transform: translateY(-2px);
  background: #111;
}

/* Links */
.links {
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
}

.links a {
  color: #fff;
  text-decoration: underline;
}

/* Footer / Legal */
.footer {
  margin-top: 25px;
  font-size: 0.75rem;
  color: #d1d5db;
  text-align: center;
}

.footer a {
  color: #fff;
  text-decoration: underline;
  margin: 0 5px;
}

.footer a:hover {
  color: #00c2a8;
}
</style>
