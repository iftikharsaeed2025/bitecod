<template>
  <div class="purchase-detail-page">
    <!-- Title Section -->
    <div class="title-section">
      <h1 class="main-title">PURCHASE DETAIL</h1>
      <h3 class="date-title">1 OCT 2025</h3>
    </div>

    <!-- Summary Table -->
    <div class="summary-table-wrap">
      <h4 class="summary-title">Purchaser Cash Detail</h4>
      <table class="summary-table">
        <tbody>
          <tr>
            <td>Purchaser Name</td>
            <td><input v-model="summary.name" class="summary-input" /></td>
          </tr>
          <tr>
            <td>Total Cash</td>
            <td><input v-model="summary.cash" class="summary-input" /></td>
          </tr>
          <tr>
            <td>Total Card</td>
            <td><input v-model="summary.card" class="summary-input" /></td>
          </tr>
          <tr>
            <td>Total Balance</td>
            <td><input v-model="summary.balance" class="summary-input" /></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Placeholder for future tables/content -->
    <div class="content-placeholder">
      <!-- You can add purchase item tables here later -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const summary = reactive({
  name: '',
  cash: '',
  card: '',
  balance: ''
})
</script>

<style scoped>
.purchase-detail-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(135deg, #1b1b2f, #2c2c42, #3a3a60, #4b4b7d);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #fff;
}

/* Title Section */
.title-section {
  text-align: center;
  margin-top: 40px;
}

.main-title {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(90deg, #ffd600, #fff700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.date-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #ffd600, #fff700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
}

/* Summary Table */
.summary-table-wrap {
  position: absolute;
  top: 150px;
  right: 50px;
  text-align: center;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #ffd600, #fff700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.summary-table {
  border-collapse: collapse;
  background: linear-gradient(135deg, #2c2c42, #353555, #3d3d6e, #48488a);
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  padding: 10px;
}

.summary-table td {
  padding: 12px 20px;
  font-weight: 600;
}

.summary-input {
  width: 100%;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  text-align: center;
  font-weight: 600;
  color: #fff;
}

/* Placeholder for tables/content */
.content-placeholder {
  width: 90%;
  margin-top: 300px; /* leave space below title & summary */
}
</style>
