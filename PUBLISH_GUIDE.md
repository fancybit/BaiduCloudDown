# Microsoft Edge 插件商店发布指南

本指南详细介绍了如何将您的百度网盘云加速下载插件发布到Microsoft Edge插件商店。

## 一、注册Microsoft Partner Center开发者账号
1. 访问Microsoft Partner Center: https://partner.microsoft.com/
2. 点击"注册"(Sign up)按钮
3. 选择账号类型:
   - 个人开发者: 需要支付$19一次性费用
   - 企业开发者: 需要支付$99一次性费用
4. 使用Microsoft账号登录(如果没有，先注册一个)
5. 同意开发者协议，完成注册
6. 进入账户设置，在"Programs"下找到"Edge"并启用

> 参考链接: <mcreference link="https://blog.csdn.net/ouyyan/article/details/145378358" index="1">1</mcreference> <mcreference link="https://cloud.tencent.com/developer/article/2542917" index="5">5</mcreference>

## 二、准备插件发布材料
1. **插件包**: 将插件文件打包成.zip格式
   - 确保包含所有必要文件: manifest.json, background.js, content.js, 图标文件等
   - 图标文件需要包含16x16、48x48和128x128三种尺寸的PNG格式
2. **插件描述**: 撰写清晰、简洁的插件描述
3. **截图**: 准备插件运行时的截图(至少1张)
4. **隐私政策**: 如果插件处理用户数据，需要提供隐私政策

## 三、打包插件
1. 确保所有文件都已准备就绪
2. 选中所有插件文件，右键选择"发送到"→"压缩(zipped)文件夹"
3. 将生成的.zip文件重命名为合适的名称(如baidu-cloud-download.zip)

> 参考链接: <mcreference link="https://cloud.tencent.cn/developer/article/2479490" index="2">2</mcreference>

## 四、提交插件
1. 登录Microsoft Edge开发者中心: https://partner.microsoft.com/zh-cn/dashboard/microsoftedge/
2. 点击"创建新扩展"
3. 上传您的插件包(.zip文件)
4. 填写插件信息:
   - 名称
   - 版本号
   - 描述
   - 截图
   - 隐私政策(如适用)
5. 选择发布范围(公开或私有)
6. 检查所有信息是否正确
7. 点击"提交"按钮

> 参考链接: <mcreference link="https://blog.csdn.net/owo_ovo/article/details/137589659" index="3">3</mcreference>

## 五、审核流程
1. 提交后，Microsoft将对您的插件进行审核
2. 审核时间通常为1-3个工作日
3. 您可以在开发者中心查看审核状态
4. 如果审核通过，插件将在Edge插件商店上架
5. 如果审核未通过，您将收到反馈并可以修改后重新提交

## 六、后续管理
1. 插件上架后，您可以在开发者中心管理您的插件
2. 可以更新插件版本、修改描述、添加截图等
3. 可以查看插件的下载量、评分等统计信息

## 注意事项
1. 确保您的插件符合Microsoft Edge插件商店的政策
2. 确保您的插件没有安全漏洞
3. 提供清晰、准确的插件描述和截图
4. 及时响应用户反馈和评论
5. 定期更新插件以保持兼容性

祝您的插件发布成功！

> 参考链接: <mcreference link="https://my.oschina.net/nicooo/blog/17156242" index="4">4</mcreference>