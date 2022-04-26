function show_runtime() {
	// 1000毫秒运行一次
	window.setTimeout("show_runtime()", 1000);
	var
		born = new Date("1/23/2022 7:55:00"),
		now = new Date(),
		span = (now.getTime() - born.getTime()),
		span_day = span / (24 * 60 * 60 * 1000),
		days = Math.floor(span_day),
		span_hour = (span_day - days) * 24,
		hours = Math.floor(span_hour),
		span_minute = (span_hour - hours) * 60,
		minutes = Math.floor(span_minute),
		seconds = Math.floor((span_minute - minutes) * 60);
	runtime_span.innerHTML = `网站被摧残了: ${days}天${hours}小时${minutes}分${seconds}秒`;
}
show_runtime();