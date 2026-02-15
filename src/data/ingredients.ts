export interface Ingredient {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  functions: string[];
  description: string;
  origin: string;
  evidenceLevel: "高" | "中" | "低";
  certifications: string[];
  targetAreas: string[];
  companies: string[];
  image?: string;
}

export interface Company {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  ingredientCount: number;
  location: string;
  established: string;
  website: string;
  categories: string[];
}

export interface FunctionalClaim {
  id: string;
  届出番号: string;
  productName: string;
  company: string;
  ingredient: string;
  claim: string;
  date: string;
}

export const categories = [
  "ビタミン・ミネラル",
  "アミノ酸・ペプチド",
  "植物エキス",
  "乳酸菌・プロバイオティクス",
  "脂肪酸・脂質",
  "食物繊維",
  "酵素・発酵物",
  "キノコ・菌類",
  "海洋由来素材",
  "ポリフェノール・フラボノイド",
];

export const functionTags = [
  "免疫サポート",
  "腸内環境改善",
  "美容・肌",
  "関節・骨",
  "睡眠・リラックス",
  "認知機能",
  "疲労回復",
  "ダイエット・代謝",
  "目の健康",
  "血圧・血糖",
  "肝機能",
  "抗酸化",
];

export const targetAreas = [
  "腸",
  "肌",
  "関節",
  "脳",
  "目",
  "肝臓",
  "骨",
  "心臓",
  "筋肉",
  "血管",
];

