---
title: Control Systems Laboratory
director: Dr. Piotr Wiśniewski
location: Building C-13, Room 108
equipment:
  - "dSPACE MicroLabBox rapid prototyping systems (5 units)"
  - "National Instruments CompactRIO controllers"
  - "Quanser control experiments (inverted pendulum, ball & beam, etc.)"
  - "Electric motor test benches"
  - "Programmable power supplies and loads"
  - "Oscilloscopes and data acquisition systems"
  - "MATLAB/Simulink with Real-Time Workshop"
research_areas:
  - Model predictive control
  - Robust control
  - Nonlinear control
  - Real-time control implementation
  - Hardware-in-the-loop simulation
---

The Control Systems Laboratory provides facilities for research and education in modern control theory and its practical implementation. The lab emphasizes the connection between theoretical concepts and real-world applications.

## Laboratory Features

### Rapid Prototyping Systems

Our dSPACE and NI hardware enables:
- Real-time controller implementation
- Hardware-in-the-loop (HIL) simulation
- Rapid testing of control algorithms
- Integration with MATLAB/Simulink

### Classical Control Experiments

Students learn fundamental concepts using:
- DC motor speed and position control
- Inverted pendulum stabilization
- Ball & beam system
- Magnetic levitation system

## Research Activities

### Model Predictive Control

We develop MPC algorithms with focus on:
- Computational efficiency for real-time implementation
- Constraint handling
- Robust MPC for uncertain systems

The optimization problem solved at each sample time is:

$$\min_{u} \sum_{k=0}^{N-1} (x_k^T Q x_k + u_k^T R u_k) + x_N^T P x_N$$

subject to system dynamics and constraints.

### Nonlinear Control

Research includes:
- Lyapunov-based design methods
- Sliding mode control with chattering reduction
- Feedback linearization techniques

For a nonlinear system $\dot{x} = f(x) + g(x)u$, we design controls that ensure:

$$V(x) \leq 0, \quad \forall x \neq 0$$

where $V(x)$ is a Lyapunov function.

### Adaptive Control

We investigate:
- Parameter estimation algorithms
- Model reference adaptive control (MRAC)
- Adaptive control under communication constraints

## Educational Programs

The laboratory supports:
- Control Theory courses (undergraduate and graduate)
- Laboratory exercises in control systems
- Bachelor and Master thesis projects
- Ph.D. research

## Software Tools

Available software includes:
- MATLAB/Simulink with multiple toolboxes
- Python with control libraries (python-control, scipy)
- Real-time operating systems
- Optimization solvers (CVXPY, OSQP)

## Student Projects

Recent student projects include:
- Quadrotor attitude control using MPC
- Energy-efficient control of electric drives
- Robust control of robotic manipulators
- Temperature control in industrial processes
