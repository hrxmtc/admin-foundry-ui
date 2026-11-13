# 墨鱼上市 PRD：核实证据

日期：2026-11-08｜代码版本：`bda501af73947c3a693af9925419408f2931ab92`

本文记录 PRD v0.1 的来源。证据为静态文件读取与检索；不证明支付可用、模型计费准确、产品已部署或视觉走查通过。

## 1. 会话中直接确认的方向

- 用户要求规划管理后台、作者页面、计费支付、墨鱼商业板块和老墨交流。
- 收费模式问题的回复：**“同时支持两种模式”**（自备 Key 与墨鱼提供 AI）。
- 商业板块问题的回复：**“墨鱼自身商业化：套餐、充值、优惠、推广活动”**。
- 最新要求：**“我们OD中已有部分设计，你先做个产品的PRD 出来供我评审”**。
- 以上是方向及文档授权，不构成某个价格、退款政策或生产实施的批准。

## 2. 代码与规范文件

| 文件                                                                                                                                                                            | 核实锚点                                                                                                                                    | SHA-256                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [apps/server/prisma/schema.prisma](https://github.com/hrxmtc/c-foundry/blob/main/apps/server/prisma/schema.prisma)                                                                       | `model User {`：832<br>`plan             String`：837<br>`tokenPriceInput`：841<br>`model LlmConfig {`：890<br>`apiKey         String`：895 | `fce4e2ef14852598baeee35d7332e13bdbcda14d38e8f27840fa13c2f8f338a5` |
| [apps/server/src/modules/core/auth/auth.controller.ts](https://github.com/hrxmtc/c-foundry/blob/main/apps/server/src/modules/core/auth/auth.controller.ts)                               | `@Post('register')`：47<br>`@Post('login')`：67                                                                                             | `ed99d969daba91561d302cd21b0a46eb23d85f47146b5af6bc95afb9be0d09d1` |
| [apps/server/src/modules/core/settings/settings.service.ts](https://github.com/hrxmtc/c-foundry/blob/main/apps/server/src/modules/core/settings/settings.service.ts)                     | `async listConfigs`：356<br>`apiKey: encrypt`：445<br>`async getDefaultConfig`：593<br>`async setUnitPrice`：641                            | `19d387c5809c53112a64e2f43ac4ebf97504b9120be0722f4c958d8ff8a1ed86` |
| [apps/server/src/modules/core/pipeline-logs/pipeline-logs.service.ts](https://github.com/hrxmtc/c-foundry/blob/main/apps/server/src/modules/core/pipeline-logs/pipeline-logs.service.ts) | `async getChapterCost`：245<br>`let unknownUsageSteps`：267,318<br>`yuanEstimate:`：296,329,367,373                                         | `4398228701f4d936344396739e16b4a23e6522159423acb13dc1aa278257ac8c` |
| [apps/web/src/components/settings/UsageDetailTab.tsx](https://github.com/hrxmtc/c-foundry/blob/main/apps/web/src/components/settings/UsageDetailTab.tsx)                                 | `unknownTotal`：52,62,64<br>`预算感不是限额`：8,59                                                                                          | `2e9c5cbfb3181008346c8e42dd7f6c7e483e7e943dd50da5102b0155ef6da745` |
| [apps/web/src/components/shared/Rail.tsx](https://github.com/hrxmtc/c-foundry/blob/main/apps/web/src/components/shared/Rail.tsx)                                                         | `const FROZEN_COMMERCE`：21<br>`{FROZEN_COMMERCE.map`：98<br>`开发中`：104                                                                  | `3c6f3ec35cf989a745a58d03cb7ba8e7905350abac0bcd35ad45520e7f1a3919` |
| [apps/web/src/components/shared/AuthGuard.tsx](https://github.com/hrxmtc/c-foundry/blob/main/apps/web/src/components/shared/AuthGuard.tsx)                                               | `const PUBLIC_PATHS`：5                                                                                                                     | `2faf8f1089ae17c922d43804ec1a7d2c4bf1a94cd537a0c9fc585797cd836ee2` |
| [apps/web/src/App.tsx](https://github.com/hrxmtc/c-foundry/blob/main/apps/web/src/App.tsx)                                                                                               | `path="/"`：90                                                                                                                              | `8f9f3fd7d51c05aa6b02b2d320eb1690915a4d6ac9841c903dbf4988634bdc49` |
| [docs/positioning-compiler.md](https://github.com/hrxmtc/c-foundry/blob/main/docs/positioning-compiler.md)                                                                               | `过早平台化冻结`：60                                                                                                                        | `5d3de3e64da872fdd0f5e1d3f088e1117faad8f0d77495bdb12299c929acc2c7` |
| [docs/branch-mission.md](https://github.com/hrxmtc/c-foundry/blob/main/docs/branch-mission.md)                                                                                           | `## 三、Out-of-scope`：110                                                                                                                  | `f94f4465ab3c0c53b12fb0acf973f28f744e824deead05a63aefe58fc5c0883b` |
| [docs/openspec-workflow.md](https://github.com/hrxmtc/c-foundry/blob/main/docs/openspec-workflow.md)                                                                                     | `用户在会话中的明确授权优先`：3                                                                                                             | `d72d249ee853ee0d8366f1b92f07bbffe965ad89dc7dc092411dcd5f9c489916` |
| [DESIGN.md](https://github.com/hrxmtc/c-foundry/blob/main/DESIGN.md)                                                                                                                     | `## 主题与色彩 Tokens`：59                                                                                                                  | `9b21cde0c96c3afe8993d4b3d97aa2bff62b4915ad968cfdae355f8076b61e3f` |

补充检索：

- 命令：`rg -n "byok|subscription|payment|billing|wallet|checkout|refund|alipay|wechatpay" apps/server/src apps/web/src packages/shared/src apps/server/prisma/schema.prisma -g "!*.test.*" -g "!*.spec.*" -g "!*/generated/*"`。
- 命中为质量闸门内无关 `billings` 变量、LLM 错误分类中的 `billing` 等；未找到对应交易/结算实现。
- 路径检索使用 `rg --files` 后筛选 billing/payment/subscription/commercial/community/laomo/wallet/admin 等名称；未发现对应产品模块，历史开发者社区模板不计作老墨。
- 该结论限定为本次版本及检索范围；不能将关键词未命中当作对运行数据库或所有历史分支的证明。

## 3. OpenDesign Cloud 来源

项目：`c-foundry`。通过项目清单、文件清单、页面包及文本搜索交叉读取。相关页面包均返回 `truncated: false`；依赖包含历史 CSS 与交互脚本，二进制字体等未据此作视觉判断。

| 文件                                                                                                                                                                | 对照内容                                                                                  | SHA-256                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `landing.html`（作者端本机设计文件）   | 公开产品说明、流程、三档价格；含追读力预测 76%、永久免费、示例备案号等未核实承诺。        | `103bc6a810e1e3e65a5ce55bc2af211db7eb910b6dfd52623a4f5bde475ca3d5` |
| `pricing.html`（作者端本机设计文件）   | 三档、月/年付、¥39/¥99、5/80/300 万字额度、补充字数包、协作席位、模型和退款承诺。         | `7b361871cd63ef01795b2de1f9bcb2df2e007b3426419a8ebae20872a2cc7482` |
| `billing.html`（作者端本机设计文件）   | 会员、用量、订单/发票、绑定支付及自动续费；到期超额只读；示例日期和账号。                 | `4d9106352deba16552053d88c30c17eb795d3494875179e41fd1ebfc2a6d064e` |
| `referral.html`（作者端本机设计文件） | 邀请码、链接、海报、记录；20% 返佣及示例金额/域名。                                       | `0657dfba1cb9b2c32c5a0f54f7f04954e9f3aed1b738608ca6fad2ae35ff372d` |
| `prd.html`（作者端本机设计文件）           | 商业化标为扩展提案；当时社区、真实支付不在该设计轮次范围。                                | `6e6d76954297748c112dcf35d06147b930f062af3994f846bd235de722e96509` |
| `PROTOTYPE.md`（作者端本机设计文件）   | 当前主产品页已按真实组件同步；历史商业页和 PRD 保留但不进入当前导航；原型调用为演示适配。 | `c661a7bc1064af2ed57d24b632392daf078076b2a47d68df3b81d7b6786b7bd3` |

本次文件清单与内容搜索：“老墨”= 0 处文本匹配；“管理后台”= 0 处文本匹配。未发现对应命名页面；因此本稿按待补设计处理，不断言其他命名、历史备份中绝对不存在相关材料。

## 4. 设计复用纪律

- 当前产品页面遵循真实 JSX、现行 `DESIGN.md` 和已确认布局。
- 历史商业页面仅复用适用的结构与交互，不继承示例价格、额度、模型、售后或返佣政策。
- 新增页面由 PRD 评审后再补原型；本次没有修改 OpenDesign Cloud 项目。
- 文件哈希标识读取时内容。之后源文件变化需重新核实；本证据不是自动同步副本。

## 5. 2026-11-09 功能范围与作者端承接补充

本节追加本轮来源，不改变 §2–3 的 2026-11-08 静态快照或历史 OpenDesign Cloud 材料结论。

- 用户澄清：“墨鱼就是作者端，就是我们当前的项目”。
- 用户补充：“后台的功能上需要补充：会员、订单、作品、费用账单、会员账户、发帖审核、用户工单等。作者端，你在考虑下”。
- 这确定七项后台功能和作者端增量设计范围；会员账户的具体口径、作品正文访问、先审策略、工单时效和留存仍是本轮建议，不能当作已批准的规则。
- 本轮静态核对提交：`d2064779d8a3a1324534fbcbff4a07a70badd441`（`git rev-parse HEAD`）。
- 一手读取 `apps/web/src/App.tsx` 82–116 行，确认 `/` 转 `/projects`，并保留作品、工作台、设置等已有路由；核对命令为 `sed -n '82,116p' apps/web/src/App.tsx`。
- 一手读取 `apps/web/src/components/shared/Rail.tsx` 1–28、79–115 行，确认账户菜单、商业占位数组和实际 `disabled` 渲染；不是只引用注释。核对命令为对应两段 `sed`。
- 这些读取仅支撑[作者端设计建议](author-commercial-design.md)承接现有结构，不构成新页面、支付、审核或工单已实现的证据；本轮未修改 OpenDesign Cloud 项目。

## 6. 2026-11-11 作者端 PRD 整理来源

- 用户先要求列出 PRD 中作者端功能，随后要求“生成 PRD”。本轮以会话已列出的 15 个作者端模块为范围，生成[作者端上市 PRD](author-launch-prd.md)，并在总 PRD 建立入口。
- 本轮资料为上市总 PRD v0.2、作者端设计建议、后台页面地图及跨端流程；新增稿细化功能、状态与验收，没有额外认定生产实现或支付渠道可用。
- 沿用 §2、§5 所注明版本和日期的静态事实；本轮不将它们升级为 2026-11-11 的部署验证。价格、时限、审核政策和材料授权仍待总 PRD D01–D10 裁决。
- 文档权限：共同商业规则与决策由总 PRD 维护，作者端功能及验收由作者端 PRD 细化，设计建议用于页面投影；本轮未修改 OpenDesign Cloud 项目。
