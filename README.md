# HMMRecommendationWeb
HMM股票推荐web应用


## firebase 使用
### firebase hosting 部署web服务
```shell
# 注意一定要在CMD终端执行 一定一定啊！！！！！

# 安装firebase-tools工具 要全局安装
npm install -g firebase-tools
# 登录认证 vpn严格审查 需先设置再登录
set NODE_TLS_REJECT_UNAUTHORIZED=0
# 每次可能不一样 需在clash中点击port的terminal 查看
set http_proxy=http://127.0.0.1:50618  # clash梯子的代理端口是7890  
set https_proxy=http://127.0.0.1:50618  # clash梯子的代理端口是7890
firebase login --no-localhost --reauth

npm config set proxy http://127.0.0.1:50618
npm config set https-proxy http://127.0.0.1:50618


# 进入项目根目录 初始化
firebase init # 选择 Hosting -- 已有项目 -- 不创建单页应用 github

# 部署 push代码或merge代码到main分支通过action会自动部署

```
自动部署后查看部署结果：
- 可在github仓库的Actions中查看部署情况
- 可在firebase控制台查看部署情况
- 访问 https://hmm-recommendation.web.app/


### 允许的账号
mplus_hermes@outlook.com  hermes@123
donece88@gmail.com  jasper@123
zhaozhipeng600@gmail.com  zhipeng@123


