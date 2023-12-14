var wpValue = this.getField("WP").value; // Replace 'WP' with the actual field name for the WP field
var kgValue = this.getField("KG").value; // Replace 'KG' with the actual field name for the KG field

// Ensure both WP and KG field inputs are valid
if (wpValue !== "" && kgValue !== "" && !isNaN(wpValue) && !isNaN(kgValue)) {
    var result = parseFloat(wpValue) * parseFloat(kgValue);
    this.getField("WK").value = result.toFixed(2); // Rounds the result to 2 decimal places
} else {
    this.getField("WK").value = ""; // Or any placeholder text like "Awaiting input"
}
