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


### TODO
1. 功能页面增加左侧导航栏，可快速导航去其他功能页面
2. 页面右上角的用户信息和登出按钮需样式调小一点并固定在页面顶部
3. matrix R功能页面的股票数据的显示区域太大了，稍微调小一点，使界面更美观
4. matirx R功能页面还需支持查看历史推荐数据 且历史数据列表支持搜索和筛选
5. matrix R功能页面将只有目前的每日推荐数据和历史数据两部分，这两部分数据可以通过切换tab来查看

### 1118发布
#### 新功能上线
 - 新增Asterism功能页面

#### 性能及体验优化
 - 针对登录页、首页及各功能页面的跳转逻辑进行优化，减少页面切换延迟，优化用户操作路径体验
 - 优化matrix R功能页面的股票数据显示区域
 - 优化“忘记密码”模块交互逻辑、用户信息展示格式及账号退出界面设计，确保各模块视觉风格统一

#### 重要说明
> 由于行情数据接口的限制，matrix R功能页面所展示的股票数据更新时间调整为美股交易日次日，更新节点约为北京时间下午2点左右

