---
title: Research
summary: My research interests and current projects
date: 2025-10-06
type: landing

# turn off auto UI that can inject lists
show_related: false
backlinks: false
share: false

sections:
  - block: markdown
    content:
      title: Research Interests
      text: |
        - **Scientific Machine Learning (SciML)**: Operator Learning and fast PDE solvers via deep learning models
        - **Deep Learning**
        - **Numerical Analysis**
    design:
      columns: '1'
      view: compact
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: collection
    id: projects
    content:
      title: Recent Projects
      text: ""
      page_type: project            # <- only projects
      count: 5
      filters:
        folders: ["project"]        # <- only from /content/project
        featured_only: false
        exclude_drafts: true
    design:
      columns: '2'
      view: card

  - block: collection
    id: publications
    content:
      title: Recent Publications
      text: ""
      page_type: publication
      count: 5
      filters:
        folders:
          - publication
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        exclude_drafts: true
    design:
      columns: '2'
      view: card

---