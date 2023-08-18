// ReUsable Function 
function getInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const input = parseFloat(inputFieldString);
    inputField.value = '';
    return input;
}

function setArea(areaId, area) {
    const areaValue = document.getElementById(areaId);
    areaValue.innerText = area;
}

// Triangle
function getTriangleArea() {
    const base = getInputField('triangle-base');
    const height = getInputField('triangle-height');
    const area = 0.5 * base * height;

    if (isNaN(base) || isNaN(height)) {
        alert('Enter a Valid Number ')
        return;
    }

    setArea('triangle-area', area);

    addToCalculation('Triangle', area)

}

// Rectangle
function getRectangleArea() {
    const width = getInputField('rect-width');
    const length = getInputField('rect-length')
    const area = width * length;

    if (isNaN(width) || isNaN(length)) {
        alert('Enter a Valid Number ')
        return;
    }

    setArea('rect-area', area);

    addToCalculation('Rectangle', area);
}

// Parallelogram
function getParallelogramArea() {
    const base = getInputField('para-base');
    const height = getInputField('para-height');
    const area = base * height;

    if (isNaN(base) || isNaN(height)) {
        alert('Enter a Valid Number ')
        return;
    }

    setArea('para-area', area);

    addToCalculation('Parallelogram', area);
}

// Rhombus
function getRhombusArea() {
    const d1 = getInputField('rhombus-d1');
    const d2 = getInputField('rhombus-d2');
    const area = 0.5 * d1 * d2;

    if (isNaN(d1) || isNaN(d2)) {
        alert('Enter a Valid Number ')
        return;
    }

    setArea('rhombus-area', area);

    addToCalculation('Rhombus', area);
}

// Ellipse
function getEllipseArea() {
    const major = getInputField('major');
    const minor = getInputField('minor');
    const area = (3.14 * major * minor).toFixed(2);

    if (isNaN(major) || isNaN(minor)) {
        alert('Enter a Valid Number ')
        return;
    }

    setArea('ellipse-area', area);

    addToCalculation('Ellipse', area)
}

//Pentagon
function getPentagonArea() {
    const penta = getInputField('penta');
    const base = getInputField('penta-base');
    const area = 0.5 * penta * base;

    if (isNaN(penta) || isNaN(base)) {
        alert('Enter a Valid Number ')
        return;
    }

    setArea('penta-area', area);

    addToCalculation('Pentagon', area);
}

// Add To Calculation Area
function addToCalculation(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}.${areaType} ${area}cm<sup>2</sup> <button class="btn btn-primary">convert</button>`;
    calculationEntry.appendChild(p);
}