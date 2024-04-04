import hljs from "highlight.js";
import MardownIt from "markdown-it";
// import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const mdit = MardownIt({
    html: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return ""; // use external default escaping
    },
}).use(require("@iktakahiro/markdown-it-katex"), {
    strict: false,
    throwOnError: false,
});

// Remember the old renderer if overridden, or proxy to the default renderer.
const link_open_default =
    mdit.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

mdit.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // Add a new `target` attribute, or replace the value of the existing one.
    tokens[idx].attrSet("target", "_blank");
    // tokens[idx].attrSet("data-pdf-page-count", "12333");

    // Pass the token to the default renderer.
    return link_open_default(tokens, idx, options, env, self);
};

function find_article(doi: string, src: string) {
    const lines = src.split("\n");
    let start_idx = -1;
    let end_idx = -1;
    for (let [idx, ln] of lines.entries()) {
        ln = ln.trim();
        if (ln.substring(1).startsWith(doi)) {
            start_idx = idx;
        }
        if (start_idx !== -1) {
            if (ln === "") {
                end_idx = idx;
                break;
            }
        }
    }
    if (start_idx === -1) {
        return [`Article ${doi} not found`];
    }
    if (end_idx === -1) {
        end_idx = lines.length;
    }

    return lines.slice(start_idx, end_idx);
}

export function render_md(md: string, name: string, extra_info: { articles_index_src: string }) {
    const lines = md.split("\n");
    const new_lines: string[] = [];
    for (const ln of lines) {
        if (ln.startsWith("article:")) {
            const doi = ln.substring(8);
            const article_info = find_article(doi, extra_info.articles_index_src);
            new_lines.push(...article_info);
        } else {
            new_lines.push(ln);
        }
    }

    let html = mdit.render(new_lines.join("\n"));
    html = html + '<div style="height:100vh"/>';
    return html;
}

