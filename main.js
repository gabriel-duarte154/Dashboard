const btnToggleTheme = document.querySelector("#theme-toggle");
const sidebar = document.querySelector("#sidebar")


function toggleTheme () {
    const theme = document.documentElement;
    
    theme.className == "light" ? 
    theme.className = "dark" : 
    theme.className = "light";
    
    btnToggleTheme.classList.toggle("flip")
    
    console.log(theme.className)
}

btnToggleTheme.addEventListener("click", toggleTheme)
toggleTheme();


function openCloseSidebar() {
    const spans = [...document.querySelectorAll(".sidebar span")];
    spans.forEach(span => {
        span.classList.toggle("hidden")
    })
    console.log(spans)
}

sidebar.addEventListener("click", openCloseSidebar)