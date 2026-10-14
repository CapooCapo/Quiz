import type { AcademyQuestion } from '../types'

export const assessmentQuestions: AcademyQuestion[] = [
 {id:'mcq-trend',type:'multiple-choice',prompt:'The share moved from 30.87% in 2019 to 41.17% in 2021. Which is accurate?',choices:['It rose to 41.17%.','It rose by 41.17%.'],answer:'It rose to 41.17%.',explanation:'“To” introduces the endpoint; “by” introduces the size of the change.'},
 {id:'fill-peak',type:'fill-blank',prompt:'The figure peaked ___ 48.11% in 2012.',answer:'at',explanation:'Use “peak at” for a value and “peak in” for a year.'},
 {id:'ordering-rise',type:'ordering',prompt:'Order these words into a correct sentence.',choices:['from 38.69%','increased','to 48.11%','The share'],answer:['The share','increased','from 38.69%','to 48.11%'],explanation:'The sentence follows subject + verb + from starting value + to endpoint.'},
 {id:'error-correction',type:'error-correction',prompt:'Correct: “The figure peaked to 48.11% in 2012.”',answer:['The figure peaked at 48.11% in 2012.','The figure reached a peak of 48.11% in 2012.'],explanation:'Use “peak at” or “reach a peak of”.'},
 {id:'matching',type:'matching',prompt:'Match the pattern to its meaning: fluctuate between A and B.',choices:['move up and down within a range','reach the maximum value','remain unchanged'],answer:['move up and down within a range'],explanation:'“Between A and B” names the lower and upper bounds.'},
 {id:'identify-trend',type:'trend',prompt:'The values are 48.11% (2012), 44.48% (2014), 45.17% (2017). Identify the pattern.',answer:['a slight fluctuation','fluctuated slightly','small fluctuation'],explanation:'The values fall and then rise slightly; describing a small fluctuation is more accurate than claiming a steady decline.'},
 {id:'write-one',type:'write-one',prompt:'Write one sentence comparing Viet Nam (41.17%) and Malaysia (17.00%) in 2021.',answer:['higher than','41.17','17.00'],explanation:'A valid answer should compare the two countries and retain the correct values; several grammatically correct phrasings are accepted.'},
]
