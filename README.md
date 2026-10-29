# YourName 个人作品集

这是一个独立于现有测试平台的静态作品集站点。

人物素材位于 `dist/assets/character-*.png`。桌面端人物会在首屏中央限定范围内跟随鼠标移动，并带缓动；移动端固定在中央并保留轻微漂浮效果。

## 本地预览

在 `portfolio-site` 目录运行：

```powershell
python -m http.server 4173 --directory dist
```

然后打开 `http://localhost:4173`。

## 后续替换内容

- `dist/index.html`：姓名、导航和首屏文案
- `dist/app.js`：四个卡片弹窗的项目、经历、奖项和技能内容
- `dist/assets/hero-reference.png`：当前提供的视觉参考图
- `dist/assets/character-default.png`：默认人物
- `dist/assets/character-wave.png`：点击人物时的挥手状态
- `dist/assets/character-alt.png`：鼠标偏左时的备用人物状态

当前站点不依赖后端；后续可以继续补充真实项目链接、简历下载、社交账号和自定义域名。
