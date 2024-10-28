function getRandomElements(arr) {
    let w = arr.length, t, i;
    // Применяем алгоритм Фишера – Йетса
    while (w) {
      i = Math.floor(Math.random() * w--);
      t = arr[w];
      arr[w] = arr[i];
      arr[i] = t;
    }
    // Возвращаем первые 3 элемента
    return arr.slice(0, 3);
}
export default getRandomElements