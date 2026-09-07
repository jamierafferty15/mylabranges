const PANELS = [
  {
    id: 'fbc', title: 'Full Blood Count', iconKey: 'blood',
    subtitle: 'Haemoglobin · White blood cells · Platelets · Haematocrit',
    tests: ['haemoglobin', 'wbc', 'platelets', 'haematocrit']
  },
  {
    id: 'kidney', title: 'Kidney & Electrolytes', iconKey: 'kidney',
    subtitle: 'Sodium · Potassium · Creatinine · eGFR · Urea',
    tests: ['sodium', 'potassium', 'creatinine', 'egfr', 'urea']
  },
  {
    id: 'glucose', title: 'Blood Sugar', iconKey: 'glucose',
    subtitle: 'Fasting glucose · HbA1c',
    tests: ['fastingGlucose', 'hba1c']
  },
  {
    id: 'liver', title: 'Liver Function', iconKey: 'liver',
    subtitle: 'ALT · AST · ALP · Bilirubin · Albumin',
    tests: ['alt', 'ast', 'alp', 'bilirubin', 'albumin']
  },
  {
    id: 'cholesterol', title: 'Cholesterol', iconKey: 'cholesterol',
    subtitle: 'Total cholesterol · LDL · HDL',
    tests: ['totalCholesterol', 'ldl', 'hdl']
  },
  {
    id: 'thyroid', title: 'Thyroid', iconKey: 'thyroid',
    subtitle: 'TSH',
    tests: ['tsh']
  }
];

