export interface User {
  id: number;
  name: string;
}

export interface Shareholder {
  id: number;
  user: User;
  rank: number;
  conversationCount: number;
  share: number;
}

export interface Word {
  id: number;
  user?: User;
  rank: number;
  word: string;
  count?: number;
}

export interface Top3OftenWord {
  id: number;
  user: User;
  rank: number;
  words: Word[];
}

export interface Call {
  rank: number;
  count: number;
}

export interface Insider {
  id: number;
  user: User;
  rank: number;
  firstHalfCall: Call;
  secondHalfCall: Call;
  totalCall: Call;
}

export interface Outsider extends Insider {}

export const users: User[] = [
  {
    id: 1,
    name: "배현기",
  },
  {
    id: 2,
    name: "정대",
  },
  {
    id: 3,
    name: "병욱",
  },
  {
    id: 4,
    name: "규리",
  },
  {
    id: 5,
    name: "반근영",
  },
  {
    id: 6,
    name: "꽃사나",
  },
  {
    id: 7,
    name: "승주",
  },
  {
    id: 8,
    name: "공주은",
  },
  {
    id: 9,
    name: "우현",
  },
  {
    id: 10,
    name: "이음",
  },
  {
    id: 11,
    name: "수아",
  },
  {
    id: 12,
    name: "현수",
  },
  {
    id: 13,
    name: "조찬형 realman",
  },
  {
    id: 14,
    name: "수현",
  },
  {
    id: 15,
    name: "KHE",
  },
  {
    id: 16,
    name: "기태",
  },
  {
    id: 17,
    name: "주희",
  },
  {
    id: 18,
    name: "hyeon",
  },
  {
    id: 19,
    name: "규리",
  },
  {
    id: 20,
    name: "채림",
  },
  {
    id: 21,
    name: "꾸댕이",
  },
  {
    id: 22,
    name: "주성",
  },
  {
    id: 23,
    name: "아로",
  },
  {
    id: 24,
    name: "보영",
  },
  {
    id: 25,
    name: "창교",
  },
  {
    id: 26,
    name: "cy",
  },
  {
    id: 27,
    name: "ちょろ",
  },
  {
    id: 28,
    name: "MJ Yoon",
  },
  {
    id: 29,
    name: "한동현",
  },
  {
    id: 30,
    name: "프로필",
  },
];

export const shareholders: Shareholder[] = [
  {
    id: 1,
    user: users[5],
    rank: 1,
    conversationCount: 65671,
    share: 0.139,
  },
  {
    id: 2,
    user: users[0],
    rank: 2,
    conversationCount: 55181,
    share: 0.116,
  },
  {
    id: 3,
    user: users[18],
    rank: 3,
    conversationCount: 35320,
    share: 0.075,
  },
  {
    id: 4,
    user: users[2],
    rank: 4,
    conversationCount: 31689,
    share: 0.067,
  },
  {
    id: 5,
    user: users[9],
    rank: 5,
    conversationCount: 27628,
    share: 0.058,
  },
  {
    id: 6,
    user: users[1],
    rank: 6,
    conversationCount: 25232,
    share: 0.053,
  },
  {
    id: 7,
    user: users[10],
    rank: 7,
    conversationCount: 23445,
    share: 0.049,
  },
  {
    id: 8,
    user: users[26],
    rank: 8,
    conversationCount: 23417,
    share: 0.049,
  },
  {
    id: 9,
    user: users[12],
    rank: 9,
    conversationCount: 19137,
    share: 0.04,
  },
  {
    id: 10,
    user: users[13],
    rank: 10,
    conversationCount: 17312,
    share: 0.037,
  },
];

export const words: Word[] = [
  {
    id: 1,
    user: users[5],
    rank: 1,
    word: "근데",
  },
  {
    id: 2,
    user: users[5],
    rank: 2,
    word: "저는",
  },
  {
    id: 3,
    user: users[5],
    rank: 3,
    word: "ㄷㄷ",
  },
  {
    id: 4,
    user: users[0],
    rank: 1,
    word: "진짜",
  },
  {
    id: 5,
    user: users[0],
    rank: 2,
    word: "저도",
  },
  {
    id: 6,
    user: users[0],
    rank: 3,
    word: "그냥",
  },
  {
    id: 7,
    user: users[18],
    rank: 1,
    word: "ㅋ",
  },
  {
    id: 8,
    user: users[18],
    rank: 2,
    word: "ㄷㄷ",
  },
  {
    id: 9,
    user: users[18],
    rank: 3,
    word: "아",
  },
];

export const top3OftenWords: Top3OftenWord[] = [
  {
    id: 1,
    user: users[5],
    rank: 1,
    words: words.filter(({ user }) => user?.id === users[5].id),
  },
  {
    id: 2,
    user: users[0],
    rank: 2,
    words: words.filter(({ user }) => user?.id === users[0].id),
  },
  {
    id: 3,
    user: users[18],
    rank: 3,
    words: words.filter(({ user }) => user?.id === users[18].id),
  },
];

