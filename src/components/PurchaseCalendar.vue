<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <h3>{{ monthName }} {{ currentYear }}</h3>
    </div>

    <div class="calendar-weekdays">
      <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
    </div>

    <div class="calendar-days">
      <div 
        v-for="(date, index) in calendarDays" 
        :key="index" 
        :class="['day', { today: isToday(date) }]"
        @click="selectDate(date)"
      >
        {{ date ? date.getDate() : '' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const today = new Date()
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())
const selectedDate = ref(null)

const router = useRouter()

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthName = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value)
  return date.toLocaleString('default', { month: 'long' })
})

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const days = []

  // Add empty slots for first week
  for (let i = 0; i < firstDay.getDay(); i++) days.push(null)
  for (let i = 1; i <= lastDay.getDate(); i++)
    days.push(new Date(currentYear.value, currentMonth.value, i))

  return days
})

const isToday = (date) => {
  if (!date) return false
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

// Click a date
const selectDate = (date) => {
  if (!date) return
  selectedDate.value = date

  // Navigate only for first date
  if (date.getDate() === 1) {
    router.push('/purchasedetail/1')
  }
}
</script>

<style scoped>
.calendar-container {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.calendar-header {
  color: white;
  margin-bottom: 10px;
  font-size: 1.4rem;
  text-align: center;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
}

.weekday {
  color: white;
  font-weight: bold;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  width: 100%;
}

.day {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.2s;
}

.day.today {
  background-color: rgba(255, 255, 255, 0.2);
}

.day:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