const TESTS = {
  haemoglobin: {
    name: 'Haemoglobin', short: 'Hb', unit: 'g/L', type: 'sexRange',
    description: 'The protein in red blood cells that carries oxygen around the body.',
    suggested: { male: { low: 130, high: 170 }, female: { low: 120, high: 150 } },
    lowMessage: 'Low haemoglobin can occur with anaemia and has several possible causes, including nutritional deficiency, blood loss or chronic illness.',
    highMessage: 'Higher haemoglobin values can occur for several reasons, including dehydration or increased red-cell production.'
  },
  wbc: {
    name: 'White blood cell count', short: 'WBC / leucocytes', unit: '×10⁹/L', type: 'range',
    description: 'Measures cells involved in the body’s immune response.',
    suggested: { low: 3.6, high: 11.0 },
    lowMessage: 'A low white blood cell count may occur with some infections, medicines or conditions affecting blood-cell production.',
    highMessage: 'A raised white blood cell count can occur with infection, inflammation, medicines and many other causes.'
  },
  platelets: {
    name: 'Platelets', short: 'PLT', unit: '×10⁹/L', type: 'range',
    description: 'Platelets help the blood form clots and stop bleeding.',
    suggested: { low: 150, high: 400 },
    lowMessage: 'A low platelet count can be associated with an increased tendency to bleed, although significance depends on the level and clinical context.',
    highMessage: 'A high platelet count can occur in response to inflammation or illness and sometimes for other reasons.'
  },
  haematocrit: {
    name: 'Haematocrit', short: 'Hct', unit: 'L/L', type: 'sexRange',
    description: 'The proportion of your blood that is made up of red blood cells.',
    suggested: { male: { low: 0.40, high: 0.50 }, female: { low: 0.36, high: 0.46 } },
    lowMessage: 'A low haematocrit may accompany anaemia or other conditions affecting red blood cells.',
    highMessage: 'A high haematocrit can occur with dehydration or increased red-cell production.'
  },
  sodium: {
    name: 'Sodium', short: 'Na', unit: 'mmol/L', type: 'range',
    description: 'An electrolyte important for fluid balance and normal nerve and muscle function.',
    suggested: { low: 133, high: 146 },
    lowMessage: 'Low sodium has many possible causes and should be interpreted alongside symptoms, medicines, fluid balance and other results.',
    highMessage: 'High sodium has many possible causes and should be interpreted alongside symptoms, medicines, fluid balance and other results.'
  },
  potassium: {
    name: 'Potassium', short: 'K', unit: 'mmol/L', type: 'range',
    description: 'An electrolyte important for normal nerve, muscle and heart function.',
    suggested: { low: 3.5, high: 5.3 },
    lowMessage: 'Potassium can be affected by medicines, fluid losses, kidney function and other factors.',
    highMessage: 'Potassium can be affected by kidney function, medicines and other factors.'
  },
  creatinine: {
    name: 'Creatinine', short: '', unit: 'µmol/L', type: 'sexRange',
    description: 'A waste product filtered from the blood by the kidneys and used when assessing kidney function.',
    suggested: { male: { low: 59, high: 104 }, female: { low: 45, high: 84 } },
    lowMessage: 'A low creatinine result can be influenced by factors such as muscle mass and is not usually interpreted in isolation.',
    highMessage: 'Higher creatinine can reflect reduced kidney filtration, but muscle mass, hydration and other factors also affect the result.'
  },
  egfr: {
    name: 'Estimated glomerular filtration rate', short: 'eGFR', unit: 'mL/min/1.73m²', type: 'egfrCategories',
    description: 'An estimate of how effectively the kidneys are filtering blood.',
    thresholdText: '≥90 normal/high filtration · 60–89 mildly reduced · 45–59 mild–moderate · 30–44 moderate–severe · 15–29 severely reduced · <15 very severely reduced.'
  },
  urea: {
    name: 'Urea', short: '', unit: 'mmol/L', type: 'range',
    description: 'A waste product produced when the body breaks down protein and removed mainly by the kidneys.',
    suggested: { low: 2.5, high: 7.8 },
    lowMessage: 'Urea can be influenced by hydration, diet, liver function and other factors.',
    highMessage: 'Urea can be influenced by kidney function, hydration, diet and other factors.'
  },
  fastingGlucose: {
    name: 'Fasting glucose', short: '', unit: 'mmol/L', type: 'fastingGlucoseCategories',
    description: 'Measures the amount of glucose in your blood after fasting.',
    thresholdText: '≤5.4 usual non-diabetic range · 5.5–6.9 increased-risk range · ≥7.0 diabetes diagnostic range.'
  },
  hba1c: {
    name: 'HbA1c', short: '', unit: 'mmol/mol', type: 'hba1cCategories',
    description: 'Reflects average blood glucose exposure over roughly the previous 2–3 months.',
    thresholdText: '≤41 usual non-diabetic range · 42–47 increased-risk range · ≥48 diabetes diagnostic range.'
  },
  alt: {
    name: 'Alanine aminotransferase', short: 'ALT', unit: 'U/L', type: 'sexUpper',
    description: 'An enzyme found mainly in liver cells. Raised results can have many possible causes.',
    suggested: { male: 41, female: 33 },
    highMessage: 'ALT can rise when liver cells are irritated or damaged, but there are many possible causes.'
  },
  ast: {
    name: 'Aspartate aminotransferase', short: 'AST', unit: 'U/L', type: 'sexRange',
    description: 'An enzyme present in the liver and also in tissues such as muscle.',
    suggested: { male: { low: 10, high: 50 }, female: { low: 10, high: 35 } },
    lowMessage: 'A low AST result is generally less clinically significant and should be interpreted in context.',
    highMessage: 'Raised AST is not specific to the liver and can also reflect other tissues, including muscle.'
  },
  alp: {
    name: 'Alkaline phosphatase', short: 'ALP', unit: 'U/L', type: 'range',
    description: 'An enzyme associated particularly with the liver and bile ducts, and also with bone.',
    suggested: { low: 30, high: 130 },
    lowMessage: 'A low ALP result can have several causes and should be interpreted with other results and clinical information.',
    highMessage: 'Raised ALP may originate from the liver or biliary system, or from bone, and needs clinical context.'
  },
  bilirubin: {
    name: 'Total bilirubin', short: 'Bilirubin', unit: 'µmol/L', type: 'upper',
    description: 'A pigment formed during normal breakdown of red blood cells and processed by the liver.',
    suggested: 21,
    highMessage: 'Raised bilirubin has many possible causes, including liver or bile problems and benign conditions such as Gilbert’s syndrome.'
  },
  albumin: {
    name: 'Albumin', short: '', unit: 'g/L', type: 'range',
    description: 'A major protein made by the liver that helps maintain fluid balance and performs several other functions.',
    suggested: { low: 35, high: 50 },
    lowMessage: 'Low albumin can occur for many reasons and is not specific to liver disease.',
    highMessage: 'Higher albumin is often related to hydration status and should be interpreted in clinical context.'
  },
  totalCholesterol: {
    name: 'Total cholesterol', short: '', unit: 'mmol/L', type: 'upperGuide',
    description: 'Measures the total amount of cholesterol carried in your blood.',
    suggested: 5.0,
    highMessage: 'Your total cholesterol is above the general healthy-adult guide used here. Cholesterol should be interpreted alongside overall cardiovascular risk.'
  },
  ldl: {
    name: 'LDL cholesterol', short: 'LDL', unit: 'mmol/L', type: 'upperGuide',
    description: 'LDL carries cholesterol to tissues and is one component associated with fatty deposits in arteries.',
    suggested: 3.0,
    highMessage: 'Your LDL cholesterol is above the general healthy-adult guide used here. Individual LDL targets depend on overall cardiovascular risk and medical history.'
  },
  hdl: {
    name: 'HDL cholesterol', short: 'HDL', unit: 'mmol/L', type: 'sexLowerGuide',
    description: 'HDL helps transport cholesterol away from tissues and back towards the liver.',
    suggested: { male: 1.0, female: 1.2 },
    lowMessage: 'Your HDL cholesterol is below the general healthy-adult guide used here. HDL is interpreted as part of the overall cholesterol and cardiovascular-risk picture.'
  },
  tsh: {
    name: 'Thyroid-stimulating hormone', short: 'TSH', unit: 'mIU/L', type: 'range',
    description: 'TSH is produced by the pituitary gland and signals the thyroid to produce thyroid hormones.',
    suggested: { low: 0.30, high: 4.20 },
    lowMessage: 'Low TSH can occur when thyroid hormone activity is increased, although medicines, illness and other factors can also affect it.',
    highMessage: 'Raised TSH can occur when thyroid hormone production is reduced, although interpretation may also depend on free T4 and clinical circumstances.'
  }
};

