export const toISOString = ms => {
  var date = new Date(ms);
  let year = String(date.getFullYear()).slice(2);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  return [day, month, year].join('.');
};
