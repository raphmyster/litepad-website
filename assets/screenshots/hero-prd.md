# TaskFlow — Product Requirements Document

**Author:** Claude | **Date:** March 19, 2026 | **Status:** Draft

---

## Overview

TaskFlow is a lightweight project tracker built for solo founders and small teams who need structure without overhead. It replaces the spreadsheet-and-sticky-notes workflow with a single dashboard that surfaces what matters today.

## Target User

Independent builders shipping side projects or early-stage products. They use AI tools daily, move fast, and don't want to configure Jira for a two-person team.

## Core Features

| Feature | Priority | Description |
|---------|----------|-------------|
| Daily Focus View | P0 | Shows today's tasks pulled from all projects, sorted by urgency |
| Quick Capture | P0 | Global shortcut to add a task from anywhere — title, project, priority |
| Project Boards | P1 | Kanban-style boards per project with drag-and-drop |
| Weekly Review | P1 | Auto-generated summary of completed work and carry-over items |
| Integrations | P2 | GitHub commits auto-link to tasks, Slack notifications |

## MVP Scope

The first release focuses on **Daily Focus View** and **Quick Capture** only. No integrations, no team features, no mobile app.

### What's In

- Single-user task management
- Three task states: To Do, In Progress, Done
- Project grouping with color labels
- Markdown notes on each task
- Local-first storage with optional sync

### What's Out

- Collaboration and shared boards
- Calendar view
- Time tracking
- API access
