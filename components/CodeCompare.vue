<template>
  <section class="bg-gray-900 section-py sm:section-py">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <header class="text-center mb-10">
        <h2 class="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {{ translations.fromComplexToClean }}
        </h2>
        <p class="mt-4 text-lg text-gray-300">{{ translations.watchHowLiaas }}</p>
      </header>

      <div class="relative rounded-2xl bg-[#0d1117] shadow-2xl ring-1 ring-white/10 overflow-hidden">

        <!-- Window bar -->
        <div class="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div class="inline-flex items-center rounded-lg bg-black/40 p-1">
            <button @click="activeTab = 'without'" :class="['tab-btn', activeTab === 'without' && 'tab-btn--active']">Legacy</button>
            <button @click="activeTab = 'with'" :class="['tab-btn', activeTab === 'with' && 'tab-btn--active']">
              <span class="mr-1 text-emerald-400">⚡</span>PTERI
            </button>
          </div>
          <div class="w-16"></div>
        </div>

        <!-- Language tabs (PTERI only) -->
        <div v-show="activeTab === 'with'" class="flex gap-1 px-4 py-2 border-b border-white/5 bg-black/20 overflow-x-auto">
          <button v-for="l in languages" :key="l.id" @click="activeLang = l.id"
            :class="['lang-btn', activeLang === l.id && 'lang-btn--active']">
            {{ l.label }}
          </button>
        </div>

        <!-- Code area -->
        <div class="relative">
          <button class="btn-copy" @click="doCopy">{{ copyLabel }}</button>
          <pre class="code-pre"><code v-html="displayCode"></code></pre>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { locale } = useI18n()

const translations = computed(() => {
  const t: Record<string, any> = {
    en: { fromComplexToClean: 'From Complex to Clean', watchHowLiaas: 'Watch how PTERI simplifies blockchain development', copy: 'Copy', copied: 'Copied!' },
    de: { fromComplexToClean: 'Von Komplex zu Einfach', watchHowLiaas: 'Sehen Sie, wie PTERI die Blockchain-Entwicklung vereinfacht', copy: 'Kopieren', copied: 'Kopiert!' },
    es: { fromComplexToClean: 'De Complejo a Limpio', watchHowLiaas: 'Vea cómo PTERI simplifica el desarrollo blockchain', copy: 'Copiar', copied: '¡Copiado!' },
    ja: { fromComplexToClean: '複雑からシンプルへ', watchHowLiaas: 'PTERIがブロックチェーン開発をどのように簡素化するかをご覧ください', copy: 'コピー', copied: 'コピーしました！' },
    ar: { fromComplexToClean: 'من المعقد إلى البسيط', watchHowLiaas: 'شاهد كيف يبسط PTERI تطوير البلوكشين', copy: 'نسخ', copied: 'تم النسخ!' },
  }
  return t[locale.value] || t.en
})

const activeTab = ref<'without' | 'with'>('without')
const activeLang = ref('js')
const copied = ref(false)

const languages = [
  { id: 'js',     label: 'JavaScript' },
  { id: 'python', label: 'Python' },
  { id: 'java',   label: 'Java' },
  { id: 'php',    label: 'PHP' },
  { id: 'go',     label: 'Go' },
]

const legacyCode = `<span class="c">/* npm install web3 */</span>
<span class="k">const</span> <span class="n">Web3</span> <span class="o">=</span> <span class="nf">require</span>(<span class="s">'web3'</span>);

<span class="k">const</span> <span class="n">web3</span> <span class="o">=</span> <span class="k">new</span> <span class="n">Web3</span>(
  <span class="k">new</span> <span class="n">Web3</span>.providers.<span class="nf">HttpProvider</span>(
    <span class="s">'https://Your_RPC.provider/v3/YOUR_API_KEY'</span>
  )
);

<span class="k">const</span> <span class="n">usdtABI</span> <span class="o">=</span> [<span class="c">/* ABI here */</span>];
<span class="k">const</span> <span class="n">contract</span> <span class="o">=</span> <span class="k">new</span> <span class="n">web3</span>.eth.<span class="nf">Contract</span>(<span class="n">usdtABI</span>, <span class="s">'Contract_Address'</span>);

<span class="k">async function</span> <span class="nf">transferUSDT</span>(<span class="n">privateKey</span>, <span class="n">toAddress</span>, <span class="n">amount</span>) {
  <span class="k">const</span> <span class="n">account</span> <span class="o">=</span> <span class="n">web3</span>.eth.accounts.<span class="nf">privateKeyToAccount</span>(<span class="n">privateKey</span>);
  <span class="k">const</span> <span class="n">gasPrice</span> <span class="o">=</span> <span class="k">await</span> <span class="n">web3</span>.eth.<span class="nf">getGasPrice</span>();
  <span class="k">const</span> <span class="n">nonce</span> <span class="o">=</span> <span class="k">await</span> <span class="n">web3</span>.eth.<span class="nf">getTransactionCount</span>(<span class="n">account</span>.address);

  <span class="k">const</span> <span class="n">tx</span> <span class="o">=</span> {
    from: <span class="n">account</span>.address, to: <span class="s">'Contract_Address'</span>,
    gasPrice, gas: <span class="num">21000</span>, nonce,
    data: <span class="n">contract</span>.methods.<span class="nf">transfer</span>(<span class="n">toAddress</span>, <span class="n">amount</span>).<span class="nf">encodeABI</span>(),
  };

  <span class="k">const</span> <span class="n">signed</span> <span class="o">=</span> <span class="k">await</span> <span class="n">web3</span>.eth.accounts.<span class="nf">signTransaction</span>(<span class="n">tx</span>, <span class="n">privateKey</span>);
  <span class="k">const</span> <span class="n">hash</span> <span class="o">=</span> <span class="k">await</span> <span class="n">web3</span>.eth.<span class="nf">sendSignedTransaction</span>(<span class="n">signed</span>.rawTransaction);
  <span class="n">console</span>.<span class="nf">log</span>(<span class="s">'Hash:'</span>, <span class="n">hash</span>);
}`

