---
title: Research
summary: My research interests and current projects
date: 2025-10-06
type: landing

# Note: `&` is a YAML anchor allowing you to reuse the `sections` value later with `*sections`
sections: &sections
  - block: hero
    content:
      title: Research
      text: |
        Welcome to my research page. Here you can find information about my current research interests, ongoing projects, and publications.
    design:
      background:
        gradient_start: '#4bb4e3'
        gradient_end: '#2b94c3'
        text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: collection
    content:
      title: Research Interests
      text: |
        My research focuses on:
        
        - **Scientific Machine Learning (SciML)**: Physics-informed neural networks, neural operators
        - **Computational Physics**: Numerical methods for PDEs, multiscale modeling
        - **Deep Learning**: Neural network architectures for scientific computing
        - **Applied Mathematics**: Mathematical modeling, optimization
        
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
      filter_default: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      filter_button:
        - name: All
          tag: '*'
        - name: Machine Learning
          tag: Machine Learning
        - name: Physics
          tag: Physics
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

  - block: markdown
    content:
      title: Collaborations
      text: |
        I am always interested in collaborative research opportunities. If you have projects that align with my research interests, please feel free to reach out.
        
        **Current Collaborators:**
        - Laboratory for Predictive Intelligence
        - [Add your collaborators here]
        
        **Contact for Research Inquiries:**
        [Your email] | [Your office location]
    design:
      columns: '1'
---