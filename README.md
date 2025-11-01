# HMMRecommendationWeb
HMM股票推荐web应用


## firebase 使用
### firebase hosting 部署web服务
```shell
# 安装firebase-tools工具 要全局安装
npm install -g firebase-tools
# 登录认证 vpn严格审查 需先设置再登录
set NODE_TLS_REJECT_UNAUTHORIZED=0
set http_proxy=http://127.0.0.1:7890  # clash梯子的代理端口是7890
set http_proxy=https://127.0.0.1:7890  # clash梯子的代理端口是7890
firebase login --no-localhost --reauth

# 进入项目根目录 初始化
firebase init # 选择 Hosting & github

# 部署 push代码或merge代码到main分支通过action会自动部署

```

### 允许的账号
mplus_hermes@outlook.com  hermes@123
donece88@gmail.com  jasper@123
zhaozhipeng600@gmail.com  zhipeng@123