const pteriCodes: Record<string, string> = {
  js: `<span class="c">// npm install @kakr/pteri-sdk</span>
<span class="k">import</span> { <span class="n">PteriAuth</span> } <span class="k">from</span> <span class="s">'@pteri/sdk'</span>;

<span class="k">const</span> <span class="n">verification</span> <span class="o">=</span> <span class="k">await</span> <span class="n">PteriAuth</span>.<span class="nf">verify</span>({
  payload:   <span class="n">request</span>.body,
  signature: <span class="n">request</span>.headers[<span class="s">'x-pteri-sig'</span>],
  policy:    <span class="s">'payment_authorization'</span>
});

<span class="k">if</span> (!<span class="n">verification</span>.isValid) {
  <span class="k">throw new</span> <span class="nf">Error</span>(<span class="s">'Invalid Authority Proof'</span>);
}

<span class="nf">processTransaction</span>(<span class="n">verification</span>.claims);`,

  python: `<span class="c"># pip install pteri-sdk</span>
<span class="k">from</span> <span class="n">pteri_sdk</span> <span class="k">import</span> <span class="n">PteriAuth</span>

<span class="n">verification</span> <span class="o">=</span> <span class="n">PteriAuth</span>.<span class="nf">verify</span>(
    payload   <span class="o">=</span> <span class="n">request</span>.body,
    signature <span class="o">=</span> <span class="n">request</span>.headers.<span class="nf">get</span>(<span class="s">'x-pteri-sig'</span>),
    policy    <span class="o">=</span> <span class="s">'payment_authorization'</span>
)

<span class="k">if not</span> <span class="n">verification</span>.is_valid:
    <span class="k">raise</span> <span class="nf">Exception</span>(<span class="s">'Invalid Authority Proof'</span>)

<span class="nf">process_transaction</span>(<span class="n">verification</span>.claims)`,

  java: `<span class="c">// Maven: com.kakr:pteri-sdk:1.0.0</span>
<span class="k">import</span> <span class="n">com.kakr.pteri.PteriAuth</span>;
<span class="k">import</span> <span class="n">com.kakr.pteri.Verification</span>;

<span class="n">Verification</span> <span class="n">v</span> <span class="o">=</span> <span class="n">PteriAuth</span>.<span class="nf">verify</span>(
    <span class="n">request</span>.<span class="nf">getBody</span>(),
    <span class="n">request</span>.<span class="nf">getHeader</span>(<span class="s">"x-pteri-sig"</span>),
    <span class="s">"payment_authorization"</span>
);

<span class="k">if</span> (!<span class="n">v</span>.<span class="nf">isValid</span>()) {
    <span class="k">throw new</span> <span class="nf">RuntimeException</span>(<span class="s">"Invalid Authority Proof"</span>);
}

<span class="nf">processTransaction</span>(<span class="n">v</span>.<span class="nf">getClaims</span>());`,

  php: `<span class="c">&lt;?php</span>
<span class="c">// composer require kakr/pteri-sdk</span>
<span class="k">use</span> <span class="n">Kakr\\Pteri\\PteriAuth</span>;

<span class="n">$v</span> <span class="o">=</span> <span class="n">PteriAuth</span>::<span class="nf">verify</span>([
    <span class="s">'payload'</span>   <span class="o">=></span> <span class="n">$request</span>-><span class="nf">getBody</span>(),
    <span class="s">'signature'</span> <span class="o">=></span> <span class="n">$request</span>-><span class="nf">getHeader</span>(<span class="s">'x-pteri-sig'</span>),
    <span class="s">'policy'</span>    <span class="o">=></span> <span class="s">'payment_authorization'</span>,
]);

<span class="k">if</span> (!<span class="n">$v</span>->isValid) {
    <span class="k">throw new</span> <span class="nf">Exception</span>(<span class="s">'Invalid Authority Proof'</span>);
}

<span class="nf">processTransaction</span>(<span class="n">$v</span>->claims);`,

  go: `<span class="c">// go get github.com/kakr/pteri-sdk-go</span>
<span class="k">import</span> <span class="s">"github.com/kakr/pteri-sdk-go/pteri"</span>

<span class="n">v</span>, <span class="n">err</span> <span class="o">:=</span> <span class="n">pteri</span>.<span class="nf">Verify</span>(<span class="n">pteri</span>.VerifyOptions{
    Payload:   <span class="n">r</span>.Body,
    Signature: <span class="n">r</span>.Header.<span class="nf">Get</span>(<span class="s">"x-pteri-sig"</span>),
    Policy:    <span class="s">"payment_authorization"</span>,
})

<span class="k">if</span> <span class="n">err</span> != <span class="k">nil</span> || !<span class="n">v</span>.IsValid {
    <span class="n">http</span>.<span class="nf">Error</span>(<span class="n">w</span>, <span class="s">"Invalid Authority Proof"</span>, <span class="num">401</span>)
    <span class="k">return</span>
}

<span class="nf">processTransaction</span>(<span class="n">v</span>.Claims)`,
}

