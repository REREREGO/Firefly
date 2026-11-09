---
title: 福州大学2023级编译原理课程复习提纲
description: 编译原理课程复习提纲，涵盖形式语言与文法、词法分析、语法分析、语法制导翻译及中间代码生成。
category: 学习笔记
tags: [编译原理, 课程复习]
draft: false
image: /uploads/course-covers/compiler-blueprint-v2.webp
published: "2026-11-08T03:32:33+08:00"
updated: "2026-11-09T02:17:21+08:00"
---

1、选择题 2分\*5=10分

2、填空题 3分\*5=15分

3、简答题 5分\*7=35分

4、综合题 10\+12\+18=40分

## 第一章

1. 什么是编译程序：编译程序\(compiler\)： 把某一种高级语言程序等价地转换成另一种低级语言程序\(如汇编语言或机器语言程序\)的程序。

2. 编译器\(compiler\)是一个程序，它处理以高级语言（源语言）编写的程序（源程序），将其翻译成等价的、用低级语言（目标语言）编写的程序（目标程序），同时报告源程序中的错误。

3. <strong>其它语言处理器</strong>

    1. <strong>反编译器\(decompiler\)：</strong>进行编译器的反向操作，把程序由较低的抽象形式（机器可读）转换成较高的抽象形式（人工可读）。<strong>源语言为低级语言，目标语言为高级语言。</strong>

    2. <strong>源到源的翻译器：</strong>把一种高级语言翻译成为另一种高级语言。作用：转换遗留系统的代码；抽象语言编程

    3. <strong>解释器\(interpreter\)：</strong>进行解释并执行输入程序的计算机程序。在线执行。<strong>输入高级语言程序，不生成目标程序输出</strong>

4. 编译程序的工作过程：

    1. 分析部分（前端）：将源程序分解成中间表示。若分析过程检查出源程序没有按照正确的语法构成，或语义上不一致，它必须提供有用的信息，使用户可以进行改正。分析部分还会收集有关信息，信息存放在符号表中。

    2. 综合部分（后端）：根据中间表示和符号表信息来构建目标程序。

## 第二章

1. 语言\(language\)是一个记号系统，完整的定义包括<strong>文法</strong>\(grammar\)和<strong>语义</strong>\(sematics\)

    1. <strong>文法</strong>是语言的<strong>结构规则系统</strong>，其主要功能是指导语言的<strong>生成和理解</strong>，确保句子在结构上是合法的。

    2. <strong>语义</strong>研究语言符号所表达的意义和意义之间的关系。

    3. 编程语言的语法体系：词法规则（3 型）\+ 语法规则（2 型），共同构成完整的语言定义。

2. 字符串及其相关运算

    1. 字符串定义

        1. <strong>字母表：</strong>一个有穷字符集，<strong>记为∑</strong>

        2. <strong>∑上的字符：</strong>字母表∑中每个元素

        3. <strong>∑上的字符串：</strong>指由∑中的字符所构成的一个<strong>有穷</strong>序列

        4. <strong>空串：</strong>不包含任何字符的序列，<strong>记为ε</strong>

    2. 字符串的基本运算

        1. 字符串的长度：符号的个数$|aab|=3$

        2. 用<strong>∑\</strong>*表示<strong>∑</strong>上的所有<strong>字符串的全体</strong>，包含空字<strong>ε</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-40.png)

        3. <strong>∑\(\*\)</strong>的子集<strong>U</strong>和<strong>V</strong>的<strong>连接（积）</strong>：$UV=\{\alpha \beta |\alpha \in U \And\beta\in V \}$

            ![image\.png](/MyBlog/uploads/course-compiler/image-37.png)

        4. V 自身的 n 次积：$V^n = VV...V(n\text{个}V) $

            1. $V^0=\{\epsilon\}$

            2. $V^*$是$V$的克林闭包：$V^* = V^0 \cup V^1 \cup ...$ 

            3. $V^+$是 V 的正规闭包：$V^+=VV^*$

                ![image\.png](/MyBlog/uploads/course-compiler/image-127.png)

3. 上下文无关文法

    1. 文法的定义：文法$G $是一个四元组$(V_T,V_N,P,S)$

        1. $V_T $：终结符\(terminal\)集（非空） ，文法所定义的语言的基本符号的集合，仅出现在产生式右部（体）

            1. 例：$V_T =\{ He, a ,gave, book, me\}$

        2. $V_N$：非终结符\(non\-terminal\)集（非空），表示语法成分的符号，有时也称为“ 语法变量”，在某个产生式的左部出现过的文法符号

            1. 例：$V_N =\{ \langle\text{句子}\rangle,\langle\text{主语}\rangle,\langle\text{谓语}\rangle,......\}$ 

        3. $S $：开始符号\(start symbol\)：唯一的起始非终结符，表示该文法中最大的语法成分

            1. 例：$S = \langle\text{句子}\rangle$

            2. 两种说明方式：

                1. 明确指出

                2. 第 1 条产生式规则左部的文法符号

        4. $P$：产生式\(production\)集，也称规则：描述语言的语法结构的形式规则

            1. 一般形式：α→β，读作：α定义为β

            2. α称为左部或头。$\alpha\in (V_T\cup V_N)^*$，且至少包含一个非终结符

            3. β称为右部或体。$\beta\in (V_T\cup V_N)^*$

    2. 0\-3型文法

        1. <strong>0 型文法（无限制文法 / 短语结构文法）</strong>

            1. <strong>规则限制：</strong>产生式形如 α → β，其中 α 至少包含 1 个非终结符，β 可以是空串 / 任意终结符 \+ 非终结符组合。

            2. <strong>核心特点：</strong>几乎无限制，是最通用的文法。

            3. <strong>对应语言：</strong>0 型语言（递归可枚举语言）。

            4. <strong>对应自动机</strong>：图灵机（可以模拟所有可计算过程）。

            5. 例子：A → ab、Ab → aB、S → ε 都符合 0 型文法规则

        2. <strong>1型文法（上下文有关文法 Context\-sensitive Grammar，CSG）</strong>

            1. <strong>规则限制：</strong>产生式形如 αAβ → αγβ（核心：非终结符 A 只有在“上下文 α 和 β”中才能替换为 γ）；

            2. <strong>等价限制：</strong>\|α\| ≤ \|β\|（产生式右部长度≥左部长度，唯一例外是S → ε，且 S 不能出现在右部）。

            3. <strong>核心特点：</strong>替换非终结符时依赖上下文，不能随意替换。

            4. <strong>对应语言：</strong>1 型语言（上下文有关语言）。

            5. <strong>对应自动机：</strong>线性有界自动机（LBA，带有限制的图灵机）。

            6. 例子：aAb → aab（A 只有在 a 和 b 之间才能替换为 a）。

        3. <strong>2型文法（上下文无关文法Context\-freeGrammar，CFG）</strong>

            1. <strong>规则限制：</strong>产生式形如 A → β，其中 A 是单个非终结符，β 可以是任意终结符 \+ 非终结符组合（包括空串）。

            2. <strong>核心特点：</strong>替换非终结符时不依赖上下文，只要是 A 就能替换为 β，与周围符号无关。

            3. <strong>对应语言：</strong>2 型语言（上下文无关语言）。

            4. <strong>对应自动机：</strong>下推自动机（PDA，带栈的有限自动机）。

            5. <strong>核心应用：</strong>绝大多数编程语言的语法都用 CFG 描述（比如 C、Java 的表达式、语句规则）。

            6. 例子：E → E \+ T 、E → T 、T → \(E\) 、T → i   

        4. <strong>3 型文法（正规文法 / 正则文法 Regular Grammar，RG）</strong>

            1. <strong>规则限制：</strong>产生式只能是以下两种形式之一（最严格）：

                1. 右线性：A → aB 或 A → a（a 是终结符，A/B 是非终结符）；

                2. 左线性：A → Ba 或 A → a；

                3. 注：一个文法只能选右线性或左线性，不能混合

            2. <strong>核心特点：</strong>只能生成正则语言，规则极度简单。

            3. <strong>对应语言：</strong>3 型语言（正则语言）。

            4. <strong>对应自动机：</strong>有限自动机（FA）。

            5. <strong>核心应用：</strong>描述词法规则（比如标识符、数字、关键字的定义）。

            6. 例子：S → 0A 、A → 1A \| ε  // 右线性规则

    3. 核心概念

        1. <strong>推导：</strong>

            1. 给定文法 $G$，若 $A \to \gamma \in P$ 且 $\alpha, \beta \in (V_T \cup V_N)^*$，则文法符号串 $\alpha A \beta$ 可重写为 $\alpha \gamma \beta$，记作 $\alpha A \beta \Rightarrow \alpha \gamma \beta$，称 $\alpha A \beta$ <strong>直接推导</strong> $\alpha \gamma \beta$

            2. 如果 $\alpha_1 \Rightarrow \alpha_2 \Rightarrow \dots \Rightarrow \alpha_n$，则称这个序列是从 $\alpha_1$ 到 $\alpha_n$ 的一个<strong>推导</strong>。若存在一个从 $\alpha_1$ 到 $\alpha_n$ 的推导，则称 $\alpha_1$ 可以<strong>推导出</strong> $\alpha_n$

            3. <strong>推导长度</strong>：执行<strong>一步推导</strong>的次数

                1. 一步推导：$\Rightarrow$

                2. <strong>1</strong> 步或若干步的推导：$\Rightarrow^+$

                3. <strong>0</strong> 步或若干步的推导：$\Rightarrow^*$

        2. 语言：从<strong>开始符号</strong>出发，利用推导能得到的所有<strong>终结符号串</strong>的集合。文法 $G$ 的句子集合称为<strong>文法</strong>$G$<strong>生成的语言</strong>，记为 $L(G)$

            1. $L(G) = \{\alpha \mid S \stackrel{+}{\Rightarrow} \alpha,\ \alpha \in V_T^*\}$

            2. 上下文无关文法生成的语言称为<strong>上下文无关语言</strong>

            3. 文法和语言的关系

                1. 给定一个文法，就从结构上<strong>唯一</strong>地确定其语言

                2. 给定一种语言，能确定其文法，但文法<strong>不唯一</strong>

                    ![image\.png](/MyBlog/uploads/course-compiler/image-23.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-34.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-111.png)

            4. 等价文法：设 $G_1$ 和 $G_2$ 是两个文法，若 $L(G_1) = L(G_2)$，称 $G_1$ 与 $G_2$ 为<strong>等价文法</strong>。

        3. 句型：如果 $S \Rightarrow^* \alpha$，$\alpha \in (V_T \cup V_N)^*$，则 $\alpha$ 为文法 $G$ 的<strong>句型</strong>

        4. 句子：如果 $S \Rightarrow^+ w$（<strong>终结符号串</strong>），则 $w$ 为文法 $G$ 的<strong>句子</strong>

        5. 语法分析树：从一个句型到一个句型的推导往往不唯一，可以以<strong>图形方式</strong>描述一个句子的推导过程，称为<strong>语法分析树（简称语法树）</strong>。某一文法的<strong>语法树</strong>具有以下性质：

            - 根节点是<strong>开始符号</strong>

            - 叶节点是<strong>终结符</strong>（\*token\*）和 $\varepsilon$

            - 内部节点（非叶结点）是<strong>非终结符</strong>

            - 如果应用了规则 $A \to x_1 x_2 \dots x_n$，则 $A$ 是内部结点；$x_1, x_2, \dots, x_n$ 是其<strong>从左到右</strong>的子结点（内部结点或叶结点）

            - 全部叶子结点从左到右构成开始符号推导得到的符号串

                ![image\.png](/MyBlog/uploads/course-compiler/image-185.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-115.png)

        6. 二义性：若文法<strong>存在某个句子（句型）</strong>对应<strong>两棵不同的语法树</strong>，则称该<strong>文法是二义的</strong>。

            ![image\.png](/MyBlog/uploads/course-compiler/image-147.png)

            1. 可以基于<strong>优先级</strong>和<strong>结合性</strong>构建无二义的文法

                - 四则运算存在两个优先级，可引入两个非终结符 *expr* 和 *term* 来对应不同的运算优先级层次。

                - 四则运算均为左结合，因此在每条规则中，<strong>更为抽象</strong>的非终结符应位于左边

        7. 最左推导和最右推导

            1. <strong>最左推导</strong>：首先替换<strong>最左边的</strong>非终结符

            2. <strong>最右推</strong>：首先替换<strong>最右边的</strong>非终结符

            3. 最左（右）推导与分析树一一对应

                - 可以通过说明对于<strong>某一个串</strong>存在<strong>两个不同</strong>的最左推导来证明文法二义

                - 可以通过说明对于<strong>某一个串</strong>存在<strong>两个不同</strong>的最右推导来证明文法二义

                    ![image\.png](/MyBlog/uploads/course-compiler/image-194.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-88.png)

