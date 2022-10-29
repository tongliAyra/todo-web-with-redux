# Tasking

### Refactor:
1. 每个组件有各自的文件夹
2. 使用统一的箭头函数，统一的export写法，统一的空格形式
3. 把组件内不使用的方法抽出去
4. 常量抽出，方便后续整体修改

### Questions:
1. && 需要抽取常量吗？抽取的使用？

# Features：
1. 增加 eslint 统一格式
    - eslint 设置scripts 
2. 用git拉出新分支
3. 根据参考页面规划组件
    - header
    - task content
        - task input
        - task list
        - task overview
          - todo task count
          - task filter
    - footer
4. task input
   - 输入新的taskName，点击回车储存在数据里
   - 不能添加空内容
5. task list
   - 显示出数据里的每一条task
     - 未完成的task
     - 完成的task
   - 倒序显示
   - 点击checkbox更改状态
   - 点击删除按钮删除task
