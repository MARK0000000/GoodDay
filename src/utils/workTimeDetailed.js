import { getDay, getHours, getMinutes } from 'date-fns';

export function getWorkTimeStatus(workTimeDetailed) {
    const currentDate = new Date();
    const currentDay = getDay(currentDate);
    const currentHour = getHours(currentDate);
    const currentMinute = getMinutes(currentDate);

    if (workTimeDetailed[currentDay]) {
        const todayWorkHours = workTimeDetailed[currentDay];
        let statusMessage = 'Закрыто';

        if (todayWorkHours.isDayOff) {
            return statusMessage;
        }

        const openingTime = todayWorkHours.start;
        const closingTime = todayWorkHours.end;

        if (currentHour < openingTime) {
            const minutesToOpen = (openingTime - currentHour) * 60 - currentMinute;
            if (minutesToOpen <= 60) {
                statusMessage = `Откроется через ${minutesToOpen} минут`;
            }
        } else if (currentHour >= closingTime) {
            statusMessage = 'Закрыто';
        } else {
            statusMessage = 'Открыто';
        }

        return statusMessage;
    } else {
        return 'Не указано'
    }
}