## 第三章

1. <strong>词法分析的任务：</strong>从左向右逐行扫描源程序的字符，识别出各个<strong>单词</strong>，确定<strong>单词的类型</strong>。并将识别出的单词转换成统一的机内表示——<strong>词法单元</strong>（ *token* ）形式，对应语法分析的终结符。

    ![image\.png](/MyBlog/uploads/course-compiler/image-29.png)

    1. 编译程序是在单词的级别上来分析和翻译源程序，因此，词法分析是编译的基础

    2. <strong>词法分析器的作用</strong>

        - 读入源程序，过滤注释、空格、制表符、换行符等

        - 按词法规则<strong>识别词素</strong>，抽象成<strong>记号</strong>；同时处理浮点数、整数字面值等。

        - 建立符号表，将记号插入符号表

        - 发现<strong>词法错误</strong>，建立错误消息与源程序的<strong>位置</strong>联系

        - 将记号提交给语法分析器

2. 基本概念：

    1. <strong>词法单元（Token）：</strong>具有独立含义的<strong>最小语法单位</strong>，每个记号代表一类符号串，常见记号：保留字，标识符，常量，分界符或操作符\(例如\*,;\)

    2. <strong>串：</strong>是由字母表中符号组成的<strong>有限序列</strong>（以串$S=banana$为例）：

        1. <strong>前缀：</strong>从尾部删除 0 或多个符号得到的串。ban, banana, ε

        2. <strong>后缀</strong>：从首部删除 0 或多个符号得到的串。ana, banana, ε

        3. <strong>真前缀：</strong>不等于原串，也不为ε的<strong>前缀</strong>

        4. <strong>子串：</strong>删除某个前缀和某个后缀后得到的串。nan, ban, ana, banana, ε

        5. <strong>子序列：</strong>删除 0 或多个符号所得的串。bnan, nn, ε

    3. <strong>正则式 RE：</strong>基于字母表构造串的一组<strong>规则</strong>（<strong>模板、模式</strong>），如果$r $是正则式，则$L(r)$表示$r$描述的<strong>语言</strong>（正规集、正则集）

        1. 模式（Pattern）：描述某个记号的词素组合的构造规则

        2. 词素（Lexeme）：源程序的符号序列，可匹配某个记号的模式

            1. e\.g\.：标识符: x, count, name, …

        3. 基于一个字母表，可以通过不同的正则式来定义不同的语言

        4. <strong>正则语言：</strong>由正则式生成的<strong>串的集合</strong>称为<strong>正则语言</strong>。语言中<strong>串</strong>的数量可能有限，也可能无限，它们就是词法分析时的<strong>词素</strong>。

            ![image\.png](/MyBlog/uploads/course-compiler/image-134.png)

    4. 有穷自动机 FA：是对<strong>一类处理系统</strong>建立的<strong>数学模型</strong>

        1. 这类系统具有一系列<strong>离散的输入输出信息</strong>和<strong>有穷数目的内部状态</strong>（状态：概括了对过去输入信息处理的状况）

        2. 系统只需要根据<strong>当前所处的状态</strong>和<strong>当前的输入信息</strong>就可以决定系统的<strong>后继行为</strong>（下一状态）。每当系统处理了当前的输入后，系统的内部<strong>状态也将发生改变</strong>

        3. 有穷自动机（FA）的理论模型是“无输出的识别器”，其核心能力是：<strong>识别字符串是否属于某个正则语言，即回答“是”或“否”。</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-109.png)

        4. FA 的分类

            1. <strong>确定的有穷自动机 DFA：</strong>DFA 是 NFA 的一个特例

                ![image\.png](/MyBlog/uploads/course-compiler/image-131.png)

                - 对状态转换图的形式化定义

                - 没有输入 $\varepsilon$ 之上的转换动作

                - 对每个状态 $s$ 和<strong>每个</strong>输入符号 $a$，<strong>有且仅有</strong>一条标号为 $a$ 的边离开

            2. <strong>不确定的有穷自动机 NFA：</strong>

                ![image\.png](/MyBlog/uploads/course-compiler/image-28.png)

            3. 从状态图看 NFA 和 DFA 的区别

                - NFA 可以有<strong>多个初态</strong>

                - 弧上的标记可以是 $\Sigma^*$ 中的一个字（甚至可以是一个正规式），而<strong>不一定</strong>是单个字符

                - 同一个字可能出现在同状态射出的<strong>多条弧</strong>上

        > ![image\.png](/MyBlog/uploads/course-compiler/image-124.png)
        > 
        > DFA 是 NFA 的特例
        > 
        > 

    5. 表示：

        1. <strong>状态转换图：</strong>

            - <strong>结点</strong>：FA 的<strong>状态</strong>

                - 初始状态（开始状态）：只有一个，由 start 箭头指向

                - 终止状态（接收状态）：可以有多个，用<strong>双圈</strong>表示

            - 带标记的<strong>有向边</strong>：如果对于<strong>输入</strong>$a$，存在一个从状态 $p$ 到状态 $q$ 的转换，就在 $p$、$q$ 之间画一条有向边，并标记上 $a$

                ![image\.png](/MyBlog/uploads/course-compiler/image-187.png)

        2. <strong>状态转换表：</strong>描述各个状态下，对应于各个输入的状态迁移。

            ![image\.png](/MyBlog/uploads/course-compiler/image-178.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-20.png)

    6. FA 对输入字符串的接受

        - 给定输入串 $x$，如果存在一个对应于串 $x$ 的从<strong>初始状态</strong>到<strong>某个终止状态</strong>的转换序列，则称<strong>串</strong>$x$<strong>被该 FA 接受</strong>

        - 路径中的 $\varepsilon$ 标号将被忽略

        - 由一个有穷自动机 $M$ 接收的所有串构成的集合称为是该 <strong>FA 定义</strong>（或<strong>接收</strong>）的<strong>语言</strong>，记为 $L(M)$

        - 当输入串的<strong>多个前缀</strong>与一个或多个模式匹配时，总是选择<strong>最长的前缀</strong>进行匹配

        - 在到达某个终态之后，只要输入带上还有符号，FA 就继续前进，以便寻找<strong>尽可能长的匹配</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-86.png)

    7. DFA 和 NFA 的等价性

        - <strong>等价 FA</strong>：对于任何两个有限自动机 $M$ 和 $M'$，若 $L(M) = L(M')$，则称 $M$ 和 $M'$ <strong>等价</strong>

        - 对任何<strong>非确定</strong>的有穷自动机 $N$，存在定义<strong>同一语言</strong>的<strong>确定</strong>的有穷自动机 $D$

        - 对任何<strong>确定</strong>的有穷自动机 $D$，存在定义<strong>同一语言</strong>的<strong>非确定</strong>的有穷自动机 $N$

        > <strong>DFA 与 NFA 描述能力相同！</strong>
        > 
        > 

    

3. RE→NFA

    1. 手工法

    2. MYT 法

        1. 正则式$\varepsilon$对应 NFA：<strong>增加 2 个状态，1 条边</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-81.png)

        2. 正则式$a\in \Sigma$ 对应 NFA：<strong>增加 2 个状态，1 条边</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-55.png)

        3. 若 $s, t$ 是正则式，$N(s)$ 和 $N(t)$ 是对应的 NFA，则 $s \mid t$ 对应之 NFA 为：<strong>增加 2 个状态，4 条边</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-184.png)

        4. 若 $s, t$ 为正则式，$N(s)$ 和 $N(t)$ 是对应的 NFA，则 $st$ 对应之 NFA 为：<strong>减少 1 个状态</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-112.png)

        5. 如果 $s$ 是正则式，$N(s)$ 为对应 NFA，则 $s^*$ 对应之 NFA 为：<strong>增加 2 个状态，4 条边</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-105.png)

4. NFA→DFA：子集构造法

    1. <strong>前置知识：</strong>NFA 状态集上的表示

        ![image\.png](/MyBlog/uploads/course-compiler/image-67.png)

        - $\varepsilon\text{-closure}(s)$：$s \in S$ —— <strong>状态</strong>$s$<strong>的</strong>$\varepsilon$<strong>闭包</strong>

            从状态 $s$ 出发，仅通过若干条（含 0 条）$\varepsilon$ 边就能到达的状态集合

        - $\varepsilon\text{-closure}(T)$：$T \subseteq S$ —— <strong>状态集</strong>$T$<strong>的</strong>$\varepsilon$<strong>闭包</strong>

            从状态集 $T$ 中任一状态出发，仅通过若干条（含 0 条）$\varepsilon$ 边就能到达的状态集

        - $move(T, a)$：$T \subseteq S,\ a \in \Sigma$ —— <strong>状态集</strong>$T$<strong>的转移函数</strong>

            对于状态集 $T$，在输入 $a$ 时，可以到达的状态集合（<strong>不考虑</strong>$\varepsilon$<strong>边</strong>）

    2. <strong>构造思路：</strong>DFA 的每个状态都是一个由 NFA 中的状态构成的<strong>集合</strong>,即<strong>NFA 状态集合的一个子集</strong>

    3. <strong>构造算法</strong>

        1. 不失一般性，设字母表只包含两个字母 $a$ 和 $b$，构造表格：

            1. 置第一行第一列为 $\varepsilon\text{-closure}(\{S_0\})$，求该行的 $I_a$，$I_b$

            2. 检查 $I_a$，$I_b$ 是否已在表的第一列中出现，未出现将其填入第一列

            3. 计算下一行的 $I_a$，$I_b$，重复第 2 步，<strong>直到所有第 2、3 列子集都出现在第一列为止。</strong>

                ![image\.png](/MyBlog/uploads/course-compiler/image.png)

            4. 将上表看作一个状态转换矩阵，每个子集看成一个状态。该表唯一刻画了一个<strong>确定的有穷自动机 DFA</strong>

                - <strong>初态</strong>是 $\varepsilon\text{-closure}(\{ S_0\})$

                - <strong>终态</strong>是含有原终态 $\{ F\}$ 的子集

                    ![image\.png](/MyBlog/uploads/course-compiler/image-60.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-165.png)

