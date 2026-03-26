export function calculateReadingTime(content: string): number {
  // 中文字符
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  // 英文单词
  const englishWords = (content.match(/[a-zA-Z]+/g) || []).length;
  // 中文 400字/分钟，英文 200词/分钟
  const minutes = chineseChars / 400 + englishWords / 200;
  return Math.max(1, Math.ceil(minutes));
}
