function displayLocalDateTime() {
    const now = new Date();
    const dateOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 使用24小时制
    };
    const dateFormatter = new Intl.DateTimeFormat([], dateOptions);
    const timeFormatter = new Intl.DateTimeFormat([], timeOptions);
    const dateString = dateFormatter.format(now);
    const timeString = timeFormatter.format(now);

    const dateTimeString = `Test Completion Time: ${dateString} ${timeString}`;
    document.getElementById('result_time').textContent = dateTimeString;
}

// 页面加载时显示日期和时间
window.onload = displayLocalDateTime;