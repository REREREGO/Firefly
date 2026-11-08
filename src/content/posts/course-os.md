---
title: 福州大学2023级操作系统课程复习提纲
published: 2026-11-08
description: 操作系统课程复习提纲，涵盖进程与线程、处理机调度、同步与互斥、死锁、存储管理及文件系统。
category: 学习笔记
tags: [操作系统知识点梳理, 课程复习]
draft: false
image: /uploads/course-covers/os-blueprint-v2.webp
---

题型

> 单选
>
> 填空
>
> 简答 问一些概念性的问题 xx是什么，有什么用
>
> 综合题（计算或演绎）（PC问题必考，调度问题必考）

注意

> 多回归课本，看看定义，概念考的多
>
> 有些题目的演绎可能和课堂的场景略有不同，要注意看题

## 第一章：
1.  计算算机系统的组成（资源）

分为硬件系统和软件系统，如下：

> ![原文插图](/Firefly/uploads/course-os/image1.png)

<strong>有效的系统运作方式：</strong>通过系统中各要素<strong>相互作用</strong>实现系统的<strong>整体功能</strong>。<strong>各自独立</strong>的要素<strong>不会</strong>自动完成系统的目标，只要通过<strong>管理、控制</strong>，使系统内的要素<strong>有机地结合</strong>在一起，系统才能正常的<strong>运行和活动</strong>，有效的发挥<strong>系统的功能</strong>。

2.  多道程序的两种工作流程：顺序执行和并发执行

    1)  顺序执行：处理器在开始执行一道程序后，只有在这道程序执行结束(程序指令运行完成，或程序执行过程出现错误而无法继续运行)，处理器才能开始执行下一道程序。

    2)  并发执行(Concurrence) ：在多道程序设计环境下，处理器在开始执行一道程序的第一条指令后，在这道程序完成之前，处理器可以开始执行另一道程序，甚至更多的其他程序。

3.  某资源在指定时间段的利用率定义为：

    $\frac{\text{指定时间段中具体工作时间的总和}}{\text{指定时间段时间长度}}$

4.  计算机系统一般采用层次结构组织软硬件资源，使得操作系统的管理职能得以实现。

    <strong>层次结构的概念</strong>

- <strong>层 —— 独立功能部件</strong>

- <strong>接口 —— 层与层的界面</strong>

- <strong>单向依赖 —— 上层使用下层</strong>

- <strong>隐藏性 —— 无需关心细节</strong>

![原文插图](/Firefly/uploads/course-os/image3.png)

操作系统是对硬件层的第一次扩充，同时又作为其他软件运行和用户操作的基础。起了<strong>“承下启上”</strong>的作用

5.  <strong>操作系统的定义：</strong>

    1)  控制计算机系统的工作流程

    2)  管理计算机系统的硬件和软件

    3)  为其他软件和用户提供安全、方便的运行、操作环境

    4)  提高计算机系统的效率

开发计算机操作系统需要在研究计算机系统的工作方式和使用方式基础上，提出对计算机系统进行<strong>管理、控制的原理和方法</strong>，让计算机能够<strong>更好地为人们的学习、工作和生活服务</strong>

6.  <strong>批处理系统：</strong>

基本概念

作业（Job）：要求计算机处理的一个问题

作业步：解决某作业的几个独立步骤

作业流：若干作业的有序集合

程序员：设计算法、选择程序设计语言、编写程序、准备数据等

操作员：计算机系统的运行与维护

作业控制语言（JCL）：程序员使用的，用于定义作业、描述作业运行控制的语言

作业说明书：JCL命令组成的文件，描述作业由哪些程序组成、程序运行顺序、程序由何语言编写、程序所需数据及表示形式、出错处理等

程序卡片和读卡机：程序员编写的程序和数据按一定格式填写在程序卡片上，由读卡机读入计算机系统

7.  <strong>脱机批处理的工作方式</strong>

![原文插图](/Firefly/uploads/course-os/image4.png)

<strong>提交：程序员</strong>将作业（程序、数据、作业说明书）<strong>提交</strong>给<strong>操作员</strong>

<strong>后备：操作员</strong>将<strong>一批性质相似的作业</strong>组成<strong>作业流</strong>，通过<strong>读卡机</strong>读入<strong>输入计算机</strong>，将这批作业信息转储到<strong>输入磁带</strong>上

<strong>执行：操作员</strong>将<strong>输入磁带</strong>放<strong>入主计算机</strong>，由主计算机<strong>操作系统调度</strong>这批作业的<strong>执行</strong>，期间<strong>无法干预</strong>。早期采用<strong>顺序执行</strong>方式（<strong>单道批处理</strong>），现在采用<strong>并发执行</strong>方式（<strong>多道批处理</strong>）。主计算机执行完毕后形成<strong>输出磁带</strong>

<strong>完成：操作员</strong>将<strong>输出磁带</strong>放到<strong>输出计算机</strong>上进行<strong>输出</strong>

8.  <strong>联机批处理的工作方式</strong>

![原文插图](/Firefly/uploads/course-os/image5.png)

<strong>预输入程序（图中②）：</strong>操作系统中<strong>控制读卡机</strong>、<strong>处理作业输入</strong>的程序，取代<strong>输入计算机</strong>

<strong>缓输出程序（图中⑤）：</strong>操作系统中<strong>控制输出设备、处理结果输出</strong>的程序，取代<strong>输出计算机</strong>

<strong>输入井（图中①）：磁盘</strong>上的特殊<strong>存储区域</strong>，取代<strong>输入磁带</strong>

<strong>输出井（图中④）：磁盘</strong>上的特殊<strong>存储区域</strong>，取代<strong>输出磁带</strong>

9.  <strong>批处理系统的特征</strong>

    1)  <strong>优势</strong>

        1.  批量处理，<strong>减少手工操作</strong>

        2.  自动执行，并发处理，<strong>资源利用率高</strong>

    2)  <strong>缺点</strong>

        1.  <strong>缺少人机交互能力，不利于调试</strong>：作业执行阶段，程序员无法参与，且需要等待整个作业流完成才能得到结果（整个作业流包含多个作业）

10. <strong>分时系统：</strong>

![原文插图](/Firefly/uploads/course-os/image6.png)

<strong>定义</strong>

操作系统把主计算机的<strong>处理器工作时间</strong>分割成一些很短的<strong>时间片(Timeslice)</strong>，并<strong>轮流分配</strong>给<strong>用户程序（终端请求）</strong>

用户程序在时间片内使用处理器，而在时间片结束时<strong>暂停</strong>，等待<strong>下一轮</strong>再继续运行

<strong>特征</strong>

1)  同时性

2)  独立性

3)  及时性

4)  交互性

<!-- -->

11. <strong>实时系统及其特征</strong>

    <strong>定义</strong>

对定期或随时产生的事件及时响应，并在严格规定的时间范围内处理完成

1)  要求计算结果是正确的

2)  要求在规定的时间内得到结果

<strong>分类</strong>

1)  实时过程控制系统（军事、工业）

2)  实时信息处理系统（金融）

<strong>特征</strong>

1)  高及时性

2)  高可靠性

<!-- -->

12. <strong>操作系统的研究内容</strong>

理论研究

1)  研究计算机系统的工作方式和用户使用计算机的方式、管理和控制的原理和方法

2)  探讨如何使计算机更有效地为人服务

软件实现

1)  在操作系统理论的指导下，研究如何实现具体的操作系统

<!-- -->

13. <strong>操作系统的基本功能（面向单处理器计算机系统）</strong>

    1)  处理器管理

    2)  存储器管理

    3)  文件系统

    4)  设备管理

    5)  操作接口（用户接口及作业管理）

## 第二章：
1.  <strong>与启动相关的固件</strong>

定义：操作系统的启动依赖于一组称为<strong>固件</strong>的特殊软件，固件存储于只读存储器（ROM）中（或部分寸于硬盘中）

与PC启动相关的固件有基本输入输出系统（BIOS）和UEFI

1)  在计算机启动时首先被运行

2)  进行基本硬件的检查

3)  装入操作系统引导程序

4)  提供基本的硬件驱动程序和中断处理程序

<!-- -->

2.  <strong>基本输入输出系统（Basic In Out System，BIOS）组成：包含三个部分</strong>

    1)  <strong>POST自检程序</strong>：计算机启动后识别硬件配置、自检和初始化

    2)  <strong>基本启动程序</strong>：在存储介质中查找有效的（主）引导程序，若找到，则将其读入内存\[0000:7C00\]处并开始执行，从而引导操作系统启动

    3)  <strong>基本硬件驱动程序及其中断处理程序</strong>：用于在未加载操作系统时识别和控制基本IO设备（键盘、鼠标、显卡、硬盘等）

![原文插图](/Firefly/uploads/course-os/image7.png)

3.  <strong>操作系统装载程序的作用</strong>

    1)  进一步检查和配置系统硬件

    2)  建立内核空间，装入操作系统内核，并初始化数据

    3)  加载用户登录程序和人机交互环境

4.  <strong>主引导程序</strong>

功能：一块硬盘可以有<strong>最多4个分区</strong>，但其中可以有<strong>1个扩展分区</strong>，扩展分区可以利用<strong>类似MBR的记录表</strong>进一步建立<strong>4个逻辑分区</strong>，而其中若存在<strong>逻辑扩展分区</strong>，又可以<strong>进一步分区</strong>，因此一块硬盘可以划分出<strong>任意多的逻辑分区。</strong>

DPT用4字节表示分区占用的扇区数，因此每个分区的存储空间最大为512\*2^32B,即2TB。

<table style="width:74%;">
<colgroup>
<col style="width: 9%" />
<col style="width: 9%" />
<col style="width: 56%" />
</colgroup>
<tbody>
<tr>
<td colspan="3" style="text-align: center;">表2-1 MBR结构</td>
</tr>
<tr>
<td style="text-align: left;">偏移量</td>
<td style="text-align: left;">字节数</td>
<td style="text-align: left;">内容</td>
</tr>
<tr>
<td style="text-align: left;">0</td>
<td style="text-align: left;">440</td>
<td style="text-align: left;">主引导程序(Master Booter)</td>
</tr>
<tr>
<td style="text-align: left;">440</td>
<td style="text-align: left;">4</td>
<td style="text-align: left;">磁盘签名(signature)</td>
</tr>
<tr>
<td style="text-align: left;">444</td>
<td style="text-align: left;">2</td>
<td style="text-align: left;">[未定义]</td>
</tr>
<tr>
<td style="text-align: left;">446</td>
<td style="text-align: left;">16</td>
<td style="text-align: left;">第1个分区表DPT1</td>
</tr>
<tr>
<td style="text-align: left;">462</td>
<td style="text-align: left;">16</td>
<td style="text-align: left;">第2个分区表DPT2</td>
</tr>
<tr>
<td style="text-align: left;">478</td>
<td style="text-align: left;">16</td>
<td style="text-align: left;">第3个分区表DPT3</td>
</tr>
<tr>
<td style="text-align: left;">494</td>
<td style="text-align: left;">16</td>
<td style="text-align: left;">第4个分区表DPT4</td>
</tr>
<tr>
<td style="text-align: left;">510</td>
<td style="text-align: left;">2</td>
<td style="text-align: left;">结束标志符(BRID)：55h AAh(Magic Number)</td>
</tr>
</tbody>
</table>

5.  <strong>统一的可扩展固件接口（Unified EFI）</strong>

定义：<strong>可扩展</strong>的、<strong>标准化</strong>的<strong>固件接口规范EFI</strong>（Extensible Firmware Interface），用于<strong>计算机系统的启动</strong>以及<strong>提供与操作系统的接口</strong>

特点

1)  驱动程序运行环境（DXE）

2)  磁盘管理采用GUID分区方法

3)  UEFI应用程序

启动过程

> ![原文插图](/Firefly/uploads/course-os/image8.png)

<strong>UEFI体系包含两个部分：</strong>

<strong>平台初始化框架：</strong>包含了支持系统启动的<strong>底层程序</strong>，包括：安全检查、硬件自检和初始化、DXE、启动管理器 等

<strong>UEFI映像（UEFI Image）：</strong>一组在<strong>框架的支持下可执行的程序</strong>，包括启动管理器、操作系统装载程序、临时操作系统装载程序、EFI应用程序、设备驱动程序 等

6.  <strong>GUID分区</strong>

由保护MBR（PMBR)、主分区表、数据区和备份分区表四个部分组成

<strong>优点：</strong>

1)  扇区块号为<strong>64</strong>位，消除<strong>2TB</strong>限制

2)  磁盘分区数不受<strong>4</strong>个限制，最多可划分<strong>128</strong>个分区

3)  分区扇区数为<strong>64</strong>位，消除<strong>2TB</strong>限制

4)  自带<strong>备份</strong>，增加<strong>可靠性</strong>

5)  采用<strong>CRC32校验</strong>，增加<strong>完整性</strong>

6)  每个分区都有<strong>唯一标识GUID（128位）</strong>

<!-- -->

7.  <strong>指令权限与工作模式</strong>

处理器能处理的指令：

1)  <strong>特权指令</strong>：需要<strong>特殊权限</strong>才能使用的指令，通常涉及<strong>系统安全</strong>

2)  <strong>非特权指令</strong>：<strong>任何情况</strong>下都可以使用的指令

处理器的<strong>控制寄存器</strong>中用专门的位（<strong>程序状态字</strong>）标识当前的<strong>工作模式</strong>

1)  <strong>核心态（管态）</strong>：已获得<strong>特殊权限</strong>的状态，能够执行所有指令

2)  <strong>用户态（目态）</strong>：只能执行<strong>非特权指令</strong>

    特权级0（管态）、特权级1、特权级2、特权级3（目态）

<!-- -->

8.  <strong>操作系统的内核与内存空间划分</strong>

<strong>内核空间与用户空间</strong>

<strong>内核空间：操作系统</strong>通常在<strong>启动时</strong>，处于<strong>管态</strong>，将其<strong>核心程序</strong>放置在<strong>特定的内存空间（段）</strong>内，并且通过配置<strong>该段的描述符</strong>，使得这块内存区域受到MMU保护

<strong>用户空间：</strong>与内核空间相对的其他空间称作<strong>用户空间</strong>

9.  <strong>内核和核外部分</strong>

<strong>内核：</strong>操作系统加载到内核空间的部分称作<strong>内核</strong>

通常包含以下程序和数据

1)  与硬件密切相关的操作

2)  关键数据结构

3)  基本中断处理程序

4)  使用频繁的功能模块

基本特点

1)  常驻内存

2)  运行在核心态

<strong>核外部分：</strong>操作系统加载到用户空间的部分称作<strong>核外部分</strong>

<strong>操作系统</strong>令<strong>内核执行于管态上，用户程序执行于目态上</strong>，利用CPU机制（<strong>指令特权级别</strong>和<strong>MMU内存保护</strong>），实现了<strong>权限控制</strong>和<strong>系统保护</strong>

<table style="width:74%;">
<colgroup>
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 11%" />
<col style="width: 14%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;"><strong>程序类别</strong></td>
<td rowspan="2" style="text-align: center;"><strong>运行模式</strong></td>
<td colspan="2" style="text-align: center;"><strong>指令执行</strong></td>
<td colspan="2" style="text-align: center;"><strong>内存访问</strong></td>
</tr>
<tr>
<td style="text-align: center;">特权指令</td>
<td style="text-align: center;">非特权指令</td>
<td style="text-align: center;">内核空间</td>
<td style="text-align: center;">用户空间</td>
</tr>
<tr>
<td style="text-align: center;">内核</td>
<td style="text-align: center;">管态</td>
<td style="text-align: center;">√</td>
<td style="text-align: center;">√</td>
<td style="text-align: center;">√</td>
<td style="text-align: center;">√</td>
</tr>
<tr>
<td style="text-align: center;">用户程序</td>
<td style="text-align: center;">目态</td>
<td style="text-align: center;">×</td>
<td style="text-align: center;">√</td>
<td style="text-align: center;">×</td>
<td style="text-align: center;">√</td>
</tr>
</tbody>
</table>

10. <strong>程序接口（系统调用）</strong>

<strong>程序接</strong>口是程序员在<strong>编写应用程序时</strong>使用<strong>操作系统功能的接口</strong>。目前，程序接口通常通过<strong>系统调用（System Call）</strong>方式实现。

系统调用在不同的上下文中，可能表示<strong>两种含义</strong>：

1)  一组由<strong>操作系统设计者</strong>编写的<strong>内核</strong>中的子程序，用以<strong>封装</strong>用户（程序员）可能使用到的<strong>操作系统功能</strong>。

2)  <strong>程序员</strong>在编程中对<strong>这些子程序进行调用</strong>的<strong>行为</strong>。

系统调用所涉及的子程序属于<strong>操作系统内核</strong>的一部分，保存于<strong>内核空间</strong>中，应用程序<strong>不能直接访问</strong>，于是需要通过<strong>特殊方式</strong>才能够<strong>实现系统调用</strong>。

<strong>系统调用的实现：</strong>

<strong>Ppt：</strong>

1)  放置调用号标识

2)  访管指令：发出表示系统调用请求的中断（软中断、陷阱）

3)  处理器保护程序现场，转向中断处理（内核态）

4)  中断处理程序识别中断为系统调用请求，于是转向内核的访管指令处理程序

5)  访管指令处理程序在地址入口表中查找所请求的调用号对应的内核子程序的入口地址

6)  从查找到的地址开始执行内核子程序（系统调用）并得到结果

7)  恢复应用程序现场，返回用户态

    <strong>课本：</strong>

<!-- -->

1)  处理器切换为和心态，保护用户程序的现场。

2)  分析功能号并在地址入口表中查找对应的子程序，有时还需要进行安全控制检查。

3)  执行系统调用的子程序并得到结果。

4)  现场恢复，处理器切换为用户态并返回结果，必要时进行安全检查。

    ![原文插图](/Firefly/uploads/course-os/image9.png)

<!-- -->

11. <strong>命令接口</strong>

命令接口是<strong>人机交互</strong>的主要途径。

按命令接口在操作系统内的<strong>实现方式</strong>，分为

1)  内部命令：<strong>内核</strong>完成的命令

2)  外部命令：由其他应用程序完成的命令

按命令接口的<strong>使用方式</strong>，分为：

1)  脱机命令：<strong>预先编写好</strong>，送交执行后<strong>无法立即反馈</strong>的命令接口形式。例如批处理系统中的JCL。

2)  联机命令：<strong>交互式执行</strong>，能够<strong>立即得到反馈</strong>的命令接口形式。例如<strong>分时系统</strong>中的交互式命令接口。又可细分为<strong>字符命令、菜单命令和图标命令</strong>。

## 第三章：
1.  <strong>程序应具备两个基本特点：</strong>

    1)  顺序性

    2)  可再现性

2.  <strong>系统的工作流程分为顺序执行和并发执行</strong>

顺序执行的工作方式具有两个特征：

1)  封闭性——独占全部资源，不受其他程序影响

2)  可再现性 ——重复运行的结果相同

并发执行的工作方式中，多道程序

1)  宏观上看，同时执行

2)  微观上看，轮流执行

并发执行的工作方式具有三个特征

1)  随机性——运行时情景随机

2)  不可再现性——重复运行结果可能不同

3)  相互制约——资源争夺和协作关系

<!-- -->

3.  <strong>进程的定义：</strong>

Dijkstra：一道程序在一个数据集上的一次执行过程，称为一个进程(Process)

IBM：程序的运行过程称为任务（Task）

进程和任务都是运行着的程序的描述，二者可以互换使用，不加区别。

4.  <strong>进程和程序的联系：</strong>

    1)  进程是程序的运行过程，进程包含了程序

    2)  进程的运行就是其对应的程序的运行

    3)  程序规定了进程所要完成的功能

5.  <strong>进程的主要特征</strong>

    1)  动态性：具有生命周期，状态不断变化

    2)  并发性：可以并发执行

    3)  独立性：互相独立，只能访问自身的内存空间

    4)  结构性：不同的进程可抽象出相同的属性，从而抽象结构相同

    5)  异步性：运行时情况不可预知

