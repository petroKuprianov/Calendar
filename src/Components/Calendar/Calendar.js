const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30 ,31, 30, 31];

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    Novermber: 10,
    December: 11
};

export function arrEqual(a,b){
    if(!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() == b.getDate()

    )
}

export function isLeapYear(year){
    return !((year % 4) || (!(year % 100) && (year % 400)));
}


export function getDaysInMonth(date){
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysDaysInMonth = DAYS_IN_MONTH[month];

    if(isLeapYear(year) && month === Month.February)
    {
        return daysDaysInMonth+1;
    }
    else
    {
        return daysDaysInMonth;

    }

}

export function getMonthData(year, month){
    const result = [];
    const date = new Date(year,month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = date.getDay();
    let day = 1;

    for(let i= 0;i< (daysInMonth + monthStartsOn) / DAYS_IN_WEEK;i++)
    {
        result[i] = [];

        for(let j=0; j < DAYS_IN_WEEK; j++){

            if((i === 0 && j < monthStartsOn) || day > daysInMonth)
            {
                result[i][j] = undefined;
            }
            else
            {
                result[i][j] = new Date(year, month, day++);
            }

        }
    }

    return result;
}