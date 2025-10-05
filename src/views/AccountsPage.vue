<template>
  <div class="dashboard-page" @click="handleClickOutside">
    <Sidebar />
    <TopBar />

    <main class="dashboard-content">
      <!-- Tabs -->
      <div class="tabs">
        <!-- Cash Flow tab -->
        <button 
          :class="['tab', isActive('/cashflow') ? 'active' : '']"
          @click="$router.push('/cashflow')">
          <span class="tab-icon">💰</span>
          <span class="tab-label">CASH FLOW</span>
        </button>

        <!-- Purchase Detail tab -->
        <button 
          :class="['tab', showCalendar ? 'active' : '']"
          @click.stop="toggleCalendar">
          <span class="tab-icon">📑</span>
          <span class="tab-label">PURCHASE DETAIL</span>
        </button>
      </div>

      <!-- Calendar inline below tabs -->
      <div v-if="showCalendar" class="calendar-section" @click.stop>
        <PurchaseCalendar />
      </div>

      <!-- Back button -->
      <button class="back-button" @click="$router.push('/dashboard')">
        Back to Dashboard
      </button>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import TopBar from '../components/TopBar.vue'
import PurchaseCalendar from '../components/PurchaseCalendar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path) => route.path === path

const showCalendar = ref(false)

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value
}

// Clicking outside calendar closes it
const handleClickOutside = () => {
  showCalendar.value = false
}
</script>

<style scoped>
.dashboard-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc, #06b6d4);
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 80px;
  margin-top: 40px;
}

.tab {
  padding: 50px 100px;
  font-size: 1.6rem;
  border-radius: 20px;
  background: linear-gradient(135deg, #06b6d4, #2575fc);
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.7);
}

.tab.active {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  box-shadow: 0 0 30px rgba(106, 17, 203, 0.9);
}

.tab:hover {
  background: linear-gradient(135deg, #2575fc, #06b6d4);
  transform: scale(1.08);
}

.tab-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.tab-label {
  font-size: 1.3rem;
  font-weight: bold;
}

/* Calendar inline */
.calendar-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

/* Back Button */
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
