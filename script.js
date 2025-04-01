const foods = ["披萨", "汉堡", "寿司", "拉面", "牛排", "饺子", "炒菜", "火锅", "麻辣烫", "烧烤", "蛋挞", "三明治", "煎饼果子", "寿司卷", "炸鸡", "意面", "炒河粉", "螺蛳粉", "热干面", "煲仔饭", "叉烧饭", "盖浇饭", "黄焖鸡米饭", "酸菜鱼", "水煮鱼", "毛血旺", "糖醋排骨", "红烧肉", "宫保鸡丁", "鱼香肉丝", "麻婆豆腐", "西红柿炒鸡蛋", "地三鲜", "溜肉段", "锅包肉", "披萨", "汉堡", "寿司", "咖喱饭", "寿司", "春卷", "油条", "豆浆", "饭团", "烧麦", "包子", "馄饨", "米线", "烤冷面", "手抓饼", "炒饼"];
const randomButton = document.getElementById('randomButton');
const result = document.getElementById('result');

function shuffleFood() {
    const duration = 2000; // 动画持续时间
    const interval = 50; // 每次切换间隔
    const startTime = Date.now();
    let finalFood = foods[Math.floor(Math.random() * foods.length)];

    function updateFood() {
        const now = Date.now();
        const elapsed = now - startTime;

        if (elapsed < duration) {
            const randomFood = foods[Math.floor(Math.random() * foods.length)];
            result.textContent = `今天吃：${randomFood}`;
            setTimeout(updateFood, interval);
        } else {
            result.textContent = `今天吃：${finalFood}`;
        }
    }

    updateFood();
}

randomButton.addEventListener('click', function () {
    result.style.visibility = 'visible';
    shuffleFood();
});