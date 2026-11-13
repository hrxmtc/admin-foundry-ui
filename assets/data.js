/* Explicitly synthetic review data. No network, author account, payment, or model service is connected. */
window.MOYU_SEED={
 snapshot:'2026-11-13 16:40',
 users:[
 {id:'U1001',name:'沈星河',email:'s***@example.com',plan:'付费',start:'2026-10-13',end:'2026-11-13',security:'正常',community:'可参与',joined:'2026-09-12',note:'关注本次续费权益未到账问题'},
 {id:'U1002',name:'林晚',email:'l***@example.com',plan:'付费',start:'2026-11-01',end:'2026-12-01',security:'正常',community:'可参与',joined:'2026-09-18',note:''},
 {id:'U1003',name:'陈默',email:'c***@example.com',plan:'试用',start:'2026-11-10',end:'2026-11-17',security:'正常',community:'仅浏览',joined:'2026-11-10',note:''},
 {id:'U1004',name:'南乔',email:'n***@example.com',plan:'付费',start:'2026-11-02',end:'2026-12-02',security:'正常',community:'可参与',joined:'2026-10-05',note:'同一订单出现两笔成功付款'},
 {id:'U1005',name:'许知远',email:'x***@example.com',plan:'已到期',start:'2026-10-01',end:'2026-11-01',security:'正常',community:'互动受限',joined:'2026-09-24',note:'社区互动限制不影响私人创作与售后'},
 {id:'U1006',name:'江序',email:'j***@example.com',plan:'免费',start:'—',end:'—',security:'正常',community:'可参与',joined:'2026-10-20',note:''},
 {id:'U1007',name:'顾以宁',email:'g***@example.com',plan:'付费',start:'2026-11-06',end:'2026-12-06',security:'正常',community:'可参与',joined:'2026-10-22',note:''},
 {id:'U1008',name:'周见山',email:'z***@example.com',plan:'免费',start:'—',end:'—',security:'需安全核验',community:'仅浏览',joined:'2026-11-12',note:'联系信息需按职责核实，不影响历史费用查询'}
 ],
 projects:[
 {id:'P2001',user:'U1001',title:'长夜将明',genre:'长篇 · 都市悬疑',chapters:42,words:128640,state:'创作中',updated:'2026-11-13 14:12',issue:'无异常'},
 {id:'P2002',user:'U1002',title:'雨停以后',genre:'长篇 · 现实题材',chapters:28,words:86720,state:'创作中',updated:'2026-11-13 15:20',issue:'AI 费用异议'},
 {id:'P2003',user:'U1003',title:'山海有来信',genre:'长篇 · 东方幻想',chapters:6,words:19200,state:'创作中',updated:'2026-11-13 13:40',issue:'任务部分完成'},
 {id:'P2004',user:'U1004',title:'旧城回声',genre:'长篇 · 悬疑',chapters:66,words:204600,state:'创作中',updated:'2026-11-13 12:30',issue:'无异常'},
 {id:'P2005',user:'U1005',title:'回到风起时',genre:'短篇 · 都市',chapters:12,words:32400,state:'已完稿',updated:'2026-11-11 18:10',issue:'无异常'},
 {id:'P2006',user:'U1006',title:'第七封信',genre:'短篇 · 悬疑',chapters:8,words:24160,state:'创作中',updated:'2026-11-13 11:06',issue:'材料授权已撤销'},
 {id:'P2007',user:'U1007',title:'人间一程',genre:'长篇 · 现实题材',chapters:19,words:58900,state:'创作中',updated:'2026-11-12 22:18',issue:'无异常'},
 {id:'P2008',user:'U1008',title:'冬日手记',genre:'短篇 · 生活',chapters:0,words:0,state:'准备中',updated:'2026-11-12 10:20',issue:'无异常'}
 ],
 orders:[
 {id:'MO261113001',user:'U1001',product:'工具会员 · 月度',type:'会员',amount:49,date:'2026-11-13 14:08',pay:'已付款',fulfill:'待恢复',refund:'无退款',promo:'无优惠',priceVersion:'TOOL-DEMO-01',evidence:true,attempts:[{id:'PAY001',channel:'演示渠道 A',amount:49,state:'成功',time:'2026-11-13 14:09',purpose:'唯一履约付款'}]},
 {id:'MO261113002',user:'U1002',product:'官方 AI 服务额度',type:'额度',amount:100,date:'2026-11-13 10:10',pay:'已付款',fulfill:'已到账',refund:'无退款',promo:'无优惠',priceVersion:'AI-DEMO-01',evidence:true,attempts:[{id:'PAY002',channel:'演示渠道 A',amount:100,state:'成功',time:'2026-11-13 10:11',purpose:'唯一履约付款'}]},
 {id:'MO261113003',user:'U1003',product:'工具会员 · 月度',type:'会员',amount:49,date:'2026-11-13 13:35',pay:'待核对',fulfill:'未开始',refund:'无退款',promo:'无优惠',priceVersion:'TOOL-DEMO-01',evidence:false,queryFailed:true,attempts:[{id:'PAY003',channel:'演示渠道 A',amount:49,state:'未知',time:'2026-11-13 13:36',purpose:'待核对原付款'}]},
 {id:'MO261113004',user:'U1004',product:'官方 AI 服务额度',type:'额度',amount:200,date:'2026-11-13 11:20',pay:'已付款',fulfill:'已到账',refund:'退款待核对',promo:'无优惠',priceVersion:'AI-DEMO-01',evidence:true,attempts:[{id:'PAY004-A',channel:'演示渠道 A',amount:200,state:'成功',time:'2026-11-13 11:21',purpose:'唯一履约付款'},{id:'PAY004-B',channel:'演示渠道 A',amount:200,state:'成功',time:'2026-11-13 11:23',purpose:'多收款 · 原路退款待核对'}]},
 {id:'MO261112005',user:'U1005',product:'官方 AI 服务额度',type:'额度',amount:50,date:'2026-11-12 09:20',pay:'已付款',fulfill:'已到账',refund:'待审核',promo:'无优惠',priceVersion:'AI-DEMO-01',evidence:true,attempts:[{id:'PAY005',channel:'演示渠道 A',amount:50,state:'成功',time:'2026-11-12 09:21',purpose:'唯一履约付款'}]},
 {id:'MO261113006',user:'U1006',product:'工具会员 · 活动订单',type:'会员',amount:39,date:'2026-11-13 09:00',pay:'已付款',fulfill:'资格待复核',refund:'待审核',promo:'名额已释放 · 无可用预算',priceVersion:'TOOL-DEMO-00',evidence:true,attempts:[{id:'PAY006',channel:'演示渠道 A',amount:39,state:'成功',time:'2026-11-13 10:40',purpose:'订单关闭后迟付'}]},
 {id:'MO261113007',user:'U1007',product:'官方 AI 服务额度',type:'额度',amount:50,date:'2026-11-13 15:02',pay:'已付款',fulfill:'待恢复',refund:'无退款',promo:'无优惠',priceVersion:'AI-DEMO-01',evidence:true,attempts:[{id:'PAY007',channel:'演示渠道 A',amount:50,state:'成功',time:'2026-11-13 15:03',purpose:'唯一履约付款'}]},
 {id:'MO261112008',user:'U1007',product:'工具会员 · 月度',type:'会员',amount:49,date:'2026-11-12 16:00',pay:'已付款',fulfill:'已到账',refund:'无退款',promo:'无优惠',priceVersion:'TOOL-DEMO-01',evidence:true,attempts:[{id:'PAY008',channel:'演示渠道 A',amount:49,state:'成功',time:'2026-11-12 16:01',purpose:'唯一履约付款'}]},
 {id:'MO261112009',user:'U1008',product:'工具会员 · 月度',type:'会员',amount:49,date:'2026-11-12 12:10',pay:'未付款',fulfill:'未开始',refund:'无退款',promo:'无优惠',priceVersion:'TOOL-DEMO-01',evidence:false,attempts:[{id:'PAY009',channel:'演示渠道 A',amount:49,state:'已关闭',time:'2026-11-12 12:40',purpose:'未取得成功付款'}]},
 {id:'MO261111010',user:'U1002',product:'官方 AI 服务额度',type:'额度',amount:50,date:'2026-11-11 08:20',pay:'已付款',fulfill:'已到账',refund:'冲正待恢复',promo:'无优惠',priceVersion:'AI-DEMO-00',evidence:true,attempts:[{id:'PAY010',channel:'演示渠道 A',amount:50,state:'成功',time:'2026-11-11 08:21',purpose:'部分退款 20 元'}]},
 {id:'MO261110011',user:'U1001',product:'官方 AI 服务额度',type:'额度',amount:100,date:'2026-11-10 12:00',pay:'已付款',fulfill:'已到账',refund:'无退款',promo:'无优惠',priceVersion:'AI-DEMO-01',evidence:true,attempts:[{id:'PAY011',channel:'演示渠道 A',amount:100,state:'成功',time:'2026-11-10 12:01',purpose:'唯一履约付款'}]},
 {id:'MO261109012',user:'U1006',product:'官方 AI 服务额度',type:'额度',amount:30,date:'2026-11-09 10:00',pay:'已付款',fulfill:'已到账',refund:'退款完成',promo:'无优惠',priceVersion:'AI-DEMO-00',evidence:true,attempts:[{id:'PAY012',channel:'演示渠道 A',amount:30,state:'成功',time:'2026-11-09 10:01',purpose:'已原路全额退回'}]}
 ],
 sources:[
 {id:'AC001',user:'U1001',kind:'购买额度',credit:100,baseSpent:3.24,taskHold:0,refundHold:0,refunded:0,expires:'规则待确认',order:'MO261110011',date:'2026-11-10'},
 {id:'AC002',user:'U1001',kind:'套餐赠额',credit:10,baseSpent:2,taskHold:0,refundHold:0,refunded:0,expires:'2026-11-30',order:'MO261110011',date:'2026-11-10'},
 {id:'AC003',user:'U1002',kind:'购买额度',credit:100,baseSpent:6.2,taskHold:0,refundHold:0,refunded:0,expires:'规则待确认',order:'MO261113002',date:'2026-11-13'},
 {id:'AC004',user:'U1002',kind:'购买额度',credit:50,baseSpent:10,taskHold:0,refundHold:20,refunded:0,expires:'规则待确认',order:'MO261111010',date:'2026-11-11'},
 {id:'AC005',user:'U1003',kind:'活动赠额',credit:10,baseSpent:0,taskHold:1.2,refundHold:0,refunded:0,expires:'2026-11-17',order:null,date:'2026-11-10'},
 {id:'AC006',user:'U1004',kind:'购买额度',credit:200,baseSpent:16.4,taskHold:0,refundHold:0,refunded:0,expires:'规则待确认',order:'MO261113004',date:'2026-11-13'},
 {id:'AC007',user:'U1005',kind:'购买额度',credit:50,baseSpent:15,taskHold:0,refundHold:35,refunded:0,expires:'规则待确认',order:'MO261112005',date:'2026-11-12'},
 {id:'AC008',user:'U1006',kind:'购买额度',credit:30,baseSpent:0,taskHold:0,refundHold:0,refunded:30,expires:'规则待确认',order:'MO261109012',date:'2026-11-09'},
 {id:'AC009',user:'U1007',kind:'售后补偿',credit:5,baseSpent:0,taskHold:0,refundHold:0,refunded:0,expires:'2026-12-06',order:null,date:'2026-11-12'}
 ],
 actions:[
 {id:'AI3001',user:'U1002',project:'P2002',title:'第 28 章 · 检查与改写',source:'官方 AI',model:'文本服务 A · 演示',state:'已完成',settlement:'存在争议',auth:2,charge:1.8,expected:.9,cost:.72,hold:0,account:'AC003',date:'2026-11-13 15:20',result:true,parts:[['上下文读取','成功',.20],['改写候选','成功',.50],['一致性检查','重复记账',1.10]]},
 {id:'AI3002',user:'U1003',project:'P2003',title:'第 6 章 · 生成与设定整理',source:'官方 AI',model:'文本服务 A · 演示',state:'部分完成',settlement:'待核对',auth:2,charge:.64,expected:.64,cost:null,hold:1.2,account:'AC005',date:'2026-11-13 13:40',result:true,parts:[['生成草稿','成功',.64],['设定整理','用量未知',null]]},
 {id:'AI3003',user:'U1001',project:'P2001',title:'第 42 章 · 续写候选',source:'官方 AI',model:'文本服务 A · 演示',state:'已完成',settlement:'已结算',auth:1.5,charge:1.5,expected:1.5,cost:1.92,hold:0,account:'AC001',date:'2026-11-13 14:12',result:true,parts:[['续写候选','成功',1.50]]},
 {id:'AI3004',user:'U1006',project:'P2006',title:'第 8 章 · 情节分析',source:'自备 Key',model:'作者配置 · 文本模型',state:'已完成',settlement:'仅服务商估算',auth:0,charge:0,estimate:.84,cost:null,hold:0,account:null,date:'2026-11-13 11:06',result:true,parts:[['情节分析','成功',null]]},
 {id:'AI3005',user:'U1004',project:'P2004',title:'第 66 章 · 一致性检查',source:'官方 AI',model:'文本服务 B · 演示',state:'失败',settlement:'不收费',auth:1,charge:0,expected:0,cost:.18,hold:0,account:'AC006',date:'2026-11-13 12:30',result:false,parts:[['一致性检查','服务异常',0]]},
 {id:'AI3006',user:'U1007',project:'P2007',title:'第 19 章 · 结构建议',source:'官方 AI',model:'文本服务 A · 演示',state:'已完成',settlement:'已结算',auth:1.5,charge:.76,expected:.76,cost:.42,hold:0,account:'AC009',date:'2026-11-12 22:18',result:true,parts:[['结构建议','成功',.76]]},
 {id:'AI3007',user:'U1001',project:'P2001',title:'第 41 章 · 角色检查',source:'官方 AI',model:'文本服务 A · 演示',state:'已完成',settlement:'已结算',auth:1,charge:.48,expected:.48,cost:.24,hold:0,account:'AC001',date:'2026-11-12 17:16',result:true,parts:[['角色检查','成功',.48]]},
 {id:'AI3008',user:'U1004',project:'P2004',title:'第 65 章 · 改写候选',source:'官方 AI',model:'文本服务 A · 演示',state:'已完成',settlement:'已结算',auth:2,charge:1.16,expected:1.16,cost:.63,hold:0,account:'AC006',date:'2026-11-11 15:36',result:true,parts:[['改写候选','成功',1.16]]}
 ],
 refunds:[
 {id:'RF4001',user:'U1004',order:'MO261113004',payment:'PAY004-B',amount:200,reason:'同一订单的额外成功付款，全额原路退回',status:'结果待核对',cash:'结果未知',rights:'无需冲正',reserve:0,source:null,rule:'多收款逐笔原路全退 · 演示',date:'2026-11-13 12:10',submitted:true,channelUnknown:true},
 {id:'RF4002',user:'U1006',order:'MO261113006',payment:'PAY006',amount:39,reason:'优惠名额释放后迟付，无法重新取得名额与预算',status:'待审核',cash:'未执行',rights:'未发放',reserve:0,source:null,rule:'无法按原优惠履约时退原实付 · 演示',date:'2026-11-13 11:20',submitted:false},
 {id:'RF4003',user:'U1005',order:'MO261112005',payment:'PAY005',amount:35,reason:'未消费购买额度退款申请',status:'规则待确认',cash:'未执行',rights:'已预留',reserve:35,source:'AC007',rule:null,date:'2026-11-13 10:30',submitted:false},
 {id:'RF4004',user:'U1002',order:'MO261111010',payment:'PAY010',amount:20,reason:'部分购买额度原路退款',status:'冲正待恢复',cash:'已退款',rights:'冲正失败',reserve:20,source:'AC004',rule:'已保存售后快照 · 演示',date:'2026-11-12 15:00',submitted:true},
 {id:'RF4005',user:'U1006',order:'MO261109012',payment:'PAY012',amount:30,reason:'原订单未使用额度退款',status:'已完成',cash:'已退款',rights:'已冲正',reserve:0,source:'AC008',rule:'已保存售后快照 · 演示',date:'2026-11-10 13:00',submitted:true}
 ],
 posts:[
 {id:'RV5001',user:'U1001',title:'我是怎样整理长篇伏笔的',category:'创作心得',version:2,publicVersion:1,status:'待审核',visibility:'旧版公开',date:'2026-11-13 15:10',valid:true,content:'写到四十章之后，我开始用设定集维护伏笔。\n\n我会先记录读者已经知道的信息，再单独整理角色尚未察觉的线索。每次准备写新章，只查当前章节需要的几条。\n\n这次补充一个习惯：把已兑现的伏笔留在历史里，不直接删掉。以后修改前文时，还能找回当时的判断。',old:'写到四十章之后，我开始用设定集维护伏笔。\n\n我会先记录读者已经知道的信息，再单独整理角色尚未察觉的线索。每次准备写新章，只查当前章节需要的几条。',history:'v1 于 11月10日通过并公开'},
 {id:'RV5002',user:'U1002',title:'给第一次用墨鱼的朋友：先从一章开始',category:'墨鱼使用技巧',version:1,publicVersion:0,status:'待审核',visibility:'社区不可见',date:'2026-11-13 14:30',valid:true,content:'刚开始时，不必一次填完所有设定。\n\n我的顺序是先写下故事的核心问题，规划一章，再补足这一章真正需要的角色信息。AI 候选是备选，最后怎么写仍然由自己决定。\n\n这是我的个人使用经验，不代表平台承诺。',history:'首次提交，尚无公开版本'},
 {id:'RV5003',user:'U1003',title:'部分完成的任务，该怎么继续处理',category:'问题求助',version:2,publicVersion:0,status:'待审核',visibility:'社区不可见',date:'2026-11-13 13:10',valid:true,content:'生成的草稿已经保留，但设定整理那一步显示没有完成。\n\n我没有附上私人正文，只想确认是否可以保留草稿并单独补做设定整理。\n\n已按照上一版审核建议移除了账号信息。',history:'v1 退回：请移除个人账号信息；作者已修改重提'},
 {id:'RV5004',user:'U1006',title:'短篇里如何控制叙事视角',category:'创作心得',version:1,publicVersion:0,status:'作者已撤回',visibility:'社区不可见',date:'2026-11-13 11:00',valid:false,content:'这份送审内容已被作者撤回。保留审核元数据，不允许旧请求再次公开。',history:'作者于 11月13日 11:30 撤回'},
 {id:'RV5005',user:'U1004',title:'从章节规划回到正文',category:'墨鱼使用技巧',version:1,publicVersion:1,status:'已通过',visibility:'公开',date:'2026-11-12 16:40',valid:false,content:'我会给当前规划节点写一段明确的意图，再进入章节写作。写完以后返回规划，核对这章有没有完成原来的任务。',history:'内容管理员已通过 v1'},
 {id:'RV5006',user:'U1005',title:'关于创作工具的使用讨论',category:'创作心得',version:2,publicVersion:1,status:'已被他人处理',visibility:'管理员隐藏',date:'2026-11-13 10:00',valid:false,content:'同事已处理本条记录，公开版本处于隐藏状态。旧审批不能恢复被隐藏的内容。',history:'11月13日 10:20 内容管理员隐藏公开版；候选审核已失效'}
 ],
 tickets:[
 {id:'TK6001',user:'U1001',title:'续费成功后仍然提示权益到期',category:'订单与权益',status:'处理中',owner:'陈亦',order:'MO261113001',project:'P2001',action:null,review:null,updated:'2026-11-13 15:35',grant:null,messages:[{who:'author',name:'沈星河',time:'14:18',text:'已经完成续费，订单显示已付款，但工具权益还没有更新。麻烦帮我核对一下。'},{who:'staff',name:'陈亦',time:'15:35',text:'已定位到原订单。付款已经确认，目前权益发放尚未完成，我们会继续核对同一订单，无需再次购买。'},{who:'internal',name:'陈亦',time:'15:36',text:'渠道证据已确认，转履约恢复处理。不要创建新的权益发放记录。'}]},
 {id:'TK6002',user:'U1002',title:'本次改写费用似乎被重复计算',category:'费用异议',status:'处理中',owner:'周予安',order:'MO261113002',project:'P2002',action:'AI3001',review:null,updated:'2026-11-13 15:48',grant:null,messages:[{who:'author',name:'林晚',time:'15:26',text:'这次改写的费用明细里，一致性检查好像重复了。可以帮我核实这笔费用吗？'},{who:'staff',name:'周予安',time:'15:48',text:'已收到。我们会核对本次动作的授权与各子步骤记账，不需要提供正文或 API Key。'}]},
 {id:'TK6003',user:'U1003',title:'草稿已生成，设定整理没有完成',category:'作品与 AI 故障',status:'待作者补充',owner:'陈亦',order:null,project:'P2003',action:'AI3002',review:null,updated:'2026-11-13 14:10',grant:{state:'有效',version:'第 6 章 · 快照 v3',scope:'第 2 段 · 指定快照片段',purpose:'排查设定整理步骤失败',roles:['support','owner'],expires:'2026-11-14 14:10',text:'【授权演示片段】林舟在雨停后走进旧书铺。他认出了柜台上的铜铃，却记不起上一次听到铃声是在什么时候。店主没有抬头，只把一封尚未拆开的信推了过来。'},messages:[{who:'author',name:'陈默',time:'13:50',text:'已经生成的内容还在，但整理设定这一步失败了。我只授权了相关的一小段快照，希望核对任务原因。'},{who:'staff',name:'陈亦',time:'14:10',text:'草稿保留不受影响。已收到指定快照的授权，请补充本次报错出现的时间，我们将继续排查。'}]},
 {id:'TK6004',user:'U1006',title:'修改后再次排查章节问题',category:'作品与 AI 故障',status:'待受理',owner:'未分派',order:null,project:'P2006',action:'AI3004',review:null,updated:'2026-11-13 11:30',grant:{state:'已撤销',version:'第 8 章 · 快照 v1',scope:'第 1 段 · 指定快照片段',purpose:'核对章节显示问题',roles:['support','owner'],expires:'2026-11-13 12:00',text:''},messages:[{who:'author',name:'江序',time:'11:30',text:'之前的材料授权已经撤销。请先根据任务标识排查，如果还需要新材料，请说明具体范围。'}]},
 {id:'TK6005',user:'U1005',title:'希望复核帖子互动限制',category:'社区复核',status:'已答复待确认',owner:'林澈',order:null,project:null,action:null,review:'RV5006',updated:'2026-11-13 10:40',grant:null,messages:[{who:'author',name:'许知远',time:'10:10',text:'想了解本次社区处置的具体依据，并申请复核。'},{who:'staff',name:'林澈',time:'10:40',text:'已将你的意见关联到原处置记录进行复核。当前限制仅影响社区互动，私人写作、保存、导出及账务查询保持可用。'}]},
 {id:'TK6006',user:'U1004',title:'同一订单扣款两次后的退款进度',category:'退款与售后',status:'处理中',owner:'顾霖',order:'MO261113004',project:null,action:null,review:null,updated:'2026-11-13 13:20',grant:null,messages:[{who:'author',name:'南乔',time:'12:00',text:'订单有两笔扣款，请问额外的一笔什么时候退回？'},{who:'staff',name:'顾霖',time:'13:20',text:'额外收款已关联原付款发起原路退款，渠道暂未返回最终结果。我们会继续查询这笔原退款，当前尚不能确认资金已退回。'}]}
 ],
 services:[{id:'S7001',name:'文本服务 A',model:'演示模型 A',state:'演示可用',input:.008,output:.024,version:'PRICE-DEMO-01',note:'仅用于原型的计费与授权演示，不代表正式在售模型'},{id:'S7002',name:'文本服务 B',model:'演示模型 B',state:'已暂停新动作',input:.012,output:.036,version:'PRICE-DEMO-02',note:'已授权任务单独跟踪，历史费用与剩余额度保持可查'}],
 products:[{id:'PD8001',name:'工具会员 · 月度',state:'草稿待确认',amount:49,version:'TOOL-DEMO-01',scope:'已交付的上下文 AI 创作工作流；官方用量另计',note:'D03：正式权益、试用和价格待裁决'},{id:'PD8002',name:'官方 AI 服务额度',state:'草稿待确认',amount:100,version:'AI-DEMO-01',scope:'演示服务额度 100 元；不含工具会员',note:'D04 / D05：正式计价、有效期及售后待裁决'}],
 activities:[{id:'EV9001',name:'新作者体验活动',state:'演示启用',code:'MOYU-DEMO',discount:10,budget:100,used:100,limit:10,redeemed:10,start:'2026-11-01',end:'2026-11-30',product:'PD8001'},{id:'EV9002',name:'持续创作支持计划',state:'草稿',code:'WRITE-DEMO',discount:5,budget:50,used:0,limit:10,redeemed:0,start:'2026-12-01',end:'2026-12-31',product:'PD8001'}],
 reports:[{id:'RP9101',post:'RV5006',user:'U1005',reason:'讨论偏离主题与人身攻击',state:'待复核',date:'2026-11-13 10:30',note:'公开版本已隐藏，复核不得自动恢复候选'},{id:'RP9102',post:'RV5005',user:'U1004',reason:'疑似推广内容',state:'待处理',date:'2026-11-12 18:00',note:'尚未处置，请先查看公开版和上下文'}],
 staff:[{id:'ST01',name:'周予安',role:'owner',state:'有效',session:'当前会话',last:'2026-11-13 16:40'},{id:'ST02',name:'陈亦',role:'support',state:'有效',session:'1 个有效会话',last:'2026-11-13 15:36'},{id:'ST03',name:'顾霖',role:'finance',state:'有效',session:'1 个有效会话',last:'2026-11-13 13:20'},{id:'ST04',name:'林澈',role:'content',state:'有效',session:'1 个有效会话',last:'2026-11-13 10:40'},{id:'ST05',name:'旧值班账号',role:'support',state:'已撤权',session:'会话已失效',last:'2026-11-11 17:00'}],
 audit:[{id:'AU001',actor:'顾霖',role:'finance',object:'RF4004',action:'核对退款成功，权益冲正待恢复',reason:'渠道成功，服务额度处理失败',time:'2026-11-13 16:12',kind:'refund'},{id:'AU002',actor:'陈亦',role:'support',object:'TK6001',action:'回复作者并关联原订单',reason:'查证续费未到账',time:'2026-11-13 15:35',kind:'ticket'},{id:'AU003',actor:'林澈',role:'content',object:'RV5005',action:'通过送审版本 v1',reason:'内容符合社区规范',time:'2026-11-13 14:20',kind:'review'},{id:'AU004',actor:'陈亦',role:'support',object:'TK6003',action:'查看作者已授权的指定快照',reason:'排查设定整理任务',time:'2026-11-13 14:10',kind:'ticket'},{id:'AU005',actor:'顾霖',role:'finance',object:'RF4001',action:'查询原退款，结果仍待核对',reason:'渠道尚未提供最终结果',time:'2026-11-13 13:20',kind:'refund'}],
 adjustments:[],requests:[],rev:0
};

/* A clearly failed channel result is distinct from an unknown result. */
window.MOYU_SEED.refunds.push({id:'RF4006',user:'U1001',order:'MO261110011',payment:'PAY011',amount:20,reason:'演示原购买额度退款，渠道已明确失败',status:'明确失败',cash:'明确失败',rights:'相关预留已释放',reserve:0,source:'AC001',rule:'已保存售后快照 · 演示',date:'2026-11-12 17:00',submitted:true});
window.MOYU_SEED.orders.find(o=>o.id==='MO261110011').refund='退款失败';