6.  <strong>进程的动态性（</strong>进程的三种状态）

    1)  就绪：能够运行但却未在被处理器处理的状态（有CPU就可以运行）\[操作系统通常规定，新创建的进程状态为就绪状态\]

    2)  运行：正在被处理器处理的状态

    3)  阻塞：由于各种原因（IO操作、资源缺乏等）暂时无法运行的状态（即使有CPU也无法运行）

        运行→堵塞：I/O操作、缺乏资源、系统控制、硬件故障

![原文插图](/Firefly/uploads/course-os/image10.png)

7.  <strong>进程控制块（PCB）</strong>

是操作系统用以描述进程信息的数据结构，由三部分组成：

1)  基本描述信息部分（至少包括）

    1.  进程名pname：通常是程序名

    2.  进程标识符pid：操作系统用以识别进程的唯一标识

    3.  用户标识uid：创建进程的用户标识

    4.  进程状态pstate：运行、就绪或阻塞

2)  管理信息部分（至少包括）

    1.  程序和数据地址：程序和数据在内存中的位置信息

    2.  IO操作相关参数：进程进行IO操作时的参数

    3.  进程通信信息：用于进程间通信的消息队列指针等

3)  控制信息部分（至少包括）

    1.  现场信息：进程离开运行状态时，保存进程现场以备恢复

    2.  调度参数：与进程调度相关的参考信息，如优先级、运行时间等

    3.  同步、互斥信号量：用户保证进程间同步、互斥关系的信息

<!-- -->

8.  <strong>操作系统用PCB来描述进程信息，并利用两种PCB队列来组织这些PCB：</strong>

    1)  <strong>就绪队列</strong>：<strong>就绪进程</strong>的PCB组成的队列，按照进程<strong>性质或优先级</strong>，系统中可以有<strong>多个就绪队列</strong>，以提高<strong>进程调度算法</strong>选择进程的效率。在<strong>多处理器系统</strong>中，就绪队列也被称作<strong>请求队列</strong>，每个处理器具有<strong>独立的请求队列</strong>。

    2)  <strong>等待队列</strong>：<strong>阻塞进程</strong>的PCB组成的队列，按照<strong>阻塞原因</strong>，系统中可以有<strong>多个等待队列</strong>，以便在<strong>阻塞原因解除</strong>时统一调整进程状态。

9.  <strong>进程管理的主要内容：</strong>

    1)  控制：进程生命周期及其状态转换的体现

    2)  同步：并发执行进程的控制，以保证程序的可再现性和任务协作

    3)  通信：进程之间的数据交换

    4)  调度：并发执行在微观上的轮流交替

    5)  死锁：分析和解决并发执行的另一种错误现象

10. <strong>改变进程状态的操作不应当被打断，即具有原子性（All or Nothing）。</strong>

11. <strong>原语（Primitive）</strong>

    1)  是特殊的程序段，这样的程序段中的所有指令要么全部执行要么一个都不执行。即原语是具有原子性的程序段。

    2)  原语可以被看作广义的指令（都具有原子性）。

    3)  原语中的指令若执行不成功，系统需要回退到原语执行前的状态。

    4)  定义原语是为了保证系统运行的一致性。

12. <strong>进程控制通过一组原语来实现，包括进程的创建、撤销、阻塞、唤醒和切换。</strong>

13. <strong>创建原语（Create）</strong>

    1)  用于创建一个进程

    2)  Create可能在以下情况下被使用：

        1.  作业调度程序

        2.  用户提交请求命令

        3.  系统调用

    3)  Create被使用时完成以下操作：

        1.  建立一个PCB

        2.  生成进程标识符（pid）

        3.  初始化PCB各项内容

        4.  加入合适的就绪队列

14. 作业调度程序运行时会创建进程，命令解释程序也会创建进程，而用户程序运行时（进程中）也可以通过系统调用创建进程，于是进程呈现树状结构（进程树），体现进程之间彼此创建的关系。

    ![原文插图](/Firefly/uploads/course-os/image11.png)

15. <strong>撤销原语（Destroy）</strong>

    1)  用于结束一个进程

    2)  Destroy可能在以下情况下被使用：

        1.  进程执行完毕

        2.  进程出错

        3.  父进程异常结束

        4.  人为终止

    3)  Destroy被使用时完成以下操作：

        1.  进程资源回收

        2.  删除进程PCB

16. <strong>阻塞原语（Block）</strong>

    1)  用于使一个进程进入阻塞状态

    2)  Block在阻塞原因发生时被使用。

    3)  Block被使用时完成以下操作：

        1.  修改PCB中进程状态为阻塞状态

        2.  现场保护

        3.  将进程加入合适的等待队列

17. <strong>唤醒原语（Wakeup）</strong>

    1)  用于使一个进程从阻塞状态进入就绪状态

    2)  Wakeup在阻塞原因解除时被使用。

    3)  Wakeup被使用时完成以下操作：

        1.  将进程PCB从等待队列中移除

        2.  修改进程状态为就绪状态

        3.  将进程PCB加入合适的就绪队列

        4.  阻塞原因解除后，进程未必可以直接运行，因此合理的唤醒原语并不会将阻塞状态直接修改为运行状态。

18. 进程切换使处理器的控制权在进程之间转换，无法通过操作系统内核独立完成，<strong>必须借助硬件来实现。</strong>

19. 在操作系统的控制下，进程对系统资源的访问逻辑上需经历三个步骤：<strong>申请、使用、归还</strong>。

20. 某些系统资源，在进程从申请到归还的周期中只能允许此进程独占，否则将造成运行错误，则称这样的资源为<strong>临界资源</strong>。

    常见的临界资源有：打印机、存储单元、文件 等<strong>。</strong>

21. <strong>间接制约：</strong>

    间接制约关系：当一个进程在访问或使用该资源时，须制约其他进程的访问或使用。

    它是仅由于使用相同的资源而造成的制约，实质上就是<strong>一组并发进程共享某种临界资源的制约关系。</strong>

22. <strong>临界区(Critical Section，或Critical Region)</strong>

    是指进程对应的程序中访问临界资源的一段程序代码，即进程在资源的一次使用过程中，从申请开始至归还为止的一段程序代码。

    对于一组（在某资源上）存在间接制约关系的并发进程，可以通过建立一种机制来避免制约关系导致的运行错误：<strong>当一个进程在这种临界资源对应的临界区内执行时，其他要求进入相关临界区的进程必须等待</strong>。

    若上述机制得以建立，则称这些并发进程为<strong>互斥进程</strong>，它们之间间建立了<strong>互斥关系</strong>。

    实现互斥关系的关键是对临界区的执行进行有效控制。

23. <strong>临界区管理的准则有：</strong>

    1） <strong>空闲让进</strong>：如果进程请求进入临界区，而没有其他进程在相关临界区内执行，则应当允许进入。

    2） <strong>忙则等待</strong>：如果有进程在临界区内执行，则其他要求进入相关临界区的进程都需等待。

    3） <strong>有限等待</strong>：对于要求进入临界区的进程，等待的时间应当是有限的。

    4） <strong>让权等待</strong>：当一个进程离开临界区时，应当让请求进入相关临界区的下一个进程进入临界区执行。

24. 加锁机制由三个要素组成<strong>：锁变量key、加锁操作lock(key)和解锁操作unlock(key)。</strong>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 49%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>lock(key)</strong></p>
<p><strong>{</strong></p>
<p><strong>while(key==1);</strong></p>
<p><strong>key=1;</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>unlock(key)</strong></p>
<p><strong>{</strong></p>
<p><strong>key=0;</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

1)  锁变量key=1时表示上锁状态，反之则未上锁

2)  当进程申请资源时需对资源加锁，若资源已上锁，则上锁操作将进行反复测试（等待），直到资源被解锁；当进程归还资源时需对资源解锁。

3)  高级语言（软件）实现的加锁机制并不能实现真正的加锁，因为加锁操作内部仍可能被打断：

<table>
<colgroup>
<col style="width: 51%" />
<col style="width: 48%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>进程A的加锁</strong></p>
<p><strong>①    while(key==1);</strong></p>
<p><strong>②    key=1;</strong></p></td>
<td style="text-align: left;"><p><strong>进程B的加锁</strong></p>
<p><strong>③    while(key==1);</strong></p>
<p><strong>④    key=1;</strong></p></td>
</tr>
</tbody>
</table>

当key=0时，若按①③②④执行，则两个进程同时进入临界区，加锁失效。

有效的加锁过程一般通过硬件指令完成。

25. <strong>加锁机制的缺陷：</strong>

    1)  存在“忙等待”现象，浪费了处理器时间

    2)  存在“饥饿”(Starvation)现象，进程等待时间可能无限长

    3)  多个锁变量的加锁操作可能造成进程死锁

26. 信号量机制由三个要素组成：<strong>信号量s、原语p和原语v</strong>。

<table style="width:99%;">
<colgroup>
<col style="width: 50%" />
<col style="width: 49%" />
</colgroup>
<tbody>
<tr>
<td colspan="2" style="text-align: left;"><p><strong>struct semaphore {</strong></p>
<p><strong>    int value;       信号量的值</strong></p>
<p><strong>    PCB *bq;       由于该信号量而堵塞的进程的PCB队列（等待队列）</strong></p>
<p><strong>}</strong></p></td>
</tr>
<tr>
<td style="text-align: left;"><p><strong>p(s) {</strong></p>
<p><strong>    s.value = s.value – 1 ;</strong></p>
<p><strong>    if (s.value＜0) blocked(s) ;</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>v(s) {</strong></p>
<p><strong>    s.value = s.value + 1 ;</strong></p>
<p><strong>    if (s.value≤0) wakeup(s);</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

该机制中，<strong>s.value\>0</strong>表示资源就绪，否则表示有进程在使用或请求使用资源。进程请求资源时需使用<strong>原语p</strong>，若资源非空闲，则进入由于<strong>s</strong>而导致的等待队列，直至正在使用资源的进程归还资源时使用<strong>原语v</strong>将其唤醒。

27. <strong>信号量机制相比于加锁机制的优势：</strong>

    1)  信号量机制把<strong>等待资源</strong>的进程置为<strong>阻塞状态</strong>，而非忙等待，提高了处理器的利用率。

    2)  信号量机制中由操作系统原语<strong>wakeup</strong>唤醒进程，可采取一定策略（如先请求先服务等）而非如加锁机制中的“抢先者得”，这样可以避免“饥饿”现象发生。

28. <strong>直接制约</strong>

    几个进程共同协作完成一项任务，按事先规定的顺序依次执行，任务才能得到正确的处理，否则可能会造成错误结果。（由于进程间协作关系造成的制约）

    对于一组存在直接制约关系的并发进程，为了避免制约关系导致的运行错误，应当使各进程中代码的运行顺序服从其内在要求，需要建立进程间<strong>单向或相互的依赖关系</strong>。

    若一组进程中的每一个进程都与其他至少一个进程建立了<strong>单向或相互的依赖关系</strong>，则称这组进程为<strong>同步进程</strong>，这组进程间建立了<strong>同步关系</strong>。

    <strong>单向依赖</strong>关系也称<strong>简单同步关系</strong>。

    <strong>相互依赖</strong>关系也称<strong>一般同步关系</strong>。

    ![原文插图](/Firefly/uploads/course-os/image12.png)![原文插图](/Firefly/uploads/course-os/image13.png)

29. <strong>同步关系的实现：信号量机制</strong>

<strong>v(s1)</strong>

<strong>v(s3)</strong>

<strong>p(s1)</strong>

<strong>p(s3)</strong>

<strong>v(s)</strong>

<strong>p(s)</strong>

![原文插图](/Firefly/uploads/course-os/image14.png)![原文插图](/Firefly/uploads/course-os/image15.png)

代码段L1对L2依赖时，可将L2的一次执行看作一种“资源”的归还（就绪），而L1的执行，需要申请使用这种“资源”。

于是，可以类似地使用信号量机制实现同步关系：在L1执行前执行<strong>原语p</strong>，而在L2执行后执行<strong>原语v</strong>。

与互斥关系不同的是，<strong>L1使用“资源”后并不归还</strong>（“资源”被消耗）。

30. <strong>除加锁机制与信号量机制之外，常用的进程同步机制还有：标志位机制、管程机制 等。</strong>

31. <strong>生产者/消费者问题</strong>

    ![原文插图](/Firefly/uploads/course-os/image16.png)

    <strong>用两个进程Pro和Con分别表示生产者和消费者，用数组B\[\]表示最大库存为k的仓库，Pro和Con的（无进程同步）代码为</strong>

    1)  (不考虑互斥关系）

        Semaphore empty=k,full=0;

<table>
<colgroup>
<col style="width: 48%" />
<col style="width: 51%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>Pro() {</strong></p>
<p><strong>  　　生产货物;</strong></p>
<p><strong>p(empty);</strong></p>
<p><strong>         查找B中任意空位in;</strong></p>
<p><strong>         将货物放入B[in];</strong></p>
<p><strong>v(full);</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>Con() {</strong></p>
<p><strong>p(full);</strong></p>
<p><strong>  　　查找B中任意存有货物的位置out;</strong></p>
<p><strong>         取出货物B[out];</strong></p>
<p><strong>v(empty);</strong></p>
<p><strong>         消费货物;</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

<strong>信号量初始化：full = 0;</strong>

<strong>empty = k; (正信号量可表示就绪资源的数量)</strong>

<strong>若规定仓库必须保持“栈式使用”方式 ，top表示最上方的货物在仓库中的位置（栈顶地址），初始化top = -1</strong>

2)  （考虑互斥关系和top）\[可以只考虑互斥关系，如果是栈就要考虑top\]

    Semaphore empty=k,full=0;

    Semaphore mutex=1;

<table>
<colgroup>
<col style="width: 48%" />
<col style="width: 51%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>Pro() {</strong></p>
<p><strong>  　　生产货物;</strong></p>
<p><strong>p(empty);</strong></p>
<p><strong>p(mutex);</strong></p>
<p><strong>top++;</strong></p>
<p><strong>        将货物放入B[top];</strong></p>
<p><strong>v(mutex);</strong></p>
<p><strong>v(full);</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>Con() {</strong></p>
<p><strong>p(full);</strong></p>
<p><strong>p(mutex);</strong></p>
<p><strong>  取出货物B[top];</strong></p>
<p><strong>top--;</strong></p>
<p><strong>v(mutex);</strong></p>
<p><strong>v(empty);</strong></p>
<p><strong>         消费货物;</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

<strong>当连续使用原语p时，控制互斥关系的原语p应当置于内层。</strong>

3)  多个生产者/消费者（必须考虑互斥）

    Semaphore empty=k,full=0

    Semaphore mutex1=1,mutex2=1

<table>
<colgroup>
<col style="width: 48%" />
<col style="width: 51%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>Pro() {</strong></p>
<p><strong>  　　生产货物;</strong></p>
<p><strong>p(empty);</strong></p>
<p><strong>p(mutex1);</strong></p>
<p><strong>        查找B中任意空位in;</strong></p>
<p><strong>将货物放入B[in];</strong></p>
<p><strong>v(mutex1);</strong></p>
<p><strong>v(full);</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>Con() {</strong></p>
<p><strong>p(full);</strong></p>
<p><strong>p(mutex2);</strong></p>
<p><strong>  查找B中任意存有货物的位置out;</strong></p>
<p><strong>取出货物B[out];</strong></p>
<p><strong>v(mutex2);</strong></p>
<p><strong>v(empty);</strong></p>
<p><strong>         消费货物;</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

32. <strong>读者/写者问题</strong>

    ![原文插图](/Firefly/uploads/course-os/image17.png)

    <strong>用一个进程Writer表示写者，用多个进程Reader表示读者，Writer和Reader的代码为</strong>

<table>
<colgroup>
<col style="width: 35%" />
<col style="width: 64%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>Writer() {</strong></p>
<p><strong>p(mutexWR);</strong></p>
<p><strong>  　　写操作段;</strong></p>
<p><strong>v(mutexWR);</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>Reader() {</strong></p>
<p><strong>p(mutexWR);</strong></p>
<p><strong>  　　读操作段;</strong></p>
<p><strong>v(mutexWR);</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

<strong>仅在第一个reader开始时对mutexWR做p操作，最后一个reader结束时对mutexWR做v操作，而在其他reader运行中不改动信号量，改进的代码：</strong>

<table>
<colgroup>
<col style="width: 37%" />
<col style="width: 62%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>Writer() {</strong></p>
<p><strong>         p(mutexWR);</strong></p>
<p><strong>  　　写操作段;</strong></p>
<p><strong>         v(mutexWR);</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>Reader() {</strong></p>
<p><strong>p(mutexRC);</strong></p>
<p><strong>          readerCount++;</strong></p>
<p><strong>          if(readerCount==1) p(mutexWR);</strong></p>
<p><strong>v(mutexRC);</strong></p>
<p><strong>  　　读操作段;</strong></p>
<p><strong>p(mutexRC);</strong></p>
<p><strong>          readerCount--;</strong></p>
<p><strong>          if(readerCount==0) v(mutexWR);</strong></p>
<p><strong>v(mutexRC);</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

33. <strong>多个前序步骤与单个后续步骤的同步关系：</strong>

<strong>L1</strong>

<strong>L3</strong>

<strong>p(s2)</strong>

<strong>L2</strong>

<strong>and</strong>

<strong>p(s1)</strong>

<strong>v(s2)</strong>

<strong>v(s1)</strong>

<strong>L1</strong>

<strong>L3</strong>

<strong>p(s)</strong>

<strong>L2</strong>

<strong>or</strong>

<strong>v(s)</strong>

<strong>v(s)</strong>

34. <strong>单个前序步骤与多个后续步骤的同步关系：</strong>

<strong>p(s1)</strong>

<strong>L1</strong>

<strong>compatible</strong>

<strong>L0</strong>

<strong>v(s1)</strong>

<strong>p(s2)</strong>

<strong>v(s2)</strong>

<strong>L2</strong>

35. <strong>通信：</strong>多个进程交换数据的过程<strong>被称为进程通信</strong>

36. 进程通信分为两种类型<strong>：低级通信和高级通信</strong>

37. <strong>低级通信：</strong>操作系统内核程序之间的通信，交换的数据量较小，且交换的数据用于控制进程的执行。（如信号量机制）

38. <strong>高级通信：</strong>应用程序之间的通信，交换的数据量可以很大，交换的数据是接受进程的处理对象。

39. <strong>进程的独立性：</strong>不同进程无法互相访问代码和数据。

40. 信号量数据结构的存放位置<strong>并非用户进程的私有空间，而是内核空间，</strong>信号量使用前<strong>需要向内核申请，以获得信号量标识。</strong>

    ![原文插图](/Firefly/uploads/course-os/image18.png)

41. <strong>进程通信方式：</strong>

    1)  <strong>共享存储区通信：</strong>

        1.  进程根据需要向内核申请位于<strong>内核空间</strong>的<strong>共享存储区</strong>，并将此区域<strong>映射</strong>到<strong>发送进程</strong>与<strong>接收进程</strong>的<strong>地址空间</strong>，使得发送/接收进程可以通过<strong>共享的存储区</strong>进行<strong>通信</strong>。

        2.  共享存储区中的数据存取无固定模式，需注意根据实际情况处理同步/互斥关系。

        3.  ![原文插图](/Firefly/uploads/course-os/image19.png)

    2)  <strong>信箱通信：</strong>

        1.  在<strong>内核空间</strong>中建立专门区域作为<strong>信箱</strong>，信箱中划分<strong>有限个信格</strong>，每个<strong>信格</strong>可存放<strong>一条信息（信件）</strong>。每个信箱可由<strong>多个发送进程</strong>与<strong>接收进程共享</strong>，发送进程用<strong>send操作</strong>将信息放入<strong>信格</strong>中，接收进程用<strong>receive操作</strong>从信格中取出<strong>信息</strong>。

        2.  ![原文插图](/Firefly/uploads/course-os/image20.png)

        3.  与共享存储区通信比较，信箱通信的数据存取模式固定，其实现是一个多生产者多消费者的PC问题。

        4.  信箱数据结构包括信箱头和信箱体。信箱头包括信箱的基本信息和解决PC问题所需的数据：

            1)  信箱名boxname：信箱的名称

            2)  信箱标识符bid：生成信箱时生成的唯一的标识符

            3)  信箱大小size：信格总数

            4)  同步信号量mailnum：表征信件数量的同步信号量

            5)  同步信号量freenum：表征空信格数量的同步信号量

            6)  读互斥信号量rmutex：保证多个接收者进程互斥的信号量

            7)  写互斥信号量wmutex：保证多个发送者进程互斥的信号量

            8)  读指针out：当前可读信件所在信格地址

            9)  写指针in：当前可写入的空信格地址

            10) 信箱体由若干连续区域组成缓冲区数组buf\[size\]

        5.  信箱通信中Send和Receive的实现（发送操作和接收操作）：

