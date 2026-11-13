# 工作台与工单处理检查报告

检查日期：2026-11-13（UTC+8）  
对象：当前 `index.html` 本地演示原型，原生 HTML / JavaScript。  
范围：工作台、工单处理与直接关联页面；不是全站或真实服务验收。  
浏览器执行窗口：02:01–02:14，75 条探测记录，5 张截图。无 Git 仓库，修订标识为工作区文件。

## 结论

检查范围内发现 1 项中等严重度键盘可用性缺陷，已修复并复查；没有尚未修复的已确认产品缺陷。新增 2 项键盘回归与原有 5 项恢复回归全部通过。最终业务路径与控制台已复查。未给全站健康评分，未覆盖分支仍不能据此判定通过。

| 分类 | 已确认缺陷 | 已修复 | 仍未修复 |
| --- | ---: | ---: | ---: |
| 严重 / 高 | 0 | 0 | 0 |
| 中：可访问性 | 1 | 1 | 0 |
| 低 | 0 | 0 | 0 |

## 发现与修复：WORKFLOW-001

**中等 · 详情页签激活后丢失键盘焦点。**

在工单 TK6005 聚焦“内部备注”，按 Enter 或空格后，内容与收件模式切换成功，但页面重新渲染把焦点移到了 BODY；继续按左方向键无法回到“作者可见回复”。此外，所有页签均在 Tab 顺序中，未采用单一选中页签入口。

修复位于 `assets/member-details.js`：仅选中页签进入顺序焦点；重新渲染后把焦点恢复到选中页签。原有内部 / 对外草稿同步逻辑保持有效。

证据：

- 原始复现：[probe-045](probe-045.json)、[重复复现](probe-050.json)、[修复前截图](screenshots/issue-001-result.png)。
- 回归先失败：[probe-051](probe-051.json)，两种激活键的焦点断言以及页签 Tab 顺序断言均失败。
- 修复后：[7 项测试通过](probe-054.json)，1.936 秒；[Enter 后焦点仍在内部页签](probe-059.json)、[左方向键回到对外页签及收件模式](probe-062.json)。
- [修复后焦点截图](screenshots/issue-001-after.png)。

新增复现测试：`tests/ticket-tabs.regression-1.test.py`。该入口同时发现并运行复用的 5 项恢复测试与 2 项新测试，合计 7 项。

## 最终代码的覆盖结果

| 范围 | 实际检查 | 结果与证据 |
| --- | --- | --- |
| 工作台待办 | 完整队列两页 12 + 8 条、共 20 个唯一对象；客服分类 6 条；客服且仅我负责 1 条；社区且仅我负责空态；重置、仅我负责与时间排序 | 通过，[064](probe-064.json) |
| 刷新与返回 | 分类、仅我负责、排序刷新保留；进入原工单；返回原队列保留筛选 | 通过，[065–066](probe-066.json)、[069](probe-069.json) |
| 工单就地查证 | TK6002 费用摘要进入 AI3001，返回原工单保留对外草稿及发送后状态；页签与收件模式联动 | 通过，[067](probe-067.json) |
| 回复草稿与发送 | 对外 / 内部独立；刷新恢复；空白拒绝；内部发送不改变业务状态、不清对外草稿；对外发送仅清对应草稿；作者对照不含内部内容 | 通过，[068–070](probe-070.json)，及永久回归 [054](probe-054.json) |
| 受理与交接 | 受理设置负责人及处理中；空交接说明拒绝；交接成功更新负责人，内部说明不进入作者对话 | 通过，[071](probe-071.json) |
| 状态保护 | 费用争议未解决时禁止作者确认解决，菜单不能直接设为已解决 / 已关闭；作者继续反馈回到处理中 | 通过，[071](probe-071.json) |
| 材料授权 | 有效授权仅显示第 6 章快照 v3 第 2 段；预置撤销不可读；作者撤销后再次读取被阻止 | 通过，[071](probe-071.json) |
| 职责边界 | 财务无作品 / 社区入口，不能进入不适用工单且不继承他人草稿；内容职责无交易 / 财务统计，工单仅显示审核关联 | 通过，[071](probe-071.json) |
| 键盘 | Enter / 空格激活后的焦点连续性；左方向键切换；选中页签为唯一顺序入口 | 通过，[054](probe-054.json)、[057–062](probe-062.json) |
| 控制台 | 最终主要流程之后读取错误 / 警告 | 无错误，[072](probe-072.json) |
| 桌面布局 | 初始 1280×720 工作台与工单查证布局；最终 1024×768 工单页面，document / body 宽均为 1024，无横向溢出 | [初始工作台](screenshots/initial.png)、[工单查证](screenshots/ticket-context.png)、[最终测量](probe-074.json)、[最终工单截图](screenshots/final-ticket-1024.png) |

## 方法、环境与限制

使用独立随机本机端口和自建浏览器标签页操作合成演示数据，未触及真实用户或资金。浏览器操作包含点击、键盘以及在页面中执行可复现的 DOM 操作脚本；部分初始状态与越权深层导航通过现有原型控制器设置，因此不宣称所有检查都是人工鼠标操作。

