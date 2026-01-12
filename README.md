# 儿童背单词应用 📚

一个帮助儿童学习英语词汇的互动式网页应用，支持KET和PET级别单词学习。

## ✨ 功能特点

- **📖 学习模式**: 翻卡片式学习，支持单词发音
- **✍️ 测试模式**: 拼写测试，逐字母输入可视化
- **🔄 复习模式**: 自动收集错误单词，针对性复习
- **🎮 游戏化设计**: 金币奖励系统，连续答对有额外奖励
- **💾 本地存储**: 自动保存学习进度
- **🎯 双级别支持**: KET（约600词）和PET级别词汇

## 🚀 快速开始

### 在线使用

1. 下载项目文件
2. 用浏览器打开 `vocabulary-app.html` 即可使用

### 本地使用

**🌐 在线访问**: [https://hg845nx4q7-arch.github.io/vocabulary-app/vocabulary-app.html](https://hg845nx4q7-arch.github.io/vocabulary-app/vocabulary-app.html)

或者本地使用：

```bash
# 克隆仓库
git clone https://github.com/hg845nx4q7-arch/vocabulary-app.git

# 进入目录
cd vocabulary-app

# 用浏览器打开
open vocabulary-app.html  # macOS
# 或
start vocabulary-app.html  # Windows
# 或直接双击 vocabulary-app.html 文件
```

## 📖 使用说明

### 学习模式
1. 选择KET或PET级别
2. 点击"学习模式"
3. 查看单词和音标
4. 点击"显示中文"查看释义
5. 点击"发音"听读音
6. 根据掌握情况点击"认识"或"不认识"

### 测试模式
1. 点击"测试模式"
2. 看中文翻译，输入英文单词
3. 键盘输入字母
4. 按Enter或点击"提交"检查答案
5. 答对获得金币奖励，连续答对有额外奖励

### 复习模式
1. 错误≥2次的单词会自动加入复习列表
2. 点击"错题复习"进入复习模式
3. 在复习模式中答对即可移出复习列表

## 🎮 奖励机制

- 答对1题：获得1金币
- 连续答对3题：额外+1金币
- 连续答对5题：额外+3金币
- 连续答对10题及以上：额外+5金币

## 🛠️ 技术栈

- 纯HTML/CSS/JavaScript（无框架依赖）
- LocalStorage 数据持久化
- Web Speech API 语音合成

## 📁 项目结构

```
├── vocabulary-app.html      # 主页面
├── vocabulary-app.js        # 应用逻辑和词库
├── vocabulary-style.css     # 样式文件
├── package.json            # 项目配置
├── CLAUDE.md               # 开发文档
└── README.md               # 项目说明
```

## 📊 词库说明

### KET级别（约600词）
包含以下分类：
- 家庭与人物
- 身体部位
- 动物
- 食物与饮料
- 颜色
- 学校
- 运动
- 衣物
- 数字
- 形容词
- 动词
- 方位与时间等

### PET级别
包含进阶词汇，适合有KET基础的学习者。

## 🌐 浏览器兼容性

需要现代浏览器支持：
- ES6 特性
- LocalStorage API
- Web Speech API（可选，用于发音）
- CSS Grid 和 Flexbox

推荐使用：
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📝 开发说明

这是一个纯前端应用，无需构建工具。直接编辑文件即可开发。

### 添加新单词

编辑 `vocabulary-app.js`，在相应的词库数组中添加：

```javascript
{
  word: "example",
  phonetic: "/ɪɡˈzɑːmpl/",
  translation: "例子",
  example: "This is an example sentence."
}
```

### 重置进度

在应用中点击"重置进度"按钮，或在浏览器控制台执行：
```javascript
localStorage.clear()
location.reload()
```

## 📄 许可证

MIT License - 自由使用、修改和分发

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📧 联系方式

如有问题或建议，欢迎通过GitHub Issues联系。

---

**祝学习愉快！Happy Learning! 🎉**
