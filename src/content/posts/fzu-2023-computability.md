---
title: 福州大学2023级可计算理论课程复习提纲
published: 2026-11-08
description: 可计算理论课程复习笔记，涵盖正则语言、上下文无关文法、图灵机、可判定性、归约与复杂性理论。
category: 学习笔记
tags: [可计算理论, 福州大学, 课程复习]
image: /uploads/computability-notes/cover.png
draft: false
---

## 第一部分：正则语言
### 1.1 基础概念：字母表、串、语言
<strong>定义：</strong>字母表 $\Sigma$ 是一个非空有限集合；串是 $\Sigma$ 上有限长度的符号序列；语言是串的集合，即 $A\subseteq \Sigma^*$。常用符号：

$\Sigma^* = \{\mathbf{x} \mid \mathbf{x} \text{ 是} \Sigma \text{上有穷长度的串}\},\qquad
\Sigma^+ = \Sigma^* - \{\varepsilon\}.$

$\Sigma^+ = \{\mathbf{x} \mid \mathbf{x} \text{ 是} \Sigma \text{上正有穷长度的串}\}$

$\Sigma^\infty = \{\mathbf{x} \mid \mathbf{x} \text{ 是} \Sigma \text{上无穷长度的串}\}$



<strong>易错点：</strong>

- 空串 $\varepsilon$ 的长度为 0；空格是一个字符，长度为 1。

- 空语言 $\varnothing$ 与只含空串的语言 $\{\varepsilon\}$ 不同。

- $\varnothing A=\varnothing$，而 $\{\varepsilon\}A=A$。

标准序（感觉同字典序）：先短后长，等长逐位比较

![image\.png](/Firefly/uploads/computability-notes/image-110.png)



### 1.2 DFA：有穷自动机的定义
<strong>形式定义：</strong> 一个确定型有穷自动机 DFA 是五元组 $M=(Q,\Sigma,\delta,q_0,F),$

其中：

- $Q$：有限状态集；

- $\Sigma$：输入字母表；

- $\delta:Q\times \Sigma\to Q$：转移函数；

- $q_0\in Q$：初始状态；

- $F\subseteq Q$：接受状态集合。

对输入串 $w=w_1w_2\cdots w_n$，DFA 的计算是状态序列：$r_0,r_1,\ldots,r_n,$

满足 $r_0=q_0$ 且 $r_{i+1}=\delta(r_i,w_{i+1})$。若 $r_n\in F$，则接受 $w$。

<strong>直观理解：</strong>DFA 的状态就是“机器当前记住的信息”。DFA 只能记有限信息，因此适合处理“只需要有限记忆”的语言，例如奇偶性、模$k$余数、是否出现过某个子串、最后若干位信息等。

![image\.png](/Firefly/uploads/computability-notes/image-116.png)

![image\.png](/Firefly/uploads/computability-notes/image-139.png)

<strong>自动机运行实例：</strong>

![image\.png](/Firefly/uploads/computability-notes/image-57.png)

![image\.png](/Firefly/uploads/computability-notes/image-4.png)

![image\.png](/Firefly/uploads/computability-notes/image-37.png)

![image\.png](/Firefly/uploads/computability-notes/image-7.png)



#### DFA 设计方法
1. <strong>问自己要记什么。</strong> 例如判断“1 的个数为奇数”，只需记“当前 1 的个数是奇还是偶”。

2. <strong>把每种记忆情况变成一个状态。</strong> 奇数态、偶数态。

3. <strong>根据每个输入符号写转移。</strong> 读到 1 时奇偶翻转，读到 0 时不变。

4. <strong>确定初始态和接受态。</strong> 初始是偶数态；接受是奇数态。

5. <strong>补全所有转移。</strong> DFA 对每个状态、每个输入符号都必须有唯一转移。



<strong>常见设计模板</strong>

|语言形式|状态含义|例子|
|---|---|---|
|个数奇偶|记奇偶|$\{w\mid w\text{ 中有奇数个 }1\}$|
|模 $k$|记当前余数|数字和模 3 为 0|
|是否出现子串|记“已经匹配到模式的前几位”|含子串 001|
|首尾相关但长度有限|记首符号和当前末符号|非空且首尾相同|
|最后若干位|记最近 $m$ 个字符|以 01 结尾|



### 1.3 正则语言
<strong>定义：</strong>如果某语言 $L$ 能被某台 DFA $M$ 识别，即$L=L(M),$则称 $L$ 是正则语言。

<strong>要点：</strong> 正则语言不是“看起来有规律”的语言，而是“能被有限状态自动机识别”的语言。判断一个语言是否正则，关键看是否只需要有限记忆。



### 1.4 正则运算与封闭性
<strong>封闭性：</strong>对某类对象进行某种运算，结果仍然属于该类对象。

对语言 $A,B$，正则运算包括：

$A\cup B=\{x\mid x\in A\text{ 或 }x\in B\},$

$AB=\{xy\mid x\in A, y\in B\},$

$A^*=\{\varepsilon\}\cup A\cup AA\cup AAA\cup\cdots.$

<strong>定理：</strong>正则语言对并、连接、星号封闭；也对补、交、差、对称差封闭。



#### 证明模板 1：补封闭
若$L=L(M)$，其中 $M=(Q,\Sigma,\delta,q_0,F)$，构造

$M'=(Q,\Sigma,\delta,q_0,Q-F).$

也就是把接受态与非接受态互换。由于 DFA 对任何输入都必停且只有一个计算分支，所以