function panelIcon(iconKey) {
  const icons = {
    blood: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.8c-.5.7-1.3 1.8-2.1 3-1 1.4-1.9 2.8-2.7 4-.8 1.3-1.2 2.5-1.2 3.8 0 3.5 2.7 6.4 6 6.4s6-2.9 6-6.4c0-1.3-.4-2.5-1.2-3.8-.8-1.2-1.7-2.6-2.7-4-.8-1.2-1.6-2.3-2.1-3z"/></svg>`,
    kidney: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13 2.5 5.5 13h5L9.5 21.5 18.5 10h-5L13 2.5z"/></svg>`,
    glucose: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2.2 3.4h5.6v1.7H9.2V8.4Zm0 3h5.6v1.7H9.2v-1.7Zm0 3h3.8v1.7H9.2v-1.7Z"/></svg>`,
    liver: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 3h6v2.2l-1.7 3.1 4.5 8.1A2.4 2.4 0 0 1 15.7 20H8.3a2.4 2.4 0 0 1-2.1-3.6l4.5-8.1L9 5.2V3Zm1.8 9-2.7 4.8c-.3.5.1 1.2.7 1.2h6.4c.6 0 1-.7.7-1.2L13.2 12h-2.4Z"/></svg>`,
    cholesterol: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.2 10.8 19C6.2 14.9 4 12.8 4 9.7A4 4 0 0 1 8.1 5.6c1.5 0 2.9.7 3.9 1.9 1-1.2 2.4-1.9 3.9-1.9A4 4 0 0 1 20 9.7c0 3.1-2.2 5.2-6.8 9.3L12 20.2Z"/></svg>`,
    thyroid: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11.9 12c-1.4-2.7-3.8-4.6-6.7-5.1.2 3.6 1.8 6.6 4.8 8-1.6 1.3-2.5 3-2.7 4.9 2.4-.4 4.4-1.6 5.7-3.8 1.3 2.2 3.3 3.4 5.7 3.8-.2-1.9-1.1-3.6-2.7-4.9 3-1.4 4.6-4.4 4.8-8-2.9.5-5.3 2.4-6.7 5.1h-2.2Z"/></svg>`
  };
  return icons[iconKey] || '';
}

const panelsContainer = document.querySelector('#panels');
const ageInput = document.querySelector('#age');
const ageMessage = document.querySelector('#age-message');
const sexInputs = [...document.querySelectorAll('input[name="sex"]')];
const summarySection = document.querySelector('#summary-section');
const summaryStats = document.querySelector('#summary-stats');
const summaryList = document.querySelector('#summary-list');
const clearButton = document.querySelector('#clear-results');
let results = {};

function testTitle(test) {
  return test.short ? `${test.name} <span>${test.short}</span>` : test.name;
}

