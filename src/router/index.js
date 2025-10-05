import { createRouter, createWebHistory } from 'vue-router'

// Main pages
import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AccountsPage from '../views/AccountsPage.vue'
import CashflowPage from '../views/CashflowPage.vue' // in src/views
import PurchaseDetail1 from '../views/purchasedetail/PurchaseDetail1.vue' // first purchase date

const routes = [
  { path: '/', component: LoginPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/accounts', component: AccountsPage },
  { path: '/cashflow', component: CashflowPage },
  { path: '/purchasedetail/1', component: PurchaseDetail1 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
