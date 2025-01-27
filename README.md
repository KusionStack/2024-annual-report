# KusionStack 2024 Annual Report

[中文](./README.zh-CN.md) | English

This is the source code repository for the KusionStack 2024 Annual Report, showcasing KusionStack's journey, key milestones, and core metrics throughout 2024.

## Key Contents

- **Annual Statistics**: Key metrics including major releases, feature releases, and community engagement
- **Key Milestones**: Important moments and achievements of KusionStack in 2024
- **Enterprise Users**: Showcasing use cases from various industries
- **Core Projects Progress**: Detailed progress of each core project
  - Kusion: Intent-driven Platform Orchestrator
  - Karpor: AI-powered Kubernetes Visualization Tool
  - Kuperator: Workload Management based on Kubernetes CRDs
  - KCL: Configuration and Constraint Language

## Tech Stack

- React
- Tailwind CSS
- Framer Motion
- Heroicons

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Screenshot Guide

### Method 1: Using Chrome DevTools

1. Open DevTools by pressing F12 or right-clicking and selecting "Inspect"
2. Press Ctrl + Shift + P (Windows) or Cmd + Shift + P (Mac) to open the command menu
3. Type "screenshot" and select "Capture full size screenshot"
4. Chrome will automatically capture and download the entire page

### Method 2: Using CoCoShot Browser Extension

1. Install [CoCoShot](https://chromewebstore.google.com/detail/%E5%AE%8C%E6%95%B4%E7%BD%91%E9%A1%B5%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%EF%BC%8C%E7%94%B5%E8%84%91%E6%A1%8C%E9%9D%A2%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-cocosho/ibbpaphbbbabnmmllpdlmcfihhkahgai) extension from Chrome Web Store
2. Click the extension icon and select "Capture Entire Page"
3. Wait for the page to scroll completely, then save or edit the screenshot

CoCoShot is recommended as it provides additional editing features like annotations and cropping.

## Internationalization

The project supports both English and Chinese. Set the default language in `src/i18n/config.js`:

```javascript
export const defaultLanguage = 'en';  // 'en' or 'zh'
```

Translations are located in `src/i18n/translations.js`.

## Project Structure

```
.
├── src/
│   ├── App.jsx          # Main application component
│   ├── i18n/            # Internationalization files
│   │   ├── config.js    # Language configuration
│   │   └── translations.js  # Translation files
│   └── assets/          # Static assets
├── public/             # Public assets directory
├── output/            # Pre-captured full-page screenshots
│   ├── 2024-annual-report-en.png  # English version
│   └── 2024-annual-report-zh.png  # Chinese version
└── package.json        # Project configuration
```

## Contributing

We welcome Issues and Pull Requests to help improve this project. Before submitting a PR, please ensure:

1. Code follows the project's coding standards
2. All changes are thoroughly tested
3. Documentation is updated accordingly

## License

MIT License
