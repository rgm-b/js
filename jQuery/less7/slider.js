(function($){

	let viewUL = $('div.view')
					.css('overflow', 'hidden')
					.children('ul'),
		imgs = viewUL.find('img'),
		imgW = 400,
		imgsLen = imgs.length,
		totalImgsW = imgW * imgsLen,
		current = 1;

		$('div#switches')
			.show() //сделали кнопки видимыми

			.find('button').on('click', function(){
				let direction = $(this).attr('id'),
				    position = imgW;
				//let direction = $(this).data('param');  //обращаемся к html  data-param='prev' и data-param='next'

				/*if(direction === 'next'){
					current += 1;
				}else{
					current -= 1;
				}*/
				direction === 'next'? ++current: --current;
				if(current === 0){
					current = imgsLen;
					direction = 'next';
					position = totalImgsW - imgW;
				}else if( current === imgsLen + 1 ){
					current = 1;
					position = 0;
				}
				//console.log(current)
				doIt(viewUL, position, direction);
			});

		function doIt(container, position, direction){	
			//console.log(position)		;
			let sign; // -=, +=
			if(direction && position != 0){
				sign = (direction === 'next') ? '-=' : '+=';
			}			
			let shift = {'margin-left': sign? (sign + position): position};
			let duration = {};
			if(position===0 || position === totalImgsW - imgW){
				duration = {duration: 0};
			}
			container.animate(shift, duration);
		}


})(jQuery)