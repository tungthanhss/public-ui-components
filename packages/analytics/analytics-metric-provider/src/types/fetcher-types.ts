import {
  AnalyticsExploreV2Result,
  QueryTime,
  Timeframe,
} from '@kong-ui-public/analytics-utilities'
import { Ref } from 'vue'
import { EXPLORE_V2_AGGREGATIONS, EXPLORE_V2_DIMENSIONS, ExploreV2Filter, ExploreV2Query } from './explore-types'
import { AxiosResponse } from 'axios'

export type DataFetcher = (
  queryTime: QueryTime,
  query: ExploreV2Query
) => Promise<AxiosResponse<AnalyticsExploreV2Result, any>>

export interface MetricFetcherOptions {
  metrics: EXPLORE_V2_AGGREGATIONS[]
  dimensions?: EXPLORE_V2_DIMENSIONS[]
  filter: Ref<ExploreV2Filter[] | undefined>
  timeframe: Ref<Timeframe>
  refreshInterval: number
  withTrend?: boolean
  featureFlags?: boolean[]
  queryReady: Ref<boolean>

  // TODO: Many of these types would ideally live in `analytics-utilities`.
  dataFetcher: DataFetcher
}