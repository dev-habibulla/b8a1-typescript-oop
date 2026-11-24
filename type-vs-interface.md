# Type Aliases vs Interfaces in TypeScript

When I started TypeScript, `type` and `interface` looked almost the same. Both can describe an object shape. After using them for a while though, I noticed they are not interchangeable in every situation.

## Introduction

An interface is mainly for describing the shape of an object. A type alias can do that too, but it can also name unions, intersections, and other more complex types. So the real question is not which one is better — it is when each one fits better.

## Body

Here is a simple interface:

```ts
interface User {
  id: number;
  name: string;
}
```

You can write the same thing with a type alias:

```ts
type User = {
  id: number;
  name: string;
};
```

One difference that actually matters is declaration merging. If you declare the same interface twice, TypeScript merges them. Type aliases do not work that way. On the other hand, unions are awkward with interfaces, but natural with types:

```ts
type Status = "pending" | "done" | "failed";
type Id = string | number;
```

In my own code I usually pick interface for objects and classes, mostly because `extends` reads clean. When I need a union or some renamed primitive, I go with type. Some teams prefer interface for public APIs since later extension is easier. For small helper types, type feels less heavy.

## Conclusion

Use interface when you are describing object shapes that might grow. Use type when you need unions or more flexible compositions. Consistency inside one project matters more than picking a "winner".
