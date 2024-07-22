// console.log(".".repeat(10));
console.log("Task 1");
class Polygon {
    constructor(name) {
        this.name = name;
    }

    getArea() {
        return 0; 
    }

    toString() {
        return `${this.name} 's area ${this.getArea()}`;
    }
}

class Rectangle extends Polygon {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `${super.toString()}, width: ${this.width}, height: ${this.height}`;
    }
}

class Square extends Rectangle {
    constructor(l) {
        super(l, l);
        this.name = 'Square';
    }

    toString() {
        return `${super.toString()}`;
    }
}

class Circle extends Polygon {
    constructor(r) {
        super('Circle');
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }

    toString() {
        return `${super.toString()}, radius: ${this.r}`;
    }
}

class Triangle extends Polygon {
    constructor(b, h) {
        super('Triangle');
        this.b = b;
        this.h = h;
    }

    getArea() {
        return 0.5 * this.b * this.h;
    }

    toString() {
        return `${super.toString()}, base: ${this.b}, height: ${this.h}`;
    }
}

const rectangle = new Rectangle(5, 10);
const square = new Square(7);
const circle = new Circle(4);
const triangle = new Triangle(6, 8);

console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());
console.log(triangle.toString());

// console.log(".".repeat(10));
console.log("Task 2");

async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

function displayUser(user) {
    const tableBody = document.getElementById('usersTableBody');
    tableBody.innerHTML = ''; 

    if (user) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}</td>
        `;
        tableBody.appendChild(row);
    } else {
        tableBody.innerHTML = '<tr><td colspan="8" class="text-center">User not found</td></tr>';
    }
}

async function fetchUserById() {
    const userId = document.getElementById('userIdInput').value;
    if (!userId) {
        alert('Please enter a User ID');
        return;
    }

    const users = await getData();
    const user = users.find(u => u.id === parseInt(userId));
    displayUser(user);
}

displayUser(null);