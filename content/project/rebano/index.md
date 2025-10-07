---
title: "Reduced Basis Neural Operator (ReBaNO)"
date: 2025-10-06
external_link: ""
summary: "A reduced basis driven operator learning algorithm that achieves discretization invariance and mitigates generalization gaps."
tags:
  - Machine Learning
  - Neural Operators
  - PINNs
featured: true

# Featured image
image:
  filename: 'uploads/rebano_schematics.png'
  caption: 'ReBaNO Architecture'
  focal_point: "Smart"
  preview_only: false

# Links
url_code: "https://github.com/haolanzheng/rebano"
url_pdf: ""
url_slides: ""
url_video: ""
---

## Abstract 
We propose a novel data-lean operator learning algorithm, the Reduced Basis Neural Operator (ReBaNO), to solve a group of PDEs with multiple distinct inputs. Inspired by the Reduced Basis Method and the recently introduced Generative Pre-Trained Physics-Informed Neural Networks, ReBaNO relies on a mathematically rigorous greedy algorithm to build its network structure offline adaptively from the ground up. Knowledge distillation via task-specific activation function allows ReBaNO to have a compact architecture requiring minimal computational cost online while embedding physics. In comparison to state-of-the-art operator learning algorithms such as PCA-Net, DeepONet, FNO, and CNO, numerical results demonstrate that ReBaNO significantly outperforms them in terms of eliminating/shrinking the generalization gap for both in- and out-of-distribution tests and being the only operator learning algorithm achieving strict discretization invariance.

## Key Features

- **Data-lean approach**: Requires significantly fewer training samples
- **Discretization invariance**: Maintains performance across different mesh resolutions
- **Physics embedding**: Incorporates physical laws directly into the architecture
- **Adaptive structure**: Uses greedy algorithms for optimal network construction

## Publications

### Preprints
- Zheng, H. et al. (2025) "ReBaNO: Reduced Basis Neural Operator Mitigating Generalization Gaps and Achieving Discretization Invariance." arXiv. Available at: https://doi.org/10.48550/arXiv.2509.09611.

## Code and Resources

- [GitHub Repository](https://github.com/haolanzheng/rebano)
- [arXiv Paper](https://doi.org/10.48550/arXiv.2509.09611)
