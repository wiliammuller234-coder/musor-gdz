const books = [
  { id: 23, slug: 'baranov-7-part-1', grade: 7, subject: 'Русский язык', title: 'Русский язык', authors: 'М. Т. Баранов, Т. А. Ладыженская, Л. А. Тростенцова, Н. В. Ладыженская, Л. Т. Григорян, О. М. Александрова, А. Д. Дейкина, И. И. Кулибаба', shortAuthors: 'Баранов М. Т., Ладыженская Т. А. и др.', edition: 'old', editionLabel: '3-е издание', year: '2021', icon: '7', color: '#b7dd70', verified: true, allSolved: true, solutionCount: 307, course: 'baranov7part1', series: 'Просвещение', parts: '1', pages: 176, cover: 'assets/russian-7-part1-baranov-2021.jpg' },
  { id: 42, slug: 'baranov-7-part-2-2019', grade: 7, subject: 'Русский язык', title: 'Русский язык', authors: 'М. Т. Баранов, Т. А. Ладыженская, Л. А. Тростенцова, Н. В. Ладыженская, Л. Т. Григорян, О. М. Александрова, А. Д. Дейкина, И. И. Кулибаба', shortAuthors: 'Баранов М. Т., Ладыженская Т. А. и др.', edition: 'old', editionLabel: 'ФГОС', year: '2019', icon: '7', color: '#9bc456', uploaded: true, verified: true, allSolved: true, readyCount: 232, solutionCount: 232, course: 'baranov7part2', series: 'Просвещение', parts: '2', pages: 143, isbn: '978-5-09-070481-6', cover: 'assets/russian-7-part2-baranov-2019.webp' },
  { id: 21, grade: 6, subject: 'Русский язык', title: 'Русский язык — полный курс', authors: 'Редакция «Мусор ГДЗ»', edition: 'new', year: '2026', icon: 'Я', color: '#ffdc2e', own: true, course: 'russian', series: 'Свой учебник', parts: '1' },
  { id: 1, grade: 6, subject: 'Математика', title: 'Математика', authors: 'Виленкин Н. Я., Жохов В. И.', edition: 'new', year: '2023–2025', icon: '➗', color: '#ffdc2e' },
  { id: 2, grade: 6, subject: 'Математика', title: 'Математика', authors: 'Виленкин Н. Я., Жохов В. И.', edition: 'old', year: '2015–2022', icon: '✖️', color: '#72dfb1' },
  { id: 3, grade: 6, subject: 'Русский язык', title: 'Русский язык', authors: 'Ладыженская Т. А., Баранов М. Т.', edition: 'new', year: '2023–2025', icon: 'Я', color: '#ff7da8' },
  { id: 4, grade: 6, subject: 'Русский язык', title: 'Русский язык', authors: 'Ладыженская Т. А., Баранов М. Т.', edition: 'old', year: '2012–2022', icon: '✍️', color: '#f3a5c0' },
  { id: 5, grade: 6, subject: 'Английский язык', title: 'Spotlight', authors: 'Ваулина Ю. Е., Дули Д.', edition: 'new', year: '2024', icon: 'ABC', color: '#77b8ff' },
  { id: 6, grade: 6, subject: 'Биология', title: 'Биология', authors: 'Пасечник В. В.', edition: 'new', year: '2023–2025', icon: '🌿', color: '#8ee4a6' },
  { id: 7, grade: 6, subject: 'География', title: 'География', authors: 'Алексеев А. И., Николина В. В.', edition: 'new', year: '2023', icon: '🌍', color: '#7ad9d2' },
  { id: 8, grade: 6, subject: 'История', title: 'История Средних веков', authors: 'Агибалова Е. В., Донской Г. М.', edition: 'old', year: '2020', icon: '🏰', color: '#e3b47b' },
  { id: 9, grade: 6, subject: 'Обществознание', title: 'Обществознание', authors: 'Боголюбов Л. Н., Иванова Л. Ф.', edition: 'new', year: '2023', icon: '⚖️', color: '#beb0ff' },
  { id: 10, grade: 6, subject: 'Литература', title: 'Литература', authors: 'Коровина В. Я., Журавлев В. П.', edition: 'old', year: '2021', icon: '📖', color: '#ffb978' },
  { id: 30, slug: 'merzlyak-algebra-7-2022', grade: 7, subject: 'Алгебра', title: 'Алгебра', authors: 'А. Г. Мерзляк, В. Б. Полонский, М. С. Якир', shortAuthors: 'Мерзляк А. Г., Полонский В. Б., Якир М. С.', edition: 'old', editionLabel: '9-е, стереотипное', year: '2022', icon: 'x²', color: '#42b9e7', uploaded: true, series: 'Просвещение', parts: '1', pages: 272, isbn: '978-5-09-087667-4', cover: 'assets/algebra-7-merzlyak-2022.webp' },
  { id: 31, slug: 'peryshkin-ivanov-physics-7-2023', grade: 7, subject: 'Физика', title: 'Физика', authors: 'А. В. Перышкин, А. И. Иванов', edition: 'new', editionLabel: '3-е, переработанное', year: '2023', icon: '⚡', color: '#b42cff', uploaded: true, verified: true, allSolved: true, readyCount: 438, solutionCount: 438, course: 'peryshkinIvanovPhysics7', series: 'Просвещение', parts: '1', pages: 239, cover: 'assets/physics-7-peryshkin-ivanov-2023.webp' },
  { id: 32, slug: 'bosova-informatics-7-2018', grade: 7, subject: 'Информатика', title: 'Информатика', authors: 'Л. Л. Босова, А. Ю. Босова', edition: 'old', editionLabel: '7-е издание', year: '2018', icon: '</>', color: '#2f9ed1', verified: true, solutionCount: 285, course: 'bosovaInformatics7', sourceFound: true, series: 'БИНОМ. Лаборатория знаний', parts: '1', pages: 224, isbn: '978-5-9963-3600-5', cover: 'assets/informatics-7-bosova-2018.webp', sourceTitle: 'Открыть официальные материалы Босовой', sourceUrl: 'https://bosova.ru/metodist/authors/informatika/3/', sourceDetail: 'Список вопросов и практических заданий уже собран по учебнику.' },
  { id: 33, slug: 'korovina-literature-7-part-1-2024', grade: 7, subject: 'Литература', title: 'Литература', authors: 'В. Я. Коровина, В. П. Журавлёв, В. И. Коровин', edition: 'new', editionLabel: '14-е, стереотипное', year: '2024', icon: '📖', color: '#48bdb4', uploaded: true, series: 'Просвещение', parts: '1', pages: 272, isbn: '978-5-09-110801-9', cover: 'assets/literature-7-korovina-part1-2024.webp' },
  { id: 43, slug: 'korovina-literature-7-part-2-2023', grade: 7, subject: 'Литература', title: 'Литература', authors: 'В. Я. Коровина, В. П. Журавлёв, В. И. Коровин', edition: 'new', editionLabel: '13-е, переработанное', year: '2023', icon: '📖', color: '#25aaa2', uploaded: true, series: 'Просвещение', parts: '2', pages: 288, isbn: '978-5-09-102513-2', cover: 'assets/literature-7-korovina-part2-2023.webp' },
  { id: 34, slug: 'alekseev-geography-7-2024', grade: 7, subject: 'География', title: 'География «Полярная звезда»', authors: 'А. И. Алексеев, В. В. Николина, Е. К. Липкина, С. И. Болысов, Т. А. Ачкасова, Г. Ю. Кузнецова', shortAuthors: 'Алексеев А. И., Николина В. В., Липкина Е. К. и др.', edition: 'new', editionLabel: '12-е, стереотипное', year: '2024', icon: '🌍', color: '#f4db2c', uploaded: true, verified: true, allSolved: true, readyCount: 453, solutionCount: 453, course: 'alekseevGeography7', series: 'Полярная звезда', parts: '1', pages: 256, isbn: '978-5-09-110811-8', cover: 'assets/geography-7-polyarnaya-zvezda-2024.webp' },
  { id: 35, slug: 'bashkort-tele-7-gabitova-2017', grade: 7, subject: 'Башҡорт теле', title: 'Башҡорт теле', authors: 'З. М. Ғәбитова, М. Ғ. Усманова', edition: 'old', editionLabel: '2-се баҫма', year: '2017', icon: 'Ә', color: '#9ac83e', uploaded: true, verified: true, allSolved: true, readyCount: 213, solutionCount: 213, course: 'bashkortTele7', series: 'Китап', parts: '1', pages: 136, isbn: '978-5-295-06807-2', cover: 'assets/bashkort-tele-7-gabitova-front.png' },
  { id: 36, slug: 'vysotsky-probability-7-9-part-1-2023', grade: 7, subject: 'Вероятность и статистика', title: 'Математика. Вероятность и статистика', authors: 'И. Р. Высоцкий, И. В. Ященко', edition: 'new', editionLabel: 'Базовый уровень', year: '2023', icon: '🎲', color: '#1fa9b5', uploaded: true, verified: true, allSolved: true, readyCount: 327, solutionCount: 327, course: 'vysotskyProbabilityPart1', series: '7–9 классы', parts: '1', pages: 177, cover: 'assets/probability-7-9-vysotsky-part1-2023.webp' },
  { id: 45, slug: 'vysotsky-probability-7-9-part-2-2023', grade: 7, subject: 'Вероятность и статистика', title: 'Математика. Вероятность и статистика', authors: 'И. Р. Высоцкий, И. В. Ященко', edition: 'new', editionLabel: 'Базовый уровень', year: '2023', icon: '🎲', color: '#157f9a', uploaded: true, verified: true, allSolved: true, readyCount: 276, solutionCount: 276, course: 'vysotskyProbabilityPart2', series: '7–9 классы', parts: '2', pages: 111, cover: 'assets/probability-7-9-vysotsky-part2-2023.webp' },
  { id: 46, slug: 'pasechnik-biology-7-2023', grade: 7, subject: 'Биология', title: 'Биология', authors: 'В. В. Пасечник, С. В. Суматохин, З. Г. Гапонюк, Г. Г. Швецов', shortAuthors: 'Пасечник В. В., Суматохин С. В. и др.', edition: 'new', editionLabel: '1-е издание · базовый уровень', year: '2023', icon: '🌿', color: '#58c8bd', uploaded: true, verified: true, allSolved: true, solutionCount: 187, course: 'pasechnikBiology7', series: 'Линия жизни', parts: '1', pages: 176, isbn: '978-5-09-102244-5', cover: 'assets/biology-7-pasechnik-2023.webp' },
  { id: 47, slug: 'konstantinov-biology-7-2022', grade: 7, subject: 'Биология', title: 'Биология', authors: 'В. М. Константинов, В. Г. Бабенко, В. С. Кучменко', shortAuthors: 'Константинов В. М., Бабенко В. Г., Кучменко В. С.', edition: 'old', editionLabel: '11-е, стереотипное', year: '2022', icon: '🦎', color: '#7861ca', planned: true, sourceFound: true, series: 'Просвещение · Вентана-Граф', parts: '1', pages: 286, isbn: '978-5-09-088217-0', cover: 'assets/biology-7-konstantinov-2022.jpg', sourceUrl: 'https://rusneb.ru/catalog/000199_000009_010823141/', sourceTitle: 'Сверить издание в НЭБ', sourceDetail: 'Это другой распространённый учебник биологии за 7 класс. Обложка и библиографические данные добавлены; для точных заданий нужен именно этот файл.' },
  { id: 48, slug: 'latyushin-biology-7-2019', grade: 7, subject: 'Биология', title: 'Биология. Животные', authors: 'В. В. Латюшин, В. А. Шапкин', shortAuthors: 'Латюшин В. В., Шапкин В. А.', edition: 'old', editionLabel: '6-е, стереотипное', year: '2019', icon: '🐅', color: '#48a965', planned: true, sourceFound: true, series: 'Вертикаль · Дрофа', parts: '1', pages: 304, isbn: '978-5-358-21287-9', cover: 'assets/biology-7-latyushin-2022.jpg', sourceUrl: 'https://search.rsl.ru/ru/record/01009742976', sourceTitle: 'Сверить издание в РГБ', sourceDetail: 'Ещё один школьный вариант по биологии за 7 класс. Он оставлен рядом, чтобы другая обложка не вела в учебник Пасечника.' },
  { id: 37, grade: 7, subject: 'Геометрия', title: 'Математика. Геометрия', authors: 'Л. С. Атанасян, В. Ф. Бутузов, С. Б. Кадомцев, Э. Г. Позняк, И. И. Юдина', shortAuthors: 'Атанасян Л. С., Бутузов В. Ф., Кадомцев С. Б. и др.', edition: 'new', editionLabel: 'Базовый уровень', year: '2025', icon: '△', color: '#64b8ef', planned: true, series: '7–9 классы', parts: '1', cover: 'assets/geometry-7-9-atanasyan.jpg' },
  { id: 38, slug: 'medinsky-chubaryan-history-7-2025', grade: 7, subject: 'Всеобщая история', title: 'История Нового времени. Конец XV–XVII в.', authors: 'В. Р. Мединский, А. О. Чубарьян', edition: 'new', editionLabel: 'Федеральный учебник', year: '2025', icon: '⛵', color: '#1698bd', uploaded: true, verified: true, allSolved: true, readyCount: 289, solutionCount: 289, course: 'medinskyHistory7', series: 'Просвещение', parts: '1', pages: 239, cover: 'assets/history-7-medinsky.jpg' },
  { id: 39, slug: 'alexandrova-native-russian-7-2019', grade: 7, subject: 'Русский родной язык', title: 'Русский родной язык', authors: 'О. М. Александрова, О. В. Загоровская, С. И. Богданов, Л. А. Вербицкая, Ю. Н. Гостева, И. Н. Добротина, А. Г. Нарушевич, Е. И. Казакова, И. П. Васильевых', shortAuthors: 'Александрова О. М., Загоровская О. В. и др.', edition: 'old', editionLabel: 'Учебное пособие', year: '2019', icon: 'РЯ', color: '#ee3152', uploaded: true, verified: true, allSolved: true, readyCount: 161, solutionCount: 161, course: 'nativeRussian7', series: 'Просвещение', parts: '1', pages: 112, isbn: '978-5-09-070016-0', cover: 'assets/native-russian-7-2019.webp' },
  { id: 40, slug: 'alexandrova-native-literature-7-2021', grade: 7, subject: 'Родная русская литература', title: 'Родная русская литература', authors: 'О. М. Александрова, М. А. Аристова, Н. В. Беляева, И. Н. Добротина, Ж. Н. Критарова, Р. Ф. Мухаметшина', shortAuthors: 'Александрова О. М., Аристова М. А., Беляева Н. В. и др.', edition: 'new', editionLabel: 'Учебное пособие', year: '2021', icon: 'РЛ', color: '#55ae4c', uploaded: true, verified: true, solutionCount: 207, course: 'nativeLiterature7', series: 'Просвещение', parts: '1', pages: 192, isbn: '978-5-09-081309-9', cover: 'assets/native-literature-7-2021.webp' },
  { id: 41, slug: 'rainbow-english-7-part-1-2014', grade: 7, subject: 'Английский язык', title: 'Rainbow English', authors: 'О. В. Афанасьева, И. В. Михеева, К. М. Баранова', edition: 'old', editionLabel: 'ФГОС', year: '2014', icon: 'EN', color: '#ef5d49', uploaded: true, series: 'Rainbow English', parts: '1', pages: 128, isbn: '978-5-358-11042-7', cover: 'assets/rainbow-english-7-part1-2014.webp' },
  { id: 44, slug: 'rainbow-english-7-part-2-2014', grade: 7, subject: 'Английский язык', title: 'Rainbow English', authors: 'О. В. Афанасьева, И. В. Михеева, К. М. Баранова', edition: 'old', editionLabel: 'ФГОС', year: '2014', icon: 'EN', color: '#ef5d49', uploaded: true, series: 'Rainbow English', parts: '2', pages: 132, isbn: '978-5-358-13696-0', cover: 'assets/rainbow-english-7-part2-2014.webp' }
];

