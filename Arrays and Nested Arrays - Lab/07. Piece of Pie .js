function pieceOfPie(pieFlavors, start, end) {
    let newList = pieFlavors.slice(pieFlavors.indexOf(start), pieFlavors.indexOf(end) + 1);
    return newList;
}

pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'],
 'Pot Pie', 'Smoked Fish Pie')