$\forall x,\ x \in L(M) \iff x \notin L(M')$

因此 $L(M') = \Sigma^* - L(M) = \overline{L(M)}$。

<strong>易错点：</strong> 这个证明要求自动机是完整 DFA。若缺转移，要先补上死状态。



#### 证明模板 2：并/交封闭的笛卡尔积构造
设：

$M_i = (Q_i, \Sigma, \delta_i, q_i, F_i), \quad i = 1, 2, 3$

构造 $M_3$ 同时模拟两台机器：

$Q_3 = Q_1 \times Q_2,\quad q_3 = (q_1, q_2)$

$\delta_3((r_1, r_2), a) = (\delta_1(r_1, a), \delta_2(r_2, a))$

- 对并：$F_3 = (F_1 \times Q_2) \cup (Q_1 \times F_2)$，$M_3 = (Q_3, \Sigma, \delta_3, q_3, F_3) \Rightarrow L_1 \cup L_2 = L(M_1) \cup L(M_2) = L(M_3)$

- 对交：$F_3 = F_1 \times F_2$，$M_3 = (Q_3, \Sigma, \delta_3, q_3, F_3) \Rightarrow L_1 \cap L_2 = L(M_1) \cap L(M_2) = L(M_3)$

直观上，一个状态 $(r_1, r_2)$ 表示"第一台机器当前在 $r_1$，第二台机器当前在 $r_2$"。



#### 证明模板 3：连接和星号封闭
设：

$M_i = (Q_i, \Sigma, \delta_i, q_i, F_i), \quad i = 1, 2, 3$

$L(M_3) = L(M_1)L(M_2),\quad Q_3 = Q_1 \times P(Q_2)$

$P(Q_2)$：$Q_2$ 的幂集，所有子集构成的集合，幂集让 $M_3$ 能够同时跟踪多个并行的 $M_2$ 模拟，每个子集代表一种"并行状态的组合"。

![image\.png](/Firefly/uploads/computability-notes/image-124.png)

![image\.png](/Firefly/uploads/computability-notes/image-114.png)

<strong>扩展定义</strong> $\delta: P(Q) \times \Sigma \to P(Q)$,

$\delta(R, a) = \{\delta(s, a) \mid s \in R\}$\.

集合中的<strong>每个状态</strong>都按标准 $\delta$ 走一步，然后把结果<strong>收集起来</strong>形成新集合。

$q_3 = (q_1, s)$\.

$s = \begin{cases} \{q_2\}, & \text{若 } q_1 \in F_1 \\ \emptyset, & \text{否则.} \end{cases}$

- 如果 $M_1$ 的初始状态 $q_1$ 就是接受状态（即空串 $\varepsilon \in L_1$），那么 $M_2$ 也应该<strong>立即开始运行</strong>（从 $q_2$ 开始）

- 否则，$M_2$ 暂不启动（集合为空）



$\delta_3((r_1, r_2), a) = (\delta_1(r_1, a), \delta_2(r_2, a) \cup t)$\.

$t = \begin{cases} \{q_2\}, & \text{若 } \delta_1(r_1, a) \in F_1 \\ \emptyset, & \text{否则.} \end{cases}$

|分量|计算方式|含义|
|---|---|---|
|第一个分量|$\delta_1(r_1, a)$|$M_1$ 正常走一步|
|第二个分量|$\delta_2(r_2, a) \cup t$|两部分合并|
||$\delta_2(r_2, a)$|所有<strong>已在运行</strong>的 $M_2$ 实例各走一步|
||$t$|若 $M_1$ 刚到达接受状态，则<strong>新启动</strong>一个 $M_2$ 实例|

$F_3 = \{(r_1, r_2) \mid r_2 \cap F_2 \neq \emptyset\}$

只要 $r_2$ 集合中<strong>至少有一个</strong> $M_2$ <strong>的状态是接受状态</strong>，$M_3$ 就接受。



### 1.5 NFA：非确定型有穷自动机
<strong>形式定义。</strong> NFA 是五元组$N=(Q,\Sigma,\delta,q_0,F),$其中转移函数变为

$\delta:Q\times \Sigma_\varepsilon\to \mathcal{P}(Q),\qquad
\Sigma_\varepsilon=\Sigma\cup\{\varepsilon\}.$

与 DFA 相比，NFA 有两点不同：

1. 同一个状态读同一个符号可以有多个后继（含 0 个选择）；

2. 可以不读输入直接进行 $\varepsilon$ 移动。

<strong>接受条件：</strong> 只要存在一条计算分支最终进入接受态，NFA 就接受该串。

- 接受计算：$r_m \in F$

<strong>直观理解：</strong> NFA 像“同时试很多种可能”。失败的分支消失，只要有一个分支成功，整体成功。

- $M$ 接受 $w$：存在接受计算  $L(M) = \{x \mid M \text{ 接受 } x\}$

![image\.png](/Firefly/uploads/computability-notes/image-48.png)



### 1.6 NFA 与 DFA 的关系：子集构造
<strong>定理 2\.19：</strong> 每台 NFA 都有等价 DFA，等价：两台机器识别同样的语言。

<strong>核心思想：</strong>用 DFA 的一个状态表示 NFA 当前可能处在的一组状态。若 NFA 有 $k$ 个状态，则 DFA 最多有 $2^k$ 个状态。

设 NFA $N=(Q,\Sigma,\delta,q_0,F).$构造 DFA $M=(Q',\Sigma,\delta',q_0',F'),$ 其中：

$Q'=\mathcal{P}(Q),$

$q_0'=E(\{q_0\}),$

$E(R)$ 表示从 $R$ 中任一状态出发，经过 0 次或多次 $\varepsilon$ 移动可达的所有状态；

$\delta'(R,a)=E\left(\bigcup_{r\in R}\delta(r,a)\right),$

$F'=\{R\subseteq Q\mid R\cap F\neq\varnothing\}.$



<strong>证明思路：</strong>给定 NFA，构造等价 DFA：用 DFA 模拟 NFA

- DFA 记住 NFA 的所有分支

- 设 NFA 有 $k$ 个状态，则共有 $2^k$ 个不同状态子集合

$\varepsilon$ 闭包：

- 对每个状态子集合，经 $\varepsilon$ 移动可到达的新状态子集合

<strong>证明过程：</strong>设 NFA $N = (Q, \Sigma, \delta, q_0, F)$，构造 DFA $M = (Q', \Sigma, \delta', q_0', F')$，$L(M) = L(N)$。

令 $Q' = P(Q)$。

- DFA 的每个状态 = NFA 状态的一个子集

对 $R \in Q'$ 和 $a \in \Sigma$，

$E(R) = \{q \mid \text{从} R \text{出发沿} 0 \text{个或多个} \varepsilon \text{移动可达} q\}$；

![image\.png](/Firefly/uploads/computability-notes/image-39.png)

- 处理 NFA 的 *ε*  转移，把"能免费到达"的状态都收进来

$\delta'(R, a) = \bigcup_{r \in R} E(\delta(r, a))$。

- DFA 读一个字符 *a* ，相当于 NFA 中"所有当前并行状态各读一个 *a* ，再走任意 *ε*  转移"。

$q_0' = E(\{q_0\})$。

- 包含 $q_0$ 及其所有 $\varepsilon$ 可达状态。



$F' = \{R \in Q' \mid R \cap F \neq \emptyset\}$

- DFA 状态 $R$ 是接受状态 $\iff R$ 中至少包含一个 NFA 的接受状态



<strong>NFA 如何转换成 DFA：</strong>

- 写出子集状态

- 求ε闭包

- 添加转移

- 确定各个状态

![image\.png](/Firefly/uploads/computability-notes/image-14.png)

![image\.png](/Firefly/uploads/computability-notes/image-152.png)

![image\.png](/Firefly/uploads/computability-notes/image-71.png)

![image\.png](/Firefly/uploads/computability-notes/image-83.png)

<strong>推论2\.20:</strong>一个语言是正则的，当且仅当有一台 NFA 识别它

<strong>定理2\.22:</strong>正则语言对并封闭



### 1.7 正则表达式
<strong>正则语言</strong>是一类<strong>形式语言</strong>，是可以被以下任意一种计算模型识别的语言集合：

|计算模型|说明|
|---|---|
|<strong>DFA</strong>（确定有限自动机）|五元组 $(Q, \Sigma, \delta, q_0, F)$|
|<strong>NFA</strong>（非确定有限自动机）|含 $\varepsilon$ 转移、多值转移|
|<strong>正则表达式</strong>|按特定语法规则构造的表达式|

<strong>定义2\.26：</strong> $R$ 是正则表达式，当且仅当 $R$ 可由以下规则递归构造：

1. $a$，其中 $a\in\Sigma$，表示 $\{a\}$；

2. $\varepsilon$，表示 $\{\varepsilon\}$；

3. $\varnothing$，表示空语言；

4. $(R_1\cup R_2)$；

5. $(R_1R_2)$；

6. $(R_1^*)$。

运算优先级：星号 $>$ 连接 $>$ 并。



<strong>例子：</strong>

$\Sigma^*1\Sigma^* = \{w\mid w\text{ 至少含一个 }1\}.$

$(\Sigma\Sigma)^*=\{w\mid |w|\text{ 为偶数}\}.$

$0\Sigma^*0\cup 1\Sigma^*1\cup 0\cup 1=\{w\mid w\text{ 首尾符号相同}\}.$

![image\.png](/Firefly/uploads/computability-notes/image-104.png)

![image\.png](/Firefly/uploads/computability-notes/image-68.png)



<strong>定理2\.22:</strong> 正则语言对并封闭

<strong>证明：</strong> 设 NFA $N_i = (Q_i, \Sigma, \delta_i, q_i, F_i)$ 识别 $A_i$，$i = 1, 2$。构造 NFA $N = (Q, \Sigma, \delta, q_0, F)$ 识别 $A_1 \cup A_2$。

令 $Q = Q_1 \cup Q_2 \cup \{q_0\}$；

- 把两个 NFA 的状态合并，<strong>新增一个初始状态</strong> $q_0$。

$F = F_1 \cup F_2$。



$\delta(q, a) = \begin{cases} 
\delta_1(q, a), & \text{若 } q \in Q_1 \\
\delta_2(q, a), & \text{若 } q \in Q_2 \\
\{q_1, q_2\}, & \text{若 } q = q_0 \land a = \varepsilon \\
\emptyset, & \text{若 } q = q_0 \land a \neq \varepsilon
\end{cases}$

|情况|含义|
|---|---|
|$q \in Q_1$|在 $N_1$ 内部，按 $N_1$ 的转移走|
|$q \in Q_2$|在 $N_2$ 内部，按 $N_2$ 的转移走|
|$q = q_0, a = \varepsilon$|新初始状态 $q_0$ 通过 $\varepsilon$ <strong>同时启动</strong> $N_1$ 和 $N_2$|
|$q = q_0, a \neq \varepsilon$|$q_0$ 不消耗输入不能走（只能通过 $\varepsilon$ 转移）|

<strong>定理2\.23:</strong> 正则语言对连接封闭

<strong>定理2\.24:</strong> 正则语言对星号封闭

![image\.png](/Firefly/uploads/computability-notes/image-10.png)

![image\.png](/Firefly/uploads/computability-notes/image-56.png)



### 1.8 正则表达式与自动机等价
<strong>定理 2\.28</strong> 一个语言是正则的，当且仅当可用正则表达式描述。

该定理由两个方向组成。



#### 方向一：正则表达式 **$\Rightarrow$** NFA
<strong>引理 2\.29：</strong> 正则表达式描述正则语言：每个正则表达式 *R*  都对应一个正则语言 *L*\(*R*\) ，且这个语言可以被某个有限自动机识别。

<strong>证明方法：</strong>结构归纳法：正则表达式是<strong>递归定义</strong>的，证明也按结构归纳：

|基本情况|归纳步骤|
|---|---|
|单个字符 $a$|$R_1 \cup R_2$|
|空串 $\varepsilon$|$R_1 \circ R_2$（连接）|
|空语言 $\emptyset$|$R^*$（Kleene 星）|

![image\.png](/Firefly/uploads/computability-notes/image-41.png)

![image\.png](/Firefly/uploads/computability-notes/image-33.png)

![image\.png](/Firefly/uploads/computability-notes/image-67.png)

1. <strong>情况 1：</strong>单个字符 $a$，只有一个开始状态$q_1$和一个接受状态$q_2 $

    - $R = a$，$a \in \Sigma$\.

    - $L(R) = \{a\}$,

    - $N = (\{q_1, q_2\}, \Sigma, \delta, q_1, \{q_2\})$,

    - $\delta(q_1, a) = \{q_2\}$,

    - $\delta(r, b) = \emptyset$，若 $r \neq q_1$ 或 $b \neq a$\.

2. <strong>情况 2：</strong>空串 $\varepsilon$，只有一个状态，同时是开始和接受状态

    - $R = \varepsilon$\.

    - $L(R) = \{\varepsilon\}$,

    - $N = (\{q_1\}, \Sigma, \delta, q_1, \{q_1\})$,

    - $\forall r, \forall b,\ \delta(r, b) = \emptyset$\.

3. <strong>情况 3：</strong>空语言$R = \emptyset$，不存在接受状态

    - $L(R) = \emptyset$,

    - $N = (\{q_1\}, \Sigma, \delta, q_1, \emptyset)$,

    - $\forall r, \forall b,\ \delta(r, b) = \emptyset$\.

![image\.png](/Firefly/uploads/computability-notes/image-145.png)

![image\.png](/Firefly/uploads/computability-notes/image-3.png)

![image\.png](/Firefly/uploads/computability-notes/image-150.png)

4. <strong>情况 4：</strong>并

5. <strong>情况 5：</strong>连接

6. <strong>情况 6：</strong>闭包（星号）



#### 方向二：DFA/NFA **$\Rightarrow$** 正则表达式
<strong>引理 2\.32：</strong> 正则语言可用正则表达式描述。

课件使用 GNFA（广义 NFA）方法。

<strong>GNFA 特点</strong> 箭头标号不是单个字符，而是正则表达式。不断删除中间状态，把经过该状态的路径合并成新的正则表达式。

![image\.png](/Firefly/uploads/computability-notes/image-97.png)

![image\.png](/Firefly/uploads/computability-notes/image-100.png)

- <strong>初始状态</strong>

    - 有到所有其他状态的箭头

    - 所有其他状态都没有到它的箭头

- <strong>接受状态</strong>

    - 唯一，且与初始状态不同

    - 没有到任何其他状态的箭头

    - 所有其他状态都有到它的箭头

- <strong>其他每个状态</strong>

    - 都有到自身和其他状态的箭头

    

删除状态 $q_{rip}$ 时，若有

- $q_i\to q_{rip}$ 标号 $R_1$，

- $q_{rip}\to q_{rip}$ 标号 $R_2$，

- $q_{rip}\to q_j$ 标号 $R_3$，

- 原来 $q_i\to q_j$ 标号 $R_4$，

则新边标号为$R_4\cup R_1R_2^*R_3.$

反复删除直到只剩初态和唯一接受态，二者之间的表达式就是语言的正则表达式。

<strong>证明：</strong>设正则语言 $A$ 被 DFA $M$ 识别。

- 把 $M$ 转换成等价的 GNFA $G$。

- 利用过程 $CONVERT(G)$ 把 $G$ 转换成等价的正则表达式。



- GNFA 的形式定义

![image\.png](/Firefly/uploads/computability-notes/image-135.png)

- 过程 $CONVERT(G)$：对 GNFA 的状态数 $n = |Q|$ 进行归纳，直到只存在开始状态和接受状态。字符串 $w$ 被 GNFA 接受，当且仅当存在一条从 $q_{start}$ 到 $q_{accept}$ 的路径，且无中间状态：

![image\.png](/Firefly/uploads/computability-notes/image-151.png)

- $CONVERT(G)$ 的正确性证明。<strong>定理：</strong> 对任意 GNFA $G$，$CONVERT(G)$ 输出的正则表达式 $R$ 满足 $L(R) = L(G)$。

此时只有 $q_{start}$ 和 $q_{accept}$。

- 若它们之间有边，标为 $R$，则 $L(G) = L(R)$，算法直接输出 $R$。

- 若无边，则 $L(G) = \emptyset$，算法输出 $\emptyset$。



### 1.9 非正则语言与泵引理
<strong>什么是非正则语言？无限状态的语言</strong>

![image\.png](/Firefly/uploads/computability-notes/image-65.png)

<strong>泵引理。</strong> 若 $A$ 是正则语言，则存在常数 $p$，称为泵长度，使得任意 $s\in A$ 且 $|s|\ge p$，都可以分解为$s=xyz,$并满足：

- $\forall i\ge 0,
xy^iz\in A;$

- $|y|>0;$

- $|xy|\le p.$

<strong>直观解释：</strong> DFA 只有有限个状态。当输入足够长时，前 $p$ 个字符中必然有某个状态重复。重复部分就是 $y$，可以沿着循环多走几圈或少走几圈，所以 $y$ 可以被“泵”。

![image\.png](/Firefly/uploads/computability-notes/image-115.png)

#### 泵引理证明非正则的标准模板
要证明语言 $B$ 非正则：

1. 反设 $B$ 是正则语言。

2. 令 $p$ 为泵长度。

3. 精心选择<strong>（举一个合适的反例）</strong> $s\in B$ 且 $|s|\ge p$。

4. 根据泵引理，$s=xyz$，满足 $|xy|\le p$、$|y|>0$。

5. 利用 $|xy|\le p$ 限制 $y$ 的位置。

6. 选择某个 $i$，通常 $i=0$ 或 $i=2$，使 $xy^iz\notin B$。

7. 与泵引理矛盾，所以 $B$ 非正则。

#### 例 1：**$B=\{0^n1^n\mid n\ge 0\}$** 非正则
反设 $B$ 正则，泵长度为 $p$。取$s=0^p1^p.$

由 $|xy|\le p$ 可知 $x$ 和 $y$ 都只落在前面的 $0$ 区间中，因此

$y=0^k,
\quad k>0.$

取 $i=2$，得到：$xy^2z=0^{p+k}1^p,$

其中 $0$ 的个数比 $1$ 多，所以不在 $B$ 中，矛盾。

![image\.png](/Firefly/uploads/computability-notes/image-59.png)



<strong>补充说明：</strong> PPT S73\-S75 列了三种情况，但由于有条件 $|xy|\le p$，实际上 $y$ 必定在前 $p$ 个 $0$ 内，因此只需讨论 $y\in 0^+$。考试中写“由 $|xy|\le p$，所以 $y$ 全由 0 组成”更加简洁。



#### 例 2：**$C=\{w\mid w\text{ 中 }0\text{ 和 }1\text{ 个数相等}\}$** 非正则
取$s=0^p1^p.$

同理 $y=0^k,k>0$。泵成 $xy^2z$ 后，0 的个数多于 1，因此不属于 $C$。



#### 例 3：**$F=\{ww\mid w\in\{0,1\}^*\}$** 非正则
取$s=0^p10^p1.$

它等于 $ww$，其中 $w=0^p1$。由于 $|xy|\le p$，$y$ 位于第一段 $0^p$ 内。取 $i=2$ 后，前半部分的 $0$ 变多，但后半部分未变，不可能仍然是两个相同串的连接，因此矛盾。



<strong>泵引理易错点。</strong>

- 泵引理只能用来证明“非正则”，不能用来证明“正则”。

- 不能随便指定 $x,y,z$；证明非正则时必须对所有满足条件的分解都推出矛盾。

- 选择 $s$ 很关键：应让 $|xy|\le p$ 强行把 $y$ 限制在某个单一结构中。



## 第二部分：上下文无关文法
### 2.1 CFG 的定义
<strong>形式定义：</strong> 上下文无关文法 CFG 是四元组$G=(V,\Sigma,R,S),$其中：

- $V$：变元或非终结符集合；

- $\Sigma$：终结符集合，且 $V\cap\Sigma=\varnothing$；

- $R$：产生式集合，形如 $A\to w$，其中 $A\in V$，$w\in(V\cup\Sigma)^*$；

- $S\in V$：初始变元。

<strong>派生：若某串中出现变元</strong>$A$<strong>，且有产生式</strong>$A\to u$<strong>，就可以把该处的</strong>$A$<strong>替换为</strong>$u$<strong>。用</strong>$\Rightarrow$<strong>表示一步派生，用</strong>$\Rightarrow^*$<strong>表示零步或多步派生。</strong>

$u \Rightarrow^* v$：

$u \Rightarrow u_1 \Rightarrow u_2 \Rightarrow \ldots \Rightarrow u_n \Rightarrow v$ 或 $u = v$

<strong>文法生成的语言：</strong>$L(G)=\{w\in\Sigma^*\mid S\Rightarrow^* w\}.$

若某语言能由 CFG 生成，则称为上下文无关语言 CFL。

例如：$G_1 = (\{A, B\},\{0, 1, \#\},\{A \to 0A1, A \to B, B \to \#\},A)$

<strong>语法分析树、派生：</strong>

![image\.png](/Firefly/uploads/computability-notes/image-73.png)



### 2.2 CFG 设计方法
#### 模板 1：匹配数量
语言：$\{0^n1^n\mid n\ge 0\}.$

文法：$S\to 0S1\mid \varepsilon.$

解释：每使用一次 $S\to 0S1$，就在左边加一个 0、右边加一个 1，保证数量相同且顺序正确。



#### 模板 2：回文/镜像
语言：$\{ww^R\mid w\in\{0,1\}^*\}.$

文法：$S\to 0S0\mid 1S1\mid \varepsilon.$

若允许奇数长度回文，可加 $S\to 0\mid 1$。



#### 模板 3：并语言
若 $G_1$ 生成 $A$，$G_2$ 生成 $B$，则生成 $A\cup B$ 的 CFG 可增加新初始变元 $S$：

$S\to S_1\mid S_2.$



#### 模板 4：正则语言转 CFG
设 DFA $M=(Q,\Sigma,\delta,q_0,F)$，其中 $Q=\{q_0,q_1,\ldots,q_k\}$。

构造 CFG  $G = (V, \Sigma, R, R_0)$，其中$V = \{R_0, R_1, \ldots, R_k\}$，$R_i \to aR_j$，$R_i \to \varepsilon$

其变元 $R_i$ 对应状态 $q_i$。

- 若$\delta(q_i,a)=q_j,$ 则加入规则$R_i\to aR_j.$

- 若 $q_i\in F$，加入$R_i\to \varepsilon.$

初始变元是 $R_0$。这说明所有正则语言都是上下文无关语言。

<strong>定理：</strong>正则语言都是上下文无关语言

![image\.png](/Firefly/uploads/computability-notes/image-128.png)

![image\.png](/Firefly/uploads/computability-notes/image-94.png)



### 2.3 歧义性
<strong>最左派生：</strong> 每一步都替换当前句型中最左边的变元。

![image\.png](/Firefly/uploads/computability-notes/image-25.png)

![image\.png](/Firefly/uploads/computability-notes/image-96.png)

<strong>歧义地产生：</strong> 若某个串有两个不同的最左派生，或等价地，有两棵不同的语法分析树，则称该串被文法歧义地产生。

<strong>歧义文法：</strong> 如果一个 CFG 歧义地产生某个串，则该 CFG 是歧义文法。

<strong>固有歧义语言：</strong> 如果一个语言的所有 CFG 都是歧义文法，则该语言固有歧义。

PPT 例子：

$\{0^i1^j2^k\mid i=j\text{ 或 }j=k\}$

是固有歧义语言，因为 $0^n1^n2^n$ 可以从两侧条件都生成。



### 2.4 乔姆斯基范式 CNF：不作为重点，但要知道用途
提纲说明 CNF 不做要求，但它会在 $A_{CFG}$ 可判定性的证明中出现，因此至少要掌握用途。

CNF 只允许规则：

- $S\to \varepsilon,$

- $A\to BC,$

- $A\to a.$

其中

- $A, B, C$ 是任意变元

- $B, C$ 不是初始变元（初始变元不能在右方出现）

- $a$ 是任意终结符

<strong>关键性质：</strong> 若 CFG 已经是 CNF，则除 $\varepsilon$ 外，长度为 $n$ 的串，其派生树有 $n$ 个终结符叶子，二叉规则数为 $n-1$，所以总派生步数恰好为$2n-1.$

这使得“是否能派生给定串 $w$”变成有限搜索。

<strong>等价：</strong>两个文法生成同样的语言

<strong>定理3\.6：</strong>任何 CFG 都有等价的 CNF

<strong>证明思路：</strong> 下列算法：

1. 添加新的初始变元

    - 添加新初始变元 $S_0$ 和规则 $S_0 \to S$，

    - 其中 $S$ 是旧初始变元。

2. 处理 $A \to \varepsilon$（$\varepsilon$ 规则）

    - 考虑所有 $\varepsilon$ 规则。

    - 若 $A$ 不是初始变元，则删除 $A \to \varepsilon$，以各种可能的方式删除其他规则右边的 $A$，添加新的规则，例如：

        - 由 $B \to uAv$ 添加 $B \to uv$

        - 由 $B \to uAvAw$ 添加 $B \to uAvw \mid uAvw \mid uvw$

        - 由 $B \to A$ 添加 $B \to \varepsilon$（除非已删除过 $B \to \varepsilon$）

    - 直到删除所有 $\varepsilon$ 规则（$S_0 \to \varepsilon$ 除外）为止。

3. 处理 $A \to B$（单一规则）

    - 删除 $A \to B$，

        - 若有规则 $B \to u$，则添加规则 $A \to u$，

        - 除非 $A \to u$ 是已删除过的单一规则。

    - 重复上述步骤，直到删除所有单一规则为止。

4. 处理 $A \to u_1 u_2 \ldots u_k$（$k \ge 3$）

    - 把每一条规则 $A \to u_1 u_2 \ldots u_k$ 换成

        - $A \to u_1 A_1$

        - $A_1 \to u_2 A_2$

        - $A_2 \to u_3 A_3$

        - $\ldots$

        - $A_{k-2} \to u_{k-1} u_k \quad (k \ge 3)$

5. 处理 $A \to a_i a_j$，$A \to a_i B$，$A \to B a_i$

    - 对每个终结符 $a_i$，

    - 引入变元 $U_i$ 和规则 $U_i \to a_i$。

        - 把 $A \to a_i a_j$ 换成 $A \to U_i U_j$

        - 把 $A \to a_i B$ 换成 $A \to U_i B$

        - 把 $A \to B a_i$ 换成 $A \to B U_i$



### 2.5 PDA 的定义
<strong>形式定义。</strong> 下推自动机 PDA 是六元组$M=(Q,\Sigma,\Gamma,\delta,q_0,F),$

其中：

- $Q$：有限状态集；

- $\Sigma$：输入字母表；

- $\Gamma$：栈字母表；

- $\delta:Q\times\Sigma_\varepsilon\times\Gamma_\varepsilon\to\mathcal{P}(Q\times\Gamma_\varepsilon)$；

- $q_0$：初始状态；

- $F$：接受状态集合。

转移$(r,b)\in\delta(q,a,c)$

表示：当前状态为 $q$，读入输入符号 $a$（也可能是 $\varepsilon$），若栈顶为 $c$（也可能不看栈顶），则转到状态 $r$，并把栈顶 $c$ 替换成 $b$。

![image\.png](/Firefly/uploads/computability-notes/image-66.png)

![image\.png](/Firefly/uploads/computability-notes/image-91.png)

<strong>栈操作理解</strong>

- $a,\varepsilon\to X$：读入 $a$，不弹栈，压入 $X$。

- $a,X\to \varepsilon$：读入 $a$，弹出 $X$。

- $\varepsilon,X\to Y$：不读输入，把栈顶 $X$ 替换为 $Y$。

<strong>PDA 计算的形式定义</strong>

$M = (Q, \Sigma, \Gamma, \delta, q_0, F)$；

输入 $w = w_1 w_2 \ldots w_m$，$w_i \in \Sigma_\varepsilon$

<strong>计算：</strong> 状态\-栈符号串序列

$(r_0, s_0), (r_1, s_1), \ldots, (r_m, s_m)$，

其中 $r_i \in Q$，$s_i \in \Gamma^*$，满足

1. $(r_0, s_0) = (q_0, \varepsilon)$；

2. $(r_{i+1}, b) \in \delta(r_i, w_{i+1}, a)$；

    - 其中 $s_i = at$；$s_{i+1} = bt$，$a, b \in \Gamma_\varepsilon$，$t \in \Gamma^*$



### 2.6 PDA 设计方法
### <strong>例 1：</strong>$\{0^n1^n\mid n\ge0\}$

![image\.png](/Firefly/uploads/computability-notes/image-35.png)

![image\.png](/Firefly/uploads/computability-notes/image-23.png)

策略：

1. 读 0 时，每读一个 0 就向栈中压入一个 0；

2. 一旦开始读 1，每读一个 1 就弹出一个 0；

3. 输入读完且栈中 0 恰好弹空，则接受；

4. 若先弹空、剩余输入还有 1，则拒绝；若输入结束栈里还有 0，也拒绝；若 1 后又出现 0，拒绝。

这体现了 PDA 比 DFA 多了一个栈，因此可以记住任意多的 0 的个数。



### <strong>例 2：</strong>$\{a^nb^nc^m,a^nb^mc^n\mid m,n\ge0\}$

![image\.png](/Firefly/uploads/computability-notes/image-140.png)

策略：先读 $a$ 并把 $a$ 压栈，然后利用非确定性猜测：

- 猜 $a$ 与 $b$ 匹配：读 $b$ 时弹 $a$，弹空后读任意多个 $c$；

- 猜 $a$ 与 $c$ 匹配：跳过任意多个 $b$，读 $c$ 时弹 $a$。

<strong>核心考点。</strong> 这个例子说明 PDA 通常指 NPDA，因为非确定性对 CFL 很重要。



### <strong>例 3：</strong>$\{ww^R\mid w\in\{0,1\}^*\}$

![image\.png](/Firefly/uploads/computability-notes/image-108.png)

策略：

1. 前半段输入压栈；

2. 非确定性猜测中点；

3. 后半段每读一个符号，就与栈顶比较并弹栈；

4. 输入结束且栈空则接受。

中点不知道在哪里，因此需要非确定性。



### 2.7 PDA 与 CFG 的等价性
<strong>定理 3\.12：</strong> 一个语言是 CFL，当且仅当存在 PDA 识别它。

<strong>引理 3\.13：</strong>如果一个语言是 CFL，则存在 PDA 识别它。

<strong>引理 3\.15：</strong>如果一个语言被 PDA 识别，则这个语言是 CFL。

<strong>证明思路</strong>

- CFG 通过派生来产生串

- PDA 如何识别这个串？

    - PDA 在堆栈中模拟派生过程

    - 让栈顶的终结符与输入进行匹配

    - 栈顶是变元，就模拟派生过程

    - 栈顶是终结符，就进行匹配

![image\.png](/Firefly/uploads/computability-notes/image-49.png)

![image\.png](/Firefly/uploads/computability-notes/image-126.png)

![image\.png](/Firefly/uploads/computability-notes/image-86.png)

![image\.png](/Firefly/uploads/computability-notes/image-88.png)

![image\.png](/Firefly/uploads/computability-notes/image-46.png)

![image\.png](/Firefly/uploads/computability-notes/image-109.png)

![image\.png](/Firefly/uploads/computability-notes/image-132.png)

![image\.png](/Firefly/uploads/computability-notes/image-16.png)

![image\.png](/Firefly/uploads/computability-notes/image-78.png)

![image\.png](/Firefly/uploads/computability-notes/image-61.png)

![image\.png](/Firefly/uploads/computability-notes/image-36.png)

![image\.png](/Firefly/uploads/computability-notes/image-117.png)

![image\.png](/Firefly/uploads/computability-notes/image-69.png)

![image\.png](/Firefly/uploads/computability-notes/image-29.png)

![image\.png](/Firefly/uploads/computability-notes/image-5.png)

    

- 如何把栈顶换成一串符号？

    - <strong>中间状态</strong>

![image\.png](/Firefly/uploads/computability-notes/image-81.png)

<strong>定理 3\.12：</strong> 一个语言是 CFL，当且仅当存在 PDA 识别它。

即：

$L\text{ 是 CFL}\iff \exists \text{ PDA }M,\ L=L(M).$

这个定理分两个方向。



#### 方向一：CFG **$\Rightarrow$** PDA
即<strong>引理 3\.13：</strong>如果一个语言是 CFL，则存在 PDA 识别它。

假设 $G=(V,\Sigma,R,S)$。构造 PDA 的运行逻辑：

1. 初始把特殊栈底符号$\char36$和初始变元$S$压入栈。

2. 若栈顶是变元 $A$，PDA 非确定性选择<strong>每一条</strong>产生式 $A\to u$，把 $A$ 替换为 $u$。为了让 $u$ 的第一个符号先被处理，通常按反序压栈。

3. 若栈顶是终结符 $a$，则必须读入输入中的 $a$ 并弹出栈顶。

    1. 如果匹配，则重复

    2. 如果不匹配，则讲这个非确定分支拒绝

4. 若输入读完且栈回到栈底，再弹出栈底并进入接受态。

    1. 此刻输入全部读完，接受这个输入串

<strong>为什么正确。</strong>

- 若 $G$ 能派生 $w$，PDA 可以按这条派生选择产生式，最终逐个匹配输入并接受。

- 若 PDA 接受 $w$，它在栈顶替换变元的过程对应一棵 CFG 派生树，因此 $G$ 能派生 $w$。

<strong>考试答法。</strong> 一定要写清楚“栈顶是变元”和“栈顶是终结符”两种情况。

<strong>一些实际的转化例子：</strong>

![image\.png](/Firefly/uploads/computability-notes/image-148.png)

![image\.png](/Firefly/uploads/computability-notes/image-143.png)

![image\.png](/Firefly/uploads/computability-notes/image-13.png)

![image\.png](/Firefly/uploads/computability-notes/image-107.png)

![image\.png](/Firefly/uploads/computability-notes/image-112.png)

![image\.png](/Firefly/uploads/computability-notes/image-11.png)

#### 方向二：PDA **$\Rightarrow$** CFG
即<strong>引理 3\.15：</strong>如果一个语言被 PDA 识别，则这个语言是 CFL。

<strong>证明思路：</strong>

- 用 CFG 派生出 PDA 接受的串

- 变元基本起状态的作用

- 如何消除栈的影响？

- 分析 PDA 工作过程

![image\.png](/Firefly/uploads/computability-notes/image-77.png)

- 每次转移要么压入一个栈符号，要么弹出一个栈符号；

- 接受时栈为空；

- 只有一个接受状态。

<strong>构造变元：</strong>对 PDA 的任意两个状态$p,q$，设置变元$A_{pq}.$

![image\.png](/Firefly/uploads/computability-notes/image-142.png)

![image\.png](/Firefly/uploads/computability-notes/image-31.png)

它表示：PDA 能够从状态 $p$、空栈开始，读入某个串后到达状态 $q$、空栈结束。换句话说，$A_{pq}$ 生成“从 $p$ 到 $q$ 且栈净变化为 0”的所有输入串。



<strong>产生式类型：</strong>

1. 空串规则：

$A_{pp}\to \varepsilon.$

因为从 $p$ 到 $p$ 可以什么都不做。

2. 分段规则：

$A_{pq}\to A_{pr}A_{rq}.$

表示从 $p$ 到 $q$ 的空栈过程可以拆成 $p$ 到 $r$ 和 $r$ 到 $q$ 两段。

3. 压栈—弹栈配对规则：若 PDA 有转移

$p \xrightarrow{a,\varepsilon\to t} r,$

以及

$s \xrightarrow{b,t\to \varepsilon} q,$

则加入

$A_{pq}\to aA_{rs}b.$

意思是：先读 $a$ 并压入 $t$，中间从 $r$ 到 $s$ 的过程不能破坏这个 $t$，最后读 $b$ 并弹出 $t$。

![image\.png](/Firefly/uploads/computability-notes/image-15.png)

|转移|具体含义|
|---|---|
|<strong>\(p,ε\) → a → \(r,t\)</strong>|在状态 p，栈顶为空（ε），读入 `a`，转移到状态 r，<strong>压入 t</strong>|
|<strong>\(r,t\) → b → \(s,t\)</strong>|在状态 r，栈顶为 t，读入 `b`，转移到状态 s，<strong>栈顶保持 t</strong>（弹出 t 再压入 t，即不变）|
|<strong>\(s,t\) → b → \(q,ε\)</strong>|在状态 s，栈顶为 t，读入 `b`，转移到状态 q，<strong>弹出 t</strong>（栈变空）|

<strong>证明：</strong> 设 PDA $P = (Q, \Sigma, \Gamma, \delta, q_0, \{q_{accept}\})$，构造等价 CFG

$G = (\{A_{pq} \mid p, q \in Q\}, \Sigma, R, A_{q_0 q_{accept}})$，

$R$ 包含如下规则：

- $A_{pq} \to a A_{rs} b$，（任何 $p, q, r, s \in Q$，$a, b \in \Sigma_\varepsilon$，$t \in \Gamma$，$\delta(p, a, \varepsilon)$ 包含 $(r, t)$ 且 $\delta(s, b, t)$ 包含 $(q, \varepsilon)$）

- $A_{pq} \to A_{pr} A_{rq}$，（任何 $p, q, r \in Q$）

- $A_{pp} \to \varepsilon$，（任何 $p \in Q$）

下面证明 $A_{pq}$ 产生 $x$，

当且仅当 $x$ 把 $P$ 从状态 $p$ 和空栈一起带到状态 $q$ 和空栈。



- <strong>断言 3\.16：</strong> 如果 $A_{pq}$ 产生 $x$，则 $x$ 把 $P$ 从状态 $p$ 和空栈一起带到状态 $q$ 和空栈。

- <strong>证明：</strong>（对 $A_{pq}$ 派生 $x$ 的步数进行归纳）。

- \(1\) $A_{pq} \Rightarrow x$。只能使用 $A_{pp} \to \varepsilon$。显然 $\varepsilon$ 把 $P$ 从状态 $p$ 和空栈一起带到状态 $p$ 和空栈。

- \(2\) 假设断言对不超过 $k$ 步的 $A_{pq} \Rightarrow^* x$ 成立。证明断言对 $k+1$ 步的 $A_{pq} \Rightarrow^* x$ 成立。

考虑第一步，分使用 $A_{pq} \to aA_{rs}b$ 和 $A_{pq} \to A_{pr}A_{rq}$ 两种情况。

![image\.png](/Firefly/uploads/computability-notes/image-26.png)

- 设第一步使用 $A_{pq} \to aA_{rs}b$。

    则 $A_{rs} \Rightarrow^* y$ 使用 $k$ 步，$x = ayb$。根据归纳假设，

    $P$ 从 $r$ 和空栈读 $y$ 转移到 $s$ 和空栈。

    因为 $A_{pq} \to aA_{rs}b$ 是规则，所以存在 $t$，

    使得 $\delta(p, a, \varepsilon)$ 包含 $(r, t)$ 且 $\delta(s, b, t)$ 包含 $(q, \varepsilon)$，

    即 $P$ 从状态 $p$ 和空栈开始，

    读 $a$ 后转入状态 $r$，把 $t$ 推入栈。

    $P$ 可以读 $y$ 转移到 $s$，栈中保留 $t$。

    接着读 $b$ 后转到 $q$ 并把 $t$ 弹出栈。

    所以 $x$ 把 $P$ 从 $p$ 和空栈带到 $q$ 和空栈。

- 设第一步使用 $A_{pq} \to A_{pr}A_{rq}$，

    则都在 $k$ 步内 $A_{pr} \Rightarrow^* y$，$A_{rq} \Rightarrow^* z$，$x = yz$。

    根据归纳假设，$y$ 把 $P$ 从 $p$ 带到 $r$，

    $z$ 把 $P$ 从 $r$ 带到 $q$。

    因为在派生开始和结束时都是空栈，

    所以 $x$ 把 $P$ 从 $p$ 和空栈带到 $q$ 和空栈。



- <strong>断言 3\.17：</strong> 如果 $x$ 把 $P$ 从状态 $p$ 和空栈一起带到状态 $q$ 和空栈，则 $A_{pq}$ 产生 $x$。

<strong>证明：</strong>（对 $x$ 把 $P$ 从状态 $p$ 和空栈带到状态 $q$ 和空栈的步数进行归纳）。

\(1\) 0 步计算。

设计算开始和结束时都是状态 $p$，要证明 $A_{pp} \Rightarrow^* x$。

在 0 步内，$P$ 只有读空串的时间，所以 $x = \varepsilon$。

根据 $G$ 的构造，$G$ 有规则 $A_{pp} \to \varepsilon$。

\(2\) 假设断言对不超过 $k$ 步的计算成立。

要证明断言对 $k+1$ 步的计算也成立。

设 $P$ 有长度为 $k+1$ 的计算 $(p, \varepsilon), \ldots, (q, \varepsilon)$。根据是否在计算的中间某个地方栈为空，分两种情况。

![image\.png](/Firefly/uploads/computability-notes/image-149.png)

- 设计算为 $(p, \varepsilon), \ldots, (q, \varepsilon)$，

    中间没有空栈，所读输入符号为 $x$。

    则第一步入栈与最后一步出栈的是同一个符号。

    设第一步所读输入符号为 $a$，进入状态 $r$，

    最后一步在状态 $s$ 所读输入符号为 $b$，设 $x = avb$。

    那么有计算 $(p, \varepsilon), (r, t), \ldots, (s, t), (q, \varepsilon)$。

    所以 $\delta(p, a, \varepsilon)$ 包含 $(r, t)$ 且 $\delta(s, b, t)$ 包含 $(q, \varepsilon)$，（空串替换为 t，t 再替换回空串）

    所以 $G$ 中有规则 $A_{pq} \to aA_{rs}b$。

    对输入 $y$ 的计算是 $(r, t), \ldots, (s, t)$，长度不超过 $k-1$，

    不会出现空栈，

    所以对输入 $y$ 的计算可以是 $(r, \varepsilon), \ldots, (s, \varepsilon)$，长度不超过 $k-1$，

    根据归纳假设，有 $A_{rs} \Rightarrow^* y$，

    由于有规则 $A_{pq} \to aA_{rs}b$，

    所以 $A_{pq} \Rightarrow^* x$。

- 设计算为 $(p, \varepsilon), \ldots, (r, \varepsilon), \ldots, (q, \varepsilon)$，所读输入为 $x$。

    则计算 $(p, \varepsilon), \ldots, (r, \varepsilon)$ 不超过 $k$ 步，

    设所读输入为 $y$。

    计算 $(r, \varepsilon), \ldots, (q, \varepsilon)$ 也不超过 $k$ 步，

    设所读输入为 $z$，$x = yz$。

    根据归纳假设，有 $A_{pr} \Rightarrow^* y$，$A_{rq} \Rightarrow^* z$。

    由于 $G$ 中有规则 $A_{pq} \to A_{pr}A_{rq}$，

    所以 $A_{pq} \Rightarrow^* x$。 



## 第三部分：图灵机
### 3.1 图灵机的直观模型
![image\.png](/Firefly/uploads/computability-notes/image-134.png)

图灵机由以下部分组成：

- 有限状态控制器；

- 一条向右无限延伸的带子；

- 一个读写头，可以读、写、左移、右移；

- 停机状态，包括接受和拒绝。

与 DFA/PDA 相比，TM 的关键能力是：带子<strong>既能读又能写</strong>，而且读写头可以<strong>来回移动</strong>。这使得 TM 可以进行一般算法计算。

![image\.png](/Firefly/uploads/computability-notes/image-154.png)



### 3.2 单带图灵机的形式定义
可按教材标准写为七元组：

$M=(Q,\Sigma,\Gamma,\delta,q_0,q_{acc},q_{rej}),$

其中：

- $Q$ 是有限状态集；

- $\Sigma$ 是输入字母表，不含空白符；

- $\Gamma$ 是带字母表，满足 $\Sigma\subseteq\Gamma$ 且包含空白符 $\sqcup$（ppt 中空白符是 B）；

- $\delta:Q\times\Gamma\to Q\times\Gamma\times\{L,R\}$；

- $q_0$ 是初始状态；

- $q_{acc}$ 是<strong>停机接受状态</strong>；

- $q_{rej}$ 是<strong>停机拒绝状态</strong>，且 $q_{rej}\ne q_{acc}$。

<strong>格局：</strong> 一个格局描述 TM 某一时刻的完整状态：当前状态、带上内容、读写头位置。

- <strong>格局：</strong> $uqav$，

    - 当前状态：$q$，

    - 当前带内容：$uav$，

    - 当前扫描符号：$a$

- <strong>初始格局：</strong> $q_0w$，$w$ 是输入串

- <strong>接受格局：</strong> $uq_{acc}av$，

- <strong>拒绝格局：</strong> $uq_{rej}av$，

- <strong>停机格局：</strong> $uq_{acc}av$，$uq_{rej}av$，

### 单带图灵机格局的产生

$C_1$<strong>产生</strong>$C_2$<strong>：</strong>

- 如果 $\delta(q_i, b) = (q_j, c, L)$，则

    - $(q_i \text{ 状态，读入 } b \text{，把 } b \text{ 换成 } c \text{，并左移一位})$

    - $uaq_i bv$ 产生 $uq_j acv$

    - $q_i bv$ 产生 $q_j cv$

    - （在带左端不能向左移）

- 如果 $\delta(q_i, b) = (q_j, c, R)$，则

    - $(q_i \text{ 状态，读入 } b \text{，把 } b \text{ 换成 } c \text{，并右移一位})$

    - $uaq_i bv$ 产生 $uacq_j v$

### 单带图灵机 $M$ 接受输入 $w$

$M$<strong>接受输入</strong>$w$<strong>：</strong>

存在格局序列 $C_1, C_2, \ldots, C_k$，使得

1. $C_1 = q_0 w$ 是初始格局

2. 每个 $C_i$ 产生 $C_{i+1}$（$i = 1, \ldots, k-1$）

3. $C_k$ 是接受格局

$M$<strong>（识别，接受）的语言：</strong>

$L(M) = \{x \mid M \text{ 接受 } x\}$



### 3.3 图灵可识别与图灵可判定
### 图灵机的计算结果

- 停机接受

- 停机拒绝

- 不停机

#### 图灵可识别
语言 $A$ 是图灵可识别的，若存在 TM $M$，使得：

- 若 $w\in A$，$M$ 在$w$上停机接受；

- 若 $w\notin A$，$M$ 在$w$上停机拒绝，也可以<strong>永不停机</strong>。

这种机器叫识别器。

#### 图灵可判定
语言 $A$ 是图灵可判定的，若存在 TM $M$，使得：

- 若 $w\in A$，$M$ 在$w$上停机接受；

- 若 $w\notin A$，$M$ 在$w$上停机拒绝；

- 对所有输入 $w$，$M$ 都停机。

这种机器叫判定器。

<strong>关系：</strong>$\text{可判定} \subseteq \text{可识别}.$

判定器一定是识别器；识别器不一定是判定器。

### 一些等价术语

- <strong>图灵可识别</strong> = 递归可枚举 = 计算可枚举 = 半可判定 = 半可计算

- <strong>图灵可判定</strong> = 递归 = 可解 = 能行 = 可判定 = 可计算

![image\.png](/Firefly/uploads/computability-notes/image-129.png)

![image\.png](/Firefly/uploads/computability-notes/image-2.png)

![image\.png](/Firefly/uploads/computability-notes/image-21.png)

![image\.png](/Firefly/uploads/computability-notes/image-58.png)

![image\.png](/Firefly/uploads/computability-notes/image-55.png)

![image\.png](/Firefly/uploads/computability-notes/image-53.png)

### 3.4 判定器、识别器、转换器、枚举器
|装置|输入|输出/行为|作用|
|---|---|---|---|
|判定器|$x$|接受或拒绝，必停|判定 $x\in A$|
|识别器|$x$|属于则接受，不属于可不停机|半判定 $A$|
|转换器|$x$|输出 $y$|计算函数 $f(x)$|
|枚举器|空输入|依次打印 $x_1,x_2,\ldots$|生成语言中的串|

## 计算装置的工作方式：

- <strong>识别器：</strong> 输入 $x$，输出 $0/1/?$

- <strong>判定器：</strong> 输入 $x$，输出 $0/1$

- <strong>转换器：</strong> 输入 $x$，输出 $y$

- <strong>产生器：</strong> 输入 $0^n$，输出 $x_n$

- <strong>枚举器：</strong> 输入 $\varepsilon$，输出 $x_1, x_2, x_3, \ldots$

    - 无遗漏，无多余（可重复），无顺序



### 3.5 枚举器与识别器等价
<strong>定理 4\.13：</strong> 语言 $A$ 是图灵可识别的，当且仅当有枚举器枚举 $A$。

#### 方向一：有枚举器 **$\Rightarrow$** 有识别器
设枚举器 $E$ 枚举 $A$。构造识别器 $M$识别$A$：

$M =$ "对输入 $w$：

1. 运行 $E$，每当 $E$ 输出一个串时，将这个串与 $w$ 进行比较。

2. 若 $w$ 曾在 $E$ 的输出中出现过，则接受。"

若 $w\in A$，迟早会被打印，所以接受；若 $w\notin A$，永远不接受，可能不停机。

#### 方向二：有识别器 **$\Rightarrow$** 有枚举器
设识别器 $M$ 识别 $A$。枚举器 $E$ 按标准序列出所有串 $s_1,s_2,s_3,\ldots$，采用“交错模拟”：

$s_1, s_2, s_3, \ldots$ 是什么？

这是 $\Sigma^*$ 的一个<strong>枚举（排序）</strong>，即把所有可能的字符串按某种顺序排成一列。

具体例子：设 $\Sigma = \{0, 1\}$，按<strong>短者优先</strong>、同长度按字典序排序：

|序号|$s_i$|说明|
|---|---|---|
|$s_1$|$\varepsilon$|空串（长度 0）|
|$s_2$|0|长度 1|
|$s_3$|1|长度 1|
|$s_4$|00|长度 2|
|$s_5$|01|长度 2|
|$s_6$|10|长度 2|
|$s_7$|11|长度 2|
|$s_8$|000|长度 3|
|$s_9$|001|长度 3|
|\.\.\.|\.\.\.|\.\.\.|

设 TM $M$ 识别语言 $A$，则设计枚举器 $E$ 枚举 $A$。

设 $\Sigma^* = \{s_1, s_2, s_3, \ldots\}$。

$E =$ "忽略输入。

1. 对 $i = 1, 2, 3, \ldots$ 重复下列步骤。

2. 对 $s_1, s_2, s_3, \ldots, s_i$ 中每一个，让 $M$ 以其作为输入运行 $i$ 步。

    - <strong>第</strong>$i = 1$<strong>轮：</strong>对 $s_1$ 运行 $M$ <strong>1</strong> 步：

    |    输入|    运行步数|    结果|
    |---|---|---|
    |    $s_1 = \varepsilon$|    1 步|    若接受，打印 $\varepsilon$|

    - <strong>第</strong>$i = 2$<strong>轮：</strong>对 $s_1, s_2$ 各运行 $M$ <strong>2</strong> 步：

    |    输入|    运行步数|    说明|
    |---|---|---|
    |    $s_1 = \varepsilon$|    2 步|    之前跑了 1 步，现在继续到第 2 步|
    |    $s_2 = 0$|    2 步|    新加入的，从头跑 2 步|

    - <strong>第</strong>$i = 3$<strong>轮：</strong>对 $s_1, s_2, s_3$ 各运行 $M$ <strong>3</strong> 步：

    |    输入|    运行步数|    说明|
    |---|---|---|
    |    $s_1 = \varepsilon$|    3 步|    累计运行（之前2步 \+ 再跑1步）|
    |    $s_2 = 0$|    3 步|    累计运行（之前2步 \+ 再跑1步）|
    |    $s_3 = 1$|    3 步|    新加入的，从头跑 3 步|

    - \.\.\.

3. 如果有计算接受，则打印相应的 $s_j$。"



第 $i$ 轮，对 $s_1$,$\ldots,s_i$ 分别模拟 $M$ 的 $i$ 步；如果某次模拟接受，就打印对应串。

<strong>为什么要交错模拟。</strong> 不能先完整运行 $M(s_1)$，因为它可能永不停机，导致后面的串永远没机会被测试。



### 3.6 多带图灵机与单带图灵机等价
### 图灵机的等价变形

- 双向无穷带

- 多维带

- 多带

- 多头

- 非确定型

- ……

- TM 概念有很强的<strong>稳健性</strong>

![image\.png](/Firefly/uploads/computability-notes/image-98.png)

多带图灵机有 $k$ 条带，每一步同时读 $k$ 个符号、写 $k$ 个符号、移动 $k$ 个读写头。转移函数形如：

$\delta:Q\times\Gamma^k\to Q\times\Gamma^k\times\{L,R\}^k.$

<strong>定理 4\.8：</strong> 每个多带 TM 都有等价单带 TM。

<strong>证明：</strong> 单带 TM 用一条带“分段”模拟多条带：

```text
# 第一条带内容 # 第二条带内容 # 第三条带内容 # ... #
```

并用特殊标记表示每条虚拟带的读写头位置。

模拟一步多带机时：

1. 单带机从左到右扫描整条编码带，找到每条虚拟带头下符号；

2. 根据多带机转移函数决定写什么、向哪里移动；

3. 再扫描一次完成更新；

4. 若某虚拟带头向右越过当前分段末尾，就在该处插入空白符并整体右移。

<strong>结论：</strong> 多带机只是更方便、更高效，不增加可识别/可判定能力。

<strong>证明：</strong> 设计单带 TM $S$ 来模拟多带 TM $M$。



$S =$ "对于输入 $w = w_1 \ldots w_n$：

1. $S$ 在自己带上放上 $\#w_1 w_2 \ldots w_n \# B \# B \# \ldots \#$。（假设第 2 到第 k 条子带初始为空）

```text
初始输入：a a a b b b

S 的磁带布局：
# a a a b b b # B #
↑           ↑   ↑
第1段        分隔 第2段（空）
```

2. 为了模拟一步移动，

- $S$ 从标记左端点的第一个 $\#$ 开始扫描，

    - <strong>目标：</strong>确定每个虚拟读写头当前指向什么符号。

    - <strong>方法：</strong>S 的读写头从最左端开始，一格一格向右移动，检查"当前位置是否是某个虚拟读写头的位置"。

- 直到标记右端点的第 $k+1$ 个 $\#$（结尾了，一共k段，共k\+1个\#）。

- 确定虚拟读写头下的符号。

    ```text
    扫描位置 0(#):  虚拟带1读写头在位置1，读到 'a'
    扫描位置 7(#):  虚拟带2读写头在位置8，读到 'B'
    ```

    - 注意：S 需要知道 M 的每个读写头当前指向哪个符号。为此，S 的状态中要记住每个虚拟读写头的位置（或通过特殊标记符号来标记读写头位置）。

    ```text
    S 的状态控制器：
    {
        M的当前状态: q₁,
        
        虚拟带1: {位置:1, 读到符号:'a'},
        虚拟带2: {位置:8, 读到符号:'B'},
        
        要执行的操作（来自 δ_M(q₁, 'a', 'B')）:
            带1: 写 'a', 移动方向 R（右移）
            带2: 写 'B', 移动方向 R（右移）
            
        第二轮扫描阶段: 执行写操作
    }
    ```

- 然后 $S$ 进行第二次扫描，

    - <strong>目标：</strong>找到每个虚拟读写头的位置，执行"写"操作，并标记新的位置。

    - <strong>方法：</strong>S 的读写头再次从最左端开始，一格一格向右移动。

    - S 的状态需要记住：M 当前状态 \+ 两个虚拟读写头位置

- 根据 $M$ 的转移函数来更新带子。

    1. 任何时候，只要 $S$ 将某个虚拟读写头向右移动到某个 $\#$，$S$ 就在这个位置写下空白符，并把这个位置以右的所有内容向右平移一格。然后继续模拟。"

    ```text
    第一轮后：# a a a b b b # B B #
               ↑             ↑   ↑
              带1头         带2头 右端标记
    位置：     2             9    10
    ```

（…正确性证明…）

<strong>推论 4\.9：</strong> 图灵可识别当且仅当可用多带图灵机识别



### 3.7 非确定型图灵机与确定型图灵机等价
NTM 的转移函数为$\delta:Q\times\Gamma\to \mathcal{P}(Q\times\Gamma\times\{L,R,S\}).$

它的计算形成一棵计算树。只要存在一条分支接受，NTM 就接受。

![image\.png](/Firefly/uploads/computability-notes/image-51.png)







<strong>定理 4\.10：</strong> 每个 NTM 都有等价 DTM。

<strong>证明原理：</strong>用 DTM D 来模拟 NTM N

![image\.png](/Firefly/uploads/computability-notes/image-18.png)

为什么不用深度优先？因为某条分支可能无限长，<strong>深搜可能卡死</strong>，永远看不到其他接受分支。

DTM 可使用三条带：

1. 输入带：保存原输入；

2. 模拟带：模拟 NTM 某条分支；

3. 路径带：用一个字符串描述当前选择的是哪条分支。

DTM 按字典序枚举路径带内容，逐一模拟对应分支；若某分支接受，则接受。

<strong>证明：</strong>$D =$ "对输入 $w$：

1. 开始时，第一个带包含 $w$，其余两个带为空。

2. 把第一个带复制到第二个带上。

3. 在第二个带上模拟 $N$ 在输入 $w$ 上的某个非确定性计算分支。

    - 这个分支由第三个带指定。

    - 若遇到接受格局，则接受。

    - 否则进入第四步。

4. 在第三个带上，用字典序下的下一个串来替代原用的串。转到第二步。"

<strong>结论：</strong>$\text{DTM 与 NTM 识别同样的语言类。}$并且：

<strong>推论 4\.11：</strong> 图灵可识别当且仅当可用<strong>非确定型图灵机</strong>识别

$\text{图灵可识别} \iff \text{可由 NTM 识别},$

<strong>推论 4\.12：</strong> 图灵可判定当且仅当可用<strong>非确定型图灵机</strong>判定

$\text{图灵可判定} \iff \text{可由 NTM 判定}.$



## 第四部分：可判定性及可规约性
### 图灵机算法的描述方式

- <strong>形式描述：</strong>七元组

- <strong>实现描述</strong>

    - 用日常语言描述图灵机的运行（如何存放数据，如何移动读写头）

    - 不给出状态和转移函数的细节

- <strong>高层描述</strong>

    - 用日常语言描述算法

    - 不考虑对读写头和带的管理

- <strong>图灵机的输入总是串</strong>

    - 其他输入对象必须表示成串

        - 多项式，图，文法，自动机，\.\.\.，及其任意组合

- <strong>对象</strong>$O$<strong>的编码是</strong>$\langle O \rangle$

    - 多对象 $O_1, O_2, \ldots, O_k$ 的编码是 $\langle O_1, O_2, \ldots, O_k \rangle$

    - 可用多种合理方式来编码

    - 图灵机总能把一种编码翻译成另外一种编码

- <strong>带引号的锯齿状日常语言文字段</strong>

    - 将算法分成<strong>步骤</strong>，每个步骤可能包括图灵机计算的许多步

    - 用更深的<strong>缩进</strong>来表示算法的分块结构

    - 第一行描述机器的<strong>输入</strong>

    - 如果输入是对象的编码 $\langle A \rangle$，就隐含着如下含义：图灵机首先<strong>检查</strong>输入是否是所要对象的编码，如果不是就拒绝

![image\.png](/Firefly/uploads/computability-notes/image-90.png)

![image\.png](/Firefly/uploads/computability-notes/image-113.png)

    

### 4.1 可判定问题的含义
一个问题可判定，意思是存在一个对所有输入都停机的算法，能正确回答“是/否”。在形式语言框架中，把问题编码成语言 $A$，问题可判定等价于语言 $A$ 可判定。

<strong>问题和语言：</strong>编码

<strong>可判定性：</strong>存在处处停机的 TM 程序



### 4.2 关于正则语言的可判定问题
### <strong>4\.2\.1 DFA 接受性问题</strong>$A_{DFA}$

检测一个给定的确定型有穷自动机是否接受一共给定的串

定义：$A_{DFA}=\{\langle B,w\rangle\mid B\text{ 是 DFA 且 }B\text{ 接受 }w\}.$



<strong>定理 5\.1：</strong> $A_{DFA}$ 是可判定语言。

等价于：存在算法（图灵机），能判断"任意给定的DFA是否接受任意给定的字符串"，且这个算法对所有输入都必停机。这是因为DFA本身没有循环能力，模拟它运行总是有限步结束。

<strong>证明思路：</strong>

设计一个判定 $A_{DFA}$ 的 TM $M$。

$M$ 模拟 $B$ 在 $w$ 上的计算，想象一下写上述程序所需要的细节



<strong>证明：</strong> 设计一个判定 $A_{DFA}$ 的 TM $M$。

$M =$ "对输入 $\langle B, w \rangle$，其中 $B$ 是 DFA，$w$ 是串：

1. 在输入 $w$ 上模拟 $B$。

2. 若模拟以接受状态结束，则接受；若模拟以非接受状态结束，则拒绝。"



TM $M$ 首先检查输入 $\langle B, w \rangle$，

若 $w$ 不是字符串，或 $B$ 不是 $(Q, \Sigma, \delta, q_0, F)$ 形式，则拒绝。

然后 $M$ 执行模拟。

$M$ 通过在带上写下信息，来跟踪 $B$ 在 $w$ 上运行时当前状态和当前位置。

状态和位置的更新由 $B$ 的转移函数确定。

当 $M$ 处理完 $w$ 最后一个符号时，如果 $B$ 处于接受状态，则 $M$ 接受，否则拒绝。



### <strong>4\.2\.2 NFA 接受性问题</strong>$A_{NFA}$

检测一个给定的非确定型有穷自动机是否接受一共给定的串

$A_{NFA}=\{\langle B,w\rangle\mid B\text{ 是 NFA 且 }B\text{ 接受 }w\}.$



<strong>定理 5\.2：</strong>$A_{NFA}$ 是可判定语言。

<strong>证明思路：</strong>

<strong>证法一：</strong>用 <strong>NTM</strong> $N$ 模拟 NFA $B$ 在 $w$ 上计算

<strong>证法二：</strong>先把 NFA $B$ 转化为等价的 DFA $C$，再用 TM $M$ 模拟 $C$ 在 $w$ 上计算

<strong>证明：</strong> 构造判定 $A_{NFA}$ 的 TM $N$。

$N =$ "对于输入 $\langle B, w \rangle$，$B$ 是 NFA，$w$ 是串：

1. 把 NFA $B$ 转化成等价 DFA $C$（书本定理 2\.19）。

2. 在输入 $\langle C, w \rangle$ 上运行 TM $M$（书本定理 5\.1）。

3. 如果 $M$ 接受，则接受，否则拒绝。" 



### <strong>4\.2\.3 正则表达式派生性问题</strong>$A_{REX}$

一个正则表达式是否派生一个给定的串

$A_{REX}=\{\langle R,w\rangle\mid R\text{ 是正则表达式且 }w\in L(R)\}.$

<strong>证明方法：</strong>把正则表达式 $R$ 转成等价 NFA/DFA，再判定 NFA/DFA 是否接受 $w$。

<strong>证明：</strong> 下面的 TM $P$ 判定 $A_{REX}$。

$P =$ "对于输入 $\langle R, w \rangle$，$R$ 是 RE，$w$ 是串：

1. 把 REX $R$ 转化成等价 DFA $A$（定理 2\.28）。

2. 在输入 $\langle A, w \rangle$ 上运行 TM $M$（定理 5\.1）。

3. 如果 $M$ 接受，则接受，否则拒绝。" 



注：对于可判定性问题，把 DFA, NFA, REX 提供给 TM 都是等价的，因为 TM 能在这三种编码之间进行互相转换。



### <strong>4\.2\.4 DFA 空性问题</strong>$E_{DFA}$

一个 DFA 是否根本不接受任何串？

$E_{DFA}=\{\langle A\rangle\mid A\text{ 是 DFA 且 }L(A)=\varnothing\}.$

<strong>判定方法：</strong> 从初态开始做可达性标记；若没有接受态可达，则语言为空；否则非空。

<strong>证明：</strong> TM $T =$ "对于输入 $\langle A \rangle$，$A$ 是 DFA：

1. 标记初始状态。

2. 重复下列步骤，直到所有状态都被标记。

3. 对于一个状态，如果有一个到达它的转移是从某个已经标记过的状态出发的，则将它标记。

4. 如果没有接受状态被标记，则接受，否则拒绝。" 



### <strong>4\.2\.5 DFA 等价性问题</strong>$EQ_{DFA}$

检查两个 DFA 是否识别同一个语言

$EQ_{DFA}=\{\langle A,B\rangle\mid A,B\text{ 是 DFA 且 }L(A)=L(B)\}.$

<strong>证明思路：</strong>使用对称差：

![image\.png](/Firefly/uploads/computability-notes/image-42.png)

$L(A)=L(B)\iff L(A)\triangle L(B)=\varnothing.$

$L(A) \oplus L(B) = (L(A) - L(B)) \cup (L(B) - L(A))$

即：只在其中一个语言中，但不在两个语言交集中的字符串。

|属于 $L(A)$？|属于 $L(B)$？|属于 $L(A) \oplus L(B)$？|
|---|---|---|
|✅ 是|✅ 是|❌ <strong>否</strong>|
|✅ 是|❌ 否|✅ <strong>是</strong>|
|❌ 否|✅ 是|✅ <strong>是</strong>|
|❌ 否|❌ 否|❌ <strong>否</strong>|

正则语言对于布尔运算封闭，因此对于对称差运算封闭

两个语言相等当且仅当其对称差为空语言

正则语言是否为空，这是可判定的（定理 5\.4）

<strong>证明：</strong>

TM $F =$ "对于输入 $\langle A, B \rangle$，$A$ 和 $B$ 都是 DFA：

1. 构造 DFA $C$ 使得 $L(C) = L(A) \oplus L(B)$（定理 2\.12 等）；

2. 在输入 $\langle C \rangle$ 上运行 TM $T$（定理 5\.4，判断是否为$E_{DFA}$）

3. 如果 $T$ 接受，则接受，否则拒绝。" 

|T 的结果|含义|F 的输出|
|---|---|---|
|T 接受 $\langle C \rangle$|$L(C) = \emptyset$|<strong>接受</strong> $\langle A, B \rangle$|
|T 拒绝 $\langle C \rangle$|$L(C) \neq \emptyset$|<strong>拒绝</strong> $\langle A, B \rangle$|



### 4.3 关于上下文无关文法的可判定问题
### <strong>4\.3\.1 CFG 派生性问题</strong>$A_{CFG}$

检查一个 CFG 是否派生一个特定的串

$A_{CFG}=\{\langle G,w\rangle\mid G\text{ 是 CFG 且 }G\text{ 派生 }w\}.$

<strong>定理 5\.6：</strong>$A_{CFG}$  可判定。



<strong>证明思路：</strong>

让 $G$ 遍历所有派生，以确定哪一个是 $w$ 的派生

- 如果 $G$ 产生 $w$，这个过程将终止

- 如果 $G$ 不产生 $w$，这个过程将不终止

- 这样只能证明 $A_{CFG}$ 是图灵可识别语言

采用 CNF（Chomsky 范式（上下文无关文法）），派生长度为 $n$ 的串恰好需要 $2n-1$ 步

- 先把 $G$ 转换成等价的 CNF，再检查所有长度为 $2n-1$ 的派生



<strong>证明：</strong> TM $S =$ "对于输入 $\langle G, w \rangle$，$G$ 是 CFG：

1. 把 $G$ 转化成等价的 CNF（定理 3\.6）。

2. 列出 $\max\{1, 2|w|-1\}$ 步的所有派生。

3. 如果这些派生中有一个产生 $w$，则接受，否则拒绝。" 



### <strong>4\.3\.2 CFG 空性问题</strong>$E_{CFG}$

检查一共 CFG 是否不派生任何串

$E_{CFG}=\{\langle G\rangle\mid G\text{ 是 CFG 且 }L(G)=\varnothing\}.$

<strong>定理5\.7：</strong>$E_{CFG}$是可判定语言

<strong>证明思路：</strong> TM $S$ 逐个检查所有可能的 $w$

- $w$ 有无限多个，这个过程将不终止

    - 检查初始变元是否产生一个终结符串

    - 检查每个变元是否产生一个终结符串

类似于 DFA 的标记算法

<strong>证明：</strong> TM $R =$ "对于输入 $\langle G \rangle$，$G$ 是 CFG：

1. 将 $G$ 中所有终结符做上标记；

2. 重复下列步骤，直到找不到可以做标记的变元

3. 如果 $G$ 有规则 $A \to U_1 U_2 \ldots U_k$，且 $U_1, U_2, \ldots, U_k$ 都已做过标记，则将变元 $A$ 做上标记。

4. 如果初始变元没有被标记，则接受，否则拒绝。" 



#### 4.3.3 CFG 等价性问题
两个 CFG 是否派生同一个语言

$EQ_{CFG}=\{\langle G,H\rangle\mid L(G)=L(H)\}.$



PPT 指出 $EQ_{CFG}$ 不可判定。注意：DFA 等价性可判定，CFG 等价性不可判定，这是常见对比考点。



#### 4.3.4 每个 CFL 都可判定
<strong>证明思路：</strong>

设 $A$ 是 CFL，把 $A$ 的 PDA 转化成 NTM

PDA 某些计算分支可能不停机，NTM 的计算分支也可能不停机，所以不是判定器

使用判定 $A_{CFG}$ 的 TM $S$（定理 5\.6）。



<strong>证明：</strong> 设 $A$ 是 CFL，$G$ 是 $A$ 的 CFG，

下面设计判定 $A$ 的 TM $M_G$。

$M_G =$ "对于输入 $w$：

1. 在输入 $\langle G, w \rangle$ 上运行 TM $S$（定理 5\.6<strong>：</strong>$A_{CFG}$  可判定）。

2. 如果这个机器接受，则接受，否则拒绝。" 



### 4.4 图灵机接受性问题 **$A_{TM}$** 不可判定
定义：检查一个图灵机是否接受一个给定的串

$A_{TM}=\{\langle M,w\rangle\mid M\text{ 是 TM 且 }M\text{ 接受 }w\}.$

<strong>定理 5\.9：</strong> $A_{TM}$ 是不可判定的

$A_{TM}$ 不可判定的意思是：<strong>不存在任何图灵机</strong>，能够对所有的输入 $\langle M, w \rangle$ 都停机，并正确判断 $M$ 是否接受 $w$。

<strong>证明思路：</strong>

$A_{TM} = \{\langle M, w \rangle \mid \text{TM } M \text{ 接受串 } w\}$

$D_{TM} = \{\langle M \rangle \mid \text{TM } M \text{ 接受串 } \langle M \rangle\}$

|语言|定义|含义|
|---|---|---|
|$A_{TM}$|$\{ \langle M, w \rangle \mid M \text{ 是 TM}, M \text{ 接受 } w \}$|图灵机 $M$ 是否接受输入 $w$|
|$D_{TM}$|$\{ \langle M \rangle \mid M \text{ 是 TM}, M \text{ 接受 } \langle M \rangle \}$|图灵机 $M$ 是否接受<strong>它自己的编码</strong>|

举个例子：

$M$ 识别语言 $\{0^n 1^n \mid n \ge 0\}$：

```text
状态：{q0, q1, q2, q3, q_accept, q_reject}
字母表：{0, 1, X, Y, B}  (B是空白)
转移函数：
  δ(q0, 0) = (q1, X, R)   // 读0，改写X，右移
  δ(q0, Y) = (q3, Y, R)   // 进入检查阶段
  δ(q1, 0) = (q1, 0, R)   // 跳过0
  δ(q1, 1) = (q2, Y, L)   // 读1，改写Y，左移
  ...（省略其他转移）
初态：q0
接受态：{q_accept}
```

$\langle M \rangle$ 的一种可能编码

```text
"STATES:q0,q1,q2,q3,q_accept,q_reject;
 ALPHABET:0,1,X,Y,B;
 TRANSITIONS:
   (q0,0)->(q1,X,R),
   (q0,Y)->(q3,Y,R),
   (q1,0)->(q1,0,R),
   (q1,1)->(q2,Y,L),
   ...;
 START:q0;
 ACCEPT:q_accept"
```

$D_{TM}$ 是 $A_{TM}$ 的特例（把自己的编码作为输入而接受）

用<strong>对角化法</strong>证明 $D_{TM}$ 不可判定



#### 对角化证明思路
反设存在判定器 $H$ 判定 $A_{TM}$：

$H(\langle M,w\rangle)=
\begin{cases}
\text{accept},& M\text{ 接受 }w,\\
\text{reject},& M\text{ 不接受 }w.
\end{cases}$

构造机器 $D$：（举反例证伪即可）

1. 对于输入 $\langle M\rangle$，M 是 TM；

2. 运行 $H(\langle M,\langle M\rangle\rangle)$；

3. 如果 $H$ 接受，则 $D$ 拒绝；

4. 如果 $H$ 拒绝，则 $D$ 接受。

于是：

$D(\langle M\rangle)=\neg H(\langle M,\langle M\rangle\rangle).$

令 $M=D$，考虑 $D(\langle D\rangle)$：

- 若 $D$ 接受 $\langle D\rangle$，则根据定义 $H$ 应接受，于是 $D$ 应拒绝，矛盾；

- 若 $D$ 拒绝 $\langle D\rangle$，则根据定义 $H$ 应拒绝，于是 $D$ 应接受，矛盾。

所以 $H$ 不存在，$A_{TM}$ 不可判定。

对角线上一个拒绝另一个就接受，绝对矛盾

![image\.png](/Firefly/uploads/computability-notes/image-19.png)

![image\.png](/Firefly/uploads/computability-notes/image-131.png)

![image\.png](/Firefly/uploads/computability-notes/image-30.png)

![image\.png](/Firefly/uploads/computability-notes/image-76.png)

![image\.png](/Firefly/uploads/computability-notes/image-92.png)

<strong>考试关键。</strong> 一定要写“构造反向机器 $D$，再令它输入自身描述 $\langle D\rangle$”。



### 4.5 可判定、可识别与非图灵可识别语言
<strong>定理 5\.16：</strong>$A\text{ 可判定}\iff A\text{ 和 }\overline{A}\text{ 都图灵可识别}.$

ppt 中写作$A^c = \overline{A}$

#### 证明
$\Rightarrow$<strong>：</strong> 若 $A$ 可判定，则补语言 $\overline A$ 也可判定，因为可判定语言但是可识别的，因此二者都可识别。

$\Leftarrow$<strong>：</strong> 若 $A$ 由 $M_1$ 识别，$\overline A$ 由 $M_2$ 识别。构造判定器 $M$：

1. 输入 $w$；

2. 并行运行 $M_1(w)$ 和 $M_2(w)$；

3. 若 $M_1$ 接受，则接受；若 $M_2$ 接受，则拒绝。

因为任意 $w$ 要么在 $A$ 中，要么在 $\overline A$ 中，所以两个机器之一必然接受，$M$ 必停。



设 TM $M_1$ 识别 $A$，TM $M_2$ 识别 $A^c$。

下面构造 TM $M$ 判定 $A$。

$M =$ "对输入 $w$：

1. 在输入 $w$ 上并行运行 $M_1$ 和 $M_2$。

- $M$ 有两个带，

- 一个模拟 $M_1$，一个模拟 $M_2$，

- $M$ 交替地模拟两个机器的一步，

- 直到其中一个停机

2. 若 $M_1$ 接受，就接受；

若 $M_2$ 接受，就拒绝。"



下面证明 $M$ 确实判定 $A$。

1. 任何一个串 $w$ 要么在 $A$ 中，要么在 $A^c$ 中。

所以 $M_1$ 和 $M_2$ 必有一个接受 $w$。

因为当 $M_1$ 或 $M_2$ 接受时，$M$ 就停机，所以 $M$ 总会停机。

2. $M$ 接受所有 $A$ 中的串，拒绝所有不在 $A$ 中的串，

所以，$M$ 判定 $A$。 



<strong>推论5\.17：</strong>$\overline{A_{TM}}$ 不是图灵可识别的。若它可识别，而 $A_{TM}$ 本身可识别，则 $A_{TM}$ 可判定，矛盾。

![image\.png](/Firefly/uploads/computability-notes/image-141.png)

![image\.png](/Firefly/uploads/computability-notes/image-127.png)



### 4.6 停机问题 **$HALT_{TM}$** 不可判定
图灵机的停机问题，定义：确定一个给定的图灵机是否在一个给定的输入上停机

$HALT_{TM}=\{\langle M,w\rangle\mid M\text{ 在输入 }w\text{ 上停机}\}.$

<strong>定理 6\.1：</strong>$HALT_{TM}$ 不可判定。

<strong>证明思路：</strong>

假设 $HALT_{TM}$ 可判定，用这个假设来证明 $A_{TM}$ 可判定（规约思想，矛盾！）

|语言|定义|含义|
|---|---|---|
|$A_{TM}$|$\{ \langle M, w \rangle \mid M \text{ 接受 } w \}$|<strong>接受问题</strong>：$M$ 是否接受 $w$？|
|$HALT_{TM}$|$\{ \langle M, w \rangle \mid M \text{ 在 } w \text{ 上停机} \}$|<strong>停机问题</strong>：$M$ 在 $w$ 上是否<strong>停机</strong>（接受或拒绝，不死循环）？|

<strong>证明：</strong>（反证）假设 TM $R$ 判定 $HALT_{TM}$，

则构造 TM $S$ 判定 $A_{TM}$，这是矛盾（定理 5\.9）！

$S =$ "在输入 $\langle M, w \rangle$ 上，其中 $M$ 是 TM，$w$ 是串：

1. 在输入 $\langle M, w \rangle$ 上运行 TM $R$。

2. 如果 $R$ 拒绝，则拒绝。（R 拒绝，则 M 必不停机，反之亦然）

3. 如果 $R$ 接受，则在 $w$ 上模拟 $M$，直到 $M$ 停机。

4. 若 $M$ 已接受，则接受；若 $M$ 已拒绝，则拒绝。" 

|符号|含义|
|---|---|
|<strong>S</strong>|假设存在的、能判定 $A_{TM}$ 的图灵机|
|<strong>R</strong>|$A_{TM}$ 的判定器（假设存在）|
|<strong>M</strong>|任意一台图灵机|
|<strong>w</strong>|输入字符串|
|<strong>⟨M,w⟩</strong>|图灵机 M 和输入 w 的编码对|

![image\.png](/Firefly/uploads/computability-notes/image-43.png)



### 4.7 其他不可判定问题与归约思想
#### 归约的直观描述

把<strong>做事情 A</strong> 归结为<strong>做事情 B，</strong>利用做事情 B 来帮助做事情 A

假如 A 可以归约到 B（B\-\>A），那么

- 如果可以做 B，则可以做 A

- 如果不可以做 A，则不可以做 B



### <strong>4\.7\.1 图灵机空性问题</strong>$E_{TM}$

一个图灵机是否根本不接受任何串？

$E_{TM}=\{\langle M\rangle\mid L(M)=\varnothing\}.$

<strong>定理6\.2：</strong> $E_{TM}$ 不可判定。

<strong>证明思路：</strong> 反证法

假设 $E_{TM}$ 是可判定的，利用这个假设来证明 $A_{TM}$ 是可判定的。

在输入 $\langle M, w \rangle$ 上，

先把 $M$ 修改成 $M_1$，$M_1$ 拒绝除 $w$ 外的所有其他输入串，

$M_1$ 在 $w$ 上完全模拟 $M$；

然后判定 $L(M_1)$ 是否为空：

若 $L(M_1)$ 为空，则拒绝；

若 $L(M_1)$ 非空，则接受。

<strong>证明：</strong>（反证）假设 TM $R$ 判定 $E_{TM}$，

则构造 TM $S$ 判定 $A_{TM}$。

先描述修改型图灵机 $M_1$。

$M_1 =$ "在输入 $x$ 上：

1. 如果 $x \neq w$，则拒绝。

2. 如果 $x = w$，则在 $x$ 上运行 $M$，

当 $M$ 接受时，就接受。"



$S =$ "在输入 $\langle M, w \rangle$ 上：

1. 用 $M$ 和 $w$ 的描述来构造上述 TM $M_1$。

2. 在输入 $M_1$ 上运行 $R$。

3. 如果 $R$ 接受，则拒绝；

如果 $R$ 拒绝，则接受。"



若 $R$ 是 $E_{TM}$ 的判定器，

则 $S$ 是 $A_{TM}$ 的判定器，

但是 $A_{TM}$ 不可判定，

所以 $E_{TM}$ 不可判定。 

![image\.png](/Firefly/uploads/computability-notes/image-106.png)

![image\.png](/Firefly/uploads/computability-notes/image-38.png)



### <strong>4\.7\.2 图灵机正则性问题</strong>$REGULAR_{TM}$

检查一个图灵机是否有一个等价的有穷自动机

$REGULAR_{TM}=\{\langle M\rangle\mid L(M)\text{ 是正则语言}\}.$

<strong>定理 6\.3：</strong> $REGULAR_{TM}$ 是不可判定的。

<strong>证明思路：</strong> 使用从 $A_{TM}$ 出发的归约

假设 TM $R$ 判定 $REGULAR_{TM}$。

利用 $R$，构造 TM $S$ 判定 $A_{TM}$。

设 $S$ 输入为 $\langle M, w \rangle$，

用 $\langle M \rangle$ 构造 $\langle M_2 \rangle$，使得：

当 $M$ 不接受 $w$ 时，$M_2$ 识别非正则语言 $\{0^n 1^n \mid n \ge 0\}$

当 $M$ 接受 $w$ 时，$M_2$ 接受正则语言 $\Sigma^*$

如何构造 $M_2$？

$M_2$ 自动接受 $\{0^n 1^n \mid n \ge 0\}$ 中的所有串

如果 $M$ 接受 $w$，$M_2$ 就接受所有其他串



<strong>证明：</strong> 假设 TM $R$ 判定 $REGULAR_{TM}$，

下面构造 TM $S$ 判定 $A_{TM}$。

$S =$ "对于输入 $\langle M, w \rangle$，$M$ 是 TM，$w$ 是串：

1. 构造下述 TM $M_2$

$M_2 =$ "在输入 $x$ 上：

a\) 如果 $x$ 具有形式 $0^n 1^n$，则接受；

b\) 如果 $x$ 不具有此形式，则在 $w$ 上运行 $M$。

若 $M$ 接受 $w$，则接受。"

2. 在输入 $\langle M_2 \rangle$ 上运行 $R$。

3. 如果 $R$ 接受，则接受；

如果 $R$ 拒绝，则拒绝。" 

![image\.png](/Firefly/uploads/computability-notes/image-8.png)

![image\.png](/Firefly/uploads/computability-notes/image-52.png)



### <strong>4\.7\.3 图灵机等价性问题</strong>$EQ_{TM}$

检查两个给定的图灵机是否识别相同的语言

$EQ_{TM}=\{\langle M_1,M_2\rangle\mid L(M_1)=L(M_2)\}.$

<strong>定理 6\.4：</strong> $EQ_{TM}$ 是不可判定的。

<strong>证明思路：</strong>

使用从 $E_{TM}$ 出发的归约

若两个机器中有一个识别空语言，则这两个机器等价当且仅当另一个机器也识别空语言

$E_{TM}$ 是 $EQ_{TM}$ 的特例，其中一个机器识别空语言



<strong>证明：</strong> 假设 TM $R$ 判定 $EQ_{TM}$，

下面构造 TM $S$ 判定 $E_{TM}$。

$S =$ "对于输入 $\langle M \rangle$，$M$ 是 TM：

1. 在输入 $\langle M, M_1 \rangle$ 上运行 $R$，$M_1$ 是拒绝所有输入的 TM。

2. 如果 $R$ 接受，则接受；如果 $R$ 拒绝，则拒绝。" 

![image\.png](/Firefly/uploads/computability-notes/image-138.png)



### 4.8 m\-归约
#### 规约的形式化

- <strong>多一（many\-one）归约</strong> — 传统叫法

- <strong>映射（mapping）归约</strong> — Sipser 叫法

<strong>可计算函数：</strong>对于某个函数 $f: \Sigma^* \to \Sigma^*$，

如果存在图灵机 $M$，使得在每个输入 $w$ 上 $M$ 停机，且此时 $f(w)$ 出现在带上，

则说 $f$ 是<strong>可计算函数</strong>。

![image\.png](/Firefly/uploads/computability-notes/image-82.png)

#### m 归约的形式定义

设 $A$ 和 $B$ 是语言，如果

存在可计算函数 $f: \Sigma^* \to \Sigma^*$，使得

对于每个 $x$，

$\mathbf{x} \in A \iff f(x) \in B$

则说语言 $A$ 可 <strong>m 归约</strong>到语言 $B$，记作$A \le_m B$

称函数 $f$ 为从 $A$ 到 $B$ 的归约，记作

$A \le_m B \text{ via } f$

![image\.png](/Firefly/uploads/computability-notes/image-84.png)



<strong>核心性质</strong>

<strong>定理 6\.16：</strong> 若 $A \le_m B$ 且 $B$ 可判定，则 $A$ 可判定。

（可判定语言类在 m 归约下封闭）

<strong>证明：</strong> 设 $A \le_m B$ via $f$，$M$ 判定 $B$，

则 $N$ 判定 $A$。

TM $N =$ "对于输入 $w$，

1. 计算 $f(w)$。

2. 在 $f(w)$ 上运行 $M$，输出 $M$ 的输出。" 

![image\.png](/Firefly/uploads/computability-notes/image-1.png)

$A \le_m B \text{ via } f \iff \overline{A} \le_m \overline{B} \text{ via } f$

![image\.png](/Firefly/uploads/computability-notes/image-121.png)

$A \le_m \overline{B} \text{ via } f \iff \overline{A} \le_m B \text{ via } f$

![image\.png](/Firefly/uploads/computability-notes/image-63.png)

![image\.png](/Firefly/uploads/computability-notes/image-93.png)

![image\.png](/Firefly/uploads/computability-notes/image-20.png)

![image\.png](/Firefly/uploads/computability-notes/image-40.png)

改造：只有 M’接受时才停机，其他情况下都循环

归约函数 $f$ 的定义：$f(\langle M, w \rangle) = \langle M', w \rangle$

即：把输入 $\langle M, w \rangle$ 转换成 $\langle M', w \rangle$



m 归约的传递性：若 $A \le_m B$，且 $B \le_m C$，则 $A \le_m C$。 \#

<strong>定理 6\.22：</strong> 若 $A \le_m B$，且 $B$ 图灵可识别，则 $A$ 图灵可识别。

（图灵可识别语言类对 m 归约封闭）



<strong>证明：</strong> 类似定理 6\.16 证明，$M, N$ 是识别器而非判定器。 

<strong>定理 6\.23：</strong> 若 $A \le_m B$，且 $A$ 非图灵可识别，则 $B$ 非图灵可识别。 \#



<strong>定理 6\.24：</strong> $EQ_{TM}$ 和 $\overline{EQ_{TM}}$ 都非图灵可识别。

<strong>证明：</strong> 

\(1\) $\overline{A_{TM}} \le_m EQ_{TM}$

TM $F =$ "在输入 $\langle M, w \rangle$ 上（$M$ 是 TM，$w$ 是串）：

1. 构造 TM $M_1$ 和 $M_2$；

    $M_1 =$ "对任何输入 $x$，拒绝。"

    $M_2 =$ "对任何输入 $x$，接受当且仅当 $M$ 接受 $w$。"

2. 输出 $\langle M_1, M_2 \rangle$"。 

    注：$L(M_1) = \emptyset$，$L(M_2) = \begin{cases} \Sigma^*, & M \text{ 接受 } w \\ \emptyset, & M \text{ 不接受 } w \end{cases}$

\(2\) $\overline{A_{TM}} \le_m \overline{EQ_{TM}}$

TM $G =$ "在输入 $\langle M, w \rangle$ 上（$M$ 是 TM，$w$ 是串）：

1. 构造 TM $M_1$ 和 $M_2$；

$M_1 =$ "对任何输入 $x$，接受。"

$M_2 =$ "对任何输入 $x$，接受当且仅当 $M$ 接受 $w$。"

2. 输出 $\langle M_1, M_2 \rangle$"。 \#

注：$L(M_1) = \Sigma^*$，$L(M_2) = \begin{cases} \Sigma^*, & M \text{ 接受 } w \\ \emptyset, & M \text{ 不接受 } w \end{cases}$



设 $A \le_m B$ via $f$，要证明 $B$ 不可判定：

1. 选择已知不可判定语言 $A$，通常是 $A_{TM}$ 或 $HALT_{TM}$；

2. 假设 $B$ 有判定器；

3. 给定 $A$ 的输入 $x$，构造 $f(x)$；

4. 证明 $x\in A\iff f(x)\in B$；

5. 用 $B$ 的判定器判定 $A$，矛盾。

### 4.9 递归定理
#### 自引用
<strong>引理 7\.1：</strong> 存在可计算函数 $q: \Sigma^* \to \Sigma^*$，对任意串 $w$，$q(w)$ 是图灵机 $P_w$ 的描述，TM $P_w$ 打印出 $w$，然后停机。

<strong>说明：</strong>

- $\forall w, q(w) = \langle P_w \rangle$

- $\forall x, P_w(x) = w$

- 对任何 $w$，$P_w$ 都存在

- 从 $w$ 得到 $\langle P_w \rangle$ 的过程，是可计算的



<strong>证明：</strong> TM $Q =$ "对输入串 $w$：

1. 构造下列 TM $P_w$：

$P_w =$ "对任何输入：

a\) 抹去输入；

