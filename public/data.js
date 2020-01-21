/***********************
 * @name 2019-nCoV数据
 * @author veaba
 * @date 2020/1/20 0020
 ***********************/
/**
 * @desc 原始具体地点
 * */
export const origin_location = {
	name: '武汉华南海鲜批发市场',
	geo: [114.268361, 30.623735]
};


/**
 * @desc 原始感染城市
 * */
export const origin_city = {
	name: '武汉',
	geo: [114.3162, 30.581084]
};

/**
 * @desc 感染数据，可以根据时间线绘制感染变化
 * @todo 1、未能找到更前的数据；2、补充更多的数据
 * @最早发病时间：@http://www.942db.com/a/xinwenpinglun/2020/0110/30.html
 * @format  {
 *   name:"城市", {string}
 *   count:确诊人数 {number} or undefined
 *   dead:死亡人数,{number} or undefined
 *   cure: 治愈人数,{number} 治愈出
 *   suspected：疑似人数 {number} or undefined，不算count里面
 *   mid:重症,{number} or undefined
 *   high:危重症,{number} or undefined
 *
 * }
 * */
export const infectedCountData = {
	'2019-12-12': [],
	'2019-12-13': [],
	'2019-12-14': [],
	'2019-12-15': [],
	'2019-12-16': [],
	'2019-12-17': [],
	'2019-12-18': [],
	'2019-12-19': [],
	'2019-12-20': [],
	'2019-12-21': [],
	'2019-12-22': [],
	'2019-12-23': [],
	'2019-12-24': [],
	'2019-12-25': [],
	'2019-12-26': [],
	'2019-12-27': [],
	'2019-12-28': [],
	'2019-12-29': [],
	'2019-12-30': [],
	'2019-12-31': [],
	'2020-01-01': [],
	'2020-01-02': [],
	'2020-01-03': [],
	'2020-01-04': [],
	'2020-01-05': [],
	'2020-01-06': [],
	'2020-01-07': [],
	'2020-01-08': [],
	'2020-01-09': [],
	'2020-01-10': [],
	'2020-01-11': [],
	'2020-01-12': [],
	'2020-01-13': [],
	'2020-01-14': [],
	'2020-01-15': [],
	'2020-01-16': [],
	'2020-01-17': [],
	'2020-01-18': [],
	'2020-01-19': [],
	'2020-01-20': [
		{
			name: '武汉',
			count: 136,
		},
		{
			name: "北京",
			count: 2,
		},
		{
			name: "深圳",
			count: 1,
		},
		{
			name: "珠海",
			count: 3,
		},
		{
			name:"上海",
			count:1
		},
		{
			name: "日本",
			count: 1,
		},
		{
			name: "泰国",
			count: 2,
		},
		{
			name: "韩国",
			count: 1,
		}
	],
	'2020-01-21': [
		{
			name: '武汉',
			count: 198,
			dead:4,
			cure:25,
		},
		{
			name: "北京",
			count: 2,
		},
		{
			name: "深圳",
			count: 1,
		},
		{
			name: "珠海",
			count: 3,
		},
		{
			name: "山东",
			count: 0,
			suspected:1
		},
		{
			name:"上海",
			count:2,
			suspected:4
		},
		{
			name:"大连",
			count:1
		},
		{
			name:"贵阳",
			suspected:1
		},
		{
			name: "日本",
			count: 1,
		},
		{
			name: "泰国",
			count: 2,
		},
		{
			name: "韩国",
			count: 1,
		}
	]
	
};

/**
 * @desc todo 根据时间线绘制感染变化
 * */
export const infectedDateData = {};


/**
 * @desc todo 以武汉为起始点对世界各地感染的迁徙图
 * */
export const transferData = [];

/**
 * @desc todo AI样本
 * */
export const AIData = {};

// expose
export function DATA() {
	return {
		origin_location,
		origin_city,
		infectedCountData,
		infectedDateData,
		transferData,
		AIData
	};
}

window.DATA = DATA;
