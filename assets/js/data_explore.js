document.getElementById("search-input").addEventListener("input", () => {
    let searchInput = document.getElementById("search-input").value.trim().toUpperCase();

    if (searchInput === "") {
    resetFilter();
    }
});

function resetFilter() {
    let elements = document.querySelectorAll(".popular_card");
    let noResultsMessage = document.getElementById("no-results-message");

    elements.forEach((element) => {
        element.classList.remove("hide");
    });
    noResultsMessage.style.display = "none";
}

document.getElementById("search").addEventListener("click", () => {
    filterBySearch();
});

document.getElementById("search-input").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        filterBySearch();
    }
});

window.onload = () => {
   filterExplore("all");
};