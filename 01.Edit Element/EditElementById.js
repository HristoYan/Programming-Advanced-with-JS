function editElement(lineToChange, match, replacer) {
    let matcher = new RegExp(match, 'gm');
    const result = lineToChange.textContent.replace(matcher, replacer);
    lineToChange.textContent = result;
    
}
