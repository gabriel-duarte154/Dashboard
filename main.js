function toggleTheme () {
    const theme = document.documentElement;
    
    theme.className == "light" ? 
    theme.className = "dark" : 
    theme.className = "light";
    
    console.log(theme.className)
}

toggleTheme();