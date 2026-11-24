# Type Narrowing in TypeScript — কেন দরকার?

TypeScript এ একটা variable যখন multiple type হতে পারে (union), তখন compiler কে বোঝাতে হয় এই মুহূর্তে কোন type টা আসলে আছে। এই কাজটাকেই type narrowing বলে।

## Introduction

ধরো একটা function `string | number` নেয়। ভিতরে যদি সরাসরি `.toUpperCase()` call করো, error দিবে — কারণ number এ সে method নেই। Narrowing দিয়ে আমরা প্রথমে check করি, তারপর safe ভাবে use করি।

## Body

সবচেয়ে common টা হলো `typeof`:

```ts
function printValue(input: string | number) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toFixed(2));
  }
}
```

এখানে if এর ভিতরে TypeScript বুঝে যায় input string, else এ সেটা number।

Class instance এর জন্য `instanceof` কাজে লাগে:

```ts
class Car {
  drive() {}
}

class Bike {
  pedal() {}
}

function move(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
}
```

Object shape check করতে `in` operator helpful:

```ts
type Admin = { role: string; accessLevel: number };
type Guest = { role: string; visitCount: number };

function check(user: Admin | Guest) {
  if ("accessLevel" in user) {
    return user.accessLevel;
  }
  return user.visitCount;
}
```

আমি assignment এর `processInput` এও typeof দিয়ে string, number, boolean আলাদা করেছি। Narrowing না থাকলে union type practically useless হয়ে যায় — কারণ TypeScript তোমাকে unsafe call করতে দেবে না।

## Conclusion

Type narrowing মানে runtime check দিয়ে compile-time type কে ছোট করে আনা। `typeof`, `instanceof`, আর `in` — এই তিনটাই daily coding এ বারবার লাগে। Union লিখলেই narrowing শিখতে হবে, নাহলে type safety এর সুবিধা পুরোপুরি পাওয়া যায় না।