b\) 写下 $w$；

c\) 停机。"

2. 输出 $\langle P_w \rangle$。" \#



### 递归定理

<strong>定理 7\.2（递归定理）：</strong> 设 TM $T$ 计算函数 $t: \Sigma^* \times \Sigma^* \to \Sigma^*$，则存在 TM $R$ 计算函数 $r: \Sigma^* \to \Sigma^*$，使得 $\forall w, r(w) = t(\langle R \rangle, w)$。

<strong>说明：</strong> 若 $t(x, y)$ 是 2 元函数，则固定输入 $x = c$ 后，变成 1 元函数 $t(c, y)$

- 若 $t(x, y)$ 可计算，则对任意 $c$，$t(c, y)$ 也可计算

- 递归定理说：存在 $c$，使得 $c$ 就是计算 $t(c, y)$ 的程序！

```text
step1：构造A=P<BT>
A = "对任何输入：
    1. 抹去输入
    2. 写下 ⟨BT⟩
    3. 停机"

step2：构造B
B = "输入 w：
    1. 计算 q(w)    ← 引理7.1：从程序描述得到编码
    2. 输出 q(w)"

step3：合成R，<R>=<ABT>
R = "输入 w：
    1) 运行 A，在带上写下 ⟨BT⟩；
    2) 运行 B，在带上写下 ⟨A⟩，
       拼装出 ⟨ABT⟩；
    3) 对 ⟨ABT, w⟩ 运行 T。"
```



