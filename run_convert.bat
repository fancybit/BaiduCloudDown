@echo off

:: 百度网盘云加速下载插件 - 图标转换批处理文件
:: 此文件用于方便地运行PowerShell图标转换脚本

echo 正在准备转换图标...
\:: 检查是否以管理员身份运行
net session >nul 2>&1
if %errorLevel% NEQ 0 (
    echo 警告: 建议以管理员身份运行此脚本，以确保有足够的权限
    pause
)

:: 运行PowerShell脚本
powershell -ExecutionPolicy Bypass -File .\convert_icons.ps1

:: 暂停以查看结果
echo 转换操作已完成，请查看上面的输出信息
pause