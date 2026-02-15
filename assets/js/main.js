
const toggleBtn = document.getElementById("langToggle");
const arElements = document.querySelectorAll(".ar");
const enElements = document.querySelectorAll(".en");

toggleBtn.addEventListener("click", () => {

    arElements.forEach(el => el.classList.toggle("hidden"));
    enElements.forEach(el => el.classList.toggle("hidden"));

    if(toggleBtn.textContent === "EN"){
        toggleBtn.textContent = "AR";
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
    } else {
        toggleBtn.textContent = "EN";
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
    }

});
