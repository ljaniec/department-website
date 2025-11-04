---
title: Human-Robot Interaction
lead: Dr. Anna Nowak
team:
  - Dr. Anna Nowak
  - Dr. Piotr Wiśniewski
  - Ph.D. Student - Tomasz Kowalczyk
projects:
  - "EU Project: Safe Collaborative Robotics"
  - "Industry Partnership: Cobot Development"
---

Human-Robot Interaction (HRI) research focuses on enabling safe, intuitive, and effective collaboration between humans and robots in shared workspaces.

## Research Areas

### Safety in Collaborative Robotics

Ensuring human safety is paramount in collaborative environments. We develop:
- Real-time collision detection and avoidance systems
- Safety-certified control algorithms
- Human intention prediction models

### Intuitive Interfaces

We design interfaces that allow natural communication between humans and robots:
- Gesture recognition systems
- Voice command processing
- Augmented reality for robot programming

### Cognitive Architectures

Our work on cognitive architectures enables robots to:
- Understand human intentions and goals
- Adapt behavior based on human preferences
- Learn from human demonstrations

## Mathematical Framework

Human motion prediction can be modeled using Gaussian Processes. Given observed human trajectory $\mathbf{x}_{1:t}$, we predict future positions:

$$p(\mathbf{x}_{t+1:T} | \mathbf{x}_{1:t}) \sim \mathcal{GP}(\mu(\mathbf{x}), k(\mathbf{x}, \mathbf{x}'))$$

where $\mu$ is the mean function and $k$ is the covariance kernel capturing motion patterns.

## Applications

- Collaborative assembly in manufacturing
- Service robots in healthcare facilities
- Educational robots for STEM learning
