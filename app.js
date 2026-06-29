/**
 * RikMakersHub Engineering Math Processing Engine Module
 * Architecture Framework: 100% Client-Side Pure Logic Execution Loops
 * Sole Architect: Rounak Bhadra (Class 8 Sovereign Matrix)
 */

// MODULE 2 CONFIG: HIGH-DENSITY ARITHMETIC ELEMENT TRACKERS
const wheelNumbers =;
let currentRotation = 0;

function spinArithmeticRoulette() {
    const wheelElement = document.getElementById('wheel');
    if (!wheelElement) return;

    const randomSectorIndex = Math.floor(Math.random() * wheelNumbers.length);
    
    // Add 5 complete vector spins (1800deg) to look clean on render
    const fullSpinsAngle = 1800;
    const sectorAngleUnit = 360 / wheelNumbers.length;
    const targetSectorAngle = randomSectorIndex * sectorAngleUnit;
    
    currentRotation += fullSpinsAngle + targetSectorAngle - (currentRotation % 360);
    wheelElement.style.transform = `rotate(${currentRotation}deg)`;
    
    // Defer element updates until the CSS spin transition loop locks step
    setTimeout(() => {
        const finalSelectedInteger = wheelNumbers[randomSectorIndex];
        
        document.getElementById('log-num').innerText = finalSelectedInteger;
        document.getElementById('log-square').innerText = (finalSelectedInteger * finalSelectedInteger).toLocaleString();
        document.getElementById('log-cube').innerText = (finalSelectedInteger * finalSelectedInteger * finalSelectedInteger).toLocaleString();
    }, 3000);
}

// MODULE 3 CONFIG: HELIOCENTRIC ASTROPHYSICS RAW SCIENTIFIC NOTATION MAP
const solarSystemDatabase = {
    "Sun": { radius: "6.963 × 10⁵", temp: "1.570 × 10⁷", dist: "0.000 × 10⁰" },
    "Mercury": { radius: "2.439 × 10³", temp: "4.400 × 10²", dist: "3.870 × 10⁻¹" },
    "Venus": { radius: "6.051 × 10³", temp: "7.370 × 10²", dist: "7.230 × 10⁻¹" },
    "Earth": { radius: "6.371 × 10³", temp: "2.880 × 10²", dist: "1.000 × 10⁰" },
    "Mars": { radius: "3.389 × 10³", temp: "2.100 × 10²", dist: "1.524 × 10⁰" },
    "Jupiter": { radius: "6.991 × 10⁴", temp: "1.650 × 10²", dist: "5.203 × 10⁰" },
    "Saturn": { radius: "5.823 × 10⁴", temp: "1.340 × 10²", dist: "9.582 × 10⁰" },
    "Uranus": { radius: "2.536 × 10⁴", temp: "7.600 × 10¹", dist: "1.922 × 10¹" },
    "Neptune": { radius: "2.462 × 10⁴", temp: "7.200 × 10¹", dist: "3.005 × 10¹" }
};

function querySpaceNode(nodeName) {
    const dataRecord = solarSystemDatabase[nodeName];
    if (!dataRecord) return;
    
    document.getElementById('space-node-title').innerText = `Target Node: ${nodeName}`;
    document.getElementById('sp-radius').innerText = dataRecord.radius;
    document.getElementById('sp-temp').innerText = dataRecord.temp;
    document.getElementById('sp-distance').innerText = dataRecord.dist;
}
