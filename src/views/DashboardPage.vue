<template>
  <div class="dashboard-page">
    <!-- Sidebar -->
    <Sidebar />

    <!-- TopBar -->
    <TopBar />

    <!-- Main Dashboard Content -->
    <main class="dashboard-content">
      <div class="tabs">
        <!-- SALE Tab -->
        <router-link to="/sale" class="tab tab-red" active-class="active-tab">
          <span class="tab-icon">💰</span>
          <span class="tab-label">SALE</span>
        </router-link>

        <!-- FRONT Tab -->
        <router-link to="/front" class="tab tab-blue" active-class="active-tab">
          <span class="tab-icon">🏷️</span>
          <span class="tab-label">FRONT</span>
        </router-link>

        <!-- STOCK Tab -->
        <router-link to="/stock" class="tab tab-green" active-class="active-tab">
          <span class="tab-icon">📦</span>
          <span class="tab-label">STOCK</span>
        </router-link>

        <!-- ACCOUNTS Tab -->
        <router-link to="/accounts" class="tab tab-yellow" active-class="active-tab">
          <span class="tab-icon">📊</span>
          <span class="tab-label">ACCOUNTS</span>
        </router-link>
      </div>

      <!-- Doughnut Chart -->
      <div class="chart-area">
        <canvas id="myChart"></canvas>
      </div>

      <!-- Small Bottom Info Tabs -->
      <div class="tab-large">
        <div class="tab-info">
          <div class="info-tab">
            <span class="info-icon">💰</span>
            <span class="info-label">Current Sale</span>
            <span class="info-value">125k</span>
          </div>
          <div class="info-tab">
            <span class="info-icon">👨‍🍳</span>
            <span class="info-label">Staff on Duty</span>
            <span class="info-value">12</span>
          </div>
          <div class="info-tab">
            <span class="info-icon">🍽️</span>
            <span class="info-label">Current Tables</span>
            <span class="info-value">8</span>
          </div>
        </div>
      </div>

      <!-- Combined Bar + Line Chart -->
      <div class="bottom-chart-area">
        <canvas id="barLineChart"></canvas>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import TopBar from '../components/TopBar.vue'
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

export default {
  components: { Sidebar, TopBar },
  setup() {
    onMounted(() => {
      // Doughnut Chart
      const ctx = document.getElementById('myChart')
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['SALE', 'STOCK PURCHASE', 'FIXED LISABILITIES', 'STAFF SALARY', 'EXPENSE', 'SETUP COST'],
            datasets: [
              {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  '#9B59B6',
                  '#FF7F50',
                  '#FF69B4',
                  '#00CED1',
                  '#FFD700',
                  '#008080'
                ],
                borderColor: [
                  '#8E44AD',
                  '#FF4500',
                  '#FF1493',
                  '#20B2AA',
                  '#FFC300',
                  '#006666'
                ],
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'left', labels: { color: '#000' } }
            },
            animation: { animateRotate: true, animateScale: true },
            cutout: '40%',
            maintainAspectRatio: false
          }
        })
      }

      // Bottom Combined Bar + Line Chart
      const ctx2 = document.getElementById('barLineChart')
      if (ctx2) {
        const days = Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`)
        new Chart(ctx2, {
          data: {
            labels: days,
            datasets: [
              {
                type: 'bar',
                label: 'SALE',
                data: days.map(() => Math.floor(Math.random() * 20 + 5)),
                backgroundColor: '#1B4F72'
              },
              {
                type: 'bar',
                label: 'EXPENSE',
                data: days.map(() => Math.floor(Math.random() * 15 + 5)),
                backgroundColor: '#3498DB'
              },
              {
                type: 'line',
                label: 'SALE',
                data: days.map(() => Math.floor(Math.random() * 20 + 5)),
                borderColor: '#000000',
                borderWidth: 3,
                fill: false,
                tension: 0.3
              }
            ]
          },
          options: {
            responsive: true,
            plugins: { legend: { position: 'top', labels: { color: '#000' } } },
            scales: {
              x: { stacked: false, ticks: { color: '#000' } },
              y: { stacked: false, beginAtZero: true, ticks: { color: '#000' } }
            },
            maintainAspectRatio: false
          }
        })
      }
    })
  }
}
</script>

<style scoped>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  background: transparent;
  position: relative;
}

.tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tab {
  position: relative;
  flex: 0 0 auto;
  min-width: 180px;
  padding: 0.8rem 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
}

.tab:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 18px rgba(0,0,0,0.3);
}

.tab-icon { font-size: 1.3rem; margin-bottom: 0.4rem; }
.tab-label { font-size: 1.1rem; }

.tab-red { background: linear-gradient(135deg, #e74c3c, #c0392b); }
.tab-blue { background: linear-gradient(135deg, #3498db, #2980b9); }
.tab-green { background: linear-gradient(135deg, #2ecc71, #27ae60); }
.tab-yellow { background: linear-gradient(135deg, #f1c40f, #f39c12); }

/* Active Tab Highlight */
.active-tab {
  outline: 3px solid #fff;
  transform: scale(1.05);
}

.chart-area {
  width: 400px;
  height: 260px;
  background: transparent;
  padding: 0;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  position: absolute;
  top: 80px;
  right: 20px;
}

.bottom-chart-area {
  width: 800px;
  height: 200px;
  background: transparent;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  position: absolute;
  bottom: 100px;
  right: 20px;
}

.tab-large {
  width: 600px;
  height: 120px;
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  position: absolute;
  bottom: 100px;
  left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.tab-info {
  display: flex;
  gap: 20px;
}

.info-tab {
  width: 160px;
  height: 100px;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.info-icon { font-size: 2rem; margin-bottom: 6px; }
.info-label { font-size: 1rem; font-weight: 600; }
.info-value { font-size: 1.2rem; font-weight: 700; margin-top: 4px; }
</style>