<table style="width:99%;">
<colgroup>
<col style="width: 46%" />
<col style="width: 53%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>Send(toBoxID, &amp; mailPtr) {</strong></p>
<p><strong>根据信箱标识符toBoxID查找信箱toBox;</strong></p>
<p><strong>p(toBox.freeNum);</strong></p>
<p><strong>p(toBox.wMutex);</strong></p>
<p><strong>toBox.buf [toBox.in] ← mailPtr;</strong></p>
<p><strong>toBox.in = (toBox.in+1) % toBox.size;</strong></p>
<p><strong>v(toBox.wMutex);</strong></p>
<p><strong>v(toBox.mailNum);</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>Receive(fromBoxID, &amp; mailPtr) {</strong></p>
<p><strong>根据信箱标识符fromBoxID查找信箱fromBox;</strong></p>
<p><strong>p(fromBox.mailNum);</strong></p>
<p><strong>p(fromBox.rMutex);</strong></p>
<p><strong>mailPtr ← fromBox.buf [fromBox.out];</strong></p>
<p><strong>fromBox.out = (fromBox.out+1) % toBox.size;</strong></p>
<p><strong>v(fromBox.rMutex);</strong></p>
<p><strong>v(fromBox.freeNum);</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

3)  消息缓冲通信：

    1.  内核空间中为每个进程配备一个<strong>消息队列MQ</strong>，并记录在进程的<strong>PCB中</strong>。发送进程<strong>通过Send操作</strong>将信息封入<strong>一个消息缓冲区</strong>中，并追加到<strong>接收进程的消息队列</strong>内；接收进程<strong>通过Receive操作</strong>收取<strong>自身消息队列中的信息</strong>。

    2.  ![原文插图](/Firefly/uploads/course-os/image21.png)

<table>
<colgroup>
<col style="width: 43%" />
<col style="width: 56%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><p><strong>Send(des, msgOut) {</strong></p>
<p><strong>查找进程des的PCB：desPCB;</strong></p>
<p><strong>申请一个空的消息缓冲区buf;</strong></p>
<p><strong>将消息msgOut封入buf中;</strong></p>
<p><strong>p(desPCB.mutex);</strong></p>
<p><strong>将buf追加到desPCB.MQ;</strong></p>
<p><strong>v(desPCB.mutex);</strong></p>
<p><strong>v(desPCB.msg);</strong></p>
<p><strong>}</strong></p></td>
<td style="text-align: left;"><p><strong>Receive(msgOut) {</strong></p>
<p><strong>查找当前进程this的PCB：thisPCB;</strong></p>
<p><strong>p(thisPCB.msg);</strong></p>
<p><strong>p(thisPCB.mutex);</strong></p>
<p><strong>从thisPCB.MQ中移出一个消息缓冲区buf;</strong></p>
<p><strong>v(thisPCB.mutex);</strong></p>
<p><strong>从buf中读出信息到msgOut;</strong></p>
<p><strong>归还消息缓冲区buf;</strong></p>
<p><strong>}</strong></p></td>
</tr>
</tbody>
</table>

3.  与信箱通信相比，消息缓冲通信中的消息队列<strong>专属于进程</strong>。消息缓冲通信是一种<strong>直接通信</strong>，当接收进程未开启时，通信不成功。

<!-- -->

4)  管道通信：

    1.  通信双方共享<strong>一个文件</strong>，发送进程<strong>向文件中写入数据</strong>，接收进程从中<strong>读出数据</strong>，从而实现<strong>通信</strong>。共享的文件被作为<strong>“管道”</strong>。

    2.  管道通信中的共享数据<strong>并不存放在内核空间中</strong>，而是<strong>存放在管道（文件）</strong>中，需注意维护数据的安全问题。

    3.  管道通信中的管道（文件），同共享存储区类似，<strong>并无固定数据存取模式</strong>，因此需注意根据实际情况处理互斥/同步关系。

    4.  管道通信可以使用远程文件作为管道，因此，此种通信方式不局限于单计算机系统。

5)  

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"><p><strong>访问</strong></p>
<p><strong>管理</strong></p></td>
<td style="text-align: center;"><p><strong>安全性</strong></p></td>
<td style="text-align: center;"><p><strong>跨系统</strong></p></td>
<td style="text-align: center;"><p><strong>直接</strong></p>
<p><strong>通信</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p>共享存储区</p></td>
<td style="text-align: center;"><p>×</p></td>
<td style="text-align: center;"><p>√</p></td>
<td style="text-align: center;"><p>×</p></td>
<td style="text-align: center;"><p>×</p></td>
</tr>
<tr>
<td style="text-align: center;"><p>信箱</p></td>
<td style="text-align: center;"><p>√</p></td>
<td style="text-align: center;"><p>√</p></td>
<td style="text-align: center;"><p>×</p></td>
<td style="text-align: center;"><p>×</p></td>
</tr>
<tr>
<td style="text-align: center;"><p>消息缓冲</p></td>
<td style="text-align: center;"><p>√</p></td>
<td style="text-align: center;"><p>√</p></td>
<td style="text-align: center;"><p>×</p></td>
<td style="text-align: center;"><p>√</p></td>
</tr>
<tr>
<td style="text-align: center;"><p>管道</p></td>
<td style="text-align: center;"><p>×</p></td>
<td style="text-align: center;"><p>×</p></td>
<td style="text-align: center;"><p>√</p></td>
<td style="text-align: center;"><p>×</p></td>
</tr>
</tbody>
</table>

42. <strong>线程：</strong>

    1)  把进程细化成若干个可以独立运行的实体，每一个实体称为一个<strong>线程</strong>(Thread)。

    2)  线程与进程的比较

<table>
<colgroup>
<col style="width: 28%" />
<col style="width: 42%" />
<col style="width: 29%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"><p><strong>对比项目</strong></p></td>
<td style="text-align: center;"><p><strong>进程</strong></p></td>
<td style="text-align: center;"><p><strong>线程</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>独立拥有的资源</strong></p></td>
<td style="text-align: center;"><p><strong>处理器控制权和其他资源</strong></p></td>
<td style="text-align: center;"><p><strong>处理器控制权</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>内存访问</strong></p></td>
<td style="text-align: center;"><p><strong>不共享</strong></p></td>
<td style="text-align: center;"><p><strong>同进程内共享</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>切换时的开销</strong></p></td>
<td style="text-align: center;"><p><strong>大</strong></p></td>
<td style="text-align: center;"><p><strong>小</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>动态性、并发性</strong></p>
<p><strong>处理同步/互斥</strong></p></td>
<td colspan="2" style="text-align: center;"><p><strong>相同</strong></p></td>
</tr>
</tbody>
</table>

3)  引入线程减小了系统的基本工作单位粒度，其目的在于：

    1.  实现进程内部的并发执行，提高并行程度

    2.  减少处理器切换带来的开销

    3.  简化进程通信方式

4)  对线程实施管理、控制的模块称作<strong>线程包（Threads Package）</strong>。

    1.  根据线程包的实现方式，将线程分为：

        1)  <strong>系统级线程</strong>——使用<strong>内核</strong>提供的线程包来管控

            1.  优点：某线程在内核上阻塞时，同进程的其他线程仍可运行

            2.  缺点：切换时需进入内核

        2)  <strong>用户级线程</strong>——由<strong>用户态</strong>的线程包（例如运行时系统）来管控，而内核中不识别此类线程

            1.  优点：切换时无需进入内核

            2.  缺点：某线程在内核上阻塞时导致全进程阻塞

5)  将进程细化为线程需要根据实际应用的需要，主要的<strong>细化方法</strong>有：

    1.  <strong>分派/处理模型（Dispatcher / Worker Model）</strong>

        1)  由一个分派线程（Dispatcher）负责接收工作需求，然后将工作任务分派给工作线程（Worker）以完成具体动作。![原文插图](/Firefly/uploads/course-os/image22.png)

        2)  Dispatcher和Worker之间是主从关系。其中，Dispatcher处于控制地位

    2.  <strong>队列模型（Team Model）</strong>

        1)  将进程细化为具有独立关系的线程，各自完成独立的任务

        2)  ![原文插图](/Firefly/uploads/course-os/image23.png)

    3.  <strong>管道模型（Pipeline Model）</strong>

        1)  将完整进程中有序的各执行步骤作为线程，依次顺序运行（流水线）

        2)  ![原文插图](/Firefly/uploads/course-os/image24.png)

            <strong>第四章：</strong>

<!-- -->

1.  <strong>调度(Scheduling)</strong>

    1)  是管理的一种方法，一种决策，使资源经过管理得到合理、有效的利用。

    2)  其目的是找出一种合理的、有效的安排方法，提高资源（如工作、人力、车辆等）的利用率。

2.  <strong>操作系统中关注的调度问题有四类：</strong>

    1)  作业调度（宏观）

        1.  考虑何时执行哪些作业（ppt）

        2.  就是按一定的策略，从后备队列中选择一部分作业，为它们分配运行所需要的资源、创建进程的过程

    2)  进程调度（微观）

        1.  考虑将哪个就绪进程转换为运行状态（ppt）

        2.  就是按一定策略，从进程就绪队列中选择一个进程，让其占用处理器运行。

    3)  交换调度（中级）

        1.  考虑将进程如何在内/外存储器间交换（ppt）

        2.  操作系统采用有效的策略，选择一部分就绪状态或阻塞状态的进程，暂时将它们从内存中调出，把资源让给运行的进程，调出到外存储器的进程将来在合适的时候再调入内存

    4)  设备调度

        1.  考虑让哪个进程（唤醒）使用设备（ppt）

            ![原文插图](/Firefly/uploads/course-os/image25.png)

3.  <strong>评价调度的性能指标：</strong>

    1)  周转时间和平均周转时间——从<strong>处理过程的完成时间</strong>来进行评价（批处理系统）

        1.  处理过程Ji的周转时间：$T_i=\text{作业 }J_i\text{ 的完成时刻}-\text{作业 }J_i\text{ 的提交时刻}$

        2.  一批（n个）处理过程的平均周转时间：$T=\left(\sum_{i=0}^{n}T_i\right)/n$

        3.  <strong>周转时间</strong>并不直接体现某处理过程耗时的<strong>“合理性”</strong>

        4.  处理过程Ji的带权周转时间：$Tw_i=T_i/Tr_i$

        5.  一批（n个）处理过程的平均带权周转时间：$Tw=\left(\sum_{i=0}^{n}Tw_i\right)/n$

    2)  响应时间——从<strong>处理过程的响应速度</strong>来进行评价

        1.  处理过程Ji的响应时间：$R_i=\text{作业 }J_i\text{ 第一次对用户做出响应的时刻}-\text{作业 }J_i\text{ 的提交时刻}$

    3)  其他性能指标

        1.  公平合理——安排公平，用户满意

        2.  提高资源利用率（并行度）——资源闲置的情况

        3.  吞吐量——单位时间处理完成的作业或进程的个数

4.  <strong>作业状态</strong>

    1)  <strong>提交状态</strong>

        1.  程序员完成了程序的编写、准备好了程序运行要的数据以及利用作业控制语言JCL编写好了作业说明书，全部提交给操作员后，称为提交状态。

    2)  <strong>后备状态</strong>

        1.  操作员启动计算机，将整理后的作业流成批地输入计算机系统，在脱机批处理系统中，作业输入磁带；在联机批处理系统中，作业输入磁盘的输入井，这时候为后备状态。

    3)  <strong>执行状态</strong>

        1.  作业调度程序从后备队列中选择作业，并为其分配内存等运行所需的基本资源，作业进入主计算机的内存。这时候为执行状态。

    4)  <strong>完成状态</strong>

        1.  一个作业的全部进程运行完成后，为完成状态。

5.  <strong>作业调度的功能</strong>

    1)  <strong>设计数据结构，登记调度所需要的参数</strong>

    2)  <strong>执行指定的算法，从作业的后备队列中选择一个作业</strong>

    3)  <strong>为选中的作业分配资源，创建进程</strong>

    4)  <strong>作业完成时的资源回收</strong>

6.  <strong>作业调度算法</strong>

    1)  <strong>FCFS（先来先服务）</strong>

        1.  思想：按作业提交的先后顺序（或进入后备队列的先后顺序），调度时选择最先提交（或最先到达后备队列）的作业

        2.  特点：

            1)  公平合理

            2)  算法简单，容易实现

            3)  服务质量欠佳（不利于短作业）

        3.  ![原文插图](/Firefly/uploads/course-os/image31.png)

    2)  <strong>SJF（短作业优先）</strong>

        1.  思想：每个作业都要求给定运行所需的处理器时间，调度时选择一个拥有最短处理器时间的作业

        2.  特点：

            1)  实现最小的平均周转时间

            2)  吞吐量大

            3)  存在“饥饿”现象

            4)  算法思想简单，但实现困难

    3)  <strong>HRN（高响应比优先算法）</strong>

        1.  思想：给每个作业定义一个响应比，调度时先计算后备队列中各作业的响应比，选择具有最大响应比的一个作业

        2.  $\text{响应比 }R=\frac{\text{作业等待时间}}{\text{作业大小}}$

        3.  <strong>作业等待时间 = 系统当前时间 - 作业提交时刻</strong>

    4)  <strong>计算：</strong>

        1.  <strong>周转时间＝完成执行时间-作业提交时间</strong>

        <!-- -->

        1.  <strong>脱机批处理系统（从某某时间开始调度）：</strong>

        2.  <strong>联机批处理系统：作业提交时即可开始作业调度。</strong>

            1)  <strong>FCFS</strong>

                1.  <strong>顺序：先来先服务</strong>

            2)  <strong>SJF</strong>

                1.  <strong>顺序：在提交时间\<当前时间的作业中，作业越小越优先</strong>

            3)  <strong>HRN</strong>

                1.  <strong>响应比=（当前时间-作业提交时间）/作业大小（只比较当前有的作业）</strong>

                2.  <strong>顺序：响应比越大越优先</strong>

7.  <strong>进程调度方式</strong>

    1)  含义：进程并发执行时各个进程在处理器上轮流交替运行的实现，决定处理器上运行的进程何时停下来，以及就绪队列中哪个进程可以开始占用处理器运行

    2)  进程调度由操作系统中的进程调度程序实现

    3)  功能：

        1.  进程调度方式指运行状态何时以什么方式停止或暂时停止运行，让出处理器给下一个进程，可分为

            1)  <strong>非抢占式</strong>：除非进程由于<strong>自身原因或外部</strong>（非操作系统的）原因交出处理器使用权，否则<strong>一直运行直到结束</strong>。（非剥夺的）

            2)  <strong>抢占式</strong>：操作系统<strong>定期检查系统状态</strong>（定期调度），按照<strong>某种原则</strong>主动将进程暂停并将处理器使用权交给下个进程。（剥夺式）

            3)  进程调度首先要确定采用哪种调度方式

        2.  <strong>进程调度算法：</strong>

            从就绪的队列中按照指定的算法选择一个进程，准备让其占用处理器执行，就是进程调度算法。

            1)  <strong>先来先服务（FCFS）</strong>

                1.  按照进入就绪队列的先后顺序，调度时选择最先进入就绪队列的进程。调度时不修改就绪队列，并且总是选择队首。

                2.  FCFS基于<strong>非抢占调度方式</strong>。

                3.  FCFS进程调度的优缺点类似FCFS的作业调度。（公平，易实现，服务质量欠佳）

            2)  <strong>时间片轮转（RR: Round-Robin）</strong>

                1.  <strong>RR基于抢占调度方式</strong>。其实现依赖于计时器中断。

                2.  思想：就绪队列按照先进先出方式组织。调度时选择一个进程，并分配一个时间片。选中的进程在规定的时间片内运行。调度时判断其时间片是否用尽，若用尽，则将其移至就绪队列末尾，否则不修改就绪队列。并且总是选择队首。

                3.  时间片用完，任务还没完成就移到队列末尾。时间片没用完，任务已经完成，就轮到新的进程（分新的时间片）

                4.  时间片长度为T，若就绪队列中已存在n个进程，则提交的新进程的最长响应时间：

                    1)  R = T×n

                    2)  应用RR算法的关键是根据实际需要确定T的值：

                        1.  T太长则响应时间过长

                        2.  T太短则进程切换过于频繁，系统开销加大

            3)  优先级算法（Priority）

                1.  为每个进程赋予一个优先数，调度时总是选择优先数最高的进程。

                2.  <strong>可基于抢占式调度，也可基于非抢占式调度</strong>：

                    1)  抢占式调度，可保证总是执行高优先级进程。

                    2)  非抢占式调度，仅能保证当前一个进程阻塞或结束时总能选择优先级最高的进程。

                    3)  优先级调度的关键是进程优先数的配置。按照优先数配置的特点，优先级算法分为：

                        1.  静态优先级算法：进程优先数在进程创建时确定，并不可改变。

                        2.  动态优先级算法：进程优先数在创建进程时被赋初值，运行中可根据系统状态改变。

                        通过不同的优先数配置策略，优先级算法可灵活地体现各种算法思想（FCFS\[把已经来的时间作为优先级\]、SJF\[把进程长短作为优先级\]等）。

                        经验：IO繁忙型进程应当被赋予高优先级以提高系统并行度。

            4)  短进程优先算法：

                1.  选择需要占用处理器时间最小的进程

                2.  非抢占方式

                3.  特点和短作业优先算法一样

        3.  处理器切换：保存原来进程的现场，为新选中的进程建立或恢复现场。

        4.  进程结束时资源回收：回收进程占用的资源

