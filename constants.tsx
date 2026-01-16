
import { Product, MaterialCategory } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Peak Pack',
    material: 'Reclaimed Canvas',
    price: 189,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_Y0amCuQ1cMSZ_Nrj62uBtGk8Q89XVAmcjpeo0IvMSfrPur8Lv3MpsKZCP3_GStNTp8N1gzznKWRAvnm-gTMMFI_4z4HEsxfLxjdFLimo_Dc874yvG0Z_zwNtnxHx9pXYckazaYMZK-X_Y204TY8m52YIU6--qmGiUR46lVGwebP01S-uFr4AmRY5Ky12-uk9CmFM6GHlEKMhBSGLspEZCiih9dv68ynpD5o7gPfTWQWJLeRHHLZCmu157yHoQxHHCKoKpvc2CNIT',
    isLimited: true
  },
  {
    id: '2',
    name: 'Urban Weaver',
    material: 'Weatherproof Tent',
    price: 125,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVK2pwzH9Io0vMiP3odHiqQhK4ef_QJ-Av1b-ycrN9FbtGoLFmrVDM26CmE2ucsHuLSkzp38ReCJwaBbO_-cj3dikjMgsPOhV8fWBGphV52IYp3Pj6B1duLo0a1DnnoAIn1WZE87XmsJWPjjrWRESCvG6mbcOsbyvCrFfnWXEPAM-6p79FGehF1echNyhHlcwvba7wVGL6wXhUao-sqypj50YlmiBfcuxrosEftdw8P9bGVBLs7Wiz8W1cStcvS8eZ_Vn_PuoDdNYc'
  },
  {
    id: '3',
    name: 'Trail Wallet',
    material: 'Nylon Webbing',
    price: 42,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDykDm6iDz6CNJqr1JfxepKB-XByhcf5iGxVsOzAMUSVJH-a3Tmv4zk0mORaGMZ8hXCgORCx0poiN7PDNyOniKmma04D2733bAC-flLXrwDhPHLhV90NWlwKbxBTJNILPk9sMM1N3MPkMWny_VlcWYLu_lObeXzkHt-9UUGPIxcIqUhFBjOE_j7HSuU6Spub45rKAcUEN8YKIQlliVU4ommp1yE65HbAd4SI9w4yV4wJ0buPVw67Fl60ICsUpPcT6e1FyrHW5UDWx3s'
  }
];

export const MATERIALS: MaterialCategory[] = [
  {
    id: 'canvas',
    name: 'Canvas',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGb0n8qDV_LJvkUsU4GakRZ79SLbAvZIZKU225s7ow5qJa6kit_BGc9fyv66yvzXVietaS9HjGTV8q481fpuT7WpM-tmzflvmnqah3bhLDEXHHuC4L_rarecnAbR6_abQo3WtTzeUZ3GGRuUxihZIHPVMf5bcDXZKfnZ3oXrfVOULb3BsVylay9sCftGfkuPkE_LEN_OSnnxkSftO1xumpTDhe9WY6YhMDpsnj36w9FlabEvdNXBo0JGS5GYo-l6UgbxVLilBpy80_'
  },
  {
    id: 'tents',
    name: 'Tents',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3MJDRI8M6xrTmalNXSeTuhGp_YatM2apzij709PmxaoMeVTRV3KfErLPmn3233o7-IVA9IRoQ7YUQnhkuz9pv1C7ZqscPsA__9m7El__lyWLrAxJ4TfNLYIBpFmBxskI-KdSCXzmMS45S9-cht513WrhH6EHGHXksU7ZsnzTr5k8JOi4CRT7RjvHypItoOlqb0mygSDnfwT2YABzAPmR2ON2ysL5fvgXdV5L8GCmnmoXSYh9AYm0LqTaxwzwQAtRLl99Md59ezVkm'
  },
  {
    id: 'webbing',
    name: 'Webbing',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAhMEz682pSI1-igapNbJ07fFKpjsyPoHgEnLTMZAqHKQPVD8epdCRo6QDpPUnr-jOkUDB6JUpjpzaXsmpshbgXP0ce3c9m1u5o7n5KfjMHKJ0sJ3LIzt8BoVvq-4z34v7PQWGXRW5n1XhH4qCjpC507YWadF-0HbbkTSKbWdlNW71HBslJ76jpOqcufrApraY_M2QUAdnKRpKT1npBcEsrt5ZmSBwIv-k8tc2TPsiam6pPdq10W8gJJRyor8ZSXYlREw0TsQLJNeS'
  },
  {
    id: 'textiles',
    name: 'Textiles',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArWrmKK86pG59qfzfw_UaLlnI30h2Xi6496yO0FSgga3b_0rFwpxKFg4_lf-zb3EwuVCjlUbdVwDxsxDwxU7oqruP2GE57p6BOYJRrN4xJ7TGT_t8wLiu0SbMa9ZHIOhRG6hxFOylS7SlSPCZQ5ofaGEHdvhCvBw3hZKnfG0B03wqsFArUncA1qTL04gnipKYxpqpPgzctQkbXXoMhQU2CXF9hCdniSnOlx7nMhifycENlSVY0ueTNj5VGEvvBxuzPG2vDt02Kl43h'
  }
];

export const STORY_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCleaqnNAlR9cKVmD9TWcn83Z-RReNnK7HozZ2QM9XqWkYM_SK__ZI_UR9SZjj1TmtZbwYqW9skJ_A2msgzAw3SDx5Z-mwkvINpTndFDOhkfHfR99vGWARkoDgVi4bA67jR_HZppQmlHbKT3HP77FrE0nMhShoOMuOqHUfsF9PeKeFsYAw-_kHMXWbO1NlL1pADecVV6HlbPOFTW6aNTNKx5oZqcc1MGdMJauZDTBlk_ziQBekYXicJ3UtKP-HK_DyTE5eN0qPc8pnT';
