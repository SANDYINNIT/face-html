document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.eyell');
    const object = document.querySelector('.eyelr');

    container.addEventListener('mousemove', function (event) {
        const containerRect = container.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        // Ensure the object stays within the container
        const maxX = containerRect.width - object.offsetWidth;
        const maxY = containerRect.height - object.offsetHeight;

        // Calculate the object's position
        const posX = Math.min(maxX, Math.max(0, mouseX - object.offsetWidth / 2));
        const posY = Math.min(maxY, Math.max(0, mouseY - object.offsetHeight / 2));

        // Set the object's position
        object.style.left = posX + 'px';
        object.style.top = posY + 'px';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.eyerr');
    const object = document.querySelector('.eyerl');

    container.addEventListener('mousemove', function (event) {
        const containerRect = container.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        // Ensure the object stays within the container
        const maxX = containerRect.width - object.offsetWidth;
        const maxY = containerRect.height - object.offsetHeight;

        // Calculate the object's position
        const posX = Math.min(maxX, Math.max(0, mouseX - object.offsetWidth / 2));
        const posY = Math.min(maxY, Math.max(0, mouseY - object.offsetHeight / 2));

        // Set the object's position
        object.style.left = posX + 'px';
        object.style.top = posY + 'px';
    });
});