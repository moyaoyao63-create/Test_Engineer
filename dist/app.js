const modal = document.querySelector('#portfolio-modal');
const modalTitle = document.querySelector('#modal-title');
const modalKicker = document.querySelector('#modal-kicker');
const modalIntro = document.querySelector('#modal-intro');
const modalContent = document.querySelector('#modal-content');
const modalClose = document.querySelector('#modal-close');
const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const video = document.querySelector('#scrub-video');

const modalData = {
  projects: {
    kicker: '01 / PROJECTS',
    title: '项目经历',
    intro: '把日常的小需求，做成可使用、可理解、可持续的作品。',
    entries: [
      { index: '01', title: '个人作品集网站', copy: '以票券式信息架构呈现个人经历，让访客可以快速浏览项目、能力和联系方式。', tags: ['Web Design', 'HTML / CSS', 'Interaction'], action: '查看项目 ↗' },
      { index: '02', title: '自动化测试工作台', copy: '为测试流程搭建统一入口，把需求分析、用例生成和数据工具串联起来。', tags: ['Product', 'React', 'FastAPI'], action: '项目详情 ↗' },
      { index: '03', title: 'Hover Translator', copy: '一个帮助观看视频时理解字幕与生词的小工具，强调轻量、及时和不打断。', tags: ['Chrome Extension', 'UX', 'Open Source'], action: '在 GitHub 查看 ↗' },
    ],
  },
  experience: {
    kicker: '02 / EXPERIENCE',
    title: '工作经历',
    intro: '每一次工作，都在训练我把模糊的问题变成清晰的下一步。',
    entries: [
      { index: '01', title: '产品 / 设计 / 开发', copy: '目前正在寻找能同时发挥产品思维、视觉表达和工程实现能力的机会。', tags: ['Problem Solving', 'Collaboration', 'Ownership'], action: '工作方式 ↗' },
      { index: '02', title: '从需求到交付', copy: '习惯先理解真实使用场景，再用原型、代码和反馈循环把方案做实。', tags: ['Research', 'Prototype', 'Ship'], action: '我的方法 ↗' },
      { index: '03', title: '持续学习', copy: '保持对新工具、新媒介和新协作方式的好奇，边做边建立自己的判断。', tags: ['Curious', 'Iterative', 'Reliable'], action: '继续了解 ↗' },
    ],
  },
  awards: {
    kicker: '03 / AWARDS',
    title: '奖项荣誉',
    intro: '这里先放置占位内容，后续可以替换为真实的奖项、证书与里程碑。',
    entries: [
      { index: '01', title: '优秀项目 / 占位', copy: '项目在真实场景中产生了明确的使用价值，并获得团队认可。', tags: ['2025', 'Team Award'], action: '补充内容 ↗' },
      { index: '02', title: '设计挑战 / 占位', copy: '用有限的时间完成从概念到可交互原型的完整表达。', tags: ['2024', 'Challenge'], action: '补充内容 ↗' },
      { index: '03', title: '学习证书 / 占位', copy: '持续积累产品、前端与视觉表达相关的知识体系。', tags: ['Learning', 'Growth'], action: '补充内容 ↗' },
    ],
  },
  skills: {
    kicker: '04 / SKILLS',
    title: '技能工具',
    intro: '工具会变化，但我会持续练习理解问题、表达方案和把事情做完。',
    entries: [
      { index: '01', title: '设计与原型', copy: 'Figma、信息架构、交互原型、视觉系统与动效思考。', tags: ['Figma', 'Prototyping', 'Visual'], action: '工具清单 ↗' },
      { index: '02', title: '前端与交互', copy: 'HTML、CSS、JavaScript、React，以及更关注细节的响应式体验。', tags: ['React', 'JavaScript', 'Responsive'], action: '代码能力 ↗' },
      { index: '03', title: '协作与交付', copy: '需求拆解、文档表达、版本管理、测试和与团队一起解决问题。', tags: ['Git', 'Docs', 'Teamwork'], action: '协作方式 ↗' },
    ],
  },
  life: {
    kicker: '05 / LIFE',
    title: '生活记录',
    intro: '工作之外，我也在观察城市、收集灵感，记录那些让人重新充电的瞬间。',
    entries: [
      { index: '01', title: '阅读与观察', copy: '从书、展览、电影和街头细节里寻找新的问题和表达方式。', tags: ['Notes', 'Culture'], action: '生活片段 ↗' },
      { index: '02', title: '照片与文字', copy: '把还没有答案的想法先记下来，给未来的自己留一条线索。', tags: ['Photo', 'Writing'], action: '稍后补充 ↗' },
      { index: '03', title: '保持好奇', copy: '希望自己一直有能力被新事物打动，也有耐心把它做成作品。', tags: ['Curiosity', 'Practice'], action: '联系我 ↗' },
    ],
  },
};

