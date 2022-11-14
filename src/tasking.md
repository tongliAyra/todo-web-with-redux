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
   - 下箭头
     - 有未完成任务时，点击让所有task completed
     - 全部任务completed时，点击让所有task变成 todo 状态
5. task list
   - 显示出数据里的每一条task
     - 未完成的task
     - 完成的task
   - 倒序显示
   - 点击checkbox更改状态
     - 实时更新list
   - 点击删除按钮删除task     
     - 实时更新list
6. task overview
   - todo task count
     - 展示已有的未完成的task 数量，随着task情况更新
   - task filter
     - all 默认显示所有的任务列表
     - active 只显示未完成的任务
     - completed 只显示已完成的任务
     - clear completed 
       - 删除所有已完成的任务
       - 如果所有任务都为todo状态，按钮不显示
7. ui
   - 自定义 checkbox
   - 删除icon hover显示
   - 筛选按钮状态传递
   - 点击任务完成，task内容变成加横杠
   - import 自定义字体使用
8. nice to have
   - 双击编辑输入内容
