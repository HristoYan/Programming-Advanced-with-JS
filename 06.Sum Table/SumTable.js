function sumTable() {
    const table = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < table.length - 1; i++) {
        const row = table[i].lastChild.textContent;
        sum += Number(row);
        
    }
    document.getElementById('sum').textContent = sum;
}