8.  <strong>实时系统的进程调度</strong>

    1)  <strong>实时系统：</strong>

        1.  是对外界事件进行响应和处理的计算机系统

        2.  实时系统中的任务通常分为：

            1)  <strong>周期性任务：需要实时系统定期处理的任务</strong>

            2)  <strong>非周期性任务：不定期，甚至随机发生的事件</strong>

            3)  实时系统需要对<strong>周期性</strong>或<strong>非周期性</strong>发生的事件作出处理，其对处理<strong>正确性</strong>和<strong>时效性</strong>要求十分苛刻。

        3.  <strong>时间参数</strong>

            1)  <strong>任务就绪时限：</strong>一个事件发生开始，到实时系统响应该事件，并创建对应的处理进程为止的时间段。

            2)  <strong>开始时限：</strong>一个事件发生开始，到它第一次被调度程序选中开始运行为止的时间段。

            3)  <strong>完成时限：</strong>从事件发生到运行完成得到结果的时间段

            4)  <strong>处理时间：</strong>某些特殊事件要求定期触发处理过程。

        4.  可调度

            1)  概念：对于一组事件，如果存在某种处理方式，使其中每个事件的时限要求都可以得到满足，则称这组事件是可调度的（Schedulable）。否则，如果无论用何种方式，都至少有一个事件无法满足其时限要求，则称这组事件不可调度。

            2)  可调度的一个必要条件： μ ≥ λ。其中μ表示系统单位时间内可以处理的事件数（处理能力）， λ表示单位时间内到达的事件数。

            3)  

        5.  周期性事件（任务）：

            1)  是周期性触发的事件（处理时间），每次事件必须在下个周期到达前完成（完成时限）。

            2)  若只有单一周期性事件，其发生周期为P，系统处理一次该事件需要的时间为C，则其可调度的充要条件：P ≥ C（ μ = 1/C ； λ = 1/P； μ ≥ λ此时成为充要条件） 。

            3)  从系统占用的角度来看，此充要条件为：C/P ≤ 1。

            4)  若有n个周期性事件，发生周期分别为P1、P2、…、Pn，系统处理所需时间分别为C1、C2、…、Cn，则其可调度的充要条件：$\sum_{i=1}^{n}\frac{C_i}{P_i}\leq1$

        6.  <strong>时限调度算法</strong>

            1)  时限调度算法是<strong>实时系统进程调度</strong>的常用算法，其主要针对事件的<strong>完成时限</strong>要求。

            2)  时限调度算法基于<strong>抢占式调度方式</strong>，每次调度时选择完成<strong>时限最近的（最迫切的）进程</strong>。

            3)  如此调度，可使<strong>所有事件满足完成时限要求</strong>（若这组事件<strong>可调度</strong>）：

            4)  每次选择时，若是可调度的，则可使当前最迫切的一个进程满足完成时限要求。

            5)  每次选择<strong>不改变可调度</strong>性。

            6)  例子：有2个周期性任务A、B，它们的周期分别是20ms和56ms，处理时间分别是8ms和32ms。画出采用时限调度算法的调度图。![原文插图](/Firefly/uploads/course-os/image34.png)

9.  死锁：

    1)  含义：一组进程均处于阻塞状态，其中的任一进程阻塞状态的解除都依赖于另一进程的后续操作。

        ![原文插图](/Firefly/uploads/course-os/image35.png)

    2)  死锁的分类：

        1.  <strong>资源死锁</strong>——由于相互等待临界资源而导致的死锁

        2.  <strong>通信死锁</strong>——由于相互等待通信的发送和接收操作导致的死锁

        3.  <strong>控制死锁</strong>——由于系统或用户的几个进程的控制导致的死锁

    3)  死锁的特点（与死循环区别）：

        1.  从产生来看，偶然性——由特殊的并发执行顺序导致，是小概率事件。（死循环具有必然性）

        2.  从进程状态来看，非消耗——死锁的相关进程处于阻塞状态，不占用处理器（死循环是执行状态，占用处理器资源）

        3.  从产生原因来看，程序无关——是由于操作系统采用多道程序的并发执行、进程之间资源共享引起的。（死循环是程序员程序设计不当或编写错误造成的）

    4)  死锁的根本原因是<strong>系统拥有的资源的数量小于各进程对资源的需求总数</strong>。

    5)  死锁发生的必要条件：

        1.  <strong>互斥条件</strong>——死锁的相关进程是互斥的

        2.  <strong>不剥夺条件</strong>——当进程申请资源时不能剥夺其他进程正在使用的资源

        3.  <strong>请求与保持（部分分配）条件</strong>——进程在申请资源不成功时仍然保持已申请的资源

        4.  <strong>环路等待条件</strong>——进程相互等待关系形成环路

    6)  死锁的解决——预防

        通过在资源分配时采取一系列限制措施，破坏4条必要条件之一，以预防死锁的发生。

        1.  “互斥条件”的破坏

            1)  方法：不允许申请临界资源。

                1.  缺陷：临界资源需要转化为非临界资源方可被申请和使用，大部分情况下无法实现。

        2.  “不剥夺条件”的破坏

            1)  方法：允许进程申请资源时剥夺其他进程正在使用的资源。

                1.  缺陷：被剥夺资源的进程不可预期地被打断；系统需处理“回退”；缺乏公平性；反复剥夺与被剥夺。

        3.  “请求与保持条件”的破坏

            1)  方法1：资源暂时归还——进程申请资源不成功时，暂时归还已分配的资源。

                1.  缺陷：系统需处理“回退”；反复申请与归还。

            2)  方法2：静态分配——进程需要一次申请完所有可能使用的资源。

                1.  缺陷：难以预知需要使用的资源；降低资源利用率。

        4.  “环路等待条件”的破坏

            1)  方法1：单请求方式——资源申请不允许嵌套（但可一次申请多个），归还旧资源后方可申请新资源。

                1.  缺陷：同时需要多个资源时只能实行小范围内的“静态分配”。

            2)  方法2：按序分配——对资源编号，进程只允许申请比当前已拥有资源编号更大的资源。

                1.  缺陷：若使用大编号资源的段内需使用小编号资源，则只能实行小范围内的“静态分配”；编号管理困难。

    7)  死锁的解决——避免

        进程可以自由地动态地申请资源，但分配资源时对可能发生的死锁进行预测，以决定是否立即分配。

        1.  死锁的避免具有特点（与死锁的预防相区别）：

            1)  原理上是通过<strong>预测潜在的死锁</strong>

            2)  <strong>不影响程序设计</strong>

            3)  临界资源分配<strong>并非“空闲让进”</strong>

        2.  <strong>避免资源分配状态：</strong>

            1)  n个并发进程P1～Pn，m种资源R1～Rm，考虑某时刻的资源分配状态：

            2)  当前可用向量Available，其中Available\[j\]表示当前空闲的资源Rj的数量

            3)  当前分配矩阵Used，其中Used\[i, j\]表示Pi已获得Rj的数量

            4)  最大需求矩阵Max，其中Max\[i, j\]表示Pi对Rj的最大需求量

            5)  某进程P对某资源R的最大需求量是指：

                1.  任意时刻进程P所需要持有的资源R的最大数量

                2.  保证进程P完成所需资源R的最少数量

        3.  <strong>避免安全状态：</strong>

            1)  系统在已知一组进程对所有资源的最大需求量和当前已分配量的基础上得出当前资源分配状态，所谓“安全状态”是指：可以找到一个进程执行的顺序，使得无论这些进程内部此后如何申请和归还资源，总能按此顺序完成这组进程。

            2)  上述这个执行顺序称作安全序列。

            3)  判断某个状态是否是安全状态的方法：<strong>“最坏情况”下的模拟运行</strong>

                1.  假设各进程立即申请所有未满足的资源，且在其执行结束前不归还

                2.  试图找出安全序列

                3.  模拟过程中的临时参数：

                    1)  矩阵Need表示各进程未满足的资源数量，<strong>Need = Max – Used</strong>

                    2)  向量SimAvailable记录模拟运行中的资源可用量，初始值为Available

                    3)  向量Finished记录模拟运行的进程顺序，初始值为0

                4.  模拟运行的步骤：

                    1)  1\. 每次选取满足以下条件的进程Ps进行模拟运行Finished\[s\]=0 且对所有j，Need\[s, j\] ≤SimAvailable\[j\]。若不存在这样的进程，则转步骤3

                    2)  2\. 选中的Ps模拟运行完毕，则将归还所占用的资源对所有j，SimAvailable\[j\] = SimAvailable\[j\] + Used\[s, j\]，同时记录Ps的模拟运行序号Finished\[s\] = ++index，然后跳转到步骤1

                    3)  3\. 得出结论：若向量Finished中存在0项，则原状态不是安全状态，否则是安全状态，向量Finished指出了其安全序列。

                5.  例题：资源总量 (8, 10, 9,12)

                ![原文插图](/Firefly/uploads/course-os/image36.png)

                过程：

<table style="width:99%;">
<colgroup>
<col style="width: 6%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 6%" />
<col style="width: 4%" />
<col style="width: 6%" />
<col style="width: 14%" />
</colgroup>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;"><strong>进程</strong></td>
<td colspan="4" style="text-align: center;"><strong>Max</strong></td>
<td colspan="4" style="text-align: center;"><strong>Used</strong></td>
<td colspan="4" style="text-align: center;"><strong>Need</strong></td>
<td colspan="4" style="text-align: center;"><strong>Available</strong></td>
<td rowspan="2" style="text-align: center;"><strong>Finished</strong></td>
</tr>
<tr>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;">2</td>
<td style="text-align: left;">1</td>
<td style="text-align: left;">2</td>
<td style="text-align: left;">2</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P1</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;">8</td>
<td style="text-align: left;">10</td>
<td style="text-align: left;">9</td>
<td style="text-align: left;">12</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;">4</td>
<td style="text-align: left;">3</td>
<td style="text-align: left;">6</td>
<td style="text-align: left;">3</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P3</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>9</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;">7</td>
<td style="text-align: left;">9</td>
<td style="text-align: left;">9</td>
<td style="text-align: left;">11</td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P4</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;">7</td>
<td style="text-align: left;">4</td>
<td style="text-align: left;">9</td>
<td style="text-align: left;">10</td>
<td style="text-align: center;">3</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P5</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: center;">6</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">8</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">2</td>
</tr>
</tbody>
</table>

4)  如 果系统处于安全状态，则对于未来将发生的请求，有合理的分配策略来避免死锁。

5)  安全状态可能由于某个错误的分配而转换为非安全状态，从而无法保证接下来的资源申请不导致死锁

<!-- -->

4.  <strong>避免银行家算法</strong>

    1)  目的：对每次资源申请都判断可否分配以保证系统总在安全状态。

    2)  系统环境：n个并发进程P1～Pn，m种资源R1～Rm

    3)  对于某个进程Pt发出的某次资源申请，算法输入：

        1.  系统总资源向量Total，其中Total\[j\]表示Rj的总量

        2.  最大需求矩阵Max，其中Max\[i, j\]表示Pi对Rj的最大需求量

        3.  当前分配矩阵Used，其中Used\[i, j\]表示Pi已获得Rj的数量

        4.  申请向量Request，其中Request\[j\]表示Pt对Rj的申请数量

        5.  算法输出： Pt的资源申请Request能否得到分配。

    4)  <strong>算法步骤：</strong>

        1.  初始化，计算资源可用向量Available和当前需求矩阵Need。对所有j，Available\[j\] = Total\[j\] - ∑i Used\[i, j\]，Need = Max - Used

        2.  合法检查，检查资源申请与需求矩阵的相容性，未通过则报错。对所有j，检查：Request\[j\] ≤ Need\[t, j\] ？

        3.  资源检查，检查请求的资源是否可用，未通过则阻塞进程Pt。对所有j，检查：Request\[j\] ≤ Available\[j\] ？

        4.  预分配，假定Request得到满足：Available = Available – Request，Used\[t, j\] = Used\[t, j\] + Request\[j\]，Need\[t, j\] = Need\[t, j\] – Request\[j\]

        5.  安全状态检查，检查预分配后的状态是否为安全状态，若不是安全状态则取消第4步的预分配，并阻塞进程Pt。

    5)  例题（还是刚刚那道题）：

        1.  资源总量 (8, 10, 9,12)

        2.  ![原文插图](/Firefly/uploads/course-os/image36.png)

        3.  在当前状态下，如果进程P1申请request=(1，0，1，0)，系统能否分配？

<table style="width:99%;">
<colgroup>
<col style="width: 6%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 14%" />
</colgroup>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;"><strong>进程</strong></td>
<td colspan="4" style="text-align: center;"><strong>Max</strong></td>
<td colspan="4" style="text-align: center;"><strong>Used</strong></td>
<td colspan="4" style="text-align: center;"><strong>Need</strong></td>
<td colspan="4" style="text-align: center;"><strong>Available</strong></td>
<td rowspan="2" style="text-align: center;"><strong>Finished</strong></td>
</tr>
<tr>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;">1</td>
<td style="text-align: left;">1</td>
<td style="text-align: left;">1</td>
<td style="text-align: left;">2</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P1</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;">8</td>
<td style="text-align: left;">10</td>
<td style="text-align: left;">9</td>
<td style="text-align: left;">12</td>
<td style="text-align: center;">５</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;">3</td>
<td style="text-align: left;">3</td>
<td style="text-align: left;">5</td>
<td style="text-align: left;">3</td>
<td style="text-align: center;">１</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P3</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>9</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;">６</td>
<td style="text-align: left;">８</td>
<td style="text-align: left;">９</td>
<td style="text-align: left;">11</td>
<td style="text-align: center;">４</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P4</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;">６</td>
<td style="text-align: left;">４</td>
<td style="text-align: left;">８</td>
<td style="text-align: left;">10</td>
<td style="text-align: center;">３</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P5</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: center;">５</td>
<td style="text-align: center;">３</td>
<td style="text-align: center;">７</td>
<td style="text-align: center;">５</td>
<td style="text-align: center;">２</td>
</tr>
</tbody>
</table>

4.  在当前状态下，如果进程P3申请request=(1，0，0，1)，系统能否分配？

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 13%" />
</colgroup>
<tbody>
<tr>
<td rowspan="2" style="text-align: center;"><strong>进程</strong></td>
<td colspan="4" style="text-align: center;"><strong>Max</strong></td>
<td colspan="4" style="text-align: center;"><strong>Used</strong></td>
<td colspan="4" style="text-align: center;"><strong>Need</strong></td>
<td colspan="4" style="text-align: center;"><strong>Available</strong></td>
<td rowspan="2" style="text-align: center;"><strong>Finished</strong></td>
</tr>
<tr>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;"><strong>A</strong></td>
<td style="text-align: left;"><strong>B</strong></td>
<td style="text-align: left;"><strong>C</strong></td>
<td style="text-align: left;"><strong>D</strong></td>
<td style="text-align: left;">１</td>
<td style="text-align: left;">１</td>
<td style="text-align: left;">１</td>
<td style="text-align: left;">２</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P1</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;"><strong>P2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;">３</td>
<td style="text-align: left;">３</td>
<td style="text-align: left;">６</td>
<td style="text-align: left;">２</td>
<td style="text-align: center;">１</td>
</tr>
<tr>
<td style="text-align: center;"><strong>P3</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>6</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>9</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;"><strong>P4</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>8</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>1</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>7</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
<td style="text-align: left;"></td>
</tr>
<tr>
<td style="text-align: center;"><strong>P5</strong></td>
<td style="text-align: left;"><strong>4</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>5</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>2</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: left;"><strong>0</strong></td>
<td style="text-align: left;"><strong>3</strong></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>

8)  死锁的解决——死锁的检测与恢复

    1.  若系统未采取任何预防死锁或避免死锁的措施，则可以安排专门的检测程序，定期对系统进行检查，以发现正在发生的死锁，并将其恢复。

    2.  死锁检测的思路：“最好情况”下的模拟运行

        1)  假设各进程在满足了<strong>当前的资源申请</strong>后将立即归还已分配资源

        2)  试图找到<strong>满足所有进程当前资源申请的分配顺序</strong>

            1.  在检测中，用资源分配图G = (V，E)表示当前资源分配与申请的情况。

            2.  V为结点集。V = P∪R，其中P是进程结点子集，R是资源结点子集

            3.  E为有向边集。从P中结点pi指向R中结点rj的边称作申请边，表示进程pi申请一个单位的资源rj，从R中结点rj指向P中结点pi的边称作分配边，表示已分配一个单位的资源ri给进程pj。

            4.  在画图时，用圆“○”表示进程结点，用正方形“□”表示资源结点，如果某类资源的数量有多个，则在对应的正方形“□”内用实心圆点表示其数量。

            5.  例子：R1、R2、R3、R4、R5和R6数量分别为2、1、1、1、1和2

|          |                              |                 |
|:--------:|:-----------------------------|:----------------|
| <strong>进程</strong> | <strong>已分配的资源</strong>             | <strong>申请的资源</strong>  |
|  <strong>A</strong>   | <strong>2个单位的R1</strong>              | <strong>1个单位的R3</strong> |
|  <strong>B</strong>   | <strong>1个单位的R5</strong>              | <strong>1个单位的R1</strong> |
|  <strong>C</strong>   | <strong>1个单位的R2</strong>              | <strong>1个单位的R4</strong> |
|  <strong>D</strong>   | <strong>1个单位的R3，1个单位的R6</strong> | <strong>1个单位的R5</strong> |
|  <strong>E</strong>   | <strong>1个单位的R4</strong>              | <strong>1个单位的R6</strong> |

![原文插图](/Firefly/uploads/course-os/image37.png)

6.  利用资源分配图的化简来表达“模拟运行”过程，从而检测死锁

    1)  1\. 找到满足以下条件的进程Ps，若找不到则跳转到步骤3：Ps不是孤立点，且Ps的所有申请边都可得到分配（或无申请边）

    2)  2\. 模拟Ps获得分配后归还已分配资源，即消除其所有申请边与分配边，回到步骤1

    3)  3\. 得出结论：若图中全为孤立点则当前未死锁，否则当前死锁，非孤立点表示死锁的进程

<!-- -->

9)  死锁的恢复：

    1.  剥夺资源：在死锁发生时（与预防阶段不同），剥夺（某个）死锁进程的资源。

    2.  撤销进程：在死锁发生时撤销（某个）死锁的进程。

    3.  重新启动系统：在死锁发生时重新执行所有进程。

10) 鸵鸟算法：由于死锁现象是小概率事件，现有的操作系统一般不考虑它的存在，而不做特殊应对。

    <strong>第五章：</strong>

    ![原文插图](/Firefly/uploads/course-os/image38.png)

<!-- -->

1.  <strong>物理地址和逻辑地址</strong>：

    1)  程序在运行时被装入到内存中，其中的指令与数据的位置用地址值表示，地址值的表现形式可分为：

        1.  逻辑（虚拟）地址：指令或数据在程序中的编号（位置）

        2.  物理地址：指令或数据在内存中的位置

2.  <strong>存储器管理的主要功能</strong>

    存储器管理主要是对用户空间进行管理，其目的是提高主存储器的利用率，方便用户对主存储器的使用

    1)  存储空间的分配和回收

        1.  在程序装入时，根据程序的虚拟地址空间的大小，找出一些合适的存储单元，用于存放装入程序的指令和数据，称为存储空间的分配。在进程结束后，进程撤销原语把进程所占用的存储空间归还或释放，即存储空间的回收。

        2.  主要任务

            1)  设计合理的数据结构，登记存储单元的使用情况

            2)  设计分配算法提高存储器利用率

            3)  存储空间回收

    2)  重定位

        1.  程序中的变量与指令用逻辑地址加以引用，则为了在运行时正确访问这些变量或指令，需要进行<strong>重定位（或称地址转换）</strong>，以确定实际的物理地址。

        2.  根据地址转换操作的时机，重定位分为：

            1)  <strong>静态重定位</strong>：操作系统装入程序时修改其中所引用的<strong>逻辑地址值</strong>为<strong>物理地址值</strong>——<strong>由操作系统实现</strong>

            2)  <strong>动态重定位</strong>：在运行过程中需要做访问操作时才进行地址转换——由CPU的<strong>存储管理单元（MMU）</strong>自动实现，操作系统<strong>只登记MMU</strong>进行重定位时需要的相关信息。

<table>
<colgroup>
<col style="width: 39%" />
<col style="width: 30%" />
<col style="width: 30%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"><p><strong>静态重定位</strong></p></td>
<td style="text-align: center;"><p><strong>动态重定位</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>硬件支持</strong></p></td>
<td style="text-align: center;"><p><strong>不需要</strong></p></td>
<td style="text-align: center;"><p><strong>需要</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>操作系统的工作</strong></p></td>
<td style="text-align: center;"><p><strong>装入时修改程序</strong></p></td>
<td style="text-align: center;"><p><strong>登记MMU所需信息</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>程序装入</strong></p></td>
<td style="text-align: center;"><p><strong>被修改</strong></p></td>
<td style="text-align: center;"><p><strong>直接装入</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>程序运行时移动</strong></p></td>
<td style="text-align: center;"><p><strong>困难</strong></p></td>
<td style="text-align: center;"><p><strong>容易</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>程序的不连续装入</strong></p></td>
<td style="text-align: center;"><p><strong>困难</strong></p></td>
<td style="text-align: center;"><p><strong>容易</strong></p></td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>其他技术支持</strong></p>
<p><strong>（动态链接、虚拟存储 等）</strong></p></td>
<td style="text-align: center;"><p><strong>难以实现</strong></p></td>
<td style="text-align: center;"><p><strong>容易实现</strong></p></td>
</tr>
</tbody>
</table>

