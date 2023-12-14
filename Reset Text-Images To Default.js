 // List of field names to clear
var fieldsToClear = ["P", "L", "ds", "dl", "dm", "V", "Species", "Text500"]; // Replace with your actual field names

// Loop through each field and clear its value
for (var i = 0; i < fieldsToClear.length; i++) {
    var fieldName = fieldsToClear[i];
    var field = this.getField(fieldName);
    
    if (field !== null) {
        // If it's a dropdown field with a default value, set it to that value
        if (field.type === "combobox" || field.type === "listbox") {
            field.value = "Choose Tree Species"; // Replace 'defaultOption' with the default value for the dropdown
        } else {
            // For other fields, set the value to an empty string
            field.value = "";
        }
    }
}

// Set Text and Images to hidden
			      this.getField("Text5").display = display.hidden;
            this.getField("Image5_af_image").display = display.hidden;
            this.getField("Image6_af_image").display = display.hidden;
            this.getField("Text7").display = display.hidden;
            this.getField("Image8_af_image").display = display.hidden;
            this.getField("Image9_af_image").display = display.hidden;
            this.getField("Text1").display = display.hidden;
            this.getField("Image3_af_image").display = display.hidden;
            this.getField("Image4_af_image").display = display.hidden;
            this.getField("Text6").display = display.hidden;
            this.getField("Image7_af_image").display = display.hidden;
            this.getField("Image10_af_image").display = display.hidden;
            this.getField("Text11").display = display.hidden;
            this.getField("Image12_af_image").display = display.hidden;
            this.getField("Image13_af_image").display = display.hidden;
            this.getField("Text14").display = display.hidden;
            this.getField("Image15_af_image").display = display.hidden;
            this.getField("Image16_af_image").display = display.hidden;
            this.getField("Text17").display = display.hidden;
            this.getField("Image18_af_image").display = display.hidden;
            this.getField("Image19_af_image").display = display.hidden;
            this.getField("Text20").display = display.hidden;
            this.getField("Image21_af_image").display = display.hidden;
            this.getField("Image22_af_image").display = display.hidden;
            this.getField("Text23").display = display.hidden;
            this.getField("Image24_af_image").display = display.hidden;
            this.getField("Image25_af_image").display = display.hidden;
            this.getField("Text26").display = display.hidden;
            this.getField("Image27_af_image").display = display.hidden;
            this.getField("Image28_af_image").display = display.hidden;
            this.getField("Text29").display = display.hidden;
            this.getField("Image30_af_image").display = display.hidden;
            this.getField("Image31_af_image").display = display.hidden;
            this.getField("Text32").display = display.hidden;
            this.getField("Image33_af_image").display = display.hidden;
            this.getField("Image34_af_image").display = display.hidden;
            this.getField("Text35").display = display.hidden;
            this.getField("Image36_af_image").display = display.hidden;
            this.getField("Image37_af_image").display = display.hidden;
            this.getField("Text38").display = display.hidden;
            this.getField("Image39_af_image").display = display.hidden;
            this.getField("Image40_af_image").display = display.hidden;
            this.getField("Text4").display = display.hidden;
            this.getField("Image1_af_image").display = display.hidden;
            this.getField("Image2_af_image").display = display.hidden;
            this.getField("Text41").display = display.hidden;
            this.getField("Image42_af_image").display = display.hidden;
            this.getField("Image43_af_image").display = display.hidden;
            this.getField("Text44").display = display.hidden;
            this.getField("Image45_af_image").display = display.hidden;
            this.getField("Image46_af_image").display = display.hidden;
            this.getField("Text47").display = display.hidden;
            this.getField("Image48_af_image").display = display.hidden;
            this.getField("Image49_af_image").display = display.hidden;
            this.getField("Text50").display = display.hidden;
            this.getField("Image51_af_image").display = display.hidden;
            this.getField("Image52_af_image").display = display.hidden;
            this.getField("Text53").display = display.hidden;
            this.getField("Image54_af_image").display = display.hidden;
            this.getField("Image55_af_image").display = display.hidden;
            this.getField("Text56").display = display.hidden;
            this.getField("Image57_af_image").display = display.hidden;
            this.getField("Image58_af_image").display = display.hidden;
            this.getField("Text59").display = display.hidden;
            this.getField("Image60_af_image").display = display.hidden;
            this.getField("Image61_af_image").display = display.hidden;
            this.getField("Text62").display = display.hidden;
            this.getField("Image63_af_image").display = display.hidden;
            this.getField("Image64_af_image").display = display.hidden;
            this.getField("Text65").display = display.hidden;
            this.getField("Image66_af_image").display = display.hidden;
            this.getField("Image67_af_image").display = display.hidden;
            this.getField("Text68").display = display.hidden;
            this.getField("Image69_af_image").display = display.hidden;
            this.getField("Image70_af_image").display = display.hidden;
            this.getField("Text71").display = display.hidden;
            this.getField("Image72_af_image").display = display.hidden;
            this.getField("Image73_af_image").display = display.hidden;
            this.getField("Text2").display = display.hidden;
            this.getField("Image11_af_image").display = display.hidden;
            this.getField("Image14_af_image").display = display.hidden;
            this.getField("Text15").display = display.hidden;
            this.getField("Image17_af_image").display = display.hidden;
            this.getField("Image20_af_image").display = display.hidden;
            this.getField("Text21").display = display.hidden;
            this.getField("Image23_af_image").display = display.hidden;
            this.getField("Image26_af_image").display = display.hidden;
            this.getField("Text27").display = display.hidden;
            this.getField("Image29_af_image").display = display.hidden;
            this.getField("Image32_af_image").display = display.hidden;
            this.getField("Text33").display = display.hidden;
            this.getField("Image35_af_image").display = display.hidden;
            this.getField("Image38_af_image").display = display.hidden;
            this.getField("Text39").display = display.hidden;
            this.getField("Image41_af_image").display = display.hidden;
            this.getField("Image44_af_image").display = display.hidden;
            this.getField("Text45").display = display.hidden;
            this.getField("Image47_af_image").display = display.hidden;
            this.getField("Text51").display = display.hidden;
            this.getField("Image53_af_image").display = display.hidden;
            this.getField("Image56_af_image").display = display.hidden;
            this.getField("Text57").display = display.hidden;
            this.getField("Image59_af_image").display = display.hidden;
            this.getField("Image62_af_image").display = display.hidden;
            this.getField("Text63").display = display.hidden;
            this.getField("Image65_af_image").display = display.hidden;
            this.getField("Image68_af_image").display = display.hidden;
            this.getField("Text69").display = display.hidden;
            this.getField("Image71_af_image").display = display.hidden;
            this.getField("Image74_af_image").display = display.hidden;
            this.getField("Text75").display = display.hidden;
            this.getField("Image76_af_image").display = display.hidden;
            this.getField("Image77_af_image").display = display.hidden;
            this.getField("Text78").display = display.hidden;
            this.getField("Image79_af_image").display = display.hidden;
            this.getField("Image80_af_image").display = display.hidden;
			      this.getField("Text3").display = display.hidden;
            this.getField("Image75_af_image").display = display.hidden;
            this.getField("Image78_af_image").display = display.hidden;
            this.getField("Text79").display = display.hidden;
            this.getField("Image81_af_image").display = display.hidden;
            this.getField("Image82_af_image").display = display.hidden;
