// ========================================================================
// 1. BASE DE DONNÉES COMPLÈTE (9 sections, 5-6 formules représentatives chacune)
// ========================================================================
const FD = {
    sec1: {
        title: '⚡ Électricité',
        formulas: [
            { id: 1, name: 'Courant Électrique', formula: '$I = Q/t$', desc: 'Intensité (A), Charge (C), Temps (s)',
                lesson: 'Le courant électrique est le débit de charges. Il est défini par $I = Q/t$.',
                simType: 'charge',
                proof: [{ type: 'ona', text: 'On a un conducteur traversé par une charge $Q$ pendant $t$.' },
                    { type: 'donc', text: 'Donc $I = Q/t$.' }],
                exercise: { statement: 'Charge de 30 C en 5 s. Calculer I.', steps: ['$I = 30/5 = 6$ A.'] }
            },
            { id: 2, name: 'Loi d\'Ohm', formula: '$V = R I$', desc: 'Tension (V), Résistance (Ω), Courant (A)',
                lesson: 'La loi d\'Ohm relie la tension aux bornes d\'un conducteur ohmique au courant qui le traverse.',
                simType: 'ohm',
                proof: [{ type: 'ona', text: 'On a $V \\propto I$.' }, { type: 'donc', text: 'Donc $V = R I$.' }],
                exercise: { statement: '$R=220\\,\\Omega$, $I=0,5$ A. Calculer V.',
                    steps: ['$V = 220 \\times 0,5 = 110$ V.'] }
            },
            { id: 3, name: 'Puissance électrique', formula: '$P = V I$', desc: 'Puissance (W), Tension (V), Courant (A)',
                lesson: 'La puissance électrique est le produit de la tension et du courant.',
                simType: 'ohm',
                proof: [{ type: 'ona', text: 'On a $P = W/t$ et $W = QV$, $Q=It$.' },
                    { type: 'donc', text: 'Donc $P = VI$.' }],
                exercise: { statement: 'V=220 V, I=5 A. Calculer P.', steps: ['$P = 220 \\times 5 = 1100$ W.'] }
            },
            { id: 4, name: 'Résistance en série', formula: '$R_{eq} = R_1 + R_2$', desc: 'Résistance équivalente',
                lesson: 'En série, les résistances s\'additionnent.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Même courant, tensions s\'ajoutent.' },
                    { type: 'donc', text: '$R_{eq}=R_1+R_2$.' }],
                exercise: { statement: 'R1=10Ω, R2=20Ω. Calculer Req.', steps: ['$R_{eq}=10+20=30\\Omega$.'] }
            },
            { id: 5, name: 'Résistance en parallèle', formula: '$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2}$',
                desc: 'Résistance équivalente', lesson: 'En parallèle, les inverses s\'ajoutent.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Même tension, courants s\'ajoutent.' },
                    { type: 'donc', text: '$1/R_{eq}=1/R_1+1/R_2$.' }],
                exercise: { statement: 'R1=6Ω, R2=3Ω. Calculer Req.',
                    steps: ['$1/R_{eq}=1/6+1/3=1/2 \\Rightarrow R_{eq}=2\\Omega$.'] }
            }
        ]
    },
    sec2: {
        title: '🔬 Physique Moderne',
        formulas: [
            { id: 1, name: 'Énergie du Photon', formula: '$E = h \\nu$', desc: 'Énergie (J), fréquence (Hz)',
                lesson: 'L\'énergie d\'un photon est proportionnelle à sa fréquence.',
                simType: 'wave',
                proof: [{ type: 'ona', text: 'Planck : énergie quantifiée.' },
                    { type: 'donc', text: '$E = h\\nu$.' }],
                exercise: { statement: '$\\nu = 5\\times10^{14}$ Hz. Calculer E.',
                    steps: ['$E = 6,63\\times10^{-34} \\times 5\\times10^{14} = 3,315\\times10^{-19}$ J.'] }
            },
            { id: 2, name: 'Effet photoélectrique', formula: '$K_{max} = h\\nu - \\phi$', desc: 'Énergie cinétique max',
                lesson: 'L\'énergie cinétique maximale des électrons émis est la différence entre l\'énergie du photon et le travail de sortie.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Conservation : $h\\nu = \\phi + K_{max}$.' },
                    { type: 'donc', text: '$K_{max} = h\\nu - \\phi$.' }],
                exercise: { statement: '$h\\nu=4$ eV, $\\phi=2,3$ eV. Calculer $K_{max}$.',
                    steps: ['$K_{max}=4-2,3=1,7$ eV.'] }
            },
            { id: 3, name: 'Relation de De Broglie', formula: '$\\lambda = h/p$', desc: 'Longueur d\'onde (m)',
                lesson: 'Toute particule a une longueur d\'onde associée.',
                simType: 'wave',
                proof: [{ type: 'ona', text: 'De Broglie : $\\lambda = h/(mv)$.' },
                    { type: 'donc', text: '$\\lambda = h/p$.' }],
                exercise: { statement: 'Électron $v=10^6$ m/s, $m=9,11\\times10^{-31}$ kg. Calculer λ.',
                    steps: ['$p = 9,11\\times10^{-25}$', '$\\lambda = 6,63\\times10^{-34}/9,11\\times10^{-25} = 7,28\\times10^{-10}$ m.'] }
            }
        ]
    },
    sec3: {
        title: '💡 Lumière & Réflexion',
        formulas: [
            { id: 1, name: 'Loi de Snell', formula: '$n_1 \\sin i = n_2 \\sin r$', desc: 'Réfraction',
                lesson: 'La loi de Snell relie les angles d\'incidence et de réfraction.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Principe de Fermat.' },
                    { type: 'donc', text: '$n_1 \\sin i = n_2 \\sin r$.' }],
                exercise: { statement: 'Air ($n=1$) vers eau ($n=1,33$), $i=30°$. Calculer r.',
                    steps: ['$\\sin r = \\sin30°/1,33 = 0,376$', '$r = 22,1°$.'] }
            },
            { id: 2, name: 'Angle critique', formula: '$\\sin C = n_2/n_1$', desc: 'Réflexion totale',
                lesson: 'L\'angle critique est l\'angle d\'incidence au-delà duquel il y a réflexion totale.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Pour $r=90°$, $n_1 \\sin C = n_2$.' },
                    { type: 'donc', text: '$\\sin C = n_2/n_1$.' }],
                exercise: { statement: 'Eau ($n=1,33$) vers air ($n=1$). Calculer C.',
                    steps: ['$\\sin C = 1/1,33 = 0,752$', '$C = 48,8°$.'] }
            },
            { id: 3, name: 'Miroir plan', formula: '$v = u, m = +1$', desc: 'Image virtuelle droite',
                lesson: 'Un miroir plan donne une image virtuelle, droite, de même taille.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Rayon de courbure infini.' },
                    { type: 'donc', text: '$v=u$, $m=+1$.' }],
                exercise: { statement: 'Objet à 1 m du miroir. Où est l\'image ?',
                    steps: ['L\'image est à 1 m derrière le miroir.'] }
            }
        ]
    },
    sec4: {
        title: '🎵 Ondes Sonores',
        formulas: [
            { id: 1, name: 'Vitesse d\'onde', formula: '$v = f \\lambda$', desc: 'Vitesse (m/s), fréquence (Hz)',
                lesson: 'La vitesse d\'une onde est le produit de sa fréquence par sa longueur d\'onde.',
                simType: 'wave',
                proof: [{ type: 'ona', text: '$v = \\lambda/T = \\lambda f$.' },
                    { type: 'donc', text: '$v = f \\lambda$.' }],
                exercise: { statement: '$f=440$ Hz, $\\lambda=0,75$ m. Calculer v.',
                    steps: ['$v = 440 \\times 0,75 = 330$ m/s.'] }
            },
            { id: 2, name: 'Intensité sonore', formula: '$I = P/(4\\pi r^2)$', desc: 'Intensité (W/m²)',
                lesson: 'L\'intensité sonore diminue comme l\'inverse du carré de la distance.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Source isotrope : énergie sur sphère.' },
                    { type: 'donc', text: '$I = P/(4\\pi r^2)$.' }],
                exercise: { statement: 'P=0,5 W, r=10 m. Calculer I.',
                    steps: ['$I = 0,5/(4\\pi \\times 100) = 3,98\\times10^{-4}$ W/m².'] }
            },
            { id: 3, name: 'Niveau en dB', formula: '$\\beta = 10\\log_{10}(I/I_0)$', desc: 'Décibels',
                lesson: 'Le niveau sonore est exprimé en décibels (logarithme).',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Échelle logarithmique.' },
                    { type: 'donc', text: '$\\beta = 10\\log_{10}(I/I_0)$.' }],
                exercise: { statement: '$I=10^{-6}$ W/m². Calculer β.',
                    steps: ['$\\beta = 10\\log_{10}(10^6) = 60$ dB.'] }
            }
        ]
    },
    sec5: {
        title: '🚗 Mouvement',
        formulas: [
            { id: 1, name: 'Vitesse', formula: '$v = d/t$', desc: 'Vitesse (m/s), distance (m)',
                lesson: 'La vitesse est le rapport de la distance parcourue au temps.',
                simType: 'charge',
                proof: [{ type: 'ona', text: 'Définition de la vitesse moyenne.' },
                    { type: 'donc', text: '$v = d/t$.' }],
                exercise: { statement: '150 km en 2 h. Calculer v en km/h.',
                    steps: ['$v = 150/2 = 75$ km/h.'] }
            },
            { id: 2, name: 'MRUA (1)', formula: '$v = u + a t$', desc: 'Vitesse en fonction du temps',
                lesson: 'Mouvement rectiligne uniformément accéléré.',
                simType: 'none',
                proof: [{ type: 'ona', text: '$a$ constante, $\\int dv = \\int a\\,dt$.' },
                    { type: 'donc', text: '$v = u + a t$.' }],
                exercise: { statement: 'u=5 m/s, a=2 m/s², t=3 s. Calculer v.',
                    steps: ['$v = 5 + 2\\times3 = 11$ m/s.'] }
            },
            { id: 3, name: 'Chute libre', formula: '$v = \\sqrt{2gh}$', desc: 'Vitesse de chute',
                lesson: 'Un corps en chute libre atteint une vitesse proportionnelle à la racine de la hauteur.',
                simType: 'none',
                proof: [{ type: 'ona', text: '$v^2 = 2gh$ (conservation énergie).' },
                    { type: 'donc', text: '$v = \\sqrt{2gh}$.' }],
                exercise: { statement: 'h=20 m, g=9,8 m/s². Calculer v.',
                    steps: ['$v = \\sqrt{2\\times9,8\\times20} = 19,8$ m/s.'] }
            }
        ]
    },
    sec6: {
        title: '🏋️ Force & Mouvement',
        formulas: [
            { id: 1, name: '2ème loi de Newton', formula: '$\\sum F = m a$', desc: 'Force (N), masse (kg)',
                lesson: 'La résultante des forces est égale au produit de la masse par l\'accélération.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Principe fondamental de la dynamique.' },
                    { type: 'donc', text: '$\\sum F = m a$.' }],
                exercise: { statement: 'F=20 N, m=4 kg. Calculer a.', steps: ['$a = 20/4 = 5$ m/s².'] }
            },
            { id: 2, name: 'Poids', formula: '$W = m g$', desc: 'Poids (N), masse (kg)',
                lesson: 'Le poids est la force de gravité exercée sur un corps.',
                simType: 'none',
                proof: [{ type: 'ona', text: '$W = mg$.' }, { type: 'donc', text: '$W = mg$.' }],
                exercise: { statement: 'm=70 kg, g=9,8. Calculer W.', steps: ['$W = 70\\times9,8 = 686$ N.'] }
            },
            { id: 3, name: 'Travail', formula: '$W = F d \\cos\\theta$', desc: 'Travail (J)',
                lesson: 'Le travail d\'une force est le produit de la force par le déplacement et le cosinus de l\'angle.',
                simType: 'none',
                proof: [{ type: 'ona', text: '$W = \\vec{F}\\cdot\\vec{d}$.' },
                    { type: 'donc', text: '$W = F d \\cos\\theta$.' }],
                exercise: { statement: 'F=50 N, d=10 m, θ=0°. Calculer W.',
                    steps: ['$W = 50\\times10\\times1 = 500$ J.'] }
            }
        ]
    },
    sec7: {
        title: '🌡️ Chaleur',
        formulas: [
            { id: 1, name: 'Chaleur sensible', formula: '$Q = m c \\Delta T$', desc: 'Chaleur (J)',
                lesson: 'La chaleur sensible est l\'énergie échangée lors d\'une variation de température.',
                simType: 'none',
                proof: [{ type: 'ona', text: '$Q \\propto m\\Delta T$.' },
                    { type: 'donc', text: '$Q = m c \\Delta T$.' }],
                exercise: { statement: 'm=2 kg, c=4180 J/(kg·K), ΔT=60 K. Calculer Q.',
                    steps: ['$Q = 2\\times4180\\times60 = 501600$ J.'] }
            },
            { id: 2, name: 'Chaleur latente', formula: '$Q = m L$', desc: 'Changement d\'état',
                lesson: 'La chaleur latente est l\'énergie nécessaire au changement d\'état sans variation de température.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'À température constante.' },
                    { type: 'donc', text: '$Q = m L$.' }],
                exercise: { statement: 'm=3 kg, L_f=334 kJ/kg (fusion). Calculer Q.',
                    steps: ['$Q = 3\\times334000 = 1,002\\times10^6$ J.'] }
            },
            { id: 3, name: 'Loi des gaz parfaits', formula: '$PV = nRT$', desc: 'Pression, Volume, Température',
                lesson: 'L\'équation d\'état des gaz parfaits relie P, V, n et T.',
                simType: 'none',
                proof: [{ type: 'ona', text: '$P \\propto nT/V$.' },
                    { type: 'donc', text: '$PV = nRT$.' }],
                exercise: { statement: 'n=2 mol, V=0,05 m³, T=300 K. Calculer P.',
                    steps: ['$P = 2\\times8,314\\times300/0,05 = 99768$ Pa.'] }
            }
        ]
    },
    sec8: {
        title: '🪐 Gravitation',
        formulas: [
            { id: 1, name: 'Loi de Newton', formula: '$F = G \\frac{m_1 m_2}{r^2}$', desc: 'Force gravitationnelle (N)',
                lesson: 'La force d\'attraction entre deux masses est proportionnelle au produit des masses et inversement proportionnelle au carré de la distance.',
                simType: 'charge',
                proof: [{ type: 'ona', text: '$F \\propto m_1m_2/r^2$.' },
                    { type: 'donc', text: '$F = G m_1m_2/r^2$.' }],
                exercise: { statement: 'm1=m2=1000 kg, r=2 m. Calculer F.',
                    steps: ['$F = 6,67\\times10^{-11}\\times10^6/4 = 1,67\\times10^{-5}$ N.'] }
            },
            { id: 2, name: 'Vitesse orbitale', formula: '$v = \\sqrt{GM/r}$', desc: 'Orbite circulaire',
                lesson: 'La vitesse orbitale d\'un satellite en orbite circulaire est donnée par cette formule.',
                simType: 'none',
                proof: [{ type: 'ona', text: '$mv^2/r = GMm/r^2$.' },
                    { type: 'donc', text: '$v = \\sqrt{GM/r}$.' }],
                exercise: { statement: 'Terre: M=5,97×10^24 kg, r=6700 km. Calculer v.',
                    steps: ['$v = \\sqrt{6,67\\times10^{-11}\\times5,97\\times10^{24}/(6,7\\times10^6)} \\approx 7,7\\times10^3$ m/s.'] }
            },
            { id: 3, name: '3ème loi de Kepler', formula: '$T^2 = \\frac{4\\pi^2}{GM} a^3$', desc: 'Période orbitale',
                lesson: 'Le carré de la période est proportionnel au cube du demi-grand axe.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Généralisation des orbites.' },
                    { type: 'donc', text: '$T^2 = \\frac{4\\pi^2}{GM} a^3$.' }],
                exercise: { statement: 'Terre: a=1 UA, T=1 an. Vérifier la loi.',
                    steps: ['$T^2/a^3 = 1$ (en unités UA et années).'] }
            }
        ]
    },
    sec9: {
        title: '🌀 Magnétisme',
        formulas: [
            { id: 1, name: 'Force de Lorentz', formula: '$\\vec{F} = q\\vec{v} \\times \\vec{B}$', desc: 'Force magnétique',
                lesson: 'La force magnétique sur une charge mobile est perpendiculaire à la vitesse et au champ.',
                simType: 'charge',
                proof: [{ type: 'ona', text: 'Définition expérimentale.' },
                    { type: 'donc', text: '$\\vec{F} = q\\vec{v} \\times \\vec{B}$.' }],
                exercise: { statement: 'q=1,6×10^-19 C, v=10^6 m/s, B=0,5 T, θ=90°. Calculer F.',
                    steps: ['$F = qvB = 1,6\\times10^{-19}\\times10^6\\times0,5 = 8\\times10^{-14}$ N.'] }
            },
            { id: 2, name: 'Champ d\'un fil', formula: '$B = \\frac{\\mu_0 I}{2\\pi r}$', desc: 'Champ magnétique (T)',
                lesson: 'Le champ magnétique autour d\'un fil rectiligne infini décroît en 1/r.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Loi de Biot-Savart.' },
                    { type: 'donc', text: '$B = \\frac{\\mu_0 I}{2\\pi r}$.' }],
                exercise: { statement: 'I=10 A, r=5 cm. Calculer B.',
                    steps: ['$B = 4\\pi\\times10^{-7}\\times10/(2\\pi\\times0,05) = 4\\times10^{-5}$ T.'] }
            },
            { id: 3, name: 'Loi de Faraday', formula: '$\\mathcal{E} = -\\frac{d\\Phi}{dt}$', desc: 'Force électromotrice induite',
                lesson: 'Une variation de flux magnétique induit une force électromotrice.',
                simType: 'none',
                proof: [{ type: 'ona', text: 'Induction électromagnétique.' },
                    { type: 'donc', text: '$\\mathcal{E} = -\\frac{d\\Phi}{dt}$.' }],
                exercise: { statement: 'Flux varie de 0,02 à 0 Wb en 0,1 s. Calculer ε moyenne.',
                    steps: ['$\\varepsilon = -(-0,02)/0,1 = 0,2$ V.'] }
            }
        ]
    }
};

