export function getVideoWithEmbed(url: string) {
  let result: string = '';
  let arr: string[] = url.split('/');
  let rightPart: string[] = arr.slice(3);
  result = arr.slice(0, 3).concat('embed').concat(rightPart).join('/');
  return result;
}