let lastFocusedElement = null;

function renderModal(key) {
  const data = modalData[key] || modalData.projects;
  modalKicker.textContent = data.kicker;
  modalTitle.textContent = data.title;
  modalIntro.textContent = data.intro;
  modalContent.innerHTML = data.entries.map((entry) => `
    <article class="modal-entry">
      <span class="entry-index">${entry.index}</span>
      <div class="entry-body">
        <h3>${entry.title}</h3>
        <p>${entry.copy}</p>
        <div class="entry-tags">${entry.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      </div>
      <a class="entry-action" href="mailto:hello@example.com?subject=${encodeURIComponent(entry.title)}">${entry.action}</a>
    </article>
  `).join('');
}

function openModal(key) {
  lastFocusedElement = document.activeElement;
  renderModal(key);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  window.setTimeout(() => modalClose.focus(), 30);
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
}

document.querySelectorAll('[data-ticket], [data-open-modal]').forEach((element) => {
  element.addEventListener('click', () => {
    const key = element.dataset.ticket || element.dataset.openModal;
    closeMobileMenu();
    openModal(key);
  });
});

modalClose.addEventListener('click', closeModal);
modal.querySelector('[data-close-modal]').addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

function closeMobileMenu() {
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = !menuToggle.classList.contains('is-open');
  menuToggle.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.classList.toggle('is-open', isOpen);
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('modal-open', isOpen);
});

mobileMenu.querySelectorAll('a:not([data-open-modal])').forEach((link) => link.addEventListener('click', closeMobileMenu));

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let prevMouseX = null;
let targetVideoTime = 0;
let seekQueued = false;

function animatePointer() {
  currentX += (targetX - currentX) * .08;
  currentY += (targetY - currentY) * .08;
  document.documentElement.style.setProperty('--mx', currentX.toFixed(3));
  document.documentElement.style.setProperty('--my', currentY.toFixed(3));
  requestAnimationFrame(animatePointer);
}

function requestVideoSeek() {
  if (!video || !Number.isFinite(video.duration) || video.duration <= 0 || seekQueued) return;
  seekQueued = true;
  video.currentTime = Math.max(0, Math.min(video.duration, targetVideoTime));
}

video.addEventListener('loadedmetadata', () => {
  targetVideoTime = video.currentTime;
});
video.addEventListener('seeked', () => {
  seekQueued = false;
  if (Math.abs(video.currentTime - targetVideoTime) > .02) requestVideoSeek();
});

window.addEventListener('mousemove', (event) => {
  const halfWidth = Math.max(window.innerWidth / 2, 1);
  const halfHeight = Math.max(window.innerHeight / 2, 1);
  targetX = (event.clientX - halfWidth) / halfWidth;
  targetY = (event.clientY - halfHeight) / halfHeight;
  if (prevMouseX !== null && Number.isFinite(video.duration) && video.duration > 0) {
    const delta = event.clientX - prevMouseX;
    targetVideoTime = Math.max(0, Math.min(video.duration, targetVideoTime + (delta / window.innerWidth) * .8 * video.duration));
    requestVideoSeek();
  }
  prevMouseX = event.clientX;
});

window.addEventListener('mouseleave', () => { prevMouseX = null; });
animatePointer();
