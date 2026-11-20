# Thomas Howard

**Head of Applied AI · Agentic & Voice AI · RAG · Predictive ML · AI Evaluation & Safety**

I build **production LLM agents and the controls that make them safe to ship**, with a focus on healthcare voice AI, agentic systems, retrieval-augmented generation (RAG), explainable predictive ML, and evaluation.

I'm Head of Applied AI at **Snap eHealth**, following four years building its AI platform. I own Applied AI strategy, product architecture, and engineering delivery, and stay hands-on in **Python, TypeScript, APIs, and healthcare integrations**.

My work spans **Python, scikit-learn, TypeScript, Go, APIs, distributed systems, AWS (Bedrock, ECS Fargate, Terraform), and previously Kubernetes**. I'm especially interested in combining traditional predictive ML with LLM-powered agents so each component does the work it is best suited to do.

## BusyNow

<a href="https://busynow.app/">
  <img src="assets/busynow-logo-panel.svg" alt="BusyNow" width="520">
</a>

**Founder of BusyNow, helping people see what’s busy nearby before heading out.**

It helps reduce the guesswork of choosing a place, while clearly showing when crowd information is recent, historical, or unavailable.

[Visit BusyNow](https://busynow.app/) · [About my work on BusyNow](https://thomashoward.dev/projects/busynow/)

## Applied AI engineering

### Agentic systems and LLM applications

At Snap, I lead **Sally**, an LLM-powered healthcare voice agent grounded in live practice-management and EHR data through structured tool calls, supporting real-time browser and phone conversation, interruption handling, tool execution, background analysis, and structured visit-brief extraction. I designed the boundaries between model behavior and **deterministic consent, identity verification, authorization, and tool access**, and built scenario-based evaluation harnesses covering conversational behavior, structured outputs, safety rules, and failure handling.

I also built **retrieval-augmented generation (RAG)** into Snap's **Health Risk Assessment (HRA)** and **Personalized Prevention Plan (PPPS)** workflows, grounding generated risk assessments and prevention recommendations in retrieved patient data and supporting evidence, with traceable sources.

At Snap, I also architected **Symphony**, a governed system coordinating **10 specialized engineering agents** across implementation, testing, review, debugging, and remediation. It uses isolated execution, signed leases, tool permissions, cost accounting, and audit trails; **humans approve every merge and deploy**.

Key design concerns include:

- **Orchestration and tool use:** agent handoffs, scoped permissions, isolated execution, and controlled access to external systems.
- **State and reliability:** durable execution, cancellation, recovery paths, and bounded autonomous behavior.
- **Evaluation:** structured evidence, scenario tests, deterministic verification gates, and traceable results.
- **Safety and governance:** cost limits, auditability, human approval, and explicit authority over code merges and production changes.

### Predictive machine learning

At Snap, I designed and implemented **Referral Intelligence**, a standalone **Python and scikit-learn** ranking service that recommends physicians for patient referrals. It combines clinical quality, outcomes, eligibility, availability, and proximity, and is built to be explainable rather than a black box:

- Evidence normalization and missing-data handling across provider sources.
- **Confidence scoring** and plain-language explanations for every recommendation.
- **Abstention** when the available evidence does not support a reliable recommendation.
- Validation on synthetic evaluation scenarios before real-world data.

**Status:** the core service and its evaluation framework are implemented; production integration and validation against real-world claims data are underway.

At BusyNow, I'm developing predictive ML to **estimate venue busyness**, so people can decide where and when to go. It is in active development and not yet serving predictions in production.

I'm also interested in how predictive models become **tools within agentic workflows**: a trained model computes a probability, an agent retrieves context and coordinates tools, and deterministic policies govern what can happen next.

### AI evaluation and engineering intelligence

I have led AI-assisted engineering and reliability work including **Amazon Bedrock LLM evaluations, goldset reference datasets, guardrails**, a **180-scenario release gate for Sally run 20 times per scenario (3,600/3,600 passes)**, and an **AI-driven test-intelligence system** that turns product stories and defects into test requirements, API tests, and targeted retests.

My MLOps and LLMOps practice centers on eval-gated releases, reproducible model and ranking evaluations, synthetic test datasets, version-controlled models and services, drift controls, and cost limits. I've also worked on specialized QA and SRE agents, structured findings, deterministic triage, verification gates, and human escalation. These systems reflect an engineering principle I apply across AI products:

> **Models can propose and reason. Reliable software must still verify, constrain, observe, and account for what happens.**

## Selected systems and projects

| System | Engineering focus |
| --- | --- |
| **[BusyNow](https://busynow.app/)** | Software product that helps people choose nearby coffee shops, restaurants, and bars by comparing crowd information, opening hours, and distance. Busyness prediction and the Concierge voice agent are in development. |
| **Sally — Conversational Healthcare AI** | LLM orchestration, real-time voice, tool execution, structured extraction, consent, evaluation, and reliability. |
| **Symphony — Autonomous Engineering** | Multi-agent orchestration, isolated workers, execution boundaries, verification, cost controls, and human authorization. |
| **RAG for HRA & PPPS** | Retrieval-augmented generation that grounds clinical risk assessments and prevention plans in retrieved patient data and evidence, with traceable sources. |
| **Referral Intelligence** | Explainable Python and scikit-learn provider ranking with confidence scoring, abstention, and deterministic safeguards for healthcare referral workflows. |
| **AI Test Intelligence** | AI-generated test requirements and API tests, defect analysis, targeted retests, and evidence-driven quality engineering. |

Much of my healthcare and autonomous-engineering work is proprietary to Snap; these descriptions are architectural overviews, not links to company source code. I use independent projects to demonstrate methods and implementation decisions publicly.

## What I'm building next

My public engineering work is increasingly centered on two complementary areas:

1. **Predictive ML with defensible evaluation:** train/test design, interpretable baselines, model comparison, probability calibration, and trustworthy inference.
2. **Stateful agentic applications:** graph-based workflows, tool calling, memory and context, evaluation harnesses, recovery, and human-in-the-loop controls. I'm exploring **LangChain and LangGraph** for this work, without treating framework adoption as a substitute for sound system design.

The longer-term goal is to connect them: **predictive models provide evidence; agents coordinate actions; deterministic systems enforce constraints.**

## Engineering background

I remain a hands-on builder alongside my leadership work. At Snap, I led delivery of **four production applications in four months** across enterprise healthcare, workflow automation, and patient engagement. Previously, at FBS, I led a **12-person engineering organization for seven years** and reduced regression cycle time by **approximately 90%** through an automation-first transformation, earlier validation, and repeatable release controls.

My engineering background includes distributed systems, APIs, cloud infrastructure, and production reliability. I apply that foundation to **building, evaluating, and operating AI systems**—with a particular focus on agentic applications and predictive machine learning.

## Writing

I write about the systems I'm building and the engineering decisions behind them: **LLM architectures, agent orchestration, AI evaluation, predictive modeling, failure modes, production safeguards, and technical leadership**.

**Website:** [thomashoward.dev](https://thomashoward.dev/)

## Connect

[**LinkedIn**](https://www.linkedin.com/in/thomashow/) · [**GitHub**](https://github.com/warehousegang) · [**Website**](https://thomashoward.dev/) · [**Résumé**](https://thomashoward.dev/resume/)
