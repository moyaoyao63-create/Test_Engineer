# YourName 个人作品集

这是一个独立于现有测试平台的静态作品集站点。

首页使用本地 MP4 作为唯一人物背景，人物动作和眼神变化全部来自视频帧；人物 PNG 不参与首页渲染。鼠标左右移动会按相对位移控制视频时间轴，使用敏感度 0.8 和排队 seek，减少快速移动时的丢帧。

## 本地预览

在 `portfolio-site` 目录运行：

```powershell
python -m http.server 4173 --directory dist
```

然后打开 `http://localhost:4173`。

## 后续替换内容

- `dist/index.html`：姓名、导航和首屏文案
- `dist/app.js`：四个卡片弹窗的项目、经历、奖项和技能内容
- `dist/assets/e61eeb25d63f48659a799332d21d1e7d.mp4`：鼠标横向移动控制的背景视频
- `dist/assets/character-default.png`：默认人物
- `dist/assets/character-wave.png`、`character-alt.png`：保留的备用人物状态素材，当前版本不切换身体姿势

当前站点不依赖后端；后续可以继续补充真实项目链接、简历下载、社交账号和自定义域名。
