# SVG 转 PNG 图标转换指南

本指南介绍如何将插件的 SVG 图标转换为 Edge 插件商店所需的 16x16、48x48 和 128x128 三种尺寸的 PNG 图标。

## 推荐的在线转换工具

### 1. SVGtoPNG

- 网址: `<mcreference link="https://svg-to-png.net/" index="1">`1`</mcreference>`
- 特点: 完全在浏览器中处理，无需上传文件，转换速度快

### 2. Convertio

- 网址: `<mcreference link="https://convertio.co/zh/svg-png/" index="2">`2`</mcreference>` `<mcreference link="https://www.cnblogs.com/ai888/p/18606247" index="4">`4`</mcreference>`
- 特点: 支持多种文件格式转换，操作简单

### 3. SVG.la

- 网址: `<mcreference link="https://svg.la/zh/svg-to-png" index="5">`5`</mcreference>`
- 特点: 无图像大小或数量限制，无需注册

## 转换步骤 (以 SVGtoPNG 为例)

1. 访问 SVGtoPNG 网站: https://svg-to-png.net/
2. 点击 "选择 SVG 文件" 按钮，上传您的图标文件: `f:\works\web\BaiduCloudDown\BaiduCloudDown\icons\icon.svg`
3. 在 "输出设置" 中，设置以下参数:
   - 宽度: 128 像素
   - 高度: 128 像素
   - 背景颜色: 透明
4. 点击 "转换" 按钮
5. 转换完成后，点击 "下载" 按钮保存 128x128 尺寸的 PNG 图标
6. 重复步骤 3-5，分别设置宽度和高度为 48 像素和 16 像素，生成另外两种尺寸的图标

## 保存图标文件

将生成的三个尺寸的 PNG 图标保存到插件的 icons 目录中，并命名为:

- `icon16.png` (16x16 像素)
- `icon48.png` (48x48 像素)
- `icon128.png` (128x128 像素)

## 验证图标

确保生成的 PNG 图标清晰可见，没有失真或模糊现象。您可以使用图像查看器打开文件进行检查。

## 注意事项

1. 转换过程中保持网络连接稳定
2. 确保 SVG 文件路径正确: `f:\works\web\BaiduCloudDown\BaiduCloudDown\icons\icon.svg`
3. 生成的 PNG 图标应保持透明背景
4. 转换后请验证图标尺寸是否符合要求

完成以上步骤后，您的插件将拥有符合 Edge 插件商店要求的图标文件。
