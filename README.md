# 墨鱼管理后台 UI

使用 OpenDesign Cloud 制作的中文桌面管理后台静态交互原型，包含工作台、会员与账户、作品、交易、费用、社区审核和工单等演示页面，支持四套主题。

所有账号、交易、作品和处理记录均为合成演示数据。页面不连接真实业务服务；示例价格和流程不构成正式产品政策。

## 本地预览

无需安装依赖或构建。在项目根目录运行：

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

访问 `http://127.0.0.1:8080/`，入口为 [index.html](index.html)。建议使用宽度至少1024px的桌面浏览器。

演示操作可能保存在当前浏览器本地数据中；可在个人偏好的原型说明中重置。指定品牌字体文件未随项目提供，当前使用系统字体回退。

## 文件结构

- `index.html`：页面入口。
- `assets/`：界面脚本、样式与合成演示数据。
- `tokens.css`、`components.css`：主题变量与静态组件样式。
- `tests/`：恢复行为和工单键盘交互的既有回归脚本。

本仓库保存界面源码和测试。内部规划文档、原始检查日志、技能与版本缓存、本机配置及依赖不纳入公开内容。

## 回归脚本

脚本使用 Python 标准库和已安装的 gstack 浏览器。默认浏览器路径为当前用户的 `~/.agents/skills/gstack/browse/dist/browse`；其他安装位置通过 `GSTACK_BROWSER` 环境变量指定。两个入口应顺序运行：

```bash
python3 tests/recovery.regression-1.test.py
python3 tests/ticket-tabs.regression-1.test.py
```

这些脚本仅验证本地演示交互，不验证真实认证、支付、权限或账务服务。

## 版本保存

远程仓库：`https://github.com/hrxmtc/admin-foundry-ui.git`。

后续核对改动后逐路径暂存并提交，再推送到 `main`；仅提交需要公开的界面源码、测试和使用说明。