function standardRangeMarkup(test) {
  return `<div class="input-grid aligned-range-grid">
    <label class="field"><span>Your result</span><div class="input-with-unit"><input class="result-input" type="number" min="0" step="any" inputmode="decimal"><span>${test.unit}</span></div></label>
    <div class="range-entry"><span class="group-label">Reference range on your report</span>
      <div class="range-grid">
        <label class="field"><span>Lower</span><input class="range-low" type="number" min="0" step="any" inputmode="decimal"></label>
        <label class="field"><span>Upper</span><input class="range-high" type="number" min="0" step="any" inputmode="decimal"></label>
      </div>
      <label class="suggested-toggle"><input class="use-suggested" type="checkbox"><span>I don’t have a range — use suggested</span></label>
      <p class="suggested-copy"></p>
    </div>
  </div>`;
}

function upperLimitMarkup(test, guide = false) {
  return `<div class="input-grid aligned-single-grid">
    <label class="field"><span>Your result</span><div class="input-with-unit"><input class="result-input" type="number" min="0" step="any" inputmode="decimal"><span>${test.unit}</span></div></label>
    <div class="range-entry single-limit-entry">
      <label class="field"><span>${guide ? 'Upper guide/limit on your report' : 'Upper limit on your report'}</span><input class="range-high" type="number" min="0" step="any" inputmode="decimal"></label>
      <label class="suggested-toggle"><input class="use-suggested" type="checkbox"><span>${guide ? 'I don’t have a value — use suggested guide' : 'I don’t have an upper limit — use suggested'}</span></label>
      <p class="suggested-copy"></p>
    </div>
  </div>`;
}

function lowerLimitMarkup(test) {
  return `<div class="input-grid aligned-single-grid">
    <label class="field"><span>Your result</span><div class="input-with-unit"><input class="result-input" type="number" min="0" step="any" inputmode="decimal"><span>${test.unit}</span></div></label>
    <div class="range-entry single-limit-entry">
      <label class="field"><span>Lower guide/limit on your report</span><input class="range-low" type="number" min="0" step="any" inputmode="decimal"></label>
      <label class="suggested-toggle"><input class="use-suggested" type="checkbox"><span>I don’t have a value — use suggested guide</span></label>
      <p class="suggested-copy"></p>
    </div>
  </div>`;
}

function categoryMarkup(test) {
  return `<div class="threshold-card"><p><strong>Established interpretation thresholds:</strong> ${test.thresholdText}</p></div>
    <label class="field result-only"><span>Your result</span><div class="input-with-unit"><input class="result-input" type="number" min="0" step="any" inputmode="decimal"><span>${test.unit}</span></div></label>`;
}

function testInputMarkup(test) {
  if (['range', 'sexRange'].includes(test.type)) return standardRangeMarkup(test);
  if (['sexUpper', 'upper'].includes(test.type)) return upperLimitMarkup(test, false);
  if (test.type === 'upperGuide') return upperLimitMarkup(test, true);
  if (test.type === 'sexLowerGuide') return lowerLimitMarkup(test);
  return categoryMarkup(test);
}

function renderPanels() {
  panelsContainer.innerHTML = PANELS.map((panel, index) => `
    <details class="panel panel-${panel.id}">
      <summary>
        <div class="panel-summary-main">
          <span class="panel-icon" aria-hidden="true">${panelIcon(panel.iconKey)}</span>
          <div>
            <span class="panel-kicker">${panel.title}</span>
            <strong>${panel.tests.length} ${panel.tests.length === 1 ? 'test' : 'tests'}</strong>
            <small>${panel.subtitle}</small>
          </div>
        </div>
        <span class="chevron" aria-hidden="true">⌄</span>
      </summary>
      <div class="panel-body">
        ${panel.tests.map(key => {
          const test = TESTS[key];
          return `<article class="test-card" data-test="${key}">
            <div class="test-heading"><div><h3>${testTitle(test)}</h3><p>${test.description}</p></div><span class="unit-badge">${test.unit}</span></div>
            ${testInputMarkup(test)}
            <div class="result-box" aria-live="polite"></div>
          </article>`;
        }).join('')}
      </div>
    </details>`).join('');
}

renderPanels();
const cards = [...document.querySelectorAll('.test-card')];

