// console.println("Script triggered for Species-2");  // Debug line

var speciesValue = this.getField("Species") ? this.getField("Species").value : "";
var speciesValue2 = this.getField("Species-2") ? this.getField("Species-2").value : "";

// Ensure species values are strings
speciesValue = String(speciesValue).trim();
speciesValue2 = String(speciesValue2).trim();

// Select the species value to use
var selectedSpeciesValue = (speciesValue2 && speciesValue2 !== "Choose Tree Species") ? speciesValue2 : ((speciesValue && speciesValue !== "Choose Tree Species") ? speciesValue : "");

// Set the formatted species value to "P_Full"
this.getField("P_Full").value = selectedSpeciesValue;

// Extract only the numeric part for the "P" field if the value is alphanumeric
var numericPartMatch = selectedSpeciesValue.match(/(\d+(\.\d+)?)/);
this.getField("P").value = numericPartMatch ? parseFloat(numericPartMatch[0]).toFixed(1) : "";

// console.println("P_Full set to: " + selectedSpeciesValue);  // Debug line

updateVisibilityBasedOnP();