type Point = { x: number, y: number };
type Color = { c1: string, c2: string };

type Optional<T> = { [K in keyof T]?: T[K] };

type PartialPoint = Optional<Point>;
// { x?: number, y?: number }
type PartialColor = Optional<Color>;
// { c1?: string, c2?: string }