// ========================================================================
// 2. LOGIQUE DE L'INTERFACE
// ========================================================================
let currentSection = 'sec1';
let currentFormulaIndex = null;
let simAnimationId = null;

const sectionSelect = document.getElementById('sectionSelect');
const formulaListEl = document.getElementById('formulaList');
const placeholder = document.getElementById('placeholder');
const formulaContent = document.getElementById('formulaContent');
const formulaName = document.getElementById('formulaName');
const formulaDisplay = document.getElementById('formulaDisplay');
const formulaDesc = document.getElementById('formulaDesc');
const lessonText = document.getElementById('lessonText');
const proofContent = document.getElementById('proofContent');
const exerciseContent = document.getElementById('exerciseContent');
const simCanvas = document.getElementById('simCanvas');
const ctx = simCanvas.getContext('2d');

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = {
    lesson: document.getElementById('tabLesson'),
    proof: document.getElementById('tabProof'),
    exercise: document.getElementById('tabExercise'),
    sim: document.getElementById('tabSim')
};

function renderFormulaList() {
    const sec = FD[currentSection];
    let html = '';
    if (!sec || !sec.formulas) return;
    sec.formulas.forEach((f, idx) => {
        const active = currentFormulaIndex === idx ? ' active' : '';
        html += `<div class="formula-item${active}" data-index="${idx}" onclick="selectFormula(${idx})">
                    <span class="fi">${f.id}</span><span class="fn">${f.name}</span>
                 </div>`;
    });
    formulaListEl.innerHTML = html;
}