export const insiders: Insider[] = [
  {
    id: 1,
    user: users[5],
    rank: 1,
    firstHalfCall: {
      count: 788,
      rank: 1,
    },
    secondHalfCall: {
      count: 934,
      rank: 2,
    },
    totalCall: {
      count: 1722,
      rank: 1,
    },
  },
  {
    id: 2,
    user: users[0],
    rank: 2,
    firstHalfCall: {
      count: 98,
      rank: 15,
    },
    secondHalfCall: {
      count: 1100,
      rank: 1,
    },
    totalCall: {
      count: 1198,
      rank: 2,
    },
  },
  {
    id: 3,
    user: users[1],
    rank: 3,
    firstHalfCall: {
      count: 287,
      rank: 6,
    },
    secondHalfCall: {
      count: 778,
      rank: 4,
    },
    totalCall: {
      count: 1065,
      rank: 3,
    },
  },
  {
    id: 4,
    user: users[15],
    rank: 4,
    firstHalfCall: {
      count: 219,
      rank: 10,
    },
    secondHalfCall: {
      count: 832,
      rank: 3,
    },
    totalCall: {
      count: 1051,
      rank: 4,
    },
  },
  {
    id: 5,
    user: users[10],
    rank: 5,
    firstHalfCall: {
      count: 536,
      rank: 2,
    },
    secondHalfCall: {
      count: 472,
      rank: 7,
    },
    totalCall: {
      count: 1008,
      rank: 5,
    },
  },
  {
    id: 6,
    user: users[12],
    rank: 6,
    firstHalfCall: {
      count: 399,
      rank: 3,
    },
    secondHalfCall: {
      count: 505,
      rank: 6,
    },
    totalCall: {
      count: 904,
      rank: 6,
    },
  },
];

export const outsiders: Outsider[] = [
  {
    id: 1,
    user: users[18],
    rank: 7,
    firstHalfCall: {
      count: 266,
      rank: 7,
    },
    secondHalfCall: {
      count: 466,
      rank: 8,
    },
    totalCall: {
      count: 732,
      rank: 7,
    },
  },
  {
    id: 2,
    user: users[7],
    rank: 8,
    firstHalfCall: {
      count: 14,
      rank: 26,
    },
    secondHalfCall: {
      count: 702,
      rank: 5,
    },
    totalCall: {
      count: 716,
      rank: 8,
    },
  },
  {
    id: 3,
    user: users[13],
    rank: 9,
    firstHalfCall: {
      count: 327,
      rank: 5,
    },
    secondHalfCall: {
      count: 354,
      rank: 10,
    },
    totalCall: {
      count: 681,
      rank: 9,
    },
  },
  {
    id: 4,
    user: users[9],
    rank: 10,
    firstHalfCall: {
      count: 235,
      rank: 9,
    },
    secondHalfCall: {
      count: 435,
      rank: 9,
    },
    totalCall: {
      count: 670,
      rank: 10,
    },
  },
  {
    id: 5,
    user: users[11],
    rank: 11,
    firstHalfCall: {
      count: 252,
      rank: 8,
    },
    secondHalfCall: {
      count: 339,
      rank: 12,
    },
    totalCall: {
      count: 591,
      rank: 11,
    },
  },
  {
    id: 6,
    user: users[6],
    rank: 12,
    firstHalfCall: {
      count: 300,
      rank: 5,
    },
    secondHalfCall: {
      count: 243,
      rank: 18,
    },
    totalCall: {
      count: 543,
      rank: 12,
    },
  },
  {
    id: 7,
    user: users[14],
    rank: 13,
    firstHalfCall: {
      count: 120,
      rank: 14,
    },
    secondHalfCall: {
      count: 339,
      rank: 13,
    },
    totalCall: {
      count: 459,
      rank: 13,
    },
  },
];

export const oftenWords: Word[] = [
  {
    id: 1,
    word: "전/저는",
    rank: 1,
    count: 8977,
  },
  {
    id: 2,
    word: "ㄷㄷ/ㄷ",
    rank: 2,
    count: 8805,
  },
  {
    id: 3,
    word: "ㅋㅋㅋ",
    rank: 3,
    count: 6834,
  },
  {
    id: 4,
    word: "근데",
    rank: 4,
    count: 5587,
  },
  {
    id: 5,
    word: "진짜",
    rank: 5,
    count: 4825,
  },
  {
    id: 6,
    word: "아",
    rank: 6,
    count: 4755,
  },
  {
    id: 7,
    word: "네",
    rank: 7,
    count: 3672,
  },
  {
    id: 8,
    word: "그냥",
    rank: 8,
    count: 3408,
  },
  {
    id: 9,
    word: "ㅠㅠ",
    rank: 9,
    count: 3209,
  },
  {
    id: 10,
    word: "그",
    rank: 10,
    count: 3182,
  },
];
