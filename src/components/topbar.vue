<template>
  <div class="topbar">
    <div class="title">TOPNOTCH CAFE & Restaurant</div>
    <div class="right-section">
      <i class="fas fa-bell notification-icon"></i>
      <span class="owner-name">WAQAS</span>
      <button class="logout-button" @click="handleLogout">Logout</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: "TopBar",
  setup() {
    const router = useRouter()

    const handleLogout = () => {
      // Optionally, you can clear any stored user data here
      // localStorage.clear() or sessionStorage.clear()
      
      // Redirect to login page
      router.push('/')
    }

    return { handleLogout }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Orbitron:wght@600;700;800&display=swap');

.topbar {
  height: 130px;
  background: linear-gradient(135deg, #007777ff, #007777ff #262929ff);
  background-size: 200% 200%;
  animation: gradient 60s ease infinite; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-left: 220px;
  width: calc(100% - 220px);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  color: white;
}

.title {
  font-family: "Orbitron", sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: white;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 96px;
}

.notification-icon {
  font-size: 1.4rem;
  cursor: pointer;
  color: white;
  transition: color 0.3s;
}

.notification-icon:hover {
  color: #ffcc00;
}

.owner-name {
  font-family: "Orbitron", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
}

.logout-button {
  background: white;
  color: black;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

.logout-button:hover {
  background: #ff4444;
  color: white;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>

<!-- FontAwesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
