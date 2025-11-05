---
title: Advanced Control Systems
lead: Dr. Piotr Wiśniewski
team:
  - Dr. Piotr Wiśniewski
  - Prof. Jan Kowalski
  - Ph.D. Student - Magdalena Wójcik
projects:
  - "NCN Grant: Robust Control of Uncertain Systems"
  - "Industrial Project: Predictive Control for Manufacturing"
---

Our research in advanced control systems develops theoretical foundations and practical implementations of control strategies for complex dynamical systems.

## Research Focus

### Model Predictive Control (MPC)

MPC is a powerful control strategy that solves an optimization problem at each time step. The general formulation is:

$$\min_{u_{0:N-1}} \sum_{k=0}^{N-1} \ell(x_k, u_k) + V_f(x_N)$$

subject to:
- $x_{k+1} = f(x_k, u_k)$ (system dynamics)
- $x_k \in \mathcal{X}$, $u_k \in \mathcal{U}$ (state and input constraints)

where $\ell$ is the stage cost and $V_f$ is the terminal cost.

### Robust Control

We develop control strategies that maintain performance despite uncertainties:
- $\mathcal{H}_\infty$ control for disturbance rejection
- Sliding mode control for nonlinear systems
- Adaptive control for systems with unknown parameters

### Nonlinear Control

For nonlinear systems $\dot{x} = f(x, u)$, we employ:
- Feedback linearization
- Lyapunov-based control design
- Backstepping techniques

## Applications

- Autonomous vehicle control
- Industrial process automation
- Aerospace systems
- Renewable energy systems

## Recent Achievements

- Developed computationally efficient MPC for real-time implementation
- Proved stability guarantees for adaptive control under communication delays
- Successfully deployed control systems in 5 industrial facilities
