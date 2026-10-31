/* Moyao / PORTFOLIO —— 内容全部来自 dist/assets/简历.docx，未添加虚构信息 */
(function () {
  "use strict";

  /* ================= 简历数据 ================= */
  var DATA = {
    projects: {
      no: "01", en: "PROJECTS", title: "项目经历",
      html:
        entry("需求数据清洗与结构化处理系统", "2025年12月 ~ 2026年3月", "测试开发工程师",
          "Python / Dify Workflow / LLM / Prompt Engineering / JSON / API",
          "针对业务需求文件格式不统一、人工提取需求信息耗时、测试数据整理成本高等问题，基于 Dify 搭建自动化数据处理工作流，实现多格式需求文件解析、数据清洗、结构化转换、AI 信息抽取、数据校验及 Excel 导出。",
          [
            "<b>Workflow 架构设计：</b>基于 Dify 设计多分支 AI 工作流，结合条件判断、文件解析、Python 代码执行、变量聚合及 LLM 节点，构建从需求文件接入到测试用例输出的自动化处理链路。",
            "<b>多格式数据解析：</b>针对 Excel/CSV、文档及图片等输入类型设计差异化解析流程，通过数据清洗、字段结构转换及统一 JSON 输出，解决多源需求数据结构不一致的问题。",
            "<b>需求数据清洗与标准化：</b>基于 Python 构建字段映射、空值过滤及去重规则，将原始内容转换为统一 JSON Schema，并通过异常记录筛选与规则校验提高数据可用性。",
            "<b>LLM 信息抽取与结构化处理：</b>针对长文本需求设计内容分块、需求事实抽取与 JSON 解析流程，通过 Prompt 约束模型输出结构，并结合规则清洗、编号分组等节点组织需求数据。",
            "<b>数据质量校验及需求覆盖检查：</b>对需求数据与生成的测试用例进行关联检查，整理覆盖结果及报告数据。",
            "<b>自动化数据交付：</b>将处理结果汇总、编号并转换为 XLSX 文件，形成从原始需求输入到结构化数据输出的自动化处理链路。",
            "<b>工作流服务集成：</b>通过 Dify Workflow API 对接外部测试平台，实现业务需求提交、工作流调用、结果获取及文件导出，推动 AI 能力在业务场景中落地。"
          ]) +
        entry("自动化测试平台", "2025年4月 ~ 2025年9月", "测试开发工程师",
          "React / FastAPI / Python / RESTful API / Docker / Nginx",
          "针对测试过程中工具分散、数据转换依赖人工操作及测试执行流程繁琐等问题，基于 React + FastAPI 独立设计并开发前后端分离的自动化测试平台。集成 AI 用例生成、CAN 协议转换、CAN 数据模拟发送及自定义数据构造等功能，实现测试工具的统一管理与操作。",
          [
            "<b>前后端架构设计与开发：</b>基于 React Hooks 构建模块化单页应用，使用 FastAPI 设计 RESTful API，完成文件上传、参数配置、任务提交、状态轮询、结果预览及文件下载等功能。",
            "<b>后端接口开发与服务集成：</b>使用 Python + FastAPI 封装业务处理接口，基于 Pydantic 实现请求参数校验，使用 httpx 对接外部 AI 服务，实现 API 请求转发、结果解析及数据返回，并通过环境变量管理 API Key。",
            "<b>CAN 数据清洗与转换模块开发：</b>基于 Python 开发 CAN 数据处理模块，对非标准 Excel 原始数据进行解析、字段映射、格式清洗及结构化转换，依据 CAN 协议规则完成数据校验与异常识别，自动生成标准 DBC 文件。",
            "<b>CAN 硬件通信开发：</b>通过 Python ctypes 调用 USBCAN2 厂商 DLL，实现设备双通道初始化、CAN 报文发送及后台线程任务管理，支持任务进度查询与执行中止。",
            "<b>容器化部署与服务管理：</b>使用 Docker Compose 完成前后端服务容器化部署，配置 Nginx 静态资源服务及 API 反向代理，实现前后端服务的统一访问。"
          ])
    },

    experience: {
      no: "02", en: "EXPERIENCE", title: "工作经历",
      html:
        '<div class="m-info">' +
          '<div><b>年龄 / 经验</b>24 岁 · 工作年限 2 年</div>' +
          '<div><b>毕业院校</b>湖南财政经济学院（一本）</div>' +
          '<div><b>学历 / 专业</b>全日制本科 · 计算机科学与技术</div>' +
          '<div><b>求职意向</b>AI数据交付 / AI训练师</div>' +
        "</div>" +
        entry("湖南省鼎立电气科技有限公司", "2024年6月 ~ 2026年4月", "测试开发工程师", "", "",
          [
            "<b>AI 数据处理与工具建设：</b>参与 AI 测试提效工具开发，基于 Dify 搭建 AI 用例生成 Workflow，完成需求数据输入、API 调用封装、结果处理及结构化输出，推动 AI 能力在实际业务流程中落地。",
            "<b>数据构造与自动化处理：</b>针对 CAN 协议测试中数据构造及报文配置效率低的问题，使用 Python 开发自动化数据处理工具，实现需求文档数据点向标准 CAN 报文结构及 DBC 文件的自动转换，并支持数据自动发送，测试准备及执行效率提升约 30%。",
            "<b>数据质量与标准化：</b>梳理历史质量问题及高频异常场景，建立历史缺陷库和专项 CheckList，将质量检查规则进行标准化，推动问题前置发现及流程规范化，同类缺陷重复发生率降低 30%。",
            "<b>数据校验与自动化：</b>使用 SQL 对业务数据库进行数据查询及一致性校验，并基于 Python + Requests + Pytest 开发接口自动化脚本，实现测试数据处理、接口验证及结果统计。",
            "<b>质量保障与问题闭环：</b>负责车载终端及物联网平台相关数据和业务流程验证，结合日志、数据库及接口数据进行问题定位，推动异常问题闭环处理。"
          ]) +
        entry("自我评价", "", "", "", "",
          [
            "具备强烈的自动化与提效意识，擅长利用 AI 工具赋能工作流程，提升数据构造及 Python 脚本开发效率。",
            "具备扎实的数学基础和逻辑思维能力，擅长从多角度分析软件系统潜在问题，确保测试工作的全面性和准确性。",
            "具备较强的反思总结与持续学习能力，善于团队合作沟通，情绪稳定，抗压能力强，热情积极。",
            "具备出色的问题定位与溯源能力，善于结合日志分析与环境仿真攻坚极难复现 Bug；坚持闭环思维，推动缺陷高效修复。"
          ])
    },

    github: {
      no: "03", en: "OPEN SOURCE", title: "GitHub 项目",
      // 简历中暂未提供仓库地址；拿到真实链接后填入下方 url 即可渲染为可点击链接。
      html:
        '<p class="m-note">以下项目均已完成开发实践，仓库链接整理中，随后补充。</p>' +
        repo("需求数据清洗与结构化处理系统",
          "基于 Dify 的自动化数据处理工作流：多格式需求文件解析、数据清洗、LLM 信息抽取与 XLSX 自动化导出。",
          "Python · Dify Workflow · LLM · Prompt Engineering") +
        repo("自动化测试平台",
          "React + FastAPI 前后端分离的一站式测试工具平台：AI 用例生成、CAN 协议转换、CAN 数据模拟发送与自定义数据构造。",
          "React · FastAPI · Python · Docker · Nginx")
    },

    skills: {
      no: "04", en: "SKILLS", title: "技能工具",
      html:
        entry("专业技能", "", "", "", "",
          [
            "<b>Python 数据处理：</b>使用 Python 编写数据处理及自动化脚本，完成数据解析、转换、构造、批量处理及结果输出。",
            "<b>数据质量与校验：</b>熟悉数据完整性、准确性、一致性等质量校验思路，能够通过 Python、SQL 对业务数据进行校验、异常识别及结果统计。",
            "<b>SQL / 数据库：</b>熟悉 MySQL，能够使用 SQL 完成数据查询、条件筛选、聚合统计及多表关联，并进行业务数据一致性校验。",
            "<b>AI 数据处理：</b>具备 AI skill 测试及 Workflow 实践经验，基于 Dify 搭建测试用例生成工作流，完成需求数据输入、API 调用封装、结果处理及 Markdown 数据导出。",
            "<b>数据自动化：</b>曾使用 Python 将需求文档中的数据点自动转换为标准 CAN 报文结构及 DBC 文件，并实现自动化发送。",
            "<b>数据质量标准化：</b>具备质量规则梳理、CheckList 建设及流程标准化经验，能够通过规范化规则提升数据及项目执行的一致性。",
            "<b>工具与协作：</b>熟悉 Git、Linux 常用操作，具备跨团队协作及问题定位能力。",
            "<b>软件测试基础：</b>熟悉软件测试流程、缺陷生命周期及常见测试设计方法，具备接口、数据库、自动化测试实践经验。",
            "<b>AI 工具应用能力：</b>熟悉 ChatGPT、Codex 等主流 AI 工具，具备 AI 辅助编程与工程实践经验，能够运用 AI 完成需求分析、技术方案设计、代码生成、问题排查及代码优化。"
          ]) +
        entry("获得证书", "", "", "", "",
          [
            "英语六级（CET-6）564 · 软考中级 · C1 驾驶证 · 计算机二级",
            "省级优秀毕业生 · 国家奖学金 · 国家励志奖学金 · 创新创业大赛省级奖项 · 绩点 3.96/4.0"
          ])
    }
  };

  function entry(title, time, role, stack, desc, items) {
    var h = '<section class="m-entry"><div class="m-entry-title"><h3>' + title + "</h3>";
    if (time) h += '<span class="m-time">' + time + "</span>";
    if (role) h += '<span class="m-role">' + role + "</span>";
    h += "</div>";
    if (stack) h += '<p class="m-stack"><b>技术栈：</b>' + stack + "</p>";
    if (desc) h += '<p class="m-desc">' + desc + "</p>";
    if (items && items.length) h += '<ul class="m-list">' + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>";
    return h + "</section>";
  }

  function repo(name, desc, stack, url) {
    var h = '<section class="m-entry"><div class="m-entry-title"><h3>' + name + "</h3></div>";
    h += '<p class="m-desc">' + desc + "</p>";
    h += '<p class="m-stack"><b>技术栈：</b>' + stack + "</p>";
    if (url) {
      h += '<a class="entry-action" href="' + url + '" target="_blank" rel="noreferrer">查看仓库 ↗</a>';
    } else {
      h += '<span class="entry-action entry-action-disabled">简历未提供仓库地址</span>';
    }
    return h + "</section>";
  }

  /* ================= 工具 ================= */
  function $(sel) { return document.querySelector(sel); }

  /* ================= 开场视频 ================= */
  var intro = $("#intro");
  var video = $("#intro-video");
  var fallback = $("#intro-fallback");
  var introDone = false;
  var fallbackTimer = null;

  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("playsinline", "");
  video.autoplay = true;

  function playIntro() {
    if (introDone) return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    var promise = video.play();
    if (promise && promise.catch) {
      promise.catch(function () {
        // 某些本地文件环境会在第一次调用时拒绝自动播放；保持开场层可见，稍后重试。
      });
    }
  }

  function startIntroWhenReady() {
    if (!introDone) playIntro();
  }

  function showStage() {
    if (introDone) return;
    introDone = true;
    if (fallbackTimer) window.clearTimeout(fallbackTimer);
    intro.classList.add("is-hidden");
    try { video.pause(); } catch (e) {}
  }

  video.addEventListener("ended", showStage);
  video.addEventListener("error", function () {
    // 视频加载失败 → 显示静态封面
    video.style.display = "none";
    fallback.hidden = false;
    fallbackTimer = window.setTimeout(showStage, 1000);
  }, true);

  video.addEventListener("loadedmetadata", startIntroWhenReady);
  video.addEventListener("loadeddata", startIntroWhenReady);
  video.addEventListener("canplay", startIntroWhenReady);
  video.addEventListener("canplaythrough", startIntroWhenReady);
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) startIntroWhenReady();
  });
  document.addEventListener("pointerdown", startIntroWhenReady, { passive: true });
  document.addEventListener("keydown", startIntroWhenReady);
  window.setTimeout(startIntroWhenReady, 0);

  /* ================= 人物状态图切换 ================= */
  var stateImages = {};
  var hoverKey = null;
  var focusKey = null;

  document.querySelectorAll("[data-state-image]").forEach(function (img) {
    stateImages[img.dataset.stateImage] = img;
    img.addEventListener("error", function () {
      img.hidden = true;
      syncState();
    });
  });

  function syncState() {
    var activeKey = focusKey || hoverKey;
    Object.keys(stateImages).forEach(function (key) {
      var image = stateImages[key];
      image.classList.toggle("is-active", key === activeKey && !image.hidden);
    });
  }

  function setState(key, mode, on) {
    if (mode === "hover") hoverKey = on ? key : (hoverKey === key ? null : hoverKey);
    if (mode === "focus") focusKey = on ? key : (focusKey === key ? null : focusKey);
    syncState();
  }

  document.querySelectorAll(".hotspot").forEach(function (spot) {
    var key = spot.dataset.ticket;
    spot.addEventListener("mouseenter", function () { setState(key, "hover", true); });
    spot.addEventListener("mouseleave", function () { setState(key, "hover", false); });
    spot.addEventListener("focus", function () { setState(key, "focus", true); });
    spot.addEventListener("blur", function () { setState(key, "focus", false); });
    spot.addEventListener("click", function () { openModal(key); });
  });

  /* ================= 弹窗 ================= */
  var modal = $("#modal");
  var modalBody = $("#modal-body");
  var lastFocus = null;

  function openModal(key) {
    var d = DATA[key];
    if (!d) return;
    $("#modal-no").textContent = d.no;
    $("#modal-en").textContent = d.en;
    $("#modal-title").textContent = d.title;
    modalBody.innerHTML = d.html;
    modalBody.scrollTop = 0;
    lastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    $("#modal-close").focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]") || e.target === modal) closeModal();
  });
  $("#modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });

  /* ================= 系统减少动态 ================= */
  var motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  if (motionQuery && motionQuery.matches) showStage();
  if (motionQuery && motionQuery.addEventListener) {
    motionQuery.addEventListener("change", function (event) {
      if (event.matches) showStage();
    });
  }

  // 手机端栏目入口：点击时先显示对应人物状态图再打开弹窗
  document.querySelectorAll(".mobile-nav button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.dataset.ticket;
      setState(key, "focus", true);
      setTimeout(function () { setState(key, "focus", false); }, 420);
      openModal(key);
    });
  });
})();