<strong>直观解释</strong> 如果 $t(x,w)$ 是一个“把程序描述 $x$ 当参数”的可计算过程，那么存在某个程序 $R$，它在运行时可以把自己的描述 $\langle R\rangle$ 填入第一个参数。



<strong>考试理解：</strong> 递归定理允许我们在 TM 的定义中写“获得自己的描述 $\langle M\rangle$”。这并不是魔法，而是定理保证存在这样的机器。



#### 应用方向
<strong>TM 自引用定义</strong>

- 可以在 $M$ 的定义中使用 $\langle M \rangle$，即 TM $M =$ "……$\langle M \rangle$……" 是合法定义！

    - 先定义 TM $T =$ "对输入 $x, y$：……$x$……"

    - 根据递归定理，存在这样的 $R$

    - TM $R =$ "对输入 $y$：……$\langle R \rangle$……"

    ```text
    第一步：定义辅助TM T
    
    T = "输入 x, y:
        ...... x ......"     ← x 是占位符，将来会被替换成 ⟨R⟩
        
    T 是一个"模板"，接受两个参数，其中第一个参数 x 会被用在定义中。
    
    第二步：应用递归定理
    
    根据递归定理，存在 TM R，使得：
    R(y)=T(⟨R⟩,y) 
    
    即：把模板 T 中的 x 替换为 R 自己的编码 ⟨R⟩。
    
    第三步：得到自引用 TM R
    
    R = "输入 y:
        ...... ⟨R⟩ ......"   ← 合法！R 知道自己的编码
    ```

