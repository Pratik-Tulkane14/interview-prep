
1. **What is TypeScript?**

   - **Answer**: TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It introduces type annotations and other features like interfaces, enums, and decorators to improve code quality and maintainability.

2. **What is the difference between `any` and `unknown` in TypeScript?**

   - **Answer**:
     - **`any`**: Allows any type of value and disables type checking. Using `any` sacrifices type safety.
     - **`unknown`**: Requires type checking before accessing properties or methods. It’s a safer alternative to `any`.

3. **What are interfaces in TypeScript?**

   - **Answer**: An interface is a structure that defines the shape of an object. It can be used to define the type of properties and methods that an object must have.
     ```ts
     interface Person {
       name: string;
       age: number;
     }
     const person: Person = { name: "John", age: 30 };
     ```

4. **What is the purpose of type aliases in TypeScript?**

   - **Answer**: A type alias allows you to create a new name for a type. It's useful for complex types or reusable types.
     ```ts
     type StringOrNumber = string | number;
     const value: StringOrNumber = 42;
     ```

5. **What is the difference between `interface` and `type` in TypeScript?**

   - **Answer**:
     - **`interface`**: Used to define the shape of objects and can be extended using inheritance. It is specifically designed for object types.
     - **`type`**: Can define any type, including primitive types, union types, and more. It’s more flexible than an interface.

6. **What is a `union type` in TypeScript?**

   - **Answer**: A union type allows a variable to be one of several types. You define it using the `|` (pipe) operator.
     ```ts
     let id: number | string;
     id = 123; // Valid
     id = "ABC"; // Valid
     ```

7. **What is a `tuple` in TypeScript?**

   - **Answer**: A tuple is an ordered collection of elements, where each element can have a different type. The types of the tuple elements are defined when the tuple is created.
     ```ts
     let tuple: [string, number, boolean] = ["Hello", 10, true];
     ```

8. **What is a `generic` in TypeScript?**

   - **Answer**: Generics allow you to define a function, class, or interface with a placeholder for the type. This allows you to use different types without losing type safety.
     ```ts
     function identity<T>(arg: T): T {
       return arg;
     }
     const result = identity(10); // T is inferred as number
     ```

9. **What are `enums` in TypeScript?**

   - **Answer**: An enum is a way of defining a set of named constants. It can be used to represent a set of related values, like days of the week or action types.
     ```ts
     enum Days {
       Sunday,
       Monday,
       Tuesday,
     }
     const today: Days = Days.Monday;
     ```

10. **What is the `never` type in TypeScript?**

    - **Answer**: The `never` type represents values that never occur. It’s used in functions that never return, like those that throw an error or have infinite loops.
      ```ts
      function throwError(message: string): never {
        throw new Error(message);
      }
      ```

11. **What is the `void` type in TypeScript?**

    - **Answer**: The `void` type is used to specify that a function does not return a value.
      ```ts
      function log(message: string): void {
        console.log(message);
      }
      ```

12. **What are `type guards` in TypeScript?**

    - **Answer**: Type guards are mechanisms for narrowing down the type of a variable within a specific scope. TypeScript uses various techniques like `typeof` and `instanceof` to check types at runtime.
      ```ts
      function isString(value: unknown): value is string {
        return typeof value === "string";
      }
      ```

13. **What is the `readonly` modifier in TypeScript?**

    - **Answer**: The `readonly` modifier makes properties of an object or array immutable (read-only). It ensures the values cannot be modified after being assigned.
      ```ts
      interface Person {
        readonly name: string;
        age: number;
      }
      ```

14. **What are `decorators` in TypeScript?**

    - **Answer**: Decorators are special functions used to modify the behavior of classes or methods. They are commonly used in frameworks like Angular.
      ```ts
      function log(target: any, key: string) {
        console.log(`Method ${key} has been called.`);
      }
      class Person {
        @log
        sayHello() {
          console.log("Hello");
        }
      }
      ```

15. **What is `type assertion` in TypeScript?**

    - **Answer**: Type assertion is a way to tell TypeScript to treat a value as a specific type. It doesn’t perform any runtime checks, just informs the TypeScript compiler about the type.
      ```ts
      let message: any = "Hello, world!";
      let length: number = (message as string).length;
      ```

