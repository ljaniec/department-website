---
title: Autonomous Mobile Robots
lead: Prof. Jan Kowalski
team:
  - Prof. Jan Kowalski
  - Dr. Anna Nowak
  - Ph.D. Student - Marek Lewandowski
  - Ph.D. Student - Katarzyna Dąbrowska
projects:
  - "EU Horizon 2020: Smart Navigation Systems"
  - "NCN Grant: Multi-Robot Coordination"
  - "Industrial Partnership: Warehouse Automation"
---

Research in autonomous mobile robots focuses on developing intelligent systems capable of navigating complex environments without human intervention. Our work spans theoretical foundations to practical implementations.

## Overview

Autonomous mobile robots are becoming increasingly important in various applications, from warehouse automation to service robotics. Our research addresses key challenges in:

- **Path Planning**: Developing efficient algorithms for finding optimal paths in complex environments
- **Localization and Mapping**: Creating accurate maps while simultaneously determining the robot's position (SLAM)
- **Obstacle Avoidance**: Real-time detection and avoidance of static and dynamic obstacles
- **Multi-Robot Coordination**: Enabling teams of robots to work together efficiently

## Mathematical Formulation

The path planning problem can be formulated as an optimization task. Given a configuration space $\mathcal{C}$ and obstacle region $\mathcal{C}_{obs}$, we seek a continuous path:

$$\gamma: [0,1] \rightarrow \mathcal{C}_{free}$$

where $\mathcal{C}_{free} = \mathcal{C} \setminus \mathcal{C}_{obs}$, such that:

$$\gamma(0) = q_{start}, \quad \gamma(1) = q_{goal}$$

The cost function to minimize is:

$$J(\gamma) = \int_0^1 c(\gamma(t), \dot{\gamma}(t)) dt$$

where $c$ represents the cost of traversing the path.

## Current Results

Our recent work has demonstrated:
- 30% improvement in path planning efficiency using learned heuristics
- Successful deployment of multi-robot systems in industrial settings
- Real-time obstacle avoidance in dynamic environments with 99.8% success rate

## Future Directions

We are exploring:
- Integration of deep reinforcement learning for adaptive navigation
- Energy-efficient path planning for long-duration missions
- Robust navigation under sensor failures and uncertainties
