---
title: 数据同化
date: 2020-03-12
categories:
 - WRF 技术手册-第四版
tags:
 - translate
 - WRF
description: WRF 技术手册 第 4 版 中英对照文档
autoGroup-11: 数据同化
---

本章介绍了变分数据同化和 WRF 数据同化（WRFDA）系统的基本思想（Barker et al.，2012），然后简要概述了 WRFDA 的最新重大改进。
此概述补充了 Barker 等人（2004 年）中发现的三维变分（3D-Var）算法的原始说明。
进行了一些重要的添加和修改，包括一个用于计算背景误差协方差的实用程序 `gen`，一些新的数据同化算法以及同化和吸收卫星辐射和雷达观测的新功能。
