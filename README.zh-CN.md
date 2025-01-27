![image](https://github.com/user-attachments/assets/6a3458e7-8166-45b2-82e4-b394b1369dc5)

# KusionStack & KCL 2024 年度报告

这是 KusionStack & KCL 2024 年度报告的源代码仓库。该报告展示了 KusionStack & KCL 在 2024 年的发展历程、重要里程碑和核心数据。

## 主要内容

- **年度统计数据**：展示了包括主版本发布、功能项发布、社区参与度等关键指标
- **重要里程碑**：记录了 2024 年 KusionStack & KCL 的重要时刻与成就
- **企业用户案例**：展示了来自不同行业的企业用户使用案例
- **核心项目进展**：详细介绍了各个核心项目的发展情况
  - Kusion：意图驱动的平台编排器
  - Karpor：AI 驱动的 Kubernetes 可视化工具
  - Kuperator：基于 Kubernetes CRD 的工作负载管理
  - KCL：配置和约束语言

## 技术栈

- React
- Tailwind CSS
- Framer Motion
- Heroicons

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 构建生产版本：
```bash
npm run build
```

## 截取长图指南

### 方法一：使用 Chrome 开发者工具

1. 打开网页后按 F12 或右键选择"检查"打开开发者工具
2. 按 Ctrl + Shift + P (Windows) 或 Cmd + Shift + P (Mac) 打开命令菜单
3. 输入 "screenshot"，选择 "Capture full size screenshot"
4. Chrome 会自动截取整个页面并下载保存

### 方法二：使用 CoCoShot 浏览器插件

1. 在 Chrome 应用商店安装 [CoCoShot](https://chromewebstore.google.com/detail/%E5%AE%8C%E6%95%B4%E7%BD%91%E9%A1%B5%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%EF%BC%8C%E7%94%B5%E8%84%91%E6%A1%8C%E9%9D%A2%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-cocosho/ibbpaphbbbabnmmllpdlmcfihhkahgai) 插件
2. 点击插件图标，选择 "Capture Entire Page"
3. 等待页面滚动完成后，可以直接保存或编辑截图

推荐使用 CoCoShot，因为它提供了更多编辑功能，如添加标注、裁剪等。

## 国际化支持

项目支持中英文双语展示，可通过 `src/i18n/config.js` 配置默认语言：

```javascript
export const defaultLanguage = 'zh';  // 'zh' or 'en'
```

翻译文件位于 `src/i18n/translations.js`。

## 项目结构

```
.
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── i18n/            # 国际化相关文件
│   │   ├── config.js    # 语言配置
│   │   └── translations.js  # 翻译文件
│   └── assets/          # 静态资源文件
├── public/             # 公共资源目录
│   ├── favicon.ico     # 网站图标
│   └── index.html      # HTML 模板
├── output/            # 预先截取的长图
│   ├── 2024-annual-report-en.png  # 英文版
│   └── 2024-annual-report-zh.png  # 中文版
└── package.json        # 项目配置文件
```

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。在提交 PR 之前，请确保：

1. 代码符合项目的代码规范
2. 所有的改动都经过充分测试
3. 更新相关文档

## 许可证

MIT License