3)  <strong>决定采用静态重定位或动态重定位，并进行相应的工作</strong>

<!-- -->

3)  存储空间的共享与保护

    1.  存储空间的共享是指<strong>多个进程可以访问同一个存储区</strong>，避免将同一组数据或程序为每个进程分配一个独立的存储区造成的存储空间浪费。

    2.  存储空间保护的基本要求是：各进程只能访问其占有的存储单元的指令或数据，不能访问已经分分配给其他进程的存储单元或未分配的空闲存储单元（<strong>进程地址空间是私有的</strong>）

    3.  存储空间的保护是在重定位过程中对虚拟地址和物理地址的检查，基本的存储保护方法有以下几种

        1)  利用处理器的特权级，防止跨级访问

        2)  利用MMU的界限寄存器规则，防止同级间访问

        3)  操作系统设置和检查存储区域的保护键与当前进程的键及操作是否匹配

<!-- -->

1.  存储器的管理方法

    存储器管理的方法，从程序的角度分为：

    1)  非分段管理：将进程的数据、代码、堆栈作为一个完整逻辑空间

    2)  分段管理：进程的数据、代码、堆栈，各自作为独立的逻辑空间

        从内存分配的角度分为：

    <!-- -->

    1)  分区管理：一个逻辑空间对应物理空间中一个分区，连续分配

    2)  分页管理：一个逻辑空间分为多个页，每页装入物理空间的一个块中，可不连续分配

    3)  较为先进（复杂）的综合方法：段页式内存管理

        ![原文插图](/Firefly/uploads/course-os/image39.png)

2.  非段式分区管理

    1)  <strong>A：单一连续区存储管理</strong>

        1.  操作系统占用内核空间之外，将整个用户空间看作一个内存区域，一次只能装入一道用户程序，只有用户区中的程序运行完毕方可装入下一道程序。

        2.  ![原文插图](/Firefly/uploads/course-os/image40.png)

            1)  常用<strong>静态重定位</strong>

            2)  管理<strong>简单</strong>

            3)  <strong>无须复杂硬件支持</strong>

            4)  只允许<strong>单任务</strong>

        3.  为实现单一连续区存储管理（以及其他任何存储管理方法），操作系统采用<strong>请求表</strong>来记录<strong>请求装入</strong>内存的<strong>程序信息。</strong>

|              |                                        |
|:------------:|:--------------------------------------:|
| <strong>程序标识</strong> | <strong>需要的空间长度（虚拟地址空间大小）</strong> |
|    <strong>A</strong>     |                <strong>50K</strong>                 |
|    <strong>B</strong>     |                <strong>90K</strong>                 |
|    <strong>C</strong>     |                <strong>130K</strong>                |
|    <strong>D</strong>     |                <strong>10K</strong>                 |
|    <strong>E</strong>     |                <strong>165K</strong>                |

2)  <strong>B:固定分区存储管理</strong>

    1.  操作系统占用<strong>内核空间</strong>之外，将整个<strong>用户空间</strong>划分为若干个固<strong>定大小</strong>的区域（大小可不相等）。<strong>多道程序分别装入</strong>不同的分区内，<strong>一道程序</strong>只能装入<strong>一个分区</strong>，而<strong>一个分区</strong>也只能分配给<strong>一道程序</strong>。

    2.  ![原文插图](/Firefly/uploads/course-os/image41.png)

    3.  为实现固定分区存储管理，操作系统必须记录<strong>各分区的位置和使用情况</strong>，采用关键数据结构——<strong>分区说明表（DPT）</strong>

    4.  ![原文插图](/Firefly/uploads/course-os/image42.png)

|          |          |              |          |
|:--------:|:--------:|:------------:|:--------:|
| <strong>区号</strong> | <strong>长度</strong> | <strong>起始地址</strong> | <strong>状态</strong> |
|    1     |   75k    |     32k      |    1     |
|    2     |   30k    |     107k     |    0     |
|    3     |   140k   |     137k     |    1     |
|    4     |   11k    |     277k     |    1     |

![原文插图](/Firefly/uploads/course-os/image43.png)

5.  固定分区存储管理一般<strong>采用静态重定位</strong>，配合<strong>界限寄存器</strong>法防止各进程彼此访问存储区域（<strong>存储保护</strong>）。

6.  ![原文插图](/Firefly/uploads/course-os/image44.png)

7.  <strong>固定分区存储管理</strong>的特点：

    1)  支持<strong>多道程序</strong>设计

    2)  并发执行<strong>进程数</strong>受到<strong>分区数限制</strong>

    3)  程序<strong>可用空间</strong>受<strong>分区大小限制</strong>

    4)  存储区存在“<strong>碎片</strong>”——<strong>长作业优先、输入队列法</strong>

<!-- -->

3)  <strong>C：可变分区存储管理</strong>

    1.  在<strong>程序装入</strong>时选择<strong>一个空闲区域。</strong>如果空闲区长度等于程序的实际需求量，就可以直接分配；否则分成两个分区，其中一个分区的长度等于当前程序的需求量，分配给程序，另一个分区作为空闲区保留下来。进程完成被撤销后，回收其占用的分区，成为空闲区。（在程序装入时选择一个空闲区域并在其中动态创建一个分区以装入程序。）

    ![原文插图](/Firefly/uploads/course-os/image45.png)

    2.  为实现可变分区存储管理，操作系统需要<strong>记录空闲内存区域的位置，</strong>可采用以下两种数据结构：

        1)  可用表

            1.  类似分区说明表，但其中的记录是变化的，且状态1表示空闲，而状态0表示记录无效（预留）。

![原文插图](/Firefly/uploads/course-os/image46.png)

2.  缺陷：表的长度受到限制，从而导致可以表示的空闲区个数受到限制，影响并发进程的个数

<!-- -->

2)  空闲区链表——用链表形式记录空闲区

    1.  链表结点：

        1)  struct FreeNode {

        2)  long start； //分区的起始地址

        3)  long length； //分区的长度

        4)  struct FreeNode \*next； //向下指针

        5)  }

![原文插图](/Firefly/uploads/course-os/image47.png)

3)  请求表

    1.  请求表用于管理要求装入内存的程序信息，其结构包括程序名和虚拟地址空间大小

|        |                  |
|--------|------------------|
| 程序名 | 虚拟地址空间大小 |
| E      | 165K             |
|        |                  |

2.  当进程撤销时，系统回收了新的空闲区。这时候需要检查请求表是否有程序可以装入内存。

<!-- -->

3.  当程序请求装入时，进行空间分配的算法：

    1)  <strong>最先适应法（FF）</strong>：依次查找空闲区，选择<strong>首个</strong>足够大的空闲区装入程序

    2)  <strong>最佳适应法（BF）</strong>：在<strong>所有足够装入</strong>程序的空闲区中选择<strong>最小者</strong>

    3)  <strong>最坏适应法（WF）</strong>：在<strong>所有足够装入</strong>程序的空闲区中选择<strong>最大者</strong>

4.  例子：程序A、B、C和D，它们需要申请的空间大小分别是80K、30K、130K和25K。

    ![原文插图](/Firefly/uploads/course-os/image48.png)

5.  三种算法的优势和缺点：

    1)  最先适应法（FF）：<strong>分配速度最快</strong>，但对内存使用无规划。

    2)  最佳适应法（BF）：找到的空闲区与请求<strong>最“匹配”</strong>，对大程序的装入有充分准备，但<strong>易产生（外）碎片</strong>。\[外碎片是理论可用，实际不可用，内碎片是理论不可用实际不可用\]

    3)  最坏适应法（WF）：不易产生（外）碎片，但容易<strong>造成大程序装入的失败。</strong>

6.  当进行存储区回收时，原先的分配区变为一个新的空闲区，有以下四种情况：

    1)  新空闲区前后皆为分配区：<strong>增加新空闲区结点</strong>

    2)  新空闲区<strong>前为空闲区</strong>，后为分配区：<strong>修改前区结点</strong>

    3)  新空闲区前为分配区，<strong>后为空闲区</strong>：<strong>修改后区结点</strong>

    4)  新空闲区前后皆为空闲区：<strong>修改前区结点，删除后区结点</strong>

![原文插图](/Firefly/uploads/course-os/image49.png)

7.  为了使可变分区存储管理的空闲区得到更好利用，操作系统需要对<strong>（外）碎片进行整合（非必要）</strong>，这需要将已经装入的程序进行移动，即<strong>“移动技术”</strong>。

    1)  由于可能需要将已装入的程序进行移动，<strong>可变分区存储管理常采用动态重定位方式</strong>。

    2)  进程变为<strong>运行状态</strong>时，其<strong>基址和界限</strong>将被写入到<strong>MMU的寄存器</strong>中。

    3)  <strong>内存访问（重定位）</strong>时MMU首先检查所访问的<strong>逻辑地址</strong>是否超出<strong>界限寄存器中规定的界限值</strong>（存储保护），若未超出，则

    <strong>物理地址 = 逻辑地址 + 程序基址</strong> （由于<strong>连续装入</strong>）

8.  <strong>可变分区存储管理的特点：</strong>

    1)  <strong>分区个数</strong>和<strong>每个分区的长度</strong>都在<strong>变化</strong>

    2)  <strong>基本分配算法FF、BF和WF</strong>，在存储空间<strong>利用率</strong>上<strong>没有很大差别</strong>

    3)  为进程的<strong>动态扩充</strong>存储空间<strong>提供可能</strong>

    4)  存在<strong>外碎片(External Fragmentation)</strong>，<strong>降低了</strong>存储空间的<strong>利用率</strong>

    5)  存储区<strong>回收时</strong>需要<strong>相邻空闲区的合并</strong>，<strong>增加</strong>系统的<strong>开销</strong>

<!-- -->

3.  <strong>分区管理方法的特点</strong>：

    1)  程序<strong>连续装入</strong>，<strong>管理（重定位和存储保护）</strong>十分<strong>方便</strong>

    2)  存在<strong>碎片</strong>，<strong>存储空间利用率不高</strong>

        1.  <strong>内碎片</strong>——单一连续区和固定分区管理中<strong>除程序占用外的区内部分</strong>

        2.  <strong>外碎片</strong>——动态分区管理中<strong>被分配区分割出的小空闲区</strong>

    3)  程序<strong>大小受分区限制</strong>

        1.  单一连续区和动态分区管理的程序<strong>大小不能超过用户区总长度</strong>

        2.  固定分区管理的程序<strong>总大小不能超过最大分区长度</strong>

4.  <strong>对换和覆盖</strong>

    1)  <strong>对换技术</strong>

        1.  为了<strong>增加并发执行的进程数量</strong>，<strong>操作系统</strong>可采用<strong>对换（Swap）技术。</strong>就是在外存储器（磁盘）中设置一个专门的区域，叫<strong>交换区</strong>。定期使用<strong>交换调度算法</strong>，将<strong>某些就绪或阻塞的进程</strong>写到<strong>交换区（调出）</strong>，并将某些先前转移到交换区上的进程<strong>读入内存中（调入）</strong>。

            ![原文插图](/Firefly/uploads/course-os/image50.png)

    2)  <strong>覆盖技术</strong>

        1.  覆盖技术是另一种对内存进行<strong>逻辑扩充的技术</strong>。它允许程序<strong>自主控制</strong>将其中的子程序装入内存的<strong>可覆盖区</strong>，并<strong>自主控制其执行。</strong>

        2.  <strong>步骤</strong>

            1)  建立可覆盖区

            2)  利用进程管理的EXEC（系统调用）功能装入可覆盖子程序的程序文件

            3)  调用子程序

            4)  撤销可覆盖区

        ![原文插图](/Firefly/uploads/course-os/image51.png)

    3)  <strong>对换和覆盖的比较</strong>

![原文插图](/Firefly/uploads/course-os/image52.png)

5.  <strong>分页存储管理</strong>

    1)  <strong>内存分块</strong>：将内存空间分割为<strong>若干个等长的小区域</strong>，这些区域称作<strong>块</strong>或帧。块的大小通常为2k字节。

        ![原文插图](/Firefly/uploads/course-os/image53.png)

    2)  <strong>程序分页</strong>：程序装入内存前按照<strong>块的大小分为若干页</strong>，依次将这些页编号为0、1、2、……

    3)  程序的装入：<strong>每一页被装入到内存的一块</strong>中，块（页）内连续装入，但块的位置<strong>可以是不连续的</strong>。

        1.  进程的堆栈也将分页存入块中。

    4)  分页机制下，<strong>若块（页）的大小通常为2k字节</strong>，则某逻辑地址a对应的<strong>页号p</strong>和<strong>页内地址ω</strong>：

        1.  p = a / 2k

        2.  ω = a % 2k

        3.  p = a \>\> k

        4.  ω = a & (2k – 1)

        5.  n位逻辑地址的高位和低位分别指示了<strong>其页号和页内地址</strong>

![原文插图](/Firefly/uploads/course-os/image54.png)

5)  根据页被装入的时机，分页存储管理分为两类：

    1.  <strong>静态（基本）分页</strong>：程序装入内存时<strong>装入其所有的页</strong>

        1)  特点

            1.  运行<strong>速度快</strong>，<strong>实现方法简单</strong>

            2.  程序所需空间<strong>不能超过实际内存大小</strong>

        2)  静态分页技术需要记录以下关键数据：

            1.  记录内存中各块的<strong>使用（空闲/被分配）情况</strong>

                1)  <strong>位示图法</strong>：内存的<strong>第b个块</strong>的使用情况被记录在一个位示图<strong>第i个字的第j位</strong>上，0表示空闲，1表示已被分配

                    1.  <strong>b = 字长×i + j</strong>

                    2.  <strong>i = b / 字长</strong>

                    3.  <strong>j = b % 字长</strong>

                    4.  <strong>n个字</strong>的位示图可表示“<strong>字长×n</strong>”个块。

                2)  <strong>空闲块链表法</strong>：建立<strong>链表</strong>来记录<strong>空闲块的编号</strong>。

            2.  用<strong>页表（Page Table）</strong>记录进程中的<strong>页与内存中的块的对应情况</strong>

                1)  每个进程<strong>创建时</strong>将建立该进程的<strong>页表</strong>，以记录进程的<strong>各个页</strong>被装入到内存中的<strong>块的编</strong>号。操作系统还将页表的<strong>起始位置（页表基址）</strong>及<strong>页的个数（页表限长</strong>）记录在进程的<strong>PCB</strong>中以备<strong>重定位</strong>时<strong>MMU</strong>使用。

![原文插图](/Firefly/uploads/course-os/image55.png)

3)  <strong>重定位与存储保护</strong>

    静态分页技术<strong>采用动态重定位</strong>，同时进行存储保护：

    页数=虚拟地址空间大小/页大小。页表分配内存块时，每页对应位示图里空闲的块。

    1.  进程创建时，<strong>建立页表</strong>，记录<strong>页表基址、页表限长</strong>。

![原文插图](/Firefly/uploads/course-os/image56.png)

2.  进程变为<strong>运行状态</strong>时，将<strong>页表基址和页表限长</strong>写入<strong>MMU的寄存器中</strong>。

![原文插图](/Firefly/uploads/course-os/image57.png)

3.  进行<strong>内存访问</strong>时，MMU区分<strong>逻辑地址的页号与页内地址</strong>

![原文插图](/Firefly/uploads/course-os/image58.png)

4.  <strong>MMU检查页号是否越界</strong>（超出页表限长）

![原文插图](/Firefly/uploads/course-os/image59.png)

5.  MMU<strong>按照页号查找页表</strong>以确定块号

![原文插图](/Firefly/uploads/course-os/image60.png)

6.  MMU根据<strong>块号与页（块）内地址确定物理地址</strong>

![原文插图](/Firefly/uploads/course-os/image61.png)

4)  已知道虚拟地址x，块长/页大小为2K（假设）。则页号p=x/2k，然后根据p，在页表查找对应的块号b。W=x%2k，物理地址=b\*2k+w。

5)  <strong>静态分页技术的优点</strong>：

    1.  允许<strong>非连续存储</strong>，<strong>提高存储器利用率</strong>

    2.  <strong>页长度与块长度相等</strong>，<strong>无须采用复杂分配策略</strong>

    3.  为虚拟存储技术提供<strong>基本数据结构支持</strong>

6)  <strong>静态分页技术的不足：</strong>

    1.  重定位时<strong>两次访存（查找页表和读取数据）</strong>，增大了CPU的开销。

    2.  <strong>解决方案：</strong>利用特殊存储硬件——“<strong>快表</strong>”（TLB：Translation Lookaside Buffers）<strong>存储进程的部分页表</strong>，访存时先在TLB中查询。

    3.  给定时间段内，MMU在访问页对应的块时，若有<strong>m</strong>次在快表中得到块号，有<strong>n</strong>次在页表中得到块号，那么，这个时间段MMU的快表命中率<strong>：</strong>$h=\frac{m}{m+n}\times100\%$

<!-- -->

2.  <strong>虚拟存储器</strong>

    1)  虚拟存储技术：并不将整个程序装入内存中，<strong>而是只装入一部分</strong>，而将其余部分留在外存中，在运行过程中根据需要<strong>动态</strong>地把程序的其他部分调入或者把已调入的部分调出内存。

    2)  虚拟存储技术使系统<strong>仿佛拥有充分大的内存</strong>，从而可以运行超过其物理内存容量的大程序。

    3)  <strong>程序的局部性原理（理论基础）</strong>：

        1.  在程序运行过程的一个较小时间范围内，<strong>只需要一小部分的程序信息</strong>，其他部分暂时不需要。

        2.  在程序的一次执行过程中，程序的所有指令和数据被访问的<strong>概率间存在不平衡性</strong>。

    4)  <strong>程序的局部性的规律</strong>：

        1.  <strong>时间局部性</strong>：某地址的信息被访问后，<strong>短时间内很可能再次被访问</strong>。

        2.  <strong>空间局部性</strong>：某地址的信息被访问后，<strong>与其临近的信息很可能被访问。</strong>

    5)  <strong>调入策略</strong>

        1.  请求调入策略：需要时调入（主要是用这个）

        2.  预调入策略：在处理器运行之前，事先把将要访问的程序指令或数据调入内存

