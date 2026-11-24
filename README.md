# B8A1 — Problem Solving with TypeScript & OOP

Module 1–3 এর উপর ভিত্তি করে TypeScript problem solving assignment।

## What's inside

- `solutions.ts` — সব coding problem (1 থেকে 8)
- `type-vs-interface.md` — type alias vs interface নিয়ে blog
- `type-narrowing.md` — type narrowing নিয়ে blog

## Problems covered

1. Optional / default parameter (`multiplyValue`)
2. Union type + typeof narrowing (`processInput`)
3. Readonly tuple (`formatCoordinate`)
4. Generics + rest params (`concatenateArrays`)
5. Interface + filter (`getPopularCourses`)
6. Generics with `keyof` (`pluckValues`)
7. OOP — Employee / Manager
8. Async Promise (`validateAgeAsync`)

## Blog posts

- [Type Aliases vs Interface](./type-vs-interface.md)
- [Type Narrowing in TypeScript](./type-narrowing.md)

## How to run

```bash
npx tsc solutions.ts --target ES2020 --module commonjs
```

অথবা ts-node দিয়ে check করা যায়।
