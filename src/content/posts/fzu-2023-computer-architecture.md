---
title: 福州大学2023级计算机系统结构课程复习提纲
published: 2026-11-09
description: 计算机系统结构课程复习提纲，涵盖系统结构基础与性能分析、指令系统、标量与向量处理机、多处理机及数据流机。
category: 学习笔记
tags: [计算机系统结构, 福州大学, 课程复习]
image: /uploads/computer-architecture/cover.webp
draft: false
---

## 第一章 计算机系统结构导论

本章按复习提纲顺序逐点整理：系统结构/组成/实现 → 设计思路/步骤 → 系列机/兼容机 → 层次结构 → 定义与透明性 → 软硬件取舍与可移植性 → 性能公式/Amdahl → 定量分析原则 → 并行性/Flynn/开发途径/耦合度。

### 1. 计算机系统结构、计算机组成、计算机实现所包含的内容

考法：选择

计算机系统的多级层次结构的划分是相对的，不同级别 的程序员所了解到的计算机属性是不一样的，低层机器的属 性对高层机器的程序员基本上是透明的（即抽象使用）。

计算机属性：计算机的概念性结构和功能特性。

| <strong>层次</strong> | <strong>核心定义</strong> | <strong>主要内容</strong> | <strong>典型例子</strong> | <strong>对谁不透明</strong> |
|----|----|----|----|----|
| 计算机系统结构 | 机器级程序员看到的计算机属性；本质是软硬件功能分配与机器级界面的确定 | 数据表示、寻址方式、寄存器组织、指令系统、存储系统、中断系统、I/O 接口、保护方式、工作状态等 | 是否有浮点指令、寻址方式有哪些、寄存器多少个 | 机器语言/汇编程序员 |
| 计算机组成 | 系统结构的逻辑实现；在性能价格比要求下组织部件实现结构功能 | 数据流、控制流、控制机构、各部件功能与连接、指令实现方式 | 指令采用串行/重叠/流水；乘法用专用乘法器还是加法移位实现 | 计算机组成设计者 |
| 计算机实现 | 计算机组成的物理实现 | 器件技术、组装技术、芯片/板卡/工艺选择、具体电路实现 | 存储器采用何种芯片、工艺、封装 | 硬件实现/维修人员 |

- 易错：系统结构关注“看得见的外特性”，组成关注“如何逻辑组织”，实现关注“用什么器件和工艺做出来”。

- 判断题常考：同一系统结构可以有不同组成；同一组成也可以有不同实现。

  <strong>计算机系统结构所包含的内容（选择）：</strong>系统结构是程序员所看到的计算机的属性，即程序员编写出能在机器上正确运行的程序所必须了解到的<strong>概念性结构和功能特性</strong>。

  <strong>实质是</strong>：<strong>完成硬件、软件的功能分配，对计算机的机器级界面的确定</strong>。界面之上，是软件实现的功能；界面之下是硬件和固件实现的功能。

- <strong>数据表示：</strong>硬件能直接识别和处理的数据类型、格式

- <strong>寻址方式：</strong>最小寻址单位，寻址方式的种类，地址的计算

- <strong>寄存器组织：</strong>数据寄存器、变址、控制寄存器、专用寄存器等数量，使用方法

- <strong>指令系统：</strong>指令的格式、类型，使用方法

- <strong>存储系统：</strong>最小编址单位，编址方式，存储容量，最大存储空间

- <strong>中断系统：</strong>中断类型，优先级别，入口地址的形成等

- <strong>I/O 接口的结构：</strong>I/O 的连接方式、访问方式、编方式址

- <strong>信息的保护：</strong>保护方式，硬件对信息的保护和支持

- <strong>机器工</strong>作<strong>状态、定义和切换</strong>

  <strong>计算机组成所包含的内容（选择）：</strong>

  <strong>定义：计算机系统结构的逻辑实现</strong>。包括机器级内的数据流、控制流的组成及逻辑 设计，完成机器内控制机构、各部件的功能及连接

  <strong>目的：</strong>解决在性能价格比的要求下，达到最佳、最合理地把各种部件、设备组成计算机，实现系统结构所确定的功能。

- 数据通路宽度

- 专用部件的设置

- 各种操作对部件的共享程度

- 功能部件的并行度

- 控制机构的组成方式

- 缓冲和排队技术

- 可靠性技术

  <strong>计算机实现所包含的内容（选择）：</strong>计算机实现指的是<strong>计算机组成的物理实现</strong>：

- 处理机、主存、I/O 接口等部件的物理结构

- 器件的集成度和速度的选择

- 器件、模块、插件、底板的划分与连接

- 专用器件的设计

- 组装技术

- 信号传输

- 电源、冷却、整机的装配等

### 2. 计算机系统设计思路

考法：填空、选择

从多级层次结构出发，计算机系统的设计按照多级层次结构的上、下、中开始设计，分别可以有<strong>“由上往下” ，“由下往上”，“由中间开始”</strong>三种不同的设计方法。

- 由上往下：从使用者面向的机器级开始设计，用于<strong>专用计算机</strong>设计，较少采用

  ![](/Firefly/uploads/computer-architecture/image1.png)

- 由下往上：只根据现有能得到的器 件，构成系统。再配合不同的应用需要，加入操作系统、高级语言等。70-80 年代使用，较少采用 <strong>（通用机）</strong>

  ![](/Firefly/uploads/computer-architecture/image2.png)

- 从中间开始：用于系列机设计<strong>（传统操作语言和操作系统之间），</strong>首先进行软硬件功能分工，确定交界面，再分 别向上、下进行设计

  ![](/Firefly/uploads/computer-architecture/image3.png)

- <strong>核心思路：</strong>在给定应用目标、成本、性能、可靠性约束下，合理划分软/硬/固件功能，确定机器级界面，并组织部件获得较优性能价格比。

- 从“功能—性能—价格—可实现性—可扩展性—可兼容性”综合权衡，而不是单纯追求硬件越强越好。

- 系统结构设计要考虑向上兼容、软件可移植、并行性开发、瓶颈消除和定量评估。

### 3. 系列机和兼容机的概念

考法：选择、填空

- <strong>系列机（从中间开始设计）：</strong>在软、硬件界面上<strong>确定好一种系统结构</strong>，之后软件设计者按此设计软件，硬件设计者根据机器速度、性能、价格的不同，选择不同的器件，在用不同的硬件技术和组成、实现技术，研制并提供不同档次的机器。

- <strong>定义：</strong>在<strong>一个厂家</strong>内生产的<strong>具有相同的体系结构</strong>，但具有不同组成和实现的一系列不同型号的机器。

- <strong>优势：</strong>

- 能够解决程序的兼容问题；

- 使用统一数据结构和指令，便于组成多机系统和网络；

- 扩大应用领域，在同一系列中选用适合的机型；

- 使总线和硬件的接插件通用兼容；

- 有利于机器的使用、维护和人员的培训；

- 有利于系统的更新、换代、升级；

- 有利于提高生产率，降低成本，增加产量。

  ![](/Firefly/uploads/computer-architecture/image4.png)

- <strong>兼容机：</strong>不同公司厂家生产的具同一系统结构的计算机。（保证向后兼容，力争做到向上兼容）

- 向上（下）兼容：指按某一挡机器编制的软件不加修改就能运行于比它高（低）档的机器。（新旧上看）

- 向前（后）兼容：在按某一时期投入市场的该型号机器上编制的软件，不加修改就能运行于在它之前（后）投入市场的机器上。（时间上看）

- 系列机强调“同一系列、统一体系结构、不同型号”；兼容机强调“能否运行同一软件/是否兼容某体系”。

| <strong>比较项</strong> | <strong>系列机</strong> | <strong>兼容机</strong> |
|----|----|----|
| 核心标准 | 同一统一系统结构下的一组机型 | 与某机器或体系的软件/接口兼容 |
| 生产关系 | 通常由同一厂家/同一系列规划 | 可由不同厂家仿制或实现 |
| 差异允许 | 组成、实现、速度、价格、容量可不同 | 实现方式、器件、组织可不同 |
| 共同点 | 都追求软件兼容，特别是目标代码或源程序迁移 | 都要求程序员可见属性尽量一致 |
| 根本特征 | 向后兼容是系列机根本特征 | 能正确运行已有软件是兼容判断核心 |

- 兼容方向：向上兼容指低档机软件可在高档机运行；向下兼容指高档机软件在低档机运行，通常较难；向后兼容指新机器运行旧机器软件，是最重要方向；向前兼容指旧机器运行新机器软件，通常较难。

### 4. 计算机系统设计步骤

考法：选择、填空

1.  <strong>需求分析：</strong>在应用环境，所用语言的种类及特性对 OS 的特殊要求；所用外设特性、技术经济指标、市场分析等方面

2.  <strong>需求说明：</strong>主要包括设计准则、功能说明、器件性能说明

3.  <strong>概念型设计：</strong>进行软硬件功能分析，确定机器级界面

4.  <strong>具体设计：</strong>机器及界面各方面的确切定义

5.  反复进行<strong>优化设计</strong>和<strong>评价</strong>

### 5. 计算机的层次结构

考法：选择

<strong>计算机系统=硬件/固件 + 软件</strong>

共有六级，高四级为虚拟机器，低二级为实际机器。

![](/Firefly/uploads/computer-architecture/image5.png)

- 低级机器是高级机器的基础；高一级语言功能更强，但最终要由低一级机器通过翻译或解释实现。

- 实际机器通常包括微程序机器级和传统机器级；虚拟机器包括操作系统级、汇编级、高级语言级、应用语言级。

- <strong>翻译：</strong>先用转换程序将高一级机器级上的程序整个地<strong>变换成低一级机器</strong>级上等效的程序，然后再<strong>在低一级机器级上实现</strong>的技术，如编译；

- <strong>解释：</strong>在低级机器级上用它的一串语句或指令来<strong>仿真高级机器</strong>级上的一条语句或指令的功能，是通过对高级的机器级语言程序中的每条语句或令逐条解释来实现的技术，如微程序解释机器指令。

- 解释执行比翻译后再执行所花时间多，但占用存储空间较小。

  ![](/Firefly/uploads/computer-architecture/image6.png)

### 6. 计算机系统结构的定义（实质）

考法：选择

<strong>定义：</strong>系统结构是程序员所看到的计算机的属性，即程序员编写出能在机器上正确运行的程序所必须了解到的概念性结构和功能特性。

- 狭义上，计算机系统结构通常指传统机器级的系统结构，即机器级程序员看到的概念性结构和功能特性。

- 实质：确定软硬件机器级界面，完成硬件、软件、固件的逻辑功能分配。界面之上由软件实现，界面之下由硬件/固件实现。

### 7. 计算机系统结构、计算机组成、计算机实现三者之间的区别和联系

考法：简答、选择

![](/Firefly/uploads/computer-architecture/image7.png)

- <strong>联系：</strong>计算机系统结构、组成、实现三者互不相同，但又相互影响。<strong>具有相同系统结构</strong>的计算机可以采用<strong>不同的组成</strong>，<strong>相同计算机组成</strong>可以采用<strong>多种不同的计算机实现</strong>。

- 例：

- 相同指令系统 ---- 顺序、流水

- 相同乘法系统 ---- 乘法器、加法器

- 相同主存要求 ---- 不同型号、多存储芯片

- 区别：<strong>组成设计向上决定于结构，向下受限于实现技术</strong>

- 结构不同，采用的组成技术不同；

- 组成技术的进步推动结构的发展；

- 实现技术的发展使得三者的关系更加紧密