3.  <strong>请求分页——动态分页</strong>：程序装入时<strong>仅装入某些页</strong>，而其他的页暂时<strong>保存在外存</strong>中，待需要使用时再替换内存中的页。动态分页技术<strong>按页</strong>对程序进行动态的<strong>调入调出</strong>，是实现虚拟存储的理想方法之一。

    1)  特点

        1.  程序所需空间<strong>能够超过实际内存大小</strong>

        2.  运行<strong>速度慢</strong>，实现方法<strong>复杂</strong>

    2)  动态分页技术按照虚拟存储的调入策略分为：

        1.  <strong>请求分页</strong>（请求调入）：当处理器发现需要访问的信息<strong>不在内存中</strong>时，将其<strong>调入内存</strong>。

        2.  <strong>预调入</strong>分页：在处理器访问信息前，<strong>先将信息调入内存</strong>，保证处理器需要访问的信息总已在内存中。

    3)  与静态分页技术不同，在动态分页中，页表不但需要记录页对应的块的编号，还需记录：

        1.  页是否在内存中？ 中断位P

        2.  页在装入后是否再次被访问过？ 访问位A

        3.  页在装入后是否被修改？ 修改位M

        4.  页在外存中的位置 外存地址

        5.  扩充页表的基本结构由页号、块号、外存地址、中断位P、访问位A、修改位M等组成，用于让CPU区分内、外存的页信息

    4)  请求分页的<strong>重定位</strong>过程与静态分页大致相同<strong>（由MMU完成）</strong>：

        1.  根据<strong>页号</strong>在<strong>快表</strong>中查找，若<strong>找到</strong>且通过<strong>访问权限检查</strong>则访问<strong>物理地址</strong>，置该页<strong>A=1</strong>。

        2.  若在快表中<strong>未找到</strong>且页号<strong>未越界，</strong>则<strong>在页表中查找</strong>，若找到的页<strong>P=1</strong>且通过<strong>访问权限检查</strong>则访问<strong>物理地址</strong>，置该页<strong>A=1</strong>（并将此页信息写入快表中）。

        3.  若页表中找到的页<strong>P=0</strong>，则MMU发出一个<strong>缺页中断</strong>。

        4.  <strong>当缺页中断</strong>发生时，将进入操作系统的<strong>缺页中断处理程序</strong>：

            1)  保护现场

            2)  获取空闲块

                1.  若系统有空闲块，则选择一个空闲块

                2.  若无空闲块，则根据<strong>某种策略</strong>，选择一个页，保存<strong>其已发生的修改（判断M位）</strong>，<strong>并调出内存（P=0）</strong>，以得到一个空闲块

            3)  将所缺的页写入空闲块中，<strong>并置P=1，A=0，M=0</strong>

    5)  当需要选择<strong>一个淘汰页</strong>时，可采取<strong>两种页面调度</strong>方式之一：

        1.  <strong>局部页面调度</strong>——只在<strong>同进程的页面</strong>中选择淘汰页

        2.  <strong>全局页面调度</strong>——在<strong>所有进程的页面</strong>中选择淘汰页

    6)  <strong>置换（淘汰）算法</strong>是选择淘汰页的具体策略。好的置换算法可以<strong>减少缺页中断发生的次数</strong>，<strong>避免反复进行调入调出（抖动现象）。</strong>最理想的置换算法能选择<strong>今后不会被访问到或者最长时间之后才会被访问到的页</strong>来作为淘汰页。但这一目标难以实现。

        1.  <strong>先进先出（FIFO）算法</strong>

            1)  选择存在于内存中最久的页作为淘汰页

        2.  <strong>最久未使用（LRU）算法</strong>

            1)  选择最长时间未被使用的页作为淘汰页

            2)  LRU算法在实际应用中取得很好效果，但需要<strong>硬件特殊支持</strong>（重定位未缺页时修改页序列）。

        3.  <strong>最近未使用（NRU）算法</strong>——LRU的近似实现

            1)  定期重置A=0，选择最近（上次重置以来）未被使用的某页

        4.  <strong>最不常用（LFU）算法</strong>

            1)  记录页面使用次数，<strong>选择最少被使用的页</strong>作为淘汰页

            2)  LFU算法也需要<strong>硬件特殊支持</strong>（重定位未缺页时更新页的使用次数记录），<strong>且使得新装入的页很容易被淘汰。</strong>

        5.  <strong>二次机会（Second Chance）算法</strong>

            1)  在FIFO的基础上选择淘汰页，但<strong>淘汰前进行检查</strong>，若选择到的页<strong>A=1</strong>，则不淘汰此页，<strong>重置其A=0</strong>并将其放置<strong>回页序列末端</strong>，并转而选择下一页并检查。

            2)  二次机会算法在FIFO的基础上<strong>考虑了页的使用情况</strong>。

            3)  二次机会（Second Chance）算法也被称为时钟算法，因为页序列可以放置在一个钟面上来考虑。

            4)  ![原文插图](/Firefly/uploads/course-os/image63.png)

            5)  二次机会算法还可以同时考虑<strong>保存页（若被修改）的开销</strong>。将页分为四类：\[开销看M，抖动看A\]

                1.  ① A=0，M=0。淘汰这类页I/O<strong>开销小</strong>，抖动现象可能性<strong>小</strong>；

                2.  ② A=0，M=1。淘汰这类页I/O<strong>开销大</strong>，抖动现象可能性<strong>小</strong>；

                3.  ③ A=1，M=0。淘汰这类页I/O开销<strong>小</strong>，抖动现象可能性<strong>大</strong>；

                4.  ④ <strong>A=1，M=1。淘汰这类页I/O开销大，抖动现象可能性大</strong>；

            6)  检查步骤：

                1.  \(1\) 查找①类页的，如果找到则淘汰，算法完成；

                2.  \(2\) 查找②类页的，如果找到则淘汰，算法完成；查找过程中，置A=0.

                3.  \(3\) 返回(1)，进行第二遍查找

        6.  页缓冲算法

            1)  设置<strong>两个容量界限T0和T1</strong>，其中<strong>T0 \> T1</strong>。

            2)  在某次装入缺页的过程中

                1.  <strong>若剩余空闲块数量低于T0</strong>，则<strong>重置所有页的A=0</strong>

                2.  <strong>若剩余空闲块数量低于T1</strong>，<strong>则将所有A=0的页信息存入链表M0（未被修改的页）和M1（被修改的页）中</strong>，并将这些页“<strong>淘汰</strong>”（<strong>仅置P=0，但未被替换</strong>）

            3)  当缺页发生时

                1.  若所缺页在<strong>M0或M1</strong>中，则恢复其<strong>P=1，</strong>并<strong>移除出链表</strong>

                2.  若所缺页<strong>不在M0或M1</strong>中，则<strong>获取空闲块</strong>并<strong>装入缺页</strong>，其间先尝试<strong>淘汰M0</strong>中的页，若M0为空，则<strong>淘汰M1</strong>中的页，或者<strong>所有页</strong>

        7.  <strong>例子</strong>：一个进程运行过程依次访问的页号(也称进程的引用序列)是：0、2、3、1、4、1、2、3、5、2、3、1、4、5、0、3、6、9、8、3、6、7、3、6、9、8、7。假定该进程可以使用4个块，按局部页面调度，如何计算缺页中断的次数？依次淘汰的页号是哪些？

            1)  <strong>FIFO：</strong>

                ![原文插图](/Firefly/uploads/course-os/image64.png)

                缺页中断次数：22

            2)  <strong>LRU：</strong>

                ![原文插图](/Firefly/uploads/course-os/image65.png)

                缺页中断次数：17

            3)  <strong>LFU：</strong>

                ![原文插图](/Firefly/uploads/course-os/image66.png)

                缺页中断次数：8

            4)  <strong>二次机会：</strong>

                ![原文插图](/Firefly/uploads/course-os/image67.png)

                缺页中断次数：9

<!-- -->

6)  缺页率

    1.  <strong>缺页率</strong>是<strong>分页管理</strong>的<strong>评价指标之一</strong>。

    2.  如果<strong>一个进程在一段时间内</strong>的<strong>引用序列长度为n</strong>，它在执行过程中，产生缺页<strong>中断的次数为m</strong>，那么，该进程执行这个引用序列的缺页率定义为：$f=\frac{m}{n}\times100\%$![原文插图](/Firefly/uploads/course-os/image69.png)

    3.  一般而言，对于某个进程，<strong>可使用的内存块数越</strong>多，它在运行过程产生的<strong>缺页率越小</strong>。

    4.  但对于某些置换算法（如FIFO），有可能在一些情况下<strong>存在相反的现象，即Belady现象</strong>。

        1)  <strong>Belady现象：随着内存块数增加，缺页率没有减小，甚至反而增加</strong>![原文插图](/Firefly/uploads/course-os/image70.jpeg)

7)  <strong>分页存储管理的特点：</strong>

    1.  非连续的存储分配，提高了存储空间的利用率

    2.  实现虚拟存储技术

    3.  分页破坏了程序的完整性

    4.  请求分页存在抖动现象，降低CPU的利用率

    5.  页表占用额外的存储开销

8)  动态分配的改进技术

    1.  <strong>工作集</strong>

        1)  一个进程当前<strong>正在使用的页的集合</strong>称作当前的“<strong>工作集</strong>”。

        2)  若进程的当前工作集<strong>全部存在于内存中</strong>，则在一段时间内<strong>不会发生“缺页”</strong>，从而避免抖动。

        3)  一些操作系统设置专门程序来<strong>检测</strong>和<strong>预测进程</strong>的工作集，以便：

            1.  <strong>为置换（淘汰）算法做进一步参考</strong>

            2.  当总工作集大小<strong>超出</strong>内存块总量时，<strong>考虑使用对换技术</strong>

    2.  <strong>反向页表</strong>

        1)  目的：<strong>减小页表占用的总存储空间</strong>

        2)  思路：以<strong>块号（而非页号）为序建立反向页表</strong>。

![原文插图](/Firefly/uploads/course-os/image71.png)

3)  反向页表的重定位：

    1.  由于页表的主要作用是实现重定位，因此系统可以按照内存块统一建立一个表，称为反向页表，其结构由进程号（pid)和页号（p)组成，按块号顺序，每个块对应着反向页表中的一个表项，如果一个块是分配状态，则对应表项内容为（pid，p)，否则，表项内容为空。

        ![原文插图](/Firefly/uploads/course-os/image72.png)

<!-- -->

3.  多级页表

    1)  目的：减小页表占用的物理存储空间

    2)  思路：<strong>对一个完整的页表划分为若干个小页表</strong>（每个记录2t个页），实现对<strong>页表本身的虚拟存储。</strong>

![原文插图](/Firefly/uploads/course-os/image73.png)

![原文插图](/Firefly/uploads/course-os/image74.png)

3)  多级页表的重定位：

    1.  每个进程都对应一个页目录表，依次登记该进程的页表状态信息。与页表一样，一个进程的页目录表PDT共有1024个表项，每个表项占4B，所以一个页目录表共4KB，正好占用一个内存块。

4)  从虚拟地址寄存器得到当前访问的虚拟地址所在的目录号d、页号p和页内地址w；如果页号p在TLB快表中，则直接形成物理地址，否则，从页目录基址寄存器中得到页目录表。

5)  根据目录号d检查页目录表，如果对应的页表在内存中，则根据页号p检查页表，如果页号p的中断位P=1,则该页在内存中，从页表中得到块号，形成物理地址；如果页号p的中断位P=0，产生缺页中断。如果目录表中目录号d对应的页表不在内存中，则建立或读取对应的页表。

    ![原文插图](/Firefly/uploads/course-os/image75.png)

6)  <strong>页长定制</strong>

7)  在分页存储管理中，<strong>页（块）越长，则页表越短</strong>，但可能产生的碎片（不足页）越大。

8)  假设系统中<strong>页的长度为p</strong>，系统所需处理的<strong>进程的平均长度为</strong>s，页表中<strong>每个表项的长度为e</strong>，那么，则

    1.  每个进程需要占用的页表空间约为<strong>es/p</strong>

    2.  每个进程产生约<strong>p/2</strong>大小的碎片

9)  于是，每个进程的额外存储开销：f(p) = <strong>es/p+p/2。</strong>

    当 $p=\sqrt{2es}$时，f取最小值。![原文插图](/Firefly/uploads/course-os/image77.png)

<!-- -->

6.  分段存储管理

    1)  将进程按其内部结构划分为<strong>若干段</strong>，将每段看作<strong>一个独立的逻辑空间</strong>，段的<strong>内部独立编排地址</strong>（段内地址）。

    2)  使用二维逻辑地址，即“<strong>段号:段内地址</strong>”的形式。

    3)  <strong>将进程分段，并按段编址，便于实现</strong>：

        1.  进程的<strong>段内动态扩展</strong>

        2.  进程的<strong>非连续装入</strong>（各段可装入到不连续的物理内存区域中）

        3.  <strong>虚拟存储技术</strong>（按段调入调出）

        4.  <strong>模块共享</strong>

    4)  <strong>段表</strong>

        1.  在<strong>分区存储系统</strong>上<strong>装入段</strong>和<strong>回收空闲区</strong>的过程与<strong>无分段</strong>机制时<strong>相同</strong>。

        2.  为记录进程中各段的信息，<strong>必须维护数据结构</strong>——<strong>段表</strong>

        3.  在<strong>可变分区存储系统</strong>上，段表中的每一项记录的信息有：<strong>段号、段长度、所在内存分区起始地址（段基址）</strong>、<strong>外存地址、存取控制信息、中断位P、访问位A和修改位M</strong>等。

    5)  <strong>重定位</strong>

        1.  进程创建时，<strong>建立段表，记录段表基址、段表长度</strong>。

    ![原文插图](/Firefly/uploads/course-os/image78.png)

    2.  进程变为运行状态时，将段表基址和段表长度<strong>写入MMU的寄存器中</strong>。

    ![原文插图](/Firefly/uploads/course-os/image79.png)

    3.  进行内存访问时， <strong>MMU检查段号是否越界（超出段表长度）</strong>

    ![原文插图](/Firefly/uploads/course-os/image80.png)

    4.  MMU按照段号查找段表，<strong>并检查段内地址是否越界（超出段长）</strong>

    ![原文插图](/Firefly/uploads/course-os/image81.png)![原文插图](/Firefly/uploads/course-os/image82.png)

    5.  MMU根据<strong>段基址与段内地址</strong>确定物理地址

    ![原文插图](/Firefly/uploads/course-os/image83.png)

    6.  若重定位时所需要的段<strong>不在内存中（P = 0），MMU将发出缺段中断</strong>。

    <!-- -->

    6)  <strong>段共享</strong>

        1.  分段存储管理可实现<strong>段（模块）的共享</strong>：

        2.  某些段可以<strong>提供给多个进程共享使用</strong>，称作<strong>“共享段”</strong>，系统维护一个<strong>共享段表，来记录这些段</strong>。

        3.  当某个进程需要使用共享段时，只需<strong>将此段的信息列入自身的段表中</strong>即可。

        4.  共享段可以是<strong>数据段</strong>也可以是<strong>代码段</strong>。若共享代码段，一般为<strong>只读</strong>的纯代码，称作<strong>可重入代码</strong>。

    ![原文插图](/Firefly/uploads/course-os/image84.png)

    5.  ![原文插图](/Firefly/uploads/course-os/image85.png)

7.  <strong>段页式存储管理</strong>

    1)  为了发挥<strong>分页管理的优势</strong>（最灵活的内存扩展）和<strong>分段管理的优势</strong>（逻辑空间扩展、模块共享），将两者结合，提出段页式存储管理。

        1.  内存分块

        2.  进程（程序）分段

        3.  段分页

        4.  页装入块中（可不连续）

        5.  <strong>按段或页</strong>调入/调出，实现<strong>虚拟存储</strong>

    2)  段页式存储管理中，对于一个进程，<strong>需要维护一个段表和多个页表</strong>。段表中的<strong>每项记录一个段的信息</strong>，以及<strong>这一段的页表位置</strong>；页表中的每项记录<strong>一个页的信息</strong>。![原文插图](/Firefly/uploads/course-os/image86.png)

    3)  段页式存储管理的重定位过程：

        1.  在段页式管理中，虚拟地址是二维的，由段号s和段内地址d组成。

        2.  从段内地址d得到页号p和页内地址w，首先检查快表，如果段号s的页号p在快表中则直接形成物理地址；如果不在快表中，则当段号s大于或等于段表限长寄存器时产生地址越界中断，在段号s小于段表限长寄存器时，访问段表，如果段表中段号s的中断位P=0，则产生缺段中断；在中断位P=1时，如果页号p小于段长（页数），则从段表中的页表基地访问页表，如果页表中页号p对应的中断位P=1,则得到b，形成物理地址，否则，产生缺页中断；如果页号p大于或等于段长（页数）则产生地址越界中断。

            ![原文插图](/Firefly/uploads/course-os/image87.png)

            <strong>第六章：</strong>

<!-- -->

1.  <strong>为什么要引入文件系统：</strong>

    1)  数据需要长期保存

    2)  主存储器容量较小

    3)  存储介质种类繁多

    4)  发挥数据的信息作用

2.  <strong>外存储器</strong>

    1)  主存储器<strong>容量较小</strong>，且只能<strong>临时保存数据</strong>，因此计算机系统需要使用外存储器，用以<strong>长期保存大量的数据</strong>。

    2)  外存储器的种类繁多，常见的有<strong>磁盘、光盘、U盘、磁带</strong>等。

    3)  外存储设备按其访问特性可分为：

        1.  <strong>顺序存取设备</strong>——只能按照数据在设备上的<strong>顺序依次</strong>访问数据

        2.  <strong>随机存取设备</strong>——能够在设备上的<strong>任意位置</strong>存取数据

3.  <strong>磁盘</strong>

    1)  一块磁盘中包含一组圆形盘片，各自独立的磁化物质（存储单元）分布于这些盘片上（单面或双面），以其<strong>磁化方向</strong>来表示一位<strong>二进制数</strong>。

    2)  对磁盘的访问，可以通过<strong>指定存储单元的位置</strong>进行<strong>随机存取。</strong>

    3)  用于表示存储单元位置的相关术语：

        1.  面或磁头（H）\[面号又叫磁头号，磁头号h是从0开始编的\]

        2.  磁道（T）与柱面（C）\[柱面号c也是从0开始编的\]

        3.  扇区（S）\[扇区号s是从1开始编的\]

        4.  ![原文插图](/Firefly/uploads/course-os/image88.png)

    4)  用<strong>三元组“柱面号-磁头号-扇区号”</strong>为坐标指示磁盘上的一个<strong>块（也称扇区</strong>，其中<strong>包含一组存储单元</strong>），此三元组称作这个块（扇区）的<strong>物理地址参数（CHS）</strong>。

    5)  设某<strong>磁盘磁头数量为heads</strong>，<strong>扇区个数为sectors</strong>，则

        1.  一个柱面的<strong>存储量为heads×sectors个块</strong>（扇区）

        2.  一个磁道的<strong>存储量为sectors个块</strong>（扇区）。

4.  磁带

    1)  磁带上各自独立的<strong>磁化物质（存储单元）</strong>分布于<strong>一条形的承载介质</strong>上，以其<strong>磁化方向</strong>来表示<strong>一位二进制数</strong>。

    2)  磁带上不同的数据段之间用特殊编码的间隙隔开。

    3)  ![原文插图](/Firefly/uploads/course-os/image89.png)

    4)  磁带<strong>并不支持按地址访问</strong>数据，只能够<strong>依次访问数据</strong>，并根据期间跨越的<strong>间隙个数</strong>来确定一个数据段的位置。因此它是典型的<strong>顺序存取设备</strong>。

5.  <strong>文件系统</strong>

    1)  对外存的某个位置进行访问（读写）时，需要首先组织<strong>相关的存取参数</strong>，然后通过<strong>IO中断启动存储设备</strong>的<strong>驱动器</strong>。

    2)  操作系统<strong>封装IO操作</strong>，并向用户<strong>提供文件系统</strong>。

    3)  这样做的目的是：

        1.  向用户<strong>隐藏各种外存储设备的特性差异</strong>，提供统一的访问方式

        2.  便于实现信息的<strong>存储、加工、共享</strong>等管理行为

    ![原文插图](/Firefly/uploads/course-os/image90.png)

    4)  <strong>文件系统的功能：</strong>

        1.  <strong>文件内容的组织</strong>——逻辑结构与物理结构

        2.  <strong>文件和目录管理——</strong>设计数据结构，文件控制块信息

        3.  <strong>文件存储空间管理</strong>

        4.  <strong>文件系统的接口——</strong>命令接口和程序接口

        5.  <strong>文件的共享与安全性</strong>

    5)  文件按其<strong>性质</strong>分为：

        1.  <strong>系统文件</strong>——系统软件对应的文件

        2.  <strong>库文件</strong>——已编译的，可供其他程序使用的子程序文件

        3.  <strong>用户文件</strong>——由用户提供的文件

    6)  按<strong>存取控制</strong>分为：

        1.  <strong>只读文件——</strong>可以查看阅读，不能删除修改

        2.  <strong>读写文件</strong>——可以添加修改删除

        3.  <strong>可执行文件</strong>——可由处理器执行

        4.  <strong>隐藏文件——</strong>进行了特殊保护

    7)  按其在<strong>文件系统中的作用（组织）</strong>分为：

        1.  <strong>普通文件</strong>——用于实际地存储数据

        2.  <strong>目录文件</strong>——用于表示目录结构

        3.  <strong>设备文件</strong>——用于表示设备

    8)  按<strong>其内容</strong>分为：

        1.  文本文件——存储能被用户直接理解的文本

        2.  二进制文件——存储不能被直接理解的二进制数据

    9)  按<strong>逻辑结构（用户访问方式）</strong>分为

        1.  <strong>流式文件</strong>——文件可被看作一串有序的字符流，内部无结构划分

        2.  <strong>记录式文件</strong>——文件内的数据被划分为具有逻辑完整性的单元，每个单元称作一条记录，每条记录可以包含若干个数据项（字段）。

    ![原文插图](/Firefly/uploads/course-os/image91.png)

