异步串行怎么感觉和同步一样了 


task1 task2 task3

相同点 都是一个一个来，

不同点 同步里不能出现异步代码 setTimeout,异步串行就可以使用异步代码promise async await setTimeout

那如果SyncHook中某一个有返回值，这个返回值是不是被忽略了
是的
 



resolve('result 2') 的返回值就不再是一个promise了，是一个常量，所以结束，不往下执行了，对吗？ 

只要有结果就行


this.header() + this.content(）的时候，content()方法不就是定义在子类里面么？ 
是的
最终创建的使用的 都是子类的实例，所以都可以调用


为啥不在call方法内部排序 
为了性能
如果你连续调用100次的call
排序100次。排序性能是非常差的 n*log(n)

你在插入的时候排好序
在call的时候就不需要排序了





会议用户619087
这种连缀的写法是怎么实现的 

