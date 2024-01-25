// Main calculation function
function calculateWeight() {
    var ds = this.getField("ds").value; // small end diameter in inches
    var dl = this.getField("dl").value; // large end diameter in inches
    var L = this.getField("L").value; // Length in inches
    var P = this.getField("P").value; // Density

    var ds_num = parseFloat(ds);
    var dl_num = parseFloat(dl);
    var L_num = parseFloat(L);

    // Convert P to a string to ensure that string methods can be used
    var PString = String(P);

    // Extract numeric part from PString using regular expression
    var P_numeric = PString.match(/\d+\.?\d*/); // This will match a number with optional decimal part

    // Check if P_numeric is not null and all fields have valid numeric inputs
    if (!isNaN(ds_num) && !isNaN(dl_num) && !isNaN(L_num) && P_numeric !== null) {
        var P_num = parseFloat(P_numeric[0]);
        var d_squared = Math.pow((ds_num + dl_num) / 2, 2);
        var V = L_num / 12 * Math.PI * d_squared / 4 / 144; // Volume in cubic feet
        var weight = P_num * V; // Weight

        this.getField("WP").value = isNaN(weight) ? "" : weight.toFixed(2); // Rounds the weight to 2 decimal places
    } else {
        this.getField("WP").value = ""; // Or any placeholder text like "Awaiting input"
    }
}