function render_test() {
    const md_src =
        "T0：吴华强、菲力浦王、mengfanchang、jjyang\n\nT0.5：xiaqiangfei、IBM 系列、LuWeiD、Lemini（米兰理工）\n\nT1：杨玉超、唐建石、张峰（微电子所）、黄茹、刘明\n\n# 吴华强\n\nHuaqiang Wu\n\n[ResearchGate](https://www.researchgate.net/profile/Huaqiang-Wu)\n\n[IEEE Author](https://ieeexplore.ieee.org/author/38239733500)\n\n[Google Scholar](https://scholar.google.com/citations?user=peOFy2oAAAAJ&hl=zh-CN)\n\nPapers\n\narticle:10.1038/s41586-020-1942-4\n\n# 张海涛\n\n[智能制造与数据科学实验室](http://imds.aia.hust.edu.cn/yqsb/jqrxtmp.htm)\n\n[Scopus: Zhang, Haitao](https://www.scopus.com/authid/detail.uri?authorId=55854159200#)\n\n[Github: HAIRLAB](https://github.com/HAIRLAB)\n\n[10.1109/TNNLS.2020.3049056](../res-6/An-Efficient-Sparse-Bayesian-Learning-Algorithm-Based-on-Gaussian-Scale-Mixtures.pdf)\\nAn Efficient Sparse Bayesian Learning Algorithm Based on Gaussian-Scale Mixtures\n\n[10.1109/TNNLS.2021.3080980](../res-6/Visual-Navigation-and-Landing-Control-of-an-Unmanned-Aerial-Vehicle-on-a-Moving-Autonomous-Surface-Vehicle-via-Adaptive-Learning.pdf)\\nVisual Navigation and Landing Control of an Unmanned Aerial Vehicle on a Moving Autonomous Surface Vehicle via Adaptive Learning\n\n[10.1038/s41467-019-12490-1](../res-6/Data-driven-discovery-of-cyber-physical-systems.pdf)\\nData driven discovery of cyber physical systems\n\n## 卢仁智\n\n[教师个人呢主页](http://faculty.hust.edu.cn/lurenzhi/zh_CN/index.htm)\n\n-   2021 年 11 月起任华中科技大学人工智能与自动化学院副教授\n-   2019 年 11 月-2021 年 10 月在华中科技大学人工智能与自动化学院任讲师\n-   2014 年 9 月-2019 年 8 月在韩国汉阳大学电子系统工程系获得工学博士学位\n-   2010 年 9 月-2014 年 6 月在武汉科技大学信息科学与工程学院获得工学学士学位\n-   1991 年出生，湖北十堰人。\n\n[Deep Reinforcement Learning-Based Demand Response for Smart Facilities Energy Management](../res-6/Deep-Reinforcement-Learning-Based-Demand-Response-for-Smart-Facilities-Energy-Management.pdf)\n\n## 刘彬\n\n[Scopus: Liu, Bin](https://www.scopus.com/authid/detail.uri?authorId=57191202240)\n\n## 郑尧中\n\n本科 2016 年入学\n\n协作式神经动力学优化方法\n\n## 唐传聪\n\n无人艇集群协同控制\n\n## 丁佳宁\n\n## 蒋伟明\n\n## 20231128\n\nhttps://www.dji.com/cn/mobile/manifold\n\n大疆无人机 妙算 1\n\n1920x1080\n\n1. 算法计算量\n2. 接口\n\n# 洪弘\n\n南京理工大学，电子工程与光电技术学院，0810 信息与通信工程，博士生导师\n\n[导师简介](https://gsmis.njust.edu.cn/DsxxJsxx.aspx?EID=esfVGEI-zp3cRXshOUuEboKSJrS8YoOLGMX4rxUf9yM=)\n\n![](../res-5/snipping-20231213145343.png)\n\n## 黄帅铭\n\n学号 321104010184，2021 级博士\n\n[IEEE Author](https://ieeexplore.ieee.org/author/37088376163)\n\n![](../res-5/snipping-20231213145525.png)\n\n-   Article [Remote Measurement of Human Vital Signs Based on Joint-Range Adaptive EEMD](https://ieeexplore.ieee.org/abstract/document/9055212)\n\n# 其他\n\n曾志刚 华科\n\n苏众庆 [SU Research Group](https://www.polyu.edu.hk/researchgrp/shm/)";

    const extra_info = {
        articles_index_src:
            "[10.1126/scirobotics.abb6938](../res-6/A-memristor-based-hybrid-analog-digital-computing-platform-for-mobile-robotics.pdf)\nA memristor-based hybrid analog-digital computing platform for mobile robotics\n\n[10.1002/aisy.201900103](../res-6/A-Braitenberg-Vehicle-Based-on-Memristive-Neuromorphic-Circuits.pdf)\nA Braitenberg Vehicle Based on Memristive Neuromorphic Circuits\n\n[10.1038/s41565-018-0194-z](../res-6/Colloidal-nanoelectronic-state-machines-based-on-2D-materials-for-aerosolizable-electronics.pdf)\nColloidal nanoelectronic state machines based on 2D materials for aerosolizable electronics\n\n[10.1109/TNNLS.2020.3049056](../res-6/An-Efficient-Sparse-Bayesian-Learning-Algorithm-Based-on-Gaussian-Scale-Mixtures.pdf)\nAn Efficient Sparse Bayesian Learning Algorithm Based on Gaussian-Scale Mixtures\n\n[10.1109/TNNLS.2021.3080980](../res-6/Visual-Navigation-and-Landing-Control-of-an-Unmanned-Aerial-Vehicle-on-a-Moving-Autonomous-Surface-Vehicle-via-Adaptive-Learning.pdf)\nVisual Navigation and Landing Control of an Unmanned Aerial Vehicle on a Moving Autonomous Surface Vehicle via Adaptive Learning\n\n[10.1038/s41467-019-12490-1](../res-6/Data-driven-discovery-of-cyber-physical-systems.pdf)\nData driven discovery of cyber physical systems\n\n[10.48550/arXiv.1506.02438](../res-6/High-Dimensional-Continuous-Control-Using-Generalized-Advantage-Estimation.pdf)\nHigh-Dimensional Continuous Control Using Generalized Advantage Estimation\n\n[10.48550/arXiv.2009.04416](../res-6/Phasic-Policy-Gradient.pdf)\nPhasic Policy Gradient\n\n[10.48550/arXiv.1707.06347](../res-6/Proximal-Policy-Optimization-Algorithms.pdf)\nProximal Policy Optimization Algorithms\n\n[10.1038/s41928-023-01053-4](../res-6/A-full-spectrum-of-computing-in-memory-technologies.pdf)\nA full spectrum of computing-in-memory technologies\n\n[10.1109/TITS.2021.3054625](../res-6/Deep-Reinforcement-Learning-for-Autonomous-Driving-A-Survey.pdf)\nDeep Reinforcement Learning for Autonomous Driving: A Survey\n\n[10.1109/SOCDC.2010.5682900](../res-6/An-Area-Efficient-Temperature-Sensor-with-Software-Calibration-for-Mobile-Application.pdf)\nAn Area Efficient Temperature Sensor with Software Calibration for Mobile Application\n\n[10.1038/s41928-022-00886-9](../res-6/A-memristor-based-Bayesian-machine.pdf)\nA memristor-based Bayesian machine\n\n[10.1109/MSPEC.2018.8278135](../res-6/Not-your-Father-s-analog-computer.pdf)\nNot your Father's analog computer\n\n[10.1109/TITS.2019.2962338](../res-6/A-Survey-of-Deep-Learning-Applications-to-Autonomous-Vehicle-Control.pdf)\nA Survey of Deep Learning Applications to Autonomous Vehicle Control\n\n[10.1038/s41586-020-1942-4](../res-6/Fully-hardware-implemented-memristor-convolutional-neural-network.pdf)\nFully hardware-implemented memristor convolutional neural network\n\n[10.1038/s41928-017-0002-z](../res-6/Analogue-signal-and-image-processing-with-large-memristor-crossbars.pdf)\nAnalogue signal and image processing with large memristor crossbars\n\n[10.1038/s41928-020-00523-3](../res-6/In-situ-learning-using-intrinsic-memristor-variability-via-Markov-chain-Monte-Carlo-sampling.pdf)\nIn situ learning using intrinsic memristor variability via Markov chain Monte Carlo sampling\n\n[10.1146/annurev-control-060117-105157](../res-6/Planning-and-Decision-Making-for-Autonomous-Vehicles.pdf)\nPlanning and Decision-Making for Autonomous Vehicles\n\n[10.1016/j.biotechadv.2021.107739](../res-5/Using-machine-learning-approaches-for-multi-omics-data-analysis-A-review.pdf)\nUsing machine learning approaches for multi-omics data analysis: A review\n\n[10.1016/j.neunet.2020.07.035](../res-5/Memristor-based-LSTM-network-with-in-situ-training-and-its-applications.pdf)\nMemristor-based LSTM network with in situ training and its applications\n\n[10.1016/j.rser.2010.11.032](../res-5/A-review-of-solar-photovoltaic-technologies.pdf)\nA review of solar photovoltaic technologies\n\n[10.1016/j.rser.2011.01.004](../res-5/Review-of-photovoltaic-technologies.pdf)\nReview of photovoltaic technologies\n\n[10.1038/s42256-019-0089-1](../res-5/In-situ-training-of-feed-forward-and-recurrent-convolutional-memristor-networks.pdf)\nIn situ training of feed-forward and recurrent convolutional memristor networks\n\n[10.1109/EDSSC.2018.8487179](../res-5/Design-of-CMOS-memristor-Circuits-for-LSTM-architecture.pdf)\nDesign of CMOS-memristor Circuits for LSTM architecture\n\n[10.1140/epjst/e2019-900046-x](../res-5/A-survey-on-LSTM-memristive-neural-network-architectures-and-applications.pdf)\nA survey on LSTM memristive neural network architectures and applications\n\n[10.1038/s42256-018-0001-4](../res-5/Long-short-term-memory-networks-in-memristor-crossbar-arrays.pdf)\nLong short-term memory networks in memristor crossbar arrays\n\n[10.1109/TSMC.2019.2906098](../res-5/Memristive-LSTM-Network-for-Sentiment-Analysis.pdf)\nMemristive LSTM Network for Sentiment Analysis\n\n[10.1109/APCCAS.2018.8605649](../res-5/Memristive-LSTM-network-hardware-architecture-for-time-series-predictive-modeling-problems.pdf)\nMemristive LSTM network hardware architecture for time-series predictive modeling problems\n\n[10.1007/s00521-012-0954-x](../res-5/Multistability-of-periodic-delayed-recurrent-neural-network-with-memristors.pdf)\nMultistability of periodic delayed recurrent neural network with memristors\n\n[10.1007/s10470-018-1180-y](../res-5/A-memristor-based-long-short-term-memory-circuit.pdf)\nA memristor-based long short term memory circuit\n\n[10.1038/s41586-023-06734-w](../res-5/An-autonomous-laboratory-for-the-accelerated-synthesis-of-novel-materials.pdf)\nAn autonomous laboratory for the accelerated synthesis of novel materials\n\n[10.1038/s41586-023-06735-9](../res-5/Scaling-deep-learning-for-materials-discovery.pdf)\nScaling deep learning for materials discovery\n\n[10.1021/jacs.3c05819](../res-5/ChatGPT-Chemistry-Assistant-for-Text-Mining-and-the-Prediction-of-MOF-Synthesis.pdf)\nChatGPT Chemistry Assistant for Text Mining and the Prediction of MOF Synthesis\n\n[10.1016/j.jpdc.2013.08.004](../res-5/Design-and-analysis-of-crossbar-architecture-based-on-complementary-resistive-switching-non-volatile-memory-cells.pdf)\nDesign and analysis of crossbar architecture based on complementary resistive switching non-volatile memory cells\n\n[10.48550/arXiv.1908.05033](../res-5/Differentiable-Soft-Quantization-Bridging-Full-Precision-and-Low-Bit-Neural-Networks.pdf)\nDifferentiable Soft Quantization: Bridging Full-Precision and Low-Bit Neural Networks\n\n[10.1109/TED.2013.2246791](../res-5/A-Comprehensive-Crossbar-Array-Model-With-Solutions-for-Line-Resistance-and-Nonlinear-Device-Characteristics.pdf)\nA Comprehensive Crossbar Array Model With Solutions for Line Resistance and Nonlinear Device Characteristics\n\n[10.1109/IJCNN.2011.6033651](../res-5/Analysis-of-a-Memristor-based-1T1M-Crossbar-Architecture.pdf)\nAnalysis of a Memristor based 1T1M Crossbar Architecture\n\n[10.1002/cta.2399](../res-5/Analysis-of-the-row-grounding-technique-in-a-memristor-based-crossbar-array.pdf)\nAnalysis of the row grounding technique in a memristor-based crossbar array\n\n[10.1142/S021812741103012X](../res-5/Memristor-Hamiltonian-Circuits.pdf)\nMemristor Hamiltonian Circuits\n\n[10.1109/TCSI.2017.2714101](../res-5/Modeling-and-Analysis-of-Passive-Switching-Crossbar-Arrays.pdf)\nModeling and Analysis of Passive Switching Crossbar Arrays\n\n[10.1109/MRA.2012.2206474](../res-5/Multirotor-Aerial-Vehicles-Modeling-Estimation-and-Control-of-Quadrotor.pdf)\nMultirotor Aerial Vehicles Modeling, Estimation, and Control of Quadrotor\n\n[10.48550/arXiv.2106.08295](../res-5/A-White-Paper-on-Neural-Network-Quantization.pdf)\nA White Paper on Neural Network Quantization",
    };

    const out = render_md(md_src, "123", extra_info);
    console.log(out);
}
