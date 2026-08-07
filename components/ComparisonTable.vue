<template>
  <div class="comparison-table overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800/50">
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
        <thead class="bg-slate-50 dark:bg-slate-800">
          <tr>
            <th scope="col" class="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">{{ benefitLabel }}</th>
            <th scope="col" class="px-6 py-4 text-left text-sm font-semibold text-emerald-600 dark:text-emerald-400">{{ ourLabel }}</th>
            <th scope="col" class="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">{{ theirLabel }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr v-for="(row, index) in rows" :key="index" class="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/80">
            <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{{ row.benefit }}</td>
            <td class="px-6 py-4">
              <span class="inline-flex items-center text-sm text-emerald-700 dark:text-emerald-400">
                <span v-if="row.highlight" class="mr-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <svg class="h-3 w-3 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {{ row.ours }}
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{{ row.theirs }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  benefitLabel: {
    type: String,
    default: 'Benefit'
  },
  ourLabel: {
    type: String,
    default: 'Kakr Labs'
  },
  theirLabel: {
    type: String,
    default: 'Traditional Systems'
  },
  rows: {
    type: Array,
    required: true
  }
})
</script>
