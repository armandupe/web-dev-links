let allLinks = document.getElementsByClassName('link');
for (let i = 0; i < allLinks.length; i++) {
    let link = allLinks[i];
    let linkTextFirstSymbol = link.textContent.charAt(0).toUpperCase();
    let linkTextFirstSymbolUpperCase = link.textContent.charAt(0);
    linkTextFirstSymbolUpperCase = linkTextFirstSymbol;
    link.textContent = linkTextFirstSymbolUpperCase + link.textContent.substring(1);
}  