- 例：

- 指令系统中是否有乘法指令属于系统结构；

- 乘法指令用乘法器还是多次加法实现属于组成；

- 乘法器由何种电路、芯片和工艺实现属于实现。

- 透明性联系：某属性对某级程序员透明，就不属于该级系统结构必须了解的内容；不透明则属于该级设计/使用必须掌握的属性。

### 8. 软、硬件取舍原则

考法：简答、选择

- <strong>逻辑功能等效：</strong>软件和硬件在逻辑功能上是等效的，只是性能、价格、实现的难易程度不同。

- 计算机系统功能分配的三种方法：全硬件、软硬件结合、全软件

- 硬件实现：速度快、成本高；灵活性差、占用内存少

- 软件实现：速度慢、复制费用低；灵活性好、占用内存多、易设计、可改性强、适应性强、设计周期短；

- 发展趋势：硬件实现比例越来越高，硬件所占成本比例越来越低

  ![](/Firefly/uploads/computer-architecture/image8.png) ![](/Firefly/uploads/computer-architecture/image9.png)

- <strong>原则 1：</strong>应考虑现有硬件、器件条件下，系统应该有高的性能价格比，主要从实现费用、速度和其他性能要求来综合考虑。

- <strong>原则 2：</strong>要考虑到准备采用和可能采用的组成技术，使它尽可能不要过多或不合理地限制各种组成、实现技术的采用。

- <strong>原则 3：</strong>不能仅从“硬”的角度去考虑如何便于应用组成技术的成果和发挥器件技术的进展，还应从“软”的角度把为编译和操作系统的实现，以及高级语言程序的设计，提供更多更好的硬件支持放在首位；

### 9. 解决软件可移植性的方法

考法：选择、填空

<strong>定义：</strong>软件产品不用修改或只需经过少量加工，就能 由一台机器搬到另一台机器上运行。

- <strong>统一高级语言：</strong>软件的移植种类：系统软件和应用软件。希望不同机器用同一高级语言编写程序，通过编译实现移植；目前有数百种高级语言，用于不同的应用场合，却没有一种能满足各种需要、通用的高级语言，受语言用途、语法语义差异限制。

- 不同的用途，语言的语法结构和语义结构不同

- 对语言的基本结构没有透彻的统一的认识

- 惯性作用

- <strong>系列机思想：</strong>系列机应该是<strong>多功能的、通用的</strong>，按照统一系统结构设计的，根据结构生产软件，按现代技术用 各种器件实现的，具有不同速度、价格和应用场合的。特性在于：

- 机器的属性相一致

- 软件的兼容性（应做到向后兼容，并力争向上兼容

- <strong>模拟和仿真：</strong>为实现不同系统结构的机器之间的机器语言软件移植，就必须做到在一种机器的系统结构上实现另一种机器的系统结构。其中最重要的，就是要在<strong>一种机器上（A）实现另一种机器（B）的指令系统</strong>，即另一种机器语言。

  ![](/Firefly/uploads/computer-architecture/image10.png) ![](/Firefly/uploads/computer-architecture/image11.png)

- <strong>模拟：</strong>用机器语言程序解释，实现程序移植的方法。即 B 机器的每条机器指令用 A 机器一段机器语言程序解释，灵活但速度较慢。当<strong>宿主机中的系统结构和虚拟机系统结构不相同</strong>，如果用相应的机器语言替代虚拟机的机器指令，完成相同的功能：

- 一般要用多条指令才能完成某一功能

- 有的功能无法完成的，甚至要很复杂

  ![](/Firefly/uploads/computer-architecture/image12.png)

- <strong>仿真：</strong>用机器中微程序控制的方法，解释另一台机器指令的系统，即 B 机器的每条机器指令用 A 机器一段微程序解释，速度较快但实现成本更高。仿真的特点：

- 加快运行的速度

- 可完成一些难以实现的操作

  ![](/Firefly/uploads/computer-architecture/image13.png)

- 进行仿真工作的 A 机称为宿主机。

- 被仿真的 B 机称为目标机（Target Machine）。

- 所有为仿真所编制的解释微程序通称为仿真微程序。

- <strong>标准化接口：</strong>通过统一操作系统接口、API、ABI、虚拟机等减少软件与底层硬件耦合。

### 10. 透明性的定义和判断

考法：选择

- 定义：本来存在的事物或属性，从某个观察角度看好像不存在，称为对该观察者透明。

- 判断方法：问“该级程序员为了编写正确运行的程序是否必须知道这个属性”。必须知道→不透明；不必知道→透明。

- 透明性是相对的，不是绝对的；同一属性对不同层次人员可能不同。

| <strong>属性</strong> | <strong>对谁透明</strong> | <strong>对谁不透明</strong> | <strong>判断理由</strong> |
|----|----|----|----|
| CPU 型号、主存容量 | 一般应用程序员 | 系统程序员、硬件设计/维护人员 | 应用程序通常只依赖抽象接口；系统调优/硬件设计必须知道 |
| 浮点数表示、乘法指令 | 高级语言程序员、应用程序员 | 汇编/机器语言程序员 | 高级语言隐藏细节；汇编要知道指令和格式 |
| 数据总线宽度、微程序 | 汇编语言程序员 | 硬件设计/维修人员 | 汇编只看 ISA；硬件实现必须知道 |
| 虚拟内存 | 应用程序员通常透明 | 操作系统设计者不透明 | 应用只见连续地址空间；OS 要管理页表/映射 |

### 11. CPU 性能公式

考法：计算

<strong>基本公式：</strong>程序执行时间 $T_{CPU}\  = \ \text{指令条数}\ IC\  \times \ \text{平均每条指令周期数}\ CPI\  \times \ \text{时钟周期时间}\ t_{c}$。也可写为 $T_{CPU}\  = \ IC\  \times \ CPI \times \frac{1}{f_{c}}$，其中，$f_{c}$是主时钟频率

为了反映程序的运行速度，通常引入如下一些定量指标：

