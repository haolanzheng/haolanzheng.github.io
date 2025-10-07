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

  - block: markdown
    content:
      title: Current Projects
      text: |
        ## ReBaNO: Reduced Basis Neural Operator
        
        A novel data-lean operator learning algorithm that combines reduced basis methods with neural operators for physics-informed machine learning.
        
        **Key Features:**
        - Achieves strict discretization invariance
        - Mitigates generalization gaps  
        - Data-efficient approach
        - Physics-embedded architecture
        
        **Resources:** [GitHub](https://github.com/haolanzheng/rebano) | [arXiv](https://doi.org/10.48550/arXiv.2509.09611) | [Project Details](/project/rebano/)
        
    design:
      columns: '1'

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