export const ingredients: Ingredient[] = [
  {
    id: "nmnw-001",
    name: "NMN（ニコチンアミドモノヌクレオチド）",
    nameEn: "Nicotinamide Mononucleotide",
    category: "ビタミン・ミネラル",
    functions: ["抗酸化", "疲労回復", "美容・肌"],
    description:
      "NAD+の前駆体として注目されるエイジングケア素材。細胞のエネルギー産生を促進し、加齢に伴う様々な機能低下の改善が期待される。",
    origin: "発酵法",
    evidenceLevel: "中",
    certifications: ["GMP", "ISO22000"],
    targetAreas: ["肌", "脳", "筋肉"],
    companies: ["company-001", "company-005"],
  },
  {
    id: "lacto-001",
    name: "ラクトバチルス・プランタルム",
    nameEn: "Lactobacillus plantarum",
    category: "乳酸菌・プロバイオティクス",
    functions: ["腸内環境改善", "免疫サポート"],
    description:
      "腸内フローラのバランスを整え、免疫機能の維持に寄与する乳酸菌。機能性表示食品の関与成分としても多数採用されている。",
    origin: "発酵培養",
    evidenceLevel: "高",
    certifications: ["機能性表示食品届出実績", "GRAS", "GMP"],
    targetAreas: ["腸"],
    companies: ["company-002", "company-003"],
  },
  {
    id: "coll-001",
    name: "低分子コラーゲンペプチド",
    nameEn: "Low Molecular Collagen Peptide",
    category: "アミノ酸・ペプチド",
    functions: ["美容・肌", "関節・骨"],
    description:
      "分子量を低減したコラーゲンペプチド。吸収性が高く、肌の弾力性維持や関節の柔軟性サポートに活用される。",
    origin: "魚由来 / 豚由来",
    evidenceLevel: "高",
    certifications: ["ハラール", "コーシャ", "GMP"],
    targetAreas: ["肌", "関節", "骨"],
    companies: ["company-004", "company-001"],
  },
  {
    id: "cur-001",
    name: "クルクミン",
    nameEn: "Curcumin",
    category: "植物エキス",
    functions: ["抗酸化", "肝機能", "関節・骨"],
    description:
      "ウコンに含まれる黄色色素成分。強力な抗酸化作用を持ち、肝機能サポートや抗炎症作用が期待される。",
    origin: "ウコン（ターメリック）",
    evidenceLevel: "高",
    certifications: ["Non-GMO", "有機JAS"],
    targetAreas: ["肝臓", "関節"],
    companies: ["company-003", "company-006"],
  },
  {
    id: "gaba-001",
    name: "GABA（γ-アミノ酪酸）",
    nameEn: "Gamma-Aminobutyric Acid",
    category: "アミノ酸・ペプチド",
    functions: ["睡眠・リラックス", "血圧・血糖"],
    description:
      "天然アミノ酸の一種で、リラックス効果や血圧降下作用が報告されている。機能性表示食品の代表的な成分。",
    origin: "発酵法",
    evidenceLevel: "高",
    certifications: ["機能性表示食品届出実績", "GMP"],
    targetAreas: ["脳"],
    companies: ["company-002", "company-007"],
  },
  {
    id: "lut-001",
    name: "ルテイン",
    nameEn: "Lutein",
    category: "ポリフェノール・フラボノイド",
    functions: ["目の健康", "抗酸化"],
    description:
      "マリーゴールド由来のカロテノイド。ブルーライトの吸収や黄斑色素密度の維持に寄与し、目の健康サポートに広く利用される。",
    origin: "マリーゴールド花弁",
    evidenceLevel: "高",
    certifications: ["Non-GMO", "GMP", "GRAS"],
    targetAreas: ["目"],
    companies: ["company-005", "company-008"],
  },
  {
    id: "dha-001",
    name: "DHA・EPA",
    nameEn: "Docosahexaenoic Acid / Eicosapentaenoic Acid",
    category: "脂肪酸・脂質",
    functions: ["認知機能", "血圧・血糖"],
    description:
      "青魚に多く含まれるオメガ3系脂肪酸。認知機能の維持、中性脂肪低下、血流改善など多面的な健康効果が確認されている。",
    origin: "魚油 / 藻類",
    evidenceLevel: "高",
    certifications: ["IFOS", "GMP", "機能性表示食品届出実績"],
    targetAreas: ["脳", "心臓", "血管"],
    companies: ["company-006", "company-004"],
  },
  {
    id: "beta-001",
    name: "βグルカン",
    nameEn: "Beta-Glucan",
    category: "キノコ・菌類",
    functions: ["免疫サポート", "腸内環境改善"],
    description:
      "キノコ類や酵母に由来する多糖類。自然免疫を活性化し、腸管免疫の調節にも関与するとされる。",
    origin: "パン酵母 / 霊芝 / アガリクス",
    evidenceLevel: "中",
    certifications: ["GMP", "ISO22000"],
    targetAreas: ["腸", "筋肉"],
    companies: ["company-007", "company-008"],
  },
  {
    id: "fuco-001",
    name: "フコイダン",
    nameEn: "Fucoidan",
    category: "海洋由来素材",
    functions: ["免疫サポート", "腸内環境改善", "抗酸化"],
    description:
      "褐藻類に含まれる硫酸化多糖類。免疫細胞の活性化や腸内環境の改善、抗酸化作用など幅広い健康機能が研究されている。",
    origin: "モズク / メカブ / ワカメ",
    evidenceLevel: "中",
    certifications: ["有機JAS", "GMP"],
    targetAreas: ["腸", "肌"],
    companies: ["company-001", "company-003"],
  },
  {
    id: "inul-001",
    name: "イヌリン",
    nameEn: "Inulin",
    category: "食物繊維",
    functions: ["腸内環境改善", "ダイエット・代謝", "血圧・血糖"],
    description:
      "水溶性食物繊維の一種で、善玉菌のエサとなるプレバイオティクス。食後血糖値の上昇抑制や整腸作用が確認されている。",
    origin: "チコリ根 / キクイモ",
    evidenceLevel: "高",
    certifications: ["Non-GMO", "有機JAS", "機能性表示食品届出実績"],
    targetAreas: ["腸", "血管"],
    companies: ["company-002", "company-006"],
  },
  {
    id: "ast-001",
    name: "アスタキサンチン",
    nameEn: "Astaxanthin",
    category: "ポリフェノール・フラボノイド",
    functions: ["抗酸化", "美容・肌", "目の健康", "疲労回復"],
    description:
      "ヘマトコッカス藻由来の赤色カロテノイド。ビタミンEの約1000倍の抗酸化力を持ち、美容・眼精疲労・運動疲労の軽減に期待される。",
    origin: "ヘマトコッカス藻",
    evidenceLevel: "高",
    certifications: ["GMP", "GRAS", "機能性表示食品届出実績"],
    targetAreas: ["肌", "目", "筋肉"],
    companies: ["company-005", "company-008"],
  },
  {
    id: "enz-001",
    name: "穀物発酵エキス",
    nameEn: "Grain Fermentation Extract",
    category: "酵素・発酵物",
    functions: ["ダイエット・代謝", "腸内環境改善", "疲労回復"],
    description:
      "複数の穀物を麹菌で発酵させたエキス。消化酵素活性が高く、栄養の吸収促進や腸内環境の改善に活用される。",
    origin: "米・大麦・小麦等の発酵物",
    evidenceLevel: "中",
    certifications: ["GMP", "ISO22000"],
    targetAreas: ["腸", "筋肉"],
    companies: ["company-007", "company-004"],
  },
];

