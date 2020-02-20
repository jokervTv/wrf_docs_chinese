---
title: 控制方程组
date: 2020-01-12
categories:
 - WRF 技术手册-第四版
tags:
 - translate
 - WRF
description: WRF 技术手册 第4版 中英对照文档
autoGroup-2: 控制方程组
---

ARW 动力学求解器集成了可压缩的非静力学欧拉方程。遵循 Ooyama（1990）的原理，使用具有守恒性质的变量将方程式转换为通量形式。用静力压力作为自变量来公式化方程（Laprise，1992）。垂直坐标是地形跟踪的，混合 σ-p 公式。在本章中，我们定义了垂直坐标，描述了笛卡尔空间中的湿通量方程，并扩展了方程以包括对球体的投影。

The ARW dynamics solver integrates the compressible, nonhydrostatic Euler equations. The equations are cast in flux form using variables that have conservation properties, following the philosophy of Ooyama (1990). The equations are formulated using hydrostatic pressure as an independent variable (Laprise, 1992). The vertical coordinate is terrain following, using a hybrid σ−p formulation. In this chapter we define the vertical coordinate, present the moist flux-form equations in Cartesian space, and augment the equations to include projections to the sphere.
