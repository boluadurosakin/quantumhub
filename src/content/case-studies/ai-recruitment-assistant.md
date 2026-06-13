---

title: AI Recruitment Assistant
description: Automated CV screening workflow that analyzes resumes, scores candidates, and delivers recruiter-ready insights through AI.
stack: ["n8n", "OpenAI API", "Tally Forms", "Gmail", "Supabase"]
role: AI Automation & Systems Engineer
timeline: 1 Week
featured: true
--------------

## Overview

The AI Recruitment Assistant is an intelligent recruitment automation workflow designed to reduce the time spent manually reviewing resumes. Instead of requiring recruiters to evaluate every application individually, the system automatically processes submitted CVs, extracts relevant information, generates candidate assessments, and delivers recruiter-ready insights.

Built using workflow automation and large language models, the solution demonstrates how hiring operations can be streamlined without developing a custom frontend application.

## Problem

Recruiters often spend significant time reviewing resumes, comparing candidates, and identifying qualified applicants.

As application volumes increase, manual screening becomes slower, less consistent, and increasingly difficult to scale. Smaller organizations frequently rely on spreadsheets, email chains, and manual review processes because enterprise ATS solutions are often expensive and overly complex.

The objective was to create a lightweight recruitment workflow capable of evaluating candidates automatically while maintaining a simple and accessible submission experience.

## Solution Architecture

The system combines form-based data collection, workflow automation, AI analysis, and automated communication.

Applicants submit their CV through a Tally Form. The submission triggers an n8n workflow that processes the uploaded document, extracts relevant information, analyzes candidate suitability using OpenAI, and generates structured recruiter insights.

The workflow automates repetitive screening activities while preserving human decision-making for final hiring outcomes.

### Architecture Flow

Candidate → Tally Form → n8n Workflow → CV Extraction → OpenAI Analysis → Candidate Scoring → Recruiter Summary → Gmail Notifications

## Workflow Design

1. Candidate submits a CV through Tally Forms.
2. Submission triggers an n8n automation workflow.
3. Resume file is retrieved and processed.
4. Resume content is extracted and structured.
5. OpenAI evaluates the candidate profile.
6. Candidate strengths and weaknesses are identified.
7. A suitability score is generated.
8. Recruiter-ready insights are produced.
9. Gmail sends an acknowledgement email.
10. Recruiters receive a structured evaluation report.

## AI Components

OpenAI is used to transform unstructured resume content into actionable recruitment insights.

The model performs:

* Resume analysis
* Candidate scoring
* Skill identification
* Experience evaluation
* Strength assessment
* Weakness assessment
* Recruitment recommendations

## Engineering Decisions

A deliberate decision was made to avoid building a custom frontend application.

Instead, Tally Forms was used as the candidate submission layer. This significantly reduced development complexity, accelerated deployment, and allowed engineering effort to focus on workflow design and AI processing.

Key technologies include:

* Tally Forms
* n8n
* OpenAI API
* Gmail
* Supabase

## Results

The workflow transformed a manual recruitment process into an automated screening pipeline.

Key outcomes include:

* Eliminated initial manual CV review
* Reduced recruiter screening workload
* Generated consistent candidate evaluations
* Produced recruiter-ready candidate summaries
* Improved hiring process efficiency
* Created a scalable recruitment workflow

## Business Impact

The solution demonstrates how organizations can implement AI-assisted recruitment processes without investing in expensive ATS platforms.

By combining workflow automation with large language models, the system reduces operational overhead while improving hiring efficiency and evaluation consistency.

## Key Takeaways

Effective AI systems are not defined by complex interfaces but by the value they create.

By combining workflow automation, AI-powered analysis, and simple data collection mechanisms, organizations can automate high-volume operational processes quickly, cost-effectively, and at scale.