books.push(...(window.catalogExpansion || []));

const state = { grade: 'all', subject: 'all', edition: 'all', query: '' };
const els = {
  grid: document.querySelector('#bookGrid'), count: document.querySelector('#resultCount'), empty: document.querySelector('#emptyState'),
  search: document.querySelector('#searchInput'), subject: document.querySelector('#subjectFilter'), edition: document.querySelector('#editionFilter'),
  grade: document.querySelector('#gradeFilter'), drawer: document.querySelector('#bookDrawer'), backdrop: document.querySelector('#drawerBackdrop'),
  drawerTitle: document.querySelector('#drawerTitle'), drawerSubject: document.querySelector('#drawerSubject'), drawerAuthors: document.querySelector('#drawerAuthors'),
  drawerBadges: document.querySelector('#drawerBadges'), chapters: document.querySelector('#chapterTabs'), tasks: document.querySelector('#taskGrid'),
  drawerCover: document.querySelector('#drawerCover'), drawerIcon: document.querySelector('#drawerIcon'), drawerPart: document.querySelector('#drawerPart'),
  exerciseSearch: document.querySelector('#exerciseSearch'), exerciseSearchForm: document.querySelector('#exerciseSearchForm'), exerciseCount: document.querySelector('#exerciseCount'),
  taskPicker: document.querySelector('#taskPicker'), sourceNotice: document.querySelector('#sourceNotice'),
  solution: document.querySelector('#solutionBox'), solutionNumber: document.querySelector('#solutionNumber'), solutionSteps: document.querySelector('#solutionSteps'),
  solutionQuestion: document.querySelector('#solutionQuestion'), solutionRule: document.querySelector('#solutionRule'),
  solutionAnswer: document.querySelector('#solutionAnswer'), solutionStatusLabel: document.querySelector('#solutionStatusLabel'),
  solutionTaskLabel: document.querySelector('#solutionTaskLabel'), solutionAnswerBlock: document.querySelector('#solutionAnswerBlock'),
  solutionStepsTitle: document.querySelector('#solutionStepsTitle'), solutionRuleBlock: document.querySelector('#solutionRuleBlock'), toast: document.querySelector('#toast')
};

