// Define a generic Queue class
class Queue<T> {
    private items: T[] = [];

    // Add an item to the end of the queue
    enqueue(item: T): void {
        this.items.push(item);
    }

    // Remove and return the item from the front of the queue
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Return the item at the front of the queue without removing it
    peek(): T | undefined {
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Example usage
const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek()); // Output: "a"
console.log(queue.dequeue());  // Output: "a"
console.log(queue.dequeue());  // Output: "b"
console.log(queue.isEmpty()); // Output: true