const rawCodes: Record<string, string> = {
  js: `// npm install @kakr/pteri-sdk\nimport { PteriAuth } from '@pteri/sdk';\n\nconst verification = await PteriAuth.verify({\n  payload: request.body,\n  signature: request.headers['x-pteri-sig'],\n  policy: 'payment_authorization'\n});\n\nif (!verification.isValid) throw new Error('Invalid Authority Proof');\nprocessTransaction(verification.claims);`,
  python: `# pip install pteri-sdk\nfrom pteri_sdk import PteriAuth\n\nverification = PteriAuth.verify(\n    payload=request.body,\n    signature=request.headers.get('x-pteri-sig'),\n    policy='payment_authorization'\n)\n\nif not verification.is_valid:\n    raise Exception('Invalid Authority Proof')\nprocess_transaction(verification.claims)`,
  java: `// Maven: com.kakr:pteri-sdk:1.0.0\nimport com.kakr.pteri.PteriAuth;\n\nVerification v = PteriAuth.verify(request.getBody(), request.getHeader("x-pteri-sig"), "payment_authorization");\nif (!v.isValid()) throw new RuntimeException("Invalid Authority Proof");\nprocessTransaction(v.getClaims());`,
  php: `<?php\n// composer require kakr/pteri-sdk\nuse Kakr\\Pteri\\PteriAuth;\n\n$v = PteriAuth::verify(['payload' => $request->getBody(), 'signature' => $request->getHeader('x-pteri-sig'), 'policy' => 'payment_authorization']);\nif (!$v->isValid) throw new Exception('Invalid Authority Proof');\nprocessTransaction($v->claims);`,
  go: `// go get github.com/kakr/pteri-sdk-go\nimport "github.com/kakr/pteri-sdk-go/pteri"\n\nv, err := pteri.Verify(pteri.VerifyOptions{Payload: r.Body, Signature: r.Header.Get("x-pteri-sig"), Policy: "payment_authorization"})\nif err != nil || !v.IsValid { http.Error(w, "Invalid Authority Proof", 401); return }\nprocessTransaction(v.Claims)`,
}

const legacyRaw = `/* npm install web3 */\nconst Web3 = require('web3');\nconst web3 = new Web3(new Web3.providers.HttpProvider('https://Your_RPC.provider/v3/YOUR_API_KEY'));\n// ... 30+ lines of boilerplate`

const displayCode = computed(() => {
  if (activeTab.value === 'without') return legacyCode
  return pteriCodes[activeLang.value] || pteriCodes.js
})

const copyLabel = computed(() => copied.value ? translations.value.copied : translations.value.copy)

async function doCopy() {
  const text = activeTab.value === 'without' ? legacyRaw : (rawCodes[activeLang.value] || rawCodes.js)
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}
</script>

<style scoped>
.tab-btn {
  @apply flex items-center px-3 py-1 text-xs font-medium rounded transition-all duration-200 text-slate-400 hover:text-white;
}
.tab-btn--active { @apply bg-white/10 text-white; }

.lang-btn {
  @apply flex-shrink-0 px-3 py-1 text-xs font-semibold rounded-md transition-all duration-150 text-slate-400 hover:text-white hover:bg-white/10;
}
.lang-btn--active { @apply bg-emerald-500/20 text-emerald-400 border border-emerald-500/30; }

.code-pre {
  @apply m-0 p-6 overflow-auto text-sm leading-relaxed;
  height: 400px;
  background: transparent;
  color: #e2e8f0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

.btn-copy {
  @apply absolute top-4 right-4 z-10 text-xs px-3 py-1.5 rounded-md border border-gray-600 bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors;
}

/* Syntax token colors */
:deep(.k)   { color: #ff79c6; } /* keywords */
:deep(.n)   { color: #8be9fd; } /* names/vars */
:deep(.s)   { color: #f1fa8c; } /* strings */
:deep(.c)   { color: #6272a4; font-style: italic; } /* comments */
:deep(.o)   { color: #ff79c6; } /* operators */
:deep(.nf)  { color: #50fa7b; } /* function calls */
:deep(.num) { color: #bd93f9; } /* numbers */
</style>
