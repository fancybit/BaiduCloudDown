// content.js
// 这个文件在网页加载时运行

// 可以添加一些辅助功能，例如检测页面上的下载链接

console.log('百度网盘云加速下载插件已加载');

// 示例：为所有下载链接添加标记
function highlightDownloadLinks() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    // 简单判断是否为下载链接
    if (link.href.toLowerCase().endsWith('.zip') ||
        link.href.toLowerCase().endsWith('.rar') ||
        link.href.toLowerCase().endsWith('.exe') ||
        link.href.toLowerCase().endsWith('.pdf') ||
        link.href.toLowerCase().includes('download')) {
      // 添加一个数据属性标记
      link.dataset.baiduCloudDownload = 'true';
    }
  });
}

highlightDownloadLinks();

// 监听页面变化，重新高亮下载链接
const observer = new MutationObserver(highlightDownloadLinks);
observer.observe(document.body, { childList: true, subtree: true });