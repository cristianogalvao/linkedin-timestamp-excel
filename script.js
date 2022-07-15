function getLinkedInTimestamp(url: string): string {
  const regex = /([0-9]{19})/;
  const rawtimestamp = parseInt(parseInt(regex.exec(url).pop()).toString(2).slice(0, 41),2);
  const timestamp = new Date(rawtimestamp).toLocaleString().replace(',','');
  return timestamp;
}