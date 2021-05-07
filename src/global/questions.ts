import {
  Guard,
} from './guard';

export type Question = {
  id: string;
  category: string;
  comment?: string;
  text: string;
  inputType: 'radio' | 'date' | 'checkbox' | 'postal';
  options?: string[] | CheckboxOption[];
   nextQuestionMap?: string | string[];
  scoreMap?: number[];
  guard?: Guard;
};

export type CheckboxOption = {
  label: string;
  id: string;
};

export const CATEGORIES = {
  PERSONAL: 'personalInfo',
  SYMPTOMS: 'symptoms',
};

export const NO_XML = 'X';
export const QUESTION = {
  POSTAL_CODE: 'V1',
  AGE: 'P0',
  ABOVE_65: 'P1',
  LIVING_SITUATION: 'P2',
  CARING: 'P3',
  WORKSPACE: 'P4',
  CONTACT_DATE: 'CZ',
  OUT_OF_BREATH: 'SB',
  SYMPTOM_DATE: 'SZ',
  DATA_DONATION: `${NO_XML}1`,
};

export const XML_ORDER = ['V', 'P', 'C', 'S', 'D', 'M'];

export const QUESTIONS: Question[] = [
  // {
  //   id: '000',
  //   category: CATEGORIES.SYMPTOMS,
  //   comment: 'comment_100',
  //   text: '000',
  //   inputType: 'radio',
  //   options: [
  //     'answer_yes',
  //     'answer_no',
  //   ],
  //   scoreMap: [1, 0],
  // },
  // {
  //   id: '001',
  //   category: CATEGORIES.SYMPTOMS,
  //   comment: 'comment_101',
  //   text: '001',
  //   inputType: 'radio',
  //   options: [
  //     'answer_yes',
  //     'answer_no',
  //   ],
  //   scoreMap: [2, 0],
  // },
  // {
  //   id: '002',
  //   category: CATEGORIES.SYMPTOMS,
  //   comment: 'comment_102',
  //   text: '002',
  //   inputType: 'radio',
  //   options: [
  //     'answer_yes',
  //     'answer_no',
  //   ],
  //   scoreMap: [3, 0],
  // },
  // {
  //   id: '003',
  //   category: CATEGORIES.SYMPTOMS,
  //   comment: 'comment_103',
  //   text: '003',
  //   inputType: 'radio',
  //   options: [
  //     'answer_yes',
  //     'answer_no',
  //   ],
  //   scoreMap: [2, 1],
  // },
  // {
  //   id: '004',
  //   category: CATEGORIES.SYMPTOMS,
  //   comment: 'comment_104',
  //   text: '004',
  //   inputType: 'radio',
  //   options: [
  //     'answer_yes',
  //     'answer_no',
  //   ],
  //   scoreMap: [10, 2],
  // },

//PARTIE DECOUPE QUESTION SUMMARY 1
{
  id:'question_1_0',
    category:CATEGORIES.SYMPTOMS,
  text:'question_1_0',
  inputType:'radio',
  comment:'',
  options:['reponse_1_0_0', 'reponse_1_0_1', 'reponse_1_0_2', 'reponse_1_0_3', 'reponse_1_0_4', 'reponse_1_0_5', 'reponse_1_0_6', 'reponse_1_0_7', 'reponse_1_0_8', 'reponse_1_0_9', 'reponse_1_0_10', 'reponse_1_0_11', 'reponse_1_0_12', 'reponse_1_0_13', 'reponse_1_0_14', 'reponse_1_0_15', 'reponse_1_0_16', 'reponse_1_0_17', 'reponse_1_0_18'],
  // nextQuestionMap:['100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '1010', '1011', '1012', '1013', '1014', '1015', '1016', '1017', '1018'],
   scoreMap:[100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018]
},

//PARTIE DECOUPE QUESTION SUMMARY 2
	{
		id:'question_2_0',
		category:CATEGORIES.SYMPTOMS,
		text:'question_2_0',
		inputType:'radio',
		comment:'',
		options:['reponse_2_0_0', 'reponse_2_0_1', 'reponse_2_0_2', 'reponse_2_0_3', 'reponse_2_0_4', 'reponse_2_0_5', 'reponse_2_0_6', 'reponse_2_0_7', 'reponse_2_0_8', 'reponse_2_0_9', 'reponse_2_0_10', 'reponse_2_0_11', 'reponse_2_0_12', 'reponse_2_0_13', 'reponse_2_0_14', 'reponse_2_0_15', 'reponse_2_0_16', 'reponse_2_0_17', 'reponse_2_0_18', 'reponse_2_0_19', 'reponse_2_0_20', 'reponse_2_0_21'],
		// nextQuestionMap:['summary_comment_200', 'summary_comment_201', 'summary_comment_202', 'summary_comment_203', '204', '205', '206', '207', '208', '209', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
		scoreMap:[200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
	},
//PARTIE DECOUPE QUESTION SUMMARY 3
// 	{
// 		id:'question_3_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_3_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_3_0_0', 'reponse_3_0_1', 'reponse_3_0_2', 'reponse_3_0_3', 'reponse_3_0_4'],
// 		//nextQuestionMap:['300', '301', '302', '303', '304'],
// 		scoreMap:[1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 4
// 	{
// 		id:'question_4_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_4_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_4_0_0', 'reponse_4_0_1', 'reponse_4_0_2', 'reponse_4_0_3', 'reponse_4_0_4', 'reponse_4_0_5', 'reponse_4_0_6', 'reponse_4_0_7'],
// 		//nextQuestionMap:['400', '401', '402', '403', '404', '405', '406', '407'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 5
// 	{
// 		id:'question_5_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_5_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_5_0_0', 'reponse_5_0_1', 'reponse_5_0_2', 'reponse_5_0_3', 'reponse_5_0_4', 'reponse_5_0_5', 'reponse_5_0_6', 'reponse_5_0_7', 'reponse_5_0_8', 'reponse_5_0_9', 'reponse_5_0_10', 'reponse_5_0_11', 'reponse_5_0_12', 'reponse_5_0_13', 'reponse_5_0_14', 'reponse_5_0_15', 'reponse_5_0_16'],
// 		//nextQuestionMap:['500', '501', '502', '503', '504', '505', '506', '507', '508', '509', '5010', '5011', '5012', '5013', '5014', '5015', '5016'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 6
// 	{
// 		id:'question_6_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_6_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_6_0_0', 'reponse_6_0_1', 'reponse_6_0_2', 'reponse_6_0_3'],
// 		//nextQuestionMap:['600', '601', '602', '603'],
// 		scoreMap:[1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 7
// 	{
// 		id:'question_7_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_7_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_7_0_0', 'reponse_7_0_1', 'reponse_7_0_2', 'reponse_7_0_3', 'reponse_7_0_4', 'reponse_7_0_5', 'reponse_7_0_6'],
// 		//nextQuestionMap:['700', '701', '702', '703', '704', '705', '706'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 8
// 	{
// 		id:'question_8_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_8_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_8_0_0', 'reponse_8_0_1', 'reponse_8_0_2', 'reponse_8_0_3', 'reponse_8_0_4', 'reponse_8_0_5', 'reponse_8_0_6'],
// 		//nextQuestionMap:['800', '801', '802', '803', '804', '805', '806'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 9
// 	{
// 		id:'question_9_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_9_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_9_0_0', 'reponse_9_0_1', 'reponse_9_0_2', 'reponse_9_0_3', 'reponse_9_0_4', 'reponse_9_0_5', 'reponse_9_0_6'],
// 		//nextQuestionMap:['900', '901', '902', '903', '904', '905', '906'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 9
// 	{
// 		id:'question_9_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_9_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_9_1_0', 'reponse_9_1_1'],
// 		//nextQuestionMap:['910', '911'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 9
// 	{
// 		id:'question_9_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_9_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_9_2_0', 'reponse_9_2_1', 'reponse_9_2_2', 'reponse_9_2_3'],
// 		//nextQuestionMap:['920', '921', '922', '923'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 10
// 	{
// 		id:'question_10_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_10_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_10_0_0', 'reponse_10_0_1', 'reponse_10_0_2', 'reponse_10_0_3'],
// 		//nextQuestionMap:['1000', '1001', '1002', '1003'],
// 		scoreMap:[1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 10
// 	{
// 		id:'question_10_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_10_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_10_1_0', 'reponse_10_1_1'],
// 		//nextQuestionMap:['1010', '1011'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 10
// 	{
// 		id:'question_10_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_10_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_10_2_0', 'reponse_10_2_1'],
// 		//nextQuestionMap:['1020', '1021'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 10
// 	{
// 		id:'question_10_3',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_10_3',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_10_3_0', 'reponse_10_3_1', 'reponse_10_3_2'],
// 		//nextQuestionMap:['1030', '1031', '1032'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 11
// 	{
// 		id:'question_11_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_11_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_11_0_0', 'reponse_11_0_1', 'reponse_11_0_2', 'reponse_11_0_3', 'reponse_11_0_4', 'reponse_11_0_5', 'reponse_11_0_6', 'reponse_11_0_7', 'reponse_11_0_8', 'reponse_11_0_9', 'reponse_11_0_10', 'reponse_11_0_11', 'reponse_11_0_12', 'reponse_11_0_13'],
// 		//nextQuestionMap:['1100', '1101', '1102', '1103', '1104', '1105', '1106', '1107', '1108', '1109', '11010', '11011', '11012', '11013'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 12
// 	{
// 		id:'question_12_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_12_0',
// 		inputType:'radio',
// 		comment:'comment_13_0',
// 		options:['reponse_12_0_0', 'reponse_12_0_1', 'reponse_12_0_2', 'reponse_12_0_3', 'reponse_12_0_4', 'reponse_12_0_5', 'reponse_12_0_6', 'reponse_12_0_7', 'reponse_12_0_8'],
// 		//nextQuestionMap:['1200', '1201', '1202', '1203', '1204', '1205', '1206', '1207', '1208'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 13
// 	{
// 		id:'question_13_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_13_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_13_0_0', 'reponse_13_0_1'],
// 		//nextQuestionMap:['1300', '1301'],
// 		scoreMap:[1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 14
// 	{
// 		id:'question_14_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_14_0',
// 		inputType:'radio',
// 		comment:'comment_15_0',
// 		options:['reponse_14_0_0', 'reponse_14_0_1', 'reponse_14_0_2'],
// 		//nextQuestionMap:['1400', '1401', '1402'],
// 		scoreMap:[1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 15
// 	{
// 		id:'question_15_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_15_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_15_0_0', 'reponse_15_0_1', 'reponse_15_0_2', 'reponse_15_0_3', 'reponse_15_0_4', 'reponse_15_0_5', 'reponse_15_0_6', 'reponse_15_0_7', 'reponse_15_0_8', 'reponse_15_0_9', 'reponse_15_0_10', 'reponse_15_0_11', 'reponse_15_0_12', 'reponse_15_0_13', 'reponse_15_0_14', 'reponse_15_0_15', 'reponse_15_0_16', 'reponse_15_0_17', 'reponse_15_0_18', 'reponse_15_0_19', 'reponse_15_0_20'],
// 		//nextQuestionMap:['1500', '1501', '1502', '1503', '1504', '1505', '1506', '1507', '1508', '1509', '15010', '15011', '15012', '15013', '15014', '15015', '15016', '15017', '15018', '15019', '15020'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 16
// 	{
// 		id:'question_16_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_16_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_16_0_0', 'reponse_16_0_1', 'reponse_16_0_2'],
// 		//nextQuestionMap:['1600', '1601', '1602'],
// 		scoreMap:[1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 17
// 	{
// 		id:'question_17_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_17_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_17_0_0', 'reponse_17_0_1', 'reponse_17_0_2', 'reponse_17_0_3', 'reponse_17_0_4', 'reponse_17_0_5', 'reponse_17_0_6'],
// 		//nextQuestionMap:['1700', '1701', '1702', '1703', '1704', '1705', '1706'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 18
// 	{
// 		id:'question_18_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_18_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_18_0_0', 'reponse_18_0_1', 'reponse_18_0_2', 'reponse_18_0_3'],
// 		//nextQuestionMap:['1800', '1801', '1802', '1803'],
// 		scoreMap:[1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 19
// 	{
// 		id:'question_19_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_19_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_19_0_0', 'reponse_19_0_1', 'reponse_19_0_2', 'reponse_19_0_3', 'reponse_19_0_4', 'reponse_19_0_5', 'reponse_19_0_6', 'reponse_19_0_7', 'reponse_19_0_8', 'reponse_19_0_9', 'reponse_19_0_10', 'reponse_19_0_11'],
// 		//nextQuestionMap:['1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '19010', '19011'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 20
// 	{
// 		id:'question_20_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_20_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_20_0_0', 'reponse_20_0_1', 'reponse_20_0_2', 'reponse_20_0_3', 'reponse_20_0_4', 'reponse_20_0_5', 'reponse_20_0_6', 'reponse_20_0_7', 'reponse_20_0_8', 'reponse_20_0_9', 'reponse_20_0_10', 'reponse_20_0_11', 'reponse_20_0_12', 'reponse_20_0_13', 'reponse_20_0_14'],
// 		//nextQuestionMap:['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '20010', '20011', '20012', '20013', '20014'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 23
// 	{
// 		id:'question_23_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_23_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_23_0_0', 'reponse_23_0_1', 'reponse_23_0_2', 'reponse_23_0_3', 'reponse_23_0_4', 'reponse_23_0_5'],
// 		//nextQuestionMap:['2300', '2301', '2302', '2303', '2304', '2305'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 24
// 	{
// 		id:'question_24_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_24_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_24_0_0', 'reponse_24_0_1', 'reponse_24_0_2', 'reponse_24_0_3', 'reponse_24_0_4', 'reponse_24_0_5', 'reponse_24_0_6', 'reponse_24_0_7', 'reponse_24_0_8'],
// 		//nextQuestionMap:['2400', '2401', '2402', '2403', '2404', '2405', '2406', '2407', '2408'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 24
// 	{
// 		id:'question_24_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_24_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_24_1_0', 'reponse_24_1_1', 'reponse_24_1_2', 'reponse_24_1_3', 'reponse_24_1_4', 'reponse_24_1_5', 'reponse_24_1_6', 'reponse_24_1_7'],
// 		//nextQuestionMap:['2410', '2411', '2412', '2413', '2414', '2415', '2416', '2417'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 24
// 	{
// 		id:'question_24_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_24_2',
// 		inputType:'radio',
// 		comment:'comment_25_2',
// 		options:['reponse_24_2_0', 'reponse_24_2_1', 'reponse_24_2_2', 'reponse_24_2_3'],
// 		//nextQuestionMap:['2420', '2421', '2422', '2423'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 25
// 	{
// 		id:'question_25_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_25_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_25_0_0', 'reponse_25_0_1', 'reponse_25_0_2', 'reponse_25_0_3', 'reponse_25_0_4', 'reponse_25_0_5', 'reponse_25_0_6', 'reponse_25_0_7', 'reponse_25_0_8', 'reponse_25_0_9'],
// 		//nextQuestionMap:['2500', '2501', '2502', '2503', '2504', '2505', '2506', '2507', '2508', '2509'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 26
// 	{
// 		id:'question_26_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_26_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_26_0_0', 'reponse_26_0_1', 'reponse_26_0_2', 'reponse_26_0_3', 'reponse_26_0_4', 'reponse_26_0_5', 'reponse_26_0_6', 'reponse_26_0_7', 'reponse_26_0_8', 'reponse_26_0_9', 'reponse_26_0_10', 'reponse_26_0_11', 'reponse_26_0_12'],
// 		//nextQuestionMap:['2600', '2601', '2602', '2603', '2604', '2605', '2606', '2607', '2608', '2609', '26010', '26011', '26012'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 27
// 	{
// 		id:'question_27_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_27_0',
// 		inputType:'radio',
// 		comment:'comment_28_0',
// 		options:['reponse_27_0_0', 'reponse_27_0_1', 'reponse_27_0_2', 'reponse_27_0_3', 'reponse_27_0_4', 'reponse_27_0_5', 'reponse_27_0_6', 'reponse_27_0_7', 'reponse_27_0_8'],
// 		//nextQuestionMap:['2700', '2701', '2702', '2703', '2704', '2705', '2706', '2707', '2708'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 27
// 	{
// 		id:'question_27_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_27_1',
// 		inputType:'radio',
// 		comment:'comment_28_0',
// 		options:['reponse_27_1_0', 'reponse_27_1_1', 'reponse_27_1_2', 'reponse_27_1_3'],
// 		//nextQuestionMap:['2710', '2711', '2712', '2713'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 28
// 	{
// 		id:'question_28_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_28_0',
// 		inputType:'radio',
// 		comment:'comment_29_0',
// 		options:['reponse_28_0_0', 'reponse_28_0_1', 'reponse_28_0_2', 'reponse_28_0_3', 'reponse_28_0_4', 'reponse_28_0_5', 'reponse_28_0_6'],
// 		//nextQuestionMap:['2800', '2801', '2802', '2803', '2804', '2805', '2806'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 29
// 	{
// 		id:'question_29_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_29_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_29_0_0', 'reponse_29_0_1', 'reponse_29_0_2', 'reponse_29_0_3', 'reponse_29_0_4', 'reponse_29_0_5', 'reponse_29_0_6'],
// 		//nextQuestionMap:['2900', '2901', '2902', '2903', '2904', '2905', '2906'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 29
// 	{
// 		id:'question_29_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_29_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_29_1_0', 'reponse_29_1_1', 'reponse_29_1_2', 'reponse_29_1_3', 'reponse_29_1_4'],
// 		//nextQuestionMap:['2910', '2911', '2912', '2913', '2914'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 29
// 	{
// 		id:'question_29_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_29_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_29_2_0', 'reponse_29_2_1', 'reponse_29_2_2', 'reponse_29_2_3', 'reponse_29_2_4', 'reponse_29_2_5', 'reponse_29_2_6'],
// 		//nextQuestionMap:['2920', '2921', '2922', '2923', '2924', '2925', '2926'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 29
// 	{
// 		id:'question_29_3',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_29_3',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_29_3_0', 'reponse_29_3_1', 'reponse_29_3_2', 'reponse_29_3_3', 'reponse_29_3_4'],
// 		//nextQuestionMap:['2930', '2931', '2932', '2933', '2934'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 29
// 	{
// 		id:'question_29_4',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_29_4',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_29_4_0', 'reponse_29_4_1', 'reponse_29_4_2'],
// 		//nextQuestionMap:['2940', '2941', '2942'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 29
// 	{
// 		id:'question_29_5',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_29_5',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_29_5_0', 'reponse_29_5_1', 'reponse_29_5_2', 'reponse_29_5_3', 'reponse_29_5_4'],
// 		//nextQuestionMap:['2950', '2951', '2952', '2953', '2954'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 29
// 	{
// 		id:'question_29_6',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_29_6',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_29_6_0', 'reponse_29_6_1', 'reponse_29_6_2'],
// 		//nextQuestionMap:['2960', '2961', '2962'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 30
// 	{
// 		id:'question_30_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_30_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_30_0_0', 'reponse_30_0_1', 'reponse_30_0_2', 'reponse_30_0_3', 'reponse_30_0_4', 'reponse_30_0_5', 'reponse_30_0_6', 'reponse_30_0_7'],
// 		//nextQuestionMap:['3000', '3001', '3002', '3003', '3004', '3005', '3006', '3007'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 31
// 	{
// 		id:'question_31_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_31_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_31_0_0', 'reponse_31_0_1', 'reponse_31_0_2', 'reponse_31_0_3', 'reponse_31_0_4'],
// 		//nextQuestionMap:['3100', '3101', '3102', '3103', '3104'],
// 		scoreMap:[1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 31
// 	{
// 		id:'question_31_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_31_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_31_1_0', 'reponse_31_1_1', 'reponse_31_1_2', 'reponse_31_1_3', 'reponse_31_1_4', 'reponse_31_1_5', 'reponse_31_1_6', 'reponse_31_1_7', 'reponse_31_1_8', 'reponse_31_1_9', 'reponse_31_1_10', 'reponse_31_1_11', 'reponse_31_1_12'],
// 		//nextQuestionMap:['3110', '3111', '3112', '3113', '3114', '3115', '3116', '3117', '3118', '3119', '31110', '31111', '31112'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 31
// 	{
// 		id:'question_31_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_31_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_31_2_0', 'reponse_31_2_1', 'reponse_31_2_2', 'reponse_31_2_3', 'reponse_31_2_4', 'reponse_31_2_5'],
// 		//nextQuestionMap:['3120', '3121', '3122', '3123', '3124', '3125'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 32
// 	{
// 		id:'question_32_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_32_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_32_0_0', 'reponse_32_0_1', 'reponse_32_0_2', 'reponse_32_0_3', 'reponse_32_0_4', 'reponse_32_0_5', 'reponse_32_0_6', 'reponse_32_0_7', 'reponse_32_0_8', 'reponse_32_0_9', 'reponse_32_0_10', 'reponse_32_0_11', 'reponse_32_0_12'],
// 		//nextQuestionMap:['3200', '3201', '3202', '3203', '3204', '3205', '3206', '3207', '3208', '3209', '32010', '32011', '32012'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 34
// 	{
// 		id:'question_34_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_34_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_34_0_0', 'reponse_34_0_1', 'reponse_34_0_2', 'reponse_34_0_3', 'reponse_34_0_4', 'reponse_34_0_5', 'reponse_34_0_6', 'reponse_34_0_7', 'reponse_34_0_8', 'reponse_34_0_9', 'reponse_34_0_10', 'reponse_34_0_11'],
// 		//nextQuestionMap:['3400', '3401', '3402', '3403', '3404', '3405', '3406', '3407', '3408', '3409', '34010', '34011'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 35
// 	{
// 		id:'question_35_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_35_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_35_0_0', 'reponse_35_0_1', 'reponse_35_0_2'],
// 		//nextQuestionMap:['3500', '3501', '3502'],
// 		scoreMap:[1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 36
// 	{
// 		id:'question_36_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_36_0',
// 		inputType:'radio',
// 		comment:'comment_37_0',
// 		options:['reponse_36_0_0', 'reponse_36_0_1', 'reponse_36_0_2', 'reponse_36_0_3', 'reponse_36_0_4', 'reponse_36_0_5', 'reponse_36_0_6', 'reponse_36_0_7', 'reponse_36_0_8'],
// 		//nextQuestionMap:['3600', '3601', '3602', '3603', '3604', '3605', '3606', '3607', '3608'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 37
// 	{
// 		id:'question_37_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_37_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_37_0_0', 'reponse_37_0_1', 'reponse_37_0_2', 'reponse_37_0_3', 'reponse_37_0_4', 'reponse_37_0_5', 'reponse_37_0_6', 'reponse_37_0_7', 'reponse_37_0_8', 'reponse_37_0_9', 'reponse_37_0_10', 'reponse_37_0_11', 'reponse_37_0_12', 'reponse_37_0_13', 'reponse_37_0_14', 'reponse_37_0_15', 'reponse_37_0_16'],
// 		//nextQuestionMap:['3700', '3701', '3702', '3703', '3704', '3705', '3706', '3707', '3708', '3709', '37010', '37011', '37012', '37013', '37014', '37015', '37016'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 38
// 	{
// 		id:'question_38_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_38_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_38_0_0', 'reponse_38_0_1', 'reponse_38_0_2', 'reponse_38_0_3'],
// 		//nextQuestionMap:['3800', '3801', '3802', '3803'],
// 		scoreMap:[1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 39
// 	{
// 		id:'question_39_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_39_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_39_0_0', 'reponse_39_0_1', 'reponse_39_0_2', 'reponse_39_0_3', 'reponse_39_0_4', 'reponse_39_0_5', 'reponse_39_0_6', 'reponse_39_0_7', 'reponse_39_0_8', 'reponse_39_0_9'],
// 		//nextQuestionMap:['3900', '3901', '3902', '3903', '3904', '3905', '3906', '3907', '3908', '3909'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 39
// 	{
// 		id:'question_39_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_39_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_39_1_0', 'reponse_39_1_1', 'reponse_39_1_2'],
// 		//nextQuestionMap:['3910', '3911', '3912'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 40
// 	{
// 		id:'question_40_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_40_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_40_0_0', 'reponse_40_0_1', 'reponse_40_0_2', 'reponse_40_0_3', 'reponse_40_0_4', 'reponse_40_0_5'],
// 		//nextQuestionMap:['4000', '4001', '4002', '4003', '4004', '4005'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 42
// 	{
// 		id:'question_42_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_42_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_42_0_0', 'reponse_42_0_1'],
// 		//nextQuestionMap:['4200', '4201'],
// 		scoreMap:[1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 43
// 	{
// 		id:'question_43_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_43_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_43_0_0', 'reponse_43_0_1', 'reponse_43_0_2', 'reponse_43_0_3', 'reponse_43_0_4', 'reponse_43_0_5'],
// 		//nextQuestionMap:['4300', '4301', '4302', '4303', '4304', '4305'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 44
// 	{
// 		id:'question_44_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_44_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_44_0_0', 'reponse_44_0_1', 'reponse_44_0_2', 'reponse_44_0_3', 'reponse_44_0_4'],
// 		//nextQuestionMap:['4400', '4401', '4402', '4403', '4404'],
// 		scoreMap:[1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 45
// 	{
// 		id:'question_45_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_45_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_45_0_0', 'reponse_45_0_1', 'reponse_45_0_2', 'reponse_45_0_3', 'reponse_45_0_4', 'reponse_45_0_5', 'reponse_45_0_6'],
// 		//nextQuestionMap:['4500', '4501', '4502', '4503', '4504', '4505', '4506'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 46
// 	{
// 		id:'question_46_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_46_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_46_0_0', 'reponse_46_0_1'],
// 		//nextQuestionMap:['4600', '4601'],
// 		scoreMap:[1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 46
// 	{
// 		id:'question_46_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_46_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_46_1_0', 'reponse_46_1_1', 'reponse_46_1_2', 'reponse_46_1_3', 'reponse_46_1_4', 'reponse_46_1_5'],
// 		//nextQuestionMap:['4610', '4611', '4612', '4613', '4614', '4615'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 46
// 	{
// 		id:'question_46_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_46_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_46_2_0'],
// 		//nextQuestionMap:['4620'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 46
// 	{
// 		id:'question_46_3',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_46_3',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_46_3_0', 'reponse_46_3_1'],
// 		//nextQuestionMap:['4630', '4631'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 46
// 	{
// 		id:'question_46_4',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_46_4',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_46_4_0', 'reponse_46_4_1', 'reponse_46_4_2'],
// 		//nextQuestionMap:['4640', '4641', '4642'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 46
// 	{
// 		id:'question_46_5',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_46_5',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_46_5_0', 'reponse_46_5_1', 'reponse_46_5_2', 'reponse_46_5_3', 'reponse_46_5_4', 'reponse_46_5_5', 'reponse_46_5_6', 'reponse_46_5_7', 'reponse_46_5_8', 'reponse_46_5_9', 'reponse_46_5_10'],
// 		//nextQuestionMap:['4650', '4651', '4652', '4653', '4654', '4655', '4656', '4657', '4658', '4659', '46510'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 47
// 	{
// 		id:'question_47_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_47_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_47_0_0', 'reponse_47_0_1', 'reponse_47_0_2', 'reponse_47_0_3', 'reponse_47_0_4', 'reponse_47_0_5', 'reponse_47_0_6', 'reponse_47_0_7', 'reponse_47_0_8', 'reponse_47_0_9', 'reponse_47_0_10'],
// 		//nextQuestionMap:['4700', '4701', '4702', '4703', '4704', '4705', '4706', '4707', '4708', '4709', '47010'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_0_0', 'reponse_48_0_1', 'reponse_48_0_2', 'reponse_48_0_3', 'reponse_48_0_4', 'reponse_48_0_5', 'reponse_48_0_6'],
// 		//nextQuestionMap:['4800', '4801', '4802', '4803', '4804', '4805', '4806'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_1_0', 'reponse_48_1_1'],
// 		//nextQuestionMap:['4810', '4811'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_2_0', 'reponse_48_2_1', 'reponse_48_2_2'],
// 		//nextQuestionMap:['4820', '4821', '4822'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_3',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_3',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_3_0', 'reponse_48_3_1', 'reponse_48_3_2'],
// 		//nextQuestionMap:['4830', '4831', '4832'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_4',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_4',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_4_0', 'reponse_48_4_1', 'reponse_48_4_2'],
// 		//nextQuestionMap:['4840', '4841', '4842'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_5',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_5',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_5_0', 'reponse_48_5_1', 'reponse_48_5_2'],
// 		//nextQuestionMap:['4850', '4851', '4852'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_6',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_6',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_6_0', 'reponse_48_6_1', 'reponse_48_6_2'],
// 		//nextQuestionMap:['4860', '4861', '4862'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 48
// 	{
// 		id:'question_48_7',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_48_7',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_48_7_0', 'reponse_48_7_1'],
// 		//nextQuestionMap:['4870', '4871'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 49
// 	{
// 		id:'question_49_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_49_0',
// 		inputType:'radio',
// 		comment:'comment_50_0',
// 		options:['reponse_49_0_0', 'reponse_49_0_1', 'reponse_49_0_2', 'reponse_49_0_3', 'reponse_49_0_4', 'reponse_49_0_5', 'reponse_49_0_6', 'reponse_49_0_7', 'reponse_49_0_8', 'reponse_49_0_9', 'reponse_49_0_10', 'reponse_49_0_11', 'reponse_49_0_12', 'reponse_49_0_13', 'reponse_49_0_14', 'reponse_49_0_15', 'reponse_49_0_16', 'reponse_49_0_17', 'reponse_49_0_18'],
// 		//nextQuestionMap:['4900', '4901', '4902', '4903', '4904', '4905', '4906', '4907', '4908', '4909', '49010', '49011', '49012', '49013', '49014', '49015', '49016', '49017', '49018'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 50
// 	{
// 		id:'question_50_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_50_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_50_0_0', 'reponse_50_0_1', 'reponse_50_0_2'],
// 		//nextQuestionMap:['5000', '5001', '5002'],
// 		scoreMap:[1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 52
// 	{
// 		id:'question_52_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_52_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_52_0_0', 'reponse_52_0_1', 'reponse_52_0_2', 'reponse_52_0_3', 'reponse_52_0_4', 'reponse_52_0_5', 'reponse_52_0_6', 'reponse_52_0_7'],
// 		//nextQuestionMap:['5200', '5201', '5202', '5203', '5204', '5205', '5206', '5207'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 52
// 	{
// 		id:'question_52_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_52_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_52_1_0', 'reponse_52_1_1'],
// 		//nextQuestionMap:['5210', '5211'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 52
// 	{
// 		id:'question_52_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_52_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_52_2_0', 'reponse_52_2_1'],
// 		//nextQuestionMap:['5220', '5221'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 52
// 	{
// 		id:'question_52_3',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_52_3',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_52_3_0', 'reponse_52_3_1'],
// 		//nextQuestionMap:['5230', '5231'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 52
// 	{
// 		id:'question_52_4',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_52_4',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_52_4_0', 'reponse_52_4_1'],
// 		//nextQuestionMap:['5240', '5241'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 53
// 	{
// 		id:'question_53_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_53_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_53_0_0', 'reponse_53_0_1', 'reponse_53_0_2', 'reponse_53_0_3', 'reponse_53_0_4', 'reponse_53_0_5', 'reponse_53_0_6', 'reponse_53_0_7', 'reponse_53_0_8', 'reponse_53_0_9', 'reponse_53_0_10', 'reponse_53_0_11'],
// 		//nextQuestionMap:['5300', '5301', '5302', '5303', '5304', '5305', '5306', '5307', '5308', '5309', '53010', '53011'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 54
// 	{
// 		id:'question_54_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_54_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_54_0_0', 'reponse_54_0_1', 'reponse_54_0_2', 'reponse_54_0_3'],
// 		//nextQuestionMap:['5400', '5401', '5402', '5403'],
// 		scoreMap:[1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 54
// 	{
// 		id:'question_54_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_54_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_54_1_0', 'reponse_54_1_1'],
// 		//nextQuestionMap:['5410', '5411'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 54
// 	{
// 		id:'question_54_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_54_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_54_2_0', 'reponse_54_2_1', 'reponse_54_2_2'],
// 		//nextQuestionMap:['5420', '5421', '5422'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 55
// 	{
// 		id:'question_55_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_55_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_55_0_0', 'reponse_55_0_1', 'reponse_55_0_2', 'reponse_55_0_3', 'reponse_55_0_4', 'reponse_55_0_5', 'reponse_55_0_6', 'reponse_55_0_7', 'reponse_55_0_8', 'reponse_55_0_9'],
// 		//nextQuestionMap:['5500', '5501', '5502', '5503', '5504', '5505', '5506', '5507', '5508', '5509'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 55
// 	{
// 		id:'question_55_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_55_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_55_1_0', 'reponse_55_1_1', 'reponse_55_1_2', 'reponse_55_1_3', 'reponse_55_1_4'],
// 		//nextQuestionMap:['5510', '5511', '5512', '5513', '5514'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 56
// 	{
// 		id:'question_56_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_56_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_56_0_0', 'reponse_56_0_1', 'reponse_56_0_2', 'reponse_56_0_3', 'reponse_56_0_4', 'reponse_56_0_5', 'reponse_56_0_6', 'reponse_56_0_7', 'reponse_56_0_8', 'reponse_56_0_9'],
// 		//nextQuestionMap:['5600', '5601', '5602', '5603', '5604', '5605', '5606', '5607', '5608', '5609'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 56
// 	{
// 		id:'question_56_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_56_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_56_1_0', 'reponse_56_1_1'],
// 		//nextQuestionMap:['5610', '5611'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 58
// 	{
// 		id:'question_58_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_58_0',
// 		inputType:'radio',
// 		comment:'comment_59_0',
// 		options:['reponse_58_0_0', 'reponse_58_0_1', 'reponse_58_0_2', 'reponse_58_0_3', 'reponse_58_0_4', 'reponse_58_0_5', 'reponse_58_0_6'],
// 		//nextQuestionMap:['5800', '5801', '5802', '5803', '5804', '5805', '5806'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 60
// 	{
// 		id:'question_60_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_60_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_60_0_0', 'reponse_60_0_1', 'reponse_60_0_2', 'reponse_60_0_3', 'reponse_60_0_4', 'reponse_60_0_5'],
// 		//nextQuestionMap:['6000', '6001', '6002', '6003', '6004', '6005'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 61
// 	{
// 		id:'question_61_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_61_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_61_0_0', 'reponse_61_0_1', 'reponse_61_0_2', 'reponse_61_0_3', 'reponse_61_0_4', 'reponse_61_0_5', 'reponse_61_0_6', 'reponse_61_0_7'],
// 		//nextQuestionMap:['6100', '6101', '6102', '6103', '6104', '6105', '6106', '6107'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 63
// 	{
// 		id:'question_63_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_63_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_63_0_0', 'reponse_63_0_1', 'reponse_63_0_2'],
// 		//nextQuestionMap:['6300', '6301', '6302'],
// 		scoreMap:[1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 63
// 	{
// 		id:'question_63_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_63_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_63_1_0', 'reponse_63_1_1', 'reponse_63_1_2', 'reponse_63_1_3', 'reponse_63_1_4', 'reponse_63_1_5'],
// 		//nextQuestionMap:['6310', '6311', '6312', '6313', '6314', '6315'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 64
// 	{
// 		id:'question_64_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_64_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_64_0_0', 'reponse_64_0_1', 'reponse_64_0_2', 'reponse_64_0_3', 'reponse_64_0_4', 'reponse_64_0_5'],
// 		//nextQuestionMap:['6400', '6401', '6402', '6403', '6404', '6405'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 64
// 	{
// 		id:'question_64_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_64_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_64_1_0', 'reponse_64_1_1'],
// 		//nextQuestionMap:['6410', '6411'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 65
// 	{
// 		id:'question_65_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_65_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_65_0_0', 'reponse_65_0_1', 'reponse_65_0_2', 'reponse_65_0_3', 'reponse_65_0_4', 'reponse_65_0_5', 'reponse_65_0_6'],
// 		//nextQuestionMap:['6500', '6501', '6502', '6503', '6504', '6505', '6506'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 65
// 	{
// 		id:'question_65_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_65_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_65_1_0', 'reponse_65_1_1', 'reponse_65_1_2', 'reponse_65_1_3'],
// 		//nextQuestionMap:['6510', '6511', '6512', '6513'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 66
// 	{
// 		id:'question_66_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_66_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_66_0_0', 'reponse_66_0_1', 'reponse_66_0_2', 'reponse_66_0_3', 'reponse_66_0_4', 'reponse_66_0_5', 'reponse_66_0_6', 'reponse_66_0_7', 'reponse_66_0_8', 'reponse_66_0_9', 'reponse_66_0_10', 'reponse_66_0_11', 'reponse_66_0_12', 'reponse_66_0_13', 'reponse_66_0_14', 'reponse_66_0_15'],
// 		//nextQuestionMap:['6600', '6601', '6602', '6603', '6604', '6605', '6606', '6607', '6608', '6609', '66010', '66011', '66012', '66013', '66014', '66015'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 66
// 	{
// 		id:'question_66_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_66_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_66_1_0', 'reponse_66_1_1', 'reponse_66_1_2', 'reponse_66_1_3'],
// 		//nextQuestionMap:['6610', '6611', '6612', '6613'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 67
// 	{
// 		id:'question_67_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_67_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_67_0_0', 'reponse_67_0_1', 'reponse_67_0_2', 'reponse_67_0_3', 'reponse_67_0_4', 'reponse_67_0_5', 'reponse_67_0_6'],
// 		//nextQuestionMap:['6700', '6701', '6702', '6703', '6704', '6705', '6706'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 68
// 	{
// 		id:'question_68_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_68_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_68_0_0', 'reponse_68_0_1', 'reponse_68_0_2', 'reponse_68_0_3', 'reponse_68_0_4', 'reponse_68_0_5', 'reponse_68_0_6'],
// 		//nextQuestionMap:['6800', '6801', '6802', '6803', '6804', '6805', '6806'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 69
// 	{
// 		id:'question_69_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_69_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_69_0_0', 'reponse_69_0_1', 'reponse_69_0_2', 'reponse_69_0_3', 'reponse_69_0_4', 'reponse_69_0_5', 'reponse_69_0_6', 'reponse_69_0_7', 'reponse_69_0_8', 'reponse_69_0_9', 'reponse_69_0_10'],
// 		//nextQuestionMap:['6900', '6901', '6902', '6903', '6904', '6905', '6906', '6907', '6908', '6909', '69010'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 69
// 	{
// 		id:'question_69_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_69_1',
// 		inputType:'radio',
// 		comment:'comment_70_1',
// 		options:['reponse_69_1_0', 'reponse_69_1_1'],
// 		//nextQuestionMap:['6910', '6911'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 70
// 	{
// 		id:'question_70_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_70_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_70_0_0', 'reponse_70_0_1', 'reponse_70_0_2'],
// 		//nextQuestionMap:['7000', '7001', '7002'],
// 		scoreMap:[1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 70
// 	{
// 		id:'question_70_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_70_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_70_1_0', 'reponse_70_1_1', 'reponse_70_1_2', 'reponse_70_1_3', 'reponse_70_1_4'],
// 		//nextQuestionMap:['7010', '7011', '7012', '7013', '7014'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 71
// 	{
// 		id:'question_71_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_71_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_71_0_0'],
// 		//nextQuestionMap:['7100'],
// 		scoreMap:[1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 71
// 	{
// 		id:'question_71_1',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_71_1',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_71_1_0', 'reponse_71_1_1', 'reponse_71_1_2', 'reponse_71_1_3', 'reponse_71_1_4'],
// 		//nextQuestionMap:['7110', '7111', '7112', '7113', '7114'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 71
// 	{
// 		id:'question_71_2',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_71_2',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_71_2_0', 'reponse_71_2_1'],
// 		//nextQuestionMap:['7120', '7121'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 71
// 	{
// 		id:'question_71_3',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_71_3',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_71_3_0', 'reponse_71_3_1'],
// 		//nextQuestionMap:['7130', '7131'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 71
// 	{
// 		id:'question_71_4',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_71_4',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_71_4_0', 'reponse_71_4_1', 'reponse_71_4_2'],
// 		//nextQuestionMap:['7140', '7141', '7142'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 72
// 	{
// 		id:'question_72_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_72_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_72_0_0', 'reponse_72_0_1', 'reponse_72_0_2'],
// 		//nextQuestionMap:['7200', '7201', '7202'],
// 		scoreMap:[1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 73
// 	{
// 		id:'question_73_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_73_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_73_0_0', 'reponse_73_0_1', 'reponse_73_0_2', 'reponse_73_0_3', 'reponse_73_0_4', 'reponse_73_0_5'],
// 		//nextQuestionMap:['7300', '7301', '7302', '7303', '7304', '7305'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 74
// 	{
// 		id:'question_74_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_74_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_74_0_0', 'reponse_74_0_1', 'reponse_74_0_2', 'reponse_74_0_3', 'reponse_74_0_4', 'reponse_74_0_5'],
// 		//nextQuestionMap:['7400', '7401', '7402', '7403', '7404', '7405'],
// 		scoreMap:[1, 1, 1, 1, 1, 1]
// 	},
// //PARTIE DECOUPE QUESTION SUMMARY 75
// 	{
// 		id:'question_75_0',
// 		category:CATEGORIES.SYMPTOMS,
// 		text:'question_75_0',
// 		inputType:'radio',
// 		comment:'',
// 		options:['reponse_75_0_0', 'reponse_75_0_1', 'reponse_75_0_2', 'reponse_75_0_3', 'reponse_75_0_4', 'reponse_75_0_5', 'reponse_75_0_6'],
// 		//nextQuestionMap:['7500', '7501', '7502', '7503', '7504', '7505', '7506'],
// 		scoreMap:[1, 1, 1, 1, 1, 1, 1]
// 	},


];