5. DFA→最小化 DFA

    1. 前置概念

        - <strong>自动机的等价</strong>：识别同一语言的两个 DFA 等价。

        - <strong>同构</strong>：如果仅需变换状态的名字就可以将一个 DFA 变成另一个，则这两个 DFA 同构。

        - <strong>两个状态的等价</strong>：<strong>同时是或不是接受状态</strong>，且对任意的输入，总是转向<strong>同一状态</strong>或<strong>等价状态</strong>

        - <strong>最少状态数的 DFA</strong>：合并等价状态。

        - <strong>串</strong>$x$<strong>可区分状态</strong>$s$<strong>和</strong>$t$：分别从 $s$ 和 $t$ 出发，沿串 $x$ 到达的两个状态中，只有一个是接受状态。

    2. 最小化一个 DFA $M$ 的状态数

        1. <strong>基本思想</strong>：将 $M$ 的状态集划分为一些不相交的子集，使得<strong>任何两个不同子集的状态是可区分的</strong>，而<strong>同一子集的任何两个状态是等价的</strong>。最后，选择每个子集一个状态作代表，消去其他状态。

        2. 按如上原则，所有状态的初始划分为：<strong>终态</strong>和<strong>非终态</strong>两个集合

    3. 划分过程

        1. <strong>初始划分</strong>：将 DFA 的状态集划分为两个子集，终止状态集 $F$ 和非终止状态集 $S - F$，即 $\Pi_0 = \{F,\ S - F\}$。

        2. <strong>迭代划分</strong>：对当前划分 $\Pi_i$ 的每个子集 $S$ 中任意两个状态 $q_1$ 和 $q_2$，若存在 $a \in \Sigma$，使得 $\sigma(q_1, a)$ 和 $\sigma(q_2, a)$ 属于 $\Pi_i$ 中的不同子集，则将 $q_1$ 和 $q_2$ 分到不同的子集中。重复该步，直到划分不再变化为止。

        3. <strong>合并等价状态</strong>：经上述迭代划分后，每个子集内的状态是等价的。将每个子集合并为一个状态，得到最小化的 DFA。

            1. 若 $I$ 含有原来的初态，则其为新的初态

            2. 若 $I$ 含有原来的终态，则其为新的终态

                ![image\.png](/MyBlog/uploads/course-compiler/image-19.png)

## 第四章

1. 基本概念：

    1. 语法分析：<strong>语法分析</strong>是编译程序的<strong>核心过程</strong>。它的任务是按照给定的文法，从源程序符号串中识别出各类语法成分，并进行语法检查，为语义分析和代码生成做准备。

        ![image\.png](/MyBlog/uploads/course-compiler/image-130.png)

    2. <strong>上下文无关文法 CFG：</strong> 是一个四元式 $G = (V_T,\ V_N,\ S,\ P)$，基于文法自动构建编译器

        - $V_T$：终结符集合（非空），<strong>词法单元</strong>（token），为源代码中具体的一个字符串，可以为空，只能在生成式<strong>右边</strong>

        - $V_N$：非终结符集合（非空），<strong>语法成分</strong>，也称语法变量，必定在某个生成式<strong>左边</strong>出现，且 $V_T \cap V_N = \varnothing$

        - $S$：初始符号，最高层次的语法成分，对于编程语言来说，可以是 program 或者 module，$S \in V_N$

        - $P$：产生式集合（有限），每个产生式形式为 $P \to \alpha$，$P \in V_N$，$\alpha \in (V_T \cup V_N)^*$

        - 开始符 $S$ 必须至少在某个产生式的左部出现一次 

        - $V_T$ 是终结符号集合

    3. 推导：给定文法 $G$，从 $G$ 的<strong>开始符号</strong> $S$ 开始，用产生式的<strong>右部</strong>替换左侧的<strong>非终结符</strong>，此过程不断重复，直到不出现<strong>非终结符</strong>为止，最终的串称为<strong>句子</strong>。

        > 每一步推导中，都需要做两个选择：
        > 
        > - 选择当前句型的<strong>哪个非终结符</strong>进行替换
        > 
        > - 选择该非终结符的<strong>哪个候选式</strong>进行替换
        > 
        > 

        - <strong>最左推导</strong>：每次总是选择<strong>最左侧</strong>的符号进行替换

            ![image\.png](/MyBlog/uploads/course-compiler/image-102.png)

        - <strong>最右推导</strong>：每次总是选择<strong>最右侧</strong>的符号进行替换

    4. 语法分析树：推导可以表达成树状结构，推导的顺序无关（最左、最右或其他）

        1. <strong>特点：</strong>

            - 每个<strong>内部结点</strong>代表一个产生式的应用，其标号对应产生式左部的<strong>非终结符</strong>，其儿子结点的标号从左到右组成产生式的右部。

            - 每个<strong>叶子结点</strong>的标号既可以是<strong>非终结符</strong>，也可以是<strong>终结符</strong>。从左到右排列所有叶子结点标号得到一个句型。

                ![image\.png](/MyBlog/uploads/course-compiler/image-139.png)

    5. 文法二义性：一个文法是<strong>二义</strong>的，如果：

        - 能为<strong>某个句子</strong>（句型）生成<strong>多棵语法分析树</strong>（推荐）

        - 能为<strong>某个句子</strong>（句型）生成<strong>多个最左推导</strong>

        - 能为<strong>某个句子</strong>（句型）生成<strong>多个最右推导</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-12.png)

2. 语法分析方法：

    1. <strong>功能</strong>：给定文法 $G$ 和句子 $s$，确定如何使用 $G$ 推导 $s$ 的过程。

    2. <strong>语法分析方法分类：</strong>

        1. <strong>自顶向下</strong>：从<strong>根结点</strong>开始，逐步向<strong>叶子结点</strong>方向进行构造

            > <strong>自顶向下分析基本思想</strong>：从<strong>根节点</strong>向<strong>叶节点</strong>方向构造分析树。即从文法的<strong>开始符号</strong> $S$ 的根结点开始，反复执行以下两个步骤：
            > 
            > 

            - <strong>扩展结点</strong>：在标号为非终结符号 $A$ 的结点 $N$ 上，根据输入流中的<strong>下一个终结符</strong>，选择 $A$ 的一个产生式，并为该产生式体中的各个符号构造出 $N$ 的子结点。

            - <strong>确定待扩展结点</strong>：寻找下一个结点来构造子树，通常选择当前语法分析树中<strong>最左边的</strong>尚未扩展的非终结符。

        2. <strong>自底向上</strong>：从<strong>叶结点</strong>开始，逐步构造<strong>根结点</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-180.png)

