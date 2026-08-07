<script setup>
const features = [
  {
    icon: '🔐',
    title: 'Decentralized 2FA',
    desc: 'Secure authentication without SMS or cloud - challenges signed in-wallet.'
  },
  {
    icon: '🆔',
    title: 'PTERI ID',
    desc: 'Self-custodied, verifiable ID; claims hashed to Litecoin chain.'
  },
  {
    icon: '🔎',
    title: 'Decentralized KYC',
    desc: 'Reusable ZK proofs for age, residency, uniqueness - no PII shared.'
  },
  {
    icon: '🚚',
    title: 'Shipping ID',
    desc: 'Private, verifiable address proof - coming soon.',
    comingSoon: true
  }
]

const steps = [
  {
    icon: '👤',
    title: 'Enter identity & biometrics',
    desc: 'Input your details securely in the PTERI App.'
  },
  {
    icon: '🔗',
    title: 'Decentralized partner verification',
    desc: 'Get verified by trusted, decentralized ID partners.'
  },
  {
    icon: '🔏',
    title: 'Claims signed & hashed',
    desc: 'Claims are cryptographically signed and hashed on Litecoin.'
  },
  {
    icon: '🔒',
    title: 'Encrypted local storage',
    desc: 'Your sensitive data is encrypted and stored locally.'
  },
  {
    icon: '✅',
    title: 'Approve ZKP via 2FA',
    desc: 'Use wallet-native 2FA to approve Zero-Knowledge Proof requests.'
  },
  {
    icon: '🛡️',
    title: 'Share proof only with consent',
    desc: 'No data is shared without explicit user approval.'
  }
]

/**
 * Radial positioning helper for infographic
 */
function getStepStyle(i, total) {
  const angle = (2 * Math.PI * i) / total - Math.PI / 2
  const radius = 185 // px from center (adjust as needed)
  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)
  return {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
    zIndex: 2,
  }
}
function getLineProps(i, total) {
  // Returns the x2,y2 for the SVG line (from center to edge)
  const angle = (2 * Math.PI * i) / total - Math.PI / 2
  return {
    x2: 100 + 80 * Math.cos(angle),
    y2: 100 + 80 * Math.sin(angle),
  }
}
</script>

<template>
  <section>
    <!-- Features Grid -->
    <div class="features-section py-5">
      <div class="container">
        <h2 class="features-title">What We Offer</h2>
        <div class="features-grid">
          <div v-for="(f, i) in features" :key="i" class="feature-card">
            <div class="feature-icon">{{ f.icon }}</div>
            <div class="feature-title">{{ f.title }}</div>
            <div class="feature-desc">{{ f.desc }}</div>
            <div v-if="f.comingSoon" class="coming-soon">(Coming Soon)</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave Divider -->
    <div class="wave-divider">
      <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill="#23244c" fill-opacity="1"
          d="M0,30 C360,90 1080,0 1440,60 L1440,90 L0,90 Z"/>
      </svg>
    </div>

    <!-- Radial Infographic -->
    <div class="radial-infographic-section">
      <div class="container">
        <h2 class="radial-title">How It Works</h2>
        <div class="radial-wrap">
          <!-- Center circle -->
          <div class="radial-center">
            <div class="radial-center-icon">💡</div>
            <div class="radial-center-text">
              <strong>PTERI Identity<br />Process</strong>
            </div>
          </div>
          <!-- SVG connectors -->
          <svg v-for="(step, i) in steps" :key="'line'+i"
            :style="getStepStyle(i, steps.length)"
            class="radial-line" width="200" height="200">
            <line x1="100" y1="100"
              :x2="getLineProps(i, steps.length).x2"
              :y2="getLineProps(i, steps.length).y2"
              stroke="#00d5ff" stroke-width="2" />
          </svg>
          <!-- Steps -->
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="radial-step"
            :style="getStepStyle(i, steps.length)"
          >
            <div class="radial-step-content">
              <div class="radial-step-icon">{{ step.icon }}</div>
              <div class="radial-step-title">{{ step.title }}</div>
              <div class="radial-step-desc">{{ step.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Features Section */
.features-section {
  background: #fff;
  color: #23244c;
}
.features-title {
  text-align: center;
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 2rem;
  max-width: 1080px;
  margin: 0 auto;
}
.feature-card {
  background: #fff;
  border-radius: 1rem;
  padding: 2rem 1.3rem 1.2rem 1.3rem;
  box-shadow: 0 4px 20px 0 rgba(44,62,80,.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px solid #efefef;
  transition: box-shadow .2s, border-color .2s, transform .2s;
  min-height: 230px;
}
.feature-card:hover {
  box-shadow: 0 8px 32px rgba(0,213,255,0.10), 0 2px 16px rgba(255,0,230,0.08);
  border-color: #00d5ff;
  transform: translateY(-4px) scale(1.01);
}
.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 0.9rem;
}
.feature-title {
  font-weight: 700;
  font-size: 1.13rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.feature-desc {
  color: #55587a;
  text-align: center;
  font-size: 1rem;
}
.coming-soon {
  color: #ee00a8;
  font-size: 0.98rem;
  margin-top: 0.5rem;
}

/* Wave Divider */
.wave-divider {
  width: 100%;
  line-height: 0;
}
.wave-divider svg {
  display: block;
  width: 100%;
  height: 90px;
}

/* Radial Infographic Section */
.radial-infographic-section {
  background: linear-gradient(135deg, #23244c 0%, #35345c 100%);
  color: #fff;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  padding-bottom: 4rem;
}
.radial-title {
  text-align: center;
  font-size: 2.3rem;
  font-weight: 800;
  margin-bottom: 2.2rem;
  letter-spacing: 0.01em;
}
.radial-wrap {
  position: relative;
  width: 430px;
  height: 430px;
  margin: 0 auto;
}
.radial-center {
  position: absolute;
  top: 50%; left: 50%;
  width: 150px; height: 150px;
  background: #fff;
  color: #23244c;
  border-radius: 50%;
  box-shadow: 0 4px 24px 0 rgba(44,62,80,.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transform: translate(-50%, -50%);
  text-align: center;
}
.radial-center-icon { font-size: 2.1rem; }
.radial-step-content {
  background: linear-gradient(135deg, #00d5ff 0%, #005eff 60%, #ff00e6 100%);
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(44,62,80,0.15);
  padding: 1.1rem 1rem 1rem 1rem;
  min-width: 120px;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
}
.radial-step-icon { font-size: 2rem; margin-bottom: 0.4rem; }
.radial-step-title { font-weight: 700; font-size: 1rem; margin-bottom: 0.2rem; text-align: center; }
.radial-step-desc { color: #e0e7ff; font-size: 0.92rem; text-align: center; }
.radial-line { position: absolute; left: 50%; top: 50%; pointer-events: none; z-index: 1; transform: translate(-50%, -50%); }

/* Responsive */
@media (max-width: 700px) {
  .radial-wrap { width: 99vw; height: 540px; max-width: 99vw; }
  .radial-center { width: 120px; height: 120px; font-size: 0.96rem; }
  .radial-step-content { min-width: 98px; max-width: 120px; font-size: 0.91rem; padding: 0.8rem 0.5rem 0.7rem 0.5rem; }
}
</style>
