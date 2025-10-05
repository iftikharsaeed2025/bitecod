<template>
  <div class="dashboard-page">
    <Sidebar />
    <TopBar />

    <main class="dashboard-content">
      <h1>FRONT PAGE</h1>
      <p>Welcome to the Front section.</p>

      <button class="back-button" @click="$router.push('/dashboard')">
        Back to Dashboard
      </button>
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import TopBar from '../components/TopBar.vue'

export default {
  components: { Sidebar, TopBar }
}
</script>

<style scoped>
/* Same CSS as SalePage.vue */
.dashboard-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc, #06b6d4 );
  background-size: 200% 200%;
  animation: gradient-bg 10s ease infinite;
  position: relative;
  overflow: hidden;
}

@keyframes gradient-bg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.dashboard-content {
  flex: 1;
  margin-left: 220px;
  margin-top: 130px;
  width: calc(100% - 220px);
  height: calc(100% - 130px);
  padding: 50px;
  background: transparent;
  position: relative;
  color: white;
}

.back-button {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 25px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: translateX(-50%) scale(1.05);
}
</style>
