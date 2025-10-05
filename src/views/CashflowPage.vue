<template>
  <div class="cashflow-page">
    <!-- Title -->
    <div class="title-wrap">
      <h1 class="page-title">CASH FLOW OCTOBER</h1>
    </div>

    <!-- Summary Table -->
    <div class="summary-wrap">
      <table class="summary-table">
        <tbody>
          <tr>
            <td class="label">TOTAL CASH</td>
            <td><input v-model="summary.totalCash" class="summary-input" @input="saveData" /></td>
            <td class="label right-red">TOTAL EXPENSE</td>
            <td><input v-model="summary.totalExpense" class="summary-input right-red" @input="saveData" /></td>
          </tr>
          <tr>
            <td class="label">TOTAL CR CARD</td>
            <td><input v-model="summary.totalCrCard" class="summary-input" @input="saveData" /></td>
            <td class="label right-red">TOTAL PAYMENTS</td>
            <td><input v-model="summary.totalPayments" class="summary-input right-red" @input="saveData" /></td>
          </tr>
          <tr>
            <td class="label blue">TOTAL BALANCE CASH</td>
            <td><input v-model="summary.totalBalanceCash" class="summary-input yellow large" @input="saveData" /></td>
          </tr>
          <tr>
            <td class="label blue">TOTAL BANK BALANCE</td>
            <td><input v-model="summary.totalBankBalance" class="summary-input yellow large" @input="saveData" /></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Cashflow Table -->
    <div class="table-wrap">
      <table class="cashflow-table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>DAY SALE</th>
            <th>CARD SALE</th>
            <th>CASH SALE</th>
            <th>EXPENSE</th>
            <th>PAYMENTS</th>
            <th>BALANCE</th>
            <th>WITHDRAWAL</th>
            <th>BANK DEPOSIT</th>
            <th>BANK BALANCE</th>
            <th>CURRENT BALANCE</th>
            <th>BANK PAYMENT</th>
            <th>FINAL BALANCE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td><input v-model="row.date" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.daySale" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.cardSale" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.cashSale" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.expense" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.payments" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.balance" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.withdrawal" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.bankDeposit" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.bankBalance" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.currentBalance" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.bankPayment" class="cell-input" @input="saveData" /></td>
            <td><input v-model="row.finalBalance" class="cell-input" @input="saveData" /></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Action Buttons -->
    <div class="actions">
      <button class="add-btn" @click="addRow">+ Add Row</button>
      <button class="add-btn" @click="uploadImage">+ Add Image</button>
    </div>

    <!-- Draggable & Resizable Images -->
    <div v-for="img in images" :key="img.id" 
         class="draggable-image" 
         :style="{ top: img.top + 'px', left: img.left + 'px', width: img.width + 'px', height: img.height + 'px' }"
         @mousedown.prevent="startDrag($event, img)"
         @dblclick="viewFullImage(img.src)">
      <div class="resize-handle" @mousedown.stop.prevent="startResize($event, img)"></div>
      <img :src="img.src" />
    </div>

    <!-- Full-Screen Modal -->
    <div v-if="fullImage" class="full-image-modal" @click="fullImage = null">
      <img :src="fullImage" />
    </div>
  </div>
</template>

<script>
let nextImgId = 1;

