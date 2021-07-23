const toggleBtns = document.querySelectorAll('.toggle-button');

toggleBtns.forEach(e => {
    e.addEventListener("click", () => {
        if (document.documentElement.hasAttribute("theme")) {
            document.documentElement.removeAttribute("theme");
        } else {
            document.documentElement.setAttribute("theme", "light");
        }
    });
});