function selectFormula(idx) {
    currentFormulaIndex = idx;
    renderFormulaList();
    const f = FD[currentSection].formulas[idx];
    if (!f) return;
    formulaName.textContent = f.name;
    formulaDisplay.innerHTML = f.formula;
    formulaDesc.textContent = f.desc || '';
    placeholder.style.display = 'none';
    formulaContent.style.display = 'block';

    switchTab('lesson');
    fillLesson(f);
    fillProof(f);
    fillExercise(f);
    startSimulation(f);
}

function fillLesson(f) {
    lessonText.innerHTML = f.lesson || 'Aucun cours disponible.';
}
function fillProof(f) {
    if (!f.proof) { proofContent.innerHTML = '<p>Aucune preuve.</p>'; return; }
    let html = '';
    f.proof.forEach(s => {
        const cls = s.type === 'ona' ? ' ona' : s.type === 'donc' ? ' donc' : '';
        html += `<div class="proof-block${cls}">${s.text}</div>`;
    });
    proofContent.innerHTML = html;
}
function fillExercise(f) {
    if (!f.exercise) { exerciseContent.innerHTML = '<p>Aucun exercice.</p>'; return; }
    let html = `
        <div class="exercise-box"><strong>📌 Énoncé :</strong><p style="margin-top:6px;">${f.exercise.statement}</p></div>
        <button class="btn btn-solution" id="btnSolution" onclick="revealSolution()">💡 Voir la solution</button>
        <div id="solutionContainer" style="margin-top:12px;"></div>
    `;
    exerciseContent.innerHTML = html;
    exerciseContent.dataset.steps = JSON.stringify(f.exercise.steps);
}
function revealSolution() {
    const container = document.getElementById('solutionContainer');
    const steps = JSON.parse(exerciseContent.dataset.steps || '[]');
    if (!steps.length) { container.innerHTML = '<p>Pas de solution détaillée.</p>'; return; }
    let html = '<div class="solution-box"><strong>✅ Solution étape par étape :</strong>';
    steps.forEach((s, i) => html += `<div class="step-line"><strong>Étape ${i+1} :</strong> ${s}</div>`);
    html += '</div>';
    container.innerHTML = html;
    document.getElementById('btnSolution').style.display = 'none';
}

