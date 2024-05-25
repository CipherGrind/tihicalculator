
function calculateTIHI() {
    const boxWidth = parseFloat(document.getElementById('boxWidth').value);
    const boxHeight = parseFloat(document.getElementById('boxHeight').value);
    const boxLength = parseFloat(document.getElementById('boxLength').value);
    const palletWidth = parseFloat(document.getElementById('palletWidth').value);
    const palletLength = parseFloat(document.getElementById('palletLength').value);
    const palletHeightLimit = parseFloat(document.getElementById('palletHeightLimit').value);

    const orientations = [
        [boxWidth, boxHeight, boxLength],
        [boxWidth, boxLength, boxHeight],
        [boxHeight, boxWidth, boxLength],
        [boxHeight, boxLength, boxWidth],
        [boxLength, boxWidth, boxHeight],
        [boxLength, boxHeight, boxWidth]
    ];

    let maxBoxes = 0;
    let bestTI = 0;
    let bestHI = 0;

    orientations.forEach(([w, h, l]) => {
        const boxesPerWidth = Math.floor(palletWidth / w);
        const boxesPerLength = Math.floor(palletLength / l);
        const TI = boxesPerWidth * boxesPerLength;
        const HI = Math.floor(palletHeightLimit / h);
        const totalBoxes = TI * HI;

        if (totalBoxes > maxBoxes) {
            maxBoxes = totalBoxes;
            bestTI = TI;
            bestHI = HI;
        }
    });

    document.getElementById('result').innerHTML = `Ti [Boxes per Layer] : ${bestTI}<br>Hi [Number of Layers] : ${bestHI}<br>Total Boxes : ${maxBoxes}`;
}


function clearForm() {
    document.getElementById('calculatorForm').reset();
    document.getElementById('result').innerHTML = '';
}

