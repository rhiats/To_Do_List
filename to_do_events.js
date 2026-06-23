//select button
const MyButton = document.getElementById("input_button")
// Creating an array
const data_arr = [];

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

        data_arr.push({currentText,todo_category})
    }
});

