# What is Type Narrowing in TypeScript?

Type narrowing is how TypeScript figures out a more specific type from a wider union. Without it, working with `string | number` feels painful because the compiler will not let you call methods that only exist on one side.

## Introduction

Imagine a function that accepts `string | number`. If you call `.toUpperCase()` right away, TypeScript throws an error. That makes sense — numbers do not have that method. Narrowing means you check the value first, then use it safely.

## Body

The most common check is `typeof`:

```ts
function show(input: string | number) {
  if (typeof input === "string") {
    console.log(input.toLowerCase());
  } else {
    console.log(input * 10);
  }
}
```

Inside the first branch, TypeScript knows `input` is a string. In the else branch it becomes a number.

For class instances, `instanceof` is the usual approach:

```ts
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
}
```

When you are dealing with object shapes, the `in` operator helps:

```ts
type Admin = { name: string; level: number };
type Guest = { name: string; visits: number };

function info(user: Admin | Guest) {
  if ("level" in user) {
    return user.level;
  }
  return user.visits;
}
```

I used the same idea in `processInput` for this assignment. Once you check with `typeof`, each branch becomes type-safe. Unions are useful, but only if you narrow them properly.

## Conclusion

Narrowing turns a broad union into a concrete type using runtime checks. `typeof`, `instanceof`, and `in` cover most day-to-day cases. Learn these early and union types become much easier to work with.
