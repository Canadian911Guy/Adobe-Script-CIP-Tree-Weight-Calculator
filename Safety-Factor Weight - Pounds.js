var wpValue = this.getField("WP").value; // Replace 'WP' with the actual field name for the WP field

// Ensure the WP field input is valid
if (wpValue !== "" && !isNaN(wpValue)) {
    var result = parseFloat(wpValue) * 1.25;
    this.getField("SFWP").value = result.toFixed(2); // Rounds the result to 2 decimal places
} else {
    this.getField("SFWP").value = ""; // Or any placeholder text like "Awaiting input"
}
