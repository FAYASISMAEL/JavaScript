function showTooltip(e) {
    let tooltip = document.querySelector(".tooltip");
    tooltip.style.display = "block";
    tooltip.style.left = `${e.pageX + 35}px`;
    tooltip.style.top = `${e.pageY + 35}px`;
}
function hideTooltip() {
    document.querySelector(".tooltip").style.display = "none";
}