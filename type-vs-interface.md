# Type Aliases vs Interface — কোনটা কখন?

TypeScript শিখতে গিয়ে প্রথমেই যে জিনিসটা confuse করে সেটা হলো `type` আর `interface`। দুটোই shape define করে, কিন্তু কাজ করার ভঙ্গি একটু আলাদা।

## Introduction

সহজ কথায়, interface সাধারণত object এর shape বোঝাতে ব্যবহার হয়। Type alias দিয়েও সেটা করা যায়, তবে type দিয়ে union, intersection, primitive rename — এসবও করা যায়। তাই কোনটা কখন — সেটা একটু ভেঙে দেখা যাক।

## Body

Interface এর সবচেয়ে পরিচিত ব্যবহার হলো object shape:

```ts
interface User {
  id: number;
  name: string;
}
```

একই জিনিস type দিয়েও লেখা যায়:

```ts
type User = {
  id: number;
  name: string;
};
```

পার্থক্যটা এখানে — interface কে পরে আবার declare করলে merge হয়ে যায় (declaration merging)। Type alias এ সেটা হয় না। আবার type দিয়ে এমন জিনিস করা যায় যা interface দিয়ে সরাসরি যায় না:

```ts
type Status = "pending" | "done" | "failed";
type ID = string | number;
```

আমি personally object ও class-related shape এর জন্য interface ব্যবহার করি। কারণ পড়তে clear লাগে আর extends ও সহজ। কিন্তু union বা utility type বানাতে গেলে type aliasই লাগে। দুটোই valid — project এ একটা convention ধরে রাখাই বেশি important।

একটা practical tip: library বা public API design এ অনেকে interface prefer করে, কারণ পরে extend করা সহজ। ছোট utility type বা complex union এর জন্য type aliasই natural choice।

## Conclusion

মোট কথা — object shape + OOP → interface; union, alias, complex composition → type। দুটোর মধ্যে কোনো absolute winner নেই। Codebase consistency maintain করাই আসল কাজ।
