const sql = require('better-sqlite3');
const db = sql('database.db');

const projects = [
  {
    id: '1',
    title: 'Project 1',
    image: '/project1.png',
    description: 'Ullamco nostrud in deserunt sint nostrud eu sunt irure ullamco. Magna consequat quis nulla incididunt irure laboris ad consequat cillum. Dolore minim excepteur est cupidatat. Ad nostrud velit sunt ea labore. Anim irure velit aliquip fugiat cillum ex et sint elit dolore. Culpa sint aliqua veniam cupidatat.',
    badge: 'NestJS',
    github: 'https://github.com',
    link: null,
  },
  {
    id: '2',
    title: 'Project 2',
    image: '/project2.png',
    description: 'Consequat consectetur est adipisicing do officia id sit est eiusmod culpa. Mollit minim adipisicing in esse ullamco magna nostrud mollit. Magna cillum ullamco ex qui nostrud consequat qui in laborum laborum veniam pariatur sint. Cupidatat consectetur laborum ad elit officia. Quis deserunt et id fugiat id voluptate laborum exercitation reprehenderit aute elit eu irure veniam.',
    badge: 'Next.js',
    github: 'https://github.com',
    link: 'https://example.com',
  },
  {
    id: '3',
    title: 'Project 3',
    image: '/project3.png',
    description: 'Officia laboris labore incididunt est labore laboris ut mollit ullamco ad adipisicing enim. Reprehenderit aliqua in ipsum adipisicing cillum pariatur sint. Exercitation duis ea cupidatat adipisicing. Veniam nisi veniam do commodo cillum enim ex esse aliqua proident dolor fugiat.',
    badge: 'React',
    github: null,
    link: 'https://example.com',
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL,
        badge TEXT NOT NULL,
        github TEXT,
        link TEXT
    )
`,
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO projects VALUES (
          null,
          @title,
          @image,
          @description,
          @badge,
          @github,
          @link
      )
    `);

  for (const project of projects) {
    stmt.run(project);
  }
}

initData();