3. <strong>预测分析法：LL\(1\)</strong>

    1. 定义：

        1. 第一个<strong>L</strong>表示<strong>从左向右</strong>扫描输入，第二个<strong>L</strong>表示<strong>最左推导</strong>，<strong>1</strong>表示只需向前看一个输入符号

        2. 对于LL\(1\)文法，可以构造出<strong>不需要回溯</strong>的递归下降语法分析器。

    2. 自顶向下分析面临的问题

        1. 无限循环

            - <strong>原因</strong>：左递归

                - 直接左递归

                - 间接左递归

                    ![image\.png](/MyBlog/uploads/course-compiler/image-155.png)

            - <strong>解决方法</strong>：重写文法，消除左递归

        2. 回溯：

            1. 非终结符选择产生式是一个"<strong>尝试并犯错</strong>"的过程。即当一个非终结符用某一个候选式匹配成功时，这种匹配可能是暂时的。<strong>出错</strong>时，需要进行"<strong>回溯</strong>"，继续尝试另一个产生式。

            2. 当出现形如 $A \to \alpha\beta_1 \mid \alpha\beta_2$（存在<strong>共同前缀</strong>）的产生式，此时无法确认应该选择 $A$ 的哪个产生式，可以通过改写产生式（<strong>提取左公因子</strong>）来推后这个决定，等获得足够信息后再做出正确的选择。

            3. $\begin{aligned} A &\to \alpha A' \\ A' &\to \beta_1 \mid \beta_2 \end{aligned}$

            - <strong>原因</strong>：匹配失败

            - <strong>解决方法</strong>：提取左公因式

    3. 消除左递归

        1. <strong>直接左递归</strong>：产生式体的最左边的符号和产生式头部相同

            1. 如 $A \to A\alpha \mid \beta$（$\alpha \neq \varepsilon$，$\beta$ 不以 $A$ 开头）

            2. <strong>左递归消除</strong>：将直接<strong>左递归</strong>转化为直接<strong>右递归</strong>，将产生式转换成下面形式，得新的文法 $G'$：

                1. $\begin{aligned} A &\to \beta A' \\ A' &\to \alpha A' \mid \varepsilon \end{aligned}$

                    ![image\.png](/MyBlog/uploads/course-compiler/image-8.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-100.png)

        2. <strong>间接左递归</strong>：由<strong>多步推导</strong>带来的左递归

            1. 如果文法不存在环或 $\varepsilon$ 产生式，一定可以消除左递归

            2. 【例】给定文法 $G(S)$：

                1. $\begin{aligned} S &\to Qc \mid c \\ Q &\to Rb \mid b \\ R &\to Sa \mid a \end{aligned}$

                2. 没有直接左递归，但 $S$、$Q$、$R$ 都是左递归的

                    1. $S \Rightarrow Qc \Rightarrow Rbc \Rightarrow Sabc$

                        ![image\.png](/MyBlog/uploads/course-compiler/image-96.png)

                        ![image\.png](/MyBlog/uploads/course-compiler/image-136.png)

            3. <strong>为什么 A 存在间接左递归，而 S 不存在？</strong>算法中的"消除左递归"是按非终结符顺序逐步代入，规则是：对于排序为 P₁, P₂, \.\.\., Pₙ 的非终结符，处理 Pᵢ 时，把所有 Pⱼ（j \< i）代入 Pᵢ 的产生式。

                ![image\.png](/MyBlog/uploads/course-compiler/image-144.png)

    4. 提左公因子：消除回溯必须保证：对文法的任何非终结符，当要它去匹配输入串时，能够根据它所面临的输入符号<strong>准确地指派</strong>它的一个候选去执行任务，并且此候选的工作结果应是确信无疑的。

        1. 通过改写产生式来<strong>推迟决定</strong>，等读入了足够多的输入，获得足够信息后再做出正确的选择

            ![image\.png](/MyBlog/uploads/course-compiler/image-13.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-90.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-150.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-41.png)

    5. 计算 FIRST 集、FOLLOW 集及 SELECT 集

        1. FIRST 函数（FIRST 集）：对于任意文法符号串 $\alpha$，$\text{FIRST}(\alpha)$ 是可从 $\alpha$ 推导得到的串的<strong>首符号</strong>的集合。

            - 如果 $\alpha \stackrel{*}{\Rightarrow} \varepsilon$，则 $\varepsilon$ 也在 $\text{FIRST}(\alpha)$ 中（即 $\alpha$ <strong>可空</strong>）

            - $\text{FIRST}(\alpha) = \{t \mid \alpha \stackrel{*}{\Rightarrow} t\beta,\ t \in T\} \cup \{\varepsilon \mid \alpha \stackrel{*}{\Rightarrow} \varepsilon\}$

            - 反复执行以下步骤，直至无法加入新的终结符或 $\varepsilon$：

                1. 若 $X$ 是终结符，则 $\text{FIRST}(X) = \{X\}$。

                2. 若 $X$ 是非终结符且有规则 $X \to Y_1 Y_2 \dots Y_k$，则将 $\text{FIRST}(Y_1 Y_2 \dots Y_k)$ 中的元素加入 $\text{FIRST}(X)$；

                3. 若 $X \to \varepsilon$，则将 $\varepsilon$ 加入 $\text{FIRST}(X)$。

            - 计算文法符号串 $X_1 X_2 \dots X_n$ 的 FIRST 集

                1. 初始化 $\text{FIRST}(X_1 X_2 \dots X_n)$ 为空集

                2. 将 $\text{FIRST}(X_1)$ 中的所有终结符加入 $\text{FIRST}(X_1 X_2 \dots X_n)$

                3. `for (i = 1; i < n - 1; i++)`

                    1. 如果 $X_i$ 可空，将 $\text{FIRST}(X_{i+1})$ 中的所有终结符加入，

                    2. <strong>否则 break</strong>；

                4. 如果所有 $X_i$ 可空，则将 $\varepsilon$ 加入 $\text{FIRST}(X_1 X_2 \dots X_n)$

                    ![image\.png](/MyBlog/uploads/course-compiler/image-35.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-138.png)

        2. FOLLOW 函数（FOLLOW 集）：对于文法 $G[S]$ 的非终结符号 $A$：$t \in \text{FOLLOW}(A)$ 当且仅当：

            - $S \stackrel{*}{\Rightarrow} \dots At \dots$

            - 这里 $t$ 为<strong>终结符</strong>或输入结束标志 $\char36 $

            - 计算非终结符的 FOLLOW 集

                - 反复执行以下规则，直到无法加入新的终结符和 $\char36 $：

                    1. 如果 $S$ 是开始符，将 $\char36$ 加入 $\text{FOLLOW}(S)$，这里 $\char36$ 是输入结束标记。

                    2. 如果有规则 $A \to \alpha B \beta$，则将 $\text{FIRST}(\beta)$ 中的终结符加入 $\text{FOLLOW}(B)$。

                    3. 如果有：

                        - \(1\) 规则 $A \to \alpha B$，或者

                        - \(2\) 规则 $A \to \alpha B \beta$，且 $\beta$ 可空

                        则将 $\text{FOLLOW}(A)$ 加入 $\text{FOLLOW}(B)$。

            - 如果有规则 $A \to \alpha B \beta$：

                - 当 $\beta$ <strong>不可空</strong>时，$\text{FOLLOW}(B)$ 中加入 $\text{FIRST}(\beta)$

                - 当 $\beta$ <strong>可空</strong>时，$\text{FOLLOW}(B)$ 中加入 $(\text{FIRST}(\beta) - \{\varepsilon\}) \cup \text{FOLLOW}(A)$

                    ![image\.png](/MyBlog/uploads/course-compiler/image-143.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-93.png)

        3. SELECT 集，产生式的<strong>可选集：</strong>产生式 $A \to \beta$ 的可选集是指可以选用该产生式时，对应的输入符号的集合，记为 $\text{SELECT}(A \to \beta)$。

            1. $\text{SELECT}(A \to \beta) = \text{FIRST}(\beta) \cup \text{FOLLOW}(A)$

            - $\varepsilon \notin \text{FIRST}(\beta)$ 时，$\text{SELECT}(A \to \beta) = \text{FIRST}(\beta)$

            - $\varepsilon \in \text{FIRST}(\beta)$ 时，$\text{SELECT}(A \to \beta) = \text{FOLLOW}(A) \cup (\text{FIRST}(\beta) - \{\varepsilon\})$

            也称<strong>预测集</strong>（\*predict set\*）。

        4. LL（1）文法判定：一个文法 $G$ 是 <strong>LL\(1\)</strong> 的，当且仅当 $G$ 的<strong>任意两个左部相同</strong>的产生式 $A \to \alpha \mid \beta$ 满足下面条件：

            - $\alpha$ 和 $\beta$ 不会导出以<strong>相同终结符</strong>开头的串

            - $\alpha$ 和 $\beta$ 中<strong>最多只有一个</strong>可空

            - 如果 $\beta$ 可空，那么 $\alpha$ 不能推导出以 $\text{FOLLOW}(A)$ 中某个符号开头的串

                ![image\.png](/MyBlog/uploads/course-compiler/image-43.png)

    6. <strong>构建预测分析表\(产生式）</strong>表的每一行对应一个非终结符，每一列对应一个输入符号（<strong>终结符</strong>和输入结束标志 $\char36 $）

        1. 正常描述（不大正常）

            1. 为每条规则 $A \to \alpha$，重复步骤 2、3

            2. 终结符 $a$ 在 $\text{FIRST}(\alpha)$ 中时，将 $A \to \alpha$ 加入 $M[A, a]$

            3. 若 $\alpha$ 可空：对于 $b \in \text{FOLLOW}(A)$，将 $A \to \alpha$ 加入 $M[A, b]$。

            4. 分析表中<strong>未定义项目</strong>均为错误。

            5. 若表中存在<strong>多重定义项目</strong>，则本文法<strong>非 LL\(1\)</strong>。

        2. 基于 SELECT 集的描述

            1. 为每条规则 $A \to \alpha$，若终结符 $a$ 或 $\char36$ 在 $\text{SELECT}(A \to \alpha)$ 中时，则将 $A \to \alpha$ 加入 $M[A, a]$ 或 $M[A, \char36]$ 中。

            2. 分析表中<strong>未定义项目</strong>均为错误。

            3. 若表中存在<strong>多重定义项目\(一个格里面有多个\)</strong>，则本文法<strong>非 LL\(1\)</strong>。

                ![image\.png](/MyBlog/uploads/course-compiler/image-161.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-181.png)

    7. 考虑错误处理的预测分析表（同步词法单元的）：

        1. 为每条规则 $A \to \alpha$，若终结符 $a$ 或 $\char36$ 在 $\text{FOLLOW}(A)$ 且不在 $\text{SELECT}(A\rightarrow\alpha)$ 中时，则将 $synch$ 加入 $M[A, a]$ 或 $M[A, \char36]$ 中。

            ![image\.png](/MyBlog/uploads/course-compiler/image-121.png)

    8. 构建句子的分析过程（栈、输入及动作）

        1. LL（1）分析：

            ![image\.png](/MyBlog/uploads/course-compiler/image-116.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-152.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-132.png)

        2. <strong>预测分析中的错误恢复（恐慌模式）</strong>：忽略输入中的符号，直到出现栈顶的<strong>同步词法单元</strong>（也称<strong>同步符号</strong>）。

            - 同步词法单元集合常简称<strong>同步集合</strong>。

            - 终结符 <strong>a</strong> 的同步符号就是 <strong>a</strong>，出现同步符时<strong>弹栈 \+ 忽略输入</strong>。

            - 非终结符 <strong>A</strong> 的同步符号是 <strong>FOLLOW\(A\)</strong> 中的所有符号，出现同步符时<strong>仅弹栈</strong>。

            - 结合错误恢复的预测分析过程

                ![image\.png](/MyBlog/uploads/course-compiler/image-26.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-176.png)

4. 自底向上分析：LR\(0\),SLR\(1\),LR\(1\),LALR\(1\)

    1. 基本概念

        是自顶向下分析的逆过程：把一个串归约到文法的开始符。对于文法 $G[S]$，$\alpha\beta\delta$ 是 $G$ 的一个句型，若有 $S \Rightarrow^*_{rm} \alpha A \delta$，且

        1. 短语：$A \Rightarrow^+_{\text{rm}} \beta$，则称$\boldsymbol{\beta}$是句型$\alpha\beta\delta$相对于 A 的<strong>短语</strong>。

        2. 直接短语：$A \Rightarrow \beta$，则称$\boldsymbol{\beta}$是句型$\alpha\beta\delta$相对于 A 的<strong>直接短语</strong>。

            ![image\.png](/MyBlog/uploads/course-compiler/image-4.png)

        3. 句柄：一个句型的<strong>最左直接短语</strong>称为该句型的句柄

            1. 一个句型可能有多个不同的句柄

            2. 一个无二义文法的右句型只有唯一的句柄

                ![image\.png](/MyBlog/uploads/course-compiler/image-52.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-5.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-128.png)

        4. 规范\-归约语法分析：

            - 自底向上语法分析的一种方法。

            - 使用一个<strong>栈</strong>来保存状态（和文法符号），使用一个<strong>输入缓冲区</strong>来存放将要进行语法分析的其余符号。

            - <strong>句柄</strong>在被识别（归约）时，完整地出现在栈顶。

                ![image\.png](/MyBlog/uploads/course-compiler/image-3.png)

            > $S$ 是文法的开始符，$w$ 为待识别的输入串
            > 
            > 

            - <strong>归约</strong>：先将一个子串与某规则的右部匹配，然后将该子串替换为该规则的左部。

                - 移入\-归约：

                    - <strong>移入：</strong>将下一个输入符号移到栈的顶端

                    - <strong>归约：</strong>被归约的符号串的右端必然处于栈顶。语法分析器在栈中确定这个串的左端，并决定用哪个非终结符来替换这个串

                    - <strong>接受：</strong>宣布语法分析过程成功完成

                    - <strong>报错：</strong>发现一个语法错误，并调用错误恢复子例程

            - 在自底向上的分析中，总是采用最左归约的方式，因此把<strong>最左归约</strong>称为<strong>规范归约</strong>

                ![image\.png](/MyBlog/uploads/course-compiler/image-78.png)

            - <strong>规范归约</strong>是<strong>最右推导</strong>的逆过程，则<strong>最右推导</strong>相应地称为<strong>规范推导</strong>

                ![image\.png](/MyBlog/uploads/course-compiler/image-73.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-140.png)

            - 由规范推导推出的句型称为<strong>规范句型</strong>

        5. 活前缀

            - <strong>前缀</strong>：符号串的任意首部

            例：`abc` 的前缀：<strong>ε（含空串）</strong>, a, ab, abc

            - <strong>活前缀（可行前缀）</strong>：文法G\[S\]的一个规范句型αβ，其中β为终结符号串。若α不含句柄之后的任何符号，则称α为活前缀（可行前缀）

            - <strong>可归前缀</strong>：如果α是含有句柄的活前缀，则称α为可归前缀

            > 核心结论：<strong>可归前缀即最长的活前缀</strong>
            > 
            > ![image\.png](/MyBlog/uploads/course-compiler/image-168.png)
            > 
            > 

    2. 自底向上分析法的基本过程：

        1. <strong>构建增广文法：引入 S’→ S，给产生式编号</strong>

            1. LR\(0\)项目：简称<strong>项</strong>，由文法 G 的产生式加一个圆点构成

                > 项目描述了句柄识别的状态
                > 
                > 

                1. 由文法 G 的每个产生式右部加一个圆点构成，简称<strong>项</strong>

                2. 表示在分析过程中的给定点上，已经看到了产生式的哪些部分

                    1. S→XYZ 有四个项目：

                        1. S→•XYZ，S→X•YZ，S→XY•Z 和 S→XYZ•

                        - $S \to \bullet XY$ 表示希望接下来看到一个能从 $XY$ 推导得到的串

                        - $S \to X \bullet Y$ 表示已经看到一个可以由 $X$ 推导得到的串，希望接下来看到一个能从 $Y$ 推导得到的串

                        - $S \to XY \bullet$ 表示栈顶看到了 $XY$，可以把它归约为 $S$

                    2. A→ε 只有一个项目：A→•

                3. LR\(0\)项目分为4类

                    1. <strong>① 移进项目</strong>

                        1. 格式：$A→α\bullet aβ$

                        2. 圆点后面是<strong>终结符</strong>，表示栈内是句柄的一部分，期待从输入串中移进一个符号，以形成句柄。

                    2. <strong>② 待约项目</strong>

                        1. 格式：$A→α\bullet Bβ$

                        2. 圆点后面是<strong>非终结符</strong>，表示栈内是句柄的一部分，为了形成句柄，期待从输入串中进行归约而得到 B，然后才能继续分析 A 的右部。

                    3. <strong>③ 归约项目</strong>

                        1. 格式：$A→α\bullet $

                        2. 圆点在最后，表示栈顶的部分内容已构成所期望的句柄，应使用产生式$A→α$进行归约。

                    4. <strong>④ 接受项目</strong>

                        1. 格式：$S'→α\bullet $

                        2. <strong>特殊的归约项目</strong>，使用产生式$S'→α$进行归约，表示整个句子已经分析完毕，分析成功，即输入串为该文法的句子。

                            ![image\.png](/MyBlog/uploads/course-compiler/image-49.png)

                            ![image\.png](/MyBlog/uploads/course-compiler/image-175.png)

                    > 关键提示：归约项目 和 归约项目或移进项目 共存于一个项目集合中会引起冲突
                    > 
                    > 

                    ![image\.png](/MyBlog/uploads/course-compiler/image-58.png)

                    1. 增广文法：文法 $G[S]$ 的<strong>增广文法</strong> $G'$：

                        1. <strong>构造方法</strong>：引入<strong>新开始符号</strong> $S'$，并增加一个<strong>新产生式</strong> $S' \to S$

                        2. <strong>当且仅当</strong>使用产生式 $S' \to S$ 进行归约时，输入符号串被接受。

        2. <strong>构建 LR 自动机（项集闭包，后继项集闭包）</strong>

            1. 项集：项的集合。

            2. <strong>项集I的闭包CLOSURE\(I\)</strong>

                1. 首先将I中所有元素加入CLOSURE\(I\)。

                2. 若$A→α\bullet Bβ∈CLOSURE(I)$，将所有的$B→γ$产生式对应的项$B→\bullet γ$加入CLOSURE\(I\)

                3. 反复使用规则 2，直至无新项可加入

                4. 公式：$CLOSURE(I) = I ∪ \{B→\bullet γ \mid A→α\bullet Bβ∈CLOSURE(I),\ B→γ∈P\}$

            3. CLOSURE\(I\)函数伪代码

            `SetOfItems CLOSURE (I) {`

            `J = I;`

            `repeat`

            `for (J中的每个项 A → α•Bβ)`

            `for (G的每个产生式 B → γ)`

            `if (项 B → •γ 不在J中)`

            `将 B → •γ 加入J中;`

            `until 在某一轮中没有新的项被加入到J中;`

            `return J;`

            `}`

            ![image\.png](/MyBlog/uploads/course-compiler/image-63.png)

            4. LR（0）自动机的使用

                ![image\.png](/MyBlog/uploads/course-compiler/image-188.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-39.png)

        3. <strong>构建 LR 分析表</strong>

            1. LR 分析器的核心是<strong>一张分析表：</strong>如果基于某文法构建的<strong>所有</strong> LR\(0\) 项集，<strong>要么只有移入项目，要么只有一个归约项目或接受项目</strong>，则可以构建 <strong>LR\(0\)</strong> 分析表，并且：

                - 该文法称为 <strong>LR\(0\) 文法</strong>

                - 在分析时，<strong>不需要看输入</strong>即可确定动作

                - 分析表中，归约项目<strong>无需考虑后继</strong>

            2. 构建过程：

                ![image\.png](/MyBlog/uploads/course-compiler/image-46.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-74.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-117.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-80.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-151.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-125.png)

                1. 注：可规约状态面临所有输入符号都有唯一的转移状态

            3. <strong>ACTION\[s，a\]：</strong>当状态 s<strong>面临输入符号 a</strong>时，应采取的动作。语法分析动作函数 <strong>ACTION</strong> 有两个参数：状态 $i$，当前输入 $a$（<strong>终结符</strong>或 $\char36 $）

                - <strong>移入</strong>（$s_j$）：移入状态 $j$，同时移入符号 $a$

                - <strong>归约</strong>（$r_j$）：假设<strong>第</strong>$j$<strong>条规则</strong>为 $A \to \beta$，则将栈顶的 $\beta$ 归约为 $A$。

                - <strong>接受</strong>：接受输入串，完成语法分析。

                - <strong>报错</strong>：发现一个错误并执行纠正动作。

            4. <strong>GOTO\[s，X\]：</strong>状态 s<strong>面对文法符号 X</strong>时的下一状态。

                - 有两个参数：状态 $i$ 和当前的<strong>非终结符</strong> $A$。

                - 若 $\text{GOTO}(I_i, A) = I_j$，则在当前状态为 $i$，并且归约得到非终结符 $A$ 时，移入与 $A$ 对应的状态 $j$。

                1. GOTO函数 —— LR\(0\)自动机的转移函数

                - <strong>定义</strong>：$\text{GOTO}(I,X)$ 代表项目集$I$对应文法符号$X$的后继项目集闭包

                - 计算公式：定义了 $I$ 中<strong>所有</strong>形如 $[A \to \alpha \bullet X \beta]$ 的项目所<strong>对应</strong>的项目 $[A \to \alpha X \bullet \beta]$ 的集合的闭包。

                $\text{GOTO}(I, X)=\text{CLOSURE}(\{A→αX·β \mid A→α·Xβ∈I\})$

                > 取值来源：筛选$I$里圆点右侧紧跟$X$的所有项目，把圆点右移一位得到临时集合$J$，再对$J$求闭包
                > 
                > 

                `SetOfItems GOTO (I, X) {`

                `将J初始化为空集；`

                `for (I中的每个项A → α·Xβ)`

                `将项A → αX·β加入到集合J中；`

                `return CLOSURE (J);`

                `}`

                ![image\.png](/MyBlog/uploads/course-compiler/image-7.png)

        4. <strong>构建句子的分析过程（状态栈、符号栈、输入及动作）</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-118.png)

    3. <strong>SLR\(1\)</strong>：只在FOLLOW\(A\)中填入归约项$A→α\bullet $，解决LR（0）的一些冲突。LR\(0\)文法太简单，能分析的文法有限，没有太大的实用价值

        1. LR\(0\)分析表可能包含冲突

        2. 如果LR\(0\)分析表中没有语法分析动作冲突，那么给定的文法就称为LR\(0\)文法

        3. LR\(0\)冲突问题：一个GOTO对应多个状态

            ![image\.png](/MyBlog/uploads/course-compiler/image-126.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-51.png)

        4. SLR 分析表的构建

            若一个文法构造出的 SLR 分析表里<strong>不存在移进\-归约、归约\-归约冲突</strong>，则该文法称为<strong>SLR 文法</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-172.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-186.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-6.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-171.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-89.png)

            > 整体构造步骤与LR\(0\)分析表基本一致
            > 
            > 

            1. 构造拓广文法$G'$的规范LR\(0\)项集族 $C = \{I_0, I_1, \dots, I_n\}$

            2. 项集$I_i$对应分析状态$i$，按以下规则填充 ACTION 表、GOTO 表：

                - <strong>规则 1（移进）：</strong>若项目$A→α·aβ ∈ I_i$，且$\text{GOTO}(I_i,a)=I_j$，则 $\text{ACTION}[i,a] = s_j$

                - <strong>规则 2（GOTO 跳转）：</strong>若项目$A→α·Bβ ∈ I_i$，且$\text{GOTO}(I_i,B)=I_j$，则 $\text{GOTO}[i,B] = j$

                - <strong>规则 3（归约）：</strong>若归约项目$A→α· ∈ I_i$ 且 $A≠S'$，对所有$a∈\text{FOLLOW}(A)$，令 $\text{ACTION}[i,a] = r_j$（$j$ 是产生式$A→α$的编号）

                - <strong>规则 4（接受）：</strong>若接受项目$S'→S· ∈ I_i$，则 $\text{ACTION}[i,\char36 ]$\]= acc

                - <strong>规则 5（报错）：</strong>所有未被上述规则定义的表格条目，统一赋值为`error`

                - SLR 文法定义 若一个文法构造出的 SLR 分析表里<strong>不存在移进\-归约、归约\-归约冲突</strong>，则该文法称为<strong>SLR 文法</strong>

                    ![image\.png](/MyBlog/uploads/course-compiler/image-183.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-72.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-22.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-53.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-9.png)

        5. SLR 分析仍然可能存在冲突

            ![image\.png](/MyBlog/uploads/course-compiler/image-148.png)

            1. SLR只是简单地考察下一个输入符号b是否属于与归约项目A→α相关联的FOLLOW\(A\)，但b∈FOLLOW\(A\)只是归约α的一个必要条件，而非充分条件

            2. 解决方法：通过<strong>分裂状态</strong>，使 LR 分析器的每个状态 A→α•能确切知道句柄α后<strong>紧跟哪些终结符时才能把α归约成 A</strong>。

            3. 对于产生式 A→α的归约，<strong>在不同的使用位置，A 会要求不同的后继符号</strong>

    4. LR\(1\)项集闭包：对项目 \[A→α·Bβ, a\]，添加\[B→·γ, b\]到项目集，其中b∈FIRST\(βa\)

        1. <strong>LR\(1\) 项目</strong>：LR\(0\) 项目的扩充，包含<strong>终结符</strong>或<strong>结束标记</strong>作为第 2 个成分（<strong>搜索符</strong>）。一般形式为：$A \to \alpha \bullet \beta,\ a$

            1. 其中：$A \to \alpha \bullet \beta$ 是产生式，$a \in T \cup \{\char36  \}$

            2. 搜索符 $a$ 是<strong>归约条件</strong>：

                - $\beta$ <strong>非空</strong>时，不用考虑 $a$；

                - $\beta$ 为<strong>空</strong>时（归约项目），则只有当<strong>前输入为</strong>$a$ 时，方可归约

                    - 对比

                        - <strong>SLR\(1\)</strong> 归约条件：当前输入为 <strong>FOLLOW</strong> 集中的元素

                        - <strong>LR\(0\)</strong> 归约条件：<strong>无</strong>

        2. LR\(1\)分析：基于LR\(0\)，通过进一步判断一个向前符号a，来决定是否执行归约动作

            1. 分析能力介于SLR\(1\)和LR\(1\)之间，同时具有SLR\(1\)的状态数少的优点和LR\(1\)的适用范围广的优点

                - 状态数和 <strong>LR\(0\)</strong> 自动机的状态数相同

                - 归约项目的后继符号既不采用 <strong>SLR\(1\)</strong> 的 <strong>FOLLOW</strong> 集方法，也不采用 <strong>LR\(1\)</strong> 的完全精确法

                    ![image\.png](/MyBlog/uploads/course-compiler/image-107.png)

                    ![image\.png](/MyBlog/uploads/course-compiler/image-42.png)

            

            1. A→α• 归约，当且仅当a∈FOLLOW\(A\)

        3. 优点：

            1. 相比LR\(0\)，有可能减少需要归约的情况

            2. 有可能消除移入\-归约冲突

        4. 缺点

            1. 仍然有冲突出现的可能

                ![image\.png](/MyBlog/uploads/course-compiler/image-122.png)

    5. LALR（1）

        1. <strong>同心集：</strong>具有相同核心（LR\(1\)项目集的第一分量集合）的项集，即除展望符（搜索符）外，两个LR\(1\)项目集是相同的

        2. <strong>LALR 分析：寻找同心集，并将它们合并成一个项集。</strong>

            1. 可以压缩LR\(1\)分析表中的状态数，从而可能得到LALR分析表

            2. 压缩可能导致<strong>归约/归约冲突</strong> \(此时文法不是 LALR\)

            3. 压缩不会导致<strong>移入/归约冲突</strong>

                ![image\.png](/MyBlog/uploads/course-compiler/image-64.png)

