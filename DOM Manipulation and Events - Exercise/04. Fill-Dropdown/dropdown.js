function addItem() {

    const newItemText = document.getElementById("newItemText");
    const newItemValue = document.getElementById("newItemValue");
    

    if (newItemText && newItemValue) {

        const newOption = document.createElement("option");
        newOption.textContent = newItemText.value;
        newOption.value = newItemValue.value;

        document.getElementById("menu").appendChild(newOption);

        newItemText.value = "";
        newItemValue.value = "";
    } else {
        console.error("Input elements not found.");
    }
}