# Pokemon Web Application

## Overview

The Pokemon Web Application is designed to showcase frontend development skills through three progressive challenges. The application is built using React, Next.js, TypeScript, and Tailwind CSS, with optional backend support using Node.js, Express, and MongoDB. The primary goal is to create an interactive, responsive, and accessible Pokemon Explorer Web Application.

## Image

<img width="936" alt="poke1" src="https://github.com/callmeprinceyadav/pokemon/blob/main/pokemon-pivot/Desktop-view.png" />
<img width="947" alt="poke2" src="https://github.com/callmeprinceyadav/pokemon/blob/main/pokemon-pivot/Mobile-view.png" />

### Primary Technologies
- React
- Next.js
- TypeScript
- Tailwind CSS
- Pokemon API

## Project Challenges

### Challenge 1: Pokemon Card Component

**Objective:** Create a reusable Pokemon card component.

#### Requirements
- Design a `<PokemonCard />` component that displays:
  - Pokemon name
  - Unique ID
  - Type(s)
  - Sprite/Image
  - Basic stats (optional)

```tsx
interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}