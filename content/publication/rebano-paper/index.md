---
title: "Reduced Basis Neural Operator Mitigating Generalization Gaps and Achieving Discretization Invariance"
authors:
- "Haolan Zheng"
- "Yanlai Chen"
- "Jiequn Han"
- "Yue Yu"
author_notes:
- "Corresponding author: Yanlai Chen"
- ""
- ""
date: "2025-09-11"
doi: "10.48550/arXiv.2509.09611"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-10-06"

# Publication type.
# Options: article-journal, article-conference, book, chapter, dataset, manuscript, 
# paper-conference, patent, report, software, thesis, webpage
publication_types: ["manuscript"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv preprint*"
publication_short: "arXiv"

abstract: |
  We propose a novel data-lean operator learning algorithm, the Reduced Basis Neural Operator (ReBaNO), to solve a group of PDEs with multiple distinct inputs. Inspired by the Reduced Basis Method and the recently introduced Generative Pre-Trained Physics-Informed Neural Networks, ReBaNO relies on a mathematically rigorous greedy algorithm to build its network structure offline adaptively from the ground up. Knowledge distillation via task-specific activation function allows ReBaNO to have a compact architecture requiring minimal computational cost online while embedding physics. In comparison to state-of-the-art operator learning algorithms such as PCA-Net, DeepONet, FNO, and CNO, numerical results demonstrate that ReBaNO significantly outperforms them in terms of eliminating/shrinking the generalization gap for both in- and out-of-distribution tests and being the only operator learning algorithm achieving strict discretization invariance.

# Summary. An optional shortened abstract.
summary: A novel data-lean operator learning algorithm that combines reduced basis methods with neural networks for physics-informed machine learning.

# Custom links (optional).
links:
- name: "arXiv"
  url: "https://arxiv.org/abs/2509.09611"
- name: "Code"
  url: "https://github.com/haolanzheng/rebano"

url_pdf: 'uploads/rebano-paper.pdf'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Associated Projects (optional).
projects:
- rebano


# Featured publication
featured: true

# Slides (optional).
slides: ""
---

### Citation
```bibtex
@inproceedings{Zheng2025ReBaNORB,
  title={ReBaNO: Reduced Basis Neural Operator Mitigating Generalization Gaps and Achieving Discretization Invariance},
  author={Haolan Zheng and Yanlai Chen and Jiequn Han and Yue Yu},
  year={2025},
  url={https://api.semanticscholar.org/CorpusID:281252233}
}

```