<strong>代替对角化</strong>

- 证明 $A_{TM}$ 不可判定，$MIN_{TM}$ 不可识别

```text
证明A TM不可判定
 
 old：
 D = "输入 ⟨M⟩:
    1. 在 ⟨M, ⟨M⟩⟩ 上运行 S（假设的 A_TM 判定器）
    2. 若 S 接受，则拒绝
    3. 若 S 拒绝，则接受"
    
问题：D 的定义中用了 ⟨M⟩，但没有直接用 ⟨D⟩。
 
 new：
 R = "输入 w:
    1. 获取自己的编码 ⟨R⟩
    2. 在 ⟨R, w⟩ 上运行假设的判定器 S
    3. 做相反的事"
```

```text
证明MIN TM不可识别

R = "输入 w:
    1. 获取 ⟨R⟩
    2. 找到比自己更小的等价机器 M'
    3. 如果存在，则模拟 M'；否则停机"
```

<strong>不动点定理</strong>

- $\forall$ 可计算函数 $t$，$\exists$ TM $F$，$L(t(\langle F \rangle)) = L(F)$



<strong>引理：</strong> $A_{TM}$ 是图灵可识别的

$A_{TM}$ 是图灵可识别的意味着：<strong>存在一台图灵机</strong>，当 $M$ 接受 $w$ 时它能检测到并停机接受；但当 $M$ 不接受 $w$ 时，它可能停机拒绝，也可能永远运行下去。