export default {
  name: "CashflowEditablePage",
  data() {
    return {
      rows: [],
      summary: {},
      images: [],
      dragging: null,
      resizing: null,
      offsetX: 0,
      offsetY: 0,
      fullImage: null,
      startWidth: 0,
      startHeight: 0,
      startX: 0,
      startY: 0
    };
  },
  created() {
    const savedRows = localStorage.getItem("cashflowRows");
    const savedSummary = localStorage.getItem("cashflowSummary");
    const savedImages = localStorage.getItem("cashflowImages");

    this.rows = savedRows ? JSON.parse(savedRows) : Array.from({ length: 5 }, (_, i) => this.newRow(i+1));
    this.summary = savedSummary ? JSON.parse(savedSummary) : { totalCash:"", totalExpense:"", totalCrCard:"", totalPayments:"", totalBalanceCash:"", totalBankBalance:"" };
    this.images = savedImages ? JSON.parse(savedImages) : [];

    window.addEventListener("keydown", this.handleDelete);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleDelete);
  },
  methods: {
    newRow(id) {
      return { id, date:"", daySale:"", cardSale:"", cashSale:"", expense:"", payments:"", balance:"", withdrawal:"", bankDeposit:"", bankBalance:"", currentBalance:"", bankPayment:"", finalBalance:"" };
    },
    addRow() {
      const nextId = this.rows.length + 1;
      this.rows.push(this.newRow(nextId));
      this.saveData();
    },
    uploadImage() {
      const input = document.createElement("input");
      input.type = "file"; input.accept = "image/*";
      input.onchange = e => {
        const file = e.target.files[0]; if(!file) return;
        const reader = new FileReader();
        reader.onload = evt => {
          this.images.push({ id: nextImgId++, src: evt.target.result, top: 50, left: 50, width: 150, height: 150 });
          this.saveData();
        };
        reader.readAsDataURL(file);
      };
      input.click();
    },
    startDrag(event, img) {
      this.dragging = img;
      this.offsetX = event.clientX - img.left;
      this.offsetY = event.clientY - img.top;
      window.addEventListener("mousemove", this.dragMove);
      window.addEventListener("mouseup", this.dragEnd);
    },
    dragMove(event) {
      if(this.dragging){
        this.dragging.left = event.clientX - this.offsetX;
        this.dragging.top = event.clientY - this.offsetY;
      }
      if(this.resizing){
        this.resizing.width = this.startWidth + (event.clientX - this.startX);
        this.resizing.height = this.startHeight + (event.clientY - this.startY);
      }
    },
    dragEnd() {
      if(this.dragging) this.dragging = null;
      if(this.resizing) this.resizing = null;
      window.removeEventListener("mousemove", this.dragMove);
      window.removeEventListener("mouseup", this.dragEnd);
      this.saveData();
    },
    startResize(event, img) {
      this.resizing = img;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.startWidth = img.width;
      this.startHeight = img.height;
      window.addEventListener("mousemove", this.dragMove);
      window.addEventListener("mouseup", this.dragEnd);
    },
    viewFullImage(src) { this.fullImage = src; },
    handleDelete(e) {
      if(e.key === "Delete" && this.images.length){
        this.images.pop();
        this.saveData();
      }
    },
    saveData() {
      localStorage.setItem("cashflowRows", JSON.stringify(this.rows));
      localStorage.setItem("cashflowSummary", JSON.stringify(this.summary));
      localStorage.setItem("cashflowImages", JSON.stringify(this.images));
    }
  }
};
</script>

<style scoped>
.cashflow-page{
  font-family:"Roboto",sans-serif; min-height:100vh; padding:30px;
  background: linear-gradient(135deg,#1b1b2f,#2c2c42,#3a3a60,#4b4b7d); color:#fff;
}
/* Title */
.title-wrap{text-align:center;margin-bottom:30px;}
.page-title{font-size:64px;font-weight:900;color:#ffd600;text-shadow:0 0 15px #ffd600;}

/* Summary Table */
.summary-wrap{margin-bottom:30px;}
.summary-table{
  width:100%;
  border-collapse:collapse;
  border-radius:8px;
  box-shadow:0 6px 20px rgba(0,0,0,0.4);
  background: transparent; /* removed background */
}
.summary-table td{
  border:1px solid #555;
  padding:12px;
  font-weight:600;
  text-align:center;
  font-size:16px;
  background: transparent; /* remove cell background */
}
.summary-input{width:100%;border:none;background:rgba(255,255,255,0.05);color:#fff;text-align:center;font-size:16px;font-weight:600;}

/* Cashflow Table */
.table-wrap{overflow-x:auto;margin-bottom:30px;}
.cashflow-table{
  width:100%;
  border-collapse:collapse;
  border-radius:8px;
  box-shadow:0 6px 20px rgba(0,0,0,0.4);
  background: transparent; /* removed background */
}
.cashflow-table th, .cashflow-table td{
  border:1px solid #00cccc;
  text-align:center;
  padding:10px;
  font-size:15px;
  height:60px;
}
.cashflow-table th{
  background:#00bbbb; /* keep header */
  font-weight:700;
  color:#000;
}
.cashflow-table td{
  background: transparent; /* remove cell background */
}
.cell-input{width:100%;height:100%;border:none;background:transparent;text-align:center;color:#fff;font-weight:600;font-size:15px;}

/* Buttons */
.actions{text-align:center;margin-bottom:30px;}
.add-btn{padding:12px 22px;margin:5px;font-weight:700;border-radius:10px;border:none;background:#00cccc;color:#000;cursor:pointer;box-shadow:0 0 10px rgba(0,255,255,0.4);transition: transform 0.2s, box-shadow 0.2s;}
.add-btn:hover{transform:scale(1.05);box-shadow:0 0 20px rgba(0,255,255,0.7);}

/* Draggable & Resizable Images */
.draggable-image{position:absolute; cursor:move; border:2px dashed #fff; display:flex; justify-content:center; align-items:center;}
.draggable-image img{width:100%;height:100%;object-fit:contain;border-radius:6px;}
.resize-handle{width:12px;height:12px;background:#00ffff;border:2px solid #fff;position:absolute;right:0;bottom:0;cursor:se-resize;}

/* Full Image Modal */
.full-image-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.95);display:flex;justify-content:center;align-items:center;z-index:9999;}
.full-image-modal img{max-width:95%;max-height:95%;border-radius:12px;box-shadow:0 0 30px rgba(255,255,255,0.8);}
</style>
