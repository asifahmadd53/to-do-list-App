const item = document.querySelector("#item");
    const toDoBox = document.querySelector(".toDoBox");

    item.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addToDo(item.value);
            item.value = "";
        }
    });

    const addToDo = (item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${item} <i class="fas fa-times"></i>`;

        listItem.addEventListener("click", function() {
            this.classList.toggle("done");
        });

        listItem.querySelector("i").addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent the click event from bubbling up to the parent li
            listItem.remove();
        });

        toDoBox.appendChild(listItem);
    };
