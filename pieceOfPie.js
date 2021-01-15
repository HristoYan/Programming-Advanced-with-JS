function pie(array, firstFlavor, secondFlavor) {
    let firstIndex = array.indexOf(firstFlavor);
    let secondIndex = array.indexOf(secondFlavor) + 1;
    let result = array.slice(firstIndex, secondIndex);
    return result;
}

console.log(pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));