5. 构建 LR 分析器消除文法二义性

    1. 用优先级和结合性消除算术表达式文法二义性

        ![image\.png](/MyBlog/uploads/course-compiler/image-179.png)

        ![image\.png](/MyBlog/uploads/course-compiler/image-76.png)

    2. 用 if 和 else 的配对关系消除选择结构文法二义性

        ![image\.png](/MyBlog/uploads/course-compiler/image-141.png)

6. 小结

    ![image\.png](/MyBlog/uploads/course-compiler/image-75.png)

## 第五章

1. 基本概念及思路：

    1. <strong>语法制导翻译（目前最常用的语义分析技术）</strong>

        1. 采用文法来指导对程序的翻译过程。通过<strong>向一个文法的产生式附加一些规则</strong>或<strong>程序片段</strong>来实现。

        2. 当归约（或推导）到某个产生式时，除了按照产生式进行相应的代换之外\(语法分析\)，还要<strong>按照产生式所对应的语义规则执行相应的语义动作</strong>，如计算表达式的值、产生中间代码等。

        3. 建立和遍历同时完成（包括语法分析（建立语法分析树）和语义分析（遍历语法分析树））。将语义规则同<strong>语法规则</strong>（产生式）联系起来有两种方式：

            - <strong>语法制导定义</strong> <strong>SDD</strong> （<strong>声明式</strong>）

            - <strong>语法制导翻译方案</strong> <strong>SDT</strong> （<strong>过程式</strong>）

    2. <strong>语法制导定义</strong> <strong>SDD：</strong>SDD 是 CFG 的推广

        - 为每个<strong>文法符号</strong>（终结符或非终结符）配备若干相关的"值"（称为<strong>属性</strong>），代表与文法符号相关信息，如<strong>表达式的属性</strong>可以有<strong>类型</strong>、<strong>值</strong>等。

        - 为每个文法的每个<strong>产生式</strong>配备一组属性的<strong>语义规则</strong>，用于对属性进行计算和传递。

        > 如果 $X$ 是一个文法符号，$a$ 是 $X$ 的一个属性，则用 $X.a$ 表示属性 $a$ 在某个标号为 $X$ 的分析树结点上的值。
        > 
        > 

        ![image\.png](/MyBlog/uploads/course-compiler/image-108.png)

        1. 注释分析树：<strong>在结点上标记相应的属性值的语法分析树称为注释分析树</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-163.png)

        2. 文法属性：综合属性和继承属性

            1. <strong>综合属性：</strong>在分析树结点 N 上的非终结符 A 的综合属性只能通过 N 的子结点或 N 本身的属性值来定义。

                |                产生式|                语义规则|
                |---|---|
                |                E → E₁ \+ T|                E\.val = E₁\.val \+ T\.val|

                ![image\.png](/MyBlog/uploads/course-compiler/image-113.png)

                1. 终结符可以具有综合属性。终结符的综合属性值是由词法分析器提供的<strong>词法值</strong>，在 SDD 中没有计算终结符属性值的语义规则。

            2. <strong>继承属性：</strong>在分析树结点 $N$ 上的非终结符 $A$ 的<strong>继承属性</strong>只能通过 $N$ 的<strong>父结点</strong>、$N$ 的<strong>兄弟结点</strong>或 $N$ <strong>本身</strong>的属性值来定义。

            |            产生式|            语义规则|
            |---|---|
            |            $D \to T\ L$|            $L.inh = T.type$|

            ![image\.png](/MyBlog/uploads/course-compiler/image-38.png)

            - <strong>终结符没有继承属性</strong>。终结符从<strong>词法分析器</strong>处获得的属性值被归为<strong>综合属性</strong>值。

                ![image\.png](/MyBlog/uploads/course-compiler/image-137.png)

    3. <strong>注释分析树</strong>

        ![image\.png](/MyBlog/uploads/course-compiler/image-189.png)

        1. 例子

            ![image\.png](/MyBlog/uploads/course-compiler/image-47.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-177.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-11.png)

    4. <strong>依赖图：</strong>语法树中各结点的综合属性和继承属性之间的相互依赖关系可以用<strong>依赖图</strong>（有向图）来描述。<strong>依赖图</strong>指出语法树中各结点属性值的<strong>计算顺序</strong>。

        - 特点：<strong>先有文法</strong>，<strong>后确定语义计算顺序</strong>

        1. <strong>依赖图的构建：</strong>如果一个 SDD 中不存在属性之间的循环依赖关系（即依赖图中不存在环），则该文法是<strong>良定义</strong>的，依赖图存在拓扑排序。

            - <strong>拓扑排序</strong>：对于节点 $m_1, m_2, \dots, m_k$，若 $m_i \to m_j$ 是从 $m_i$ 到 $m_j$ 的边，则在排序中 $m_i$ 排在 $m_j$ 前面，有向图变成一个线性排序

            - 一个依赖图的任何<strong>拓扑排序</strong>都给出一棵语法树中结点的<strong>语义规则计算的有效顺序</strong>

                ![image\.png](/MyBlog/uploads/course-compiler/image-68.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-145.png)

    5. <strong>良定义</strong>\-依赖图的拓扑排序：