let activeBook = null;
let activeCourse = null;
let activeTasks = [];

function normalize(value) { return value.toLowerCase().replace(/ё/g, 'е').trim(); }
function filteredBooks() {
  const q = normalize(state.query);
  return books.filter(book => {
    const haystack = normalize(`${book.subject} ${book.title} ${book.authors} ${book.grade} ${book.year}`);
    return (book.allSolved || book.own)
      && (state.grade === 'all' || String(book.grade) === state.grade)
      && (state.subject === 'all' || book.subject === state.subject)
      && (state.edition === 'all' || book.edition === state.edition)
      && (!q || haystack.includes(q));
  });
}

function renderBooks() {
  const list = filteredBooks();
  els.count.animate([{ transform: 'scale(1.5)', color: '#175ee7' }, { transform: 'scale(1)', color: '#ff5b1a' }], { duration: 280 });
  els.count.textContent = list.length;
  els.empty.hidden = list.length !== 0;
  els.grid.innerHTML = list.map((book, index) => {
    const series = book.series || (book.edition === 'new' ? 'Новый школьный курс' : 'Классическая линия');
    const parts = book.parts || (['Математика', 'Русский язык'].includes(book.subject) ? '1, 2' : '1');
    return `
    <article class="book-card ${book.own ? 'book-card--own' : ''}" style="--card:${book.color};animation-delay:${Math.min(index * 35, 280)}ms" tabindex="0" data-id="${book.id}" aria-label="Открыть ${book.title}, ${book.grade} класс">
      <div class="book-cover">
        ${book.cover ? `<img src="${book.cover}" alt="Обложка учебника ${book.title}, ${book.grade} класс">` : `<span class="book-cover__grade" aria-hidden="true">${book.grade}</span><span class="book-cover__subject" aria-hidden="true">${book.subject}</span><span class="book-cover__icon" aria-hidden="true">${book.icon}</span><small aria-hidden="true">${book.edition === 'new' ? 'новое издание' : 'классика'}</small>`}
      </div>
      <div class="book-card__info">
        ${book.allSolved ? `<div class="course-ready">✓ ${book.solutionCount || ''} решений готово</div>` : (book.readyCount ? `<div class="source-ready">✓ ${book.readyCount}/${book.solutionCount} решений готово</div>` : (book.verified ? `<div class="source-ready">✓ ${book.solutionCount || ''} упражнений в списке</div>` : (book.uploaded ? '<div class="source-found">✓ Файл загружен</div>' : (book.sourceFound ? '<div class="source-found">Источник заданий найден</div>' : (book.planned ? '<div class="book-planned">Добавлен · нужен файл</div>' : (book.own ? '<div class="course-ready">✓ Все решения готовы</div>' : (book.id % 5 === 0 ? '<div class="premium">♛ Премиум</div>' : '')))))))}
        <h3>${book.title} ${book.grade} класс</h3>
        <dl class="book-meta">
          <div><dt>Авторы:</dt><dd>${book.shortAuthors || book.authors}</dd></div>
          <div><dt>Серия:</dt><dd>${series}</dd></div>
          <div><dt>Тип книги:</dt><dd>Учебник</dd></div>
          <div><dt>Год:</dt><dd>${book.year}</dd></div>
          <div><dt>Часть:</dt><dd>${parts}</dd></div>
          ${book.editionLabel ? `<div><dt>Издание:</dt><dd>${book.editionLabel}</dd></div>` : ''}
        </dl>
        <span class="fgos">ФГОС</span>
      </div>
    </article>`;
  }).join('');
  bindCards();
}

