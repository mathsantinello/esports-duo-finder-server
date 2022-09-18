export function convertMinutestoHourString(minutesAmount: number) {
    const minutes = minutesAmount % 60;
    const hours = (minutesAmount - minutes) / 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}