function selectedSex() { return sexInputs.find(input => input.checked)?.value || null; }
function adultEligible() {
  if (!ageInput.value) { ageMessage.textContent = ''; return true; }
  if (Number(ageInput.value) < 18) { ageMessage.textContent = 'This checker only interprets results for adults aged 18 and over.'; return false; }
  if (Number(ageInput.value) > 120) { ageMessage.textContent = 'Please check the age entered.'; return false; }
  ageMessage.textContent = ''; return true;
}
function formatNumber(value) { return value === undefined || value === null ? '' : String(Number(value)); }

function getSuggested(test) {
  const sex = selectedSex();
  if (test.type === 'sexRange') return sex ? test.suggested[sex] : null;
  if (test.type === 'sexUpper') return sex ? { high: test.suggested[sex] } : null;
  if (test.type === 'sexLowerGuide') return sex ? { low: test.suggested[sex] } : null;
  if (test.type === 'range') return test.suggested;
  if (['upper', 'upperGuide'].includes(test.type)) return { high: test.suggested };
  return null;
}

function setSuggestedState(card) {
  const test = TESTS[card.dataset.test];
  const checkbox = card.querySelector('.use-suggested');
  if (!checkbox) return;
  const lowInput = card.querySelector('.range-low');
  const highInput = card.querySelector('.range-high');
  const copy = card.querySelector('.suggested-copy');

  if (!checkbox.checked) {
    if (lowInput) lowInput.disabled = false;
    if (highInput) highInput.disabled = false;
    copy.textContent = '';
    return;
  }

  const suggested = getSuggested(test);
  if (!suggested) {
    if (lowInput) lowInput.disabled = true;
    if (highInput) highInput.disabled = true;
    copy.textContent = 'Select Male or Female above to use the suggested value for this test.';
    return;
  }

  if (lowInput) { lowInput.disabled = true; lowInput.value = ''; }
  if (highInput) { highInput.disabled = true; highInput.value = ''; }

  if (suggested.low !== undefined && suggested.high !== undefined) {
    copy.textContent = `Using suggested adult range: ${formatNumber(suggested.low)}–${formatNumber(suggested.high)} ${test.unit}`;
  } else if (suggested.high !== undefined) {
    const label = test.type === 'upperGuide' ? 'general healthy-adult guide' : 'suggested adult upper limit';
    copy.textContent = `Using ${label}: ${formatNumber(suggested.high)} ${test.unit}`;
  } else if (suggested.low !== undefined) {
    copy.textContent = `Using general healthy-adult guide: ${formatNumber(suggested.low)} ${test.unit} or above`;
  }
}

function renderResult(card, state) {
  const box = card.querySelector('.result-box');
  const test = TESTS[card.dataset.test];
  if (!state) { box.innerHTML = ''; delete results[card.dataset.test]; updateSummary(); return; }
  box.innerHTML = `<div class="result-card ${state.tone}"><h4>${state.icon} ${state.label}</h4><p><strong>Your result:</strong> ${state.value} ${test.unit}</p>${state.source ? `<p class="meta">${state.source}</p>` : ''}${state.message ? `<p>${state.message}</p>` : ''}</div>`;
  results[card.dataset.test] = { ...state, name: test.name, unit: test.unit };
  updateSummary();
}