<strong>证明思路：</strong>

- 设计 TM $U$ 模拟 $M$ 在 $w$ 上的计算

    - 当 $M$ 在 $w$ 上停机接受时，$U$ 接受

    - 当 $M$ 在 $w$ 上停机拒绝时，$U$ 拒绝

    - 当 $M$ 在 $w$ 上不停机时，$U$ 也不停机

- 这样的 $U$ 称为<strong>通用机</strong>

    - 注意 $U$ 是固定的，$M$ 和 $w$ 是任意的

    - 程序设计经验表明这样的 $U$ 存在

对于任意的 TM $M$ 和输入 $w$，$U$ 在 $\langle M, w \rangle$ 上的运行结果与 $M$ 在 $w$ 上的运行结果是一样的，即 $U(\langle M, w \rangle) = M(w)$。

<strong>证明：</strong> 设计 TM $U$ 来识别 $A_{TM}$。

$U =$ "对于输入 $\langle M, w \rangle$，$M$ 是 TM，$w$ 是串：

1. 在输入 $w$ 上模拟 $M$。

2. 如果 $M$ 进入接受状态，则接受；如果 $M$ 进入拒绝状态，则拒绝。" \#



<strong>定理 7\.3：</strong> $A_{TM}$ 是不可判定的。

<strong>证明：</strong>（反证）假设 TM $H$ 判定 $A_{TM}$。

如下构造 TM $B$。

$B =$ "对于输入 $w$：

1. 由递归定理得到它自己的描述 $\langle B \rangle$

2. 在输入 $\langle B, w \rangle$ 上运行 $H$

3. 若 $H$ 接受，则拒绝；若 $H$ 拒绝，则接受。"

于是，$B$ 接受 $w \iff \langle B, w \rangle \in A_{TM} \iff H$ 接受 $\langle B, w \rangle \iff B$ 拒绝 $w$，矛盾！ \#



<strong>定义 7\.4：</strong> 设 $M$ 是图灵机，$M$ 的描述是字符串 $\langle M \rangle$，$M$ 的描述的长度是 $\langle M \rangle$ 含有的符号个数，如果没有与 $M$ 等价的图灵机具有更短的描述，则说 $M$ 是<strong>极小图灵机</strong>

<strong>图灵机的极小性问题</strong>

- 检测一个给定的图灵机是否极小图灵机

- $MIN_{TM} = \{\langle M \rangle \mid M \text{ 是极小 TM}\}$

- 注意：有无穷多种 TM，每种 TM 都有等价的极小 TM，所以 $MIN_{TM}$ 是无穷语言



<strong>定理 7\.5：</strong> $MIN_{TM}$ 不是图灵可识别的。

不存在任何算法，能够可靠地识别出哪些程序已经是"最短不可压缩"的。

<strong>证明：</strong> 假设 TM $E$ 枚举 $MIN_{TM}$。

构造下列 TM $C$。

$C =$ "对于输入 $w$：

1. 由递归定理得到它自己的描述 $\langle C \rangle$

2. 运行 $E$，直到比 $C$ 的描述更长的 TM $D$ 出现

3. 在输入 $w$ 上模拟 $D$。"

因为 $E$ 枚举 $D$，所以 $D$ 是极小 TM。

但是 $D$ 的描述比 $C$ 长，且 $D$ 与 $C$ 等价。矛盾！ \#

![image\.png](/Firefly/uploads/computability-notes/image-72.png)

![image\.png](/Firefly/uploads/computability-notes/image-136.png)

|属性|结果|
|---|---|
|D 来自 `enumerate_minimal_programs()`|所以 D 是<strong>极小</strong>的|
|我们特意选了 `len(D) > len(C)`|D 的代码比 C <strong>长</strong>|
|C 完全调用 D|C 和 D 功能<strong>完全相同</strong>|

D 号称是"极小的"（没有更短程序能替代它），但 C 比 D 更短，却能做完全一样的事情！



### 不动点

如果 $x = f(x)$，则 $x$ 称为 $f$ 的不动点。

<strong>定理 7\.6（递归定理的不动点形式）：</strong> 对于任何一个可计算函数 $t: \Sigma^* \to \Sigma^*$，都存在一个图灵机 $F$，使得 $t(\langle F \rangle)$ 描述一个与 $F$ 等价的图灵机。

这是一个通用的证明框架，用来构造一个"自引用"的图灵机 F。



<strong>证明：</strong> TM $F =$ "对输入 $w$：

1. 由递归定理得到自己的一个描述 $\langle F \rangle$

2. 计算 $t(\langle F \rangle)$ 得到一个图灵机 $G$ 的描述

3. 在输入 $w$ 上模拟 $G$。" \#

F 先拿到自己的代码，然后对自己的代码做某种"加工"（函数 t），产生 G，最后 F 的行为变得和 G 一样。



## 第五部分：时间、空间复杂性及难解性
### 5.1 **$O$<strong>记法与</strong>$o$** 记法
### <strong>大</strong>$O$

设 $f,g:\mathbb{N}\to\mathbb{R}^+$。若存在常数 $c>0$ 和 $n_0$，使得对所有 $n\ge n_0$：

$f(n)\le c g(n),$

则称$f(n)=O(g(n)).$意思是：$g$ 是 $f$ 的渐近上界。

![image\.png](/Firefly/uploads/computability-notes/image-153.png)

![image\.png](/Firefly/uploads/computability-notes/image-28.png)



### <strong>小</strong>$o$

$f(n)=o(g(n))$

表示 $f$ 比 $g$ 低一个严格数量级，即$\lim_{n\to\infty}\frac{f(n)}{g(n)}=0.$

例如：

$n=o(n\log\log n),$

$n\log n=o(n^2),$

$n^2=o(n^3).$

<strong>易错点：</strong> $O$ 是“不超过同阶”，$o$ 是“严格低阶”。因此 $n^2=O(n^2)$，但 $n^2\ne o(n^2)$

![image\.png](/Firefly/uploads/computability-notes/image-50.png)

![image\.png](/Firefly/uploads/computability-notes/image-99.png)



### 5.2 时间复杂性
若 DTM $M$ 对所有输入都停机，定义

$time_M(n)=\max\{M\text{ 在长度为 }n\text{ 的输入上的运行步数}\}.$

![image\.png](/Firefly/uploads/computability-notes/image-119.png)

最坏情形复杂性：$time_M(n) = M$ 在长度为 $n$ 的输入上的<strong>最大</strong>运行步数

平均情形复杂性：$time_M(n) = M$ 在长度为 $n$ 的输入上的平均运行步数

本课只讨论最坏情形复杂性

![image\.png](/Firefly/uploads/computability-notes/image-137.png)

![image\.png](/Firefly/uploads/computability-notes/image-87.png)

<strong>输入长度与输入规模：</strong> 输入长度和编码有关，输入规模和编码无关

![image\.png](/Firefly/uploads/computability-notes/image-95.png)

![image\.png](/Firefly/uploads/computability-notes/image-147.png)

![image\.png](/Firefly/uploads/computability-notes/image-123.png)

![image\.png](/Firefly/uploads/computability-notes/image-120.png)

<strong>时间复杂性类</strong> $TIME(t(n))$

$TIME(t(n)) = \{L \mid \text{某个 } O(t(n)) \text{ 时间的单带 DTM 判定语言 } L\}$

例：$A = \{0^k 1^k \mid k \ge 0\}$

$A \in TIME(n \log n)$

$A \in TIME(n^2)$

||$t(n)$|$\text{TIME}(t(n))$|
|---|---|---|
|<strong>是什么</strong>|函数|集合（语言类）|
|<strong>例子</strong>|$n^2$, $n\log n$, $2^n$|$\text{TIME}(n^2)$, $\text{TIME}(n\log n)$|
|<strong>含义</strong>|"这台机器花多少时间"|"这类问题需要多少时间"|
|<strong>关系</strong>|$L \in \text{TIME}(t(n))$ 意味着存在某台机器时间 $\leq c \cdot t(n)$||

<strong>模型间的复杂性关系：</strong>时间复杂性与模型有关

多带与单带：平方

非确定型与确定型：指数

<strong>定理 8\.8：</strong> 设函数 $t(n) \ge n$，则每个 $t(n)$ 时间（总共的运行步数）多带 TM 都与某个 $O(t^2(n))$ 时间单带 TM 等价

<strong>证明思路：</strong> 分析定理 4\.8 的证明，每步模拟需要 $O(t(n))$ 时间，总共模拟 $t(n)$ 步

<strong>证明：</strong>（略）

```text
多带 TM 运行了 t(n) 步后：
- 每条带的长度最多增长到 O(t(n))
- 单带 TM 的带上总长度 = O(t(n))

单带 TM 模拟一步：
- 需要扫描整带，收集所有读写头的信息
- 整带长度 = O(t(n))
- 所以扫描需要 O(t(n)) 时间
```



<strong>NTM 运行时间：</strong>判定机 NTM $N$ 的运行时间是函数 $f: \mathbb{N} \to \mathbb{N}$，

$f(n) =$ 在长为 $n$ 的输入上所有计算分支的最大步数。

![image\.png](/Firefly/uploads/computability-notes/image-34.png)



<strong>定理 8\.10：</strong> 设函数 $t(n) \ge n$，则每个 $t(n)$ 时间单带 NTM 都与某个 $2^{O(t(n))}$ 时间单带 DTM 等价

<strong>证明思路：</strong> 分析定理 4\.10 的证明，每个分支模拟需要 $O(t(n))$ 时间，总共模拟 $b^{t(n)}$ 个分支，$b$ 是所有节点的最大分支数

<strong>证明：</strong>（略）



### 5.3 P 类
$P = \bigcup_k TIME(n^k) = \{L \mid \text{某个多项式时间单带 DTM 判定语言 } L\}$。

$P$<strong>的重要性：</strong>对于所有与单带 DTM 多项式时间等价的计算模型来说，$P$ 是不变的；

$P$ 大致对应于在计算机上实际可解的问题类，实际算法往往是 $O(n)$，$O(n^2)$，$O(n^3)$，几乎没有 $O(n^{100})$。





#### 证明某问题在 P 的模板
1. 给出一个确定型算法；

2. 证明算法正确；

3. 分析运行时间是多项式。

#### 例：PATH 在 P 中
<strong>路径问题：</strong>

给定一个有向图，一个起点和一个终点，确定是否存在从起点到终点的有向路径

$PATH = \{\langle G, s, t \rangle \mid \text{有向图 } G \text{ 有从 } s \text{ 到 } t \text{ 的有向路径}\}$

<strong>定理 8\.12：</strong> $PATH \in P$

分析：

输入规模：顶点数 $m$

蛮力搜索：$O(m^m)$

宽度优先搜索（标记算法）：$O(m)$

证明：（略）\#



#### 例：RELPRIME 在 P 中
<strong>互素问题：</strong>确定两个自然数是否互素

$RELPRIME=\{\langle x,y\rangle\mid x,y\text{ 互素}\}.$

||说明|
|---|---|
|<strong>输入</strong>|两个整数 $x, y$|
|<strong>编码</strong>|二进制表示|
|<strong>输入长度</strong>$n$|$\lceil \log_2 x \rceil + \lceil \log_2 y \rceil = O(\log x + \log y)$|

<strong>定理 8\.13：</strong> $RELPRIME \in P$

分析：输入规模：数的二进制表示的长度 $n$

蛮力：$O(2^n)$，

```text
算法：从 2 到 min(x,y) 逐个试除
      检查是否有公因子

问题：min(x,y) 可能达到 2^n 量级
      （因为 n 位二进制数最大是 2^n - 1）
      
时间：O(min(x,y)) = O(2^n) ❌ 指数时间
```

辗转相除：$O(n^2)$

证明：（略）\#

使用 BFS/DFS 标记可达顶点，时间多项式，因此 $PATH\in P$。



#### 例：CFL 在 P 中
<strong>定理 8\.14：</strong> 若 $L$ 是 CFL，则 $L \in P$。

分析：

输入规模：串长度 $n = |w|$

蛮力：CNF，$O(2^{2n-1})$，

动态规划：$O(n^3)$



||<strong>P 类</strong>|<strong>NP 类</strong>|
|---|---|---|
|<strong>问什么</strong>|能快速<strong>找到</strong>解吗？|能快速<strong>验证</strong>解吗？|
|<strong>算法类型</strong>|确定性算法|非确定性算法 / 验证器|
|<strong>时间</strong>|多项式时间<strong>求解</strong>|多项式时间<strong>验证</strong>|
|<strong>难度</strong>|相对"容易"|可能"很难"（目前认为）|
|<strong>关系</strong>|$\text{P} \subseteq \text{NP}$|是否相等？未知|

### 5.4 NP 类
$NP = \{L \mid \text{语言 } L \text{ 有多项时间验证机}\}$

解的长度是输入规模的多项式

验证解所花费时间是输入规模的多项式

候选解个数是输入规模的指数

![image\.png](/Firefly/uploads/computability-notes/image-47.png)

![image\.png](/Firefly/uploads/computability-notes/image-146.png)

![image\.png](/Firefly/uploads/computability-notes/image-89.png)

<strong>验证机定义：</strong>

语言 $A = \{w \mid \exists \text{ 字符串 } c, \text{ 算法 } V \text{ 接受 } \langle w, c \rangle\}$

算法 $V$ 是语言 $A$ 的验证机

$c$ 称为 $w$ 是 $A$ 的成员的资格证书（证明）。

<strong>多项式时间验证机：</strong>

语言 $A = \{w \mid \exists \text{ 字符串 } c, \text{ 算法 } V \text{ 接受 } \langle w, c \rangle\}$

$|c|$ 是 $|w|$ 的多项式（"短证明"）

在 $|w|$ 的多项式时间内运行（"容易验证"）

若 $A$ 有多项时间验证机，则称 $A$ 为<strong>多项式可验证的</strong>。



直观上，NP 是“解不一定容易找，但给出一个候选解后容易验证”的问题类。



#### NTM 定义的等价性
<strong>定理 8\.17：</strong> $NP = \{L \mid \text{某个多项式时间 NTM 判定语言 } L\}$

NP 也可以用非确定性图灵机来定义，与验证机等价。

分析：多项式时间验证机 $\leftrightarrow$ 非确定型多项式时间判定机

<strong>证明：</strong>

<strong>验证机</strong>$\Rightarrow$<strong>NTM：</strong> NTM 非确定地猜一个多项式长度证书 $c$，再运行验证机 $V(w,c)$

\($\subseteq$\) 设 $A \in NP$，则 $A$ 有多项式时间验证机 $V$。设 $V$ 的运行时间是 $n^k$。构造非确定型多项式时间判定机 $N$。

$N =$ "对长为 $n$ 的输入 $w$：

1. 非确定地选择长为 $n^k$ 的字符串 $c$；

2. 在输入 $\langle w, c \rangle$ 上运行 $V$；

3. 若 $V$ 接受，则接受；否则，拒绝。"



<strong>NTM</strong>$\Rightarrow$<strong>验证机。</strong> 证书 $c$ 描述 NTM 在每一步的非确定选择；验证机按照 $c$ 模拟那条分支，看是否接受

\($\supseteq$\) 设多项式时间 NTM $N$ 判定 $A$。构造 $A$ 的多项式时间验证机 $V$。

$V =$ "对输入 $\langle w, c \rangle$，其中 $w, c$ 是字符串：

1. 在输入 $w$ 上模拟 $N$，把 $c$ 的每个符号看作对每一步非确定选择的描述；

2. 若 $N$ 的该计算分支接受，则接受；否则，拒绝。" \#

<strong>定义 8\.18：</strong> $NTIME(t(n)) = \{L \mid \text{某个 } O(t(n)) \text{ 时间 NTM 判定语言 } L\}$。

<strong>推论 8\.19：</strong> $NP = \bigcup_k NTIME(n^k)$。$NP$ 表示<strong>非确定型多项式时间类</strong>



#### 证明某问题在 NP 的模板
1. 指出证书是什么；

2. 说明证书长度是多项式；

3. 给出多项式时间验证算法。



#### 例：HAMPATH 在 NP 中
证书是一条顶点序列。验证：检查是否从 $s$ 开始、到 $t$ 结束、每个顶点恰好出现一次、相邻顶点之间有边。均可多项式时间完成。



#### 例：CLIQUE 在 NP 中
![image\.png](/Firefly/uploads/computability-notes/image-9.png)

$CLIQUE=\{\langle G,k\rangle\mid G\text{ 有 }k\text{-团}\}.$

证书是 $k$ 个顶点。验证它们是否两两相邻。

