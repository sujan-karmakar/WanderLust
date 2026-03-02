
function toggleTaxDisplay(checked) {
    let basePrices = document.getElementsByClassName("price-base");
    let taxPrices = document.getElementsByClassName("price-tax");
    let taxInfos = document.getElementsByClassName("tax-info");
    for (let i = 0; i < basePrices.length; i++) {
        if (checked) {
            basePrices[i].classList.add("d-none");
            taxPrices[i].classList.remove("d-none");
            taxInfos[i].style.display = "none";
        } else {
            basePrices[i].classList.remove("d-none");
            taxPrices[i].classList.add("d-none");
            taxInfos[i].style.display = "inline";
        }
    }
}

let taxSwitch = document.getElementById("switchCheckDefault");
if (taxSwitch) {
    taxSwitch.addEventListener("change", (e) => {
        toggleTaxDisplay(e.target.checked);
    });
}

// For large screens
let taxSwitchLg = document.getElementById("switchCheckDefaultLg");
if (taxSwitchLg) {
    taxSwitchLg.addEventListener("change", (e) => {
        toggleTaxDisplay(e.target.checked);
    });
}

// Set initial state (default: base price)
toggleTaxDisplay(false);
