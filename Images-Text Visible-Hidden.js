function updateVisibilityBasedOnP() {
    var pFullValue = this.getField("P_Full").value;

    // Ensure pFullValue is treated as a string and formatted correctly
    pFullValue = String(pFullValue).trim();
    if (!isNaN(parseFloat(pFullValue)) && pFullValue.indexOf(".") === -1) {
        pFullValue += ".0";
    }

    // Enhanced debugging
    console.println("Debugging pFullValue: '" + pFullValue + "' (Type: " + typeof pFullValue + ")");

    // Initialize all fields to hidden initially
    var fieldsToHide = ["Text5", "Image5_af_image", "Image6_af_image", "Text7", "Image8_af_image", "Image9_af_image", "Text1", "Image3_af_image", "Image4_af_image", "Text6", "Image7_af_image", "Image10_af_image", "Text11", "Image12_af_image", "Image13_af_image", "Text14", "Image15_af_image", "Image16_af_image", "Text17", "Image18_af_image", "Image19_af_image", "Text20", "Image21_af_image", "Image22_af_image", "Text23", "Image24_af_image", "Image25_af_image", "Text26", "Image27_af_image", "Image28_af_image", "Text29", "Image30_af_image", "Image31_af_image", "Text32", "Image33_af_image", "Image34_af_image", "Text35", "Image36_af_image", "Image37_af_image", "Text38", "Image39_af_image", "Image40_af_image", "Text4", "Image1_af_image", "Image2_af_image", "Text41", "Image42_af_image", "Image43_af_image", "Text44", "Image45_af_image", "Image46_af_image", "Text47", "Image48_af_image", "Image49_af_image", "Text50", "Image51_af_image", "Image52_af_image", "Text53", "Image54_af_image", "Image55_af_image", "Text56", "Image57_af_image", "Image58_af_image", "Text59", "Image60_af_image", "Image61_af_image", "Text62", "Image63_af_image", "Image64_af_image", "Text65", "Image66_af_image", "Image67_af_image", "Text68", "Image69_af_image", "Image70_af_image", "Text71", "Image72_af_image", "Image73_af_image", "Text2", "Image11_af_image", "Image14_af_image", "Text15", "Image17_af_image", "Image20_af_image", "Text21", "Image23_af_image", "Image26_af_image", "Text27", "Image29_af_image", "Image32_af_image", "Text33", "Image35_af_image", "Image38_af_image", "Text39", "Image41_af_image", "Image44_af_image", "Text45", "Image47_af_image", "Image50_af_image", "Text51", "Image53_af_image", "Image56_af_image", "Text57", "Image59_af_image", "Image62_af_image", "Text63", "Image65_af_image", "Image68_af_image", "Text69", "Image71_af_image", "Image74_af_image", "Text75", "Image76_af_image", "Image77_af_image", "Text78", "Image79_af_image", "Image80_af_image", "Text79", "Image81_af_image", "Image82_af_image", "Text3", "Image75_af_image", "Image78_af_image", "Text8", "Image83_af_image", "Image84_af_image"]; // Add all field names here
    for (var i = 0; i < fieldsToHide.length; i++) {
        this.getField(fieldsToHide[i]).display = display.hidden;
    }

    // Determine visibility based on pFullValue
    switch (pFullValue) {
        			// Set visibility for sets of fields
		case "85.0":
			textToDisplay = "Unknown Tree Species";
            break;
        case "45.0":
            this.getField("Text5").display = display.visible;
            this.getField("Image5_af_image").display = display.visible;
            this.getField("Image6_af_image").display = display.visible;
			textToDisplay = "Alder (Red / Western / Oregon)";
            break;
        case "73.1":
            this.getField("Text8").display = display.visible;
            this.getField("Image83_af_image").display = display.visible;
            this.getField("Image84_af_image").display = display.visible;
			textToDisplay = "Arbutus (Pacific Madrone)";
            break;
        case "44.9 Aspen":
            this.getField("Text7").display = display.visible;
            this.getField("Image8_af_image").display = display.visible;
            this.getField("Image9_af_image").display = display.visible;
			textToDisplay = "Aspen (Trembling)";
            break;
        case "60.9":
            this.getField("Text1").display = display.visible;
            this.getField("Image3_af_image").display = display.visible;
            this.getField("Image4_af_image").display = display.visible;
			textToDisplay = "Birch (Alaska)";
            break;
        case "68.5 Birch":
            this.getField("Text6").display = display.visible;
            this.getField("Image7_af_image").display = display.visible;
            this.getField("Image10_af_image").display = display.visible;
			textToDisplay = "Birch (Other than Listed)";
            break;
        case "67.4":
            this.getField("Text11").display = display.visible;
            this.getField("Image12_af_image").display = display.visible;
            this.getField("Image13_af_image").display = display.visible;
			textToDisplay = "Birch (Paper)";
            break;
        case "84.2":
            this.getField("Text14").display = display.visible;
            this.getField("Image15_af_image").display = display.visible;
            this.getField("Image16_af_image").display = display.visible;
			textToDisplay = "Black Hawthorn";
            break;
        case "46.1 Cedar":
            this.getField("Text17").display = display.visible;
            this.getField("Image18_af_image").display = display.visible;
            this.getField("Image19_af_image").display = display.visible;
			textToDisplay = "Cedar (Other than Listed)";
            break;
        case "39.3 Cedar":
            this.getField("Text20").display = display.visible;
            this.getField("Image21_af_image").display = display.visible;
            this.getField("Image22_af_image").display = display.visible;
			textToDisplay = "Cedar (Western Red)";
            break;
        case "57.8":
            this.getField("Text23").display = display.visible;
            this.getField("Image24_af_image").display = display.visible;
            this.getField("Image25_af_image").display = display.visible;
			textToDisplay = "Cedar (Yellow)";
            break;
        case "39.3 Cottonwood":
            this.getField("Text26").display = display.visible;
            this.getField("Image27_af_image").display = display.visible;
            this.getField("Image28_af_image").display = display.visible;
			textToDisplay = "Cottonwood (Black)";
            break;
        case "73.0":
            this.getField("Text29").display = display.visible;
            this.getField("Image30_af_image").display = display.visible;
            this.getField("Image31_af_image").display = display.visible;
			textToDisplay = "Dogwood (Pacific)";
            break;
        case "51.7":
            this.getField("Text32").display = display.visible;
            this.getField("Image33_af_image").display = display.visible;
            this.getField("Image34_af_image").display = display.visible;
			textToDisplay = "Fir (Other than Listed)";
            break;
        case "57.3":
            this.getField("Text35").display = display.visible;
            this.getField("Image36_af_image").display = display.visible;
            this.getField("Image37_af_image").display = display.visible;
			textToDisplay = "Fir (Douglas)";
            break;
        case "46.1 Fir":
            this.getField("Text38").display = display.visible;
            this.getField("Image39_af_image").display = display.visible;
            this.getField("Image40_af_image").display = display.visible;
			textToDisplay = "Fir (Grand / White)";
            break;
        case "44.9 Fir":
            this.getField("Text4").display = display.visible;
            this.getField("Image1_af_image").display = display.visible;
            this.getField("Image2_af_image").display = display.visible;
			textToDisplay = "Fir (Pacific)";
            break;			
        case "41.6 Fir":
            this.getField("Text41").display = display.visible;
            this.getField("Image42_af_image").display = display.visible;
            this.getField("Image43_af_image").display = display.visible;
			textToDisplay = "Fir (Sub-Alpine)";
            break;
        case "47.2 Hemlock":
            this.getField("Text44").display = display.visible;
            this.getField("Image45_af_image").display = display.visible;
            this.getField("Image46_af_image").display = display.visible;
			textToDisplay = "Hemlock (Mountain)";
            break;
        case "53.9 Hemlock":
            this.getField("Text47").display = display.visible;
            this.getField("Image48_af_image").display = display.visible;
            this.getField("Image49_af_image").display = display.visible;
			textToDisplay = "Hemlock (Western)";
            break;
        case "64.6 Juniper":
            this.getField("Text50").display = display.visible;
            this.getField("Image51_af_image").display = display.visible;
            this.getField("Image52_af_image").display = display.visible;
			textToDisplay = "Juniper";
            break;
        case "61.8":
            this.getField("Text53").display = display.visible;
            this.getField("Image54_af_image").display = display.visible;
            this.getField("Image55_af_image").display = display.visible;
			textToDisplay = "Larch (Alpine / SubAlpine)";
            break;
        case "60.1":
            this.getField("Text56").display = display.visible;
            this.getField("Image57_af_image").display = display.visible;
            this.getField("Image58_af_image").display = display.visible;
			textToDisplay = "Larch (Tamarack)";
            break;
        case "64.6 Larch":
            this.getField("Text59").display = display.visible;
            this.getField("Image60_af_image").display = display.visible;
            this.getField("Image61_af_image").display = display.visible;
			textToDisplay = "Larch (Western)";
            break;
        case "56.2":
            this.getField("Text62").display = display.visible;
            this.getField("Image63_af_image").display = display.visible;
            this.getField("Image64_af_image").display = display.visible;
			textToDisplay = "Maple (BigLeaf)";
            break;
        case "65.1 Maple":
            this.getField("Text65").display = display.visible;
            this.getField("Image66_af_image").display = display.visible;
            this.getField("Image67_af_image").display = display.visible;
			textToDisplay = "Maple (Other than Listed)";
            break;
        case "80.1":
            this.getField("Text68").display = display.visible;
            this.getField("Image69_af_image").display = display.visible;
            this.getField("Image70_af_image").display = display.visible;
			textToDisplay = "Oak (Garry)";
            break;
        case "74.1":
            this.getField("Text71").display = display.visible;
            this.getField("Image72_af_image").display = display.visible;
            this.getField("Image73_af_image").display = display.visible;
			textToDisplay = "Oak (Other than Listed)";
            break;
        case "50.5":
            this.getField("Text2").display = display.visible;
            this.getField("Image11_af_image").display = display.visible;
            this.getField("Image14_af_image").display = display.visible;
			textToDisplay = "Pine (Jack)";
            break;
        case "47.7":
            this.getField("Text15").display = display.visible;
            this.getField("Image17_af_image").display = display.visible;
            this.getField("Image20_af_image").display = display.visible;
			textToDisplay = "Pine (Limber)";
            break;
        case "48.3 Pine":
            this.getField("Text21").display = display.visible;
            this.getField("Image23_af_image").display = display.visible;
            this.getField("Image26_af_image").display = display.visible;
			textToDisplay = "Pine (Lodgepole)";
            break;
        case "47.2 Pine":
            this.getField("Text27").display = display.visible;
            this.getField("Image29_af_image").display = display.visible;
            this.getField("Image32_af_image").display = display.visible;
			textToDisplay = "Pine (Ponderosa)";
            break;
        case "44.9 Pine":
            this.getField("Text33").display = display.visible;
            this.getField("Image35_af_image").display = display.visible;
            this.getField("Image38_af_image").display = display.visible;
			textToDisplay = "Pine (Western White)";
            break;
        case "59.6 Pine":
            this.getField("Text39").display = display.visible;
            this.getField("Image41_af_image").display = display.visible;
            this.getField("Image44_af_image").display = display.visible;
			textToDisplay = "Pine (Whitebark / Pitch)";
            break;
        case "53.9 Pine":
            this.getField("Text79").display = display.visible;
            this.getField("Image81_af_image").display = display.visible;
            this.getField("Image82_af_image").display = display.visible;
			textToDisplay = "Pine (Other than Listed)";
            break;			
        case "34.8":
            this.getField("Text45").display = display.visible;
            this.getField("Image47_af_image").display = display.visible;
            this.getField("Image50_af_image").display = display.visible;
			textToDisplay = "Poplar";
            break;
        case "48.3 Spruce":
            this.getField("Text51").display = display.visible;
            this.getField("Image53_af_image").display = display.visible;
            this.getField("Image56_af_image").display = display.visible;
			textToDisplay = "Spruce (Black)";
            break;
        case "41.6 Spruce-1":
            this.getField("Text57").display = display.visible;
            this.getField("Image59_af_image").display = display.visible;
            this.getField("Image62_af_image").display = display.visible;
			textToDisplay = "Spruce (Engelmann)";
            break;
        case "47.2 Spruce-3":
            this.getField("Text63").display = display.visible;
            this.getField("Image65_af_image").display = display.visible;
            this.getField("Image68_af_image").display = display.visible;
			textToDisplay = "Spruce (Sitka)";
            break;
        case "41.6 Spruce-2":
            this.getField("Text69").display = display.visible;
            this.getField("Image71_af_image").display = display.visible;
            this.getField("Image74_af_image").display = display.visible;
			textToDisplay = "Spruce (White)";
            break;
		case "47.2 Spruce-4":
            this.getField("Text3").display = display.visible;
            this.getField("Image75_af_image").display = display.visible;
            this.getField("Image78_af_image").display = display.visible;
			textToDisplay = "Spruce (Other than Listed)";
            break;
        case "29.6":
            this.getField("Text75").display = display.visible;
            this.getField("Image76_af_image").display = display.visible;
            this.getField("Image77_af_image").display = display.visible;
			textToDisplay = "Willow (Pacific / Weeping)";
            break;
        case "75.8":
            this.getField("Text78").display = display.visible;
            this.getField("Image79_af_image").display = display.visible;
            this.getField("Image80_af_image").display = display.visible;
			textToDisplay = "Yew (Western / Pacific)";
            break;			
		case "68.5 Apple":
			textToDisplay = "Apple";
            break;
		case "59.6 Ash":
			textToDisplay = "Ash (Black)";
            break;
		case "70.8":
			textToDisplay = "Ash (White)";
            break;
		case "52.8 BaldCypress":
			textToDisplay = "BaldCypress";
            break;
		case "52.8 Cherry":
			textToDisplay = "Cherry (Black)";
            break;
		case "44.9 Chestnut":
			textToDisplay = "Chestnut (American)";
            break;
		case "66.3":
			textToDisplay = "Elm";
            break;
		case "74.7":
			textToDisplay = "Hickory";
            break;
		case "46.1 Redwood-Old":
			textToDisplay = "Redwood (Old Growth)";
            break;
		case "41.6 Redwood-New":
			textToDisplay = "Redwood (New Growth)";
            break;
		case "60.7":
			textToDisplay = "Sycamore (American)";
            break;
		case "33.5":
			textToDisplay = "Walnut (Black)";
            break;
		
        // Add more cases as needed for each unique value in "P_Full"
        // ...
        default:
            console.println("No match found for: " + pFullValue);
            break;
    }
	
	    // Update the "Text500" field
		this.getField("Text500").value = textToDisplay;
}
