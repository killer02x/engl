document.addEventListener("DOMContentLoaded", function() {
    const days = document.querySelectorAll(".day");

    // Загрузка данных из localStorage
    days.forEach(day => {
        const date = day.querySelector(".date").textContent;
        if (localStorage.getItem(date) === "completed") {
            day.classList.add("completed");
        }
    });

    days.forEach(day => {
        day.addEventListener("click", function() {
            const date = day.querySelector(".date").textContent;
            if (day.classList.contains("completed")) {
                day.classList.remove("completed");
                localStorage.removeItem(date);
            } else {
                day.classList.add("completed");
                localStorage.setItem(date, "completed");
            }
        });
    });
});
