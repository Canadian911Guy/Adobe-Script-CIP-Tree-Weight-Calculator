var ds = this.getField("ds").value;
var dl = this.getField("dl").value;
var L = this.getField("L").value;
var P = this.getField("P").value;

// Convert P to a string to ensure that string methods can be used
var PString = String(P);

// Extract numeric part from PString using regular expression
var P_numeric = PString.match(/\d+\.?\d*/); // This will match a number with optional decimal part

// Check if P_numeric is not null and all fields have valid numeric inputs
if (ds !== "" && dl !== "" && L !== "" && P_numeric !== null && !isNaN(ds) && !isNaN(dl) && !isNaN(L) && !isNaN(parseFloat(P_numeric[0]))) {
    var d_squared = Math.pow((parseFloat(ds) + parseFloat(dl)) / 2, 2);
    var V = (parseFloat(L) / 12) * (Math.PI * d_squared / 4 / 144);
    var weight = parseFloat(P_numeric[0]) * V; // Use the numeric part of P

    this.getField("WP").value = weight.toFixed(2); // Rounds the weight to 2 decimal places
} else {
    this.getField("WP").value = ""; // Or any placeholder text like "Awaiting input"
}
