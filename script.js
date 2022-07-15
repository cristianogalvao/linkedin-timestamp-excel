/** @customfunction */
function getLinkedInTimestamp(url: string): string {
  const regex = /([0-9]{19})/;
  const rawtimestamp = parseInt(parseInt(regex.exec(url).pop()).toString(2).slice(0, 41),2);
  const utc_timestamp = new Date(rawtimestamp).toUTCString();
  const timestamp = utc_timestamp.substr(5,utc_timestamp.length-5-3-1);
  return timestamp;
}