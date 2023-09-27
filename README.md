# vzual

Experiencing your systems through interactive visualizations!

## Work-In-Progress

Please note that the [vzual] project is a <mark>work-in-progress</mark>.

## Introduction

[vzual] is a web application that allows you to build and use a
graphical visualization of a system that is both animated and
interactive. It visually reflects the state of your system in
real-time. With vzual, you can experience your systems through an
interactive visualization.

## System

What is a "system" ... you may be asking? Well this term is
purposfully abstract because it can be so many different
things. Ultimately it is whatever is on the other end of a real-time
communications protocol, conveying changes to a domain-specific data
model. As an example, a system could be:

- a physical system (e.g. a processing plant, a distillation unit, a
  CNC machine, etc.). You may wish to monitor various sensor readings
  (ex: see the pressures and flows) or interact with the system (say
  open/close a valve).

- a microcontroller (MCU/EMCU)

- a playback recording of a physical system (for analysis purposes)

- an IoT home monitor (Internet of Things)

- a dashboard monitoring a system

- an engineering design tool, interfacing components under design,
  from a simulation of various physical properties (pressures, flows,
  etc.)

- an interactive game with another person or a computer

- etc.

## Model

A vzual model has the following characteristics:

1. It is manifest through an interactive view, that contains graphical
   components that are recognizable as part of the system, for example:

   - pumps and valves and pipes
   - gauges and monitors
   - an IoT house monitor
   - an interactive game with various player pieces
   - etc.

   vzual's graphical IDE allows you to create both components, and
   scenes that model/visualize components.

2. It is backed by a data schema that will change over time through a
   communications protocol.

3. This data can be visualized and animated over time, for example:

   - visualizing the flow and pressure of a distillation unit
   - showing a pump as open or closed
   - showing house lights as on/off
   - showing the current position of a game's player piece
   - etc.

4. It is interactive in the sense that the user can set selected
   values it is capable of setting various aspects of the system (part
   of the communication protocol), for example:

   - a valve could be opened or closed through an interactive component
   - a game piece could be moved
   - etc.

5. Multiple concurrent views are supported, for example:

   - showing different functional aspects of the same system
   - etc.

## Tools

The vzual application provides two primary tools:

- a build tool (a graphical IDE), where you create and orchestrate the
  components that make up your system model.

- a run-time visualization of the system model, that is both animated
  and interactive. This can be run stand-alone or embedded in a web
  page.


## Learn More

Learn more at [vzual].



<!--- Markdown Links ---> 

[vzual]:  https://vzual.org
