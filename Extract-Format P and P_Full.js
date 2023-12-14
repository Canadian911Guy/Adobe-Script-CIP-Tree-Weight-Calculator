var speciesValue = this.getField("Species").value;

// Convert speciesValue to a string and trim
var speciesValueString = speciesValue.toString().trim();

// Check and format "45", "73", and "85" explicitly
if (speciesValueString === "45" || speciesValueString === "73" || speciesValueString === "85.0"){
    speciesValueString += ".0";
} else if (!isNaN(parseFloat(speciesValueString)) && !speciesValueString.match(/[a-zA-Z]/)) {
    // Format other numeric values to one decimal place
    speciesValueString = parseFloat(speciesValueString).toFixed(1);
}

// Set the formatted species value to "P_Full" and "Text500" fields
this.getField("P_Full").value = speciesValueString;

// For the "P" field, update only with numeric values
// Extract only the numeric part if the value is alphanumeric
var numericPartMatch = speciesValueString.match(/(\d+(\.\d+)?)/);
if (numericPartMatch) {
    this.getField("P").value = parseFloat(numericPartMatch[0]).toFixed(1);
} else {
    this.getField("P").value = "";
}

// Debugging
// console.println("Set 'P_Full' to: " + speciesValueString);
