<!-- Pricing Section -->
<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center py-2">Pricing</h2>
      <!-- Desktop Table Layout -->
<div id="desktopTable" class="table-responsive d-none d-md-block rounded shadow border border-secondary overflow-hidden">
  <table class="table table-bordered text-center mb-0">
    <thead class="bg-dark text-white">
      <tr class="table-header">
        <th class="p-4 text-uppercase">Features</th>
        <th v-for="(plan, idx) in plans" :key="plan.name" class="p-4 plan-col position-relative">
          <div class="text-success fw-semibold fs-6">{{ plan.name }}</div>
          <div class="fs-4 fw-bold mt-1">
            {{ plan.price }}
            <span v-if="plan.billing" class="fs-6 text-white align-middle">{{ plan.billing }}</span>
          </div>
          <a :href="plan.link" target="_blank" class="default-btn mt-3 w-100" :class="buttonColors[idx]">
            {{ plan.cta }}
          </a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(feature, rowIdx) in features" :key="feature.name" :class="{ 'bg-light': rowIdx % 2 === 0 }">
        <td class="p-3 text-start fw-medium text-dark">{{ feature.name }}</td>
        <td v-for="(val, colIdx) in feature.values" :key="colIdx" class="p-3 align-middle">
          <template v-if="val === true">
            <i class="fas fa-check text-success fs-5"></i>
          </template>
          <template v-else-if="val === false">
            <i class="fas fa-times text-danger fs-5"></i>
          </template>
          <template v-else>
            <span class="text-dark">{{ val }}</span>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      
      <!-- Mobile Accordion Layout -->
      <div id="mobileAccordion" class="mt-4 d-md-none">
        <div v-for="(plan, idx) in plans" :key="plan.name" class="mb-3 border rounded">
          <button class="w-100 d-flex justify-content-between align-items-center p-3 bg-dark text-white border-0" @click="togglePlan(plan.name)">
            <span class="fw-semibold text-success">{{ plan.name }}</span>
            <span class="fs-5 fw-bold">{{ plan.price }} <span v-if="plan.billing" class="fs-6 text-white align-middle">{{ plan.billing }}</span></span>
            <span :class="{ 'rotate-180': activePlan === plan.name }">▼</span>
          </button>
          <div v-if="activePlan === plan.name" class="p-3 bg-white">
            <ul class="list-unstyled">
              <li v-for="f in features" :key="f.name" class="d-flex justify-content-between">
                <span class="text-dark">{{ f.name }}</span>
                <span class="fw-semibold">
                  <template v-if="f.values[idx] === true">
                    <i class="fas fa-check text-success"></i>
                  </template>
                  <template v-else-if="f.values[idx] === false">
                    <i class="fas fa-times text-danger"></i>
                  </template>
                  <template v-else>{{ f.values[idx] }}</template>
                </span>
              </li>
            </ul>
            <a :href="plan.link" target="_blank" class="btn btn-sm w-100 mt-2" :class="buttonColors[idx]">
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'PteriPricing',
  data() {
    return {
      // We use an array to alternate button colors:
      buttonColors: ['btn-black', 'btn-green', 'btn-black', 'btn-green'],

      // Plan data
      plans: [
        {
          name: "Pteri Basic",
          price: "$0",
          billing: "/month",
          cta: "Start Building",
          link: "https://pteri.org/Pricing"
        },
        {
          name: "Pteri + LiaaS",
          price: "$49",
          billing: "/month",
          cta: "Start Building",
          link: "https://pteri.org/Pricing"
        },
        {
          name: "Enterprise Plan",
          price: "Custom",
          billing: "",
          cta: "Get Started",
          link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/kakrplatforminc1697572308188.pteri-node-offer?tab=PlansAndPrice"
        }
      ],

      // Feature data
      features: [
        { name: "API Calls Per Second", values: ["3/sec", "50/sec", "100/sec", "Unlimited"] },
        { name: "Unlimited API Key Users", values: [false, true, true, true] },
        { name: "Pay-as-You-Go ($0.015 per call)", values: [false, true, true, false] },
        { name: "Enhanced Explorer Features", values: ["Basic", "Enhanced", "Enhanced", "Full Feature Set"] },
        { name: "Priority Support", values: [false, "Email Support", "Priority Email & Chat Support", "24/7 Dedicated Support"] },
        { name: "Bookmarking Capabilities", values: [false, true, true, true] },
        { name: "Generate PDF Statements", values: [false, true, true, true] },
        { name: "In-depth Data Analytics", values: [false, true, "Advanced Analytics", true] },
        { name: "Access to Kakr Playground", values: [false, true, true, true] },
        { name: "AI Agent Assistance via Playground", values: [false, true, true, true] },
        { name: "Advanced Security Features", values: [false, false, true, true] },
        { name: "Litecoin Multi-Sig Support", values: [false, false, true, true] },
        { name: "Stablecoins & Security Tokens", values: [false, false, true, true] },
        { name: "Dedicated Node", values: [false, false, true, true] },
        { name: "White-Label Solutions", values: [false, false, true, true] },
        { name: "Enterprise IPFS Storage", values: [false, false, false, true] }
      ],

      // For mobile accordion
      activePlan: null
    }
  },
  methods: {
    togglePlan(planName) {
      this.activePlan = (this.activePlan === planName) ? null : planName
    }
  }
}
</script>

<style scoped>
/* 1) Force table columns to be equal width (5 columns => 20% each) */
table {
  table-layout: fixed;
  width: 100%;
}
th, td {
  width: 20%;
  text-align: center;
  vertical-align: middle;
}

/* 2) Button style classes: same width (140px), black or green */
.plan-btn {
  display: inline-block;
  width: 140px;
  padding: 0.75rem;
  text-align: center;
  border-radius: 0.25rem;
  font-weight: 600;
  transition: background-color 0.3s, opacity 0.3s;
}
.plan-btn:hover {
  opacity: 0.9;
}

/* Black button variant */
.btn-black {
  background-color: #000;
  color: #fff;
}

/* Green gradient button variant */
.btn-green {
  background: linear-gradient(to right, #38b000, #60d300);
  color: #fff;
}

/* 3) Arrow rotation for mobile toggles */
.rotate-arrow {
  transition: transform 0.3s ease-in-out;
}
.rotate-180 {
  transform: rotate(180deg);
}
.default-btn {
    background: var(--bg-gradient);
    font-family: var(--primary-font);
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    line-height: 1px;
    display: block;
    padding: 22px 35px;
    position: relative;
    border-radius: 2px;
    z-index: 1;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    min-width: 8em;
    text-align: center;
    line-height: 1.2;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: center;
  vertical-align: middle;
  width: 20%;
}

th:first-child, td:first-child {
  background-color: #f8f9fa;
  font-weight: 600;
}

.table-header th {
  background: linear-gradient(to right, #000, #333);
  color: #fff;
  border-bottom: 3px solid #4caf50;
}

tr:hover td {
  background-color: #f1f8f5;
}

.plan-col {
  transition: all 0.3s ease-in-out;
}

.plan-col:hover {
  background-color: #eafcef;
  box-shadow: inset 0 0 0 2px #38b000;
}

.default-btn {
  background: var(--bg-gradient);
  font-family: var(--primary-font);
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  text-align: center;
  line-height: 1.2;
}

.default-btn:hover {
  opacity: 0.95;
  transform: translateY(-2px);
}

.btn-green {
  background: linear-gradient(to right, #38b000, #60d300);
  color: #fff;
}

.btn-black {
  background-color: #000;
  color: #fff;
}

</style>