6.  <strong>逻辑块号</strong>

    1)  逻辑上，可<strong>对块（扇区）</strong>依次编号，形成<strong>块的块号（逻辑地址）</strong>，主要使用于<strong>文件系统内部</strong>。

    2)  设CHS为<strong>（c0，h0，s0）</strong>的块（扇区）对应块号<strong>block0</strong>

    3)  则CHS为（c，h，s）的块（扇区）的块号：

        1.  <strong>block = block0 + heads×sectors×(c-c0) + sectors×(h-h0) + s-s0</strong>

    4)  块号为block的块（扇区）的CHS为：

        1.  s = (block - block0 + s0 <strong>– 1</strong>) % sectors <strong>+ 1</strong>

        2.  \[-1的原因：s∈\[1,s\]而余数∈\[0,s-1\]，所以用s-1∈\[0,s-1\]，这样就落在余数范围了\]

        3.  h = ((block - block0 + s0 <strong>– 1</strong>) / sectors + h0) % heads

        4.  c = ((block - block0 + s0 <strong>– 1</strong>) / sectors + h0) / heads + c0

    5)  若某文件系统使用<strong>n</strong>位的块号，则可以表示<strong>2^n</strong>个块。

    6)  外存储设备最大存储容量<strong>不可超过2^n×块容量</strong>。

    7)  对于较大的外存储设备，文件系统内部将<strong>2^k</strong>个扇区划分为一个<strong>簇</strong>，以<strong>簇</strong>（而非扇区）作为基本<strong>IO操作单元</strong>，并为其编排逻辑地址（块号）。

    8)  外存储设备存储容量限制：2^n ×块容量 = 2^(n+k) ×扇区容量。

    9)  文件系统之下，仍然以<strong>扇区</strong>为单位，通过CHS地址形式访问设备驱动。i号块包含的扇区： i\<\<k ~ i\<\< k + 2^k -1

7.  文件的物理结构

    1)  文件的物理结构指其在存储介质上的组织形式，对用户而言是透明的。

    2)  文件的物理结构分为：

        1.  连续结构

            1)  文件中的所有记录（字节块）按顺序依次存放在相邻的物理块内。

            2)  若采用连续结构，则对于某文件，系统需记录其首块的块号及块数。

                1.  管理简单

                2.  存取速度快（随机存取）

                3.  需要连续空间，降低了存储器利用率

                4.  不利于文件的修改（增删记录）

        2.  链接结构

            1)  借鉴链表的数据结构，将文件分散存储在多个物理块中，在块中指定一部分存储单元用于指示文件下一个块的位置（指针）。

            2)  若采用链接结构，则对于某文件，系统需记录其首块的块号。

            3)  ![原文插图](/Firefly/uploads/course-os/image92.png)

            4)  链接结构的特点：

                1.  无需连续空间，提高存储器利用率

                2.  方便文件修改

                3.  无法直接定位文件中的位置，只能顺序查找（顺序存取）

                4.  破坏了文件完整性和块中信息的单纯性，安全控制困难

        3.  FAT系列文件系统中采用改进的链接结构：将指针信息从实际存储数据的物理块中分离，并记录到文件分配表（FAT：File Allocation Table）中。

            1)  FAT中的每一项对应一个物理块。

                1.  值0表示该块空闲

                2.  值FFFF（全1）表示该块为文件尾

                3.  值FFF7表示该块损坏

                4.  其他值指示该块中的文件的下一块位置

                5.  ![原文插图](/Firefly/uploads/course-os/image93.png)

        4.  索引结构

            1)  文件的各记录（或部分）分散存放于存储设备的物理块中。利用<strong>索引表（类似于页表）</strong>记录文件中的记录与物理块的对应关系。

            2)  ![原文插图](/Firefly/uploads/course-os/image94.png)

            3)  若采用索引结构，则对于某文件，系统需记录其索引表位置与长度。

            4)  索引结构的特点：

                1.  无需连续空间，提高存储器利用率

                2.  方便文件的修改

                3.  可实现随机存取

                4.  索引表占用额外存储空间

                5.  为了不连续保存索引表，常用多级索引——检索时的时间开销大

        5.  Unix使用改进的多级索引结构（i-node）

            1)  直接索引：10个

            2)  一次间接索引：m个（m为一个块内最多可以存放的索引数）

            3)  二次间接索引：m^2个

            4)  三次间接索引：m^3个

    ![原文插图](/Firefly/uploads/course-os/image95.png)

8.  文件控制块（FCB）

    1.  与进程管理类似，为了记录文件的相关信息，文件系统需要维护特殊的数据结构——<strong>文件控制块（FCB</strong>），将其存储于外存中。

    2.  不同的文件系统其FCB设计差异较大，但主要都包含两部分：

        1)  描述信息部分——文件名、逻辑结构相关信息、物理结构相关信息

        2)  管理信息部分——存取控制信息、使用信息

    3.  FAT32的一个FCB的长度固定为32字节。每个文件对应一个FCB数组，此数组中包含1个短文件名FCB和0个或多个长文件名FCB。

        1)  短文件名FCB用于记录文件的短文件名（8字符主名，3字符扩展名）和文件的其他相关信息

        2)  长文件名FCB仅用于记录文件的全名（当文件具有长文件名时）

    4.  步骤：

        1)  用FCB数组记录长文件名文件时，先将长文件名以Unicode编码（每个Unicode字符占用2个字节）

    ![原文插图](/Firefly/uploads/course-os/image96.png)

    2)  然后将其按每13个双字节（26个字节，13个Unicode字符）分组，存放进多个长文件名FCB中

    ![原文插图](/Firefly/uploads/course-os/image97.png)

    3)  将这些长文件名FCB倒序组成FCB数组

    ![原文插图](/Firefly/uploads/course-os/image98.png)

    4)  在FCB数组的最后添加一个短文件名FCB，其中记录文件的短文件名和其他相关信息

    ![原文插图](/Firefly/uploads/course-os/image99.png)

    5.  长文件名文件的短文件名生成规则：

        1)  无法识别的字符（非ASCII字符）用“\_”替代

        2)  取全名的前6个字符加“~1”作主名，扩展名的前3个字符作扩展名

        3)  若重名，则编号“~1”依次增加，最多编号到“~4”

        4)  若编号超过“~4”，则保留主名的前2个字符，用全名剩下部分的头4个字符生成其他4个字符，并从“~1”开始重新编号

9.  文件目录及其结构

    1)  单级结构

        1.  若干个文件的FCB数据的有序集合称作文件目录，文件目录本身也以文件形式保存于外存中，称作目录文件。

        2.  若将文件系统中的所有文件的FCB都保存在一个目录中，称作单级目录结构。

            1)  访问文件时，检索范围大，影响了存取时间

            2)  任何两个文件都不能重名

            3)  ![原文插图](/Firefly/uploads/course-os/image100.png)

    2)  二级结构

        1.  二级目录结构中存在一个系统主目录（MFD）和多个用户文件目录（UFD）。MFD中存放UFD的FCB，而UFD中存放用户文件的FCB。

        2.  特点：

            1)  结构简单、容易实现

            2)  一定程度上减少了检索的开销

            3)  解决不同用户之间的重名问题

            4)  容易实现用户之间的文件共享

            5)  拥有多文件的UFD检索开销大

            6)  同个UFD下文件不可重名

            7)  ![原文插图](/Firefly/uploads/course-os/image101.png)

        3.  多级结构

            1)  目前常见的多级目录结构，是在二级目录结构基础上进一步扩展：任意目录文件中都可以存放目录的FCB或文件的FCB，以形成多级目录。

                1.  根目录(Root)

                2.  父目录/子目录

                3.  绝对路径(Absolute Path) /B/C/a.txt

                4.  当前目录(Current Directory)

                5.  相对路径(Relative Path) B/C/a.txt

                6.  两个特殊的子目录：“.”和“..”

                ./a.txt：上一级的a.txt ../a.txt上一级的下一级的a.txt(同级）

                7.  ![原文插图](/Firefly/uploads/course-os/image102.png)

10. UNIX目录结构

    1)  目录文件中直接存放FCB引起的问题：目录文件本身较大，搜索文件时IO操作过多。

    2)  解决思路：将文件名信息从FCB中抽离出来。

    3)  Unix系统中每个文件或目录拥有唯一的标识。维护符号文件目录（SFD）和基本文件目录（BFD，也称二进制文件目录）：

        1.  BFD（唯一）：记录标识与FCB的对应关系。

        2.  SFD（按多级目录文件组织）：记录文件名（目录名）同标识的对应关系。

    4)  进入一个目录时实际上打开（读入）一个SFD。访问文件或子目录时按名搜索，得到标识后再查找BFD，以找到对应的FCB，从而访问需要的文件或子目录。

        1.  搜索文件或子目录的开销减小

        2.  （无搜索的）文件访问开销增加

        3.  如要找/u2/sub1/zz5.c

            1)  先去BFD找2的FCB，找到SFD里u2对应的6，找6指向的SFD，sub1对应ID14，找14对应的SFD，zz5.c对应13.而13的FCB为f.c/zz5.c,结束

            2)  检索在右侧，找物在左侧，降低检索开销

        4.  ![原文插图](/Firefly/uploads/course-os/image103.png)

11. 文件存储空间管理

    1)  为了记录外存储器中存储空间的使用情况，操作系统可以采用：

        1.  位示图法

        2.  空闲块表法

            1)  缺陷：连续空闲块个数受限制

    ![原文插图](/Firefly/uploads/course-os/image104.png)

    3.  空闲块链表法

        1)  缺陷：只能逐块分配；分配和回收空闲块时需要一次额外的外存访问

    ![原文插图](/Firefly/uploads/course-os/image105.png)

12. UNIX的文件存储空间管理

    1)  Unix系统采用改进的空闲块链表法——空闲块成组链接法。

        1.  文件系统建立时（空外存），将所有空闲块分组（每组n个块，n=100）。

    ![原文插图](/Firefly/uploads/course-os/image106.png)

    2.  其中，最后一组可能不满n块，而第一组实际的空闲块为n-1块（第一块被作为专用块，用于存储相关信息）。

    ![原文插图](/Firefly/uploads/course-os/image107.png)

    3.  在每组的第一个块中记录上一组的块数和块号（指针）。记录中第一组的块数仍记n，但专用块的块号被记作0

![原文插图](/Firefly/uploads/course-os/image108.png)

4.  最后一组的块数和块号将存在专用块中，称这组为专用组。

![原文插图](/Firefly/uploads/course-os/image109.png)

5.  需要分配存储空间时，查找专用块中的记录，从而找到专用组的最后一个块，将其分配，并减少专用组的块数记录。

6.  若将被分配的是某组的第一个块（分配后此组将消失），则分配之前需要将其中的指针信息复制到专用块中，使得上一组成为新的专用组。

![原文插图](/Firefly/uploads/course-os/image110.png)

7.  若根据指针信息指示，将被分配的块的块号为0，说明已无空闲块。

![原文插图](/Firefly/uploads/course-os/image111.png)

8.  文件系统一般将专用块在内核空间中作缓存，以提高访问速度。但这样做可能由于一些意外断开的情况导致文件记录错误。

![原文插图](/Firefly/uploads/course-os/image112.png)

9.  需要回收空间时，采用与分配空间相反的方式进行：将新空闲块的块号记录到专用块中，并增加专用组的块数记录。

![原文插图](/Firefly/uploads/course-os/image113.png)![原文插图](/Firefly/uploads/course-os/image114.png)

10. 当专用组的块数超过n时，将专用块内的指针信息复制到新的空闲块中，新空闲块成为新的专用组，并更新专用块中的指针信息。

![原文插图](/Firefly/uploads/course-os/image115.png)![原文插图](/Firefly/uploads/course-os/image116.png)

11. 空闲块成组链接法使得在大部分情况下不需要额外的外存访问即可完成空闲块的分配和回收。

<!-- -->

13. 用户接口

    1)  用户接口使用户能够<strong>操作文件系统。</strong>

        1.  命令接口使用户<strong>能够直接控制文件系统</strong>（上机实践部分）

        2.  程序接口是一组<strong>系统调用</strong>，用户程序<strong>通过其控制文件系统</strong>

            1)  创建文件

            2)  打开文件

            3)  读操作

            4)  写操作

            5)  修改文件的读写指针

            6)  关闭文件

    ![原文插图](/Firefly/uploads/course-os/image117.png)

14. 文件共享

    1)  文件共享（File Sharing）指允许不同用户或不同进程访问同一个文件，其目的是：

        1.  实现用户或进程之间的信息共享和任务协作

        2.  避免因各用户或进程各自保存数据，造成的外存储器额外开销

    2)  文件共享的方法：

        1.  绕道法

            1)  通过公开需要共享的文件的路径，使各用户（进程）能够查找到文件，进而访问文件。

            2)  优点：实现简单，直接通过命令接口完成。

            3)  缺陷：文件路径必须公开，并只能使用相同的路径与文件名进行访问。

        2.  链接法（指针法）

            1)  通过将不同的FCB指向相同的外存位置，使不同用户（进程）访问到一个实际上相同的文件。

            2)  ![原文插图](/Firefly/uploads/course-os/image118.png)![原文插图](/Firefly/uploads/course-os/image119.png)

        3.  基本文件目录法

            1)  在SFD中将一个文件标识对应于不同的访问路径，从而使不同用户（进程）找到实际相同的FCB，从而访问同个文件

            2)  ![原文插图](/Firefly/uploads/course-os/image120.png)

    3)  文件共享语义

        1.  当多个用户或进程同时访问一个文件时，对修改（更新）操作的行为作进一步规定，称作文件的共享语义（一致性语义）。

        2.  三种基本的共享语义：

            1)  Unix语义：系统按照读写操作的顺序依次执行读写操作。

            2)  会话语义：进程打开文件时建立会话，会话期间的修改操作仅对进程自身可见，当文件关闭时结束会话，此时这些修改才对其他进程可见（实际实施）。

            3)  永久文件语义：创建文件时可对文件做一次编辑，一旦关闭文件则文件变为只读状态。

15. 文件的保护

    1)  文件的保护指防止文件内容被破坏，这种破坏包括存储介质的物理损坏导致的文件无法读取和用户误操作导致的文件丢失。

    2)  文件保护的手段是备份。备份分为：

        1.  定期备份：定期将一个外存设备上的数据复制到另一外存设备上。

            1)  完全备份——每次备份复制所有数据

            2)  增量式备份——每次备份仅复制上次备份以来修改的数据

            3)  定期备份需考虑的问题：备份周期的确定、备份保留时间的确定。

        2.  活动备份：修改（更新）文件时同时操作多个存储设备上的文件副本，当一个存储设备损坏时可以从其他设备上取得文件。

16. 文件的保密

    1)  文件的保密指通过访问（存取）控制，防止文件被非法访问。这是文件系统安全保障的核心，以及构建安全操作系统的主要研究内容之一。

        1.  存取控制的主题和客体

            1)  访问行为的主体是用户和进程，客体是文件，访问行为的类型称作访问属性，主要有读、写和执行。

        2.  访问控制模块

            1)  在主/客体间增加访问控制模块，依据访问行为的具体情况（如主体、客体、属性 等）作出允许/禁止访问的决策。

                1.  完备性：对系统中主体对客体的所有访问进行验证

                2.  防护性：访问控制模块本身不能被非授权用户或进程恶意或故意修改

                3.  行为正确性：按照安全策略验证![原文插图](/Firefly/uploads/course-os/image121.png)

        3.  安全策略是一组明确的，经过良好定义的规则，描述访问行为的具体情况（如主体、客体、属性 等）与决策之间的对应关系。

            1)  安全策略主要分为两类：

                1.  强制访问策略（MAC）：系统为每个主体和客体指派全局性的安全级别，访问请求发生时，通过比较安全级别来得出决策。指派的安全级别不可轻易修改。

                2.  自主访问策略（DAC）：在主体与客体之间建立一组一致性原则，其中描述每个主体与每个客体之间的访问规则。这些访问规则由客体的创建者自主定义。

        4.  DAC策略最常见的是基于主体权限的存取控制方式。

            1)  其实现可采用三种数据结构：

                1.  存取控制矩阵(PM)

                    1)  行表示主体，列表示客体，矩阵中的元素表示主体可以对客体的访问属性。存取控制矩阵M的元素M\[i,j\]表示第i个主体对第j个客体的存取访问属性。如果M\[i,j\]为空或0，则表示第i个主体对第j个客体没有访问权限。

                ![原文插图](/Firefly/uploads/course-os/image122.png)

                2.  存取控制表(ACL)

                ![原文插图](/Firefly/uploads/course-os/image123.png)

                3.  权能表(CL)

                ![原文插图](/Firefly/uploads/course-os/image124.png)

## 第七章：
1.  设备

    1)  处理器和主存储器构成计算机系统的主要部分，其他部分统称为“设备”。

        1.  硬件层面上，设备由芯片、电路、电源、发动机等物理部件组成。

        2.  软件层面上，设备是一组指令、状态标志、IO传输过程、错误处理 等。

        3.  操作系统关注如何管理和控制设备，而不关心其硬件层面。

    2)  设备按<strong>用途</strong>分为：

        1.  （外）存储设备——长期保存主计算机系统的数据

        2.  输入/输出设备——主计算机接收外界数据用

    3)  设备按<strong>数据传输速度</strong>分为：

        1.  慢速设备——键盘、打印机、鼠标 等

        2.  快速设备——磁盘、光盘 等

    4)  设备按<strong>数据组织方式</strong>分为：

        1.  字符设备——以字符为基本单位组织数据（键盘、显示器 等）

        2.  块设备——以块为基本单位组织数据（磁盘 等）

    5)  设备按共享属性分为：

        1.  独占设备——一类临界资源，一次只允许一个用户/程序使用的设备（临界资源）

        2.  共享设备——可同时被多个用户/程序使用的设备

        3.  虚拟设备——用一类设备替代另一类设备，提高系统效率

    6)  设备按管理方式分为：

        1.  物理设备——计算机系统中实际存在的设备实体。每个物理设备都有唯一的编号，称为设备物理号

        2.  逻辑设备——操作系统提供给用户或程序使用的设备，其表现形式是名称或变量，称为设备逻辑号。用户不能直接使用物理设备，而是通过逻辑设备来使用。在工作时由操作系统在逻辑设备和物理设备之间建立连接，称为分配。

2.  设备独立性含义

    I/O软件的层次结构为用户和程序隐藏了底层设备的物理特性差异，实现了设备独立性。用户或程序中使用的设备与具体的物理设备无关，用户或程序使用的是逻辑设备，当进程运行时，由操作系统在逻辑设备与物理设备之间建立连接，即设备的分配，把这种设备使用方法的特点称为设备独立性。

3.  主机对设备的访问

    1)  设备连接到主机后将占用一组IO（端口）地址（记录于设备控制器中）。主机对设备的访问表现为使用基本的端口通讯指令（IN和OUT）与这组IO地址通讯。

    2)  打印机接入并行端口，则占用三个地址：378H（数据信号端）， 37AH（控制信号端），379H（状态信号端）。

    ![原文插图](/Firefly/uploads/course-os/image125.png)