function bindCards() {
  document.querySelectorAll('.book-card').forEach(card => {
    const open = () => openBook(Number(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
    card.addEventListener('pointermove', event => {
      if (window.innerWidth < 780) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateZ(8px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

function openBook(id) {
  const book = books.find(item => item.id === id);
  if (!book) return;
  activeBook = book;
  const pageUrl = new URL(window.location.href);
  pageUrl.searchParams.set('book', book.slug || String(book.id));
  pageUrl.searchParams.delete('exercise');
  pageUrl.hash = 'catalog';
  window.history.replaceState({ book: book.slug || String(book.id) }, '', pageUrl);
  activeCourse = book.course === 'russian' ? window.russianCourse?.[book.grade] : window.textbookCourses?.[book.course] || null;
  activeTasks = [];
  els.drawerTitle.textContent = book.title;
  els.drawerSubject.textContent = book.subject;
  els.drawerAuthors.textContent = book.authors;
  els.drawerPart.textContent = `Часть ${book.parts || '1'} · ${book.editionLabel || book.year}`;
  if (book.cover) {
    els.drawerCover.src = book.cover;
    els.drawerCover.alt = `Обложка учебника ${book.title}, ${book.grade} класс`;
    els.drawerCover.hidden = false;
    els.drawerIcon.hidden = true;
  } else {
    els.drawerCover.hidden = true;
    els.drawerIcon.hidden = false;
    els.drawerIcon.textContent = book.icon;
  }
  els.drawerBadges.innerHTML = `<span>${book.grade} класс</span><span>${book.editionLabel || (book.edition === 'new' ? 'Новое издание' : 'Старое издание')}</span><span>${book.year}</span>${book.parts ? `<span>Часть ${book.parts}</span>` : ''}${book.pages ? `<span>${book.pages} страниц</span>` : ''}${book.isbn ? `<span>ISBN ${book.isbn}</span>` : ''}${book.own ? '<span>Наш курс</span>' : ''}${book.allSolved ? '<span>Все решения готовы</span>' : (book.verified ? '<span>По загруженному учебнику</span>' : '')}${book.uploaded ? '<span>Файл загружен</span>' : (book.sourceFound ? '<span>Материалы найдены</span>' : (book.planned ? '<span>Ждём файл</span>' : ''))}`;
  els.taskPicker.hidden = !activeCourse;
  els.sourceNotice.hidden = Boolean(activeCourse);
  if (!activeCourse) {
    els.sourceNotice.innerHTML = book.uploaded
      ? '<strong>Учебник загружен</strong><p>Обложка, издание, авторы и страницы сверены по твоему файлу. Список заданий добавляется по порядку.</p>'
      : book.sourceFound
      ? `<strong>Источник заданий найден</strong><p>${book.sourceDetail}</p><a class="source-notice__link" href="${book.sourceUrl}" target="_blank" rel="noopener noreferrer">${book.sourceTitle} ↗</a><p class="source-notice__hint">Для точного списка на «Мусор ГДЗ» всё равно сверим задания с твоим экземпляром: в разных изданиях номера могут отличаться.</p>`
      : '<strong>Обложка и авторы уже добавлены</strong><p>Чтобы номера совпали без ошибок, загрузи PDF, DJVU или фотографии именно этого издания. После этого добавим задания и наши решения.</p>';
  }
  if (activeCourse) {
    let fallbackNumber = 0;
    activeTasks = activeCourse.flatMap(chapter => chapter.tasks.map(task => {
      fallbackNumber += 1;
      const number = task.number ?? fallbackNumber;
      return { ...task, __number: number, __key: String(task.key ?? number), __label: String(task.label ?? number), __chapter: chapter.title };
    }));
    els.exerciseSearch.value = '';
    const repeatedNumbers = new Set(activeTasks.map(task => task.__number)).size !== activeTasks.length;
    els.exerciseSearch.placeholder = repeatedNumbers ? 'Например, 1.2-3' : 'Например, 312';
    renderTasks();
  }
  els.solution.hidden = true;
  els.drawer.classList.add('is-open');
  els.backdrop.classList.add('is-open');
  els.drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
  els.drawer.querySelector('.drawer__close').focus();
  if (activeCourse) setTimeout(() => els.exerciseSearch.focus(), 420);
}

function normalizeTaskQuery(value) {
  return String(value).toLowerCase().replace(/[§№]/g, '').trim().replace(/[–—]/g, '-').replace(/\s+/g, '-').replace(/,+/g, '.');
}

function matchingTasks(filter = '') {
  const query = normalizeTaskQuery(filter);
  if (!query) return activeTasks;
  const exact = activeTasks.filter(item => normalizeTaskQuery(item.__key) === query || normalizeTaskQuery(item.__label) === query || String(item.__number) === query);
  if (exact.length) return exact;
  return activeTasks.filter(item => normalizeTaskQuery(item.__key).includes(query) || normalizeTaskQuery(item.__label).includes(query) || String(item.__number).includes(query));
}

function renderTasks(filter = '') {
  const query = normalizeTaskQuery(filter);
  const tasks = matchingTasks(filter);
  els.exerciseCount.textContent = query ? `Найдено номеров: ${tasks.length}` : `Все упражнения: ${tasks.length}`;
  els.tasks.classList.toggle('task-grid--labels', activeTasks.some(item => item.__label !== String(item.__number)));
  els.tasks.innerHTML = tasks.map(item => {
    return `<button type="button" data-key="${item.__key}" aria-label="${item.__label}: ${item.question}">${item.__label}</button>`;
  }).join('');
  els.tasks.querySelectorAll('button').forEach(button => button.addEventListener('click', () => showSolution(button.dataset.key)));
}

function showSolution(key) {
  const taskData = activeTasks.find(item => item.__key === String(key));
  if (!taskData) return;
  const pageUrl = new URL(window.location.href);
  pageUrl.searchParams.set('book', activeBook.slug || String(activeBook.id));
  pageUrl.searchParams.set('exercise', taskData.__key);
  pageUrl.hash = 'catalog';
  window.history.replaceState({ book: activeBook.slug || String(activeBook.id), exercise: taskData.__key }, '', pageUrl);
  const pending = Boolean(taskData.answerPending);
  els.solutionStatusLabel.textContent = pending ? 'Задание добавлено' : 'Полное решение';
  els.solutionTaskLabel.textContent = taskData.summaryOnly ? 'Задание — кратко' : 'Задание из учебника';
  els.solutionAnswerBlock.hidden = pending;
  els.solutionStepsTitle.hidden = pending;
  els.solutionSteps.hidden = pending;
  els.solutionRuleBlock.hidden = pending;
  els.solutionNumber.textContent = `${taskData.__label}${taskData.page ? ` · стр. ${taskData.page}` : ''}`;
  if (taskData.conditionHtml) els.solutionQuestion.innerHTML = taskData.conditionHtml;
  else renderStructuredText(els.solutionQuestion, taskData.conditionText || taskData.question);
  if (!pending) {
    els.solutionRule.textContent = taskData.rule || '';
    els.solutionSteps.innerHTML = (taskData.steps || []).map(step => `<li>${step}</li>`).join('');
    if (taskData.answerHtml) els.solutionAnswer.innerHTML = taskData.answerHtml;
    else renderStructuredText(els.solutionAnswer, taskData.answer || '');
  }
  els.solution.hidden = false;
  els.solution.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderStructuredText(target, text) {
  target.replaceChildren();
  String(text).split(/\r?\n/).map(line => line.trim()).filter(Boolean).forEach(line => {
    const paragraph = document.createElement('p');
    if (/^[•·]/.test(line)) {
      paragraph.className = 'solution-line--bullet';
      paragraph.textContent = line.replace(/^[•·]\s*/, '');
    } else {
      paragraph.textContent = line;
    }
    target.append(paragraph);
  });
}

function initExerciseSearch() {
  els.exerciseSearch.addEventListener('input', () => renderTasks(els.exerciseSearch.value));
  els.exerciseSearchForm.addEventListener('submit', event => {
    event.preventDefault();
    const tasks = matchingTasks(els.exerciseSearch.value);
    if (!tasks.length) { showToast('Такого номера в этой книге нет'); return; }
    renderTasks(els.exerciseSearch.value);
    if (tasks.length > 1) { showToast('Нашлось несколько номеров — выбери нужный параграф'); return; }
    showSolution(tasks[0].__key);
  });
}

function openDirectBook() {
  const params = new URLSearchParams(window.location.search);
  const requestedBook = params.get('book');
  const book = requestedBook === 'baranov-7-part-1'
    ? books.find(item => item.id === 23)
    : books.find(item => item.slug === requestedBook || String(item.id) === requestedBook);
  if (!book) return;
  document.querySelector('#intro').classList.add('is-done');
  openBook(book.id);
  const exercise = params.get('exercise');
  const directTask = activeTasks.find(item => item.__key === String(exercise));
  if (activeCourse && directTask) {
    els.exerciseSearch.value = String(exercise);
    renderTasks(String(exercise));
    showSolution(directTask.__key);
  }
}

function closeDrawer() {
  els.drawer.classList.remove('is-open');
  els.backdrop.classList.remove('is-open');
  els.drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
  const pageUrl = new URL(window.location.href);
  pageUrl.searchParams.delete('book');
  pageUrl.searchParams.delete('exercise');
  pageUrl.hash = 'catalog';
  window.history.replaceState({}, '', pageUrl);
}

function resetFilters() {
  state.grade = state.subject = state.edition = 'all'; state.query = '';
  els.search.value = ''; els.subject.value = 'all'; els.edition.value = 'all';
  els.grade.querySelectorAll('button').forEach(button => button.classList.toggle('is-active', button.dataset.value === 'all'));
  renderBooks(); showToast('Показаны все учебники');
}

function showToast(message) {
  els.toast.textContent = message; els.toast.classList.add('is-visible');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => els.toast.classList.remove('is-visible'), 1800);
}

function initFilters() {
  [...new Set(books.map(book => book.subject))].sort((a, b) => a.localeCompare(b, 'ru')).forEach(subject => {
    const option = document.createElement('option'); option.value = subject; option.textContent = subject; els.subject.append(option);
  });
  els.grade.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button) return;
    state.grade = button.dataset.value;
    els.grade.querySelector('.is-active')?.classList.remove('is-active'); button.classList.add('is-active'); renderBooks();
  });
  els.subject.addEventListener('change', () => { state.subject = els.subject.value; renderBooks(); });
  els.edition.addEventListener('change', () => { state.edition = els.edition.value; renderBooks(); });
  els.search.addEventListener('input', () => { state.query = els.search.value; renderBooks(); });
  document.querySelector('#resetFilters').addEventListener('click', resetFilters);
  document.querySelector('#emptyReset').addEventListener('click', resetFilters);
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); els.search.focus(); document.querySelector('#catalog').scrollIntoView(); }
    if (event.key === 'Escape') closeDrawer();
  });
}

function initMotion() {
  const intro = document.querySelector('#intro');
  const finishIntro = () => { intro.classList.add('is-done'); document.querySelector('#heroVideo')?.play().catch(() => {}); };
  document.querySelector('.intro__skip').addEventListener('click', finishIntro);
  intro.querySelector('video').addEventListener('ended', finishIntro, { once: true });
  setTimeout(finishIntro, 5200);

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const pointer = document.querySelector('#pointer');
  window.addEventListener('pointermove', event => { pointer.style.left = `${event.clientX}px`; pointer.style.top = `${event.clientY}px`; });
  document.addEventListener('pointerover', event => pointer.classList.toggle('is-big', Boolean(event.target.closest('a,button,input,select,.book-card'))));

  const media = document.querySelector('#heroMedia');
  window.addEventListener('pointermove', event => {
    if (window.innerWidth < 780) return;
    const x = (event.clientX / innerWidth - .5) * 8; const y = (event.clientY / innerHeight - .5) * -8;
    media.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });

  const floaters = document.querySelector('#floaters');
  ['∑', 'А', 'x²', '?!', '7', '§', '∆', '42'].forEach((symbol, index) => {
    const item = document.createElement('span'); item.className = 'floater'; item.textContent = symbol;
    item.style.cssText = `left:${(index * 17 + 3) % 93}%;top:${(index * 29 + 8) % 88}%;font-size:${4 + index % 4}rem;--speed:${4 + index}s;--rotate:${index * 17 - 30}deg;--dx:${index % 2 ? 25 : -25}px;--dy:${20 + index * 3}px`;
    floaters.append(item);
  });
}

function initVideo() {
  const video = document.querySelector('#heroVideo'); const toggle = document.querySelector('#videoToggle');
  toggle.addEventListener('click', () => {
    if (video.paused) { video.play(); toggle.textContent = 'ПАУЗА'; toggle.setAttribute('aria-label', 'Поставить видео на паузу'); }
    else { video.pause(); toggle.textContent = 'ИГРАТЬ'; toggle.setAttribute('aria-label', 'Воспроизвести видео'); }
  });
}

document.querySelector('#drawerClose').addEventListener('click', closeDrawer);
els.backdrop.addEventListener('click', closeDrawer);
document.querySelector('#randomBook').addEventListener('click', () => {
  const available = books.filter(book => book.allSolved || book.own);
  const book = available[Math.floor(Math.random() * available.length)]; openBook(book.id); showToast(`Случайный выбор: ${book.title}`);
});

document.querySelector('#bookTotal').textContent = books.filter(book => book.allSolved || book.own).length;
initFilters(); initExerciseSearch(); initMotion(); initVideo(); renderBooks(); openDirectBook();
