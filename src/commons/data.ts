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
    name: "규리하",
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
    name: "규리상",
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
