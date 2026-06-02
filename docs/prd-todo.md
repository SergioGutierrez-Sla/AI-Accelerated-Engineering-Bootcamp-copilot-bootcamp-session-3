# Product Requirements Document (PRD) - TODO App Upgrade

## 1. Overview

We are upgrading the basic TODO app so users can organize work with lightweight scheduling and prioritization without increasing system complexity. The primary goal is to deliver a simple, teachable MVP that adds optional due dates, task priority, and date-based filters while keeping storage local and avoiding backend changes. The follow-up phase can improve usability further with stronger visual treatment for overdue items and more advanced sorting behavior.

---

## 2. MVP Scope

- Add an optional `dueDate` field for each task.
- Store `dueDate` in ISO `YYYY-MM-DD` format.
- Add a `priority` field with allowed values `P1`, `P2`, and `P3`.
- Default `priority` to `P3` when a value is not provided.
- Keep `title` as a required field.
- Ignore invalid `dueDate` values and treat them as absent.
- Add filter views for `All`, `Today`, and `Overdue`.
- Keep storage local only.
- Do not introduce backend or external storage changes.

---

## 3. Post-MVP Scope

- Visually highlight overdue tasks so they stand out.
- Add task sorting with this order: overdue tasks first, then priority from `P1` to `P3`, then due date ascending, with tasks that have no due date shown last.

---

## 4. Out of Scope

- Notifications.
- Recurring tasks.
- Multi-user support.
- Keyboard navigation and additional accessibility enhancements beyond the current baseline.
- External storage.
- Backend changes.