# MyBlog / BlogDraft

博客源码仓库使用 REREREGO/MyBlog，网站路径为 /MyBlog/。私密草稿仓库使用 REREREGO/BlogDraft。公开留言和小时统计位于 REREREGO/Firefly-public；源码设为私密后，这些公开服务仍可读取。

访问计数保留原 /Firefly/ 标识，由 visit-key.ts 将新路径映射到原标识，避免文章浏览量清零。日期计算忽略此次 /Firefly/ 到 /MyBlog/ 的纯路径替换，实际内容修改仍会更新时间。

小时流量采集由 Firefly-public 的 traffic.yml 执行；源码库只运行文章日期同步。BlogDraft 的迁移任务使用仅对源码库有效的 SSH 写入密钥，源码库脱离 Fork 后如密钥被移除，需要重新创建并更新 BlogDraft 的 PUBLIC_REPO_DEPLOY_KEY。

迁移前完整 Git bundle 已在私密验证仓库备份。不要为了恢复旧配置把私密草稿重新公开。
