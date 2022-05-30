const generateOverride = (params = {}) => {
	let result = ''
	if (params.customCss) {
		result += `
    ${params.customCss}
    `
	}
	console.log('result', result)
	return result
}
/**
 * 十六进制颜色转 RGBA 颜色
 * @param alpha
 * @returns {string}
 */
String.prototype.colorRgba = function (alpha = 1.0) {
	var sColor = this.toLowerCase();
	//十六进制颜色值的正则表达式
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	// 如果是16进制颜色
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			var sColorNew = "#";
			for (var i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
			}
			sColor = sColorNew;
		}
		//处理六位的颜色值
		var sColorChange = [];
		for (var i = 1; i < 7; i += 2) {
			sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
		}
		return "RGBA(" + sColorChange.join(",") + "," + alpha + ")";
	}
	return sColor;
};

module.exports = generateOverride