# Array 数组

> 数组的标准定义是:一个存储元素的线性集合(collection)。

JavaScript 中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。然而，这些数字索引在内部被转换为字符串类型，这是因为 JavaScript 对象中的属性名必须是字符串。数组在 JavaScript 中只是一种特殊的对象，所以效率上不如其他语言中的数组高。

**动态数组**：数组具有固定的容量，我们需要在初始化时指定数组的大小。有时它会非常不方便并可能造成浪费。因此，大多数编程语言都提供内置的动态数组，它仍然是一个随机存取的列表数据结构，但大小是可变的。JavaScript就是动态数组。
**中心索引**：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

## JavaScript API

### 创建

`Array.of` 改善了 `new Array()` 新建数组模糊不清的问题。

1. `Array.from(arrayLike[, mapFn[, thisArg])`
2. 🚩`Array.of()`
    - `Array.of(2)` => `[2]`
    - `Array.of(1,2)` => `[1,2]`
3. `Array()`
   - `Array(2)` => `[,]`
   - `Array(1,2)` => `[1,2]`

### 是否是数组

1. `Array.isArray()`: 兼容性不好
2. `instanceOf`: 原型链断裂或者是重定
3. `Object.prototype.toString.call(array) === '[object Array]'`: 👍

### 长度的读取和设置

length可以返回当前数组长度，但当手动设置时会有以下情况：

1. length属性值 > 元素个数 = 稀疏数组
2. length设置值 < 元素个数  时，多余的元素将会删除

### 遍历

1. `array.forEach(fn)`
2. `for(let v of array)`
3. `for(let i of array.keys())`
4. `for(let v of array.values())`
5. `for(let v of array.entries())`

### 判断

1. `array.every(fn)`
2. `array.some(fn)`
3. `arr.includes(v, index)`:从index下标开始查找是否包含v

### 查找

1. `array.indexOf(v)`
2. `array.lastIndexOf(v)`
3. `array.find(fn)`
4. `arr.findIndex(fn)`

### 操作

1. `arr.reduce(fn,init)`
2. `arr.reduceRight(fn,init)`
3. `arr.join()`

### 返回新数组

1. `array.concat(item)`:如果是数组，降低一个维度后合并
2. `array.flat()`: 降低一个维度
3. `arr.flatMap()`:先 map，后 flat
4. `arr.slice(start, end)`
5. `arr.map(fn)`
6. `arr.filter(fn)`

### 改变自身操作

1. `splice(start,number,replace_item1,...)`:当替换的项大于删除项时，就会变成插入操作了。返回删除的数组
2. `reverse()`
3. `push()`/`pop()`
4. `unshift()`/`shift()`
5. `sort(fn)`
6. `fill(v,start,end)`: end 超出数组长度部分无效。
7. `copyWithin(targetIndex,start,end)`: 浅复制数组的一部分到同一数组中的另一个位置,不会改变原数组的长度。
