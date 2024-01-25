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

// Event Handlers for Length
function updateLengthFields(doc, value, unit) {
    var inches, feet, meters;
    if (unit === 'inches') {
        inches = parseFloat(value);
        feet = isNaN(inches) ? "" : parseFloat(inchesToFeet(inches).toFixed(2));
        meters = isNaN(inches) ? "" : parseFloat(inchesToMeters(inches).toFixed(2));
        doc.getField("L1").value = feet;
        doc.getField("L2").value = meters;
    } else if (unit === 'feet') {
        feet = parseFloat(value);
        inches = isNaN(feet) ? "" : parseFloat(feetToInches(feet).toFixed(2));
        meters = isNaN(feet) ? "" : parseFloat(inchesToMeters(inches).toFixed(2));
        doc.getField("L").value = inches;
        doc.getField("L2").value = meters;
    } else if (unit === 'meters') {
        meters = parseFloat(value);
        inches = isNaN(meters) ? "" : parseFloat(metersToInches(meters).toFixed(2));
        feet = isNaN(meters) ? "" : parseFloat(inchesToFeet(inches).toFixed(2));
        doc.getField("L").value = inches;
        doc.getField("L1").value = feet;
    }
}

// Event Handler for Small End Diameter
function updateSmallDiameterFields(doc, value, unit) {
    var inches, centimeters;
    if (unit === 'inches') {
        inches = parseFloat(value);
        centimeters = isNaN(inches) ? "" : parseFloat(inchesToCentimeters(inches).toFixed(2));
        doc.getField("ds2").value = centimeters;
    } else if (unit === 'centimeters') {
        centimeters = parseFloat(value);
        inches = isNaN(centimeters) ? "" : parseFloat(centimetersToInches(centimeters).toFixed(2));
        doc.getField("ds").value = inches;
    }
}

// Event Handler for Large End Diameter
function updateLargeDiameterFields(doc, value, unit) {
    var inches, centimeters;
    if (unit === 'inches') {
        inches = parseFloat(value);
        centimeters = isNaN(inches) ? "" : parseFloat(inchesToCentimeters(inches).toFixed(2));
        doc.getField("dl2").value = centimeters;
    } else if (unit === 'centimeters') {
        centimeters = parseFloat(value);
        inches = isNaN(centimeters) ? "" : parseFloat(centimetersToInches(centimeters).toFixed(2));
        doc.getField("dl").value = inches;
    }
}

function resetForm() {
    // List default values for dropdowns
    var defaultDropdownValues = {
        "Species": "Choose Tree Species",
        "Species-2": "Choose Tree Species" // Add more as needed
    };

    var numFields = this.numFields;
    for (var i = 0; i < numFields; i++) {
        var fieldName = this.getNthFieldName(i);
        var field = this.getField(fieldName);

        if (field.type === "combobox" || field.type === "listbox") {
            field.value = defaultDropdownValues[fieldName] || ""; // Reset to default value or empty string
        } else if (field.type !== "button") {
            field.value = ""; // Clear other field types
        }
    }

    // List of text and image fields to hide
    var fieldsToHide = ["Text5", "Image5_af_image", "Image6_af_image", "Text7", "Image8_af_image", "Image9_af_image", "Text1", "Image3_af_image", "Image4_af_image", "Text6", "Image7_af_image", "Image10_af_image", "Text11", "Image12_af_image", "Image13_af_image", "Text14", "Image15_af_image", "Image16_af_image", "Text17", "Image18_af_image", "Image19_af_image", "Text20", "Image21_af_image", "Image22_af_image", "Text23", "Image24_af_image", "Image25_af_image", "Text26", "Image27_af_image", "Image28_af_image", "Text29", "Image30_af_image", "Image31_af_image", "Text32", "Image33_af_image", "Image34_af_image", "Text35", "Image36_af_image", "Image37_af_image", "Text38", "Image39_af_image", "Image40_af_image", "Text4", "Image1_af_image", "Image2_af_image", "Text41", "Image42_af_image", "Image43_af_image", "Text44", "Image45_af_image", "Image46_af_image", "Text47", "Image48_af_image", "Image49_af_image", "Text50", "Image51_af_image", "Image52_af_image", "Text53", "Image54_af_image", "Image55_af_image", "Text56", "Image57_af_image", "Image58_af_image", "Text59", "Image60_af_image", "Image61_af_image", "Text62", "Image63_af_image", "Image64_af_image", "Text65", "Image66_af_image", "Image67_af_image", "Text68", "Image69_af_image", "Image70_af_image", "Text71", "Image72_af_image", "Image73_af_image", "Text2", "Image11_af_image", "Image14_af_image", "Text15", "Image17_af_image", "Image20_af_image", "Text21", "Image23_af_image", "Image26_af_image", "Text27", "Image29_af_image", "Image32_af_image", "Text33", "Image35_af_image", "Image38_af_image", "Text39", "Image41_af_image", "Image44_af_image", "Text45", "Image47_af_image", "Image50_af_image", "Text51", "Image53_af_image", "Image56_af_image", "Text57", "Image59_af_image", "Image62_af_image", "Text63", "Image65_af_image", "Image68_af_image", "Text69", "Image71_af_image", "Image74_af_image", "Text75", "Image76_af_image", "Image77_af_image", "Text78", "Image79_af_image", "Image80_af_image", "Text79", "Image81_af_image", "Image82_af_image", "Text3", "Image75_af_image", "Image78_af_image", "Text8", "Image83_af_image", "Image84_af_image"];

    // Loop through each field and set its display to hidden
    for (var j = 0; j < fieldsToHide.length; j++) {
        var hideFieldName = fieldsToHide[j];
        var hideField = this.getField(hideFieldName);
        if (hideField !== null) {
            hideField.display = display.hidden;
        }
    }
}
