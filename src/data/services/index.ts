import { manufacturingServices } from './manufacturing';
import { clinicalServices } from './clinical';
import { qualityServices } from './quality';
import { regulatoryServices } from './regulatory';
import { supplyChainServices } from './supply-chain';
import { researchServices } from './research';
import { packagingServices } from './packaging';
import { technologyServices } from './technology';
import { consultingServices } from './consulting';
import { rawMaterialsServices } from './raw-materials';

export const services = [
  ...manufacturingServices,
  ...clinicalServices,
  ...qualityServices,
  ...regulatoryServices,
  ...supplyChainServices,
  ...researchServices,
  ...packagingServices,
  ...technologyServices,
  ...consultingServices,
  ...rawMaterialsServices
];

export * from './types';
export * from '../categories';