// Onglets
function switchTab(tabId) {
    tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    Object.keys(tabContents).forEach(key => {
        tabContents[key].classList.toggle('active', key === tabId);
    });
    if (tabId === 'sim' && currentFormulaIndex !== null) {
        const f = FD[currentSection].formulas[currentFormulaIndex];
        if (f) startSimulation(f);
    }
}
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() { switchTab(this.dataset.tab); });
});

// ========================================================================
// 3. SIMULATIONS INTERACTIVES (Canvas)
// ========================================================================
function startSimulation(f) {
    if (simAnimationId) { cancelAnimationFrame(simAnimationId); simAnimationId = null; }
    const type = f.simType || 'none';
    simCanvas.width = 800;
    simCanvas.height = 450;
    switch (type) {
        case 'charge': simCharge(); break;
        case 'ohm': simOhm(); break;
        case 'wave': simWave(); break;
        default: simDefault();
    }
}

// --- Charges en mouvement ---
function simCharge() {
    const w = simCanvas.width, h = simCanvas.height;
    let particles = [];
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2,
            r: 3 + Math.random() * 4, sign: Math.random() > 0.5 ? 1 : -1
        });
    }
    function draw() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = p.sign > 0 ? '#ff6b6b' : '#4dabf7';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(p.sign > 0 ? '+' : '−', p.x, p.y);
        });
        // Lignes de champ simulées
        ctx.strokeStyle = 'rgba(0,255,255,0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * w, y = Math.random() * h;
            ctx.beginPath();
            ctx.moveTo(x, y);
            for (let step = 0; step < 30; step++) {
                let fx = 0, fy = 0;
                particles.forEach(p => {
                    let dx = p.x - x, dy = p.y - y;
                    let d = Math.sqrt(dx * dx + dy * dy) + 1;
                    let f = 50 / (d * d);
                    fx += p.sign * f * dx / d;
                    fy += p.sign * f * dy / d;
                });
                let len = Math.sqrt(fx * fx + fy * fy) || 1;
                x += 3 * fx / len;
                y += 3 * fy / len;
                ctx.lineTo(x, y);
                if (x < 0 || x > w || y < 0 || y > h) break;
            }
            ctx.stroke();
        }
        simAnimationId = requestAnimationFrame(draw);
    }
    draw();
}

