
$(function () {
	var $time = $('#time'),
	$btn = $('#btn'),
	status = 'init',
	time = 5000,
	count = 0;

	$btn.on('touchstart click', function  () {
		switch (status) {
			case 'init':
				start()
				break;
			case 'started':
				$btn.html(++count);
				break;

		}
	});

	function start() {
	status = "started";
	var conter = setInterval(timer, 7),
		curTime;

	function timer() {
		time -= 7;
		if (time <= 0) {
			time = 0;
			clearInterval(conter);
		}

		curTime = (time / 1000).toFixed(3);
		if (curTime == '0.000')
			$time.html('时间到')
		else
			$time.html(curTime + ' 秒');

	}
}
});

