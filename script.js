// ==================== script.js ====================
const FD = {
    // ----- Contenu complet (9 sections, 20 formules chacune) -----
    // (Le même objet que celui du code original, gardé intact)
    // Je ne le réécris pas intégralement ici pour éviter la redondance,
    // mais vous devez conserver l'objet FD exactement comme dans votre code original.
    // Pour gagner de la place, je le résume par un commentaire.
    // VOUS DEVEZ COLLER ICI L'INTÉGRALITÉ DE L'OBJET FD depuis votre code source.
    // Exemple simplifié :
    sec1: { title: '⚡ Électricité', formulas: [ /* ... */ ] },
    // ...
};

// ----- Variables d'état -----
let currentSection = 'sec1';
let currentFormulaIndex = null;

const sectionSelect = document.getElementById('sectionSelect');
const formulaListEl = document.getElementById('formulaList');
const placeholder = document.getElementById('placeholder');
const formulaContent = document.getElementById('formulaContent');
const formulaName = document.getElementById('formulaName');
const formulaDisplay = document.getElementById('formulaDisplay');
const formulaDesc = document.getElementById('formulaDesc');
const resultArea = document.getElementById('resultArea');
const actionButtons = document.getElementById('actionButtons');

// ----- Rendu de la liste -----
function renderFormulaList() {
    const sec = FD[currentSection];
    let html = '';
    sec.formulas.forEach((f, idx) => {
        const active = currentFormulaIndex === idx ? ' active' : '';
        html += `
            <div class="formula-item${active}" data-index="${idx}" onclick="selectFormula(${idx})">
                <span class="fi">${f.id}</span>
                <span class="fn">${f.name}</span>
            </div>`;
    });
    formulaListEl.innerHTML = html;
}

// ----- Sélection d'une formule -----
function selectFormula(idx) {
    currentFormulaIndex = idx;
    renderFormulaList();
    const f = FD[currentSection].formulas[idx];
    formulaName.textContent = f.name;
    formulaDisplay.innerHTML = f.formula;
    formulaDesc.textContent = f.desc || '';
    resultArea.innerHTML = '';
    placeholder.style.display = 'none';
    formulaContent.style.display = 'block';
    actionButtons.style.display = 'flex';
    if (window.MathJax) MathJax.typesetPromise([formulaDisplay, formulaDesc]).catch(() => {});
}

// ----- Afficher la preuve -----
function showProof() {
    if (currentFormulaIndex === null) return;
    const f = FD[currentSection].formulas[currentFormulaIndex];
    let html = '<h4 style="color:#e67e22;margin-bottom:12px;">📝 Preuve mathématique complète</h4>';
    f.proof.forEach(s => {
        const cls = s.type === 'ona' ? ' ona' : s.type === 'donc' ? ' donc' : '';
        html += `<div class="proof-block${cls}">${s.text}</div>`;
    });
    html += `<button class="btn btn-back" onclick="selectFormula(${currentFormulaIndex})" style="margin-top:10px;">← Retour</button>`;
    resultArea.innerHTML = html;
    actionButtons.style.display = 'none';
    if (window.MathJax) MathJax.typesetPromise([resultArea]).catch(() => {});
}

// ----- Afficher l'exercice -----
function showExercise() {
    if (currentFormulaIndex === null) return;
    const f = FD[currentSection].formulas[currentFormulaIndex];
    let html = '<h4 style="color:#27ae60;margin-bottom:12px;">📋 Exercice</h4>';
    html += `<div class="exercise-box"><strong>📌 Énoncé :</strong><p style="margin-top:6px;">${f.exercise.statement}</p></div>`;
    html += '<button class="btn btn-solution" id="btnSolution" onclick="revealSolution()">💡 Voir la solution</button>';
    html += '<div id="solutionContainer" style="margin-top:12px;"></div>';
    html += `<button class="btn btn-back" onclick="selectFormula(${currentFormulaIndex})" style="margin-top:10px;">← Retour</button>`;
    resultArea.innerHTML = html;
    actionButtons.style.display = 'none';
    if (window.MathJax) MathJax.typesetPromise([resultArea]).catch(() => {});
}

// ----- Révéler la solution étape par étape -----
function revealSolution() {
    const f = FD[currentSection].formulas[currentFormulaIndex];
    let html = '<div class="solution-box"><strong>✅ Solution étape par étape :</strong>';
    f.exercise.steps.forEach((s, i) => {
        html += `<div class="step-line"><strong>Étape ${i+1} :</strong> ${s}</div>`;
    });
    html += '</div>';
    document.getElementById('solutionContainer').innerHTML = html;
    const btn = document.getElementById('btnSolution');
    if (btn) btn.style.display = 'none';
    if (window.MathJax) MathJax.typesetPromise([document.getElementById('solutionContainer')]).catch(() => {});
}

// ----- Changement de section -----
sectionSelect.addEventListener('change', function() {
    currentSection = this.value;
    currentFormulaIndex = null;
    renderFormulaList();
    placeholder.style.display = 'block';
    formulaContent.style.display = 'none';
    resultArea.innerHTML = '';
});

// ----- Initialisation -----
renderFormulaList();
