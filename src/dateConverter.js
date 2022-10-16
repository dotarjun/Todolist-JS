export const dateConverter = (obj) => {
    const date = obj.due;
    if (date == '') {
        return date
    }
    const dateArr = date.split('-')
    const year = dateArr[0]
    const month = dateArr[1]
    const day = dateArr[2]
    const newDate = `${day}/${month}`
    return newDate;
}