// Conversion Functions
function inchesToFeet(inches) {
    return inches / 12;
}

function inchesToMeters(inches) {
    return inches * 0.0254;
}

function feetToInches(feet) {
    return feet * 12;
}

function metersToInches(meters) {
    return meters / 0.0254;
}

function inchesToCentimeters(inches) {
    return inches * 2.54;
}

function centimetersToInches(centimeters) {
    return centimeters / 2.54;
}

function updateLengthFields(doc, value, unit) {
    var inches, feet, meters;

    // Ensure the value is a valid number before calculation
    if (!isNaN(parseFloat(value)) && value !== "") {
        if (unit === 'inches') {
            inches = parseFloat(value);
            feet = parseFloat(inchesToFeet(inches).toFixed(2));
            meters = parseFloat(inchesToMeters(inches).toFixed(2));
            doc.getField("L1").value = feet;
            doc.getField("L2").value = meters;
        } else if (unit === 'feet') {
            feet = parseFloat(value);
            inches = parseFloat(feetToInches(feet).toFixed(2));
            meters = parseFloat(inchesToMeters(inches).toFixed(2));
            doc.getField("L").value = inches;
            doc.getField("L2").value = meters;
        } else if (unit === 'meters') {
            meters = parseFloat(value);
            inches = parseFloat(metersToInches(meters).toFixed(2));
            feet = parseFloat(inchesToFeet(inches).toFixed(2));
            doc.getField("L").value = inches;
            doc.getField("L1").value = feet;
        }
    }
}

function updateSmallDiameterFields(doc, value, unit) {
    var inches, centimeters;

    if (!isNaN(parseFloat(value)) && value !== "") {
        if (unit === 'inches') {
            inches = parseFloat(value);
            centimeters = parseFloat(inchesToCentimeters(inches).toFixed(2));
            doc.getField("ds2").value = centimeters;
        } else if (unit === 'centimeters') {
            centimeters = parseFloat(value);
            inches = parseFloat(centimetersToInches(centimeters).toFixed(2));
            doc.getField("ds").value = inches;
        }
    }
}

function updateLargeDiameterFields(doc, value, unit) {
    var inches, centimeters;

    if (!isNaN(parseFloat(value)) && value !== "") {
        if (unit === 'inches') {
            inches = parseFloat(value);
            centimeters = parseFloat(inchesToCentimeters(inches).toFixed(2));
            doc.getField("dl2").value = centimeters;
        } else if (unit === 'centimeters') {
            centimeters = parseFloat(value);
            inches = parseFloat(centimetersToInches(centimeters).toFixed(2));
            doc.getField("dl").value = inches;
        }
    }
}