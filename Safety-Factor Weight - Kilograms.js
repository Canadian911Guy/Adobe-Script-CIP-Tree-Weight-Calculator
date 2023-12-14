var wkValue = this.getField("WK").value; // Replace 'WK' with the actual field name for the WK field

// Ensure the WK field input is valid
if (wkValue !== "" && !isNaN(wkValue)) {
    var result = parseFloat(wkValue) * 1.25;
    this.getField("SFWK").value = result.toFixed(2); // Rounds the result to 2 decimal places
} else {
    this.getField("SFWK").value = ""; // Or any placeholder text like "Awaiting input"
}
