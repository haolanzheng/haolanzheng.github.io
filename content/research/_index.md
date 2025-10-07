---
title: Research
summary: My research interests and current projects
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
    id: projects
    content:
      title: Current Projects
      subtitle: ''
      text: ''
      page_type: project
      count: 1
      filters:
        folders:
          - project
        featured_only: true
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        exclude_drafts: true
      
    design:
      columns: '2'
      view: showcase
      flip_alt_rows: false

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
        featured_only: true
    design:
      columns: '2'
      view: card

---