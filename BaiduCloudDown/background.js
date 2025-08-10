// 监听插件安装事件
chrome.runtime.onInstalled.addListener(function() {
  // 创建右键菜单项
  chrome.contextMenus.create({
    id: 'baiduCloudDownload',
    title: '使用百度网盘云加速下载',
    contexts: ['link']
  });
});

// 监听右键菜单项点击事件
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'baiduCloudDownload') {
    // 获取链接URL
    const url = info.linkUrl;
    console.log('准备使用百度网盘云加速下载:', url);

    // 调用百度网盘加速下载API
    // 注意：这里需要替换为实际的百度网盘API调用逻辑
    // 以下是一个示例实现
    const baiduCloudApiUrl = 'https://pan.baidu.com/rest/2.0/xpan/multimedia?method=upload';

    // 构建请求参数
    const params = {
      url: url,
      // 其他必要的参数
    };

    // 发送请求到百度网盘API
    fetch(baiduCloudApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
      console.log('百度网盘API响应:', data);
      // 处理响应数据
      if (data.error_code === 0) {
        // 下载成功
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon48.png',
          title: '百度网盘云加速下载',
          message: '文件已成功添加到百度网盘！'
        });
      } else {
        // 下载失败
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon48.png',
          title: '百度网盘云加速下载',
          message: '下载失败: ' + data.error_msg
        });
      }
    })
    .catch(error => {
      console.error('请求百度网盘API出错:', error);
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon48.png',
        title: '百度网盘云加速下载',
        message: '请求出错: ' + error.message
      });
    });
  }
});