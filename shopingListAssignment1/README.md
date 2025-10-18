# 小專案：「購物清單分析器」
🎯 目標

## 寫一個 JavaScript 程式，輸入一個購物清單，然後：
1️⃣ 顯示所有商品名稱
2️⃣ 篩選出價錢 ≥ 100 嘅「高價商品」
3️⃣ 計算總價
4️⃣ 顯示平均價錢
5️⃣ 顯示幾多件商品低過 50 元

let items = [
  { name: "耳機", price: 120 },
  { name: "滑鼠", price: 80 },
  { name: "USB線", price: 30 },
  { name: "充電器", price: 150 },
  { name: "筆", price: 20 }
];

🧠 提示

顯示名稱 👉 用 .map()

篩選高價商品 👉 用 .filter()

計算總價 👉 用 .reduce()

平均價 👉 用「總價 ÷ 商品數量」

統計低價商品數量 👉 用 .filter() 或 for loop
---
💡 額外挑戰（可選）

✅ 嘗試將所有邏輯寫入一個 analyzeShoppingList(items) function
✅ 令輸出變成一個物件，例如：

{
  names: ["耳機", "滑鼠", "USB線", "充電器", "筆"],
  expensive: ["耳機", "充電器"],
  total: 400,
  average: 80,
  cheapCount: 2
}