- MIPS(Million Instructions Per Second，每秒百万条指令数）。

  ![](/Firefly/uploads/computer-architecture/image14.png)

- MFLOPS(Million Floating Point Operations Per Second，每秒百万次浮点运算)。假设 $I_{FN}$表示程序运行中的浮点运算总次数。MFLOPS 只能反映机器执行浮点操作的性能，并不能反映机器的整体性能。

  ![](/Firefly/uploads/computer-architecture/image15.png)

<strong>扩展：</strong>

- 程序执行的时间为：

  ![](/Firefly/uploads/computer-architecture/image16.png)

- 假设系统共有 $n$ 种指令，第$\ i$ 种指令的时钟周 期数为$CPI_{i}$，第$i$种指令在程序中出现的次数为 $I_{i}$。其中，$I_{i}\ /\ IC$为第$\ i\,$种指令在程序总指令数$IC$中所占的比值。

![](/Firefly/uploads/computer-architecture/image17.png)

- 优化方向：减少 IC、降低 CPI、缩短时钟周期/提高主频。

- 注意三者相互制约：例如复杂指令可能减少 IC 但提高 CPI 和周期；RISC 可能增加 IC 但显著降低 CPI。

- 常用推导：性能 = 1 / 执行时间；加速比 S = 改进前时间 / 改进后时间。

### 12. Amdahl 定律

考法：计算

该定律用于确定系统中某一部件采取措施提高速度后能得到<strong>系统性能改进的程度</strong>，即系统性能加 速比$S_{p}$。

![](/Firefly/uploads/computer-architecture/image18.png)

可改进比$f_{new}$ ：在改进前的系统中，可改进部分的执行时间占系统总执行时间的比值：$0 \leq f_{new} \leq 1$

部分加速比 $r_{new}$：可改进部分在改进后性能提高的倍数，是改进前执行时间与改进后时间的比：$r_{new} > 1$

则总加速比：

![](/Firefly/uploads/computer-architecture/image19.png)

若该部分加速到无限快，则最大加速比 $S_{max}\  = \ 1\ /\ (1\  - \ f_{new})$。

- Amdahl 定律表明了性能提高量的递减规律：只对系统中的一部分进行性能改进，改进的越多，整体系统性能提高的增量却越小。

- 结论：改进好的高性能系统应是一个各部分性能均能平衡地得到提高的系统，不能只是其中某一个功能部件性能的提高。

### 13. 三大定量分析原理

考法：填空、简答

1.  <strong>哈夫曼压缩原理：</strong>尽可能加速高概率事件远比加速处理概率很低的事件对性能提高要显著。

2.  <strong>程序局部性原理：</strong>局部性分时间和空间上的局部性

- <strong>时间局部性：</strong>程序中近期被访问的信息项很可能马上将被再次访问。

- <strong>空间局部性：</strong>指那些在访问地址上相邻近的信息项很可能会被一起访问。

3.  <strong>Amdahl 定律：</strong>系统中某一部件由于采用某种更快的执行方式后，整个系统性能的提高与这种方式的使用频率或占总实行时间的比例有关。

### 14. 并行性的概念和分类

考法：简答、选择、填空

- <strong>并行性：</strong>在同一时刻或者在同一时间间隔内完成两种或者两种以上的工作，它们在时间上能互相重叠。

- <strong>同时性：</strong>多个事件在同一时刻发生，依赖资源重复，如多处理机/阵列处理机。

- <strong>并发性：</strong>多个事件在同一时间间隔内交替或重叠发生，依赖时间重叠，如流水线。

![](/Firefly/uploads/computer-architecture/image20.png)![](/Firefly/uploads/computer-architecture/image21.png)

![](/Firefly/uploads/computer-architecture/image22.png)

### 15. Flynn 分类

考法：选择、填空

弗林 (Flynn) 分类法：按指令流、数据流的多倍性进行分类

1.  <strong>单指令流单数据流（SISD）：</strong>指令部件每次只对一条指令进行译码，并只对一个操作部件分配数据（单处理机，流水线处理机）

![](/Firefly/uploads/computer-architecture/image23.png)![](/Firefly/uploads/computer-architecture/image24.png)

2.  <strong>单指令流多数据流（SIMD）：</strong>由单一指令部件控制，按照同一指令流的要求，给它们分配不同的数据。（并行处理机）

<!-- -->

3.  <strong>多指令流单数据流（MISD）：</strong> 有多个处理单元，按多条不同指令的要求对同一个数据流及中间结果进行不同的处理。一个处理单元的输出作为另一个处理单元的输入。（处理机间的宏流水）

![](/Firefly/uploads/computer-architecture/image25.png)![](/Firefly/uploads/computer-architecture/image26.png)

4.  <strong>多指令流多数据流（MIMD）：</strong>由多个单指令流单数据流的集合构成（多机系统，松散耦合或紧密耦合多处理机）

### 16. 系统结构中开发并行性的途径和耦合度

考法：填空、选择、简答

<strong>并行性途径：</strong>

- <strong>时间重叠：</strong>在并行性概念中引入时间因素，让多个处理过程在时间上相互错开，轮流重叠地使用同一套硬件设备的各个部分，以加快硬件周转而赢得速度。把同一处理过程分成多个阶段，使多个任务在不同阶段重叠执行，典型是流水线。

- <strong>资源重复：</strong>在并行性概念中引入空间因素，通过重复设置硬件资源来提高可靠性或性能。（提高速度、可靠性）。复制多个处理部件，使多个任务真正同时执行，典型是阵列处理机、多处理机。

- <strong>资源共享：</strong>利用软件的方法让多个用户按一定时间顺序轮流地使用同一套资源，以提高其利用率，这样也可以提高整个系统的性能。多个任务分时共享同一资源，降低成本但可能产生冲突。

  <strong>耦合度：</strong>各机间紧密的程度和相互作用的能力

<!-- -->

- <strong>最低耦合系统：</strong>各种脱机系统

- <strong>松散耦合系统（间接耦合系统）：</strong>如果多台计算机通过通道或通信线路实现互连，共享某些磁带、磁盘等外围设备，以较低频带在文件或数据集一级相互作用。

- <strong>紧密耦合系统（直接耦合系统）：</strong>如果多台机器之间通过总线或高速开关互连，共享主存，并有较高的信息传输速度，可以实现数据集一级、任务级、作业级的并行。

### 17. 系统机发展新机型判断方法

![](/Firefly/uploads/computer-architecture/image27.png)

- 

## 第二章 指令系统

### 1. 指令系统的优化设计的两个截然相反的方向

考法：简答、选择

1.  <strong>CISC：复杂指令系统：</strong>试图<strong>用数目少、功能强的指令来完成程序的任务</strong>。增强原有指令的功能，设置更为复杂的新指令取代原先由软件子程序完成的功能，实现<strong>软件功能的硬件化</strong>。

- <strong>设计方法：用一条指令代替一串指令</strong>

- 增加新的指令

- 增强指令的功能，设置功能复杂的指令

- 增加寻址方式

- 增加数据的表现形式

- <strong>特点：</strong>

- 指令条数多

- 指令功能强

- 寻址方式多

- 执行时间长

- CPU 控制电路复杂

- <strong>存在的问题</strong>

- 指令系统庞大

- 指令操作繁杂，速度低

- 指令系统庞大，使高级语言编译程序生成目标程序的难度大

- 指令使用的频度差别很大，许多指令利用率很低（<strong>20%-80% 规律</strong>）

2.  <strong>RISC：精简指令系统：</strong>通过<strong>减少指令种数和简化指令功能来降低硬件设计的复杂度，提高指令的执行速度</strong>。减少指令总数和简化指令的功能，降低硬件设计的复杂性，提高指令的执行速度。RISC 实现了<strong>硬件功能的简化</strong>。

- <strong>设计思路</strong>

- 只保留功能简单的指令，对复杂的不常用指令进行精简

- 功能较复杂的指令改由软件实现

- 设置大量寄存器

- 提高流水线效率

- 优势

- <strong>简化指令系统设计</strong>，适合超大规模电路实现。

- <strong>提高机器的执行速度和效率</strong>。

- <strong>降低设计成本</strong>，提高了系统的可靠性。

- <strong>直接支持高级语言的能力</strong>，简化编译程序的设 计

- 不足

- 指令的条数减少，使原来在 CISC 上由单一指令完成的功能需要多条 RISC 的指令才能完成，这样<strong>增加了汇编语言、机器语言的条数，加大了信息数量</strong>。

- 采用 RISC 的指令编写的程序，<strong>占用了更大的存储空间</strong>。

- RISC 机器上的<strong>编译程序要比 CISC 机器更难写</strong>。

### 2. RISC 的基本原则和快的实质

考法：简答、选择

<strong>设计原则</strong>

- 选择使用<strong>频度较高</strong>、最有用，及<strong>实现简单</strong>的指令。

- 每条指令都在<strong>一个机器周期内</strong>完成的指令。

- <strong>减少指令寻址方式</strong>的种类，简化指令格式，使指 令的长度相同。

- <strong>增加通用寄存器</strong>的数量，减少访问存储器操作。

- <strong>大量采用硬联</strong>控制，提高执行速度。

- 通过<strong>优化和精简</strong>指令设计支持的<strong>编译程序</strong>，能有效地为高级语言生成机器语言程序。

<strong>RISC 快的实质：</strong>虽然指令条数 $IC$ 可能增加，但$\mathbf{CPI}$<strong>大幅下降</strong>，时钟周期也可缩短，因此 $IC\  \times \ CPI\  \times \ T$ 的总执行时间降低。

![](/Firefly/uploads/computer-architecture/image28.png)

### 3. RISC 采用的基本技术

考法：简答、选择

- 遵循按 RISC 机器一般原则设计的技术。

- 在逻辑上采用硬联实现和微程序固件实现相结合的技术。

- 大多数简单指令用硬连线方式实现，功能较复杂的指令用微程序解释实现。

- 在 CPU 中设置数量较大的寄存器组，并采用<strong>重叠寄存器窗口</strong>的技术。

- <strong>重叠寄存器窗口技术：实现方法：</strong>

- 指令的执行采用流水和延迟转移技术

- 采用高速缓冲存储器 Cache

- 采用优化编译系统设计的技术

### 4. 重叠寄存器窗口

考法：选择

- <strong>目的：</strong>减少过程调用时保存/恢复寄存器和参数传递的访存开销。

- <strong>实现方法：</strong>将设置的大量的寄存器，分成多个组和全局区；每个组中分高、本地、低三个区；相邻组的高、低区重叠，加速参数与结果的传递。在每个程序使用的几个窗口中：

- 有一个窗口是与前一个程序共用（高区与父进程重叠）

- 有一个窗口是与后一个程序共用（低区与子进程重叠）

- 每一个程序可以访问：

- 1 个公共窗口（全局）

- 1 个私有窗口（本区）

- 2 个重叠窗口（高区与父进程重叠、低区与子进程重叠）

  ![](/Firefly/uploads/computer-architecture/image29.png)

  ![](/Firefly/uploads/computer-architecture/image30.png)

- 为了使流水线不断流，在转移指令后插入一条没有数据相关、控制相关的指令，而转移指令被延迟执行，这种技术为<strong>延迟转移技术。</strong>

- <strong>延迟转移技术</strong>和<strong>指令流调整技术</strong>实际上都是优化编译系统的典型例子，设计高质量的编译程 序是 RISC 系统设计的关键之一。

- <strong>效果：</strong>节省了保存现场和恢复现场等辅助时间；大量减少了原先由于程序调用引起的访存的次数

## 第三章 标量处理机

### 1. 重叠和顺序解释的异同

考法：简答、选择

<strong>取指过程：</strong>

![](/Firefly/uploads/computer-architecture/image31.png)

<strong>顺序：</strong>各条机器指令之间顺序串行地执行，执行完一条指令后采取出下条指令来执行，而且每条指令内部的各个微操作也是顺序串行地执行

![](/Firefly/uploads/computer-architecture/image32.png)

- 控制简单

- 但速度慢、各部件利用率低。

<strong>重叠：</strong>在解释第 k 条指令的操作<strong>完成之前</strong>，就可开始解释第 k+1 条指令

![](/Firefly/uploads/computer-architecture/image33.png)

- 不能加快一条指令的实现

- 但能加快相邻两条以至一段程序的解释

| <strong>项目</strong> | <strong>顺序解释</strong> | <strong>重叠解释</strong> |
|----|----|----|
| 执行方式 | 一条指令全部完成后才开始下一条 | 第 k 条指令未完成前即可开始第 k+1 条部分解释 |
| 对单条指令 | 不加快单条指令 | 通常也不加快单条指令 |
| 对程序整体 | 速度慢、部件利用率低 | 缩短相邻指令间隔，提高吞吐率 |
| 硬件要求 | 控制简单，部件可复用 | 需相对独立的取指/分析/执行部件及同步控制 |
| 主要问题 | 效率低 | 访存冲突、数据相关、转移相关、同步控制 |

### 2. 重叠和流水概念及工作原理

考法：选择

<strong>重叠：</strong>在解释第 k 条指令的操作完成之前，就可开始解释第 k+1 条指令

- <strong>工作原理：</strong>在时间上，让前一条的“分析”过程与后一 条的“取指令”重叠在一起，缩短相邻两条指令的解释时间。

  <strong>流水：</strong>流水是重叠的延伸，在一个任务完成以前就可以开始一个新的任务。

- <strong>工作原理：</strong>将一次重叠分解为更多的子过程（取指、译码、取操作数、执行）

- 流水线理想状态下，每个时钟周期可流出一个结果；它提高吞吐率，不一定降低单个任务延迟。

- 流水线基本阶段常见为 IF 取指、ID 译码/读寄存器、EX 执行/地址计算、MEM 访存、WB 写回。

### 3. 一次重叠、二次重叠的概念

考法：选择

![](/Firefly/uploads/computer-architecture/image34.png)

- <strong>一次重叠：</strong>在任何时刻，指令分析部件和指令执行部件，<strong>只有相邻两条指令在重叠解释</strong>的方式，称为 <strong>“一次重叠”</strong>

- 例如第 k 条执行与第 k+1 条分析重叠。

- <strong>一次重叠的特点</strong>：

- <strong>节省硬件</strong>，机器内指令分析部件和指令执行部件均只需一套，也简化了控制。

- 在一次重叠中，要求分析指令、执行指令的时间要<strong>尽可能等长</strong>，重叠方式才能有较高的效率。但是在一般情况下，分析指令和执行指令的时间不等长。

- 采用重叠方式的机器大多采用“一次重叠”，若达不到速度要求，则改用流水线。

  ![](/Firefly/uploads/computer-architecture/image35.png)

- 二次重叠：任一时刻可有三条指令处于不同解释阶段

- 例如第 k 条执行、第 k+1 条分析、第 k+2 条取指。

- 一次重叠硬件开销较小、控制较简单，但要求分析与执行时间尽量均衡。

### 4. 重叠对组成的要求

考法：简答、选择

- <strong>解决可能存在的访存冲突：</strong>

  ![](/Firefly/uploads/computer-architecture/image36.png)

- <strong>操作数和指令分存于两个独立编址且可同时访问的存储器</strong>，有利于实现指令保护，增加总线 控制和软件设计的复杂性

- <strong>采用多体交叉主存结构：</strong>当第 k 条指令所需的操作数与 K+1 条指令不在同一体内，仍可再一个主存周期内取得，从而实现重叠；若两者共存于一体则无法重叠

- <strong>增设指令缓冲寄存器</strong>，则主存空闲时可预取下 一条或几条指令于 Cache 中。

- 在硬件上保证有独立的指令分析部件和指令执行部件；<strong>解决控制的同步</strong>：

- 为了实现重叠方式，处理机的组成也应适应其需要的结构，增大一定的硬件开销。需要有<strong>独立的取指令部件、分析指令部件、执行指令部件</strong>。

- 保证<strong>任何时候只是“分析 k+1”与“执行 k”的重叠</strong>。

- <strong>解决转移指令的处理问题</strong>

- 采用重叠方式的机器中，应尽量减少使用条件转移语句。

- 若出现条件转移语句，可使用延迟转移技术等

- <strong>指令相关的处理</strong>，相关包括：指令相关、操作数相关。为了实现两条指令在时间上的重叠解释

- 需要付出硬件代价

- 要处理好指令可能存在的相关

- 合理安排好指令顺序及指令微操作的时间关系，使“分析”和“执行”所需的时间 尽可能匹配，以提高重叠的效率

### 5. 重叠相关的两种解决方案并用系统设计原理解释原因

考法：选择、填空、简答

- <strong>指令相关：</strong>后一指令的内容受前一指令的执行结果影响而产生的关联，造成两条指令不能同时解释。<strong>相关处理：</strong>

- 程序运行过程中<strong>不允许修改指令</strong>

- 除可解决指令相关，也可实现程序的可再入性和程序的递归调用。

- 灵活性差

- <strong>设置一条“执行”指令</strong>，将指令相关转化成操作数相关来解决

- <strong>操作数相关：</strong>两条指令的数据有了关联，造成两条指令不能同时解释。

- <strong>主存空间数相关：</strong>相邻两条指令对同一主存单元进行“先写后读”而出现的关联

- <strong>处理：推后读</strong>，推后第 k+1 条指令的读操作数

  ![](/Firefly/uploads/computer-architecture/image37.png)

- <strong>通用寄存器空间数相关：</strong>假设“分析”、“执行”与主存周期一样都是 4 拍

  ![](/Firefly/uploads/computer-architecture/image38.png)

- <strong>处理：</strong>

- <strong>推后读（速度慢）</strong>若后一条指令要读前一条尚未写回的数据，则暂停后一条读操作，直到写入完成。优点是简单；缺点是降低吞吐率

  ![](/Firefly/uploads/computer-architecture/image39.png)

- 把“分析 k+1”推后到“执行 k”结束时开始

- 把“分析 k+1”只推后到“执行 k”把结果送入 L3 时

- <strong>增设相关专用通路（需添加硬件）</strong>将前一条指令产生的结果直接送给后一条使用，不必等写回后再读出，也称旁路/转发。优点是减少停顿；缺点是增加硬件和控制复杂度

  ![](/Firefly/uploads/computer-architecture/image40.png)

### 6. 几种相关的判断及解决方法

考法：选择、填空

- <strong>转移指令的处理：</strong>造成重叠效率下降

- <strong>解决方法：</strong>

- 尽可能不使用无条件转移指令；尽可能使用不成功的条件转移指令

- 分支预测技术，多分支执行技术

- 延迟转移技术

- <strong>指令相关的处理：</strong>后一指令的内容受前一指令的执行结果影响而产生的关联，造成两条指令不能同时解释。

- <strong>原因：</strong>Von Neumann 型机器允许在执行中修改指令，造成经第 K 条指令的执行来形成第 K+1 条指令

- <strong>解决：</strong>

- 不允许修改指令

- 除可解决指令相关，也可实现程序的可再入性和程序的递归调用。

- 灵活性差

- <strong>主存空间数相关：</strong>相邻两条指令对同一主存单元进行“先写后读”而出现的关联

- <strong>解决方法：</strong>推后读（推后“分析 K+1”读）

- 具体方法：由存控给读数、写数申请安排不同的访存优先级来解决。

- 通常很多机器都将访存优先级依次定为通道申请、写数、读数、取指。

- 只要将写数级别安排成高于读数级别，则自动实现了推后读

- <strong>通用寄存器组相关处理</strong>

- 操作数相关：

- 推后读（速度慢）

- 设置“相关专用通路”（需添加硬件）

- 基址/变址值相关：

- 推后法：

- 相关专用通路：

| <strong>相关类型</strong> | <strong>判断方法</strong> | <strong>常见解决</strong> |
|----|----|----|
| 数据相关/写后读 RAW | 后指令读的寄存器/存储单元正是前指令要写的结果 | 推后读、旁路/转发、编译调度 |
| 写后写 WAW | 两条指令写同一目的单元，后写必须最后生效 | 按序写回、寄存器重命名 |
| 读后写 WAR | 前指令还未读，后指令先写同一单元会破坏前读值 | 按序读、寄存器重命名 |
| 结构相关 | 同一时刻多条指令争用同一功能部件/存储端口 | 增加资源、分离 I/D Cache、多体存储、停顿 |
| 控制/转移相关 | 分支改变 PC，使预取指令可能作废 | 延迟转移、分支预测、清空流水线、提前计算转移地址 |

### 7. 流水线分类

考法：选择、填空

![](/Firefly/uploads/computer-architecture/image41.png)

- <strong>按扩展方向：</strong>

- 向下扩展：把<strong>子过程</strong>进一步<strong>细分</strong>；

- 向上扩展：在<strong>多个处理机</strong>之间进行流水

  ![](/Firefly/uploads/computer-architecture/image42.png)

- <strong>按流水处理的级别不同：</strong>

- <strong>部件级流水：</strong>构成部件内的各个子部件之间的流水，如运算器内浮点加法流水线。

  ![](/Firefly/uploads/computer-architecture/image43.png)

- <strong>处理机级流水：</strong>指构成处理机的各个部件的流水，如“取指”、“分析”、“执行”间的流水。

  ![](/Firefly/uploads/computer-architecture/image44.png)

- <strong>系统级流水：</strong>构成计算机系统的多个处理机之间的流水，也称为宏流水

- <strong>按功能分类：</strong>

- 单功能流水线：只能完成一种固定功能

- 多功能流水线：流水线的各段通过不同的连接 实现不同的功能

- <strong>按所各段之间是否有反馈回路分类：</strong>

- 线性流水线：各段串行连接，各段只流过一次，没有反馈回路

- 非线性流水线：：某些功能段有反馈回路，可能多 次经过某个段。

- <strong>按控制方式：</strong>

- 同步流水线

- 异步流水线

- <strong>按工作方式分类：</strong>

- 静态流水线：某一时间内各段只能按一种功能 连接流水，只有等流水线<strong>全部流空后，才能切换</strong>成按另一种功能连接流水。单<strong>功能流水线必是静态的</strong>

  ![](/Firefly/uploads/computer-architecture/image45.png)

- 动态流水线：允许在同一时间内各段按不同运算或功能连接。<strong>动态流水线必是多功能流水线</strong>

  ![](/Firefly/uploads/computer-architecture/image46.png)

- <strong>按所具有的数据表示</strong>

- <strong>标量流水处理机：</strong>没有向量数据表示，只能用标量循环方式来对向量、数组进行处理

- <strong>向量流水处理机：</strong>具有向量数据表示，设置有向量指令和向量运算硬件，能对向量、数组中的各个元素流水地处理。是向量处理机和流水技术的结合

### 8. 流水线特点

考法：选择

- 一条流水线由多个流水段组成 (多段)

- 每个流水段有专门的功能部件对指令进行某种加工 (专件)

- 流水线工作阶段可分为建立、满载和排空三个阶段 (三阶段)

- 在理想情况下，当流水线充满后，每隔Δt 时间将会有一个结果流出流水线。

- 流水技术适用于大量重复程序过程。只有不断提供输入，才能连续流水输出，机器效率才能充分发挥

### 9. 解决影响流水线瓶颈的方法

考法：选择、填空

![](/Firefly/uploads/computer-architecture/image47.png)

- <strong>将瓶颈子过程再细分：</strong>将耗时最长的功能段拆成多个更均衡的子段。比如：将 B 段再细分为三个段$B_{1}$、$B_{2}$和$B_{3}$，该指令流水线的最大吞吐率就变成$1/\Delta t$。

  ![](/Firefly/uploads/computer-architecture/image48.png)

- <strong>瓶颈子过程重复设置：</strong>多个功能部件并行处理，减少结构冲突。可采用三套 B 段并联，每隔$\Delta t$轮流给一个瓶颈段分配任务，使它们仍可每隔$\Delta t$解释完一条指令。其流水线的最大吞吐率也是$1/\Delta t$

  ![](/Firefly/uploads/computer-architecture/image49.png)

### 10. 流水线性能分析

考法：会画时空图及计算

<strong>吞吐率（</strong>$\mathbf{Tp}$<strong>）</strong>：流水线单位时间内流出的任务数或结果数。$Tp = \frac{n}{T_{k}}$，$n$表示任务数，$T_{k}$表示完成$n$个任务所用的时间，$k$表示流水线的段数，$\Delta t_{i}$为每个流水段所需的时间。

<strong>最大吞吐率：</strong>流水线正常满负荷工作时，单位时间内流出的最大结果数。$Tp_{\max}$

<strong>实际吞吐率：</strong>从启动流水线开始到流水线操作结束，单位时间内能流出的任务数或结果数。

- <strong>各段执行时间相等，</strong>输入连续任务情况下，完成 n 个连续任务需要的总时间为：$T_{k} = (k + n - 1)\Delta t$，

- （实际）吞吐率：$Tp = \frac{n}{(k + n - 1)\Delta t}$

- 最大吞吐率为：$Tp_{\max} = \lim_{n \rightarrow \infty}\frac{n}{(k + n - 1)\Delta t} = \frac{1}{\Delta t}$

- <strong>各段执行时间不相等</strong>，输入连续任务情况下，且 各个子过程所需时间分别为$\Delta t_{1},\Delta t_{2},\ldots,\Delta t_{k}$ ，时钟周期应为$\max{\{\Delta t_{1},\Delta t_{2},\ldots,\Delta t_{k}\}}$

- （实际）吞吐率：$Tp = \frac{n}{\sum_{i = 1}^{k}{\Delta t_{i}} + (n - 1)\max\left\{ \Delta t_{1},\Delta t_{2},\ldots,\Delta t_{k} \right\}}$

- 最大吞吐率：$Tp_{\max} = \frac{1}{\max\left\{ \Delta t_{1},\Delta t_{2},\ldots,\Delta t_{k} \right\}}$

- 流水线的最大吞吐率是取决于子过程所经过的时间 $\Delta t$。当各功能段时间不同时，最大吞吐率取决于<strong>最慢子过程</strong>所需时间。最慢子过程称为<strong>“瓶颈”子过程</strong>。

- 实际吞吐率总是低于最大吞吐率，因为流水线从 始启动到流出第一个结果，需要经过<strong>建立阶段和排空阶段</strong>。

- $Tp = Tp_{\max}/(1 + \frac{k - 1}{n})$，当$k \ll n$时，$Tp \approx Tp_{\max}$

- 如果流入流水线的是<strong>周期性的任务</strong>，即每流入$n$条 指令之后，延迟$\Delta T$的时间，再流入$n$条指令，延迟 $\Delta T$之后，再流入$n$条指令，周而复始，则这时的流水线的实际吞吐率$Tp$就应为：$Tp = \frac{n}{T + \Delta T} = \frac{n}{(k + n - 1) \cdot \Delta t + \Delta T}$

  <strong>加速比（</strong>$\mathbf{Sp}$<strong>）</strong>：流水线工作<strong>相对于顺序串行</strong>工作方式，速度提高的比值。设流水线由$k$段组成，共完成$n$条指令

- 若<strong>各功能段时间相等</strong>，均为 则流水线的加速比为：$Sp = \frac{n \cdot k \cdot \Delta t}{k \cdot \Delta t + (n - 1) \cdot \Delta t} = \frac{k \cdot n}{k + n - 1}$

- 若<strong>各功能段时间不相等</strong>，记为 则流水线的加 速比为：$Sp = \frac{n\sum_{i = 1}^{k}{\Delta t_{i}}}{\sum_{i = 1}^{k}{\Delta t_{i}} + (n - 1)\Delta t_{\max}}$

- 当各功能段时间相同时，最大加速比为：$Sp_{\max} = \lim_{n \rightarrow \infty}\frac{k \cdot n}{k + n - 1} = k$。

  可以看出，当$n \gg k$时，流水线的加速比$Sp\,$才接近于流水线的段数$k$。因此，在$n \gg k$的前 提下，增大流水线的段数$k$，可以提高流水线的加速比$Sp$ 。

  <strong>效率（</strong>$\mathbf{\eta}$<strong>）：</strong>指流水线的设备利用率。在整个运行时间里，有多少时间流水线设备真正用于工作，是<strong>实际使用时间占整个运行时间之比</strong>。由于流水线有建立和排空时间，在连续完成$n$个任务的时间里，各段并不是满负荷工作的，因此流水线的<strong>效率一定小于 1</strong>。

  如果是$k$段线性流水线，且各段经过时间相同，则在$T$时间里，流水线各段的效率都相同，均为 $\eta_{0}$，即：

  $$
  \eta_{1} = \eta_{2} = \ldots = \eta_{k} = \frac{n \cdot \Delta t_{0}}{T} = \frac{n}{k + n - 1} = \eta_{0}
  $$
  <strong>整个流水线的效率：</strong>$\eta = \frac{\eta_{1} + \eta_{2} + \ldots + \eta_{k}}{k} = \frac{k \cdot \eta_{0}}{k} = \frac{k \cdot n\Delta t_{0}}{k \cdot T}$，从几何上，效率是$\eta = \frac{n\text{个任务的时空区面积}}{k\text{个段的总时空面积}}$，与吞吐率类似，只有当$n \gg k$时，$\eta$才趋近于 1。<strong>对于线性流水且每段经过时间相等时，流水线的效率正比于吞吐率</strong>，即：

  ![](/Firefly/uploads/computer-architecture/image50.png)

  如果各段经过的时间不相等，其中“瓶颈”段时间为$\Delta t_{j}$，完成$n$条指令的解释。整个流水线的效率为：

  ![](/Firefly/uploads/computer-architecture/image51.png)

  例题：

  ![](/Firefly/uploads/computer-architecture/image52.png)

  ![](/Firefly/uploads/computer-architecture/image53.png)![](/Firefly/uploads/computer-architecture/image54.png)

  ![](/Firefly/uploads/computer-architecture/image55.png)![](/Firefly/uploads/computer-architecture/image56.png)

### 11. 流水线的相关处理

考法：选择、填空

- <strong>局部性相关：</strong>只影响少数相邻指令，如数据相关、结构相关；处理方式包括停顿、旁路、调度、资源复制。<strong>不会改动指令缓冲 器中预取到的指令内容</strong>，也称数据相关。

- <strong>局部性相关的处理：</strong>

- <strong>推后后续指令对相关单元的读</strong>，直至在先的指令写入完成

- <strong>设置相关专用通路</strong>，将运算结果经相关专用通路直接送入所需部件

- 指令进入流水线的顺序和流出顺序相同；

- 一定程度上解决了“写后读”相关

- 吞吐率、效率仍然低

- 不同流动方式下的局部相关处理方案：

  ![](/Firefly/uploads/computer-architecture/image57.png)

- <strong>顺序流动方式（同步流动方式）：</strong>任务流出流水线的顺序保持与流入流水线的顺序一致。如：一串指令“h,i,j,k,l,m,n,…”，h 和 j 发生数相关，j 流到读段时，j 及其后的指令必须停下来，直到 h 到达写段并完成写入。<strong>实质：推后读</strong>，控制简单，但效率和吞吐率下降。

- <strong>异步流动方式：</strong>任务流出流水线的顺序与流入顺序不同。如上例：j 之后与 j 不相关的指令可越过 j 继续流动。流水线的吞吐率和效率都未下降。另外：非线性流水线中，经过段数少的或者执行时间短的指令可以越过段数多或时间长的指令向前流动。

- 指令进入流水线的顺序和流出顺序不相同；

- 保证流水线不“断流”

- 处理好可能引起的新相关“写 - 写”、“读 - 写”

- 异步流动方式中的相关：

- 先写后读相关（RAW）

- 先读后写相关（WAR）

- 写—写相关（WAW）

- <strong>全局性相关：</strong>已进入流水线的转移指令（尤其是条件转移指令）和其后续指令之间的相关。<strong>需要重新预取指令进入指令缓冲寄存器</strong>，也称转移相关。

- <strong>猜测法</strong>，又称分支预测技术，猜取第 i+1 条指令或第 p 条指令所在分支继续向前流动。

- 猜测原则：

- 知道分支的概率，猜概率高者

- 不知道概率或两者概率相近时，宜选不成功转移分支，因为它已预取进指缓。

- 加快执行：准备两套转移目标指缓

- 猜测法如何恢复分支点现场：

- 设置后缓寄存器（保存分支点的现场）

- 只完成译码和去操作数，不运算

- 解释到运算完毕，但不回送结果

- <strong>加快和提前形成条件码：</strong>这特别适合于循环程序在判断循环是否结束时的转移情况

- 加快单条指令内部条件码形成

- 运算型指令：乘除结果的正、负、零值

- 加快程序段内条件码的形成

- 将产生条件码的指令提前到与其不相关的其它指令之前

- 循环控制：提前计算循环变量进行比较，需增加专用的条件码寄存器

- <strong>延迟转移技术：</strong>用软件方法将转移指令与其前面不相关的指令 交换位置。

- <strong>加快短循环程序的处理</strong>

- 将长度小于指缓的循环程序一次性放入指缓，并暂停预取指令

- 循环出口条件转移指令恒猜循环分支

### 12. 异步流动流水线和同步流水线及可能出现的相关

考法：选择、填空

- 同步流水线的相关：（这个看的往年 rk3 的笔记）

- 先读后写相关（WAR）

- 写—写相关（WAW）

- 异步流动方式的相关：

- 先写后读相关（RAW）

- 先读后写相关（WAR）

- 写 - 写相关（WAW）

### 13. 单功能非线性流水线的调度

考法：填空、选择

<strong>非线性流水线：</strong>非线性流水线无法仅用流水线连接图唯一表示。同一任务可能多次使用同一功能段，且功能段连接不是简单串行。

![](/Firefly/uploads/computer-architecture/image58.png)

<strong>预约表：反映了一个任务使用流 水线各功能段的时间关系</strong>。行表示功能段，列表示时钟周期，×表示某任务在某周期使用某段。

- 一行中可以有多个“×”，表示一个任务在不同时钟周期重复使用了同一流水段；

- 一列中有多个“×”，表示在同一个时钟周期同时占用了多个流水段

  ![](/Firefly/uploads/computer-architecture/image59.png)

  <strong>根据预约表写出延迟禁止表 F：</strong>F={各段所需间隔的拍数}，确定方法：把预约表的每一行中任意<strong>两个“X”之间的距离</strong>都计算出来，去掉重复的，由这种数组成的 一个数列就是这条非线性流水线的禁止向量

  <strong>由延迟禁止表形成冲突向量 C：</strong>禁止使用的间隔拍数，用$\mathbf{C=(}\mathbf{C}_{\mathbf{m}}\mathbf{C}_{\mathbf{m - 1}}\mathbf{\ldots}\mathbf{C}_{\mathbf{2}}\mathbf{C}_{\mathbf{1}}\mathbf{)}$来表示，1 表示冲突，0 表示不冲突。可以用一个有$m$位的二进 制向量来表示，这个向量称作冲突向量，其中$\ m$ 是禁止向量中的最大值。对于一张$k$列的预约表，有 $m \leq k - 1$。

  ![](/Firefly/uploads/computer-architecture/image60.png)

  <strong>由所有的向量图画出状态图：</strong>由冲突向量可以构造一张状态图。把初始冲突向量$C_{0}$送入一个 n 位逻辑右移移位器。$C_{0}$每过一拍逻辑右移一位，最左侧补 0：

- 若移出 0，则允许后续指令进入流水线，同时将移位器中的值再与初始向量$C_{0}$按位“或”，形成新的 冲突向量$C$；

- 若移出“1”，则说明以此启动距离向流水线输入任务会发生冲突，因此，不做任何处理

- 重复上述步骤，直到不再生成新的冲突向量

  ![](/Firefly/uploads/computer-architecture/image61.png)

  <strong>由状态图形成最佳调度方案：</strong>状态图中的任何一个闭合回路即为一个调度周期策略：

  ![](/Firefly/uploads/computer-architecture/image62.png)![](/Firefly/uploads/computer-architecture/image63.png)

## 第四章 向量处理机

### 1. 向量流水线的处理方式

考法：选择、填空

以$D = A \times (B + C)$ 为例：

| <strong>方式</strong> | <strong>处理过程</strong> | <strong>是否利于流水</strong> | <strong>特点</strong> |
|----|----|----|----|
| <strong>横向处理</strong> | 逐个元素完成全部运算，如先算第 i 个 D，再算第 i+1 个 | 不利于流水 | 存在前后操作相关，流水线难以连续工作 |
| <strong>纵向处理</strong> | 先对全向量完成一种操作（如$K = B + C$），再对全向量完成下一种操作 | 利于流水 | 每拍处理一对/一组元素，适合向量寄存器和流水线 |
| <strong>分组纵横处理</strong> | 把长向量分成若干组，使每个组都能装入向量寄存器中，<strong>每组内部纵向处理</strong>，组间采用软件方法编制循环程序的方式<strong>依次循环处理</strong> | 实用 | 解决<strong>向量长度超过寄存器容量</strong>、<strong>主存与流水线速度不匹配</strong>问题 |

### 2. 向量处理机并行操作条件及采用链接技术的条件

考法：选择、填空

<strong>向量处理机并行操作条件：</strong>

- 无功能部件冲突

- 无源向量寄存器冲突

<strong>链接技术：</strong>当前一条指令的结果寄存器可以作为后继指令的操作数寄存器时，多条有数据相关的向量指令并行执 行。

<strong>条件：</strong>

- 在进行链接的时候，只有<strong>在前一条向量指令的第一个结果元素送入结果向量寄存器的那一个时钟周期</strong>才可以进行链接，若错过该时就不能进行链接。

- <strong>运算开始时间→第一结果分量同时到达：</strong>只有<strong>当前一条向量指令全部执行完毕</strong>，释放相应的向量寄存器资源后才能执行后面的向量指令。要求先行的两条向量指令产生运算结果的时间必须相等，即<strong>要求有关向量功能部件的延迟时间相等</strong>。

- 只有所有可以链接执行的向量指令的<strong>向量长度相等</strong>时，它们之间才 能链接执行，否则它们之间也不能链接执行。

- 向量指令<strong>先写后读相关</strong>

  ![](/Firefly/uploads/computer-architecture/image64.png)

  <strong>链接本质：</strong>不等前一条整条向量全部写回，再启动后一条，而是前一条产生第一个元素结果后，后一条即可开始处理该元素。

  <strong>例子：</strong>如果每一个时钟周期的延迟称为 1 拍，在 Cray-1 机中访存与浮点数加法指令需要 6 拍，浮点乘需要 7 拍，假如向量寄存器的存与取的传送各为 1 拍，内存的传送需要 1 拍，分别计算上述三条指令不同执行方式所需的时间。（串行，并行加串行，并行加链接）

  ![](/Firefly/uploads/computer-architecture/image65.png)

  <strong>全串行：</strong>2\*\[(1+6+1)+N-1\]（V2和V3各自做）+\[(1+7+1)+N-1\]=3N+22

  <strong>并行加串行：</strong>\[(1+6+1)+N-1\]（V2和V3同时做）+\[(1+7+1)+N-1\]=2N+15

  <strong>并行加链接：</strong>(1+6+1)+(1+7+1)+N-1=N+16

### 3. 阵列处理机的定义

考法：选择

阵列处理机是将<strong>大量重复设置的处理单元（PE）</strong>，按一定的方式<strong>互连成阵列</strong>，在<strong>单一控制部件（CU）</strong> 的控制下，<strong>对各自所分配的不同的数据并行执行相同操作</strong>。照 Flynn 分类法，它属于 SIMD。

- <strong>利用资源重复方法，开发并行性中的同时性：</strong>所有 PE 操作相同，数据不同；与流水线的方法不同点是时间重叠；侧重向量处理方面；

- <strong>连接模式：</strong>ICN 的不同连接模式确定阵列处理机的不同结构，影响并行算法的实现方法；ICN 的设计成为并行处理的重点问题之一

- <strong>专用性：</strong>根据一定的互连网络连接模式与一定的算法相 联系，用于完成某一专用的功能。这样的并行处理机属于专用计算机。

- <strong>复合性：</strong>一个完整的系统是由三个部分复合而构成的。

- 多个处理单元组成阵列，并行地处理向量

- 功能极强的控制部件实际是一台标量处理机

- 系统的管理功能由高性能单处理机担负

### 4. 阵列处理机的构成

考法：选择

阵列处理机通常由<strong>1 个控制器 (CU)，n 个处理器 (PE)，m 个存储模块 (M) 及 1 个互连网络 (ICN)</strong>组成。阵列处理机结构的差异主要体现在存储器的组 成方式和互连网络的作用不同。<strong>由存储器的组成方式不同</strong>互连网络的作用不同进行分类

![](/Firefly/uploads/computer-architecture/image66.png)

- 分布存储器的并行处理结构

- <strong>存储模块由每个 PE 自带</strong>

- <strong>管理处理机 SC 负责系统资源的管理功能。</strong>

- <strong>数据应预先分配到各个处理单元的局部存储器 PEM 中</strong>

- <strong>ICN 实现 PE 到 PE 的通信，从而实现数据的传送、交换</strong>

  ![](/Firefly/uploads/computer-architecture/image67.png)

- 共享存储器的并行处理结构

- <strong>k 个存储分体集中组成系统存储器</strong>

- <strong>数据应合理分配到各个存储分体中</strong>

- <strong>n 个 PE 共享 k 个存储分体</strong>

- <strong>ICN 实现了 PE 到 PEM 的通信，使尽可能多的 PE 能 无冲突地访问共享的主存模块。又称对准网络</strong>

- 控制部件 CU：解释程序、广播指令、控制所有 PE 同步执行。

- 处理单元阵列 PE：每个 PE 含运算逻辑、寄存器和可能的局部存储器。

- 互连网络 ICN：实现 PE 之间或 PE 与存储模块之间的数据交换。

- 输入输出与系统管理部件：完成装入、输出、控制和管理。

### 5. Illiac IV 阵列处理机结构特点

考法：选择、填空

典型 SIMD 阵列处理机，由一个控制器控制多个处理单元并行工作。

- 闭合螺线阵列

- 任意单元的最短距离不超过 7 步

- 一般来讲：$N = \sqrt{N} \times \sqrt{N}$个处理单元组成的阵列中，任意两个处理单元之间的最短距离不会超过$\sqrt{N} - 1$步

- 处理单元为通常的累加型运算器，把<strong>累加寄存器 RGA</strong>中的数据和存储器来的数据进行操作

- <strong>数据传输寄存器 RGR</strong>，用于处理器单元之间数据传输

### 6. 互连网络的设计目标

考法：选择、简答

<strong>定义：</strong>互连网络是一种由开关元件按照一定的拓扑结构和控制方式构成的网络，用于实现计算机系统内部多个处理机或多个功能部件之间的相互连接。

<strong>设计目标：</strong>

- <strong>低成本：</strong>结构不要复杂，降低成本；

- <strong>高灵活性：</strong>互连灵活，满足算法和应用的需要；

- <strong>低延迟：</strong>处理单元间信息交换所需传送步数要尽量少，提高速度；

- <strong>模块性：</strong>互连网络采用规整单一的基本构件组成；模块化，可扩充性；

### 7. 互连网络应抉择的几个问题

考法：选择、填空

- <strong>操作方式（定时方式）：</strong>PE 的操作：同步（阵列处理机）、异步、同步/异步组合（后面这两个适合多处理机）

- <strong>控制策略：</strong>开关单元的控制：集中控制（多数采用）、分布控制

- <strong>交换方法：</strong>数据传输方法：线路交换（比较常用）、包交换、线路/包交换组合

- <strong>拓扑结构：</strong>根据出、入端可以连接的模式，分为静态和动态两种

- 静态拓扑结构：两个节点间的链路是固定的

  ![](/Firefly/uploads/computer-architecture/image68.png)![](/Firefly/uploads/computer-architecture/image69.png)

- 动态拓扑结构：两个节点间的链路通过置定网络的开关单元状态<strong>可以重新配置</strong>

### 8. 互连网络操作方式

考法：选择、填空

- 同步操作（阵列处理机）：所有结点在统一时钟或控制步调下交换数据，适合 SIMD 规则通信。

- 异步操作（多处理机）：各结点可按需要独立通信，灵活但控制复杂。

- 同步/异步组合（多处理机）

### 9. 单级互连网络及其函数

考法：计算、选择

- <strong>基本互连函数举例</strong>

![](/Firefly/uploads/computer-architecture/image70.png)![](/Firefly/uploads/computer-architecture/image71.png)

- <strong>基本的单级互连网络：</strong>只有一级交换或固定连接，常用互连函数表示输入结点到输出结点的映射。

- <strong>立方体单级网络（交换互连网络）</strong>

  ![](/Firefly/uploads/computer-architecture/image72.png)![](/Firefly/uploads/computer-architecture/image73.png)

  ![](/Firefly/uploads/computer-architecture/image74.png)![](/Firefly/uploads/computer-architecture/image75.png)

- <strong>PM2I 单级网络（循环移数网络）</strong>

  ![](/Firefly/uploads/computer-architecture/image76.png)![](/Firefly/uploads/computer-architecture/image77.png)

- <strong>混洗交换单级网络</strong>

  ![](/Firefly/uploads/computer-architecture/image78.png)![](/Firefly/uploads/computer-architecture/image79.png)

  ![](/Firefly/uploads/computer-architecture/image80.png)

- <strong>蝶形单级网络</strong>

  ![](/Firefly/uploads/computer-architecture/image81.png)

  <strong>单级互连网络总结</strong>

- <strong>单级互连网络特性</strong>

- 任一单级互连网络均可表示成$N_{\text{入}} \rightarrow N_{\text{出}}$的过程。

- 任一单级互连网络可实现部分结点 (一对或几对) 间的连接，不能实现任意多对结点间的同时连接。

- <strong>单级互连网络含义：</strong>某些连接方法或拓扑结构。

- <strong>单级互连网络应用</strong>

- 利用单级互连网络的特性作为实际 ICN 的拓扑结构；

- 通过交换开关作为 ICN 的可变因素；

- 通过交换开关多次控制实现 ICN 的结点间任意互连。

### 10. 多级互连网络的几个关键技术

考法：选择、填空

目标：完成某结点与其它任一结点的连接；同时完成多对结点的连接

方法：从时间性和空间性方面开发

- <strong>循环互连网络（时间性，感觉不是很重要）</strong>

![](/Firefly/uploads/computer-architecture/image82.png)![](/Firefly/uploads/computer-architecture/image83.png)

- <strong>多级互连网络（空间性）：</strong>不同的多级互连网络反映在所采用的交换开关，拓扑结构和控制方式上有所不同。

- <strong>交换开关：</strong>是具有两个入端和两个出端的交换单元。用作各种多级互连网络的基本构件。

![](/Firefly/uploads/computer-architecture/image84.png)

- <strong>拓扑结构：</strong>不同级开关间连接方式 (单级 CIN 的连接功能)，即各级之间出端和入端相互连接的模式。

- <strong>控制方式：</strong>级控制、部分级控制、单元控制。

- <strong>分类：</strong>根据拓扑结构进行分类

- <strong>多级立方体网络（重点）</strong>

- 多级混洗交换网络

- 多级 PM2I 网络

- <strong>多级立方体网络（重点）</strong>

![](/Firefly/uploads/computer-architecture/image85.png)

根据控制方式不同，多级立方体网络有 STARAN 网络和间接二进制 n 立方体网络两种。

- <strong>STARAN</strong>网络：<strong>级控制和部分级控制</strong>

- 间接二进制 n 立方体网络：单元控制

<strong>STARAN 网络</strong>根据<strong>控制方式不同</strong>可以实现不同的功能：<strong>交换功能和移数功能</strong>。

![](/Firefly/uploads/computer-architecture/image86.png) ![](/Firefly/uploads/computer-architecture/image87.png)

### 11. 交换开关分类、控制方式

考法：选择、填空

交换开关是具有两个入端和两个出端的交换单元。用作各种多级互连网络的基本构件。

- 二功能交换单元：具有直通和交换两种功能的交换开关

- 四功能交换单元：具有全部四种功能的交换开关

  控制方式：级控制、部分级控制、单元控制。

- <strong>级控制：</strong>同一级交换开关使用同一个控制信号控制。可以构成 STARAN 交换网。

- <strong>单元控制：</strong>每个交换开关分别控制。可以构成间接二进制 n 方体网。

- <strong>部分级控制：</strong>例如，第 i 级使用 i+1 个控制信号控制 (0≤i ＜ n-1)。可以构成 STARAN 移数网。

### 12. STARAN 交换网络的交换函数和互连函数、控制信号

考法：计算、分析

STARAN 网络根据控制方式不同可以实现不同的功能：交换功能和移数功能

- 交换函数（交换控制信号为 1，直通为 0）

- 几组几元就是倒过来算。比如一组十六元就是，0-15 转到 15-0

- 二组八元 0-7 转成 9-16 这样子，倒过来算。然后最后的相加就是，两个一样都有的抵消，没有的写下来

  ![](/Firefly/uploads/computer-architecture/image88.png)![](/Firefly/uploads/computer-architecture/image89.png)

### 13. 并行存储器的无冲突访问

考法：选择、填空

- 访问需求

- 并行存取向量中各分量信息；

- 可按行、列、对角线等方法存取 (步长不一致)。

- 存在问题

- 存储器带宽限制—存储器带宽达不到向量带宽；

- 访存方式 (步长) 不同，产生访存冲突。

- 解决方法

- 采用多体交叉存储器--增加MEM带宽

- 对向量分组操作--解决MEM带宽小于向量带宽问题

- 采用适当的存储体个数

  ![](/Firefly/uploads/computer-architecture/image90.png)![](/Firefly/uploads/computer-architecture/image91.png)

![](/Firefly/uploads/computer-architecture/image92.png)![](/Firefly/uploads/computer-architecture/image93.png)

![](/Firefly/uploads/computer-architecture/image94.png)![](/Firefly/uploads/computer-architecture/image95.png)

![](/Firefly/uploads/computer-architecture/image96.png)![](/Firefly/uploads/computer-architecture/image97.png)

这里的两个 n 不一样。（第一个 n 是列数量，第二个是并行访问元素个数 m-1）

<strong>计算例题</strong>

![](/Firefly/uploads/computer-architecture/image98.png)![](/Firefly/uploads/computer-architecture/image99.png)

## 第五章 多处理机

### 1. 多处理机耦合度

考法：填空

耦合度越高，通信越方便但共享冲突和一致性问题越突出；耦合度越低，扩展性好但通信延迟大。

- <strong>紧耦合多处理机：</strong>是通过共享主存来实现处理机间通讯（主存对所有处理器有统一的地址编址），各处理机与主存经互联网络连接，因此相互间的联系是比较紧密的。

- 通信速率受限于主存的频率。

- 减少主存冲突，采用模 m 多体交叉存取；

- 各个处理机为同构型，同一类型、功能相同的多处理机；

- 是否带专用 Cache，有两种

- <strong>系统属性</strong>

- 同构/异构--PE类型相同/不同；

- 对称/非对称—每个 PE 与部分/全部的 I/O 通道连接。

- <strong>常见结构：</strong>同构对称式和异构非对称式多机系统。

- <strong>限制：</strong>PE 数量不能很多。主存带宽、IN 带宽、同步开销限制了 PE 的数量。

- <strong>访存冲突解决方案：</strong>

- 采取多体交叉访问方式，增加 PEM 数量；

- 每个 PE 自带小容量局部存储器，存放核心代码、OS 表格等，减少 PE 访存次数；

- 每个 PE 自带一个 Cache，减少 PE 访存次数

  ![](/Firefly/uploads/computer-architecture/image100.png)

- <strong>松耦合多处理机：</strong>每一台处理机都有<strong>容量较大的局部存储器</strong>，用于存储经常用的数据和指令，减少访存冲突，不同处理机间或者通过<strong>通道互连</strong>实现通信，或者通过<strong>消息传送系统（MTS）</strong>

- 松耦合多处理机较适合做粗粒度的并行计算。

- 作业可被分为若干个相对独立的任务，任务间信 息流量较少，则可在多个处理机上并行执行，即松耦 合度的多处理机系统有效。

- <strong>特点：</strong>通过消息传送系统实现机间通讯；

- 每个模块是一个独立的处理机，整个系统可看成是一个分布系统。

- <strong>互连网络：</strong>MTS 有总线、环形、多级网络等种类；

- <strong>结构：</strong>有层次和非层次两种结构

### 2. 多处理机定义以及硬件结构

考法：简答、选择

多处理机系统机是指有两台以上的处理机，<strong>共享 I/O 子系统</strong>，机间经共享主存或高速通信网络通信，在操作系统控制下，协同求解大而复杂问题的计算机系统。

多处理机系统是采用资源共享的技术途径，提高并行处理能力，属于多指令流多数据流（MIMD）。

多处理机的要求：

- <strong>硬件：</strong>保证处理机、存储器模块与 I/O 子系统之间的灵活多变的互连

- <strong>软件：</strong>综合研究算法、程序语言、编译、操作系统、指令等

  <strong>多处理机相较于阵列处理机</strong>

- <strong>并行性级别：</strong>作业、任务级，更高

- <strong>硬件结构：</strong>多个处理器要用多个指令部件控制

- <strong>算法实现：</strong>进一步挖掘更多隐含的并行性

- <strong>系统管理：</strong>更多依靠操作系统等软件手段

### 3. 机间互连形式及采用算法

考法：选择、填空

<strong>总线形式（时间分配）：</strong>PE、PEM、I/O 通道均连在总线上，采用分时或多路 转换技术实现数据传递，是最简单的连接方式。

- <strong>总线仲裁算法：</strong>

- <strong>静态优先级算法：</strong>为每一个连到总线的部件分配一固定的优先级

- <strong>固定时间片算法：</strong>把总线按固定大小时间片，轮流提供给部件使用。适合同步总线，时钟同步

- <strong>动态优先级算法：</strong>让总线上各部件优先级可根据情况按一定规则动态地改变

- <strong>先来先服务算法：按接受到访问总线请求先后顺序来响应。</strong>

- 静态优先级算法、平等算法、动态优先级算法、先来先服务算法等。对外设一般采用优先级算法；对 PE 采用均等算法。

- <strong>实现方法：</strong>

- <strong>集中式：</strong>由总线控制器控制；

- <strong>分布式：</strong>中机构分散到各 PE 中。

- <strong>提高总线效率方法：</strong>改善传输介质和增加总线数量。

- <strong>总线互连方式不适宜连接过多的处理机。</strong>

![](/Firefly/uploads/computer-architecture/image101.png)

<strong>环形互连形式：</strong>为保持总线式互连的优点，同时又能克服其不足，可以考虑构造一种<strong>逻辑总线</strong>，让各台处理机之间点点相连成环状，称环形互连：总线形成环形互连

- 点点连接，物理参数容易控制

- 适合于高带宽的光纤

![](/Firefly/uploads/computer-architecture/image102.png)

<strong>交叉开关形式（空间分配）：</strong>是总线形式的极端，<strong>总线数=PE 数+PEM 数+I/O 通道数</strong>，是一种全相联形式，控制、仲裁、转换机构均在开关中。一般来说，<strong>PE 数≥PEM 数+I/O 通道数</strong>

- <strong>改进：</strong>用一系列较小开关串联或并联，形成多级交叉开关，减少其复杂性。

- <strong>交叉开关方式不适宜连接过多的处理机。</strong>

![](/Firefly/uploads/computer-architecture/image103.png)

<strong>多端口存储器形式：</strong>将控制、仲裁、转换机构移到存储器中。每个端口与一个 PE 或 I/O 通道相连。

- <strong>多端口存储器形式不适宜连接过多的处理机。</strong>

![](/Firefly/uploads/computer-architecture/image104.png)

### 4. 多处理机的存储器组织中两种编址方式及其适应场合

考法：简答、选择

由 m 个存储器模块构成的并行存储器，存储单元的地址是按<strong>交叉方式编址</strong>的。这种地址交叉编址的方式主要有<strong>低位交叉</strong>和<strong>高位交叉</strong>两种。

![](/Firefly/uploads/computer-architecture/image105.png)

<strong>低位交叉编址：</strong>块内顺序物理地址不连续，距离为 m

- 低位交叉编址方式下，连续物理地址空间的数据被分散到各个分存储体中；

- 适用于当前执行进程是<strong>共享同一集中连续物理地址空间中的数据</strong>，如<strong>流水线、向量或阵列处理机</strong>

![](/Firefly/uploads/computer-architecture/image106.png)

<strong>高位交叉编址：</strong>块内顺序物理地址连续，总体也依次连续分布

- 高位交叉编址方式下，一段程序或数据存放在同一个模块内；

- 适用于当前执行的<strong>多个进程基本不共享数据</strong>的情况，可将存储模块中的一定数量的页面分配给某进程

### 5. 多处理机的 Cache 一致性问题

考法：选择、填空

<strong>问题定义：</strong>同一数据块可能在多个 Cache 和主存中有多个副本，当某处理机修改其中一个副本后，必须保证其他副本与主存保持一致或按一致性协议可见。

如果一个存储器满足以下 3 点，则称该存储器 是一致的。

- 处理器 P 对单元 X 进行一次写之后又对单元 X 进行读，读和写之间没有其他处理器对单元 X 进行写，则 P 读到的值总是前面写进去的值。

- 处理器 P 对单元 X 进行写之后，另一处理器 Q 对单 元 X 进行读，读和写之间没有其他写，则 Q 读到的值应该是 P 写进去的值。

- 对同一单元的写是顺序化的，即任意两个处理 器对同一单元的两次写，从各个处理器的角度看 顺序都是相同的。

  <strong>一致性问题：</strong>

- <strong>共享可写数据引起不一致性：</strong>不同处理器的 Cache 都保存有某些存储器单元的内容，当其中一个处理器修改了这些数据后，就可能产生数据的不一致。

- <strong>进程迁移引起数据不一致性：</strong>多处理机中允许将未完成的进程挂起，调度到另一处理机上执行。进程的迁移可能造成最近修改过的信息只保留在原处理机的 Cache 中，迁移后则不能正确恢复

- <strong>I/O 传输造成的数据不一致性：</strong>系统中发生部分绕过 Cache 的 I/O 操作，可能形成主存内容与 Cache 的 内容的不一致

  <strong>解决方法：</strong>

- 解决进程迁移引起的 Cache 不一致性

- <strong>禁止迁移</strong>

- 触发写回主存：进程挂起时，将该进程改写过的块<strong>强制写回主存</strong>

- 以硬件为基础实现多 Cache 一致性：关键：跟踪记录共享数据块的状态

- 监视/监听法

- 适用结构：总线型互连的多处理机

- 基本思想：利用总线播送更改主存的情况，各个 Cache 控制器通过监听总线来判断它们是否有总线 上请求的数据块。

- 实现方式：

- <strong>写作废协议：</strong>当一个处理器对某数据项进行写入时，通过广播使其他 Cache 中所有对应该数据项的副本<strong>作废</strong>

- <strong>写更新协议：</strong>当一个处理器对某数据项进行写入时，通过广播使其他 Cache 中所有对应于该数据项的副本进行<strong>更新</strong>

- 写更新和写作废协议性能上的差别主要来自：

- 在对同一个数据进行多次写操作而中间无读操作的情况下，写更新协议需进行多次写广播操作，而写作废协议只需一次作废操作。

- 在对同一 Cache 块的多个字进行写操作的情况下，写更新协议对于每一个写操作都要进行一次广播，而写作废协议仅在对该块的第一次写时进行作废操作即可。

- 写作废是<strong>针对 Cache 块</strong>进行操作，而写更新则是<strong>针对字（或字节）</strong>进行。

  ![](/Firefly/uploads/computer-architecture/image107.png)![](/Firefly/uploads/computer-architecture/image108.png)

- 目录表法：一种专用的数据结构，用于记录可以进入 Cache 的每个数据块的状态、哪些处理器有该块的副本以及是否修改过等信息。

- <strong>适用结构：</strong>非总线型互连的多处理机

- <strong>基本思想：</strong>根据目录表，一个处理机在写入自身 Cache 的同时，只需有选择地通知其他存有此数 据块的 Cache 将副本作废或更新。

- 全映像目录表

  ![](/Firefly/uploads/computer-architecture/image109.png)

- 有限目录表法

- 链式目录表法

  ![](/Firefly/uploads/computer-architecture/image110.png)

- 

### 6. 表达式的树形流程图

考法：会画图并计算

![](/Firefly/uploads/computer-architecture/image111.png)

- 画法：叶结点为操作数，内部结点为运算符，根结点为最终结果。

- 并行性分析：同一层中互不相关的运算可并行执行；树高决定理想最短时间下界。

- 计算时间：若每个运算单位时间相同且资源足够，总时间约为树的层数；若资源有限，需要按处理机数调度。

- 常见题型：给定表达式→画树→标出可并行运算→计算用 1 个/2 个/多个处理机所需时间。

  评估指标：

- $P$：表示可并行处理的处理机机数

- $Tp$：表示$P$台处理机运算的级数即树高

- $Sp$：加速比，表示单处理机顺序运算的级数 T1 与 P 台处理机并行运算的级数 TP 之比$Sp = \frac{Tp}{T}$

- $Ep$：$P$台处理机的设备利用率 (效率)， $Ep = \frac{Sp}{P}$

  ![](/Firefly/uploads/computer-architecture/image112.png)![](/Firefly/uploads/computer-architecture/image113.png)

### 7. 程序并行性分析

考法：选择、填空

并行算法是指可同时执行的多个进程的集合，各进程可相互作用、协调和并发操作

按并行进程间的<strong>操作顺序</strong>不同，并行算法又分同步型、异步型和独立型三种。

- <strong>同步型：</strong>各进程间由于相关，必须顺次等待。

- <strong>异步型：</strong>各进程间执行相互独立，根据执行情况决 定中止或继续。

- <strong>独立型：</strong>各进程间完全独立，不需要相互通信

  根据各处理机<strong>计算任务的大小 (即任务粒度) 不同</strong>，并行算法又分细粒度、中粒度和粗粒度三种。

- 细粒度：向量或循环级的并行

- 中粒度：较大的循环级并行，并确保这种并行的好处可以补偿因并行带来的额外开销。

- 粗粒度：子任务级的并行

  此外，用同构性来表示并行的各进程间的相似度。

- MIMD 系统上运行的进程：异构性

- SIMD 系统上运行的进程：同构性

  并行性分析：多处理机系统中，程序段并行必然是“异步流动”

<strong>数据相关：</strong>如果$P_{i}$的左部变量在$P_{j}$的右部变量集内 ($P_{i}$在$P_{j}$前)，且$P_{j}$必须取出$P_{i}$运算的结果来作为操作数，称$P_{j}$ “数据相关”于$P_{i}$。相当于流水线中发生的<strong>“先写后读”</strong>相关

![](/Firefly/uploads/computer-architecture/image114.png)

<strong>数据反相关：</strong>如果$\mathbf{P}_{\mathbf{j}}$<strong>的左部变量在</strong>$\mathbf{P}_{\mathbf{i}}$<strong>的右部变量集内</strong>，且当$P_{i}$未取用其变量的值之前，是<strong>不允许被</strong>$\mathbf{P}_{\mathbf{j}}$所改变，称$P_{i}$ “数据反相关”于$P_{j}$。相当于流水中的<strong>“先读后写”</strong>相关。

<strong>数据输出相关：</strong>如果$P_{i}$的左部变量也是$P_{j}$的左部变量，且$P_{j}$存入其算得的值必须在 Pi 存入之后，则称$P_{j}$ “数据输出相关”于$P_{i}$。相当于流水中的<strong>“先写后写”</strong>相关。

<strong>其他相关：</strong>若两个程序段的输入变量互为输出变量，同时 具有“先写后读”和“先读后写”两种相关，以交换数据为目的，则两者<strong>必须并行执行</strong>，既不能顺序串行，也不能交换串行。

![](/Firefly/uploads/computer-architecture/image115.png)

如果两个程序段之间不存在任何一种数据相关，即无共同变量，或共同变量都只出现在右边的源操作数，则两个程序段可以无条件地并行执行，也可以串行或交换串行

### 8. FORK、JOIN 语句

考法：选择

<strong>派生：</strong>在一个任务执行的同时，产生出一个或多个与它并行的任务，分配给不同的、正在等待的处理机完成。这些任务可以是相同的，也可以是不同的，执行的时间也可以各不相同。

![](/Firefly/uploads/computer-architecture/image116.png)

- m 是一个新进程开始的标识符、标号；

- 某一进程执行初始阶段，执行 FORK m 时，派生出标识符为 m 的新进程，即准备好这个新进程的启动和继续执行所必需的有关信息;

- 将空闲的处理机分配给 FORK 语句派生的新进程，如果没有空闲的处理机，则应让它们排队等待;

- 原进程在 FORK 语句结束后，继续在原处理机上执行

  <strong>汇合：</strong>把分散在各处理机执行的任务，全部完成后，再汇合起来，进入后续任务。后续任务可以是单任务或新的并行任务。新的并行任务，又要派生和汇合的过程，直到整个程序结束运行为止。

  ![](/Firefly/uploads/computer-architecture/image117.png)

- n 为并发进程的个数

- JOIN 语句附有一个计数器，初始值为 0；

- 每当执行 JOIN 语句时，计数器的值加 1，并与 n 相比较：

- 如果比较相等，说明这是执行中的第 n 个并发进程，经过 JOIN 语句，将计数器的值清 0, 并继续执行后续指令;

- 如果比较计数器的值小于 n，表明此进程不是并发进程中的最后一个，让正在执行的这个进程先结束，把它占用的处理机释放出来，分配给正在排队的其他任务，如果没有排队等待的任务，则 让该处理机空闲。

### 9. 多处理机上并行执行的程序及时间资源图

考法：设计程序并画图

- 设计步骤：划分任务 → 根据数据相关确定先后约束 → 用 FORK 启动可并行任务 → 用 JOIN 同步依赖点 → 分配到处理机并画时间资源图。

- 时间资源图画法：横轴时间，纵轴处理机/资源；每个任务画成占用时间段；有依赖的任务必须在前驱完成后开始。

  ![](/Firefly/uploads/computer-architecture/image118.png) ![](/Firefly/uploads/computer-architecture/image119.png)

![](/Firefly/uploads/computer-architecture/image120.png)

### 10. 多处理机的操作系统分类

考法：选择、填空

- <strong>主从型 (Master-slave Configuration)：</strong>有一台主处理机上运行操作系统，其他的处理机为从处理机，由主处理机管理从处理机的进程和分配任务。一台从处理机在执行进程的过程中需要得到管理程序提供服务时，必须向主处理机发生申请，等待主处理机响应后对它提供服务。

- <strong>优点：</strong>

- 硬件结构比较简单

- 只要单处理机的多道操作系统中增添少量功能即可实施

- 对解决冲突问题比较容易

- 系统的软件和硬件都较简单

- <strong>缺点：</strong>

- 主处理机一旦出故障，整个系统将停止工作，需干预后重新启动。

- 正常工作时，主处理机成为系统的瓶颈，调度速度慢，而使从处理机空闲。

- <strong>各自独立型（Separate Supervisor）：</strong>每台处理机都有一个独立的管理程序（操作系统的内核）在运行，即每个处理机都有一个内核的副本，执行各种管理功能。由于多台处理机执行管理程序，要求管理程序必须是可再入的，或对每台处理机提供专用的管理程序副本。

- <strong>优点：</strong>

- 适应分布处理的模块化结构特点，减少对大型控制专用处理机的需求；

- 有较高的可靠性，某个处理机发生故障时，不会引起系统的瘫痪。

- 每台处理机都有其专用控制表格，使访问系统表格冲突减少，由于进程的统一调度，提高了系统的利用率。

- <strong>缺点：</strong>

- 实现复杂；

- 每台处理机仍然有一些共享表格，会增加共享表格的访问冲突，导致进程调度的复杂性，加大了开销。

- 每台处理机都有自己专用的输入输出设备和文件，使整个系统的 I/O 结构变换需要操作员干预。

- 某一台处理机一旦发生故障，要想恢复和重新执行未完成的工作较困难，各处理机负荷平衡比较困难。

- <strong>浮动型 (Floating Supervisor)：</strong>浮动型操作系统是界于主从型和单独型之间的一种折中方式，其管理程序可以在处理机之间浮动。担任“主控制处理机”的设备不固定、担任的时间不固定。

- <strong>优点：</strong>

- 主控程序可以从一台处理机转移到另一台处理机，也可以同时有多台处理机执行同一个管理服务子程序；

- 各类资源做到较好的负荷平衡；

- 通过静态设置或动态控制的优先级，安排服务请求的次序。

- <strong>缺点：</strong>

- 由于存在多个管理程序，所以会发生表格和数据集的访问冲突。

- 操作系统设计复杂。

## 第六章 数据流机

### 1. 控制驱动的控制流方式的特点

考法：选择

冯诺依曼计算机

- 通过访问共享存储单元让数据在指令之间传递；

- 指令执行的顺序性隐含于控制流中，但却可以显示使用专门的控制操作符来实现并行处理；

- 指令执行的顺序受<strong>程序计数器</strong>控制，即控制令牌所支配。

- 传统冯·诺依曼型计算机属于控制驱动，顺序执行是开发并行性的主要限制。

### 2. 数据驱动方式及其特点

考法：简答、选择

<strong>定义：</strong>只要一条或一组指令所要求的操作数<strong>全部准备就绪</strong>，就可<strong>立即激发相应的指令或指令组执行</strong>。执行结果的输出将送往等待这一数据的下一条或下一组指令。如果其中一些指令因此而使所需用到的数据全部准备就绪，就可被激发执行。<strong>指令的执行</strong>基本上是<strong>无序</strong>的，完全<strong>受数据流的驱动</strong>，与指令在程序中出现的先后顺序无关。

<strong>特点：</strong>

- 它没有通常的共享变量的概念，即没有共享存储数据的概念；

- 指令执行顺序只受指令中数据相关性的制约；

- 数据是以数据令牌方式直接在指令之间传递的

### 3. 数据令牌的概念

考法：简答

实质上是<strong>一种表示某一操作数或参数已准备就绪的标志</strong>。一旦执行某一操作的所有操作数令牌都到齐，则标志着这一操作是什么操作，以及操作结果所得出的数据令牌应发送到哪些等待此数据令牌的操作的第几个操作数部件等有关 信息，都将<strong>作为一个消息包 (MessagePacket)</strong>，传送到处理单元或操作部件并予以执行。

只要<strong>数据不相关和资源可以利用</strong>，就可以并行，因而最有利于计算并行性的开发。

### 4. 数据流是一种什么样的计算模型

考法：简答、填空

从语义上说，数据流是基于<strong>异步性和函数性</strong>的一种计算模型。它没有传统共享变量概念，数据以令牌方式在指令/结点间直接传递。指令执行顺序只受数据相关性约束，因此天然适合隐含并行性的开发。数据流计算机与控制驱动的控制流的根本不同在于，机器不需要<strong>程序计数器</strong>；<strong>没有变量概念</strong>，指令间直接传送数据，不会改变机器状态，有纯函数性。

特性

- <strong>并行性：</strong>可同时并行执行多条指令（并行性通常是隐含的）

- <strong>异步性：</strong>一旦一条指令所需求的数据令牌到达后，指令就可独立执行，而不必关心其他指令及数据情况如何

- <strong>函数性：</strong>运算的执行都是局部操作，操作数是作为数据令牌直接传送的，每一组数据流操作都需要一组输入值，产生一组输出值

- <strong>分散性：</strong>不需要控制执行次序，故不需要集中控制

### 5. 数据流计算模型分类

考法：填空

<strong>数据驱动：</strong>指令操作是按输入数据可用性决定的次序进行的。

<strong>需求驱动：</strong>指令操作是按数据需求所决定的次序进行的。

### 6. 数据流计算机的机器语言的两种表示方法

考法：填空

数据流程序图共有两种表示形式：有向图和活动片

- <strong>有向图表示法：</strong>有向图由<strong>有限个结点集合</strong>与连接结点的<strong>单向分支线</strong>组成

- <strong>结点执行规则：</strong>当一个结点的<strong>所有输入分支线上都出现数据令牌</strong>，且<strong>输出分支线上没有数据令牌</strong>时，该结点的操作即可执行。

  ![](/Firefly/uploads/computer-architecture/image121.png)

  ![](/Firefly/uploads/computer-architecture/image122.png) ![](/Firefly/uploads/computer-architecture/image123.png)

  ![](/Firefly/uploads/computer-architecture/image124.png) ![](/Firefly/uploads/computer-architecture/image125.png)

  ![](/Firefly/uploads/computer-architecture/image126.png)

- <strong>活动片表示法：</strong>一个活动模片相当于有向图表示中的一个或多 个操作节点。数据流则是一组活动模片的集合体。一个活动模片 1 个操作码域、2 个操作数域和 1 个目的域；其实质相当于是一条指令。

  ![](/Firefly/uploads/computer-architecture/image127.png)

### 7. 两种数据流计算机结构的特点

考法：选择、填空

根据<strong>对数据令牌的不同处理方式</strong>，数据流计算机有两种结构。

<strong>静态数据流计算机：</strong> 任意一个节拍内， <strong>任意一条有向分支线上只允许存在一个数据令牌</strong>的处理方式，故<strong>数据令牌不加标号</strong>。

<strong>动态数据流计算机：</strong> 任意一条有向线上<strong>可同时传送几个数据令牌</strong>,故每个数据令牌<strong>都必须带上标志</strong>(令牌标号及其他特征信息)。

![](/Firefly/uploads/computer-architecture/image128.png)![](/Firefly/uploads/computer-architecture/image129.png)