<strong>定理 8\.20：</strong> $CLIQUE \in NP$

<strong>证明：</strong> 验证机 DTM $V =$ "对输入 $\langle \langle G, k \rangle, c \rangle$：

1. 检查 $c$ 是否 $G$ 中 $k$ 个顶点的集合；

2. 检查 $G$ 是否包含连接 $c$ 中顶点的所有边；

3. 若两项检查都通过，则接受；否则，拒绝。" \#



#### 例：SUBSET\-SUM 在 NP 中
![image\.png](/Firefly/uploads/computability-notes/image-27.png)

$SUBSET\text{-}SUM=\{\langle S,t\rangle\mid \exists S'\subseteq S,\sum_{x\in S'}x=t\}.$

证书是子集 $S'$。验证元素来自 $S$ 且总和为 $t$。

<strong>证明：</strong> 验证机 DTM $V =$ "对输入 $\langle \langle S, t \rangle, c \rangle$：

1. 检查 $c$ 是否总和为 $t$ 的数的集合；

2. 检查 $S$ 是否包含 $c$ 中所有数；

3. 若两项检查都通过，则接受；否则，拒绝。" \#

<strong>另证：</strong>NTM $N =$ "对输入 $\langle S, t \rangle$：

1. 非确定性地选择 $S$ 中数的子集 $c$；

2. 检查 $c$ 是否总和为 $t$ 的数的集合；

3. 若检查通过，则接受；否则，拒绝。" \#



### 5.5 P 与 NP、coNP、EXP
#### P 与 NP
$P =$ 成员资格可以<strong>快速判定</strong>的语言类

$NP =$ 成员资格可以<strong>快速验证</strong>的语言类

$P \subseteq NP \subseteq EXP = \bigcup_k TIME(2^{n^k})$

因为若一个问题能快速判定，就可以忽略证书，直接判定。

$P =? NP$ 问题是著名的难题

多数研究者认为 $P \neq NP$

![image\.png](/Firefly/uploads/computability-notes/image-6.png)



#### coNP
$coNP = NP$ 中语言的补语言

$coNP=\{\overline L\mid L\in NP\}.$

即 NP 中语言的补语言组成的类。

已知：

$P\subseteq NP\cap coNP.$

但 $NP$ 是否等于 $coNP$ 未知。

![image\.png](/Firefly/uploads/computability-notes/image-85.png)



#### EXP
$EXP=\bigcup_k TIME(2^{n^k}).$

由于可以枚举 NP 证书，因此：

$NP\subseteq EXP.$

课件指出已知 $P\ne EXP$，但 $P$ 与 $NP$ 是否相等未知。

P:      多项式时间可解      ← 高效

NP:     多项式时间可验证    ← 验证高效，求解未知

EXP:    指数时间可解        ← 蛮力搜索



### 时间复杂性类

![image\.png](/Firefly/uploads/computability-notes/image-155.png)

```text
P:      多项式时间可解      ← 高效
NP:     多项式时间可验证    ← 验证高效，求解未知
EXP:    指数时间可解        ← 蛮力搜索
```



### 5.6 多项式时间 m\-归约
$A \le_m^P B$ via $f$

若存在多项式时间可计算函数 $f$，使得

$x \in A \iff f(x) \in B$

$f$ 是多项式时间可计算函数

计算 $f(x)$ 所需时间是 $O(|x|^k)$

$k$ 是与 $x$ 无关的常数

|符号|名称|含义|
|---|---|---|
|$\leq$|归约|"A 可归约到 B"|
|$P$|<strong>多项式时间（Polynomial time）</strong>|归约过程 $f$ 的计算复杂度|
|$m$|<strong>多一归约（Many\-one reduction）</strong>|归约的类型|
|$f$|归约函数|具体的多项式时间可计算函数|

<strong>性质：</strong>

传递性

若 $A \le_m^P B$ 且 $B \le_m^P C$，则 $A \le_m^P C$。

$P$ 对 $\le_m^P$ 封闭性

若 $A \le_m^P B$ 且 $B \in P$，则 $A \in P$。

$NP$ 对 $\le_m^P$ 封闭性

若 $A \le_m^P B$ 且 $B \in NP$，则 $A \in NP$。

<strong>直观含义：</strong> $A\le_m^p B$ 表示 $B$ 至少和 $A$ 一样难：如果能快速解 $B$，就能快速解 $A$。



### 5.7 NP 难与 NP 完全
<strong>NP 难：</strong> 若对所有 $A\in NP$，都有$A \le_m^P B$

则 $B$ 是 NP 难的，即：所有 NP 问题都能多项式归约到 B。

```text
NP-hard 是"NP 问题的上司"
        ↓
    所有 NP 问题
    都能归约到它
        ↓
    它解决了 → 所有 NP 都解决了
```

<strong>NP 完全：</strong> 若 $B$ 是 NP 难的，且 $B\in NP$，则 $B$ 是 NP 完全的。

$B\text{ NP-complete}\iff B\in NP\text{ 且 }\forall A\in NP, A \le_m^P B.$

![image\.png](/Firefly/uploads/computability-notes/image.png)

![image\.png](/Firefly/uploads/computability-notes/image-17.png)

||属于 NP？|所有 NP 可归约到它？|例子|
|---|---|---|---|
|<strong>P</strong>|✅ 是|❌ 不一定|排序、最短路径|
|<strong>NP</strong>|✅ 是|❌ 不一定|所有 NP 完全问题|
|<strong>NP 完全</strong>|✅ 是|✅ 是|SAT、团、TSP\(判定版\)|
|<strong>NP 难</strong>|❓ 不一定|✅ 是|停机问题、广义象棋|

<strong>定理 8\.28：</strong> 若 $B$ 是 NP 完全的，并且 $B$ 属于 $P$，则 $NP = P$。

<strong>定理 8\.29：</strong> 若 $B$ 是 NP 完全的，$B$ 多项式时间归约到 $C$，$C$ 属于 NP，则 $C$ 是 NP 完全的。

推论：$cnf\text{-}SAT$ 是 NP 完全的

推论：$SAT$ 是 NP 完全的

推论：$3SAT$ 是 NP 完全的

#### NP 完全性的意义

<strong>库克定理：</strong> $SAT \in P \iff NP = P$

<strong>意义：</strong>

$SAT$ 是 NP 完全的这个事实，提供证据说明 $SAT$ 没有多项式时间算法

NP 难或 NP 完全，可以作为没有多项式时间算法的一种证据



#### 证明 NP 完全的标准模板
要证明 $C$ 是 NP 完全：

1. 证明 $C\in NP$；

2. 选择一个已知 NP 完全问题 $B$；

3. 构造多项式时间归约 $B\le_m^p C$；

4. 证明正确性：$x\in B\iff f(x)\in C$；

5. 分析归约函数 $f$ 是多项式时间可计算。



### 5.8 SAT、cnf\-SAT、3SAT
#### SAT
##### 可满足性问题
给定一个布尔公式，确定这个公式是否可满足

例：$(\neg x \lor (\neg y \land x)) \land (x \lor y)$

$x = 1, y = 0$ 是可满足赋值

$SAT=\{\langle \phi\rangle\mid \phi\text{ 是可满足布尔公式}\}.$



#### cnf\-SAT
##### 合取范式
<strong>文字：</strong> 布尔变元及其否定（$x, \neg x$ 等）

<strong>子句：</strong> 文字的析取（$x \lor \neg y \lor z$ 等）

<strong>合取范式（cnf）：</strong> 子句的合取 $(x \lor \neg y \lor z) \land (x \lor \neg y \lor z \lor v) \land (x \lor \neg u)$

##### 合取范式可满足性问题
给定一个合取范式（cnf），确定这个公式是否可满足

例：$(x \lor \neg y \lor z) \land (x \lor \neg y \lor u) \land (x \lor \neg u \lor z)$

$x = 0, y = 0, z = 0, u = 0$ 是可满足赋值

CNF 是若干子句的合取，每个子句是文字的析取。

$cnf\text{-}SAT=\{\langle \phi\rangle\mid \phi\text{ 是可满足 CNF}\}.$



#### 3SAT
#### 3 元合取范式

<strong>3 子句：</strong> 由三个文字组成的子句

<strong>3cnf：</strong> 由 3\-子句组成的合取范式

$(x \lor \neg y \lor z) \land (x \lor \neg y \lor u) \land (x \lor \neg u \lor z)$

3CNF 的每个子句有 3 个文字：



$3SAT=\{\langle \phi\rangle\mid \phi\text{ 是可满足 3CNF}\}.$



#### cnf\-SAT **$\le_p$** 3SAT
长子句可引入新变量转成 3 子句。

例如：

$a_1\vee a_2\vee a_3\vee a_4$

转为

$(a_1\vee a_2\vee z)\wedge(\neg z\vee a_3\vee a_4).$

更长子句：

$a_1\vee a_2\vee\cdots\vee a_6$

可转为

$(a_1\vee a_2\vee z_1)\wedge(\neg z_1\vee a_3\vee z_2)\wedge(\neg z_2\vee a_4\vee z_3)\wedge(\neg z_3\vee a_5\vee a_6).$

新变量像“选择器”，选择满足原来句子的哪一段，保证新公式与旧公式同时可满足或同时不可满足。



### 5.9 3SAT 到 CLIQUE
<strong>定理 8\.26：</strong>$3SAT\le_m^p CLIQUE.$

<strong>证明思路：</strong>

把一个公式转化成一个图和一个数

公式的可满足赋值对应图中指定大小的团

图的结构模拟变量和子句的作用

设公式

$\phi=(a_1\vee b_1\vee c_1)\wedge\cdots\wedge(a_k\vee b_k\vee c_k).$

构造图 $G$：

1. 每个子句的每个文字建立一个顶点，共 $3k$ 个顶点；

2. 不同子句的两个顶点之间连边，当且仅当两个文字不矛盾，即不是 $x$ 与 $\neg x$；

3. 目标团大小为 $k$。

举个说人话的例子：

![image\.png](/Firefly/uploads/computability-notes/image-64.png)

<strong>第一步：为每个子句创建"文字节点"</strong>

每个子句有 3 个文字，每个文字成为一个节点。

|子句|节点|
|---|---|
|$C_1 = (x_1 \lor x_1 \lor x_2)$|$v_{11} = (x_1)$, $v_{12} = (x_1)$, $v_{13} = (x_2)$|
|$C_2 = (\neg x_1 \lor \neg x_2 \lor \neg x_2)$|$v_{21} = (\neg x_1)$, $v_{22} = (\neg x_2)$, $v_{23} = (\neg x_2)$|
|$C_3 = (\neg x_1 \lor x_2 \lor x_2)$|$v_{31} = (\neg x_1)$, $v_{32} = (x_2)$, $v_{33} = (x_2)$|

共 9 个节点，对应图中的 9 个圆圈。

<strong>第二步：确定边的连接规则</strong>

两个节点之间有边，当且仅当：

1. <strong>不在同一子句中</strong>（不同子句的节点才能连）

2. <strong>不矛盾</strong>（不能同时是 $x$ 和 $\neg x$，同一变量可连）

![image\.png](/Firefly/uploads/computability-notes/image-54.png)

<strong>第三步：逐对检查并连边</strong>

从 $C_1$ 的节点出发

|$C_1$ 节点|与 $C_2$ 节点连边？|与 $C_3$ 节点连边？|
|---|---|---|
|$(x_1)$|$(\neg x_1)$: ❌ 矛盾|$(\neg x_1)$: ❌ 矛盾|
||$(\neg x_2)$: ✅|$(x_2)$: ✅|
||$(\neg x_2)$: ✅|$(x_2)$: ✅|
|$(x_1)$|同上|同上|
|$(x_2)$|$(\neg x_1)$: ✅|$(\neg x_1)$: ✅|
||$(\neg x_2)$: ❌ 矛盾|$(x_2)$: ✅|
||$(\neg x_2)$: ❌ 矛盾|$(x_2)$: ✅|

后略

![image\.png](/Firefly/uploads/computability-notes/image-45.png)

<strong>证明：</strong> 记归约函数是 $f$。

设 $\phi = (a_1 \lor b_1 \lor c_1) \land (a_2 \lor b_2 \lor c_2) \land \ldots \land (a_k \lor b_k \lor c_k)$。

$k$ 是子句数。

1. 描述归约构造：$f(\phi) = \langle G, k \rangle$，

$G = \langle V, E \rangle$，

$V = \{a_1, b_1, c_1, \ldots, a_k, b_k, c_k\}$，

$E = \{(x_i, y_j) \mid i \neq j \land x_i \text{ 不是 } y_j \text{ 的否定}\}$。

2. 正确性证明：

$\phi$ 是可满足的 $\iff G$ 有 $k$ 团。

\($\Rightarrow$\) 可满足赋值给每个子句中至少 1 个成真文字，这些成真文字组成 $k$ 团

\($\Leftarrow$\) $k$ 团必须在每个子句中选择 1 个文字，让这些文字取真，就给出成真赋值。

3. 复杂性分析：

$|\phi| = O(k)$。

$|V| = O(k)$，$|E| = O(k^2)$。

$|\langle G, k \rangle| = O(k^3)$。

构造的每步都花费 $O(k)$ 时间，总时间是 $O(k^4)$。 \#



### 5.10 Cook（库克）定理
<strong>定理 8\.30：</strong> 任何 NP 语言都多项式时间归约到 $cnf\text{-}SAT$，即cnf\-SAT是NP完全的

<strong>证明思路：</strong> 

设语言 $A$ 属于 NP，设 $n^k$ 时间 NTM $N$ 判定 $A$，利用 $N$ 构造归约 $f_N$。

对于 $A$ 的输入 $w$（长度为 n），$f_N(w) = \phi$

- 公式 $\phi$ 描述 $N$ 在 $w$ 上一个计算分支

$w \in A \iff \phi$ 描述一个接受计算分支$\iff \phi$ 可满足

$N$ 在 $w$ 上的一个计算分支可用 $n^k \times n^k$ 表格记录

$\phi$ 描述这个 $n^k \times n^k$ 表格

![image\.png](/Firefly/uploads/computability-notes/image-44.png)

合法窗口：

```text
时间 t:   [左邻] [当前] [右邻]
              ↓      ↓      ↓
时间 t+1: [左邻'] [当前'] [右邻']
```

![image\.png](/Firefly/uploads/computability-notes/image-12.png)

非法窗口

![image\.png](/Firefly/uploads/computability-notes/image-101.png)

#### $\phi$ 的变元

$x_{i,j,s}$：

- $1 \le i, j \le n^k$，