4.  数据传输控制(I/O控制方式）

    1)  介绍

        1.  传输控制是指通过<strong>控制底层信号</strong>传递来实现<strong>主机与设备间数据传输</strong>以满足用户/程序的IO请求。

        2.  传输控制在其发展历史中产生<strong>四种不同的方式</strong>，方式的进化主要为了<strong>减少CPU等待时间、减轻CPU的负担，提高系统并行性。</strong>

        3.  传输控制是<strong>软硬件协作</strong>完成的，各种控制方式需要不同的<strong>硬件支持</strong>。

        4.  <strong>在软件方面</strong>，现行的软件架构中，一般由<strong>（上层）驱动程序配置和启动传输控制</strong>，由<strong>IO子程序（中断处理程序或称下层驱动程序）</strong>实现传输控制的<strong>具体操</strong>作。

    2)  程序查询方式

        1.  程序查询方式是最早提出的传输控制方式。

        2.  进程提出<strong>IO请求</strong>并<strong>获得设备</strong>后，<strong>IO子程序</strong>将<strong>不断循环检测</strong>设备的状态，直到<strong>设备能够满足IO操作的要求</strong>（例如呈现就绪状态）时<strong>实施一个传输动作。</strong>

        3.  由于<strong>不断循环检测</strong>设备状态，正在进行IO操作的进程将<strong>耗费CPU资源。</strong>

    3)  中断方式

        1.  中断是实现<strong>系统并行处理</strong>的<strong>核心技术</strong>。利用中断来<strong>控制数据传输</strong>是现代系统的常用方式。

            1)  进程提出<strong>IO请求</strong>并获得设备后，若设备未就绪<strong>，则阻塞进程。</strong>

            2)  当设备进入<strong>就绪状态时</strong>，<strong>发出中断信号</strong>，已在系统中注册的中断处理程序<strong>唤醒进程以</strong>启动一个传输动作，而后再阻塞进程直到设备再次就绪。

            3)  如此循环，直到传输完成。

        2.  正在<strong>等待设备就绪</strong>的进程<strong>处于阻塞状态</strong>，<strong>不消耗CPU资源</strong>。

        3.  但<strong>中断发生</strong>时仍然需要<strong>CPU以实施传输动作。</strong>

    4)  DMA方式

        1.  <strong>直接存储器访问（DMA）</strong>方式中由<strong>DMA控制器</strong>（而非中断处理程序）来实施具体的传输动作，从而进一步减小CPU开销。

            1)  进程提出IO请求并获得设备后，<strong>将数据（或接收缓冲区）</strong>安置在内存中的<strong>位置</strong>和<strong>大小</strong>写入<strong>DMA控制器的寄存器</strong>内，启动DMA过程并<strong>阻塞进程。</strong>

            2)  DMA控制器控制<strong>指定内存区域同设备之间的数据交换</strong>。其间需要使用总线时，总线控制权将<strong>供DMA使用（</strong>硬件机制）。

            3)  当原进程请求的IO操作全部完成时，DMA控制器<strong>发出中断</strong>，中断处理程序<strong>唤醒</strong>进程。

    5)  通道

        1.  在DMA方式的基础上，通道方式中使用通道处理器替代DMA控制器来实施传输动作。

        2.  通道处理器是一个简单的专用处理器，具有自身的指令系统，可按程序完成传输动作。这使得通道处理器较只能进行单纯传输动作的DMA控制器具有更强大的功能，例如传输纠错、数据格式转换、数据预处理 等。

        3.  对于系统中的每一个通道，内存中有两个固定的专用存储单元分别存储通道程序的首地址（CAW通道地址字）和状态信息（CSW通道状态字）。

        4.  通道方式的运作过程：

            1)  进程提出<strong>IO请求</strong>并获得设备后，根据所要求的IO操作，生成由<strong>通道指令</strong>组成的<strong>通道程序</strong>，并将<strong>程序首地址</strong>写入<strong>CAW</strong>中。然后启动<strong>通道并阻塞进程</strong>。

            2)  通道处理器从<strong>CAW</strong>中找到通道程序，并按通道程序的指令完成<strong>数据传输过程</strong>。每条指令执行之后都将<strong>通道状态</strong>写入<strong>CSW</strong>中，使得主机能够<strong>随时掌握通道运行情况</strong>。

            3)  若通道程序执行中<strong>出现错误</strong>，通道处理器将发出<strong>错误中断</strong>，交由<strong>中断处理程序</strong>处理错误；若通道程序<strong>顺利执行完毕</strong>也将发出完成<strong>中断</strong>，由中断处理程序<strong>唤醒原进程</strong>。

        5.  按照通道的<strong>控制方式</strong>，可分为：

            1)  选择通道——一台设备的传输完成后才能开始另一台设备的传输

            2)  多路通道——可同时进行多台设备的传输动作（微观上轮流进行）

        6.  按照通道<strong>所控制的设备特点</strong>，可分为：

            1)  字节通道——控制字符设备

            2)  数组通道——控制块设备

            3)  字节通道通常是多路通道，而数组通道可能是选择通道或多路通道。

5.  设备访问的软件架构

    1)  架构1. 用户/程序直接通过IN和OUT指令访问设备。

    2)  架构2. 将访问指令封装为一些子程序，用户/程序通过调用它们来访问设备。

        1.  用户级子程序

        2.  利用中断机制

    3)  架构3. 在架构2基础上，由操作系统对这些子程序实施管理、保护、配置和优化。用户/程序通过操作系统的用户接口访问设备。

        1.  在这一架构中，（上层）驱动程序利用下层IO子程序提供用户接口的具体实现

    ![原文插图](/Firefly/uploads/course-os/image126.png)

    2.  在这一架构中，实际由底层程序操作的设备被称作物理设备；经层层封装、管理，为用户/程序所见的设备称作逻辑设备。

    3.  对于同种逻辑设备，用户/程序按照同样的操作方式对其访问，而无需关心其对应的物理设备的特性，此种性质称作设备无关性（设备独立性）。

    4.  除物理设备外，系统还常将某些特殊数据及对其的操作进行封装和管理，使得在逻辑层面上，用户/程序可以按访问设备的方式对其进行访问。由此形成的逻辑设备称作虚拟设备。

6.  操作系统设备管理

    1)  操作系统进行设备管理的基本任务包括：

        1.  （驱动程序和中断处理程序）实现数据传输控制

        2.  （设备管理框架）为设备管理系统资源（IO地址、中断号 等）、驱动程序和中断处理程序

        3.  （设备管理框架）为用户/程序分配与回收设备

        4.  （设备管理框架）使用缓冲技术

        5.  （设备管理框架）实现磁盘驱动调度

7.  Unix的地址、驱动、中断管理

    欲在Unix中使用一个新的设备，需要：

    1)  根据实际情况对硬件参数进行配置，并将设备连接到主机上。

![原文插图](/Firefly/uploads/course-os/image127.png)

早期的设备通过一系列开关或跳线来手动配置硬件参数。

使用PnP技术的设备，能够在连接到主机时自动配置硬件参数，并在系统中完成各项注册任务（驱动程序安装与初始化）。

2)  向系统注册设备，以及对应的（上层）驱动程序中实现的各系统调用（open、read、write、close等）的入口（设备开关表）。所有设备将在文件系统中以设备文件的形式呈现，当用户/程序使用系统调用访问设备（文件）时，系统根据设备（文件）名称，在设备开关表中查找，以决定具体调用哪个（上层）驱动程序中的相应操作。

![原文插图](/Firefly/uploads/course-os/image128.png)![原文插图](/Firefly/uploads/course-os/image129.png)

3)  向系统注册所需使用的中断号，及相应的处理程序的入口。

    1.  中断发生时，将跳转到系统的（而非具体设备的）中断处理程序。

    2.  系统的中断处理程序中依次执行注册为该中断号的所有设备中断处理程序。

    3.  设备中断处理程序内部需自行验证中断源和事件。

![原文插图](/Firefly/uploads/course-os/image130.png)

8.  设备的分配与回收

    1)  操作系统的IO管理框架<strong>不进行实际</strong>的设备控制和传输操作，但必须负责在<strong>进程操作设备前</strong>进行<strong>检查，</strong>避免多个进程在其<strong>open</strong>与<strong>close</strong>操作之间同时访问独占设备，即<strong>管理设备的分配（open时</strong>）和<strong>回收（close时）</strong>。

    2)  设备的分配

        1.  设备的分配与存储空间的分配不同，不仅需要记录设备本身的使用情况，还需要记录设备所需线路上其他独占部件（控制器、通道等）的使用情况。

    ![原文插图](/Firefly/uploads/course-os/image131.png)

    2.  为了记录设备及各种独占部件的使用情况，及其相互联系，必须使用四个数据结构：

        1)  每个通道对应一个通道控制表（CHCT）。记录通道信息，包含通道标识、状态、等待队列指针等。

        2)  每个设备控制器对应一个控制器控制表（COCT）。记录设备控制器信息，包含控制器标识、状态、等待队列指针、所连接的通道的CHCT指针等。

        3)  每个设备对应一个设备控制表（DCT）。记录设备信息，包含设备的名称、类型、标识、状态、等待队列指针、所连接到的控制器的COCT指针等。

        4)  系统中有唯一的系统设备表（SDT）。用于按设备名称搜索设备并获取设备的基本信息。其中每一项记录一个设备的基本信息，包括名称、类型、标识、DCT指针、分配给的进程标识等。

    3.  分配步骤

    ![原文插图](/Firefly/uploads/course-os/image132.png)

    1)  启动时，系统检测硬件连接情况，生成一个SDT及各部件的DCT、COCT或CHCT。

    2)  需要分配设备时，从SDT中按名找到需要的设备的DCT。若设备忙，则进程进入该DCT的等待队列。

    3)  否则，将设备置为忙状态（被分配），查找该设备连接的控制器的COCT。若控制器忙，则进程进入该COCT的等待队列。

    4)  若控制器空闲，则先将其分配后继续检查其所连接的通道的CHCT（若存在）。若通道忙，则进程进入该CHCT的等待若通道空闲，则将其分配。只有当设备、控制器、通道都能成功分配时，进程方可继续执行。

    5)  设备回收时同样依次回收设备、控制器和通道，当回收一个部件时需按一定策略唤醒该部件等待队列中的一个进程。

    <!-- -->

    4.  设备分配方式

        1)  静态分配——在创建进程时，为进程分配运行所需的全部设备、控制器、通道，如果又一个资源不满足， 则进程创建被推迟。一个进程在运行结束后归还全部设备。

        2)  动态分配——在进程运行过程需要时再分配，使用完成后立即归还。

    5.  设备分配的安全性

        1)  单请求方式：一个进程在申请新设备时，必须先归还之前已经分配的到的所有设备，破坏死锁的”请求与保持条件”。

        2)  多请求方式：一个进程可以根据需要多次申请新的设备，是一种动态分配方式。综合“剥夺资源”和“资源暂时释放”。

            1.  当一个进程Pi申请新资源R得不到满足时，检查占有新资源R的进程Pj，比较Pi和Pj的进程标识符pid，如果Pi的进程标识符更小，则允许Pi阻塞，否则选择如下之一进一步处理

                1)  Pi终止，或Pi归还已经得到的资源后进入阻塞状态

                2)  Pi抢占Pj的资源R

            2.  这样子破坏了“环路等待条件”

    6.  设备分配原则

        1)  提高并行性

        2)  方便用户使用

        3)  系统的安全性

9.  I/O缓冲技术

    1)  缓冲技术一般应用于两种速度不一致的部件之间的协作。一般形式是以缓冲区来暂时存放需要交换的信息，将来再把信息传输到目标位置。其目的在于：

        1.  缓解设备和处理器之间速度不匹配的矛盾，提高系统工作的并行程度

        2.  减少I/O操作的次数

        3.  减少中断次数

        4.  提高系统的及时性，方便用户操作

    2)  设备管理中使用的缓冲技术主要出于提高效率的目的。

    ![原文插图](/Firefly/uploads/course-os/image133.png)

    3)  在一般的设备管理软件架构中，将一个透明的缓冲管理模块添加到用户接口和上层驱动程序接口之间。

    4)  缓冲区属性指示了访问的属性（读或写），于是Unix系统中，上层驱动程序仅用一个接口request处理读写操作。

    ![原文插图](/Firefly/uploads/course-os/image134.png)

    5)  缓冲区是一种临界资源，一个缓冲区的一次使用过程只能用于一个进程对一个设备的读操作或写操作。设备管理框架应当实现缓冲区访问的互斥。

        1.  一个缓冲区在任意时刻可以是空缓冲区、输入缓冲区或输出缓冲区。

        2.  缓冲技术可分为：

            1)  单缓冲区——系统中只存在一个缓冲区，任意时刻只能服务于一个进程对一个设备的读操作或写操作（一组IO操作）。

            2)  双缓冲区——系统中存在两个缓冲区，可以同时服务于两组IO操作。

            3)  多缓冲区（缓冲池）——系统中有多个缓冲区，可以同时服务于多组IO操作。

    6)  使用缓冲技术的输出（Write）的一般过程：

        1.  用户提出Write请求后，缓冲管理模块检查进程是否已取得相应的输出缓冲区，若已取得，则使用此缓冲区，否则申请一个空缓冲区，将其更改为该进程对该设备的输出缓冲区（可能阻塞原进程）。

        2.  缓冲管理模块使用访存指令将数据写入缓冲区内。

        3.  其间若达到一定的缓冲条件，则缓冲管理模块启动上层驱动程序，将整个缓冲区内的数据写入设备（冲洗，可能阻塞原进程），之后再继续步骤2，直到数据写入完成。

    7)  使用缓冲技术的输入（Read）的一般过程：

        1.  用户提出Read请求后，缓冲管理模块检查进程是否已取得相应的输入缓冲区，若已取得，则使用此缓冲区，否则申请一个空缓冲区，将其更改为该进程对该设备的输入缓冲区（可能阻塞原进程）。

        2.  缓冲管理模块使用访存指令从缓冲区内读出数据。

        3.  其间若缓冲区为空，则缓冲管理模块启动上层驱动程序，从设备读出数据到缓冲区（可能阻塞原进程），直至达到一定的缓冲条件后再继续步骤2，直到数据读出完成。

    8)  当进程关闭（Close）设备时，将归还所有该进程针对该设备的输入/输出缓冲区（强制冲洗输出缓冲区），将他们更改为空缓冲区。

    9)  在输出时，达到缓冲条件将开始设备数据传输，而在输入时，当达到缓冲条件将停止设备数据传输。缓冲条件可以是以下之一：

        1.  全缓冲——设置缓冲数据量上限，当缓冲区中数据量达到上限则达到缓冲条件。

        2.  行缓冲——当缓冲区中出现换行符则达到缓冲条件。

10. I/O调度

    1)  个实际的读写请求到达设备驱动程序时不能保证能够被立即处理。为了存放等待设备驱动程序处理的读写请求，需要维护一个请求队列。

    2)  而当设备完成上一个读写请求后不但应唤醒原进程还应当将请求队列中的一个（或多个）请求送交设备驱动程序。

    3)  规划这些请求的优先关系就是IO调度。

    4)  在Unix系统的设备管理框架中，通过IO调度器为块设备提供调度：

        1.  为设备注册请求队列

        2.  为请求队列绑定request入口

        3.  新请求到来时，调度器按照调度算法将其合并或插入队列中

        4.  设备空闲时，request通过调度器按照调度算法从队列中取出请求加以处理

    ![原文插图](/Firefly/uploads/course-os/image135.png)

11. 磁盘的读写时间

    1)  评价IO调度算法的优劣，要根据不同设备自身的需求。

    2)  对于磁盘而言，IO调度算法的目标是缩短一组读写请求的执行时间。

    3)  磁盘设备完成一次读写动作的时间分为三部分：

        1.  寻道时间——磁头从当前磁道移动到目标磁道所花费的时间Ts = s0 + s1 + m×n

            s0是磁头启动时间， s1 是磁头稳定时间，m是跨越一个磁道的平均时间，n是跨越的磁道数。

        2.  旋转延迟时间——磁头在磁道上搜索扇区的时间Tr = r/2

            r是磁头旋转一周的平均时间。 Tr 远小于Ts 。

        3.  传输时间——传输数据的时间Tr

            一个读写请求的执行时间： Ta = Ts + Tr + Tt = s0 + s1 + m×n + r/2 + Tt。k个读写请求的总执行时间： T = k( s0 + s1 + r/2) + ΣTti + m× Σni

12. 磁盘驱动调度

    1)  指的是对于一组磁盘I/O操作的请求，系统按照一定策略依次为各个I/O操作的请求服务，使得完成这组磁盘I/O操作所花的时间尽可能小。

    2)  如果有n个磁盘的I/O操作请求，第i个请求的访问数据记为Tai，则理想调度就是让从1加到n的Tai最小

    3)  磁盘驱动调度分为

        1.  移臂调度

        2.  旋转调度

13. 移臂调度算法

    1)  对于请求队列中的一组磁盘读写请求，运用移臂调度算法，得出执行这组请求的合理顺序，使得其间跨越磁道的总数尽量少。

    2)  常见的移臂调度算法有：

        1.  先来先服务（FCFS）算法

            1)  按照请求提交的时间，依次执行。

            2)  例子 假定某磁盘的一组I/O操作的访问请求，它们的请求提出顺序依次是：55、72、100、88、93和66(I/O操作请求所在的柱面号)。当前磁盘位于90号柱面。采用移臂调度采用FCFS算法时，系统服务的顺序和磁头移动的距离以及磁头改变方向次数？

            3)  请求柱面：55、72、100、88、93、66 当前柱面：90

            4)  服务顺序：90→55→72→100→88→93→66

            5)  ![原文插图](/Firefly/uploads/course-os/image136.png)

            6)  移动距离：35+17+28+12+5+27=124

            7)  磁头改变方向次数：4

        2.  最短寻道优先（SSTF）算法

            1)  总是选择距离当前柱面最近的柱面

            2)  ![原文插图](/Firefly/uploads/course-os/image137.png)

            3)  请求柱面：55、72、100、88、93、66 当前柱面：90

            4)  服务顺序：90→88→93→100→72→66→55

            5)  移动距离：2+5+7+28+6+11=59

            6)  磁头改变方向次数：2

            7)  易引起“饥饿”现象

        3.  扫描（SCAN）算法

            1)  总是向一个方向移动，直到磁盘边缘才改变方向

            2)  ![原文插图](/Firefly/uploads/course-os/image138.png)

            3)  请求柱面：55、72、100、88、93、66 当前柱面/方向：90 / 向外

            4)  服务顺序：90→88→72→66→55→0→93→100

            5)  移动距离：2+16+6+11+55+93+7=190

            6)  磁头改变方向次数：1

            7)  磁头空移动

        4.  电梯（Elevator）算法

            1)  总是向一个方向移动，直到该方向上已无请求才改变方向

            2)  ![原文插图](/Firefly/uploads/course-os/image139.png)

            3)  请求柱面：55、72、100、88、93、66 当前柱面/方向：90 / 向外

            4)  服务顺序：90→88→72→66→55→93→100

            5)  移动距离：2+16+6+11+38+7=80

            6)  磁头改变方向次数：1

    3)  移臂调度过程中，由于频繁访问临近柱面而产生的饥饿现象称为“磁臂黏着”。

        1.  N-step方法：

            1)  采用多个请求队列，每个请求队列最多容纳N个请求

            2)  当系统开始处理一个请求队列后，新的请求只能进入其他队列

            3)  只有当一个请求队列中的全部请求都处理完毕，系统才转向另一个请求队列

            4)  采用N-step方法后，一个当前请求队列中的读写请求最多等待N-1个其他请求后即可被处理。
