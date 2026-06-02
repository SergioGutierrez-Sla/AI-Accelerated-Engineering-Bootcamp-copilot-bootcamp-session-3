# Cloud Architecture Overview

This monorepo contains a browser-based React frontend, an Express backend API, and an in-memory SQLite store used by the backend for task data.

```mermaid
flowchart LR
    user[User]
    browser[Browser]

    subgraph monorepo[Monorepo]
        frontend[React Frontend\npackages/frontend]
        api[Express API\npackages/backend]
        store[(In-Memory SQLite Store)]
    end

    user --> browser
    browser --> frontend
    frontend -->|HTTP /api/tasks| api
    api -->|CRUD task data| store
```

## Create TODO Sequence

```mermaid
sequenceDiagram
    actor User
    participant Frontend as React Frontend
    participant API as Express API
    participant Store as In-Memory SQLite Store

    User->>Frontend: Enter task details and submit form
    Frontend->>API: POST /api/tasks
    Note over Frontend,API: JSON body includes title, description, and optional due_date
    API->>API: Validate required title
    API->>Store: Insert new task record
    Store-->>API: Return created task
    API-->>Frontend: 201 Created + task payload
    Frontend->>API: GET /api/tasks
    API->>Store: Query task list
    Store-->>API: Return tasks
    API-->>Frontend: 200 OK + tasks array
    Frontend-->>User: Show updated TODO list
```