- $s \in C = Q \cup \Gamma \cup \{\#\}$。

- 一共 $O(n^{2k})$ 个变元

|下标|含义|
|---|---|
|$i$|<strong>行号</strong>（时间步）$1 \leq i \leq n^k$|
|$j$|<strong>列号</strong>（磁带位置）$1 \leq j \leq n^k$|
|$s$|<strong>符号</strong>，来自字母表 $C = Q \cup \Gamma \cup \{\#\}$|

|集合|含义|
|---|---|
|$Q$|NTM 的<strong>状态集合</strong> $\{q_0, q_1, \ldots, q_{\text{accept}}, q_{\text{reject}}\}$|
|$\Gamma$|<strong>磁带符号集合</strong>（输入符号 \+ 空白等）|
|$\#$|<strong>特殊分隔符/边界标记</strong>|

$x_{i,j,s} = 1$

- $\iff$ 第 $i$ 行第 $j$ 列单元 $cell[i,j]$ 包含符号 $s$。

#### $\phi$ 的构造（布尔变量赋值）

$\phi = \phi_{cell} \land \phi_{start} \land \phi_{move} \land \phi_{accept}$

$\phi_{cell}$：每个单元恰好包含一个符号（内容唯一）

- $\phi_{cell} = \bigwedge_{i,j} \left[ (\vee_s x_{i,j,s}) \land (\wedge_{s \neq t} (\neg x_{i,j,s} \lor \neg x_{i,j,t})) \right]$

    - $\phi_{cell}$ 是合取范式

    - $|\phi_{cell}| = O(n^k \times n^k \times (|C| + |C|^2))= O(n^{2k}|C|^2)$。

    |    变量|    含义|
    |---|---|
    |    $\vee_s x_{i,j,s}$|    存在某个 $s$，使得 cell$[i,j]$ 包含 $s$|
    |    $\wedge_{s \neq t} (\neg x_{i,j,s} \lor \neg x_{i,j,t})$|    不能同时填两个不同符号。|

$\phi_{start}$：第 1 行是初始格局（初始状态正确）

- 要使整个公式 *ϕ*  可满足，这些变量必须为 1

- 强制初始配置的特定变量为 1、其他为 0，从而固定 NTM 的起始状态。

- $\phi_{start} = x_{1,1,\#} \land x_{1,2,q_0} \land x_{1,3,w_1} \land x_{1,4,w_2} \land \ldots \land x_{1,n+2,w_n} \land x_{1,n+3,B} \land \ldots \land x_{1,nk-1,B} \land x_{1,nk,\#}$

    - $\phi_{start}$ 是合取范式

    - $|\phi_{start}| = O(n^k)$。

$\phi_{move}$：下一行都是上一行的合法后续格局（转移合法，遵循 $N$ 的转移函数）

- $\phi_{move} = \wedge_{i,j} \left[ (i,j) \text{ 窗口是合法的} \right]$

- $= \wedge_{i,j} \left[ \vee_{a_1,a_2,\ldots,a_6 \text{ 是合法窗口}} (x_{i,j-1,a_1} \land x_{i,j,a_2} \land x_{i,j+1,a_3} \land x_{i+1,j-1,a_4} \land x_{i+1,j,a_5} \land x_{i+1,j+1,a_6}) \right].$

    - 合法窗口的总数只与 $N$ 有关

    - 用分配律把 $[\ ]$ 内展开成合取范式

- $|\phi_{move}| = O(n^k \times n^k) = O(n^{2k})$。

![image\.png](/Firefly/uploads/computability-notes/image-24.png)

$\phi_{accept}$：某一行是接受格局（最终接受）

- 存在某个时刻 i、某个位置 j，NTM 处于接受状态。

- $\phi_{accept} = \vee_{i,j}(x_{i,j,q_{accept}}).$

- $\phi_{accept}$ 是合取范式

- $|\phi_{accept}| = O(n^k \times n^k) = O(n^{2k})$。



<strong>断言 8\.31：</strong> 如果画面的顶行是初始格局，每个窗口都是合法的，则画面中的下一行都是上一行的合法后续格局。

<strong>证明：</strong> 不与状态符号相邻的单元保持不变。包含状态符号的窗口保证与状态相邻的单元按照转移函数来更新。 \#



#### 复杂性分析
$|\phi| = |\phi_{cell}| + |\phi_{start}| + |\phi_{move}| + |\phi_{accept}|$

$= O(n^{2k}|C|^2) + O(n^k) + O(n^{2k}) + O(n^{2k})$

$= O(n^{2k})$。

每个符号的长度是 $O(\log n^k) = O(\log n)$

$\phi$ 的二进制串长度是 $O(n^{2k} \log n)$。

$\phi$ 很有规律性，可在多项式时间内完成构造。 \#



### 5.11 其他 NP 完全问题
![image\.png](/Firefly/uploads/computability-notes/image-62.png)

#### 顶点覆盖问题：VERTEX\-COVER
给定图 $G$，数 $k$，确定 $G$ 是否有 $k$ 个顶点的顶点覆盖

<strong>顶点覆盖：</strong> 任何一条边至少有一个端点属于这组顶点

$VERTEX\text{-}COVER = \{\langle G, k \rangle \mid \text{无向图 } G \text{ 有 } k \text{ 个顶点的顶点覆盖}\}$

<strong>定理 8\.34：</strong> $VERTEX\text{-}COVER$ 是 NP 完全的

<strong>证明思路：</strong>

$VERTEX\text{-}COVER$ 属于 NP

$3SAT \le_m^P VERTEX\text{-}COVER$

<strong>证明：</strong> $3SAT \le_m^P VERTEX\text{-}COVER$ via $f$。

$f(\phi) = \langle G, k \rangle$，

设 $\phi$ 有 $m$ 个不同变元和 $n$ 个子句，（直接通过3\-CNF公式给出）

![image\.png](/Firefly/uploads/computability-notes/image-80.png)

|符号|含义|例子|
|---|---|---|
|$m$|公式 $\phi$ 中<strong>不同变量的个数</strong>|$x_1, x_2$ → $m=2$|
|$n$|公式 $\phi$ 中<strong>子句的个数</strong>|$C_1, C_2, C_3$ → $n=3$|

则 $G$ 有 $2m + 3n$ 个顶点，$k = m + 2n$。

1. <strong>构造：</strong> 

    - 对每个变元 $x$，构造 $\{x, \neg x\}$ 组成的 $K_2$ 子图，

    - 对每个子句 $a \lor b \lor c$，构造 $\{a, b, c\}$ 组成的 $K_3$ 子图，

    |    原则|    说明|
    |---|---|
    |    <strong>变量小工具</strong>|    每个 $K_2$ 必须选 <strong>恰好 1 个</strong>（覆盖变量边）|
    |    <strong>子句小工具</strong>|    每个 $K_3$ 必须选 <strong>恰好 2 个</strong>（覆盖三角形边）|
    |    <strong>连接边</strong>|    三角形节点与变量节点的连接边必须被覆盖|

![image\.png](/Firefly/uploads/computability-notes/image-118.png)

![image\.png](/Firefly/uploads/computability-notes/image-125.png)

    - 连接所有 $K_2$ 子图与 $K_3$ 子图之间（k2和k2之间，k3和k3之间不能连）相同变元。

2. 正确性：

$\phi$ 可满足 $\iff G$ 有 $k$ 个顶点的覆盖

\($\Rightarrow$\) 把可满足赋值的真文字放入覆盖，把每个子句中其余两个顶点放入覆盖

\($\Leftarrow$\) 每个顶点覆盖必须包含每个子句中的至少 2 个文字和每对互补文字中的至少 1 个，实际上恰好分别是 2 个和 1 个。这样就唯一确定一个可满足赋值。

3. 复杂性：顶点数 $2m + 3n$，边数 $2m + 3n + 3n$。 \#

<strong>最小顶点覆盖问题</strong>

给定图 $G$，求 $G$ 的最小顶点覆盖

最小顶点覆盖：顶点数最少的顶点覆盖

NP 难的优化问题 \-\-\-\- 近似算法

- MIN\-VERTEX\-COVER

- MAX\-SAT



#### HAMPATH
有向哈密顿路径问题：

$HAMPATH = \{\langle G, s, t \rangle \mid \text{有向图 } G \text{ 有从 } s \text{ 到 } t \text{ 的哈密顿路径}\}$

无向哈密顿路径问题：

$UHAMPATH = \{\langle G, s, t \rangle \mid \text{无向图 } G \text{ 有从 } s \text{ 到 } t \text{ 的哈密顿路径}\}$

![image\.png](/Firefly/uploads/computability-notes/image-75.png)

<strong>定理 8\.35：</strong> $HAMPATH$ 是 NP 完全的

<strong>证明思路：</strong>

$HAMPATH$ 属于 NP

$3SAT \le_m^P HAMPATH$

变量小工具（菱形结构，用路径的"走法"来表示变量的赋值）：

```text
● (上方连接点，s)
       / \
      /   \
x₁: ●—●—●—●—●—●—●   ← 一串节点，代表 x₁ 的"真链"
      \   /           （从左到右走 = x₁=1，从右到左 = x₁=0）
       \ /
        ★ (中间连接点)
       / \
      /   \
x₂: ●—●—●—●—●—●—●   ← 代表 x₂ 的"真链"
      \   /
       \ /
        ● (下方连接点，t)
```

简化理解：一条水平链 \+ 旁路

```text
● (顶部，连接上一个变量)
        │
    ●───●───●───●───●───●   ← 上链（x_i = 1 时走）
    ↑                   ↑
   左                   右
    │                   │
    ●───●───●───●───●───●   ← 下链（x_i = 0 时走）
    ↑                   ↑
   左                   右
        │
        ● (底部，连接下一个变量)
```

对于 *n*  个子句，每条链有 2*n*（n  对） \+ 2 \(首尾状态\) \+ \(n\+1\)（n\+2个点有n\+1间隔） 个节点：

```text
x_i 的链：
●─♦─(○─○)─♦─(○─○)─♦─(○─○)─♦─ ... ─♦─(○─○)─♦─●
      ↑       ↑       ↑               ↑
      C₁      C₂      C₃              Cₙ
```

对于对应 Ci 的两个节点`(○─○)`，第一个连向 Ci，第二个从 Ci 连回

![image\.png](/Firefly/uploads/computability-notes/image-103.png)

![image\.png](/Firefly/uploads/computability-notes/image-74.png)

![image\.png](/Firefly/uploads/computability-notes/image-79.png)

#### SUBSET\-SUM
<strong>定理 8\.37：</strong> $SUBSET\text{-}SUM$ 是 NP 完全的

<strong>证明思路：</strong>

$SUBSET\text{-}SUM$ 属于 NP

$3SAT \le_m^P SUBSET\text{-}SUM$

用数字的每一位编码变量选择与子句满足情况。

<strong>规约目标：</strong>

给定 3\-CNF 公式 $\phi$，构造集合 $S$ 和目标 $t$，使得：

$\phi \text{ 可满足 } \iff \exists A \subseteq S, \sum A = t$

![image\.png](/Firefly/uploads/computability-notes/image-102.png)

|行|何时选|$X_i$ 位|$C_j$ 位 = 1 的条件|
|---|---|---|---|
|$y_i$|$x_i = 1$|1|子句 $C_j$ <strong>包含正文字</strong> $x_i$|
|$z_i$|$x_i = 0$|1|子句 $C_j$ <strong>包含负文字</strong> $\neg x_i$|

$y_i / z_i$ 是变量赋值选择（真/假），$g_j / h_j$ 是子句填充数（凑到目标 3）

目标 $C_j = 3$ 是因为每个子句最多 3 个文字。变量行贡献"真文字的个数"（1到3），$g_j / h_j$ 用来填补剩余部分（凑到 3）。这样无论几个文字为真，总能恰好达到目标，且子句满足当且仅当变量行至少贡献 1（即至少 1 个真文字，取值为真）。

$C_1$ 列的分析：选了 $z_1$（$x_1 = 0$）和 $y_2$（$x_2 = 1$）

|子句|内容|真文字|哪个变量行贡献|
|---|---|---|---|
|$C_1$|$(x_1 \lor x_1 \lor x_2)$|$x_2$|$y_2$ 贡献 $C_1 = 1$|
|$C_2$|$(\neg x_1 \lor \neg x_2 \lor \neg x_2)$|$\neg x_1$|$z_1$ 贡献 $C_2 = 1$|
|$C_3$|$(\neg x_1 \lor x_2 \lor x_2)$|$\neg x_1, x_2, x_2$|$z_1$ 贡献 1, $y_2$ 贡献 1，共 2|



### 5.12 空间复杂性
#### DTM 空间复杂性
若 DTM $M$ 在所有输入上都停机，且长度为 $n$ 的输入上最多扫描 $f(n)$ 个不同带格，则称<strong>空间复杂性</strong>为 $f(n)$。



#### NTM 空间复杂性
若 NTM $M$ 在所有输入的<strong>所有计算分支上都停机</strong>，且<strong>任一分支最多扫描</strong> $f(n)$ 个不同带格，则<strong>空间复杂性</strong>为 $f(n)$。



#### 空间复杂性类
$SPACE(f(n))=\{L\mid L\text{ 被 }O(f(n))\text{ 空间 DTM 判定}\},$

$NSPACE(f(n))=\{L\mid L\text{ 被 }O(f(n))\text{ 空间 NTM 判定}\}.$

$PSPACE = \bigcup_k DSPACE(n^k)$

所有能被确定性图灵机在多项式空间内判定的语言。

$NPSPACE = \bigcup_k NSPACE(n^k)$

所有能被非确定性图灵机在多项式空间内判定的语言。



#### 可满足性问题

给定一个布尔公式，确定这个公式是否可满足

例：$(\neg x \lor (\neg y \land x)) \land (x \lor y)$

$x = 1, y = 0$ 是可满足赋值

$SAT = \{\langle \phi \rangle \mid \phi \text{ 是可满足布尔公式}\}$

$SAT \in SPACE(O(n))$。

<strong>证明：</strong>

DTM $M_1 =$ "对输入 $\langle \phi \rangle$，$\phi$ 是布尔公式：

1. 对于 $\phi$ 的变量 $x_1, x_2, \ldots, x_m$ 的每种赋值：

2. 计算 $\phi$ 在该赋值下的值；

3. 若 $\phi$ 的值为 1，则接受；否则，就拒绝。"

存储每个赋值需要 $O(m)$ 空间，计算 $\phi$ 的值需要 $O(n)$ 空间，$m \le n$，总空间是 $O(n)$。 \#

![image\.png](/Firefly/uploads/computability-notes/image-32.png)

![image\.png](/Firefly/uploads/computability-notes/image-111.png)



### 5.13 Savitch（萨维奇）定理
<strong>定理 9\.5：</strong> 若 $f(n)\ge n$（实际上只要$\log n$），则

$NSPACE(f(n))\subseteq SPACE(f^2(n)).$

<strong>证明思路：</strong>

$f(n)$ 空间的计算，格局大小为 $O(f(n))$

不同格局的个数是 $2^{O(f(n))}$，

可以运行 $2^{O(f(n))}$ 步

每一步都可以进行非确定选择

如果顺序考察每个计算分支，则需要 $2^{O(f(n))}$ 空间，

$NSPACE(f(n)) \subseteq NTIME(2^{O(f(n))})$



#### 证明核心：可产生性问题 CANYIELD
定义：

给定一个机器，两个格局和一个步数，确定这个机器能否在这个步数内从第一个格局产生出第二个格局

$CANYIELD=\{\langle M,c_1,c_2,t\rangle\mid M\text{ 能在 }t\text{ 步内从格局 }c_1\text{ 到 }c_2\}.$



递归判断：

$CANYIELD(c_1,c_2,t)
=\exists c_m\,[CANYIELD(c_1,c_m,t/2)\wedge CANYIELD(c_m,c_2,t/2)].$



###### 空间分析
$f(n)$ 空间机器的格局长度为 $O(f(n))$，不同格局数至多 $2^{O(f(n))}$。递归深度为

$O(\log 2^{O(f(n))})=O(f(n)).$

每层递归保存常数个格局，每个格局 $O(f(n))$ 空间，所以总空间

$O(f(n))\cdot O(f(n))=O(f^2(n)).$

因此

$NSPACE(f(n))\subseteq SPACE(f^2(n)).$



<strong>证明：</strong> 设 $A = L(N)$，$N$ 是 $O(f(n))$ 空间的 NTM，$N$ 在长度为 $n$ 的输入上不同格局总数为 $2^{df(n)}$。构造 DTM $M =$ "对输入 $w$：

1. 输出 $CANYIELD(c_{start}, c_{accept}, 2^{df(n)})$。"

$CANYIELD =$ "对输入 $(c_1, c_2, t)$：

1. 若 $t = 1$，则检查是否：$c_1 = c_2$ 或根据 $N$ 的转移函数 $c_1$ 在 1 步内产生 $c_2$。若是，则接受，否则，就拒绝；

2. 若 $t > 1$，则对 $N$ 在 $w$ 上每个空间为 $O(f(n))$ 的格局 $c_m$：

3. 运行 $CANYIELD(c_1, c_m, \lceil t/2 \rceil)$；

4. 运行 $CANYIELD(c_m, c_2, \lceil t/2 \rceil)$；

5. 若第 3 和第 4 步都接受，则接受；

6. 若此时还没有接受，则拒绝。"

<strong>证明</strong>$M$ 正确模拟 $N$，因此 $L(M) = A$。

$M$ 递归深度为 $\log 2^{df(n)} = O(f(n))$，

每次需要把 $(c_1, c_2, t)$ 入栈，需要空间 $O(f(n))$，

总空间 $O(f^2(n))$。 \#



推论：$PSPACE=NPSPACE.$



### 5.14 PSPACE、L、NL 与关系图
#### PSPACE
$PSPACE=\bigcup_k SPACE(n^k).$

由 Savitch 定理：$PSPACE=NPSPACE.$

$NPSPACE = \bigcup_k NSPACE(n^k)$

$NSPACE(n^k) \subseteq SPACE(n^{2k})$



#### L 与 NL
![image\.png](/Firefly/uploads/computability-notes/image-70.png)

在亚线性空间中：

一条输入带（外存）只读，不计复杂性

一条工作带（内存）可读写，计入复杂性



<strong>对数空间复杂性类</strong>，是空间复杂性中最"小"的两类

$L=SPACE(\log n),$

$NL=NSPACE(\log n).$

![image\.png](/Firefly/uploads/computability-notes/image-122.png)

![image\.png](/Firefly/uploads/computability-notes/image-133.png)

例：$PATH\in NL,$

因为 NTM 只需保存当前顶点和步数，非确定地猜下一顶点即可。（m 个点最多 logm 个数就能表示，logm 个步数（二进制））

![image\.png](/Firefly/uploads/computability-notes/image-130.png)



设 $f(n)$ 空间 TM 有 $c$ 个状态，$g$ 个带符号

不同格局有 $cnf(n)g^{f(n)} = n2^{O(f(n))}$ 个

每个格局长度为 $\log n + O(f(n))$

所以，$L \subseteq NL \subseteq P$

萨维奇定理：$NSPACE(f) \subseteq SPACE(f^2)$

条件为 $f(n) \ge n$

实际条件为 $f(n) \ge \log n$。



#### NL = coNL
$NSPACE(f(n)) = coNSPACE(f(n))$，

条件为 $f(n) \ge \log n$

课件给出 Immerman\-Szelepcsényi 定理思路：证明 $PATH^c\in NL$。若能在对数空间内计算从 $s$ 可达顶点数，就能验证 $t$ 不可达。

<strong>定理 9\.22：</strong> $NL = coNL$

<strong>证明思路：</strong> 证明 $PATH^c \in NL$。

当不存在从 $s$ 到 $t$ 的路径时，"短证书"是

从 $s$ 可达的顶点的个数 $c_{m-1}$（$m$ 是顶点数）

从 $s$ 出发 $i$ 步内可达的顶点的集合 $A_i$

从 $s$ 出发 $i$ 步内可达的顶点的个数 $c_i$

$c_{m-1}$ 个不同的顶点

每个顶点从 $s$ 可达

每个顶点都不等于 $t$



如果知道从 $s$ 可达顶点的个数 $c$，则可以在 NL 内判定 $\langle G, s, t \rangle \notin PATH$：

猜 $c$ 个顶点，验证每个顶点从 $s$ 可达，验证每个顶点都不等于 $t$。

如何在 NL 中计算 $c$？

定义 $A_i = \{u \mid u \text{ 与 } s \text{ 距离不超过 } i\}$，

$c_i = |A_i|$，$c = c_{m-1}$，$m$ 是顶点数，

在 NL 中从 $c_i$ 计算出 $c_{i+1}$

![image\.png](/Firefly/uploads/computability-notes/image-60.png)

![image\.png](/Firefly/uploads/computability-notes/image-144.png)

![image\.png](/Firefly/uploads/computability-notes/image-105.png)



#### 复杂性类关系
![image\.png](/Firefly/uploads/computability-notes/image-22.png)

已知：

$L\subseteq NL\subseteq P\subseteq NP\subseteq PSPACE=NPSPACE\subseteq EXP.$



还已知：

$P\ne EXP.$



未知问题包括：

$P=?NP,$

$P=?PSPACE,$

$NP=?PSPACE,$

$NP=?coNP.$



## 证明题速查表
|证明题|必写核心|常见错误|
|---|---|---|
|正则语言补封闭|DFA 交换接受态和非接受态|忘记 DFA 必须转移完整|
|正则语言并/交封闭|构造乘积自动机 $Q_1\times Q_2$|接受态条件写错|
|NFA→DFA|子集构造，$\varepsilon$\-闭包|忘记初态也是闭包|
|正则表达式→NFA|对表达式结构归纳|星号构造忘记接受空串|
|DFA→正则表达式|GNFA 删除状态，$R_4\cup R_1R_2^*R_3$|不会解释循环 $R_2^*$|
|泵引理证明非正则|反设、取串、任意分解、选 $i$ 矛盾|自己指定 $x,y,z$|
|CFG→PDA|栈模拟最左派生；变元替换、终结符匹配|不区分栈顶是变元还是终结符|
|PDA→CFG|$A_{pq}$ 表示空栈从 $p$ 到 $q$；压弹配对|只说“等价”不写变量含义|
|多带 TM→单带 TM|分段编码多条带；标记虚拟头|忽略右移越界插空白|
|NTM→DTM|广度优先遍历计算树|写深度优先导致可能卡死|
|枚举器↔识别器|交错模拟所有串|逐个完整运行识别器导致卡死|
|$A_{DFA}$ 可判定|模拟 DFA 在 $w$ 上运行|忘记检查编码合法性|
|$A_{CFG}$ 可判定|转 CNF，枚举 $2n-1$ 步派生|直接枚举所有派生不能保证停机|
|$A_{TM}$ 不可判定|构造 $D$，输入 $\langle D\rangle$ 产生矛盾|只说“停机问题难”无对角化|
|$HALT_{TM}$ 不可判定|用 HALT 判定器构造 $A_{TM}$ 判定器|忘记停机后还要模拟判断接受/拒绝|
|$E_{TM}$ 不可判定|构造只在 $w$ 上模拟 $M$ 的 $M_1$|空语言与不接受某个串混淆|
|m\-归约证明|$x\in A\iff f(x)\in B$|方向写反|
|Cook 定理|计算历史表格；cell/start/move/accept|只写“SAT 很难”无公式构造|
|Savitch 定理|CANYIELD 分治；递归深度 $O(f(n))$|把时间指数误写成空间指数|



## 最后复习建议
1\. <strong>定义必须会默写。</strong> DFA、NFA、CFG、PDA、TM、P、NP、SPACE、NSPACE 是基础分。

2\. <strong>构造题要写“状态/变量含义”。</strong> 只画图不解释状态含义，容易丢分。

3\. <strong>不可判定证明要明确归约方向。</strong> 证明 $B$ 不可判定，通常要从已知不可判定的 $A$ 归约到 $B$。

4\. <strong>NP 完全证明要三步完整。</strong> 先证在 NP，再做已知 NPC 问题到它的多项式归约，最后证正确性与多项式规模。

5\. <strong>复杂性类关系要背图。</strong> 尤其 $P\\subseteq NP\\subseteq PSPACE\\subseteq EXP$、$PSPACE=NPSPACE$、$P\\ne EXP$、$P=?NP$ 未知。



