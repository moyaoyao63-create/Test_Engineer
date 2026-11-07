/* 莫瑶 / PORTFOLIO —— 内容根据用户提供的简历-hlwai.docx 整理，未添加虚构信息 */
(function () {
  "use strict";

  /* ================= 简历数据 ================= */
  var DATA = {
    projects: {
      no: "01", en: "PROJECTS", title: "项目经历",
      html:
        entry("智能座舱测试（Android App 端）", "2025年10月 ~ 2026年3月", "测试工程师",
          "Python · Flask · Pandas · Dify · USBCAN · ADB · Monkey",
          "<b>项目描述：</b>面向工业车载终端 Android 座舱显示系统，负责整机软硬件联调及系统测试，覆盖应用层、Android 系统层、CAN 总线通信及底层 ECU / IO 模块。<br><b>测试类型：</b>功能测试 · UI 测试 · CAN 通信测试 · 性能测试 · 稳定性测试 · 回归测试。",
          [
            "<b>AI 辅助测试提效：</b>基于 Dify 搭建测试用例生成工作流，完成平台侧需求输入、工作流 API 调用封装，测试用例输出效率提升 70%。",
            "<b>CAN 通信自动化测试工具开发：</b>基于 Python 开发 CAN 测试辅助工具链，包含需求文档解析与标准化转换、CAN 报文批量生成及硬件通信收发监控三个模块，CAN 通信测试效率提高 80%。",
            "<b>问题复现与定位：</b>针对屏幕崩溃问题难以稳定复现的痛点，搭建自动化脚本仿真环境，将复现时间由 5 小时缩短至 30 分钟，协助开发定位问题根因并完成修复验证。",
            "<b>测试质量保障：</b>累计设计并执行测试用例 600+ 条，发现并推动修复缺陷 160+ 个，保障多个版本测试交付质量。",
            "<b>工作职责：</b>负责 Android 终端软件及软硬件集成测试，覆盖基本功能、UI、CAN 通信（使用 USBCAN 等工具验证）、性能、稳定性以及可靠性测试（包括高低温、盐雾等）。",
            "<b>异常场景测试：</b>针对音乐播放中来电、OTA 升级中断电、低功耗切换、断电及唤醒恢复等场景开展异常注入测试，验证系统在多任务并发及异常状态切换下的恢复能力。",
            "<b>稳定性测试：</b>使用 Monkey 构建高频事件注入脚本，结合高负载 CAN 数据运行，监控 Crash、ANR、内存异常等问题，并结合 ADB 日志进行分析定位。",
            "<b>测试经验沉淀：</b>全程跟进版本质量，结合多版本测试实践，总结测试用例设计方法及常见问题场景，输出测试经验文档并开展内部分享，推动团队测试标准及用例设计规范化。"
          ]) +
        entry("物联网平台（Web 端）", "2025年4月 ~ 2025年9月", "测试工程师",
          "Python · Requests · Pytest · Allure · Postman · JMeter · SQL",
          "<b>项目描述：</b>面向清扫车、叉车、牵引车等工程车辆的物联网运营管理平台，覆盖车辆类型、设备管理、远程锁机、实时定位、历史轨迹、地理围栏、视频监控、告警中心、通知中心、OTA 升级等功能，实现设备状态监测、指令下发、异常告警和运维闭环。<br><b>测试类型：</b>功能测试 · 接口测试 · 数据库测试 · 性能测试 · 接口自动化测试 · 异常场景测试。",
          [
            "<b>业务模块测试：</b>负责车辆类型管理、设备管理、告警规则功能模块测试，根据业务流程设计并执行功能、接口、数据库及异常场景测试用例 300+ 条，覆盖车辆类型管理、设备管理、告警规则等核心业务流程。",
            "<b>接口与数据校验：</b>使用 Postman 完成车辆类型、设备管理、告警规则等模块的接口测试，验证接口参数校验、业务逻辑及异常处理；编写 SQL 语句对关键数据进行校验，验证前后端及数据库数据的一致性。",
            "<b>性能测试：</b>使用 JMeter 完成关键接口性能测试，通过配置线程组、参数化及断言等方式模拟并发请求，验证接口在并发场景下的响应及稳定性表现。",
            "<b>接口自动化：</b>基于 Python + Requests + Pytest 搭建接口自动化测试框架，完成 30+ 个核心业务接口自动化脚本编写，提升回归测试效率约 60%，支撑多个版本稳定上线。",
            "<b>测试报告：</b>集成 Allure 生成可视化测试报告，支持测试结果统计、失败用例定位及历史结果查看。"
          ])
    },

    experience: {
      no: "02", en: "EXPERIENCE", title: "工作经历",
      html:
        '<div class="m-info">' +
          '<div><b>年龄 / 经验</b>24 岁 · 工作年限 2 年</div>' +
          '<div><b>求职意向</b>测试工程师</div>' +
        "</div>" +
        entry("湖南省鼎立电气科技有限公司", "2024年3月 ~ 2026年4月", "测试工程师", "", "",
          [
            "<b>车载终端质量保障：</b>独立负责 Android 车载显示终端全生命周期质量保障，支撑多个战略级客户项目成功交付。",
            "<b>AI 测试提效与工具建设：</b>参与 AI 测试提效工具开发与平台化建设，完成 AI 用例生成工作流和 API 调用封装，并根据需求开发 CAN 协议转换、CAN 数据构造及自动化发送等 Python 脚本。",
            "<b>质量保障前移：</b>主动梳理历史质量痛点，构建历史缺陷库与专项自测 CheckList，推动质量保障前移（测试左移），赋能研发人员在编码阶段开展精准自测，同类缺陷重复发生率降低 30%。"
          ]) +
        entry("专业技能", "", "", "", "",
          [
            "<b>AI 辅助测试：</b>熟练使用 Codex、ChatGPT、Dify 等 AI 工具辅助测试工作，具备 AI 测试提效实践经验；能够利用大模型进行需求分析、测试用例设计、测试数据生成及自动化脚本编写，提升测试效率。",
            "<b>接口自动化测试：</b>熟悉 Python + Requests + Pytest + Allure 接口自动化测试技术栈，具备接口自动化框架搭建、测试脚本编写及维护经验；能够结合 AI 辅助分析接口文档，生成测试用例及自动化代码。",
            "<b>接口功能测试：</b>熟练使用 Postman 进行接口测试，能够根据接口文档设计测试用例，完成接口参数校验、异常场景测试、Token 鉴权、接口关联及多接口业务流程测试。",
            "<b>抓包与网络测试：</b>熟悉 Fiddler 抓包工具，能够抓取 HTTP 请求及响应报文，模拟网络延迟等场景。",
            "<b>性能测试：</b>熟悉 JMeter 性能测试工具，能够编写接口测试脚本，配置线程组、参数化、关联提取及断言，完成基础并发测试，并分析响应时间、吞吐量及错误率等性能指标。",
            "<b>移动端测试：</b>熟悉 Appium 移动端自动化测试及 Monkey 稳定性测试，掌握常用 ADB 命令，能够进行日志抓取、应用安装卸载、设备调试及 CPU、内存等基础性能数据采集。",
            "<b>数据库测试：</b>熟悉 MySQL 常用 SQL 语句，能够使用 Navicat 进行数据增删改查、多表关联查询及数据校验，具备通过数据库辅助验证业务数据一致性的能力。",
            "<b>Linux 与环境部署：</b>熟悉 Linux 常用命令，能够进行测试环境部署、日志查看、进程管理及基础问题排查。"
          ]) +
        entry("自我评价", "", "", "", "",
          [
            "具备良好的沟通表达能力和团队协作意识，能够主动与团队成员沟通协作，及时反馈并推动问题解决。",
            "学习能力较强，善于主动学习新技术、新工具，并能够结合实际工作快速掌握，具备较强的自我驱动力。",
            "工作认真负责，责任心强，具有良好的抗压能力，能够合理安排工作优先级，按时完成工作目标。",
            "具备较强的问题分析和总结能力，善于复盘工作中的问题，主动总结经验并优化工作方法。"
          ])
    },

    github: {
      no: "03", en: "OPEN SOURCE", title: "GitHub 项目",
      html:
        repo(
          "个人简历网站",
          "基于 HTML、CSS 与 JavaScript 构建的交互式个人简历网站，通过响应式布局和弹窗信息卡片展示项目经历、工作经历、GitHub 项目及教育经历。",
          "HTML · CSS · JavaScript · Cloudflare",
          "https://github.com/moyaoyao63-create/Test_Engineer"
        ) +
        repo(
          "CAN 数据清洗与转换工具",
          "支持导入 Excel / XLS / CSV 协议文件，按约定字段完成 CAN 数据清洗、转换与 TXT 文件生成，方便后续报文测试和总线发送。",
          "Python · Tkinter · Pandas · Excel / CSV",
          "",
          "./assets/can-protocol-converter.png",
          "协议文件转 TXT 工具截图"
        ) +
        repo(
          "CAN 批量数据生成工具",
          "支持配置帧 ID、文件名、镜像数据、跳跃模式、标准帧 / 扩展帧及多列联合模式，批量生成 CAN 测试数据。",
          "Python · Web UI · CAN 数据构造",
          "",
          "./assets/can-data-generator.png",
          "CAN 批量数据生成工具截图"
        ) +
        repo(
          "CAN 总线监控工具",
          "支持 TXT、CSV、CAN 文件批量加载与发送，提供设备连接、开始 / 停止监控、收发计数及 CAN 报文实时展示能力。",
          "Python · USBCAN · CAN 总线监控",
          "",
          "./assets/can-bus-monitor.png",
          "CAN 总线监控工具截图"
        )
    },

    skills: {
      no: "04", en: "EDUCATION", title: "教育经历及奖项",
      html:
        entry("教育经历", "", "", "", "<b>院校：</b>湖南财政经济学院（一本）<br><b>专业：</b>软件学院 · 计算机科学与技术 · 全日制本科<br><b>时间 / 地点：</b>2022年9月 ~ 2024年6月 · 长沙<br><b>成绩：</b>绩点 3.97 / 4.0 · 省级优秀毕业生", []) +
        entry("奖项证书", "", "", "", "",
          [
            "英语六级 564 分（CET-6） · 软考中级 · 计算机二级 · C1 驾驶证",
            "省级优秀毕业生 · 校级优秀毕业生 · 国家励志奖学金（两次） · 创新创业大赛省级奖项"
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

  function repo(name, desc, stack, url, image, alt) {
    var h = '<section class="m-entry"><div class="m-entry-title"><h3>' + name + "</h3></div>";
    h += '<p class="m-desc">' + desc + "</p>";
    if (stack) h += '<p class="m-stack"><b>技术栈：</b>' + stack + "</p>";
    if (image) {
      h += '<figure class="repo-shot"><img src="' + image + '" alt="' + alt + '" loading="lazy" decoding="async" /><figcaption>' + alt + '</figcaption></figure>';
    }
    if (url) {
      h += '<a class="entry-action" href="' + url + '" target="_blank" rel="noreferrer">查看仓库 ↗</a>';
    } else {
      h += '<span class="entry-action entry-action-disabled">项目地址待补充</span>';
    }
    return h + "</section>";
  }

  /* ================= 工具 ================= */
  function $(sel) { return document.querySelector(sel); }

  /* ================= 人物状态图切换 ================= */
  var stateImages = {};
  var hoverKey = null;
  var focusKey = null;

  function loadStateImage(key) {
    var image = stateImages[key];
    if (!image || image.getAttribute("src")) return;
    image.src = image.dataset.src;
  }

  document.querySelectorAll("[data-state-image]").forEach(function (img) {
    stateImages[img.dataset.stateImage] = img;
    img.addEventListener("error", function () {
      if (img.dataset.fallback && !img.dataset.fallbackUsed) {
        img.dataset.fallbackUsed = "true";
        img.src = img.dataset.fallback;
        return;
      }
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
    if (on) loadStateImage(key);
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