16. **What is the `const` assertion in TypeScript?**

    - **Answer**: The `const` assertion allows you to mark an object or array as immutable. It makes sure the value is treated as a literal type rather than a more general type.
      ```ts
      const person = { name: "John", age: 30 } as const;
      // person.name = "Jane";  // Error: Cannot assign to 'name' because it is a read-only property.
      ```

17. **What is `module augmentation` in TypeScript?**

    - **Answer**: Module augmentation allows you to extend existing modules by adding new types, interfaces, or functions. This is useful when working with third-party libraries.
      ```ts
      declare module "express" {
        interface Request {
          user?: string;
        }
      }
      ```

18. **What is `strict mode` in TypeScript?**

    - **Answer**: Strict mode enables a stricter set of type-checking rules in TypeScript, making the type system more robust and reducing the likelihood of errors. It can be enabled in the `tsconfig.json` file.
      ```json
      {
        "compilerOptions": {
          "strict": true
        }
      }
      ```

19. **What is the difference between `interface` and `type` in TypeScript?**

    - **Answer**: Both `interface` and `type` can define object shapes, but `interface` is extendable and can be merged, whereas `type` is more flexible (supports union types, intersections, etc.) but not extendable like an interface.
      ```ts
      interface Animal {
        name: string;
      }
      type Person = { name: string; age: number };
      ```

20. **How do you define and use a `function type` in TypeScript?**
    - **Answer**: Function types allow you to specify the signature of a function, including its parameters and return type.
      ```ts
      type Add = (a: number, b: number) => number;
      const add: Add = (a, b) => a + b;
      ```

---

Certainly! Here are additional TypeScript questions and answers:

21. **What is `in` keyword in TypeScript?**

    - **Answer**: The `in` keyword is used to check whether an object has a property. It can also be used in type guards to narrow down types in a union type.

      ```ts
      interface Dog {
        breed: string;
        bark(): void;
      }

      interface Cat {
        color: string;
        meow(): void;
      }

      function speak(animal: Dog | Cat) {
        if ("bark" in animal) {
          animal.bark(); // dog-specific method
        } else {
          animal.meow(); // cat-specific method
        }
      }
      ```

22. **What is `unknown` type and how is it different from `any` in TypeScript?**

    - **Answer**: The `unknown` type is a safer alternative to `any`. While `any` allows you to perform operations on the value without any checks, `unknown` forces you to first perform type-checking or assertion before using the value.
      ```ts
      let value: unknown;
      value = "hello";
      if (typeof value === "string") {
        console.log(value.toUpperCase()); // Safe to call methods on string
      }
      ```

23. **What is `interface merging` in TypeScript?**

    - **Answer**: In TypeScript, you can define multiple interfaces with the same name, and TypeScript will merge them into a single interface. This is useful when extending third-party libraries.

      ```ts
      interface Person {
        name: string;
      }

      interface Person {
        age: number;
      }

      const person: Person = { name: "John", age: 30 }; // Both interfaces merged
      ```

24. **What are `declaration files` in TypeScript?**

    - **Answer**: Declaration files (`.d.ts`) are used to define types for libraries that don't have built-in type definitions. They describe the shape of JavaScript code, so TypeScript can perform type checking on them.
      ```ts
      // example.d.ts
      declare function greet(name: string): void;
      ```

25. **What is `as` keyword in TypeScript?**

    - **Answer**: The `as` keyword is used to assert the type of a value. It's a way to tell TypeScript that you know the type of a value better than it does.
      ```ts
      let value: any = "Hello, World!";
      let length: number = (value as string).length;
      ```

26. **What are `conditional types` in TypeScript?**

    - **Answer**: Conditional types allow you to select types based on conditions. The general syntax is `T extends U ? X : Y`, which means if type `T` extends type `U`, return type `X`, otherwise `Y`.
      ```ts
      type IsString<T> = T extends string ? "Yes" : "No";
      type Test1 = IsString<string>; // "Yes"
      type Test2 = IsString<number>; // "No"
      ```

