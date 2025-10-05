<template>
  <aside class="sidebar">
    <!-- Header -->
    <div class="sidebar-header">
      <h2 class="logo">
        B<span class="i-wrap"><span class="i-dot"></span>i</span>tecod
      </h2>
      <span class="status">● Online</span>
    </div>

    <!-- Menu -->
    <nav class="menu">
      <ul>
        <li><i class="fas fa-home"></i> Overview <span class="arrow">›</span></li>
        <li><i class="fas fa-users"></i> Top Customers <span class="arrow">›</span></li>
        <li><i class="fas fa-chart-line"></i> Month Progress <span class="arrow">›</span></li>
        <li><i class="fas fa-envelope"></i> Messages <span class="arrow">›</span></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 220px;
  color: #fff;
  padding: 25px 10px;
  overflow-y: auto;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc, #06b6d4 );
  background-size: 200% 200%;
  animation: gradient-bg 10s ease infinite;
}

@keyframes gradient-bg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.sidebar-header {
  text-align: center;
  margin-bottom: 35px; /* slightly smaller spacing */
}

.logo {
  margin: 0;
  font-size: 3rem; /* slightly reduced */
  font-weight: 800;
  color: #003399;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: flex-end;
}

.i-wrap {
  position: relative;
  display: inline-block;
}

.i-dot {
  position: absolute;
  top: -10px;
  left: 35%;
  width: 10px;
  height: 10px;
  background: #00c2a8;
  border-radius: 50%;
}

.status {
  display: block;
  font-size: 1rem;
  color: #10b981;
  margin-top: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 120px 0 0 0;
}

li {
  padding: 10px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  border-radius: 10px;
  transition: background 0.3s, transform 0.3s;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
  background: rgba(255,255,255,0.05);
  color: #fff;
}

li:last-child { margin-bottom: 0; }

li:hover {
  background: rgba(255,255,255,0.15);
  transform: translateX(5px);
}

li i {
  font-size: 1.6rem;
  width: 30px;
  text-align: center;
  transition: transform 0.2s;
  display: inline-block;
  animation: pulse 1.5s infinite alternate;
}

li:nth-child(1) i { color: #3498db; }
li:nth-child(2) i { color: #2ecc71; }
li:nth-child(3) i { color: #f1c40f; }
li:nth-child(4) i { color: #e74c3c; }

li:hover i { transform: scale(1.4); }

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

.arrow {
  font-size: 1.2rem;
  color: #fff;
}
</style>
