const sort = (arrOfItems) => {

    for (let item in arrOfItems) {
        // 1 <= priority <= 5
        item.weight = (6 - item.priority) / (daysBetween + 10)
    }

    return arrOfItems.sort((a, b) => {
        return a.weight - b.weight;
    })
}

const daysBetween = (day1, day2) => {
    var one_day=1000*60*60*24;
    var day1_ms = day1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    return Math.round(difference_ms/one_day);
}