---
title: "Deep Learning for Robotic Perception and Control"
speaker: Prof. Sarah Mitchell
date: 2024-04-15 14:00:00 +0100
location: Building C-13, Lecture Hall 101
speaker_bio: "Prof. Sarah Mitchell is a leading researcher in robotic learning at MIT. She has published over 100 papers and received numerous awards including the IEEE Robotics and Automation Society Early Career Award."
---

This seminar will explore recent advances in applying deep learning techniques to robotic perception and control problems.

## Abstract

Deep learning has revolutionized computer vision and is now transforming robotics. In this talk, I will present our recent work on:

1. **End-to-End Learning for Manipulation**: Training robots to perform complex manipulation tasks directly from visual observations
2. **Sim-to-Real Transfer**: Techniques for training in simulation and deploying on real robots
3. **Multi-Task Learning**: Enabling robots to learn and perform multiple tasks efficiently
4. **Safe Learning**: Ensuring safety during the learning process

## Key Topics

### Visuomotor Policies

We formulate the robot control problem as learning a policy $\pi_\theta$ that maps observations to actions:

$$a_t = \pi_\theta(o_t)$$

where $o_t$ includes visual observations from cameras. The policy is trained using:

$$\theta^* = \arg\max_\theta \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^T r(s_t, a_t) \right]$$

### Sim-to-Real Transfer

To bridge the reality gap, we employ:
- Domain randomization
- Domain adaptation techniques
- Real-world data augmentation

### Multi-Task Learning

We use task-conditioned policies:

$$a_t = \pi_\theta(o_t, z)$$

where $z$ is a task embedding learned jointly with the policy.

## Recent Results

Our approach has achieved:
- 95% success rate on complex manipulation tasks
- 50% reduction in training time through multi-task learning
- Successful transfer from simulation to real robots with minimal fine-tuning

## Discussion Topics

The seminar will cover:
- Current limitations of learning-based approaches
- Open research challenges
- Potential applications in industry
- Future directions in robot learning

## Bio

Prof. Sarah Mitchell received her Ph.D. from Stanford University in 2015. She is currently an Associate Professor at MIT and leads the Robot Learning Lab. Her research has been published in top venues including RSS, ICRA, IROS, and NeurIPS. She has received the NSF CAREER Award and the Amazon Research Award.

## Registration

While the seminar is open to all, please register at the department office if you plan to attend to help us arrange seating.

Light refreshments will be served after the seminar.