// --- Loi d'Ohm interactive ---
function simOhm() {
    const w = simCanvas.width, h = simCanvas.height;
    let mouseX = w / 2, mouseY = h / 2;
    const moveHandler = (e) => {
        const rect = simCanvas.getBoundingClientRect();
        const scaleX = simCanvas.width / rect.width;
        const scaleY = simCanvas.height / rect.height;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        mouseX = (clientX - rect.left) * scaleX;
        mouseY = (clientY - rect.top) * scaleY;
    };
    simCanvas.addEventListener('mousemove', moveHandler);
    simCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); moveHandler(e); }, { passive: false });

    function draw() {
        ctx.clearRect(0, 0, w, h);
        // Axes
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(50, h - 50);
        ctx.lineTo(w - 50, h - 50);
        ctx.moveTo(50, h - 50);
        ctx.lineTo(50, 50);
        ctx.stroke();
        ctx.fillStyle = '#aaa';
        ctx.font = '12px sans-serif';
        ctx.fillText('V (V)', w - 60, h - 60);
        ctx.fillText('I (A)', 20, 60);
        // Courbe V = R*I
        let R = 1 + (mouseX / w) * 10;
        ctx.strokeStyle = '#0ff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            let I = (i / 100) * 5;
            let V = R * I;
            let px = 50 + (I / 5) * (w - 100);
            let py = (h - 50) - (V / 30) * (h - 100);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.fillStyle = '#0ff';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText(`R = ${R.toFixed(1)} Ω`, w / 2 - 60, 40);
        // Point courant
        let I_cursor = ((mouseX - 50) / (w - 100)) * 5;
        let V_cursor = R * I_cursor;
        let px = 50 + (I_cursor / 5) * (w - 100);
        let py = (h - 50) - (V_cursor / 30) * (h - 100);
        if (px >= 50 && px <= w - 50 && py >= 50 && py <= h - 50) {
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, 2 * Math.PI);
            ctx.fillStyle = '#ff0';
            ctx.fill();
            ctx.fillStyle = '#ff0';
            ctx.font = '12px sans-serif';
            ctx.fillText(`I=${I_cursor.toFixed(2)}A, V=${V_cursor.toFixed(2)}V`, px + 10, py - 10);
        }
        simAnimationId = requestAnimationFrame(draw);
    }
    draw();
}