export const companies: Company[] = [
  {
    id: "company-001",
    name: "バイオジェニック株式会社",
    nameEn: "BioGenic Inc.",
    description:
      "NMNやエクソソームなど先端バイオ素材の研究開発に特化したスタートアップ。独自の発酵技術で高純度素材を供給。",
    ingredientCount: 8,
    location: "東京都渋谷区",
    established: "2018年",
    website: "https://example.com/biogenic",
    categories: ["ビタミン・ミネラル", "アミノ酸・ペプチド", "海洋由来素材"],
  },
  {
    id: "company-002",
    name: "善玉菌研究所",
    nameEn: "Good Flora Lab",
    description:
      "30年以上の歴史を持つ乳酸菌・プロバイオティクス専門メーカー。独自の菌株ライブラリーで差別化素材を提案。",
    ingredientCount: 15,
    location: "京都府京都市",
    established: "1992年",
    website: "https://example.com/goodflora",
    categories: [
      "乳酸菌・プロバイオティクス",
      "アミノ酸・ペプチド",
      "食物繊維",
    ],
  },
  {
    id: "company-003",
    name: "グリーンファーマ株式会社",
    nameEn: "Green Pharma Inc.",
    description:
      "植物由来の機能性素材を中心に、有機栽培原料からのエキス抽出技術に強みを持つ。海外への輸出実績も豊富。",
    ingredientCount: 22,
    location: "静岡県静岡市",
    established: "2001年",
    website: "https://example.com/greenpharma",
    categories: ["植物エキス", "乳酸菌・プロバイオティクス", "海洋由来素材"],
  },
  {
    id: "company-004",
    name: "マリンバイオテック株式会社",
    nameEn: "Marine Biotech Inc.",
    description:
      "海洋由来のコラーゲン・フコイダン等の素材開発を行う。持続可能な海洋資源の活用を掲げ、トレーサビリティを重視。",
    ingredientCount: 12,
    location: "北海道函館市",
    established: "2005年",
    website: "https://example.com/marinebio",
    categories: ["アミノ酸・ペプチド", "海洋由来素材", "酵素・発酵物"],
  },
  {
    id: "company-005",
    name: "ニュートリサイエンス株式会社",
    nameEn: "NutriScience Inc.",
    description:
      "カロテノイド・抗酸化素材のリーディングカンパニー。ルテイン・アスタキサンチン等の高品質素材を世界各地の原料から精製。",
    ingredientCount: 18,
    location: "大阪府大阪市",
    established: "1998年",
    website: "https://example.com/nutriscience",
    categories: ["ビタミン・ミネラル", "ポリフェノール・フラボノイド"],
  },
  {
    id: "company-006",
    name: "オーシャンヘルス株式会社",
    nameEn: "Ocean Health Inc.",
    description:
      "オメガ3脂肪酸を中心とした海洋由来脂質素材のスペシャリスト。IFOS認証取得の高品質フィッシュオイルを供給。",
    ingredientCount: 10,
    location: "東京都中央区",
    established: "2010年",
    website: "https://example.com/oceanhealth",
    categories: ["脂肪酸・脂質", "植物エキス", "食物繊維"],
  },
  {
    id: "company-007",
    name: "発酵テクノ株式会社",
    nameEn: "Fermentation Techno Inc.",
    description:
      "独自の発酵技術でGABA・βグルカン・穀物発酵エキス等を製造。伝統的な発酵文化と最新のバイオテクノロジーを融合。",
    ingredientCount: 14,
    location: "愛知県名古屋市",
    established: "1995年",
    website: "https://example.com/fermentechno",
    categories: ["アミノ酸・ペプチド", "キノコ・菌類", "酵素・発酵物"],
  },
  {
    id: "company-008",
    name: "アクアプラント株式会社",
    nameEn: "AquaPlant Inc.",
    description:
      "微細藻類由来の機能性素材を開発。ヘマトコッカス藻からのアスタキサンチンやスピルリナの培養・精製に強みを持つ。",
    ingredientCount: 9,
    location: "沖縄県那覇市",
    established: "2012年",
    website: "https://example.com/aquaplant",
    categories: [
      "ポリフェノール・フラボノイド",
      "キノコ・菌類",
      "海洋由来素材",
    ],
  },
];

export const functionalClaims: FunctionalClaim[] = [
  {
    id: "fc-001",
    届出番号: "I1234",
    productName: "おなかすっきり乳酸菌",
    company: "善玉菌研究所",
    ingredient: "ラクトバチルス・プランタルム",
    claim: "本品にはラクトバチルス・プランタルムが含まれます。腸内環境を整え、お通じを改善する機能が報告されています。",
    date: "2025-01-15",
  },
  {
    id: "fc-002",
    届出番号: "I1235",
    productName: "ぐっすりGABA",
    company: "発酵テクノ株式会社",
    ingredient: "GABA（γ-アミノ酪酸）",
    claim: "本品にはGABAが含まれます。睡眠の質（眠りの深さ）の向上に役立つ機能が報告されています。",
    date: "2025-02-01",
  },
  {
    id: "fc-003",
    届出番号: "I1236",
    productName: "クリアビジョン ルテイン",
    company: "ニュートリサイエンス株式会社",
    ingredient: "ルテイン",
    claim: "本品にはルテインが含まれます。ブルーライトなどの光刺激から目を保護するとされる黄斑色素量を増やす機能が報告されています。",
    date: "2025-02-10",
  },
  {
    id: "fc-004",
    届出番号: "I1237",
    productName: "DHA記憶力サポート",
    company: "オーシャンヘルス株式会社",
    ingredient: "DHA・EPA",
    claim: "本品にはDHA・EPAが含まれます。中高年の認知機能の一部である記憶力を維持する機能が報告されています。",
    date: "2025-03-05",
  },
  {
    id: "fc-005",
    届出番号: "I1238",
    productName: "食物繊維イヌリンプラス",
    company: "グリーンファーマ株式会社",
    ingredient: "イヌリン",
    claim: "本品にはイヌリンが含まれます。食後の血糖値の上昇を抑える機能が報告されています。",
    date: "2025-03-20",
  },
];