27. **What is `async/await` in TypeScript?**

    - **Answer**: `async` and `await` allow you to work with asynchronous code in a synchronous manner. `async` marks a function as asynchronous, and `await` pauses execution until the promise resolves.
      ```ts
      async function fetchData() {
        const response = await fetch("https://api.example.com");
        const data = await response.json();
        return data;
      }
      ```

28. **What is `module resolution` in TypeScript?**

    - **Answer**: Module resolution in TypeScript refers to how the compiler determines where to find imported modules. TypeScript supports several module resolution strategies, such as `Node` and `Classic`.
      ```ts
      import { something } from "./someModule"; // TypeScript resolves the module path
      ```

29. **How can we integrate TypeScript with Node.js?**

    - **Answer**: You can integrate TypeScript with Node.js by installing TypeScript and configuring the `tsconfig.json` file. TypeScript files are compiled to JavaScript using the `tsc` compiler.
      ```bash
      npm install typescript --save-dev
      npx tsc --init  // Create tsconfig.json
      ```

30. **What is `non-null assertion operator` in TypeScript?**

    - **Answer**: The non-null assertion operator (`!`) is used to assert that a value is not `null` or `undefined`. This bypasses TypeScript's strict null checks.
      ```ts
      let myVar: string | null = "Hello";
      console.log(myVar!.length); // Assert that myVar is not null
      ```

31. **What are `mapped types` in TypeScript?**

    - **Answer**: Mapped types allow you to create new types by transforming the properties of an existing type. They are useful when you want to apply operations on all properties of a type.

      ```ts
      type ReadOnly<T> = {
        readonly [K in keyof T]: T[K];
      };

      interface Person {
        name: string;
        age: number;
      }

      const readonlyPerson: ReadOnly<Person> = { name: "John", age: 30 };
      ```

32. **What is the `module` keyword in TypeScript?**

    - **Answer**: The `module` keyword is used to declare a module, which is a way of grouping related code. Modules can export and import functionality to avoid polluting the global scope.

      ```ts
      module Utils {
        export function add(x: number, y: number) {
          return x + y;
        }
      }

      Utils.add(5, 3);
      ```

33. **What is `typeof` type guard in TypeScript?**

    - **Answer**: The `typeof` operator in TypeScript can be used as a type guard to narrow down the type of a variable within a conditional block.

      ```ts
      function isString(value: any): value is string {
        return typeof value === "string";
      }

      const str = "Hello";
      if (isString(str)) {
        console.log(str.toUpperCase()); // Safe to use string methods
      }
      ```

34. **What are `ambient declarations` in TypeScript?**

    - **Answer**: Ambient declarations are used to declare variables, functions, or objects that exist globally or in another module. This is useful when working with third-party libraries that TypeScript doesn't have type definitions for.
      ```ts
      declare var process: any;
      ```

35. **What is the difference between `type` and `interface` in extending a class in TypeScript?**

    - **Answer**: While both `type` and `interface` can be used to define the shape of an object, `interface` is typically preferred for extending classes due to its ability to use inheritance. However, `type` is more flexible in some cases.

      ```ts
      interface Shape {
        width: number;
        height: number;
      }

      class Rectangle implements Shape {
        constructor(public width: number, public height: number) {}
      }
      ```

36. **What is `type narrowing` in TypeScript?**

    - **Answer**: Type narrowing refers to the process where TypeScript refines the type of a variable through type checks, reducing it to a more specific type within certain conditions.
      ```ts
      function printId(id: number | string) {
        if (typeof id === "string") {
          console.log(id.toUpperCase()); // Narrowed to string type
        } else {
          console.log(id); // Narrowed to number type
        }
      }
      ```

37. **What is `type inference` in TypeScript?**
    - **Answer**: Type inference allows TypeScript to automatically infer the type of a variable when it's initialized without an explicit type annotation.
      ```ts
      let name = "Alice"; // TypeScript infers the type as string
      name = 10; // Error: Type 'number' is not assignable to type 'string'.
      ```

---