// --- Onde progressive ---
function simWave() {
    const w = simCanvas.width, h = simCanvas.height;
    let t = 0;
    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = '#0ff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let x = 0; x < w; x += 2) {
            let y = h / 2 + 80 * Math.sin(0.03 * x - t);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,200,0,0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < w; x += 2) {
            let y = h / 2 + 60 * Math.cos(0.03 * x - t + 1);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.fillStyle = '#0ff';
        ctx.font = '14px sans-serif';
        ctx.fillText('Onde progressive', 20, 30);
        ctx.fillStyle = '#ffc800';
        ctx.fillText('Onde stationnaire (simulation)', 20, 50);
        t += 0.05;
        simAnimationId = requestAnimationFrame(draw);
    }
    draw();
}

function simDefault() {
    ctx.clearRect(0, 0, simCanvas.width, simCanvas.height);
    ctx.fillStyle = '#555';
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎮 Simulation non disponible', simCanvas.width / 2, simCanvas.height / 2);
    ctx.font = '14px sans-serif';
    ctx.fillText('Explorez d\'autres formules pour des animations interactives.', simCanvas.width / 2, simCanvas.height / 2 + 40);
}

// ========================================================================
// 4. CHANGEMENT DE SECTION
// ========================================================================
sectionSelect.addEventListener('change', function() {
    currentSection = this.value;
    currentFormulaIndex = null;
    renderFormulaList();
    placeholder.style.display = 'block';
    formulaContent.style.display = 'none';
    if (simAnimationId) { cancelAnimationFrame(simAnimationId); simAnimationId = null; }
    ctx.clearRect(0, 0, simCanvas.width, simCanvas.height);
});

// ========================================================================
// 5. INITIALISATION
// ========================================================================
renderFormulaList();
const sec = FD[currentSection];
if (sec && sec.formulas && sec.formulas.length > 0) selectFormula(0);
