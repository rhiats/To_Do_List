//select button
const MyButton = document.getElementById("input_button")

// Load existing dataset OR start empty
let data_arr = JSON.parse(localStorage.getItem("todo_dataset")) || [];

// 2. Attach a listener
MyButton.addEventListener("click", function() {
    const inputElement = document.getElementById("user_input")
    let currentText = inputElement.value;

    let todo_category = document.getElementById("category")

    if (currentText.trim() !== ""){
        // 1. Find the existing list container
        const listContainer = document.getElementById('My_List');

        // 2. Create the new <li> element
        const newListItem = document.createElement('li');

        // 2. Create the new delete button element
        const DeleteBtn = document.createElement('button');

        DeleteBtn.textContent = 'Delete Item';

        DeleteBtn.type = 'button';

        DeleteBtn.className = "delete-btn";

        // 3. Add text content to the new item
        newListItem.textContent = currentText;

        // 2. Create the Category Text
        const category_text = document.createElement('p');

        // 2. Add text content to the element
        category_text.textContent = todo_category.value;

        // 4. Append the new item to the list container
        listContainer.appendChild(newListItem);

        newListItem.appendChild(category_text);

        newListItem.appendChild(DeleteBtn);

        // 2. Clear the input field
        inputElement.value = '';

        DeleteBtn.addEventListener("click", function(){
            newListItem.remove()
        });

        category = todo_category.value
        data_arr.push({
            text: currentText,
            category: category
        })

        localStorage.setItem("todo_dataset", JSON.stringify(data_arr));
    }
});

// Download dataset button
const downloadBtn = document.getElementById("download_btn");

downloadBtn.addEventListener("click", function () {
    const dataStr = JSON.stringify(data_arr, null, 2);

    const blob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "todo_dataset.json";

    a.click();

    URL.revokeObjectURL(url);
});

