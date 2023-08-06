import { AllFlows } from '../types/allFlows'

import { API_URL } from '@services/config/'

export async function getFlows () {
  const res = await fetch(API_URL)
  const { allFlows } = await res.json() as AllFlows
  return allFlows
}
