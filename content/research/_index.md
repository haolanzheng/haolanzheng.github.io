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
        My research focuses on:
        
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
      # Page type to display. E.g. project.
      page_type: project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` in `params.yaml`)
      
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      view: showcase
      # For Showcase view, flip alternate rows?
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