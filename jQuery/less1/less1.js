let allLI;
//allLI = $('ul.list').children('li');  //вернёт только 4 li 
//allLI = $('ul').children('li'); // сначала дети(li) ul.list, потом li вложенного ul 

//allLI = $('ul.list').find('li');  //всё li, которые находятся в ul.list не только дети, но и внуки и тд. нумерация по порядку сверху вниз и слева направо.

allLI = $('ul.list')
			.children('li')
			.eq(1)                   //выбирает 1 элемент equal (оказываться на должной высоте)
			.css('color','brown')
			//.text()  //читаем текст из li
			//.text('<span>Second item</span>')  //передаём текст в li, именно всю строку, тэги читаются как строка
			.html('<span>ВТОРОЙ</span>')  //аналог innerHTML



console.log(allLI);