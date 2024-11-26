import { manufacturingProviders } from './manufacturing';
import { clinicalProviders } from './clinical';
import { analyticalProviders } from './analytical';
import { regulatoryProviders } from './regulatory';
import { supplyChainProviders } from './supply-chain';
import { researchProviders } from './research';
import { packagingProviders } from './packaging';
import { technologyProviders } from './technology';
import { consultingProviders } from './consulting';
import { rawMaterialsProviders } from './raw-materials';

export const providers = {
  manufacturing: manufacturingProviders,
  clinical: clinicalProviders,
  analytical: analyticalProviders,
  regulatory: regulatoryProviders,
  supplyChain: supplyChainProviders,
  research: researchProviders,
  packaging: packagingProviders,
  technology: technologyProviders,
  consulting: consultingProviders,
  rawMaterials: rawMaterialsProviders
};