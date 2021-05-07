import {
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { LOCAL_STORAGE_KEYS, ROUTES } from '../../../global/constants';
import { CATEGORIES/*, QUESTION*/ } from '../../../global/questions';
import i18next from '../../../global/utils/i18n';
import { trackEvent, TRACKING_EVENTS } from '../../../global/utils/track';
import version from '../../../global/utils/version';
import { Answers, Scores } from '../questionnaire/questionnaire';

@Component({
  styleUrl: 'summary.css',
  tag: 'ia-summary',
})
export class Summary {
  @Prop() history: RouterHistory;

  @State() language: string;
  @State() answers: Answers = {};
  @State() scores: Scores = {};
  @State() resultCase: number = 5;
  @State() snippetsAnswers = {
    outOfBreath: false,
    ageAboveSixtyFive: false,
    livingSituation: 0,
    workspace: 0,
    caringForRelatives: false,
    isRiskGroup: false,
    isMedicalWorker: false,

  };
  @Event() showLogoHeader: EventEmitter;

  @Listen('changedLanguage', {
    target: 'window',
  })
  changedLanguageHandler(event: CustomEvent) {
    this.language = event.detail.code;
  }

  @Listen('popstate', {
    target: 'window',
  })
  handlePopStateChange() {
    const answerKeys = Object.keys(this.answers);
    delete this.answers[answerKeys[answerKeys.length - 1]];
    localStorage.setItem(LOCAL_STORAGE_KEYS.ANSWERS, JSON.stringify(this.answers));
    localStorage.setItem(LOCAL_STORAGE_KEYS.COMPLETED, 'false');
  }

  get currentLanguage() {
    return this.language || 'en';
  }

  resetFormAndStartAgain = () => {
    version.reset();
    this.history.push(ROUTES.QUESTIONNAIRE, {});
  };

  setResultCase = () => {
     const scores = this.scores;

     const hasSymptoms = scores[CATEGORIES.SYMPTOMS];

    let tab=[100,101,102,103,104,105,106,107,108,109,1010,1011,1012,1013,1014,1015,1016,1017,1018,200,201,202,203,204,205,206,207,208,209,2010,2011,
      2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,300,301,302,303,304,400,401,402,403,404,405,406,407,500,501,502,503,504,505,506,507,508,509,5010,5011,5012,5013,5014,5015,5016,600,601,602,603,700,701,702,703,704,705,706,800,801,802,803,804,805,806,900,901,902,903,904,
      905,906,910,911,920,921,922,923,1000,1001,1002,1003,1010,1011,1020,1021,1030,1031,1032,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,11010,11011,11012,11013,1200,1201,1202,1203,1204,1205,1206,1207,1208,1300,1301,1400,1401,1402,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,15010,15011,15012,15013,15014,15015,15016,15017,15018,15019,15020,1600,1601,1602,1700,1701,1702,1703,1704,1705,1706,1800,1801,1802,1803,1900,1901,1902,
      1903,1904,1905,1906,1907,1908,1909,19010,19011,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,20010,20011,20012,20013,20014,2300,2301,2302,2303,2304,2305,2400,2401,2402,2403,2404,2405,2406,2407,2408,2410,2411,2412,2413,2414,2415,2416,2417,2420,2421,2422,2423,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,2600,2601,2602,2603,2604,2605,2606,2607,2608,2609,26010,26011,26012,2700,2701,2702,2703,2704,2705,2706,2707,2708,2710,2711,2712,2713,2800,2801,2802,2803,2804,2805,2806,2900,2901,2902,2903,2904,2905,2906,2910,2911,2912,2913,2914,2920,2921,2922,2923,2924,2925,2926,2930,2931,2932,2933,2934,2940,2941,2942,2950,2951,2952,2953,2954,2960,2961,2962,3000,3001,3002,3003,3004,3005,3006,3007,3100,3101,3102,3103,3104,3110,3111,3112,3113,3114,3115,3116,3117,3118,3119,31110,31111,31112,3120,3121,3122,3123,3124,3125,3200,3201,3202,3203,3204,3205,3206,3207,3208,3209,32010,32011,32012,3400,3401,3402,3403,3404,3405,3406,3407,3408,3409,34010,34011,3500,3501,3502,3600,3601,3602,3603,3604,3605,3606,3607,3608,3700,3701,3702,3703,3704,3705,3706,3707,3708,3709,37010,37011,37012,37013,37014,37015,37016,3800,3801,3802,3803,3900,3901,3902,3903,3904,3905,3906,3907,3908,3909,3910,3911,3912,4000,4001,4002,4003,4004,4005,4200,4201,4300,4301,4302,4303,4304,4305,4400,4401,4402,4403,4404,4500,4501,4502,4503,4504,4505,4506,4600,4601,4610,4611,4612,4613,4614,4615,4620,4630,4631,4640,4641,4642,4650,4651,4652,4653,4654,4655,4656,4657,4658,4659,46510,
      4700,4701,4702,4703,4704,4705,4706,4707,4708,4709,47010,4800,4801,4802,4803,4804,4805,4806,4810,4811,4820,4821,4822,4830,4831,4832,4840,4841,4842,4850,4851,4852,4860,4861,4862,4870,4871,4900,4901,4902,4903,4904,4905,4906,4907,4908,4909,49010,49011,49012,49013,49014,49015,49016,49017,49018,
      5000,5001,5002,5200,5201,5202,5203,5204,5205,5206,5207,5210,5211,5220,5221,5230,5231,5240,5241,5300,5301,5302,5303,5304,5305,5306,5307,5308,5309,53010,53011,5400,5401,5402,5403,5410,5411,5420,5421,5422,5500,5501,5502,5503,5504,5505,5506,5507,5508,5509,5510,5511,5512,5513,5514,5600,5601,
      5602,5603,5604,5605,5606,5607,5608,5609,5610,5611,5800,5801,5802,5803,5804,5805,5806,6000,6001,6002,6003,6004,6005,6100,6101,6102,6103,6104,6105,6106,6107,6300,6301,6302,6310,6311,6312,6313,6314,6315,6400,6401,6402,6403,6404,6405,6410,6411,6500,6501,6502,6503,6504,6505,6506,6510,6511,6512,6513,6600,6601,6602,6603,6604,6605,6606,6607,6608,6609,66010,66011,66012,66013,66014,66015,6610,6611,6612,6613,6700,6701,6702,6703,6704,6705,6706,6800,6801,6802,6803,6804,6805,6806,6900,6901,6902,6903,6904,6905,6906,6907,6908,6909,69010,6910,6911,7000,7001,7002,7010,7011,7012,7013,7014,7100,7110,7111,7112,7113,7114,7120,7121,7130,7131,7140,7141,7142,7200,7201,7202,7300,7301,7302,7303,7304,7305,7400,7401,7402,7403,7404,7405,7500,7501,7502,7503,7504,7505,7506];
    for (var i =0; i< tab.length ; i++ ){

      if(hasSymptoms === tab[i]){
        let tmpS = tab[i].toString();
        console.log(tmpS)
        localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID,tmpS);
      }

    }

    // if (hasSymptoms === 100) {
    //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '100');
    // }
    // else if (hasSymptoms === 200) {
    //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '200');
    // }
    // else {
    //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '101');
    // }

     // if (hasSymptoms === 4) {
     //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '0');
     // }
     // else if (hasSymptoms === 5) {
     //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '3');
     // }
     // else if (hasSymptoms === 6) {
     //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '1');
     // }
     // else if (hasSymptoms === 15) {
     //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '4');
     // }
     // else if (hasSymptoms === 7) {
     //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '2');
     // }
     // else {
     //   localStorage.setItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID, '5');
     // }
  };

  componentWillLoad = () => {
    this.showLogoHeader.emit({ show: false });
    if (!version.match()) {
      this.resetFormAndStartAgain();
      return;
    }
    const availableAnswers = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.ANSWERS)
    );
    this.answers = availableAnswers ? availableAnswers : {};
    const availableScores = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.SCORES)
    );
    this.scores = availableScores ? availableScores : {};
    this.setResultCase();
    localStorage.setItem(LOCAL_STORAGE_KEYS.COMPLETED, 'true')
  };

  render() {
    const { resetFormAndStartAgain, answers, resultCase } = this;
    const summary_comment_id = 'summary_comment_' + localStorage.getItem(LOCAL_STORAGE_KEYS.SUMMARY_COMMENT_ID);

    return (
      <div class="c-card-wrapper summary">
        <d4l-card classes="card--desktop">
          <div class="summary__content" slot="card-content">
            <h2>{i18next.t('summary_headline')}</h2>
            <p>{i18next.t(summary_comment_id)}</p>
            <ia-qr-code answers={answers} resultCase={resultCase} />
            <ia-answers-table answers={answers} />
          </div>
          <div class="summary__footer" slot="card-footer">
            <h3>{i18next.t('summary_reset_headline')}</h3>
            <d4l-button
              type="button"
              classes="button--block button--secondary "
              data-test="continueButton"
              text={i18next.t('summary_reset_button')}
              handleClick={() => {
                resetFormAndStartAgain();
                trackEvent(TRACKING_EVENTS.SUMMARY_DELETE);
              }}
            />
          </div>
        </d4l-card>
      </div>
    );
  }
}
