document.addEventListener("DOMContentLoaded", function () {
    let clickCounts = {idElement: 0, querySelectorElement: 0};

    const elementById = document.getElementById("target1");
    const elementByQuerySelector = document.querySelector("#target2");

    elementById.addEventListener("click", function () {
        clickCounts.idElement += 1;
        if (clickCounts.idElement % 2 === 1) {
            elementById.classList.add("background-change-1", "text-change-1");
        } else {
            elementById.classList.remove("background-change-1", "text-change-1");
        }
    });

    elementByQuerySelector.addEventListener("click", function () {
        clickCounts.querySelectorElement += 1;
        if (clickCounts.querySelectorElement % 2 === 1) {
            elementByQuerySelector.classList.add("background-change-2", "text-change-2");
        } else {
            elementByQuerySelector.classList.remove("background-change-2", "text-change-2");
        }
    });

    const imageContainer = document.querySelector('a[href="https://kyivcity.gov.ua/"]');
    const addImage = document.getElementById("add-image");
    const increaseSize = document.getElementById("increase-size");
    const decreaseSize = document.getElementById("decrease-size");
    const removeImage = document.getElementById("remove-image");

    addImage.addEventListener("click", function () {
        if (!document.getElementById("image")) {
            const newImg = document.createElement("img");
            newImg.src = "img/kyiv.jpg";
            newImg.width = 600;
            newImg.alt = "Фото міста Київ";
            newImg.id = "image";
            imageContainer.appendChild(newImg);
        }
    });

    increaseSize.addEventListener("click", function () {
        const img = document.getElementById("image");
        if (img) {
            img.width += 50;
        }
    });

    decreaseSize.addEventListener("click", function () {
        const img = document.getElementById('image');
        if (img && img.width > 50) { // Мінімальний розмір - 50 пікселів
            img.width -= 50; // Зменшуємо ширину на 50 пікселів
        }
    });

    removeImage.addEventListener("click", function () {
        const img = document.getElementById('image');
        if (img) {
            img.remove();
        }
    });
});
