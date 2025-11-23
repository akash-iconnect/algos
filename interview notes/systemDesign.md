# 🧱 SOLID Principles (Short Notes for JavaScript Interview)

SOLID is a set of 5 object-oriented design principles that help you write clean, maintainable, scalable code.

## 1️⃣ S — Single Responsibility Principle (SRP)

A class/module/function should have only one reason to change.

✔ One piece = One job

Example
// ❌ Wrong: One class doing multiple things
class UserService {
  createUser(user) { /* DB logic */ }
  sendEmail(user) { /* Email logic */ }
}

// ✅ Correct: Split responsibilities
class UserRepository {
  createUser(user) {}
}

class EmailService {
  sendEmail(user) {}
}

## 2️⃣ O — Open/Closed Principle (OCP)

Open for extension, closed for modification.

✔ Add new features WITHOUT touching existing code

Example
// Base logger
class Logger {
  log(message) {
    console.log("LOG:", message);
  }
}

// Extend without modifying original logger
class FileLogger extends Logger {
  log(message) {
    // write to file instead
  }
}

## 3️⃣ L — Liskov Substitution Principle (LSP)

Child classes should work perfectly when used in place of parent classes.

✔ Subclasses must not break parent behavior.

Example
class Bird {
  fly() {
    return "Flying";
  }
}

class Sparrow extends Bird {} // OK
class Ostrich extends Bird {  // ❌ Violates LSP
  fly() {
    throw new Error("Ostrich cannot fly");
  }
}

# 4️⃣ I — Interface Segregation Principle (ISP)

Don’t force a class to implement methods it does not need.
Different types of workers have different capabilities.

❌ Bad Example (Violates ISP)

Here, all workers must implement eat, work, and sleep — even if some workers do NOT need them (e.g., robots don’t sleep or eat).

class Worker {
  eat() { }
  work() { }
  sleep() { }
}

class HumanWorker extends Worker {
  eat() { console.log("Human eating"); }
  work() { console.log("Human working"); }
  sleep() { console.log("Human sleeping"); }
}

class RobotWorker extends Worker {
  eat() { throw new Error("Robots do not eat"); }  // ❌ Violates LSP + ISP
  sleep() { throw new Error("Robots do not sleep"); } // ❌
  work() { console.log("Robot working"); }
}

✅ Good Example (Follows ISP)

We split responsibilities into small interfaces (capabilities):

Workable

Sleepable

Eatable

Now each worker implements ONLY what they need.

Interfaces (represented in JS using classes or objects)
class Workable {
  work() {}
}

class Eatable {
  eat() {}
}

class Sleepable {
  sleep() {}
}

Human: can work, eat, sleep
class HumanWorker {
  work() { console.log("Human working"); }
  eat() { console.log("Human eating"); }
  sleep() { console.log("Human sleeping"); }
}

Robot: can only work
class RobotWorker {
  work() { console.log("Robot working"); }
}

## 5️⃣ D — Dependency Inversion Principle (DIP)

High-level modules should not depend on low-level modules.
Both should depend on abstractions.

✔ Use dependency injection
✔ Pass behavior instead of creating it inside

Example
// ❌ Wrong: Hard dependency
class AuthService {
  constructor() {
    this.db = new MySQLDatabase(); // tightly coupled
  }
}

// ✅ Correct: Inject dependency
class AuthService {
  constructor(database) {
    this.db = database;   // abstracted
  }
}

const db = new MySQLDatabase();
const auth = new AuthService(db);



