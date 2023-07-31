function formatSubscriptionEndDateAndTimer(subscriptionEndDateString) {
  const subscriptionEndDate = new Date(subscriptionEndDateString);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
  }
  function formatDate(date) {
    const day = addLeadingZero(date.getDate());
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${monthName} ${year}`;
  }

  const formattedDate = formatDate(subscriptionEndDate);
  return {
    formattedDate,
  };
}
function formatDateFromMilliseconds(milliseconds) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date(milliseconds);
  const day = String(date.getDate()).padStart(2, '0');
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
export { formatSubscriptionEndDateAndTimer, formatDateFromMilliseconds };
