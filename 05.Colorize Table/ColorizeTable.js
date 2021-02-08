function colorize() {
    const rows = document.querySelectorAll('table tr');
    let i = 0;
    for (const row of rows) {
        if (i % 2 != 0) {
            row.style.background = 'teal';

        }
        i++;
    } 
}