2. 语法制导定义 SDD：

    1. SDD 属性的求值顺序

        - 对于只包含<strong>综合属性</strong>的 SDD，属性值的计算正好和<strong>自底向上分析</strong>建立分析树结点同步进行

        - 对于同时具有<strong>继承属性</strong>和综合属性的 SDD，<strong>不能保证</strong>一定存在一个顺序来计算所有的属性值。

            ![image\.png](/MyBlog/uploads/course-compiler/image-25.png)

        - 从计算的角度看，给定一个 SDD，很难确定是否存在某棵语法分析树，使得 *SDD* 的属性之间存在循环依赖关系，但可以给出<strong>一组充分条件</strong>，满足这组充分条件的 *SDD* 是<strong>无循环依赖</strong>的

            ![image\.png](/MyBlog/uploads/course-compiler/image-95.png)

    2. S\-SDD：仅仅使用<strong>综合属性</strong>的 SDD 称为 <strong>S 属性的 SDD</strong>，或 <strong>S\-属性定义</strong>、<strong>S\-SDD</strong>

        |        产生式|        语义规则|
        |---|---|
        |        \(1\) $L \to E\ \text{n}$|        $L.val = E.val$|
        |        \(2\) $E \to E_1 + T$|        $E.val = E_1.val + T.val$|
        |        \(3\) $E \to T$|        $E.val = T.val$|
        |        \(4\) $T \to T_1 * F$|        $T.val = T_1.val \times F.val$|
        |        \(5\) $T \to F$|        $T.val = F.val$|
        |        \(6\) $F \to (E)$|        $F.val = E.val$|
        |        \(7\) $F \to \text{digit}$|        $F.val = \text{digit.lexval}$|

        - 如果一个 *SDD* 是 <strong>S 属性</strong>的，可以按照语法分析树节点的任何<strong>自底向上</strong>顺序来计算它的各个属性值。

        - <strong>S\-属性定义</strong>可以在<strong>自底向上的语法分析</strong>过程中实现

    3. L\-SDD：<strong>L\-属性定义</strong>（也称为 <strong>L 属性的 SDD</strong> 或 <strong>L\-SDD</strong>）的直观含义：在一个产生式所关联的各属性之间，依赖图的边可以<strong>从左到右</strong>，但<strong>不能从右到左</strong>（因此称为 L 属性，L 是 *Left* 的首字母）

        1. 每个S\-属性定义都是L\-属性定义

        一个 SDD 是L \- 属性定义，当且仅当它的每个属性要么是一个综合属性，要么是满足如下条件的继承属性： 假设存在一个产生式$A \rightarrow X_1 X_2 \dots X_n$ 其右部符号 $X_i \ (1 \le i \le n)$ 的继承属性仅依赖于下列属性：

        - <strong>A 的继承属性</strong>

        - 产生式中位于 $X_i$ 左侧的符号 $X_1,X_2,\dots,X_{i-1}$<strong>的所有属性</strong>

        - $X_i$ 本身的属性（约束：$X_i$ 的全部属性不能在依赖图中形成环路）

    4. 计算属性值过程——依赖图方法

        - 创建<strong>分析树</strong>（<strong>自顶向下</strong>或<strong>自底向上</strong>）

        - 构建<strong>依赖图</strong>（基于分析树和语义规则）

        - 对依赖图，进行<strong>拓扑排序</strong>

        - 计算<strong>属性值</strong>

    5. <strong>抽象语法树</strong>：在语法分析树中<strong>去掉</strong>那些对翻译<strong>不必要的信息</strong>，从而获得更有效的源程序中间表示，这种经变换后的语法树称为<strong>抽象语法树</strong>

        ![image\.png](/MyBlog/uploads/course-compiler/image-99.png)

    1. 表达式抽象语法树的构建：两个建立结点的函数（返回值为指向新建立结点的指针）

        - $Node(op, c_1, c_2, \dots, c_k)$：建立<strong>内部结点</strong>，$op$为运算符，其余$k$个字段的值为指向其它结点的指针。

        - $Leaf(op, val)$：建立<strong>叶结点</strong>，返回叶子结点的指针，$op$为记号，$val$为值或指向符号表相关项目的指针。 

3. <strong>翻译方案 SDT：</strong>

    1. SDT 的定义：

        1. <strong>语义规则</strong>：只给出属性计算的定义，没有属性计算的次序等实现细节。

        2. <strong>语法制导翻译方案</strong>（<strong>SDT</strong>）常简称为翻译方案。它是 SDD 的补充，它给出使用语义规则进行计算的<strong>次序</strong>，把实现细节表示出来。

        3. <strong>*SDT*的设计原则：</strong>*SDT* 类似于 *SDD* ，*SDT*  可以看作是 *SDD* 的具体实施方案，它的语义规则的<strong>计算顺序是显式给出</strong>的，这样就可以把具体的实现细节表示出来。

            1. <strong>SDT 的设计原则</strong>：保证语义动作不会引用还没有计算的属性值。

            - <strong>L\-属性定义</strong>：本身就能确保每个动作不会引用尚未计算出来的属性。

            - <strong>S\-属性定义</strong>：为每一个语义规则建立一个包含赋值的动作，并<strong>把这个动作放在相应的产生式右边的末尾</strong>。

                - 基本文法可以使用 <strong>LR</strong> 分析技术，且 SDD 是 <strong>S 属性</strong>的

                - 基本文法可以使用 <strong>LL</strong> 分析技术，且 SDD 是 <strong>L 属性</strong>的

        4. <strong>S\-属性定义的SDT：</strong>只包含综合属性下，可以自上而下计算综合属性

            1. 将一个 <strong>S\-SDD</strong> 转换为 <strong>SDT</strong> 的方法：为每一个语义规则建立一个包含赋值的动作，并<strong>把这个动作放在相应的产生式右边的末尾</strong>。<strong>当按照该产生式进行归约时</strong>，执行这个动作。

        5. L\-属性定义的SDT：包含<strong>综合属性</strong>和<strong>特殊的继承属性</strong>。

            1. 将一个 <strong>L\-SDD</strong> 转换为 <strong>SDT</strong> 的方法：

                - 将计算某个非终结符号 $A$ 的<strong>继承属性</strong>的动作插入到产生式右部中<strong>紧靠在</strong>$A$<strong>的本次出现之前</strong>的位置上

                - 将计算一个产生式左部符号的<strong>综合属性</strong>的动作放置在这个产生式右部的<strong>最右端</strong>

4. S\-SDT和L\-SDT的实现：

    1. S\-SDT：

        1. 将一个S\-SDD转换为SDT的方法：为每一个语义规则建立一个包含赋值的动作，并把这个动作放在相应的产生式右边的末尾。当按照该产生式进行归约时，执行这个动作。

        2. 如果S\-SDD的基本文法可以使用LR分析技术，那么它的SDT可以在LR语法分析过程中实现

            ![image\.png](/MyBlog/uploads/course-compiler/image-44.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-114.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-1.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-83.png)

    2. L\-SDT：

        1. 将计算某个非终结符号 A 的<strong>继承属性</strong>的动作插入到产生式右部中<strong>紧靠在 A 的本次出现之前</strong>的位置上

        2. 将计算一个产生式左部符号的<strong>综合属性</strong>的动作放置在这个产生式右部的<strong>最右端</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-119.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-54.png)

    3. LL 分析法：自顶向下分析

        ![image\.png](/MyBlog/uploads/course-compiler/image-2.png)

        1. 消除S\-SDD的左递归（消除方法和前面第四单元的一样，不同的就是我们需要考虑它的新翻译模式）

            ![image\.png](/MyBlog/uploads/course-compiler/image-62.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-146.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-160.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-56.png)

            1. 这里的新翻译模式的想法也很简单：就是要给这个<strong>新的 R 一个继承属性</strong>，让它实现自顶向下的分析，也就是LL文法的核心。 那我们最初的R\.i只能从左兄弟那边继承了，所以是<strong>R\.i=f\(X\.x\)</strong>，接下来一路传下去R\.i，下面的R\.i都是前一个R\.i和左兄弟Y\.y的函数，<strong>R1\.i=g\(R\.i,Y\.y\)</strong>

            2. 现在我们到了底部。根据我们的消除左递归方法，我们可以知道一定会有一个<strong>R→ε</strong>，这就到了我们自底向上分析的时候了。对于第一个出现的综合属性，我们给到<strong>R\.s=R\.i</strong>，现在逐步上传，直到顶端，顶端的 A 的综合属性由 R 提供，也就是<strong>A\.a=R\.s</strong>

            3. 这就是完整的逻辑闭环，所有的消除左递归方法后的翻译模式都可以套用

        2. 自顶向下分析

            1. 这个地方的逻辑是这样子的。SDD里就是列出所有的属性。其中S\.code是作为一个综合属性，它是自顶向下的，只看正确的逻辑，在这张图里面就是L1→C→L2

            2. 每一个L前加一个label\|\|

            3. SDT 前面提到过，就是把继承属性放在编号的前面，综合属性放在后面。所以我们可以看到，C 前面放的都是 C 的继承属性，C 后面 S1 前面放的是 S1 的继承属性，S1 后面就是 S1 的综合属性

                ![image\.png](/MyBlog/uploads/course-compiler/image-61.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-154.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-65.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-195.png)

    4. LR 分析法：自底向上分析

        1. 变换L\-SDT为S\-SDT

            1. 这个地方的核心逻辑是什么呢？因为我们采用的是自底向上，能够自底向上传播的只有综合属性，所以我们的目的是把继承属性转换为综合属性

            2. 就是把夹在中间的\{\}里面的继承属性拿非终结符替换掉，把它作为综合属性单独列出来

                ![image\.png](/MyBlog/uploads/course-compiler/image-82.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-48.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-45.png)

