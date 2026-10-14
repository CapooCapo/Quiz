import type { WritingChartDataset } from '../types'

const renewableIndicator = 'https://api.worldbank.org/v2/country/VNM/indicator/EG.ELC.RNEW.ZS?format=json'
const renewableCompare = 'https://api.worldbank.org/v2/country/VNM;THA;MYS;PHL/indicator/EG.ELC.RNEW.ZS?format=json&date=2021'

export const chartDatasets: WritingChartDataset[] = [
  {
    id: 'vietnam-renewable-electricity-share',
    title: 'Renewable electricity output in Viet Nam',
    subtitle: 'Share of total electricity output, selected years · 2010–2021',
    chartType: 'line',
    unit: '%',
    accessibleSummary: 'The share rises from 38.69 percent in 2010 to a selected-period high of 48.11 percent in 2012, then generally falls to 30.87 percent in 2019 before recovering to 41.17 percent in 2021.',
    sourceName: 'World Bank, World Development Indicators (IEA source)',
    sourceUrl: renewableIndicator,
    data: [
      { label: '2010', value: 38.69, observation: 'Starting value: 38.69%.' },
      { label: '2012', value: 48.11, observation: 'The selected-period high: 48.11%.' },
      { label: '2014', value: 44.48, observation: 'The share eased to 44.48%.' },
      { label: '2017', value: 45.17, observation: 'A modest increase to 45.17%.' },
      { label: '2019', value: 30.87, observation: 'The lowest selected value: 30.87%.' },
      { label: '2021', value: 41.17, observation: 'The figure recovered to 41.17%, still below the 2012 high.' },
    ],
  },
  {
    id: 'renewable-electricity-country-comparison-2021',
    title: 'Renewable electricity output across four countries',
    subtitle: 'Share of total electricity output in 2021',
    chartType: 'bar',
    unit: '%',
    accessibleSummary: 'Viet Nam records the highest share at 41.17 percent among the four selected countries, followed by the Philippines at 22.64, Thailand at 19.93, and Malaysia at 17.00 percent.',
    sourceName: 'World Bank, World Development Indicators (IEA source)',
    sourceUrl: renewableCompare,
    data: [
      { label: 'Viet Nam', value: 41.17, observation: 'Highest of the four: 41.17%.' },
      { label: 'Philippines', value: 22.64, observation: 'Second highest: 22.64%.' },
      { label: 'Thailand', value: 19.93, observation: 'A little below the Philippines at 19.93%.' },
      { label: 'Malaysia', value: 17.00, observation: 'Lowest of the four: 17.00%.' },
    ],
  },
]

export const findChartDataset = (id: string) => chartDatasets.find((dataset) => dataset.id === id)
