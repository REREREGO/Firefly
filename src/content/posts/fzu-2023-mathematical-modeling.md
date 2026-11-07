---
title: 福州大学2023级数学建模课程复习提纲
published: 2026-11-08
updated: 2026-11-08
description: 数学建模课程复习提纲，涵盖初等模型、优化模型、数学规划、微分方程、差分模型、离散模型与概率模型。
category: 学习笔记
tags:
  - 数学建模
  - 福州大学
  - 课程复习
image: /uploads/math-modeling-2023/cover.png
draft: false
pinned: false
---
## 前言

我们的考法是考课程中出现过的类似模型，我建议你要有举一反三的能力，并且问题的思路完成清晰，结果是不需要算的。这门课程的重点是用什么方法解决什么样的问题。

接下来我们按课程单元进行归纳：

## 建立数学模型

### 椅子能在不平的地面上放稳吗

**问题分析**

通常来说只需要三个椅腿着地即可放置，但是放稳需要四个椅腿

**模型假设**

1. 四条腿一样长，椅脚与地面点接触，四脚连线呈正方形
2. 地面高度连续变化，可视为数学上的连续曲面
3. 地面相对平坦，使椅子在任意位置至少三只脚同时着地

![原文插图](/Firefly/uploads/math-modeling-2023/image1.png)

**模型构成**

**椅子位置** 利用正方形（椅脚连线）的对称性，用$\theta{}$表示对角线和$x{}$轴的夹角，从而表示椅子的位置

//其实是在任一曲面上的一点对椅子进行旋转，找到能让四个脚都落地的旋转角$\theta_{0}{}$

**四个椅腿着地** 椅脚和地面距离之和为$0{}$，这个距离可以描述为$\theta{}$的函数

A，C两脚与地面的距离之和：$f(\theta){}$

B，D两脚与地面的距离之和：$g(\theta){}$

因为地面是连续的，则$f(\theta){}$和$g(\theta){}$都是连续函数；

对于任意的$\theta{}$，因为都可以让三只脚着地，故在任何时候，$f(\theta){}$和$g(\theta){}$至少有一个为$0{}$，即$f(\theta) \cdot g(\theta) = 0{}$恒成立

故只需要找到$\theta_{0}{}$，使得$f\left( \theta_{0} \right) = g\left( \theta_{0} \right) = 0{}$

**模型求解**

必然存在$f\left( \theta_{i} \right) = 0{}$，又因为$g(\theta) = f\left( \theta \pm \frac{\pi}{2} \right){}$，则有：



