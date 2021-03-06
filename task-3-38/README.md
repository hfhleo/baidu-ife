示例：
---
```JavaScript  

var tables = new table({                                      //创建一个table实例
    parent:document.getElementById("box"),      // 需要插入的父级元素
    data:{
        me      :["0","1","1","1"],                                // 排序按钮状态，0为没有排序按钮、1为有。
        header:["名字","数学","语文","英语"],             // 表格行首字段
        tbody  :[                                                        // 表格数据
            ["小明","88","15","47"],
            ["小花","56","40","60"],
            ["小李","75","59","45"],
        ],
    }
});

```

任务三十八：UI组件之排序表格
---
**面向人群：** 初学者

**难度：** 简单

**发布时间：** 03-21

**截止时间：** 04-21 23:59

重要说明
---
百度前端技术学院的课程任务是由百度前端工程师专为对前端不同掌握程度的同学设计。我们尽力保证课程内容的质量以及学习难度的合理性，但即使如此，真正决定课程效果的，还是你的每一次思考和实践。

课程多数题目的解决方案都不是唯一的，这和我们在实际工作中的情况也是一致的。因此，我们的要求不仅仅是实现设计稿的效果，更是要多去思考不同的解决方案，评估不同方案的优劣，然后使用在该场景下最优雅的方式去实现。那些最终没有被我们采纳的方案，同样也可以帮助我们学到很多知识。所以，我们列出的参考资料未必是实现需求所必须的。有的时候，实现题目的要求很简单，甚至参考资料里就有，但是背后的思考和亲手去实践却是任务最关键的一部分。在学习这些资料时，要多思考，多提问，多质疑。相信通过和小伙伴们的交流，能让你的学习事半功倍。

任务目的
---
* 练习综合运用HTML、CSS、JavaScript实现局部功能
* 练习对于代码的抽象与封装
* 为第四阶段的RIA任务做准备

任务描述
---
* 参考下方设计图，实现一个支持列排序的表格组件
* ![img](http://7xrp04.com1.z0.glb.clouddn.com/task_3_38_1.jpg)
* 提供生成表格的接口，表格中的数据，表格样式尽量低耦合
* 可以配置对哪些列支持排序功能，并在表头进行排序按钮的显示，图中的样式为示意参考，可自行设定样式及交互方式
* 提供点击排序按钮后的响应接口，并提供默认的排序方法，当提供的接口没有具体实现时，按默认的排序方法进行排序操作，并更新表格中的数据显示。

任务注意事项
---
* 实现功能的同时，请仔细学习JavaScript相关的知识
* 请注意代码风格的整齐、优雅
* 代码中含有必要的注释
* 建议不使用任何第三方库、框架

任务协作建议
---
* 如果是各自工作，可以按以下方式：
* 团队集中讨论，明确题目要求，保证队伍各自对题目要求认知一致
* 各自完成任务实践
* 交叉互相Review其他人的代码，建议每个人至少看一个同组队友的代码
* 相互讨论，最后合成一份组内最佳代码进行提交
* 如果是分工工作（推荐），可以按以下模块切分
* 实现表格逻辑
* 实现排序相关逻辑

任务链接
---
http://ife.baidu.com/task/detail?taskId=38