## 第六章

1. 中间表示：编译器多数分成<strong>两部分</strong>：

    - <strong>前端</strong>：将源程序转成中间表示

    - <strong>后端</strong>：基于中间表示产生目标代码

        ![image\.png](/MyBlog/uploads/course-compiler/image-33.png)

    - <strong>中间语言（表示）的特点</strong>

        - 独立于机器

        - 复杂性介于源语言与目标语言之间

    - 引入中间语言的优点

        - 使编译程序的结构在逻辑上更为简单明确

        - 便于进行与机器无关的代码优化工作

        - 易于移植

    1. <strong>后缀式</strong>：一个表达式 $E$ 的后缀形式可以如下定义：

        - 若 $E$ 是一个变量或常量，则 $E$ 的后缀式是 $E$ 自身。

        - 若 $E$ 是 $E_1\ \text{op}\ E_2$ 形式的表达式，其中 $\text{op}$ 是任何二元操作符，则 $E$ 的后缀式为 $E_1'\ E_2'\ \text{op}$，其中 $E_1'$ 和 $E_2'$ 分别为 $E_1$ 和 $E_2$ 的后缀式。

        - 若 $E$ 是 $(E_1)$ 形式的表达式，则 $E_1$ 的后缀式就是 $E$ 的后缀式。

        - 后缀式表示法不用括号

            - 只要知道每个算符的数目，对于后缀式，不论从哪一段扫描，都能对它进行无歧义的分解

        - 后缀式的计算

            - 用一个栈实现

            - 自左至右扫描后缀是，每碰到运算量就把它推进栈。每碰到 k 目运算符就把它作用于栈顶的 k 个项，并用结果替代这 k 个项

                ![image\.png](/MyBlog/uploads/course-compiler/image-157.png)

    2. 图形

        1. <strong>抽象语法树 AST</strong>

        2. <strong>有向无环图 DAG</strong>

            - DAG 的结点表示一个<strong>公共子表达式</strong>，它可能具有多个父结点

            - 对表达式中的每个子表达式，DAG 中都有一个结点

            - 一个<strong>内部结点</strong>代表一个<strong>操作符</strong>，它的孩子代表操作数

            - <strong>tips：重复部分进行加环就是 DAG 图的本质，这个具体看作业题，比较有代表性。除此之外，关于编码方法这部分，编码是先写 id 等字母，然后是数字，接着是符号。左右两栏是进行操作的两行的行号。</strong>

                ![image\.png](/MyBlog/uploads/course-compiler/image-123.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-57.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-149.png)

    3. <strong>三地址码</strong>：三地码（*TAC* ，三地址代码）用来描述指令序列，<strong>指令的右侧最多有一个运算符</strong>。

        - 三地址码可以看成是抽象语法树或 DAG 的一种<strong>线性表示</strong>。三地址码的<strong>临时名字</strong>对应图中的<strong>内部结点</strong>。

        - DAG 和 AST 的三地址码是不一样的，具体可以参考下面这个例题：

            ![image\.png](/MyBlog/uploads/course-compiler/image-66.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-97.png)

        - 表示形式：四元式、三元式、间接三元式

            ![image\.png](/MyBlog/uploads/course-compiler/image-156.png)

        1. 赋值指令

            ![image\.png](/MyBlog/uploads/course-compiler/image-173.png)

        2. 跳转指令

            ![image\.png](/MyBlog/uploads/course-compiler/image-164.png)

        3. 过程调用

            ![image\.png](/MyBlog/uploads/course-compiler/image-71.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-50.png)

2. 三地址码的表示

    1. 三元式：三元式是 3 个字段的记录结构：$op$、$arg_1$、$arg_2$

        - 三元式可以避免引入临时变量

        - 使用运算 $x\ op\ y$ 的<strong>序号</strong>来表示它的运算结果。

        - 用带有括号的数字表示指向三元式结构的指针

            ![image\.png](/MyBlog/uploads/course-compiler/image-59.png)

    2. 四元式：四元式是一个带有 4 个字段的记录结构：$op$、$arg_1$、$arg_2$ 和 $result$，$arg_1$、$arg_2$ 和 $result$ 通常指向符号表项目的入口。

        ![image\.png](/MyBlog/uploads/course-compiler/image-120.png)

        ![image\.png](/MyBlog/uploads/course-compiler/image-166.png)

    3. <strong>间接三元式</strong>：在普通三元式中，结果通过序号隐式引用，如 \(1\) $(*,\ b,\ (0))$ 引用了 \(0\) 的结果。一旦<strong>删除或移动</strong>某条三元式，所有引用它的序号都要修改，优化困难。

        1. 包含一个指向三元式的指针列表，而不是列出三元式序列本身

        - 间接三元式包含：

            - <strong>间接码表</strong>：存储执行顺序，每个条目是一个指向三元式的指针

            - <strong>三元式表</strong>：只存储操作定义，不存储执行顺序

        - <strong>优点</strong>：方便优化，节省空间

            ![image\.png](/MyBlog/uploads/course-compiler/image-77.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-24.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-182.png)

3. 类型和声明

    1. 在声明变量或过程时，需要考虑<strong>类型</strong>及<strong>存储空间的布局</strong>问题。

    2. 过程调用或对象的实际存储空间是在<strong>运行时</strong>进行分配的。在编译时刻检查局部声明时，可以进行<strong>相对地址</strong>的布局。

    3. 一个名字或某个数据结构分量的<strong>相对地址</strong>是指它相对于数据区域开始位置的<strong>偏移量</strong>。

    4. <strong>类型检查</strong>

        - 利用一组逻辑规则来确定程序在运行时的行为

        - 保证运算分量的类型和运算符的预期<strong>类型相匹配</strong>

    5. <strong>翻译时的应用</strong>

        - 确定一个名需要的存储空间

        - 计算一个数组元素引用的地址

        - 插入显式的类型转换

        - 选择算术运算符的正确版本

4. <strong>类型表达式</strong>

    1. 类型自身也有结构，用<strong>类型表达式</strong>来表示。

    2. 可以为类型表达式命名，<strong>类型名</strong>也是类型表达式

        - 类型表达式也可以将<strong>类型构造符</strong>\(type constructor\)作用于<strong>类型表达式</strong>得到。

        - 如数组的构造符为*array* ：若*T* 是类型表达式，*I* 是整数，则*array\(I,T\)* 是类型表达式。

        - 类型表达式可由对应的树形表示

    3. 笛卡尔乘积构造符 $\times$：若 $T_1$ 和 $T_2$ 是类型表达式，则笛卡尔乘积 $T_1 \times T_2$ 是类型表达式

    4. 类型表达式可以是<strong>基本类型</strong>

        - *integer*

        - *real*

        - *char*

        - *boolean*

        - *type\_error*（出错类型）

        - *void*（无类型）

    5. <strong>数组</strong>构造符 *array* ：若 $T$ 是类型表达式，$I$ 是整数，则 $array(I, T)$ 是类型表达式，它表示一个<strong>数组类型</strong>。

        ![image\.png](/MyBlog/uploads/course-compiler/image-94.png)

    6. <strong>指针</strong>构造符 *pointer* ：若 $T$ 是类型表达式，则 $pointer(T)$ 是类型表达式，它表示一个<strong>指针类型</strong>。

        ![image\.png](/MyBlog/uploads/course-compiler/image-27.png)

    7. 函数：<strong>函数</strong>构造符 $\to$：若 $T_1$、$T_2$、$\dots$、$T_n$ 和 $R$ 是类型表达式，则 $T_1 \times T_2 \times \dots \times T_n \to R$ 是类型表达式，它表示一个<strong>函数</strong>。

        ![image\.png](/MyBlog/uploads/course-compiler/image-31.png)

    8. 记录构造符 *record* （结构体类型）：若有标识符 $N_1$、$N_2$、$\dots$、$N_n$ 与类型表达式 $T_1$、$T_2$、$\dots$、$T_n$，则 $record((N_1 \times T_1) \times (N_2 \times T_2) \times \dots \times (N_n \times T_n))$ 是类型表达式，它表示一个<strong>构造类型</strong>。

        ![image\.png](/MyBlog/uploads/course-compiler/image-167.png)

        ![image\.png](/MyBlog/uploads/course-compiler/image-192.png)

    9. 类型等价：结构等价和名等价

        1. <strong>结构等价</strong>：满足以下条件之一：

            1. 相同的基本类型

            2. 将相同类型构造算子应用于等价的类型

            3. <strong>一个类型是另一个类型表达式的名字</strong>

        1. <strong>名等价</strong>：满足前两个条件之一。

            ![image\.png](/MyBlog/uploads/course-compiler/image-69.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-129.png)

5. <strong>声明：</strong>为每个声明的名，在符号表中加入类型、位移等信息

    1. 位移指出的相对地址：offset

    2. 类型附加属性：type 和 width

    3. <strong>声明语句的翻译：</strong>对于声明语句，语义分析的主要任务是收集标识符的<strong>类型</strong>、<strong>所需存储单元大小</strong>等属性信息，并为每个名字分配一个<strong>相对地址</strong>，并将它们保存在相应的<strong>符号表</strong>记录中。

        ![image\.png](/MyBlog/uploads/course-compiler/image-10.png)

        - 从类型表达式可以知道该<strong>类型</strong>（ *type* ）在运行时刻所需的存储单元数量称为<strong>类型的宽度</strong>（ *width* ）

            ![image\.png](/MyBlog/uploads/course-compiler/image-17.png)

        - 在<strong>编译时刻</strong>，可以使用类型的宽度为每一个名字分配一个<strong>相对地址</strong>（ *offset* ）

        - 变量声明语句的 SDT：翻译的主要任务，类型表达式和相对地址。例子：

            ![image\.png](/MyBlog/uploads/course-compiler/image-170.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-191.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-158.png)

6. 表达式的翻译

    - get\(name\)：查询符号表返回name对应的记录

    - gen\(code\)：生成三地址指令code

    1. 简单算术表达式和赋值语句，应该只要会写上面的就行了

        ![image\.png](/MyBlog/uploads/course-compiler/image-85.png)

    2. 数组引用

        1. 数组元素寻址：数组存储在一块<strong>连续存储空间</strong>中。一维数组 $A[low \dots high]$，若元素宽度为 $w$，首地址为 $base$，则 $A$ 中第 $i$ 个元素开始于：$base + (i - low) \times w = i \times w + (base - low \times w) = i \times w + c$

            - 二维数组可采用：*row\-major*  <strong>行优先</strong>或 *column\-major* <strong>列优先</strong>方式存储

                ![image\.png](/MyBlog/uploads/course-compiler/image-14.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-135.png)

                ![image\.png](/MyBlog/uploads/course-compiler/image-79.png)

7. <strong>类型转换：</strong>

    1. 编译器会拒绝一些混合类型运算

    2. 进行一些自动的类型转换

        ![image\.png](/MyBlog/uploads/course-compiler/image-87.png)

    3. <strong>拓宽转换</strong>和<strong>窄化转换</strong>：

        - <strong>拓宽</strong>：较低层的类型转换为较高层的

        - <strong>窄化</strong>：较高层到较低层

    4. <strong>隐式转换</strong>和<strong>显式转换</strong>:

        - <strong>隐式</strong>：由编译器自动完成

        - <strong>显式</strong>（强制类型转换）：程序员写出代码

