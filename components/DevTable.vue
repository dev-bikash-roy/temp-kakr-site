<template>
  <div class="container my-4">
    <h2
      class="fw-bold text-center text-black mb-4"
      style="font-size: 1.875rem;"
    >
      Blockchain API Provider Comparison
    </h2>

    <div class="table-responsive shadow-lg rounded">
      <table
        class="table table-borderless mb-0"
        style="background-color: #1f2937; color: #fff;"
      >
        <thead>
          <tr style="background: linear-gradient(to right, #7e22ce, #2563eb);">
            <th
              class="text-uppercase fw-semibold"
              style="white-space: nowrap;"
            >
              Feature
            </th>
            <th class="text-uppercase fw-semibold" style="white-space: nowrap;">
              Infura
            </th>
            <th class="text-uppercase fw-semibold" style="white-space: nowrap;">
              QuickNode
            </th>
            <th class="text-uppercase fw-semibold" style="white-space: nowrap;">
              Kaleido
            </th>
            <th class="text-uppercase fw-semibold" style="white-space: nowrap;">
              Kakr Labs
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in tableData"
            :key="index"
            :style="index % 2 === 0 ? 'background-color: #374151;' : 'background-color: #1f2937;'"
            @mouseover="($event.currentTarget.style.backgroundColor='#4b5563')"
            @mouseout="($event.currentTarget.style.backgroundColor=index % 2 === 0 ? '#374151' : '#1f2937')"
            style="transition: background-color 0.2s;"
          >
            <td
              class="border-bottom border-secondary fw-medium"
              style="padding: 1rem; white-space: nowrap;"
            >
              {{ row.feature }}
            </td>
            <td
              class="border-bottom border-secondary text-center"
              style="padding: 1rem;"
            >
              <i
                :class="row.infura
                  ? 'fas fa-check-circle text-success'
                  : 'fas fa-times-circle text-danger'"
              ></i>
              <span class="ms-2">{{ row.infura ? 'Yes' : 'No' }}</span>
            </td>
            <td
              class="border-bottom border-secondary text-center"
              style="padding: 1rem;"
            >
              <i
                :class="row.quicknode
                  ? 'fas fa-check-circle text-success'
                  : 'fas fa-times-circle text-danger'"
              ></i>
              <span class="ms-2">{{ row.quicknode ? 'Yes' : 'No' }}</span>
            </td>
            <td
              class="border-bottom border-secondary text-center"
              style="padding: 1rem;"
            >
              <i
                :class="row.kaleido
                  ? 'fas fa-check-circle text-success'
                  : 'fas fa-times-circle text-danger'"
              ></i>
              <span class="ms-2">{{ row.kaleido ? 'Yes' : 'No' }}</span>
            </td>
            <td
              class="border-bottom border-secondary text-center"
              style="padding: 1rem;"
            >
              <i
                :class="row.kakr
                  ? 'fas fa-check-circle text-success'
                  : 'fas fa-times-circle text-danger'"
              ></i>
              <span class="ms-2">{{ row.kakr ? 'Yes' : 'No' }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  { feature: 'Litecoin Tokenization', infura: false, quicknode: false, kaleido: false, kakr: true },
  { feature: 'Robust API Features', infura: false, quicknode: false, kaleido: false, kakr: true },
  { feature: 'Real-World Asset Tokenization', infura: false, quicknode: false, kaleido: false, kakr: true },
  { feature: 'General Accessibility', infura: true, quicknode: true, kaleido: true, kakr: true },
  { feature: 'Security and Compliance', infura: true, quicknode: true, kaleido: true, kakr: true },
  { feature: 'Enterprise-Grade Performance', infura: true, quicknode: true, kaleido: true, kakr: true },
  { feature: 'Azure Infrastructure Development', infura: false, quicknode: false, kaleido: false, kakr: true },
  { feature: 'Agentic AI Assistance', infura: false, quicknode: false, kaleido: false, kakr: true },
  { feature: 'Multisig Endpoints', infura: false, quicknode: false, kaleido: false, kakr: true },
  { feature: 'IPFS Support', infura: true, quicknode: true, kaleido: true, kakr: true }
];
</script>

<style scoped>
/* If you need additional custom styling, place it here. */
</style>