$$
\left\{ \begin{array}{r} f\left( \theta_{i} \right) = 0 \\ g\left( \theta_{i} \right) \geq 0 \end{array},\ \ \  \right.\ \left\{ \begin{array}{r} f\left( \theta_{i} + \frac{\pi}{2} \right) \geq 0 \\ g\left( \theta_{i} + \frac{\pi}{2} \right) = 0 \end{array} \right.\ {}
$$



由于连续性，可以构造$h(\theta) = f(\theta) - g(\theta){}$，必有：



$$
h\left( \theta_{i} \right) \leq 0,\ \ \ h\left( \theta_{i} + \frac{\pi}{2} \right) \geq 0{}
$$



则必存在$\theta_{j} \in \lbrack\theta_{i},\theta_{i} + \frac{\pi}{2}\rbrack{}$，使得$h\left( \theta_{j} \right) = 0{}$，即$f\left( \theta_{j} \right) = g\left( \theta_{j} \right) = 0{}$

故椅子可以在不平的地面上放稳

### 商人们怎样安全过河

**问题**

随从们密约：在河的任一岸, 一旦随从的人数比商人多, 就杀人越货；但是乘船渡河的方案由商人决定。  
商人们怎样才能安全过河?

**问题分析 多步决策过程**

对于每一步，要判断这一步是否安全，然后在转移前后均安全的前提下进行状态转移，使得最终到达目标状态

**模型构成**

第$k{}$次渡河前此岸的商人数为：$x_{k}{}$

第$k{}$次渡河前此岸的随从数为：$y_{k}{}$

则可以用$s_{k} = \left( x_{k},y_{k} \right){}$来表示某次渡河前的状态

允许的状态集合S为：



$$
S = \{(x,y)|x = 0,\ y = 0,1,2,3;x = 1,y = 1;x = 2,y = 2;x = 3,y = 0,1,2,3\}{}
$$



第$k{}$次渡船上的商人数为：$u_{k}{}$

第$k{}$次渡船上的随从数为：$v_{k}{}$

则可以用$d_{k} = \left( u_{k},v_{k} \right){}$来表示某次渡船上的状态



$$
D = \{(u,v)|u + v = 1,2\}{}
$$



状态转移方程为：



$$
s_{k + 1} = s_{k} + ( - 1)^{k} \cdot d_{k}{}
$$



**模型求解**

**穷举法** 搜索



![原文插图](/Firefly/uploads/math-modeling-2023/image2.png)

**图解法**

状态$s = (x,y){}$：共16个格点；

允许状态：共10个格点；

允许决策：移动1或2格；

安全渡河方案：$d_{1},\ \ldots,d_{11}{}$

## 初等模型

• 研究对象的机理比较简单  
• 用静态、线性、确定性模型即可达到建模目的

### 光盘的数据容量

![原文插图](/Firefly/uploads/math-modeling-2023/image3.png)

**问题**

光盘上的数据是经过编码的数字信息，以一定深度和宽度、不同长度的凹坑的形式，用烧蚀技术存储在光盘表面呈螺旋线形状的信道上

当盘片上环形区域面积一定时，**数据容量**的大小取决于**信道的总长度**与信道上存储数据的**线密度**

决定信道长度和线密度大小的主要因素是所用**激光的波长**，和驱动光盘的**机械形式**

**激光波长**

- 当光盘运转时激光束要能识别出信道上的凹坑所携带的信息，必须精确地聚焦
- 光的衍射使激光束在光盘上形成圆状的光斑
- 为了提高存储数据的线密度，应该使光斑尽量小，而光斑的大小与激光波长成正比



![原文插图](/Firefly/uploads/math-modeling-2023/image4.png)



**机械形式 从光盘的容量比较，CLV优于CAV**

**恒定角速度CAV** 每一圈螺旋线上存储同等数量的数据信息，容量取决于最内圈的长度、线密度以及总圈数

**恒定线速度CLV** 各圈螺旋线上数据的线密度不变，容量取决于固定的线密度和螺旋线总长度

**模型建立**

**CLV(恒定线速度)光盘** 数据容量：$C_{CLV} = \rho \cdot L_{CLV}{}$，其中$\rho{}$表示线密度，$L_{CLV}{}$表示信道总长度。信道总长度可以表示为（以下几种办法都可以）：

每圈的信道长度总和：$L_{CLV} \approx \sum_{k = 0}^{n - 1}{2\pi \cdot \left( R_{1} + k \cdot d \right) = \frac{\pi \cdot \left( R_{2} - R_{1} \right) \cdot \left( R_{2} + R_{1} - d \right)}{d}}{}$

圆环面积和信道间距之比：$L_{CLV} \approx \frac{\pi \cdot \left( R_{2}^{2} - R_{1}^{2} \right)}{d}{}$

同心圆平均周长总圈数：$L_{CLV} \approx 2\pi \cdot \frac{R_{1} + R_{2}}{2} \cdot \frac{\left( R_{2} - R_{1} \right)}{d}{}$

其中，$R_{1}{}$表示内圆半径，$R_{2}{}$表示外圆半径，$d{}$表示信道间距

CAV(恒定角速度)光盘 数据容量$C_{CAV} = \rho \cdot L_{CAV}{}$，其中$\rho{}$表示线密度，$L_{CAV}{}$表示信道总长度。

螺旋线最内圈的长度近似为$2\pi R_{1}{}$，总圈数可以视为$\frac{R_{2} - R_{1}}{d}{}$，则$L_{CAV}{}$可以被表示为：



$$
L_{CAV} = 2\pi R_{1} \cdot \frac{R_{2} - R_{1}}{d}{}
$$



**模型求解**

带入数据求解即可

### 划艇比赛的成绩

**问题**

对四种赛艇 (单人、双人、四人、八人) 4次国际大赛冠军的成绩进行比较，发现与桨手数有某种关系. 试建立数学模型揭示这种关系



![原文插图](/Firefly/uploads/math-modeling-2023/image5.png)



**问题分析**

由表格可知，$l/b{}$、$w_{0}/n{}$基本不变



![原文插图](/Firefly/uploads/math-modeling-2023/image6.png)

赛艇速度由前进动力和前进阻力决定，其中：

前进动力：桨手的划桨功率

前进阻力：浸没部分与水的摩擦力

对桨手体重、功率、阻力与艇速的关系等作出假定  
运用合适的物理定律建立模型

**模型建立**

符号：艇速 $v{}$, 浸没面积 $s{}$, 浸没体积 $A{}$, 空艇重 $w_{0}{}$, 阻力 $f{}$, 桨手数 $n{}$, 桨手功率 $p{}$, 桨手体重 $w{}$, 艇重 $W{}$

艇的静态特性：当艇形状相同时（$l/b{}$为常数），$w_{0} \propto n{}$

艇的动态特性：当$v{}$是常数时，$f \propto sv^{2}{}$

桨手的特征：$w{}$、$p{}$不变，$p \propto w{}$

即：



$$
\because np \propto fv(动力等于阻力),\ \ \ f \propto sv^{2},\ \ \therefore v \propto \left( \frac{n}{s} \right)^{\frac{1}{3}}{}
$$



&nbsp;

$$
\because s^{\frac{1}{2}} \propto A^{\frac{1}{3}},\ \ \ A \propto W = w_{0} + n \cdot w \propto n,\ \ \therefore s \propto n^{\frac{2}{3}}{}
$$



&nbsp;

$$
\because v \propto \left( \frac{n}{s} \right)^{\frac{1}{3}},\ \ \ s \propto n^{\frac{2}{3}},\ \ \therefore v \propto n^{\frac{1}{9}}{}
$$



&nbsp;

$$
t = \frac{L}{v} \propto \frac{1}{v} = n^{- \frac{1}{9}}{}
$$



**模型求解**

带入n和t的实际值进行验证：



![原文插图](/Firefly/uploads/math-modeling-2023/image7.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image8.png)



设关系表达为$t = a \cdot n^{b}{}$，$\log t = a + b \cdot \log n{}$，解得$t = 7.21 \cdot n^{- 0.11}{}$

## 简单的优化模型

现实世界中普遍存在着优化问题

静态优化问题指最优解是数(不是函数)

建立静态优化模型的关键之一是根据建模目的确定恰当的目标函数

求解静态优化模型一般用微分法

### 存储模型

**问题**

配件厂为装配线生产若干种产品，轮换产品时因更换设备要付生产准备费，产量大于需求时要付贮存费。该厂生产能力非常大，即所需数量可在很短时间内产出。  
已知某产品日需求量100件，生产准备费$c_{1} = 5000{}$元，贮存费每日每件1元。试安排该产品的生产计划，即多少天生产一次（生产周期），每次产量多少，使总费用最小。  
**要求** 不只是回答问题，而且要建立生产周期、产量与需求量、准备费、贮存费之间的关系

**问题分析**

依题意，日需求100件，准备费5000元，储存费每日每件1元。

- 每天生产一次，每次100件，准备费5000元，无存储费。总费用5000元，每天平均费用5000元。
- 10天生产一次，每次1000件，准备费5000元，存储费$= \sum_{i = 0}^{9}{i*100} = 4500{}$元。总费用9500元，每天平均费用950元。
- 50天生产一次，每次5000件，准备费5000元，存储费$= \sum_{i = 0}^{49}{i*100} = 122500{}$元。总费用127500元，平均每天费用2550元。

存在最佳的周期和产量，使得总费用最少。目标函数为每天平均费用。

**模型假设**

产品每天的需求量为常数$r{}$。  
每次生产准备费为$c_{1}{}$, 每天每件产品存储费为$c_{2}{}$。  
生产能力为无限大（相对于需求量），当贮存量降到0时，Q件产品立即生产出来供给需求。

**模型建立**

存储量表表示为时间的函数$q(t){}$为周期函数，$q(t) = 0{}$时生产$Q{}$件，随后以需求速率$r{}$递减，直至$q(t) = 0{}$时再次生产：



$$
Q = r \cdot T{}
$$



一周期$T{}$的存储费$c_{2} \cdot \int_{0}^{T}{q(t)dt} = c_{2} \cdot \frac{QT}{2}{}$，总费用$C{}$表示为：



$$
C_{ALL} = c_{1} + c_{2} \cdot \frac{rT^{2}}{2}{}
$$



&nbsp;

$$
C(T) = \frac{C_{ALL}}{T} = \frac{c_{1}}{T} + c_{2} \cdot \frac{rT}{2}{}
$$



**模型求解**

求T使得$C(T){}$最小，求导后得到$T = \sqrt{\frac{2 \cdot c_{1}}{r \cdot c_{2}}}{}$，$Q = r \cdot T = \sqrt{\frac{2 \cdot c_{1} \cdot r}{c_{2}}}{}$

### 允许缺货的存储模型

**问题**

当贮存量降到零时仍有需求$r{}$，出现缺货，造成损失。允许缺货, 每天每件缺货损失费 $c_{3}{}$ , 缺货需补足。



![原文插图](/Firefly/uploads/math-modeling-2023/image9.png)

**模型建立**

假设周期为T，当$t = T_{1}{}$时，存储量将为0，则：

一周期的存储费可以表示为：$c_{2}\int_{0}^{T_{1}}{q(t)dt} = c_{2}A{}$

一周期的缺货费可以表示为：$c_{3}\int_{T_{1}}^{T}{\left| q(t) \right|dt = c_{3}B}{}$

故一周期的总费用为：$C_{ALL} = c_{1} + c_{2} \cdot \frac{QT_{1}}{2} + c_{3} \cdot \frac{r\left( T - T_{1} \right)^{2}}{2}{}$

目标函数为：$C(T,Q) = \frac{C_{ALL}}{T} = \frac{c_{1}}{T} + \frac{c_{2}Q^{2}}{2rT} + \frac{c_{3}(rT - Q)^{2}}{2rT}{}$

目标转换为：找到最合适的$T{}$和$Q{}$，使得$C(T,Q){}$最小，$\frac{\partial C}{\partial T} = 0,\ \ \frac{\partial C}{\partial Q} = 0{}$

**模型求解**

解得：$\left\{ \begin{array}{r} T' = \sqrt{\frac{2c_{1}}{rc_{2}} \cdot \frac{c_{2} + c_{3}}{c_{3}}} = \mu T \\ Q' = \sqrt{\frac{2c_{1}r}{c_{2}} \cdot \frac{c_{3}}{c_{2} + c_{3}}} = \frac{Q}{\mu} \end{array} \right.\ {}$，其中$\mu = \sqrt{\frac{c_{2} + c_{3}}{c_{3}}}{}$

### 生猪的出售时机

**问题**

饲养场每天投入4元资金，用于饲料、人力、设备，估计可使80kg重的生猪体重增加2kg  
市场价格目前为8元/kg，但是预测每天会降低 0.1元，问生猪应何时出售?  
如果估计和预测有误差，对结果有何影响?

**问题分析**

投入资金使生猪体重随时间增加，出售单价随时间减少，故存在最佳出售时机，使利润最大

**模型假设**

每天投入4元，使生猪体重增加$r = 2{}$（kg），市场价格每天降低$g = 0.1{}$（元）

**模型建立**

若在第$t{}$天出售，生猪体重为$w = 80 + r \cdot t{}$，出售价格$p = 8 - g \cdot t{}$，营销收入$R = pw{}$，资金投入$C = 4t{}$

则利润$Q(t) = R - C = (8 - gt) \cdot (80 + rt) - 4t{}$

**模型求解**

求$t{}$使得$Q(t){}$最大，$t = \frac{4r - 40g - 2}{rg} = 10{}$

$Q(10) = 660 > 640{}$，在10天后出售可多得利润20元

### 森林救火

**问题**

森林失火后，要确定派出消防队员的数量  
队员多，森林损失小，救援费用大；队员少，森林损失大，救援费用小  
综合考虑损失费和救援费，确定队员数量

**问题分析**

记队员人数$x{}$，失火时刻$t = 0{}$，开始救火时刻$t_{1}{}$，灭火时刻$t_{2}{}$，时刻$t{}$森林烧毁面积$B(t){}$

损失费$f_{1}(x){}$是$x{}$的减函数, 由烧毁面积$B(t_{2}){}$决定

救援费$f_{2}(x){}$是$x{}$的增函数, 由队员人数和救火时间决定

存在恰当的$x{}$，使$f_{1}(x){}$, $f_{2}(x){}$之和最小



![原文插图](/Firefly/uploads/math-modeling-2023/image10.png)

**模型假设**

$0 \leq t \leq t_{1}{}$, $\frac{dB}{dt}{}$ 与 $t{}$成正比，系数$\beta{}$ (火势蔓延速度)：

火势以失火点为中心，均匀向四周呈圆形蔓延

半径 $r{}$与 $t{}$ 成正比，面积 $B{}$与 $t^{2}{}$ 成正比，$\frac{dB}{dt}{}$与 $t{}$ 成正比  
$t_{1} \leq t \leq t_{2}{}$, $\beta{}$ 降为$\beta - \lambda x{}$ ($\lambda{}$为队员的平均灭火速度)

$f_{1}(x){}$与$B(t_{2}){}$成正比，系数$c_{1}{}$ (烧毁单位面积损失费）

每个队员的单位时间灭火费用$c_{2}{}$, 一次性费用$c_{3}{}$

**模型建立**



$$
\because b = \beta t_{1},\ \ \ t_{2} - t_{1} = \frac{b}{\lambda x - \beta},\ \ \therefore t_{2} = t_{1} + \frac{\beta t_{1}}{\lambda x - \beta}{}
$$



$b{}$是森林烧毁速率的最大值，则森林在最终的烧毁面积$B(t_{2}){}$为：



$$
B\left( t_{2} \right) = \int_{0}^{t_{2}}{\frac{dB}{dt}dt = \frac{bt_{2}}{2} = \frac{\beta t_{1}^{2}}{2}} + \frac{\beta^{2}t_{1}^{2}}{2(\lambda x - \beta)}{}
$$



损失费$f_{1}(x) = c_{1}B(t_{2}){}$，救援费$f_{2}(x) = c_{2}x\left( t_{2} - t_{1} \right) + c_{3}x{}$，总费用$C(x) = f_{1}(x) + f_{2}(x){}$

故总的费用表示为：



$$
C(x) = \frac{c_{1}\beta t_{1}^{2}}{2} + \frac{c_{1}\beta^{2}t_{1}^{2}}{2(\lambda x - \beta)} + \frac{c_{2}\beta t_{1}x}{\lambda x - \beta} + c_{3}x{}
$$



**模型求解**

求$x{}$使得$C(x){}$最小，求$\frac{dC}{dx} = 0{}$，得$x = \frac{\beta}{\lambda} + \beta\sqrt{\frac{c_{1}\lambda t_{1}^{2} + 2c_{2}t_{1}}{2c_{3}\lambda^{2}}}{}$，$\frac{\beta}{\lambda}{}$是火势不继续蔓延的最少队员数

### 血管分支

![原文插图](/Firefly/uploads/math-modeling-2023/image11.png)

**问题**

机体提供能量维持血液在血管中的流动给血管壁以营养

为了克服血液流动的阻力，消耗能量与取决于血管的几何形状  
在长期进化中动物血管的几何形状已经达到能量最小原则

研究在能量最小原则下，血管分支处粗细血管半径比例和分岔角度

**模型假设**

一条粗血管和两条细血管在分支点对称地处于同一平面  
血液流动近似于黏性流体在刚性管道中的运动

血液给血管壁的能量随管壁的内表面积和体积的增加而增加，管壁厚度$d{}$近似与血管半径$r{}$成正比，图中的流量$q = 2q_{1}{}$

考察血管$AC{}$与$CB{}$，$CB'{}$，找到最优的$r/r_{1}{}$，$\theta{}$

由于黏性流体在刚性管道中运动，故流量$q = \frac{\pi r^{4}\Delta p}{8\mu l}{}$，其中$\Delta p{}$是$A,C{}$的压力差，$\mu{}$是黏性系数

克服阻力所消耗的能量$E_{1} = q\Delta p = \frac{8\mu q^{2}l}{\pi r^{4}}{}$

提供营养所消耗的能量$E_{2} = br^{\alpha}l,\ \ \ 1 \leq \alpha \leq 2{}$

其中，管壁内表面积为$2\pi rl{}$，管壁体积为$\pi\left( d^{2} + 2rd \right)l{}$，管壁厚度$d{}$与$r{}$成正比

模型建立

机体为血流提供能量$E = E_{1} + E_{2} = l \cdot \left( \frac{kq^{2}}{r^{4}} + br^{\alpha} \right) + 2l_{1} \cdot (\frac{kq_{1}^{2}}{r_{1}^{4}} + br_{1}^{\alpha}){}$

// 分别是主管道和两个分支管道的$E_{1} + E_{2}{}$总和

其中$k = \frac{8\mu}{\pi}{}$，而$l = L - \frac{H}{\tan\theta},\ \ \ l_{1} = \frac{H}{\sin\theta}{}$，代入得：



$$
E\left( r,r_{1},\theta \right) = \left( L - \frac{H}{\tan\theta} \right) \cdot \left( \frac{kq^{2}}{r^{4}} + br^{\alpha} \right) + 2 \cdot \left( \frac{H}{\sin\theta} \right) \cdot (\frac{kq_{1}^{2}}{r_{1}^{4}} + br_{1}^{\alpha}){}
$$



**模型求解**

对$r{}$，$r_{1}{}$，$\theta{}$分别求导，使得$\frac{\partial E}{\partial r} = 0,\ \ \frac{\partial E}{\partial r_{i}} = 0,\frac{\partial E}{\partial\theta} = 0{}$，解得：



$$
\left\{ \begin{array}{r} b\alpha r^{\alpha - 1} - \frac{4kq^{2}}{r^{5}} = 0 \\ b\alpha r_{1}^{\alpha - 1} - \frac{4kq^{2}}{r_{1}^{5}} = 0 \end{array} \right.\  \Rightarrow \frac{r}{r_{1}} = 4^{\frac{1}{\alpha + 4}}{}
$$



&nbsp;

$$
\cos\theta = 2\left( \frac{r}{r_{1}} \right)^{- 4} \Rightarrow 2^{\frac{\alpha - 4}{\alpha + 4}}{}
$$



$\because 1 \leq \alpha \leq 2\ \ \ \ \ \ \ \ \therefore 1.26 \leq \frac{r}{r_{1}} \leq 1.32,\ \ \ 37{^\circ} \leq \theta \leq 49{^\circ}{}$

## 数学规划模型

**线性规划（LP）问题**

典型的**线性规划（LP）问题**，它是指在一组线性的等式或不等式的约束条件下，寻求以线性函数的最大（小）值为目标的数学模型。



![原文插图](/Firefly/uploads/math-modeling-2023/image12.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image13.png)



三要素：决策变量、目标函数、约束条件

建模时尽可能利用原始的数据信息，把尽量多的计算留给计算机去做

用LINGO求解，输出丰富，利用影子价格和灵敏性分析可对结果做进一步研究

三种写法：一般形式、规范形式、标准形式



![原文插图](/Firefly/uploads/math-modeling-2023/image14.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image15.png)



将一般形式化成规范形式：

1. 目标函数的转化

$$
\max z = - \min( - z){}
$$



2. 等式约束的转化

对于一个等式约束：$\sum_{j = 1}^{n}{a_{ij} \cdot x_{j} = b_{i}\ \ \  \Rightarrow}\ \ \ \left\{ \begin{array}{r} \sum_{j = 1}^{n}{a_{ij} \cdot x_{j} \geq b_{i}} \\ \sum_{j = 1}^{n}{{( - a}_{ij}) \cdot x_{j} \geq ( - b_{i})} \end{array} \right.\ {}$

3. 无符号限制变量转化

对于一个无符号限制变量$x_{j}{}$，引入两个非负变量$x_{j}^{+} \geq 0{}$和$x_{j}^{-} \geq 0{}$，并设：



$$
x_{j} = x_{j}^{+} - x_{j}^{-}{}
$$



将一般形式化成标准形式：

1. 目标函数的转化

$$
\max z = - \min( - z){}
$$



2. 不等式约束的转化

对于一个不等式约束$\sum_{j = 1}^{n}{a_{ij}x_{j} \geq b_{i}}{}$，引入一个剩余变量$s_{i}{}$，转化为：



$$
\sum_{j = 1}^{n}{a_{ij}x_{j} - s_{i} = b_{i},\ \ \ \ \ \ s_{i} \geq 0}{}
$$



> 对于一个不等式约束$\sum_{j = 1}^{n}{a_{ij}x_{j} \leq b_{i}}{}$，引入一个松弛变量$r_{i}{}$，转化为：



$$
\sum_{j = 1}^{n}{a_{ij}x_{j} + r_{i} = b_{i},\ \ \ \ \ \ r_{i} \geq 0}{}
$$



**非线性规划问题**

对于一个非线性规划：



$$
\min{f(x)}{}
$$



&nbsp;

$$
s.t.\left\{ \begin{array}{r} g_{i}(x) \leq 0,\ \ \ i = 1,2,\ldots,m \\ h_{j}(x) = 0,\ \ \ j = 1,2,\ldots,n \end{array} \right.\ {}
$$



其中，$f(x),g_{i}(x),h_{j}(x){}$至少有一个是非线性函数

求解方法

1. 若$f(x){}$形式简单，直接通过求$\nabla f(x) = 0{}$（$f(x){}$的梯度）求出最优解$x^{*}{}$
2. 求$\nabla f(x){}$困难，采用下降迭代法：根据目标函数的特征采用搜索的方法寻找

### 奶制品的生产和销售

**问题**

一桶牛奶，经过12h的加工，可以得到3kg的$A_{1}{}$产品，获利为24元/kg；或经过8h的加工，可以得到4kg的$A_{2}{}$产品，获利为16元/kg。

假设每天有50桶牛奶可用于生产，总工时为480h，且$A_{1}{}$产品至多生产100kg，则如何决策可以实现收益最大化。

**模型建立**

决策变量：$x_{1}{}$桶牛奶用于生产$A_{1}{}$，$x_{2}{}$桶牛奶用于生产$A_{2}{}$

目标函数（每日获利）：$z = 24 \cdot 3 \cdot x_{1} + 16 \cdot 4 \cdot x_{2}{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image16.png)

约束条件（原料供应）：$x_{1} + x_{2} \leq 50{}$

（劳动时间）：$12 \cdot x_{1} + 8 \cdot x_{2} \leq 480{}$

（加工能力）：$3 \cdot x_{1} \leq 480{}$

（非负约束）：$x_{1},x_{2} \geq 0{}$

**模型求解 图解法**

约束条件：



$$
x_{1} + x_{2} \leq 50 \Rightarrow l_{1}:x_{1} + x_{2} = 50{}
$$



&nbsp;

$$
12 \cdot x_{1} + 8 \cdot x_{2} \leq 480 \Rightarrow l_{2}:12 \cdot x_{1} + 8 \cdot x_{2} = 480{}
$$



&nbsp;

$$
3 \cdot x_{1} \leq 480 \Rightarrow l_{3}:3 \cdot x_{1} = 480{}
$$



&nbsp;

$$
x_{1},x_{2} \geq 0 \Rightarrow l_{4}:x_{1} = 0,\ \ \ l_{5}:x_{2} = 0{}
$$



目标函数：



$$
\max{z = 24 \cdot 3 \cdot x_{1} + 16 \cdot 4 \cdot x_{2}} \Rightarrow l_{6}:z = 72x_{1} + 64x_{2}{}
$$



在$x_{1} - x_{2}{}$坐标系中描绘出$l_{1},l_{2},\ldots,l_{5}{}$，合法的自变量域为五条直线所闭合的平面内，平移直线$l_{6}{}$，使得$z{}$达到最大值。在$B(20,30){}$点得到最优解$z_{\max} = 3360{}$。

// 最优解一定在凸多边形的某个顶点取得

模型求解 代码求解



![原文插图](/Firefly/uploads/math-modeling-2023/image17.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image18.png)



### 奶制品的生产和销售------深加工

**问题**

一桶牛奶，经过12h的加工，可以得到3kg的$A_{1}{}$产品，获利为24元/kg；或经过8h的加工，可以得到4kg的$A_{2}{}$产品，获利为16元/kg。

每1kg的$A_{1}{}$产品，经过2h的深加工并花费3元，可以得到0.8kg的$B_{1}{}$产品，获利为44元/kg；每1kg的$A_{2}{}$产品，经过2h的深加工并花费3元，可以得到0.75kg的$B_{1}{}$产品，获利为32元/kg。

1. 假设每天有50桶牛奶可用于生产，总工时为480h，且$A_{1}{}$产品至多生产100kg，如何决策生产？
2. 如果30元可增加1桶牛奶，3元可增加1h加工时间，应否投资？现投资150元，可赚回多少？

**模型建立**

出售$x_{1}kg{}$的$A_{1}{}$产品，$x_{2}kg{}$的$A_{2}{}$产品，$x_{3}kg{}$的$B_{1}{}$产品，$x_{4}kg{}$的$B_{1}{}$产品，用$x_{5}kg{}$的$A_{1}{}$产品生产$B_{1}{}$产品，$x_{6}kg{}$的$A_{2}{}$产品生产$B_{2}{}$产品

目标函数：$\max z = 24 \cdot x_{1} + 16 \cdot x_{2} + 44 \cdot x_{3} + 3\dot{2} \cdot x_{4} - 3 \cdot x_{5} - 3 \cdot x_{6}{}$

约束条件：

原料供应：$\frac{x_{1} + x_{5}}{3} + \frac{x_{2} + x_{6}}{4} \leq 50{}$

劳动时间：$4 \cdot \left( x_{1} + x_{5} \right) + 2 \cdot \left( x_{2} + x_{6} \right) + 2 \cdot x_{5} + 2 \cdot x_{6} \leq 480{}$

加工能力：$x_{1} + x_{5} \leq 100{}$

附加约束：$x_{3} = 0.8 \cdot x_{5},\ \ \ \ \ \ x_{4} = 0.8 \cdot x_{6}{}$

非负约束：$x_{1},x_{2},\ldots,x_{6} \geq 0{}$

**模型求解**

### 自来水运输

**问题**

有三个水库$A,B,C{}$，和甲、乙、丙、丁四个小区，供应关系和价格如下：



![原文插图](/Firefly/uploads/math-modeling-2023/image19.png)



**模型建立**

决策变量：水库$i{}$向小区$j{}$的日供水量为$x_{ij}(x_{34} = 0){}$

目标函数：引水管理费最小



$$
\min Z = 160 \cdot x_{11} + 130 \cdot x_{12} + 220 \cdot x_{13} + 170 \cdot x_{14} + 140 \cdot x_{21} + 130 \cdot x_{22} + 190 \cdot x_{23} + 150 \cdot x_{24} + 190 \cdot x_{31} + 200 \cdot x_{32} + 230 \cdot x_{33}{}
$$



约束条件：

供应限制：$\left\{ \begin{array}{r} x_{11} + x_{12} + x_{13} + x_{14} = 50 \\ x_{21} + x_{22} + x_{23} + x_{24} = 60 \\ x_{31} + x_{32} + x_{33} = 50 \end{array} \right.\ {}$

需求限制：$\left\{ \begin{array}{r} 30 \leq x_{11} + x_{21} + x_{31} \leq 80 \\ 70 \leq x_{12} + x_{22} + x_{32} \leq 140 \\ 10 \leq x_{13} + x_{23} + x_{33} \leq 30 \\ 10 \leq x_{14} + x_{24} \leq 50 \end{array} \right.\ {}$

**模型求解**

### 货机装运

**问题**

一架飞机有三个货舱，和四个可选的货物，如何装运使得本次飞行的获利最大



![原文插图](/Firefly/uploads/math-modeling-2023/image20.png)



**模型假设**

1. 每种货物可以分割到任意小
2. 每种货物可以在一个或多个货舱中任意分布
3. 多种货物可以混装，并保证不留空隙
4. 所给出的数据都是精确的，没有误差

**模型建立**

设四个货物的编号$i = 1,2,3,4{}$，三个仓的编号$j = 1,2,3{}$（分别代表前中后仓）

货舱$j{}$的重量限制为$W_{j}{}$，体积限制为$V_{j}{}$，第$i{}$种货物的重量为$w_{i}{}$，体积为$v_{i}{}$，利润为$p_{i}{}$

则：



$$
W = (10,16,8),\ \ \ V = (6800,\ 8700,\ 5300){}
$$



&nbsp;

$$
w = (18,15,23,\ 12)\ \ \ v = (480,650,580,390),p = (3100,3800,3500,2850){}
$$



设$x_{ij}{}$表示第$i{}$种货物装入第$j{}$仓的重量（吨）

目标函数：



$$
\max z = \sum_{i = 1}^{4}{p_{i} \cdot \left( \sum_{j = 1}^{3}x_{ij} \right)}{}
$$



约束条件

货舱重量：$\sum_{i = 1}^{4}x_{ij} \leq W_{j}{}$

货舱容积：$\sum_{i = 1}^{4}{v_{i} \cdot x}_{ij} \leq V_{j}{}$

平衡要求：$\frac{\sum_{i = 1}^{4}x_{ij}}{W_{j}} = \frac{\sum_{i = 1}^{4}x_{ik}}{W_{k}},\ \ \ j,k = 1,2,3,\ \ \ j \neq k{}$

货物供应：$\sum_{j = 1}^{3}x_{ij} \leq w_{i}{}$

**模型求解**

### 汽车生产

**问题**



![原文插图](/Firefly/uploads/math-modeling-2023/image21.png)

汽车厂生产三种类型汽车，已知各类型的每辆车对钢材、劳动时间的需求，利润及工程每月的现有量如下

1. 制定月生产计划，使工厂的利润最大
2. 如果生产某一类汽车，则至少生产80辆

**模型假设**

**问题1模型建立**

假设生产小型车$x_{1}{}$辆，中型车$x_{2}{}$辆，大型车$x_{3}{}$辆

目标函数：$\max z = 2 \cdot x_{1} + 3 \cdot x_{2} + 4 \cdot x_{3}{}$

约束条件：

基本约束：$x_{1},x_{2},x_{3} \geq 0{}$

钢材限制：$1.5 \cdot x_{1} + 3 \cdot x_{2} + 5 \cdot x_{3} \leq 600{}$

劳动力限制：$280 \cdot x_{1} + 250 \cdot x_{2} + 400 \cdot x_{3} \leq 60000{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image22.png)

**模型求解**

结果为小数怎么办

1. 舍去小数
2. 试探
3. 模型中修改条件：$x_{1},x_{2},x_{3}{}$为非负整数→整数规划（IP）

整数规划



![原文插图](/Firefly/uploads/math-modeling-2023/image23.png)



**问题2模型建立**

修改函数：



$$
\max z = 2 \cdot x_{1} + 3 \cdot x_{2} + 4 \cdot x_{3}{}
$$



&nbsp;

$$
s.t.\ \left\{ \begin{array}{r} x_{1},x_{2},x_{3} = 0\ or\  \geq 80 \\ 1.5 \cdot x_{1} + 3 \cdot x_{2} + 5 \cdot x_{3} \leq 600 \\ 280 \cdot x_{1} + 250 \cdot x_{2} + 400 \cdot x_{3} \leq 60000 \end{array} \right.\ {}
$$



两种解决方法：



![原文插图](/Firefly/uploads/math-modeling-2023/image24.png)

将其分解为8个LP子模型，然后去除不可能的模型，逐个求解

2. 引入0-1变量，化为整数规划

![原文插图](/Firefly/uploads/math-modeling-2023/image25.png)



&nbsp;

$$
\left\{ \begin{array}{r} x_{1} \cdot \left( x_{1} - 80 \right) \geq 0 \\ x_{2} \cdot \left( x_{2} - 80 \right) \geq 0 \\ x_{3} \cdot \left( x_{3} - 80 \right) \geq 0 \\ x_{1},x_{2},x_{3}均为整数 \end{array} \right.\ {}
$$



### 原油采购

**问题**

有两种原油，A和B，存量分别为500和1000吨，可以生产汽油甲和乙，关系如下：



![原文插图](/Firefly/uploads/math-modeling-2023/image26.png)



市场上可买到不超过1500t的原油A：  
• 购买量不超过500t时的单价为10000元/t；  
• 购买量超过500t但不超过1000t时，超过500t的部分8000元/t；  
• 购买量超过1000t时，超过1000t的部分6000元/t

问：该如何安排原油的采购和加工

**模型建立**

设$x_{11}{}$吨的原油A用于生产汽油甲，$x_{12}{}$吨的原油A用于生产汽油乙，$x_{21}{}$吨的原油B用于生产汽油甲，$x_{22}{}$吨的原油B用于生产汽油乙，从外界购买$x{}$吨原油A

购买原油A的代价$c(x){}$可以表示为：



$$
c(x) = \left\{ \begin{array}{r} 10x,\ \ \ (0 \leq x \leq 500) \\ 8x + 1000,\ \ \ (500 \leq x \leq 1000) \\ 6x + 3000,\ \ \ (1000 \leq x \leq 1500) \end{array} \right.\ {}
$$



目标函数：$\max z = 4.8\left( x_{11} + x_{21} \right) + 5.6\left( x_{12} + x_{22} \right) - c(x){}$



$$
s.t.\left\{ \begin{array}{r} x_{11} + x_{12} \leq 500 + x \\ x_{21} + x_{22} \leq 1000 \\ x \leq 1500 \\ \frac{x_{11}}{x_{11} + x_{21}} \geq 0.5 \\ \frac{x_{12}}{x_{12} + x_{22}} \geq 0.6 \end{array} \right.\ {}
$$



**模型求解**

对于非线性函数$c(x){}$的处理：

法1：设$x_{1},x_{2},x_{3}{}$以价格为10，8，6（千元/吨）采购原油A，则$x = x_{1} + x_{2} + x_{3}{}$，函数$c(x){}$可以改造为：



$$
c(x) = x_{1} + x_{2} + x_{3}{}
$$



增加以下约束条件：



$$
\left\{ \begin{array}{r} \left( x_{1} - 500 \right) \cdot x_{2} = 0\ \ \ \ \ \ 只有购买x_{1} = 500t时才能购买x_{2} \\ \left( x_{2} - 500 \right) \cdot x_{3} = 0\ \ \ \ \ \ 只有购买x_{2} = 500t时才能购买x_{3} \end{array} \right.\ {}
$$



法2：引入01变量：$y_{1},y_{2},y_{3}{}$，代表是否能用的价格采购原油A

增加约束：



$$
\left\{ \begin{array}{r} 500y_{2} \leq x_{1} \leq 500y_{1} \\ 500y_{3} \leq x_{2} \leq 500y_{2} \\ x_{3} \leq 500y_{3} \end{array}\ \ \ y_{1},y_{2},y_{3} = 0\ or\ 1 \right.\ {}
$$



法3：直接处理分段线性函数$c(x){}$（更具一般性）（没看懂）



![原文插图](/Firefly/uploads/math-modeling-2023/image27.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image28.png)



## 微分方程模型

特点：动态模型

• 描述对象特征随时间(空间)的演变过程  
• 分析对象特征的变化规律  
• 预报对象特征的未来性态  
• 研究控制对象特征的手段

方法：微分方程建模

• 根据函数及其变化率之间的关系确定函数  
• 根据建模目的和问题分析作出简化假设  
• 按照内在规律或用类比法建立微分方程

![原文插图](/Firefly/uploads/math-modeling-2023/image29.png)

### 传染病模型

**问题**

如何估计时刻t下，某传染病的的患者人数

**模型1：**已感染的人数（病人）$i(t){}$

假设：假设每个病人每天的有效接触者（足以使人致病）为$\lambda{}$人

建模：



$$
i(t + \Delta t) - i(t) = \lambda \cdot i(t) \cdot \Delta t{}
$$



&nbsp;

$$
\because\frac{di}{dt} = \lambda i(t),\ \ \ i(0) = i_{0},\ \ \therefore i(t) = i_{0}e^{\lambda t}{}
$$



存在问题，如果有效接触者是病人，则不会增加患者人数，必须区分感染者和未感染者

**模型2：**区分已感染者（病人）和未感染者（健康人） **SI模型**



![原文插图](/Firefly/uploads/math-modeling-2023/image30.png)

假设：

1. 总人数$N{}$不变，病人和健康人的比例为$i(t),\ s(t){}$
2. 每个病人每天有效接触人数为$\lambda{}$，且使健康人致病

$$
N\left\lbrack i(t + \Delta t) - i(t) \right\rbrack = \lambda \cdot s(t) \cdot N \cdot i(t) \cdot \Delta t{}
$$



&nbsp;

$$
\because\frac{di}{dt} = \lambda s(t)i(t),\ \ \ s(t) + i(t) = 1{}
$$



&nbsp;

$$
\therefore\left\{ \begin{array}{r} \frac{di}{dt} = \lambda i(t) \cdot \lbrack 1 - i(t)\rbrack \\ i(0) = i_{0} \end{array} \Rightarrow i(t) = \frac{1}{1 + \left( \frac{1}{i_{0}} - 1 \right) \cdot e^{- \lambda t}} \right.\ {}
$$



&nbsp;

$$
\Rightarrow t_{m} = \lambda^{- 1}ln(\frac{1}{i_{0}} - 1){}
$$



**模型3：**考虑传染病无免疫性------病人治愈成为健康人，可被再次传染 SIS模型

假设：

增加：3. 病人每天治愈的比例为$\mu{}$（日治愈率）

建模：



$$
N \cdot \left\lbrack i(t + \Delta t) - i(t) \right\rbrack = \lambda \cdot s(t) \cdot N \cdot i(t) \cdot \Delta t - \mu \cdot N \cdot i(t) \cdot \Delta t{}
$$



&nbsp;

$$
\Rightarrow \left\{ \begin{array}{r} \frac{di}{dt} = \lambda \cdot i(t) \cdot \left\lbrack 1 - i(t) \right\rbrack - \mu \cdot i(t) = - \lambda \cdot i(t) \cdot \left\lbrack i(t) - \left( 1 - \frac{1}{\sigma} \right) \right\rbrack \\ i(0) = i_{0} \end{array} \right.\ {}
$$



其中$\sigma = \frac{\lambda}{\mu}{}$表示每个感染期（$\frac{1}{\mu}{}$）每个病人的有效接触数，$i(t){}$的趋势和$\sigma{}$有关：



![原文插图](/Firefly/uploads/math-modeling-2023/image31.png)



**模型4：**考虑传染病有免疫性------病人治愈后即移出感染系统，称为移出者 **SIR模型**

假设：

1. 总人数$N{}$不变，病人、健康人和移出者比例分别为$i(t),s(t),r(t){}$
2. 病人日接触率$\lambda{}$，日治愈率$\mu{}$，接触数$\sigma = \lambda/\mu{}$

建模：

满足：$s(t) + i(t) + r(t) = 1{}$，需建立$i(t),s(t),r(t){}$的两个方程：



$$
\left\{ \begin{array}{r} N\left\lbrack i(t + \Delta t) - i(t) \right\rbrack = \lambda Ns(t)i(t)\Delta t - \mu Ni(t)\Delta t \\ N\left\lbrack s(t + \Delta t) - s(t) \right\rbrack = - \lambda Ns(t)i(t)\Delta t\ \ \ 减少量包括病人和移出者 \\ N\left\lbrack r(t + \Delta t) - r(t) \right\rbrack = \mu Ni(t)\Delta t \end{array} \right.\ {}
$$



&nbsp;

$$
\Rightarrow \left\{ \begin{array}{r} \frac{di}{dt} = \lambda s(t)i(t) - \mu i(t) \\ \frac{ds}{dt} = - \lambda s(t)i(t) \\ \frac{dr}{dt} = \mu i(t) \\ i(0) = i_{0},\ \ \ s(0) = s_{0} \end{array} \right.\ {}
$$



无法直接求出$i(t),s(t){}$的解析解→先做数值计算，再在相平面上研究解析解性质



![原文插图](/Firefly/uploads/math-modeling-2023/image32.png)



### 正规战和游击战

**问题**

第一次世界大战Lanchester提出预测战役结局的模型

战争分类：正规战争，游击战争，混合战争  
只考虑双方兵力多少和战斗力强弱  
兵力因战斗及非战斗减员而减少，因增援而增加  
战斗力与射击次数及命中率有关

**一般模型**

假设

1. 每方战斗减员率取决于双方的兵力和战斗力
2. 每方非战斗减员率与本方兵力成正比
3. 甲乙双方的兵力为$x(t),y(t){}$，战斗力为$a,b{}$，增援率为$u(t){}$, $v(t){}$，非战斗减员率$\alpha,\ \beta{}$

模型建立



$$
\left\{ \begin{array}{r} \dot{x}(t) = f(x,y) - \alpha x + u(t),\ \ \ \alpha > 0 \\ \dot{y}(t) = g(x,y) - \beta y + v(t),\ \ \ \beta > 0 \end{array} \right.\ {}
$$



其中$f(x,y){}$、$g(x,y){}$取决于战争类型

**正规战争模型**

模型建立

双方均以正规部队作战

甲方战斗减员率只取决于乙方的兵力$y{}$和战斗力$a = p_{y}r_{y}{}$，其中是$p_{y}{}$射击率，$r_{y}{}$是命中率

乙方战斗减员率只取决于甲方的兵力$x{}$和战斗力$b = p_{x}r_{x}{}$，其中是$p_{x}{}$射击率，$r_{x}{}$是命中率



$$
f(x,y) = - ay,\ \ \ g(x,y) = - bx{}
$$



则：



$$
\left\{ \begin{array}{r} \dot{x}(t) = - ay - \alpha x + u(t) \\ \dot{y}(t) = - bx - \beta y + v(t) \end{array} \right.\ {}
$$



&nbsp;

![原文插图](/Firefly/uploads/math-modeling-2023/image33.png)

如果忽略非战斗减员和增援



$$
\left\{ \begin{array}{r} \dot{x} = - ay \\ \dot{y} = - bx \\ x(0) = x_{0},\ \ \ y(0) = y_{0} \end{array} \right.\ {}
$$



为判断战争的结局，在相平面上讨论$x{}$与$y{}$的关系：



$$
\frac{dy}{dx} = \frac{bx}{ay} \Rightarrow \left\{ \begin{array}{r} ay^{2} - bx^{2} = k \\ k = ay_{0}^{2} - bx_{0}^{2} \end{array} \right.\ {}
$$



$k > 0{}$时，乙方胜（$x{}$会先达到0，此时$x = 0,y > 0{}$）

平方律模型：$\because k > 0\ \ \therefore\left( \frac{y_{0}}{x_{0}} \right)^{2} > \frac{b}{a} = \frac{r_{x}p_{x}}{r_{y}p_{y}}{}$

$k < 0{}$时，甲方胜

$k = 0{}$时，平局

**游击战争模型**

模型建立

双方都采用游击部队作战

甲方的战斗减员率还随着甲方兵力的增加而增加$f(x,y) = - cxy{}$，其中$c{}$是乙方每个士兵的杀伤率，$c = r_{y}p_{y},\ \ \ p_{y} = s_{ry}/s_{x}{}$，其中$r_{y}{}$是乙方的射击率，$p_{y}{}$是乙方的命中率，$s_{x}{}$是甲方的活动面积，$s_{ry}{}$是乙方射击的有效面积

同理，$g(x,y) = - dxy,\ \ \ d = r_{x}p_{x} = r_{x}s_{rx}/s_{y}{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image34.png)

如果忽略非战斗减员和增援



$$
\left\{ \begin{array}{r} \dot{x} = - cxy \\ \dot{y} = - dxy \\ x(0) = x_{0},\ \ \ y(0) = y_{0} \end{array} \right.\ {}
$$



为判断战争的结局，在相平面上讨论$x{}$与$y{}$的关系：



$$
\frac{dy}{dx} = \frac{d}{c} \Rightarrow \left\{ \begin{array}{r} cy - dx = m \\ m = cy_{0} - dx_{0} \end{array} \right.\ {}
$$



$m > 0{}$时，乙方胜（$x{}$会先达到0，此时$x = 0,y > 0{}$）

$m < 0{}$时，甲方胜

$m = 0{}$时，平局



![原文插图](/Firefly/uploads/math-modeling-2023/image35.png)

线性律模型：$\because m > 0\ \ \therefore\frac{y_{0}}{x_{0}} > \frac{d}{c} = \frac{r_{x}s_{rx}s_{x}}{r_{y}s_{ry}s_{y}}{}$

**混合战争模型**

模型建立

假设甲方为游击部队，乙方为正规部队



$$
\left\{ \begin{array}{r} \dot{x} = - cxy \\ \dot{y} = - bx \\ x(0) = x_{0},\ \ \ y(0) = y_{0} \end{array} \Rightarrow \left\{ \begin{array}{r} cy^{2} - 2bx = n \\ n = cy_{0}^{2} - 2bx_{0} \end{array} \right.\  \right.\ {}
$$



$n > 0{}$时，乙方胜：$\because n > 0\ \ \therefore\left( \frac{y_{0}}{x_{0}} \right)^{2} > \frac{2b}{cx_{0}} = \frac{2r_{x}p_{x}s_{x}}{r_{y}s_{ry}x_{0}}{}$

### 药物在体内的分布与排除

**问题**

药物进入机体形成血药浓度(单位体积血液的药物量)，血药浓度需保持在一定范围内------给药方案设计  
药物在体内吸收、分布和排除过程 ------药物动力学

建立房室模型------药物动力学的基本步骤  
房室------机体的一部分，药物在一个房室内均匀分布(血药浓度为常数)，在房室间按一定规律转移

本节讨论二室模型------中心室(心、肺、肾等)和周边室(四肢、肌肉等)

**问题分析**

建立房室模型,研究体内血药浓度变化过程,确定转移速率、排除速率等参数,为制订给药方案提供依据

机理分析确定模型形式，测试分析估计模型参数

房室模型：一室模型 二室模型 多室模型

非线性（一室）模型：$c_{1}(t) = - \frac{k_{1}c_{1}}{k_{2} + c_{1}}{}$

**模型假设**



![原文插图](/Firefly/uploads/math-modeling-2023/image36.png)

中心室(1)和周边室(2),容积不变

药物从体外进入中心室，在二室间相互转移，最终从中心室排出体外  
药物在房室间转移速率及向体外排除速率与该室血药浓度成正比

**模型建立**

设第$i{}$个室，$t{}$时刻的药量为$x_{i}(t){}$，浓度为$c_{i}(t){}$，第$i{}$个室的容积为$V_{i}{}$，其中$i = 1,2{}$，给药速率为$f_{0}(t){}$，$k{}$表示不同方向的流量

可以得到以下方程：



$$
\left\{ \begin{array}{r} \dot{x_{1}}(t) = - k_{12}x_{1} - k_{13}x_{1} + k_{21}x_{2} + f_{0}(t) \\ \dot{x_{2}}(t) = k_{12}x_{1} - k_{21}x_{2} \end{array} \right.\ {}
$$



由$x_{i}(t) = V_{i}c_{i}(t),\ i = 1,2{}$，则有（线性常系数非齐次方程）



$$
\left\{ \begin{array}{r} \dot{c_{1}}(t) = - \left( k_{12} + k_{13} \right)c_{1} + \frac{V_{2}}{V_{1}}k_{21}c_{2} + \frac{f_{0}(t)}{V_{1}} \\ \dot{c_{2}}(t) = \frac{V_{1}}{V_{2}}k_{12}c_{1} - k_{21}c_{2} \end{array} \right.\ {}
$$



对应的其次方程通解：$\left\{ \begin{array}{r} c_{1}(t) = A_{1}e^{- \alpha t} + B_{1}e^{- \beta t} \\ c_{2}(t) = A_{2}e^{- \alpha t} + B_{2}e^{- \beta t} \end{array} \right.\ {}$其中，$\left\{ \begin{array}{r} \alpha + \beta = k_{12} + k_{21} + k_{13} \\ \alpha\beta = k_{21}k_{13} \end{array} \right.\ {}$

几种常见的给药方式

1. 快速静脉注射：$t = 0{}$ 瞬时注射剂量$D_{0}{}$的药物进入中心室,血药浓度立即为$D_{0}/V_{1}{}$，有：

$$
f_{0}(t) = 0,\ c_{1}(0) = \frac{D_{0}}{V_{1}},c_{2}(0) = 0{}
$$



解得$\left\{ \begin{array}{r} c_{1}(t) = \frac{D_{0}}{V_{1}(\beta - \alpha)}\lbrack(k_{21} - \alpha)e^{- \alpha t} + (\beta - k_{21})e^{- \beta t}\rbrack \\ c_{2}(t) = \frac{D_{0}k_{12}}{V_{2}(\beta - \alpha)}\lbrack e^{- \alpha t} - e^{- \beta t}\rbrack \end{array} \right.\ {}$



![原文插图](/Firefly/uploads/math-modeling-2023/image37.png)

恒速静脉滴注：在$0 \leq t \leq T{}$时间内，药物以速率$k_{0}{}$进入中心室，有：



$$
f_{0}(t) = k_{0},\ c_{1}(0) = 0,c_{2}(0) = 0{}
$$



$t > T{}$时，$c_{1}(0){}$和$c_{2}(0){}$按指数规律趋于0

3. 口服或肌肉注射：相当于药物（剂量$D_{0}{}$）先进入吸收室，吸收后再进入中心室，有：

$$
\left\{ \begin{array}{r} x_{0}(t) = - k_{01}x_{0} \\ x_{0}(t) = D_{0}e^{- k_{01}t} \end{array} \right.\  \Rightarrow x_{0}(t) = D_{0}e^{- k_{01}t}{}
$$



### 香烟过滤嘴的作用

**问题**

过滤嘴的作用与它的材料和长度有什么关系?  
人体吸入的毒物量与哪些因素有关，其中什么因素影响大，什么因素影响小?

**问题分析**  
在基本合理的简化假设下，用精确的数学工具解决一个看来不易下手的实际问题.  
引入两个基本函数：流量$q(x,t){}$和密度$w(x,t){}$，运用物理学的守恒定律建立微分方程，构造动态模型  
对求解结果进行定性和定量分析，得到合乎实际的结论

**模型假设**

1. 烟草部分长$l_{1}{}$，过滤嘴长$l_{2}{}$，总长度$l = l_{1} + l_{2}{}$，毒物量$M{}$在烟草部分均匀分布，密度$w_{0} = M/l_{1}{}$.
2. 点燃处毒物随烟雾进入空气和沿香烟穿行的数量比是$a':a,\ a' + a = 1{}$
3. 未点燃的烟草和过滤嘴对随烟雾穿行的毒物的(单位时间)吸收率分别是$b{}$和$\beta{}$
4. 烟雾沿香烟穿行速度是常数$v{}$，香烟燃烧速度是常数$u{}$， $v > > u{}$

![原文插图](/Firefly/uploads/math-modeling-2023/image38.png)

模型建立

当$t = 0{}$时，$x = 0{}$，点燃香烟

毒物流量：$q(x,\ t){}$

毒物密度：$w(x,t){}$，其中$w(x,0) = w_{0}{}$

$H(t){}$是$t{}$时刻的毒物释放量

$aH(t){}$是$t{}$时刻毒物被吸入的量

吸入一支烟的毒物进入人体总量为：\

$$
Q = \int_{0}^{T}{q(l,t)dt,}\ \ \ \ \ \ T = \frac{l_{1}}{u}{}
$$



1. 求$q(x,0) = q(x){}$

由于流量守恒，$q(x,0) = q(x){}$，则有



$$
q(x) - q(x + \Delta x) = \left\{ \begin{array}{r} bq(x)\Delta\tau,\ \ \ 0 \leq x \leq l_{1} \\ \beta q(x)\Delta\tau,\ \ \ l_{1} \leq x \leq l \end{array},\ \ \ \Delta\tau = \frac{\Delta x}{v} \right.\ {}
$$



&nbsp;

$$
\frac{dq}{dx} = \left\{ \begin{array}{r}  - \frac{b}{v}q(x),\ \ \ 0 \leq x \leq l_{1} \\  - \frac{\beta}{v}q(x),\ \ \ l_{1} \leq x \leq l \end{array} \right.\ ,\ \ \ \left\{ \begin{array}{r} q_{0} = aH_{0} \\ H_{0} = uw_{0} \end{array} \right.\  \Rightarrow q(x) = \left\{ \begin{array}{r} aH_{0}e^{- \frac{bx}{v}},\ \ \ \ \ \ 0 \leq x \leq l_{1} \\ aH_{0}e^{- \frac{bl_{1}}{v}}e^{- \frac{\beta\left( x - l_{1} \right)}{v}},\ \ \ \ \ \ l_{1} \leq x \leq l \end{array} \right.\ {}
$$



2. 求$q(l,t){}$，在$t{}$时刻，香烟点燃至$x = ut{}$

$$
\left\{ \begin{array}{r} H_{0} \Rightarrow H(t) = uw(ut,\ t) \\ x \Rightarrow x - ut,\ \ \ ut \leq x \leq l_{1} \\ l_{1} \Rightarrow l_{1} - ut,\ \ \ l_{1} \leq x \leq l \end{array} \right.\ {}
$$



&nbsp;

$$
q(x,t) = \left\{ \begin{array}{r} aH(t)e^{- \frac{b(x - ut)}{v}},\ \ \ \ \ \ ut \leq x \leq l_{1} \\ aH(t)e^{- \frac{b\left( l_{1} - ut \right)}{v}}e^{- \frac{\beta\left( x - l_{1} \right)}{v}},\ \ \ \ \ \ l_{1} \leq x \leq l \end{array} \right.\ {}
$$



&nbsp;

$$
q(l,t) = auw(ut,t)e^{- \frac{b\left( l_{1} - ut \right)}{v}}e^{- \frac{\beta l_{2}}{v}}{}
$$



3. 求$w(ut,t){}$：考察$\Delta t{}$内毒物密度的增量

单位长度烟雾毒物被吸收的部分：$w(x,t + \Delta t) - w(x,t) = b\frac{q(x,t)}{v}\Delta t{}$



$$
\left\{ \begin{array}{r} q(x,t) = aH(t)e^{- \frac{b(x - ut)}{v}} \\ H(t) = uw(ut,t) \end{array} \Rightarrow w(ut,t) = \frac{w_{0}}{a'}\left( 1 - ae^{- \frac{a'but}{v}} \right),\ \ \ a' = 1 - a \right.\ {}
$$



4. 计算$Q{}$：吸入一支烟，毒物进入人体的总量

$$
\left\{ \begin{array}{r} w(ut,t) = \frac{w_{0}}{a'}\left( 1 - ae^{\frac{a'but}{v}} \right) \\ q(l,t) = auw(ut,t)e^{- \frac{b\left( l_{1} - ut \right)}{v}}e^{- \frac{\beta l_{2}}{v}} = \frac{auw_{0}}{a'}e^{- \frac{bl_{1}}{v}}e^{- \frac{\beta l_{2}}{v}}\left( e^{\frac{but}{v}} - ae^{- \frac{abut}{v}} \right) \end{array} \right.\ {}
$$



&nbsp;

$$
Q = \int_{0}^{\frac{l_{1}}{u}}{q(l,t)dt = \frac{aw_{0}v}{a'b}e^{- \frac{\beta l_{2}}{v}}\left( 1 - e^{- \frac{a'bl_{1}}{v}} \right) = aMe^{- \frac{\beta l_{2}}{v}}\varphi(r),\ \ \ r = \frac{a'bl_{1}}{v},\ \ \ \varphi(r) = \frac{1 - e^{- r}}{r}}{}
$$



**结果分析**

1. $Q{}$与$a,M{}$成正比， $aM是{}$毒物集中在$x = l{}$ 处的吸入量
2. 过滤嘴因素$e^{- \frac{\beta l_{2}}{v}}{}$，$\beta,\ l_{2}{}$有负指数作用
3. 烟草的吸收作用$\varphi(r){}$：烟草为什么有作用?

$\left\{ \begin{array}{r} r = \frac{a'bl_{1}}{v} \ll 1 \\ \ \varphi(r) \doteq 1 - \frac{r}{2} \end{array} \Rightarrow Q \doteq aMe^{- \frac{\beta l_{2}}{v}}\left( 1 - \frac{a'bl_{1}}{2v} \right) \right.\ {}$，$b,\ l_{1}{}$具有线性作用

4. 与另一支不带过滤嘴的香烟比较，$w_{0},\ b,a,\ v,\ l{}$ 均相同，吸至 $x = l_{1}{}$扔掉

$$
\left\{ \begin{array}{r} 带滤嘴：Q_{1} = \frac{aw_{0}v}{a'b}e^{- \frac{\beta l_{2}}{v}}\left( 1 - \frac{a'bl_{1}}{2v} \right) \\ 不带滤嘴：Q_{2} = \frac{aw_{0}v}{a'b}e^{- \frac{bl_{2}}{v}}\left( 1 - \frac{a'bl_{1}}{2v} \right) \end{array} \right.\  {}
$$

则$\frac{Q_{1}}{Q_{2}} = e^{- \frac{(\beta - b)l_{2}}{v}} \Rightarrow \beta > b \Rightarrow Q_{1} < Q_{2}{}$，提高$\beta - b{}$ 与加长$l_{2}{}$，效果相同

### 人口预测和控制

**问题**



![原文插图](/Firefly/uploads/math-modeling-2023/image39.png)



目的：研究人口变化规律，建立人口数学模型，做出较准确的预报，控制人口过快增长

**指数增长模型**

基本假设：人口（相对）增长率$r{}$是常数

模型建立：k年后的人口：$x_{k} = x_{0}(1 + r)^{k}{}$



$$
x(t + \Delta t) - x(t) = rx(t)\Delta t \Rightarrow \frac{dx}{dt} = rx,\ \ \ x(0) = x_{0} \Rightarrow x(t) = x_{0}e^{rt}{}
$$



缺陷：随着时间增加，人口将按指数规律无限增长，只能用于短期的人口增长预测

**阻滞增长模型**

人口增长到一定数量后，增长率出现下降：资源、环境登因素对人口增长的阻滞作用，且阻滞作用随人口数量的增大而增大，$r{}$是$x{}$的减函数

模型建立：$r(x) = r - sx,\ \ \ r,s > 0{}$，$r{}$为固有增长率，人口最大容量为$x_{m}{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image40.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image41.png)



$r\left( x_{m} \right) = 0 \Rightarrow s = \frac{r}{x_{m}}{}$，此时$r(x) = r(1 - \frac{x}{x_{m}}){}$



$$
\frac{dx}{dt} = rx \Rightarrow \frac{dx}{dt} = r(x)x - rx\left( 1 - \frac{x}{x_{m}} \right) \Rightarrow x(t) = \frac{x_{m}}{1 + \left( \frac{x_{m}}{x_{0}} - 1 \right)e^{- rt}}{}
$$



参数估计

指数增长模型：$x(t) = x_{0}e^{rt} \Rightarrow y = \ln\left( x(t) \right) = rt + \ln x_{0}{}$

阻滞增长模型：$\frac{dx}{dt} = rx\left( 1 - \frac{x}{x_{m}} \right) \Rightarrow y = \frac{\frac{dx}{dt}}{x} \approx \frac{\Delta x}{x\Delta t},\ \ \ s = \frac{r}{x_{m}} \Rightarrow \ln\left( x(t) \right) = r - sx{}$

适用领域

1. 种群数量模型 (鱼塘中的鱼群, 森林中的树木)
2. 经济领域中的增长规律(耐用消费品的售量)

**考虑年龄结构和生育模式的人口模型**

模型建立

年龄分布对人口预测有重要性，只考虑自然的出生和死亡而不考虑迁移

人口分布函数$F(r,t){}$（年龄$< r{}$的人口），最高年龄$r_{m}{}$，人口总数$N(t){}$，人口密度函数$p(r,t){}$



$$
F(0,t) = 0,\ \ \ F\left( r_{m},t \right) = N(t),\ \ \ p(r,t) = \frac{\partial F}{\partial r} \Rightarrow F(r,t)\int_{0}^{r}{p(s,t)ds}{}
$$



考虑死亡率$\mu(r,t){}$，则$p(r,t)dr - p\left( r + dr_{1},t + dt \right)dr = \mu(r,t)p(r,t)drdt{}$



$$
\left\lbrack p\left( r + dr_{1},t + dt \right) - p(r,t + dt) \right\rbrack + \left\lbrack p(r,t + dt) - p(r,t) \right\rbrack = - \mu(r,t)p(r,t)dt,\ \ \ \ \ \ dt = dr_{1}{}
$$



&nbsp;

$$
\frac{\partial p}{\partial r} + \frac{\partial p}{\partial t} = - \mu(r,t)p(r,t){}
$$



## 代数方程与差分模型

### 投入产出模型

**问题**

国民经济各个部门之间存在着相互依存和制约关系，每个部门将其他部门的产品或半成品经过加工（投入）变为自己的产品（产出）

根据各部门间投入和产出的平衡关系，确定各部门的产出水平以满足社会的需求  
20世纪30年代由美国经济学家列昂节夫提出和研究  
从静态扩展到动态，与数量经济分析方法日益融合，应用领域不断扩大

问题：建立静态投入产出数学模型，讨论具体应用



![原文插图](/Firefly/uploads/math-modeling-2023/image42.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image43.png)



**模型建立**

第$i{}$部门的总产出：$x_{i}{}$

对第$i{}$部门的外部需求：$d_{i}{}$

第$i{}$部门对第$j{}$部门的投入、第$j{}$部门总产出对第$i{}$部门的直接消耗$x_{ij}{}$

直接消耗系数，第$j{}$部门单位产出对第$i{}$部门的直接消耗$a_{ij} = x_{ij}/x_{j}{}$

第$j{}$部门的总投入：$x_{j} = x_{i}{}$



$$
x_{i} = \sum_{j = 1}^{n}{a_{ij}x_{j} + d_{i}} \Rightarrow x = Ax + d \Rightarrow x = (I - A)^{- 1}d{}
$$



**模型求解**

根据$d{}$和$\Delta d{}$的取值代回即可算出新的$x_{i}{}$和$\Delta x_{i}{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image44.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image45.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image46.png)

### CT技术的图像重建

**问题**  
CT技术在工业无损探测、资源勘探、生态监测等领域也得到了广泛的应用  
**how it work**

在不同深度的断面上,从各个角度用探测器接收旋转的X光管发出、穿过人体而使强度衰减的射线;经过测量和计算将人体器官和组织的影像重新构建  
**模型建立**



![原文插图](/Firefly/uploads/math-modeling-2023/image47.png)

射线强度为$I{}$，物质在涉嫌方向的厚度为$l{}$，入射强度为$I_{0}{}$，物质对射线的衰减系数为$\mu{}$

涉嫌强度的衰减率与射线强度成正比，即$\frac{dI}{dl} = - \mu I \Rightarrow I = I_{0}e^{- \mu l}{}$

射线沿直线L穿行, 穿过由不同衰减系数的物质组成的非均匀物体(人体器官)



$$
I = I_{0}\exp{( - \int_{L}^{}{\mu(x,y})dl) \Rightarrow \int_{L}^{}{\mu(x,y})dl =}\ln\frac{I_{0}}{I}{}
$$



右端数值可以由CT的测量数据直接得到，通过多条直线L的线积分，可以得到被积函数$\mu(x,y){}$------反映人体器官大小、形状、密度的图像

数学原理

拉东变换$P_{f}(L) = \int_{L}^{}{f(x,y})dl{}$，拉东逆变换$f(Q) = - \frac{1}{\pi}\int_{0}^{\infty}\frac{dF_{Q}(q)}{q}{}$，其中$F_{Q}(q){}$是与$Q{}$相距$q{}$的直线L的线积分$P_{f}(L){}$对所有$q{}$的平均值，实际上只能在有限条直线上得到投影(线积分)

如何计算？设$\ln{\left( \frac{I_{0}}{I} \right)_{i} =}b_{i},\ \ \ \mu_{j} = x_{j}{}$，像素的边长和射线的宽度均为$\sigma{}$，则

中心线法：射线$L_{i}{}$的中心线在像素$j{}$内的长度$l_{ij}{}$与$\sigma{}$之比为$a_{ij}{}$



$$
\sum_{j \in J\left( L_{i} \right)}^{}{\mu_{j}\Delta l_{j} = \ln\left( \frac{I_{0}}{I} \right)_{i} \Rightarrow \sum_{j = 1}^{m}{a_{ij}x_{j} = b_{i},\ \ \ i = 1,2,\ldots,n \Rightarrow Ax = b}}{}
$$



&nbsp;

![原文插图](/Firefly/uploads/math-modeling-2023/image48.png)

面积法：射线$L_{i}{}$在像素$j{}$内的面积$s_{ij}{}$与像素面积之比为$a_{ij}{}$

中心法：如果射线$L_{i}{}$经过像素$j{}$的中心点，则$a_{ij} = 1{}$

中心法的简化形式：如果射线$L_{i}{}$经过像素$j{}$内任意点，则$a_{ij} = 1{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image49.png)



根据$A{}$和$b{}$，由$Ax = b{}$确定像素的衰减系数向量$x{}$

### 市场经济中的蛛网模型

**问题**



![原文插图](/Firefly/uploads/math-modeling-2023/image50.png)

商品数量和价格在振荡：

问题：

1. 描述商品数量与价格的变化规律
2. 商品数量与价格的振荡在什么条件下趋向稳定?
3. 当不稳定时政府能采取什么干预手段使之稳定?

**模型建立**

时段为$k{}$时的商品数量为$x_{k}{}$，商品价格为$y_{k}{}$

消费者的需求关系：需求函数：$y_{k} = f(x_{k}){}$------减函数

生产者的供应关系：供应函数：$x_{k + 1} = h(y_{k}){}$------增函数$\Longleftrightarrow y_{k} = g(x_{k + 1}){}$

平衡点：函数$f{}$和$g{}$的交点$P_{0}\left( x_{0},y_{0} \right){}$，一旦$x_{k} = x_{0}{}$，则$y_{k} = y_{0}{}$，且保持稳定

蛛网模型：设$x_{1}{}$偏离于$x_{0}{}$，则经过$x_{1} \rightarrow y_{1} \rightarrow x_{2} \rightarrow y_{2} \rightarrow \ldots{}$

若$x_{k} \rightarrow x_{0},\ \ \ y_{k} \rightarrow y_{0}{}$，则称$P_{0}{}$是稳定平衡点，否则，称$P_{0}{}$是不稳定平衡点



![原文插图](/Firefly/uploads/math-modeling-2023/image51.png)



方程模型：若点在$P_{0}{}$附近，可以用直线来近似曲线：\

$$
\left\{ \begin{array}{r} y_{k} = f(x_{k}) \\ x_{k + 1} = h(y_{k}) \end{array} \Rightarrow \left\{ \begin{array}{r} y_{k} - y_{0} = - \alpha\left( x_{k} - x_{0} \right),\ \ \ \alpha > 0 \\ x_{k + 1} - x_{k} = \beta\left( y_{k} - y_{0} \right),\ \ \ \beta > 0 \end{array} \right.\  \right.\ {}
$$



&nbsp;

$$
x_{k + 1} - x_{0} = - \alpha\beta\left( x_{k} - x_{0} \right) = ( - \alpha\beta)^{k}\left( x_{1} - x_{0} \right),\ \ \ k_{f} = \alpha,k_{g} = \frac{1}{\beta}{}
$$



若$\alpha\beta < 1{}$，则$x_{k} \rightarrow x_{0}{}$，说明$P_{0}{}$稳定，$k_{f} < k_{g}{}$

若$\alpha\beta > 1{}$，则$x_{k} \rightarrow \infty{}$，说明$P_{0}{}$不稳定，$k_{f} > k_{g}{}$

消费者对需求的敏感程度为$\alpha{}$，$\alpha{}$小，利于经济稳定

生产者对需求的敏感程度为$\beta{}$，$\beta{}$小，利于经济稳定

则经济稳定时，$\alpha\beta < 1{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image52.png)



### 减肥计划------节食与运动

**背景**

体重指数$BMI = w(kg)/l^{2}\left( m^{2} \right)\ {}$. $18.5 < BMI < 25{}$为正常； $BMI > 25{}$为超重; $BMI > 30{}$为肥胖

多数减肥食品达不到减肥目标，或不能维持

通过控制饮食和适当的运动，在不伤害身体的前提下，达到减轻体重并维持下去的目标

**问题分析**

体重变化由体内能量守恒破坏引起  
饮食（吸收热量）引起体重增加

代谢和运动（消耗热量）引起体重减少

**模型假设**

1. 体重增加正比于吸收的热量------每8000kcal增加体重1kg
2. 代谢引起的体重减少正比于体重------每周每千克体重消耗200  320kcal (因人而异), 相当于70kg的人每天消耗2000  3200kcal
3. 运动引起的体重减少正比于体重，且与运动形式有关
4. 为了安全与健康，每周体重减少不宜超过1.5kg，每周吸收热量不要小于10000kcal

**问题**

某甲体重100kg，目前每周吸收20000kcal热量，体重维持不变. 现欲减肥至75kg

1. 在不运动的情况下安排一个两阶段计划

> 第一阶段：每周减肥1kg，每周吸收热量逐渐减少,直至达到下限（10000kcal）；  
> 第二阶段：每周吸收热量保持下限，减肥达到目标

2. 若要加快进程，第二阶段增加运动，试安排计划
3. 给出达到目标后维持体重的方案

**模型建立**

第$k{}$周末的体重为$w(k){}$，第$k{}$周吸收的热量为$c(k){}$，有$w(k + 1) = w(k) + \alpha c(k + 1) - \beta w(k){}$

其中，$\alpha = 1/8000(\frac{kg}{cal}){}$，代谢消耗系数为$\beta{}$

1. 不运动情况下的两阶段减肥计划

a)  确定甲的代谢消耗系数：每周洗手20000kcal，w=100kg不变，即每周每千克体重消耗 20000/100=200kcal



$$
w = w + \alpha c - \beta w \Rightarrow \beta = \frac{\alpha c}{w} = \frac{20000}{80 \times 100} = 0.025{}
$$



b)  第一阶段：$w(k){}$每周减1kg，$c(k){}$减至下限10000kcal



$$
w(k) = w(k + 1) = 1,\ \ \ w(k + 1) = ac(k + 1) - \beta w(k){}
$$



&nbsp;

$$
\Rightarrow c(k + 1) = \frac{1}{\alpha}\left\lbrack \beta w(k) - 1 \right\rbrack,\ \ \ w(k) = w(0) - k{}
$$



&nbsp;

$$
c(k + 1) = \frac{\beta}{\alpha}w(0) - \frac{1}{\alpha}(1 + \beta k) = 12000 - 200k \geq C_{m} = 10000 \Rightarrow k \leq 10{}
$$



故第一阶段10周，每周减1kg，第十周末体重为90kg，吸收热量为$c(k + 1) = 12000 - 200k,\ \ \ k = 1,2,\ldots,9{}$

c)  第二阶段，每周的$c(k){}$保持$C_{m}{}$，$w(k){}$减至75kg

基本模型：



$$
w(k + 1) = w(k) + \alpha c(k + 1) - \beta w(k) \Rightarrow w(k + 1) = (1 - \beta)w(k) + \alpha C_{m}{}
$$



&nbsp;

$$
w(k + n) = (1 - \beta)^{n}w(k) + \alpha C_{m}\left\lbrack \sum_{i = 0}^{n - 1}(1 - \beta)^{i} \right\rbrack = (1 - \beta)^{n}\left\lbrack w(k) - \frac{\alpha C_{m}}{\beta} \right\rbrack + \frac{\alpha C_{m}}{\beta}{}
$$



以$\alpha = \frac{1}{8000},\beta = 0.025,C_{m} = 10000{}$代入得：



$$
w(k + n) = {0.975}^{n}\left\lbrack w(k) - 50 \right\rbrack + 50{}
$$



再带入$w(k) = 90,w(k + n) = 75{}$，求得$n = 19{}$

第二阶段19周, 每周吸收热量保持10000kcal, 体重按$w(k + n) = {0.975}^{n}\left\lbrack w(k) - 50 \right\rbrack + 50,\ \ \ n = 1,2,\ldots,19{}$减少至75kg



2. 第二阶段增加运动的减肥计划

根据资料每小时每千克体重消耗的热量 $\gamma(kcal){}$:



![原文插图](/Firefly/uploads/math-modeling-2023/image53.png)



模型更新：$w(k + 1) = w(k) + \alpha c(k + 1) - \beta'w(k),\ \ \ \beta' = \beta + \alpha\gamma t{}$，其中$t{}$表示每周的运动时间（$h{}$）。$\alpha\gamma t = 0.003{}$, 即$\gamma t = 24{}$，此时$w(k + n)\left( 1 - \beta' \right)^{n}\left\lbrack w(k) - \frac{\alpha C_{m}}{\beta'} \right\rbrack + \frac{\alpha C_{m}}{\beta'}{}$，代入后求得此时$n = 14{}$，故运动$\gamma t = 24{}$ (每周跳舞8h或自行车10h), 14周即可完成

3. 达到目标体重75kg后维持不变的方案

每周吸收热量$c(k){}$不变保持常数$C{}$，使得体重不变



$$
w(k + 1) = w(k) + \alpha c(k + 1) - (\beta + \alpha\gamma t)w(k) \Rightarrow w = w + \alpha C - (\beta + \alpha\gamma t)w{}
$$



&nbsp;

$$
\Rightarrow C = \frac{(\beta + \alpha\gamma t)w}{\alpha}{}
$$



如果不运动，$C = 15000(kcal){}$，如果运动，$C = 16800(kcal){}$

## 离散模型

### 层次分析模型

层次分析法（AHP）是一种定性和定量相结合，系统化，层次化的分析方法。其基本思想与人对一个复杂决策问题的思维、判断过程大体上是一致的。

基本原理

根据问题的性质和要达到的总目标，将问题分解为不同的组成因素，并按照因素间的相互关联影响以及隶属关系将因素，按不同层次聚集组合，形成一个多层次的分析结构模型，从而最终使问题归结为最低层(供决策的方案、措施等)相对于最高层(总目标)的相对重要权值的确定或相对优劣次序的排定。

**步骤和方法**

运用层次分析法构造系统模型时，大体可以分为以下四个步骤：

1. 建立层次结构模型

将决策的目标、考虑的因素（决策准则）和决策对象按它们之间的相互关系分为最高层、中间层和最低层，绘出层次结构图。

最高层：决策的目的、要解决的问题。

最低层：决策时的备选方案。

中间层：考虑的因素、决策的准则。

对于相邻的两层，称高层为目标层，低层为因素层。



![原文插图](/Firefly/uploads/math-modeling-2023/image54.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image55.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image56.png)



2. 构造判断(成对比较)矩阵

在确定各层次各因素之间的权重时，如果只是定性的结果，则常常不容易被别人接受，因而Saaty等人提出：一致矩阵法，即：



1. 不把所有因素放在一起比较，而是两两相互比较
2. 采用相对尺度，以尽可能减少性质不同的诸因素相互比较的困难，以提高准确度。
3. 心理学家认为成对比较的因素不宜超过9个，即每层不要超过9个因素。

> 判断矩阵是表示本层所有因素针对上一层某一个因素的相对重要性的比较。判断矩阵的元素aij用Saaty的1---9标度方法给出。
>
>

![原文插图](/Firefly/uploads/math-modeling-2023/image57.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image58.png)



&nbsp;

![原文插图](/Firefly/uploads/math-modeling-2023/image59.png)

层次单排序及其一致性检验

设置一个排序向量$W = \left( w_{1},w_{2},\ldots,w_{n} \right){}$，则$a_{ij} = \frac{w_{i}}{w_{j}}{}$进行成对的比较

对于任意属性$i,j,k{}$，必须有$a_{ij} \cdot a_{jk} = a_{ik}{}$，满足一致性检验的正互反阵称为一致阵

一致阵性质：



a.  $A{}$的秩为1，$A{}$的唯一非零特征根为$n{}$ $Aw = nw{}$

b.  非零特征根$n{}$所对应的特征向量归一化后可作为权向量

> 但是一致阵是很严格的，允许有在一定范围内不一致，用对应于最大特征根$\lambda{}$的特征向量作为权向量$w{}$，即$Aw = \lambda w{}$
>
> 对应于判断矩阵最大特征根$\lambda_{\max}{}$的特征向量，经归一化(使向量中各元素之和等于1)后记为$W{}$。  
> $W{}$的元素为同一层次因素对于上一层次因素某因素相对重要性的排序权值，这一过程称为层次单排序。  
> 能否确认层次单排序，需要进行一致性检验，所谓一致性检验是指对$A{}$确定不一致的允许范围。
>
> 定理：n 阶一致阵的唯一非零特征根为$\lambda = n{}$
>
> 定理：n 阶正互反阵A的最大特征根$\lambda \geq n{}$, 当且仅当$\lambda = n{}$时A为一致阵
>
> 则一致性指标为：$CI = \frac{\lambda - n}{n - 1}{}$
>
> $CI = 0{}$，有完全的一致性  
> $CI{}$接近于0，有满意的一致性
>
> $CI{}$越大，不一致性越严重
>
> 为了衡量$CI{}$的大小，引出随机一致性指标 $RI{}$：随机构造500个成对比较矩阵$A_{1},A_{2},\ldots,A_{500}{}$，各自的一致性指标为$CI_{1},CI_{2},\ldots,CI_{500}{}$
>
>

$$
RI = \frac{\sum_{i = 1}^{50}{CI_{i}}}{500} = \frac{\frac{\lambda_{1} + \lambda_{2} + \ldots + \lambda_{500}}{500} - n}{n - 1}{}
$$

> 一致性比率$CR = \frac{CI}{RI}{}$，$RI{}$取和$CI{}$相同的$n{}$，如果$CR = \frac{CI}{RI} < 0.1{}$，则认为有较满意的一致性，通过一致性检验；否则要重新构造成对比较矩阵A，对 $a_{ij}{}$ 加以调整



![原文插图](/Firefly/uploads/math-modeling-2023/image60.png)

层次总排序及其一致性检验

计算某一层次所有因素对于最高层(总目标)相对重要性的权值，称为层次总排序

这一过程是从最高层次到最低层次依次进行的

A层m个因素为：$A_{1},A_{2},\ldots,A_{m}{}$，对总目标$Z{}$排序为$a_{1},a_{2},\ldots,a_{m}{}$，B层n个因素对上层因素$A_{j}{}$的层次单排序为$b_{1j},b_{2j},\ldots,b_{nj}(j = 1,2,\ldots,m){}$



![原文插图](/Firefly/uploads/math-modeling-2023/image61.png)

B层的层次总排序为$\left\{ \begin{array}{r} B_{1}:a_{1}b_{11} + a_{2}b_{12} + \ldots + a_{m}b_{1m} \\ B_{2}:a_{1}b_{21} + a_{2}b_{22} + \ldots + a_{m}b_{2m} \\ \ldots \\ B_{n}:a_{1}b_{n1} + a_{2}b_{n2} + \ldots + a_{m}b_{nm} \end{array} \right.\ {}$

B层第i个因素对总目标的权值为：$\sum_{j = 1}^{m}{a_{j}b_{ij}}{}$

层次总排序的一致性检验

设$B{}$层$B_{1},B_{2},\ldots,B_{n}{}$对上层($A{}$层)中因素$A_{j}(j = 1,2,\ldots,m){}$的层次单排序一致性指标为$CI_{j}{}$，随机一致性指为$RI_{j}{}$，则层次总排序的一致性比率为：



$$
CR = \frac{a_{1}CI_{1} + a_{2}CI_{2} + \ldots + a_{m}CI_{m}}{a_{1}RI_{1} + a_{2}RI_{2} + \ldots + a_{m}RI_{m}} {}
$$

当$CR < 0.1{}$时，认为层次总排序通过一致性检验。层次总排序具有满意的一致性，否则需要重新调整那些一致性比率高的判断矩阵的元素取值。  
到此，根据最下层（决策层）的层次总排序做出最后决策。

**例子1**



![原文插图](/Firefly/uploads/math-modeling-2023/image56.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image62.png)



&nbsp;

![原文插图](/Firefly/uploads/math-modeling-2023/image63.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image64.png)



**例子2**

某单位拟从3名干部中选拔一名领导，选拔的标准有政策水平、工作作风、业务知识、口才、写作能力和健康状况。下面用AHP方法对3人综合评估、量化排序。\

![原文插图](/Firefly/uploads/math-modeling-2023/image65.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image66.png)



&nbsp;

![原文插图](/Firefly/uploads/math-modeling-2023/image67.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image68.png)



![原文插图](/Firefly/uploads/math-modeling-2023/image69.png)



**总结**  
层次分析法的基本步骤归纳如下：

1. 建立层次结构模型

该结构图包括目标层，准则层，方案层

2. 构造成对比较矩阵\

从第二层开始用成对比较矩阵和19尺度。

3. 计算单排序权向量并做一致性检验\

对每个成对比较矩阵计算最大特征值及其对应的特征向量，利用一致性指标、随机一致性指标和一致性比率做一致性检验。若检验通过，特征向量（归一化后）即为权向量；若不通过，需要重新构造成对比较矩阵。

4. 计算总排序权向量并做一致性检验\

计算最下层对最上层总排序的权向量。利用总排序一致性比率：



$$
CR = \frac{a_{1}CI_{1} + a_{2}CI_{2} + \ldots + a_{m}CI_{m}}{a_{1}RI_{1} + a_{2}RI_{2} + \ldots + a_{m}RI_{m}},\ \ \ CR < 0.1{}
$$



进行检验。若通过，则可按照总排序权向量表示的结果进行决策，否则需要重新考虑模型或重新构造那些一致性比率$CR{}$的成对比较矩阵。

## 概率模型

对比确定性模型和随机性模型

确定性模型：随机因素可以忽略，或以平均值的作用简单出现

随机因素影响必须考虑

概率模型：统计回归模型、马氏链模型

### 传送系统的效率

![原文插图](/Firefly/uploads/math-modeling-2023/image70.png)

**问题**

工人将生产出的产品挂在经过他上方的空钩上运走，若工作台数固定，则挂钩数量越多，传送带运走的产品越多。在生产进入稳态后，给出衡量传送带效率的指标，研究提高传送带效率的途径。

问题分析

进入稳态后为保证生产系统的周期性运转，应假定工人们的生产周期相同，即每人做完一件产品后，要么恰有空钩经过他的工作台，使他可将产品挂上运走，要么没有空钩经过，迫使他放下这件产品并立即投入下件产品的生产。

Tip：可以用一个周期内传送带运走的产品数占产品总数的比例，作为衡量传送带效率的数量指标

工人们生产周期虽然相同，但稳态下每人生产完一件产品的时刻不会一致，可以认为是随机的，并且在一个周期内任一时刻的可能性相同  
**模型假设**

1. n个工作台均匀排列，n个工人生产相互独立，生产周期是常数
2. 生产进入稳态，每人生产完一件产品的时刻在一个周期内是等可能的
3. 一周期内m个均匀排列的挂钩通过每一工作台的上方，到达第一个工作台的挂钩都是空的
4. 每人在生产完一件产品时都能且只能触到一只挂钩，若这只挂钩是空的，则可将产品挂上运走；若该钩非空，则这件产品被放下，退出运送系统

**模型建立**

定义传送带效率为一周期内运走的产品数（记作$s{}$，待定）与生产总数$n{}$（已知）之比，记作$D = s/n{}$ Tip：为确定$s{}$，从工人考虑还是从挂钩考虑，哪个方便？从挂钩角度

若求出一周期内每只挂钩非空的概率$p{}$，则 $s = mp{}$

**如何求概率？**

设每只挂钩为空的概率为$q{}$，则 $p = 1 - q{}$

设每只挂钩不被一工人触到的概率为$r{}$，则 $q = r^{n}{}$

设每只挂钩被一工人触到的概率为$u{}$，则 $r = 1 - u{}$

一周期内有$m{}$个挂钩通过每一工作台的上方：



$$
u = \frac{1}{m} \Rightarrow p = 1 - \left( 1 - \frac{1}{m} \right)^{n} \Rightarrow D = \frac{m}{n} \cdot 1 - \left( 1 - \frac{1}{m} \right)^{n}{}
$$



若一周期内运行的的挂钩数$m \gg n{}$，则：



$$
D \approx \frac{m}{n}\left\lbrack 1 - \left( 1 - \frac{n}{m} + \frac{n(n - 1)}{2m^{2}} \right) \right\rbrack = 1 - \frac{n - 1}{2m}{}
$$



定义$E = 1 - D{}$，表示一周期内未运走商品和生产总数之比，当$n \gg 1{}$时，$E \approx \frac{n}{2m} \propto n,\ \ \ E \propto \frac{1}{m}{}$

若$n = 10,m = 40{}$，则$D \approx 87.5\%{}$，提高效率的途径：增加挂钩数$m{}$

### 报童的诀窍

**问题**

报童售报： $a{}$ (零售价)  $b{}$(购进价)  $c{}$(退回价)，则售出一份赚 $a - b{}$；退回一份赔 $b - c{}$。  
每天购进多少份可使收入最大？

**问题分析**

购进太多→卖不完退回→赔钱，购进太少→不够销售→赚钱少：存在一个合适的购进量

应根据需求确定购进量

每天需求量是随机的→每天收入是随机的

优化问题的目标函数应是长期的日平均收入，即每天收入的期望

**模型建立**

调查需求量的随机规律------每天需求量为 $r{}$ 的概率 $f(r),\ r = 0,1,2...{}$

设每天购进 $n{}$ 份，日平均收入为 $G(n){}$

因为售出一份，赚$a - b{}$；退回一份赔$b - c{}$，所以：

当$r \leq n{}$时，当日收入为：$(a - b)r - (b - c)(n - r){}$

当$r > n{}$时，当日收入为：$(a - b)n{}$

则$G(n) = \sum_{r = 0}^{n}{\left\lbrack (a - b)r - (b - c)(n - r) \right\rbrack f(r) + \sum_{r = n + 1}^{\infty}{(a - b)nf(r)}}{}$

将$r{}$视为连续变量，即$f(r) \Rightarrow p(r)dr{}$（用概率密度函数$p(r){}$描绘）



$$
G(n) = \int_{0}^{n}{\left\lbrack (a - b)r - (b - c)(n - r) \right\rbrack p(r)dr} + \int_{n}^{\infty}{(a - b)p(r)dr}{}
$$



&nbsp;

$$
\frac{dG}{dn} = (a - b)np(n) - \int_{0}^{n}{(b - c)p(r)dr} - (a - b)np(n) + \int_{n}^{\infty}{(a - b)p(r)dr}{}
$$



&nbsp;

$$
\frac{dG}{dn} = - \int_{0}^{n}{(b - c)p(r)dr} + \int_{n}^{\infty}{(a - b)p(r)dr}{}
$$



令$\frac{dG}{dn} = 0{}$，则有$\frac{\int_{0}^{n}{p(r)dr}}{\int_{n}^{\infty}{p(r)dr}} = \frac{P_{1}}{P_{2}} = \frac{a - b}{b - c}{}$，其中$P_{1}{}$是供大于求的概率，$P_{2}{}$是供小于求的概率

则最优购进策略为购进$n{}$份，使得$\frac{P_{1}}{P_{2}} = \frac{a - b}{b - c}{}$



![原文插图](/Firefly/uploads/math-modeling-2023/image71.png)

