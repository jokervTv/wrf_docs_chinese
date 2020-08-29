---
title: 自述
---

::: tip 请注意
限于笔者水平和文章时效，还请保持警惕并以原文为主
:::

这里是笔者学习 [WRF 模式技术手册](http://www2.mmm.ucar.edu/wrf/users/docs/technote/v4_technote.pdf) 过程的一个记录。
作为学习历程的一个记录，也希望能提供一些帮助。

## 文档地址

[GitHub Page]()

或本人服务器（适合国内访问）

[jokervtv.top/wrf](https://jokervtv.top/wrf/wrf_technote/)

## 一起学习

也希望有志同道合的朋友加入进来，一起改善翻译和学习。
你可以直接 *fork* 这个仓库，修改，然后 *pull request* 。

## TODO

### WRFV4 技术手册

- [x] Preface
- [x] 1 Introduction
  - [x] 1.1 Advanced Research WRF (ARW)
  - [x] 1.2 Major Features of the ARW System, Version 4
- [x] 2 Governing Equations
  - [x] 2.1 Vertical Coordinate and Flux-Form Variables
  - [x] 2.2 Flux-Form Euler Equations
  - [x] 2.3 Map Projections, Coriolis and Curvature Terms
  - [x] 2.4 Perturbation Form of the Governing Equations
- [ ] 3 Model Discretization
  - [ ] 3.1 Temporal Discretization
    - [ ] 3.1.1 Runge-Kutta Time Integration Scheme
    - [ ] 3.1.2 Acoustic Integration
    - [ ] 3.1.3 Full Time-Split Integration Sequence
    - [ ] 3.1.4 Diabatic Forcing
    - [ ] 3.1.5 Hydrostatic Option
  - [ ] 3.2 Spatial Discretization
    - [ ] 3.2.1 Acoustic Step Equations
    - [ ] 3.2.2 Coriolis and Curvature Terms
    - [ ] 3.2.3 Advection
    - [ ] 3.2.4 Pole Conditions for the Global Latitude-Longitude Grid
  - [ ] 3.3 Stability Constraints
    - [ ] 3.3.1 RK3 Time Step Constraint
    - [ ] 3.3.2 Acoustic Time Step Constraint
    - [ ] 3.3.3 Adaptive Time Step
    - [ ] 3.3.4 Map Projection Considerations
- [ ] 4 Turbulent Mixing and Model Filters
  - [ ] 4.1 Latitude-Longitude Global Grid and Polar Filtering
  - [ ] 4.2 Explicit Spatial Diffusion
    - [ ] 4.2.1 Horizontal and Vertical Diffusion on Coordinate Surfaces
    - [ ] 4.2.2 Horizontal and Vertical Diffusion in Physical Space
    - [ ] 4.2.3 Computation of the Eddy Viscosities
    - [ ] 4.2.4 TKE equation for the 1.5 Order Turbulence Closure
    - [ ] 4.2.5 Sixth-Order Spatial Filter on Coordinate Surfaces
  - [ ] 4.3 Filters for the Time-split RK3 scheme
    - [ ] 4.3.1 Three-Dimensional Divergence Damping
    - [ ] 4.3.2 External Mode Filter
    - [ ] 4.3.3 Semi-Implicit Acoustic Step Off-centering
  - [ ] 4.4 Formulations for Gravity Wave Absorbing Layers
    - [ ] 4.4.1 Absorbing Layer Using Spatial Filtering
    - [ ] 4.4.2 Implicit Rayleigh Damping for the Vertical Velocity
    - [ ] 4.4.3 Traditional Rayleigh Damping Layer
  - [ ] 4.5 Other Damping
    - [ ] 4.5.1 Vertical-Velocity Damping
- [ ] 5 Initial Conditions
  - [ ] 5.1 Initialization for Idealized Conditions
  - [ ] 5.2 Initialization for Real-Data Conditions
    - [ ] 5.2.1 Use of the WRF Preprocessing System by ARW
    - [ ] 5.2.2 Reference State
    - [ ] 5.2.3 Vertical Interpolation and Extrapolation
    - [ ] 5.2.4 Perturbation State
    - [ ] 5.2.5 Generating Lateral Boundary Data
    - [ ] 5.2.6 Masking of Surface Fields
  - [ ] 5.3 Digital Filtering Initialization
    - [ ] 5.3.1 Filter Design
    - [ ] 5.3.2 DFI Schemes
    - [ ] 5.3.3 Backward Integration
- [ ] 6 Lateral Boundary Conditions
  - [ ] 6.1 Periodic Lateral Boundary Conditions
  - [ ] 6.2 Open Lateral Boundary Conditions
  - [ ] 6.3 Symmetric Lateral Boundary Conditions
  - [ ] 6.4 Specified Lateral Boundary Conditions
  - [ ] 6.5 Polar Conditions
- [ ] 7 Nesting
  - [ ] 7.1 Horizontal Nesting Options
  - [ ] 7.2 Staggering and Feedback
  - [ ] 7.3 Nested Lateral Boundary Conditions
  - [ ] 7.4 Steps to Generate a Nest Grid
- [ ] 8 Physics
  - [ ] 8.1 Microphysics
    - [ ] 8.1.1 Kessler scheme
    - [ ] 8.1.2 Purdue Lin scheme
    - [ ] 8.1.3 WRF Single-Moment 3-class (WSM3) scheme
    - [ ] 8.1.4 WSM5 scheme
    - [ ] 8.1.5 WSM6 scheme
    - [ ] 8.1.6 WDM5 and WDM6 schemes
    - [ ] 8.1.7 WSM7 and WDM7 schemes
    - [ ] 8.1.8 Eta Grid-scale Cloud and Precipitation (2001) scheme
    - [ ] 8.1.9 Thompson et aland aerosol-aware Thompson-Eidhammer schemes
    - [ ] 8.1.10 Goddard Cumulus Ensemble Model scheme
    - [ ] 8.1.11 Goddard 4ICE scheme
    - [ ] 8.1.12 Morrison et al2-Moment scheme
    - [ ] 8.1.13 Milbrandt-Yau Double-Moment scheme
    - [ ] 8.1.14 CAM Morrison-Gettelman scheme
    - [ ] 8.1.15 Stony-Brook University Lin-Colle scheme
    - [ ] 8.1.16 NSSL microphysics schemes
    - [ ] 8.1.17 HUJI spectral bin microphysics schemes
    - [ ] 8.1.18 Predicted Particle Properties (P3) scheme
    - [ ] 8.1.19 Jensen ISHMAEL microphysics
  - [ ] 8.2 Cumulus Parameterization
    - [ ] 8.2.1 Kain-Fritsch schemes
    - [ ] 8.2.2 Betts-Miller-Janjic scheme
    - [ ] 8.2.3 Grell Schemes
    - [ ] 8.2.4 Simplified Arakawa-Schubert Schemes
    - [ ] 8.2.5 Zhang-McFarlane Scheme
    - [ ] 8.2.6 Tiedtke Schemes
  - [ ] 8.3 Shallow Cumulus Parameterization
    - [ ] 8.3.1 University of Washington Scheme
    - [ ] 8.3.2 GRIMs Scheme
    - [ ] 8.3.3 NSAS Scheme
    - [ ] 8.3.4 Deng Scheme
  - [ ] 8.4 Surface Layer
    - [ ] 8.4.1 Revised MM5 similarity theor
    - [ ] 8.4.2 Similarity theory (MYJ/Eta)
    - [ ] 8.4.3 QNSE similarity theory
    - [ ] 8.4.4 MYNN surface layer
    - [ ] 8.4.5 Similarity theory (PX)
    - [ ] 8.4.6 TEMF surface layer
    - [ ] 8.4.7 Similarity theory (MM5) – old version
  - [ ] 8.5 Land-Surface Model and Other Surface Options
    - [ ] 8.5.1 5-layer thermal diffusion
    - [ ] 8.5.2 Noah LSM
    - [ ] 8.5.3 NoahMP LSM
    - [ ] 8.5.4 Rapid Update Cycle (RUC) Model LSM
    - [ ] 8.5.5 Pleim-Xiu LSM
    - [ ] 8.5.6 Community Land Model (CLM4)
    - [ ] 8.5.7 Simplified Simple Biosphere Model (SSiB)
    - [ ] 8.5.8 Urban Canopy Model
    - [ ] 8.5.9 Building Environment Parameterization (BEP)
    - [ ] 8.5.10 Building Energy Model (BEM)
    - [ ] 8.5.11 Ocean Mixed-Layer Model
    - [ ] 8.5.12 3-D Ocean Model
    - [ ] 8.5.13 CLM4.5 Lake Model
    - [ ] 8.5.14 Sea-Ice Treatment
    - [ ] 8.5.15 Updating Lower Boundary Conditions
  - [ ] 8.6 Planetary Boundary Layer
    - [ ] 8.6.1 Yonsei University (YSU) PBL
    - [ ] 8.6.2 Mellor-Yamada-Janjic (MYJ) PBL
    - [ ] 8.6.3 Quasi-Normal Scale Elimination (QNSE) scheme with EDMF
    - [ ] 8.6.4 Mellor-Yamada-Nakanishi-Niino (MYNN) Levels 2.5 and 3
    - [ ] 8.6.5 Asymmetrical Convective Model version 2 (ACM2) PBL
    - [ ] 8.6.6 Bougeault-Lacarrere PBL
    - [ ] 8.6.7 University of Washington (UW) PBL
    - [ ] 8.6.8 Total Energy Mass Flux (TEMF) PBL
    - [ ] 8.6.9 Shin-Hong PBL
    - [ ] 8.6.10 Grenier-Bretherton-McCaa (GBM) PBL
    - [ ] 8.6.11 Medium Range Forecast Model (MRF) PBL
    - [ ] 8.6.12 Gravity Wave Drag
  - [ ] 8.7 Atmospheric Radiation
    - [ ] 8.7.1 Rapid Radiative Transfer Model (RRTM) Longwave
    - [ ] 8.7.2 CAM3 Longwave and Shortwave
    - [ ] 8.7.3 RRTMG Longwave and Shortwave
    - [ ] 8.7.4 RRTMG-K Longwave and Shortwave
    - [ ] 8.7.5 Eta Geophysical Fluid Dynamics Laboratory (GFDL) Longwave and Short-wave
    - [ ] 8.7.6 MM5 (Dudhia) Shortwave
    - [ ] 8.7.7 Old Goddard Shortwave
    - [ ] 8.7.8 New Goddard Longwave and Shortwave
    - [ ] 8.7.9 Fu-Liou-Gu (FLG) Longwave and Shortwave
  - [ ] 8.8 Physics Interactions
- [ ] 9 Stochastic Parameterization Suite
  - [ ] 9.1 Stochastically Perturbed Physics Tendencies (SPPT)
  - [ ] 9.2 Stochastic Kinetic-Energy Backscatter Scheme (SKEBS)
  - [ ] 9.3 Stochastically Perturbed Parameterization Scheme (SPP)
  - [ ] 9.4 Random Perturbation field (RPT)
  - [ ] 9.5 Stochastic Perturbations to the Lateral Boundary Conditions
- [ ] 10 Nudging
  - [ ] 10.1 Grid Nudging or Analysis Nudging
  - [ ] 10.2 Surface Analysis Nudging
  - [ ] 10.3 Flux-Adjusting Surface Analysis Nudging
  - [ ] 10.4 Observational or Station Nudging
  - [ ] 10.5 Spectral Nudging
- [x] 11 Data Assimilation
  - [x] 11.1 Introduction
  - [x] 11.2 Improvements to the WRFDA Algorithm
    - [x] 11.2.1 4D-Var and forecast sensitivity to observations
    - [x] 11.2.2 Hybrid variational/ensemble techniques
    - [x] 11.2.3 Satellite radiance data assimilation
    - [x] 11.2.4 Radar data assimilation
    - [x] 11.2.5 Choice of control variables
    - [x] 11.2.6 Other improvements
  - [x] 11.3 Background Error Covariances
    - [x] 11.3.1 Removal of time-mean
    - [x] 11.3.2 Multivariate Covariances: Regression coefficients and unbalanced variables
    - [x] 11.3.3 Vertical Covariances: Eigenvectors/eigenvalues and control variable pro-jections
    - [x] 11.3.4 Horizontal Covariances: Recursive filter lengthscale (regional), or power spectra (global)
- [ ] A Physical Constants
- [ ] B List of Symbols
- [ ] C Acronyms
