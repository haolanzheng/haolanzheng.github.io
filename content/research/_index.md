---
title: Research
summary: My research interests and recent publications
date: 2025-10-06
type: landing

# Note: `&` is a YAML anchor allowing you to reuse the `sections` value later with `*sections`
sections: &sections
  - block: collection
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
    id: current-project
    content:
      title: Current Project
      page_type: project
      count: 1
      filters:
        folders:
          - project
        featured_only: true
        exclude_drafts: true
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false

  - block: markdown
    id: publications-link
    content:
      title: Publications
      text: |
        See the full list of my publications here: [View Publications »](/publication/)
    design:
      columns: '1'

---