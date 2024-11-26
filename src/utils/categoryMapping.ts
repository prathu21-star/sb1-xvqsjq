// Map category display names to provider object keys
const categoryKeyMap: { [key: string]: string } = {
  'Research & Development': 'research',
  'Preclinical Services': 'preclinical',
  'Clinical Research': 'clinical',
  'Manufacturing & Production': 'manufacturing',
  'Analytical Services': 'analytical',
  'Regulatory & Compliance': 'regulatory',
  'Supply Chain & Logistics': 'supplyChain',
  'Packaging & Delivery': 'packaging',
  'Technology Solutions': 'technology',
  'Consulting Services': 'consulting',
  'Equipment & Instrumentation': 'equipment',
  'Raw Materials & Consumables': 'rawMaterials'
};

export const getCategoryKey = (category: string): string => {
  return categoryKeyMap[category] || category.toLowerCase().replace(/ & /g, '').replace(/ /g, '');
};