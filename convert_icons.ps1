# 百度网盘云加速下载插件 - 图标转换脚本

# 本脚本用于将icon.svg转换为Edge插件所需的不同尺寸PNG图标
# 如果系统中安装了Inkscape，将自动执行转换
# 否则，将提供在线转换的步骤指南

# 定义图标尺寸和输出路径
$svgPath = ".\icons\icon.svg"
$outputDir = ".\icons"
$sizes = @(16, 48, 128)

# 检查SVG文件是否存在
if (-not (Test-Path $svgPath)) {
    Write-Host "错误: 找不到SVG文件 $svgPath" -ForegroundColor Red
    exit 1
}

# 确保输出目录存在
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

# 检查Inkscape是否已安装
$inkscapePath = Get-Command inkscape -ErrorAction SilentlyContinue

if ($inkscapePath) {
    Write-Host "开始使用Inkscape转换图标..."
    foreach ($size in $sizes) {
        echo $size
        $outputPath = Join-Path $outputDir "icon${size}.png"
        Write-Host "正在转换为 ${size}x${size} 尺寸..."
        & inkscape --export-type="png" --export-width=$size --export-height=$size --export-filename="$outputPath" "$svgPath"
        if ($LASTEXITCODE -eq 0) {
            Write-Host "成功创建: $outputPath" -ForegroundColor Green
        } else {
            Write-Host "转换失败: $outputPath" -ForegroundColor Red
        }
    }
} else {
    Write-Host "未找到Inkscape，请使用在线工具转换图标:" -ForegroundColor Yellow
    Write-Host "1. 打开浏览器，访问 https://svg-to-png.net/"
    Write-Host "2. 上传文件: $svgPath"
    Write-Host "3. 设置尺寸为 16x16，下载并保存为: ${outputDir}\icon16.png"
    Write-Host "4. 重复步骤3，分别设置尺寸为 48x48 和 128x128"
    #Write-Host "5. 确保所有图标文件保存在 ${outputDir} 目录下"
}

Write-Host "图标转换操作完成"