function evaluateCard(card) {
  if (!adultEligible()) { renderResult(card, null); return; }
  const test = TESTS[card.dataset.test];
  const resultInput = card.querySelector('.result-input');
  if (!resultInput?.value) { renderResult(card, null); return; }
  const value = Number(resultInput.value);
  if (!Number.isFinite(value)) { renderResult(card, null); return; }
  if (value < 0) return renderResult(card, { value, label: 'Check the result', icon: '!', tone: 'neutral', status: 'neutral', message: 'This test result cannot be below zero. Please check the value you entered.' });

  if (test.type === 'hba1cCategories') {
    if (value < 42) return renderResult(card, { value, label: 'Within the usual non-diabetic range', icon: '✓', tone: 'good', status: 'within', message: 'This result falls within the usual non-diabetic HbA1c range.' });
    if (value < 48) return renderResult(card, { value, label: 'Increased-risk range', icon: '↑', tone: 'warning', status: 'attention', message: 'This result falls within the 42–47 mmol/mol increased-risk range.' });
    return renderResult(card, { value, label: 'Diabetes diagnostic range', icon: '↑', tone: 'alert', status: 'attention', message: 'This result falls within a range used when diagnosing diabetes. A single result does not necessarily establish a diagnosis, particularly if you have no symptoms; confirmation may be needed.' });
  }
  if (test.type === 'fastingGlucoseCategories') {
    if (value < 5.5) return renderResult(card, { value, label: 'Within the usual non-diabetic range', icon: '✓', tone: 'good', status: 'within', message: 'This fasting glucose result falls within the usual non-diabetic range used for this interpretation.' });
    if (value < 7.0) return renderResult(card, { value, label: 'Increased-risk range', icon: '↑', tone: 'warning', status: 'attention', message: 'This fasting glucose result falls within the 5.5–6.9 mmol/L increased-risk range.' });
    return renderResult(card, { value, label: 'Diabetes diagnostic range', icon: '↑', tone: 'alert', status: 'attention', message: 'This fasting glucose result falls within a range used when diagnosing diabetes. A single result does not necessarily establish a diagnosis, particularly if you have no symptoms; confirmation may be needed.' });
  }
  if (test.type === 'egfrCategories') {
    if (value >= 90) return renderResult(card, { value, label: 'Normal or high filtration range', icon: '✓', tone: 'good', status: 'within', message: 'An eGFR in this range does not by itself rule out kidney disease if other evidence of kidney damage is present.' });
    if (value >= 60) return renderResult(card, { value, label: 'Mildly reduced filtration range', icon: '↓', tone: 'warning', status: 'attention', message: 'An eGFR of 60–89 does not by itself mean chronic kidney disease; other evidence of kidney damage and persistence over time matter.' });
    if (value >= 45) return renderResult(card, { value, label: 'Mild to moderately reduced', icon: '↓', tone: 'warning', status: 'attention', message: 'This result should be interpreted with previous kidney results and other clinical information.' });
    if (value >= 30) return renderResult(card, { value, label: 'Moderately to severely reduced', icon: '↓', tone: 'warning', status: 'attention', message: 'This result should be reviewed in clinical context, including previous kidney results.' });
    if (value >= 15) return renderResult(card, { value, label: 'Severely reduced', icon: '↓', tone: 'alert', status: 'attention', message: 'This result represents severely reduced estimated kidney filtration and requires clinical interpretation.' });
    return renderResult(card, { value, label: 'Very severely reduced filtration range', icon: '↓', tone: 'alert', status: 'attention', message: 'This result is in the very severely reduced filtration range and requires clinical interpretation.' });
  }

  const useSuggested = card.querySelector('.use-suggested')?.checked;
  let low, high, source;
  if (useSuggested) {
    const suggested = getSuggested(test);
    if (!suggested) { renderResult(card, null); return; }
    low = suggested.low; high = suggested.high;
    if (test.type === 'upperGuide') source = `Compared with the general healthy-adult guide of less than ${formatNumber(high)} ${test.unit}.`;
    else if (test.type === 'sexLowerGuide') source = `Compared with the general healthy-adult guide of ${formatNumber(low)} ${test.unit} or above.`;
    else if (low !== undefined && high !== undefined) source = `Compared using the suggested adult range of ${formatNumber(low)}–${formatNumber(high)} ${test.unit}.`;
    else source = `Compared using the suggested adult upper limit of ${formatNumber(high)} ${test.unit}.`;
  } else {
    const lowInput = card.querySelector('.range-low');
    const highInput = card.querySelector('.range-high');
    low = lowInput?.value !== '' && lowInput ? Number(lowInput.value) : undefined;
    high = highInput?.value !== '' && highInput ? Number(highInput.value) : undefined;
    const needsBoth = ['range', 'sexRange'].includes(test.type);
    const needsLowOnly = test.type === 'sexLowerGuide';
    if ((needsBoth && (!Number.isFinite(low) || !Number.isFinite(high))) || (needsLowOnly && !Number.isFinite(low)) || (!needsBoth && !needsLowOnly && !Number.isFinite(high))) { renderResult(card, null); return; }
    if (needsBoth && low > high) return renderResult(card, { value, label: 'Check the reference range', icon: '!', tone: 'neutral', status: 'neutral', message: 'The lower reference limit is greater than the upper limit. Please check the values you entered.' });
    if (needsBoth) source = `Compared with your laboratory range of ${formatNumber(low)}–${formatNumber(high)} ${test.unit}.`;
    else if (needsLowOnly) source = `Compared with the lower value from your report: ${formatNumber(low)} ${test.unit}.`;
    else source = `Compared with the value from your report: ${formatNumber(high)} ${test.unit}.`;
  }

  if (['range', 'sexRange'].includes(test.type)) {
    if (value < low) return renderResult(card, { value, label: 'Below reference range', icon: '↓', tone: 'warning', status: 'below', source, message: test.lowMessage });
    if (value > high) return renderResult(card, { value, label: 'Above reference range', icon: '↑', tone: 'warning', status: 'above', source, message: test.highMessage });
    return renderResult(card, { value, label: 'Within reference range', icon: '✓', tone: 'good', status: 'within', source, message: 'Your result falls within the reference range used for this comparison.' });
  }
  if (['sexUpper', 'upper'].includes(test.type)) {
    if (value > high) return renderResult(card, { value, label: 'Above upper reference limit', icon: '↑', tone: 'warning', status: 'above', source, message: test.highMessage });
    return renderResult(card, { value, label: 'Within upper reference limit', icon: '✓', tone: 'good', status: 'within', source, message: 'Your result does not exceed the upper reference limit used for this comparison.' });
  }
  if (test.type === 'upperGuide') {
    const aboveGuide = useSuggested ? value >= high : value > high;
    if (aboveGuide) return renderResult(card, { value, label: 'Above the general healthy-adult guide', icon: '↑', tone: 'warning', status: 'above', source, message: test.highMessage });
    return renderResult(card, { value, label: 'Within the general healthy-adult guide', icon: '✓', tone: 'good', status: 'within', source, message: 'Your result is below the general healthy-adult guide used for this comparison. Individual cholesterol targets can differ.' });
  }
  if (test.type === 'sexLowerGuide') {
    if (value < low) return renderResult(card, { value, label: 'Below the general healthy-adult guide', icon: '↓', tone: 'warning', status: 'below', source, message: test.lowMessage });
    return renderResult(card, { value, label: 'Meets the general healthy-adult guide', icon: '✓', tone: 'good', status: 'within', source, message: 'Your result meets the general healthy-adult guide used for this comparison. HDL should still be interpreted as part of your overall cardiovascular risk.' });
  }
}