8. 控制流：布尔表达式

    1. 布尔表达式通过布尔运算符将布尔变量和关系表达式结合在一起

    2. 布尔表达式的文法：

        ![image\.png](/MyBlog/uploads/course-compiler/image-32.png)

        ![image\.png](/MyBlog/uploads/course-compiler/image-142.png)

    1. 短路代码：在短路（跳转）代码中，布尔运算符\&\&、\|\|、！被翻译成跳转指令。运算符本身不出现在代码中。

        ![image\.png](/MyBlog/uploads/course-compiler/image-162.png)

9. 控制流的翻译

    1. 文法

        ![image\.png](/MyBlog/uploads/course-compiler/image-159.png)

        - 布尔表达式 $B$ 附加两个属性：

            - $B.true$：B 为真时的控制流

            - $B.false$：B 为假时的控制流

    - $S.next$ 指向紧跟在 S 后执行的第一条三地址指令

        ![image\.png](/MyBlog/uploads/course-compiler/image-15.png)

    2. 顺序

        ![image\.png](/MyBlog/uploads/course-compiler/image-92.png)

    3. 分支

        ![image\.png](/MyBlog/uploads/course-compiler/image-84.png)

    4. 循环

        ![image\.png](/MyBlog/uploads/course-compiler/image-21.png)

    5. 布尔表达式

        ![image\.png](/MyBlog/uploads/course-compiler/image-16.png)

        ![image\.png](/MyBlog/uploads/course-compiler/image-91.png)

    1. 作为条件的布尔表达式，设计两个出口：表达式为真时跳转至 `B.true`，为假时跳转至 `B.false`

    2. 条件语句 `if B then S₁ else S₂` 中的布尔表达式 B：作用是控制分支，选择执行 $S_1$ 或 $S_2$

    3. while 循环语句中的布尔表达式： 

        1. `B.true`：指向循环体开头

        2. `B.false`：指向 while 语句的下一条后继语句

            ![image\.png](/MyBlog/uploads/course-compiler/image-193.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-98.png)

    4. <strong>三地址码</strong>

        ![image\.png](/MyBlog/uploads/course-compiler/image-36.png)

        ![image\.png](/MyBlog/uploads/course-compiler/image-101.png)

        1. <strong>注意：避免生成冗余的 goto 指令</strong>

            ![image\.png](/MyBlog/uploads/course-compiler/image-104.png)

10. <strong>回填技术：构建S\-SDT</strong>

    1. <strong>基本思想</strong>

        - 控制流语句翻译的一个关键是<strong>确定跳转指令的目标标号</strong>

        - 存在问题：生成跳转指令时，目标标号还不能确定，需要以后扫描到特定位置时才能回过头来确定。

        - 解决办法 

            - <strong>两遍扫描（L 属性定义）：</strong>生成一些临时变量用来存放标号，将临时变量的地址作为继承属性传递到标号可以确定的地方。即当目标标号的值确定下来以后再赋给相应的变量。此时，需要再扫描一次指令序列。

                - 将标记作为<strong>继承属性</strong>传至生成跳传指令处

                - <strong>绑定</strong>标记和地址

            - <strong>一遍扫描（S 属性定义）：</strong>生成一个跳转指令时，暂时不指定它的目标标号。这样的指令都被放入由跳转指令组成的列表中。同一个列表中的所有跳转指令具有相同的目标标号。等到能够确定正确的目标标号时，才去填充这些指令的目标标号。 

                - 采用综合属性 truelist 和 falselist 管理跳转指令中的标记。

                - 采用回填：在目标地址确定时填充这些标记

    2. <strong>属性设置</strong>

        - B\.truelist：指向一个包含跳转指令的列表，这些指令不完整，其标号字段尚未填写。最终获得的目标标号就是当<strong>B 为真时控制流应该转向的指令的标号</strong>。

        - B\.falselist：指向一个包含跳转指令的列表，这些指令最终获得的目标标号就是当<strong>B 为假时控制流应该转向的指令的标号</strong>。

        - S\.nextlist：指向一个包含跳转指令的列表，这些指令最终获得的目标标号就是按照运行顺序<strong>紧跟在 S 代码之后的指令的标号</strong>。

    3. <strong>函数及变量设置</strong>

        - 将跳转指令放入指令数组，可将数组下标作为指令的标号。

        - 为方便处理跳转指令列表，设置三个函数： 

            - $makelist(i)$ ：建立新表，表中加入元素 $i$（$i$ 是指令数组的下标），返回表指针

            - $merge(p_1, p_2)$ ：合并 $p_1$、$p_2$ 指向的表，返回 $p_2$

            - $backpatch(p, i)$ ：将 $i$ 回填入 $p$ 指向列表中每一语句

        - `nextinstr`：指向下一条将要产生但尚未形成的三地址码的地址（标号），初值为 1，每执行一次`gen`之后，`nextinstr`自动加 1

        - <strong>*看不懂的话看这道例题就可以了。大概就是一开始 goto 都是没写的，写完一个个回填。根据没写的这个东西来画图</strong>*

            ![image\.png](/MyBlog/uploads/course-compiler/image-190.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-103.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-70.png)

            ![image\.png](/MyBlog/uploads/course-compiler/image-153.png)

11. 控制流语句：语句 S 带有一个未填充的跳转链 *nextlist*, 该链同样使用回填策略来填充。*S\.nextlist* 为跳转到 S 之后的跳转指令列表。

    ![image\.png](/MyBlog/uploads/course-compiler/image-18.png)

    ![image\.png](/MyBlog/uploads/course-compiler/image-174.png)

    ![image\.png](/MyBlog/uploads/course-compiler/image-106.png)

    ![image\.png](/MyBlog/uploads/course-compiler/image-133.png)

## 神秘思政

1. 课程思政融入编译原理的意义

    1. 落实立德树人根本任务，培养德才兼备的计算机人才。

    2. 避免“重技术、轻价值”，引导学生树立正确科技伦理观。

    3. 科学精神：严谨性、逻辑性、创新性、普适性

    4. 家国情怀：科技报国、自主创新、文化自信

2. 编译原理中的思政元素

    1. <strong>严谨的科学态度</strong>：编译原理的各个阶段（如词法分析、语法分析、中间代码生成、代码优化等）都要求严格遵循规则和逻辑，任何规则的偏差都可能导致程序运行异常。通过课程学习，有助于培养学生一丝不苟的科学精神，帮助学生在未来的学习和工作中保持高度的责任感和专业性。

    2. <strong>创新精神与优化意识</strong>：编译原理中涉及许多算法和优化技术，学生在设计实现时，需要考虑如何提高代码的效率和性能。这种创新精神能够激发学生的创造力，培养他们在遵守规则的基础上勇于探索和突破的能力。

    3. <strong>团队协作与分工：</strong>编译器的开发通常需要团队协作完成，每个成员都需要对自己的工作和团队整体目标负责。有助于培养学生的沟通能力和团队精神。

    4. <strong>质量意识与责任担当：</strong>编译器的质量直接影响到软件的正确性和可靠性。通过学习，让学生认识到他们所学的知识和技术将服务于社会，要确保软件的质量和安全性，培养学生的社会责任感和职业道德。

    5. <strong>系统观念与整体意识：</strong>编译器是一个复杂的系统，各个阶段相互关联。学生需要从整体上把握编译器的工作原理，理解各个部分之间的关系，有助于培养学生统筹全局、化繁为简的能力，帮助学生在未来的学习和工作中更好地处理复杂问题。

    6. <strong>前瞻性思维：</strong>编译器各阶段密切关联，如语法分析的LL\(1\)、SLR、LR\(1\)、LALR文法都需要根据规则表（预测分析表或LR分析表）向后看一个token才能决定下一步的动作。需要学生充分考虑任何一个可能的输入，具备一定的前瞻性思维能力，在今后工作过程中养成做好应急预案的习惯，保障工作的正常开展。

3. 经典案例 1 从编译器到“中国芯”

    编译器是芯片开发的关键工具（如 GCC、LLVM）

    在面临国外技术封锁的背景下，龙芯团队凭借坚定的信念和不懈的努力，研发出自主指令系统架构 LoongArch，成功实现了从指令集到芯片设计的完全自主化，构建了完整的自主生态体系，为国产芯片的发展树立了标杆。

4. 经典案例 2 技术伦理与社会责任

技术伦理：编译器生成的代码可能存在安全漏洞，编译器的安全性和可靠性直接影响到软件的运行效果。

2018 年，编译器领域发生了多起漏洞事件，这些漏洞引发了安全问题

Go语言编译器漏洞（CVE\-2018\-6574）

VirtualBox VM逃逸漏洞（CVE\-2018\-2844）

V8 JIT引擎漏洞（CVE\-2018\-17463）

LibSaas越界读取漏洞（CNVD\-2018\-15185）

编译器作为软件开发的基础工具，其安全性直接影响到生成代码的安全性和可靠性。开发者和编译器团队需要密切关注潜在的安全问题，并及时发布补丁以修复漏洞。

5. <strong>构建自主可控、兼容开放的基础软硬件生态体系是实现信息产业健康发展的保障</strong>

    1. 自主可控（Independence and Controllability）

        1. 由自己主导设计、研制、生产、维护，关键技术不受制于他人，能够保证产品的安全性、使用的可靠性、供货的稳定性。

    2. 基础软硬件生态体系

        1. CPU、操作系统、编译器、数据库、网络（软硬件）

    3. 错误认识 1：美国对中国的禁运，始于特朗普时代

        1. 长期以来，以美国为代表的一些西方国家，奉行和实施对中国的货物、服务和技术的出口管制和禁运措施，极大损害了我国的国家利益、产业利益和广大消费者的权益。特别是当我国科技人员自主研发出被禁运装备、技术及软件等以后，美国和其他国家往往立即解禁该类产品与技术，向我国大肆倾销。

        2. 从巴黎统筹到芯片法案

            1. 巴黎统筹委员会（COCOM，美国主导）：1949\-1994

                1. 中国委员会成立于 1952 年，协调对中国进行最彻底的技术封锁

            2. 瓦森纳协定（美国主导）：1996 至今

                1. 中国系首批 4 个管制国家之一

            3. 沃尔夫条款（美国单独，全球实施）：2011 至今

                1. 禁止中美之间的航天合作

            4. 芯片与科学法案（美国单独，全球实施）：2022 年 8 月至今

                1. 限制在中国投资 28 纳米以下制程的芯片技术

            5. 美国商务部、联邦通信委员会、国防部、总统行政令黑名单

                1. 制裁中国信息产业相关的大多数龙头企业和部分高校

    4. 错误认识 2：禁运着力芯片，是因为中国硬件更弱

    5. 错误认识 3：禁运着力芯片，是因为软件无法制裁

6. 用唯物主义辩证法思想学习《编译原理》

    1. 编译执行：指先将高级语言程序翻译成机器代码，然后，再直接执行与源程序对应的机器指令序列；

    2. 解释执行：一边翻译高级语言的语义，一边根据语义产生执行结果；

    这两种执行方式都广泛的存在于计算机世界中

    ![image\.png](/MyBlog/uploads/course-compiler/image-110.png)

7. 编译程序（代表语言：C、C\+\+）

    ![image\.png](/MyBlog/uploads/course-compiler/image-169.png)

8. 解释程序（代表语言：Python、PHP）

    ![image\.png](/MyBlog/uploads/course-compiler/image-30.png)

总结一下，事务都有两面性：

没有轻轻松松的成就：慵懒没成绩 成绩不慵懒

没有工作量就没有质量： 学习\+\+ = 娱乐\-\-

9. 我国保护计算机知识产权法律：计算机软件研发中的知识产权保护：

《著作权法》《计算机软件保护条例》《中华人民共和国专利法》


