import { rest } from 'msw';

const boardTable = {
  title: '제목 없음',
  states: [
    {
      id: 1,
      state: 'idle',
    },
    {
      id: 2,
      state: 'pending',
    },
    {
      id: 3,
      state: 'fulfilled',
    },
  ],

  issues: [
    {
      id: 1,
      state: 1,
      order: 0,
      title: '제목1',
      // 고유번호, 제목, 내용, 마감일, 상태, 담당자
      content: '내용1',
      endDate: '2023-03-01',
      owner: 'seyeon1',
    },
    {
      id: 2,
      state: 1,
      order: 1024,
      title: '제목2',
      // 고유번호, 제목, 내용, 마감일, 상태, 담당자
      content: '내용2',
      endDate: '2023-03-02',
      owner: 'seyeon2',
    },
    {
      id: 3,
      state: 1,
      order: 2048,
      title: '제목3',
      // 고유번호, 제목, 내용, 마감일, 상태, 담당자
      content: '내용3',
      endDate: '2023-03-03',
      owner: 'seyeon3',
    },
    {
      id: 4,
      state: 2,
      order: 0,
      title: '제목1',
      // 고유번호, 제목, 내용, 마감일, 상태, 담당자
      content: '내용1',
      endDate: '2023-03-01',
      owner: 'seyeon1',
    },
    {
      id: 5,
      state: 2,
      order: 1024,
      title: '제목2',
      // 고유번호, 제목, 내용, 마감일, 상태, 담당자
      content: '내용2',
      endDate: '2023-03-02',
      owner: 'seyeon2',
    },
    {
      id: 6,
      state: 2,
      order: 2048,
      title: '제목3',
      // 고유번호, 제목, 내용, 마감일, 상태, 담당자
      content: '내용3',
      endDate: '2023-03-03',
      owner: 'seyeon3',
    },
  ],
};

export const handlers = [
  rest.get('/board', (req, res, ctx) => {
    const data = {
      title: boardTable.title,
      states: boardTable.states.map((state) => {
        const issues = boardTable.issues.filter(
          (issue) => issue.state === state.id
        );
        return { ...state, issues };
      }),
    };

    return res(ctx.status(200), ctx.json(data));
  }),
];