function updateSummary() {
  const entries = Object.values(results).filter(r => r.status !== 'neutral');
  if (!entries.length) { summarySection.hidden = true; return; }
  summarySection.hidden = false;
  const counts = {
    total: entries.length,
    within: entries.filter(r => r.status === 'within').length,
    outside: entries.filter(r => ['above', 'below'].includes(r.status)).length,
    attention: entries.filter(r => r.status === 'attention').length
  };
  summaryStats.innerHTML = `<div class="stat"><strong>${counts.total}</strong><span>results entered</span></div><div class="stat"><strong>${counts.within}</strong><span>within range/guide</span></div><div class="stat"><strong>${counts.outside}</strong><span>outside range/guide</span></div><div class="stat"><strong>${counts.attention}</strong><span>category-based attention</span></div>`;
  summaryList.innerHTML = entries.map(result => `<div class="summary-row"><strong>${result.name}</strong><span>${result.value} ${result.unit}</span><span class="status-pill ${result.status === 'within' ? 'good' : result.tone === 'alert' ? 'alert' : 'warning'}">${result.label}</span></div>`).join('');
}

cards.forEach(card => {
  const checkbox = card.querySelector('.use-suggested');
  checkbox?.addEventListener('change', () => { setSuggestedState(card); evaluateCard(card); });
  card.querySelectorAll('input').forEach(input => { if (input !== checkbox) input.addEventListener('input', () => evaluateCard(card)); });
});
sexInputs.forEach(input => input.addEventListener('change', () => cards.forEach(card => { setSuggestedState(card); evaluateCard(card); })));
ageInput.addEventListener('input', () => { adultEligible(); cards.forEach(evaluateCard); });
clearButton.addEventListener('click', () => {
  cards.forEach(card => {
    card.querySelectorAll('input[type="number"]').forEach(input => { input.value = ''; input.disabled = false; });
    const checkbox = card.querySelector('.use-suggested'); if (checkbox) checkbox.checked = false;
    const copy = card.querySelector('.suggested-copy'); if (copy) copy.textContent = '';
    const resultBox = card.querySelector('.result-box'); if (resultBox) resultBox.innerHTML = '';
  });
  results = {}; updateSummary(); window.scrollTo({ top: 0, behavior: 'smooth' });
});
