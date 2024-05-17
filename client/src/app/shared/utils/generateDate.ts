const generateDates = (): string[] => {
    const currentDate: Date = new Date();
    const dates: string[] = [];

    dates.push(currentDate.toDateString());

    for (let i = 0; i < 20; i++) {
        currentDate.setDate(currentDate.getDate() + 1);

        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            currentDate.setDate(currentDate.getDate() + 1);
            continue;
        }

        dates.push(currentDate.toDateString());
    }

    return dates;
}

export default generateDates;