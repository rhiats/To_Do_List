//select button
const MyButton = document.getElementById("input_button")

// 2. Attach a listener
MyButton.addEventListener("click", function() {
    const inputElement = document.getElementById("user_input")
    const currentText = inputElement.value;

    if (currentText.trim() !== ""){
        // 1. Find the existing list container
        const listContainer = document.getElementById('My_List');

        // 2. Create the new <li> element
        const newListItem = document.createElement('li');

        // 3. Add text content to the new item
        newListItem.textContent = currentText;

        // 4. Append the new item to the list container
        listContainer.appendChild(newListItem);
    }
});