原生浏览器连接认证失败后采用已有独立浏览器。辅助安装尝试因缓存写权限失败，但检查实际复用的浏览器正常工作；这两项属于环境问题，未计为产品缺陷。

早期探测的三次脚本问题均已纠正：006 对“仅我负责”预期错误；021 连续确认受到处理中锁拦截；028 在异步渲染前读取了状态。均不是产品缺陷，最终脚本已按正确预期及异步完成时机重跑。修复前探测仅作为探索 / 缺陷复现证据；最终范围结论依赖 054、057–075。初始两张布局截图来自修复前，最终截图及测试来自修复后。

本轮没有覆盖：

- 四主题完整视觉评审、全部桌面尺寸、移动端、跨浏览器及真实读屏器。
- 授权自然到期、已打开材料跨标签页撤销、存储拒绝 / 容量满、所有多标签页并发组合。
- 真实服务端权限、消息投递、支付和记账一致性。
- 全部审核版本冲突路径及其他业务的完整回归。

证据汇总工具只接受了浏览器检查限制和检查点，未采集 API / CLI 业务契约行，因此其正式总体判定为 **inconclusive（缺少 evidence rows）**；这不是服务端验收通过。本报告的“通过”仅指上表中有直接浏览器记录支持的具体检查。[汇总结果](evidence-materialize-result.txt)。不隐去探测失败或未完成的覆盖。

## 变更文件

- `assets/member-details.js`：共享详情页签焦点与顺序焦点修复。
- `tests/ticket-tabs.regression-1.test.py`：键盘连续性和页签焦点回归。
- 本目录：报告、探测脚本副本、日志、截图及基线。原入口仍为 `index.html`。

## 探测检查点

以下保留每次探测前的观察、假设和下一步；日志不等于每项都是独立产品用例。

- [checkpoint 002](exploration-002.json)
- [checkpoint 003](exploration-003.json)
- [checkpoint 004](exploration-004.json)
- [checkpoint 005](exploration-005.json)
- [checkpoint 006](exploration-006.json)
- [checkpoint 007](exploration-007.json)
- [checkpoint 008](exploration-008.json)
- [checkpoint 009](exploration-009.json)
- [checkpoint 010](exploration-010.json)
- [checkpoint 011](exploration-011.json)
- [checkpoint 012](exploration-012.json)
- [checkpoint 013](exploration-013.json)
- [checkpoint 014](exploration-014.json)
- [checkpoint 015](exploration-015.json)
- [checkpoint 016](exploration-016.json)
- [checkpoint 017](exploration-017.json)
- [checkpoint 018](exploration-018.json)
- [checkpoint 019](exploration-019.json)
- [checkpoint 020](exploration-020.json)
- [checkpoint 021](exploration-021.json)
- [checkpoint 022](exploration-022.json)
- [checkpoint 023](exploration-023.json)
- [checkpoint 024](exploration-024.json)
- [checkpoint 025](exploration-025.json)
- [checkpoint 026](exploration-026.json)
- [checkpoint 027](exploration-027.json)
- [checkpoint 028](exploration-028.json)
- [checkpoint 029](exploration-029.json)
- [checkpoint 030](exploration-030.json)
- [checkpoint 031](exploration-031.json)
- [checkpoint 032](exploration-032.json)
- [checkpoint 033](exploration-033.json)
- [checkpoint 034](exploration-034.json)
- [checkpoint 035](exploration-035.json)
- [checkpoint 036](exploration-036.json)
- [checkpoint 037](exploration-037.json)
- [checkpoint 038](exploration-038.json)
- [checkpoint 039](exploration-039.json)
- [checkpoint 040](exploration-040.json)
- [checkpoint 041](exploration-041.json)
- [checkpoint 042](exploration-042.json)
- [checkpoint 043](exploration-043.json)
- [checkpoint 044](exploration-044.json)
- [checkpoint 045](exploration-045.json)
- [checkpoint 046](exploration-046.json)
- [checkpoint 047](exploration-047.json)
- [checkpoint 048](exploration-048.json)
- [checkpoint 049](exploration-049.json)
- [checkpoint 050](exploration-050.json)
- [checkpoint 051](exploration-051.json)
- [checkpoint 052](exploration-052.json)
- [checkpoint 053](exploration-053.json)
- [checkpoint 054](exploration-054.json)
- [checkpoint 055](exploration-055.json)
- [checkpoint 056](exploration-056.json)
- [checkpoint 057](exploration-057.json)
- [checkpoint 058](exploration-058.json)
- [checkpoint 059](exploration-059.json)
- [checkpoint 060](exploration-060.json)
- [checkpoint 061](exploration-061.json)
- [checkpoint 062](exploration-062.json)
- [checkpoint 063](exploration-063.json)
- [checkpoint 064](exploration-064.json)
- [checkpoint 065](exploration-065.json)
- [checkpoint 066](exploration-066.json)
- [checkpoint 067](exploration-067.json)
- [checkpoint 068](exploration-068.json)
- [checkpoint 069](exploration-069.json)
- [checkpoint 070](exploration-070.json)
- [checkpoint 071](exploration-071.json)
- [checkpoint 072](exploration-072.json)
- [checkpoint 073](exploration-073.json)
- [checkpoint 074](exploration-074.json)
- [checkpoint 075](exploration-075.json)
