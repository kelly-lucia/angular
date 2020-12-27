// 题目类型
export enum QUESTION_TYPE {
  single = 1, // 单选
  multi = 2, // 多选
  rate = 3, // 打分
  sort = 4, // 排序
}
// 单个被评估人问卷
export interface QuestionaireSingle {
  /**
   * 短链接码
   */
  linkcode: string;
  /**
   * 问卷名称
   */
  title: string;
  /**
   * 问卷描述
   */
  description: string;
  /**
   * 被评估人名字
   */
  assessedempname: string;
  /**
   * 当前问卷是否已被填答
   */
  empsurveystatus: number;
  /**
   * 题目列表
   */
  list: ChoiceQuestion[];
}

// 多个被评估人问卷
export interface QuestionaireMulti {
  /**
   * 短链接码
   */
  linkcode: string;
  /**
   * 问卷名称
   */
  title: string;
  /**
   * 问卷描述
   */
  description: string;
  /**
   * 被评估人列表
   */
  assessedempList: AssesseeItem[];
  /**
   * 题目列表
   */
  list: ChoiceQuestion[];
}

// 被评估人
export interface AssesseeItem {
  /**
   * 被评估人姓名
   */
  empname: string;
  /**
   * 被评估人编码
   */
  empcode: string;
  /**
   * 被评估人是否已被填答
   */
  done?: boolean;
}

// 题目
export interface ChoiceQuestion {
  /**
   * 题目编码
   */
  titlecode: string;
  /**
   * 题目名称
   */
  titlename: string;
  /**
   * 题目描述
   */
  titledescription: string;
  /**
   * 题目子编码
   */
  titlesubcode?: string;
  /**
   * 题目类型
   */
  questiontype: number;
  /**
   * 题目的选项列表
   */
  optionlist: OptionItem[];
}
// 题目选项（单选，多选，排序，打分）
export interface OptionItem {
  /**
   * 选项编码
   */
  optioncode?: string;
  /**
   * 选项文字
   */
  optionname: string;
  /**
   * 选项对应的值
   */
  optionvalue?: string | number;
  /**
   * 选项附加提示信息
   */
  optiontips?: string[];
}
// 单个题目作答数据
export interface AnswerItem {
  /**
   * 题目编码（唯一）
   */
  titlecode: string;
  /**
   * 题目子编码
   */
  titlesubcode?: string;
  /**
   * 题目作答结果
   */
  optionvalue: string | number | any[];
}

// 验证码信息
export interface CodeInfo {
  /**
   * 时间戳
   */
  timespan: number;
  /**
   * 验证码
   */
  code: string;
}

// 填答人基本信息
export interface BaseInfo {
  /**
   * 姓名
   */
  name: string;
  /**
   * 部门
   */
  department: string;
}

/**
 * 问卷提交数据
 */
export interface AnswerInfo {
  /**
   * 填答人基本信息
   */
  baseCollect?: string[];
  /**
   * 验证码
   */
  code: string;
  /**
   * 验证码时间戳
   */
  timespan: number;
  /**
   * 被评估人编码
   */
  empcode?: string;
  /**
   * 题目答案
   */
  list: AnswerItem[];
}
