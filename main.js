// Базовий клас транспортного засобу
class Transport {
  setNext(transport) {
    this.nextTransport = transport;
  }

  move(roadType) {
    if (this.canMoveOnRoad(roadType)) {
      console.log(` - ${this.constructor.name} може рухатись по "${roadType}" дорозі.`);
    } else if (this.nextTransport) {
      this.nextTransport.move(roadType);
    } else {
      console.log(` - Немає транспортного засобу для "${roadType}" дороги.`);
    }
  }

//  canMoveOnRoad(roadType) { return false; // Базовий клас не може рухатись по жодному типу дороги }
}

// Похідний клас велосипеда
class Bicycle extends Transport {
  canMoveOnRoad(roadType) {
    return roadType === 'гравій';
  }
}

// Похідний клас мотоцикла
class Motorcycle extends Transport {
  canMoveOnRoad(roadType) {
    return roadType === 'бездоріжжя';
  }
}

// Похідний клас автомобіля
class Car extends Transport {
  canMoveOnRoad(roadType) {
    return roadType === 'асфальт';
  }
}

// Створення транспортних засобів
const bicycle = new Bicycle();
const motorcycle = new Motorcycle();
const car = new Car();

// Встановлення ланцюжка обов'язків
bicycle.setNext(motorcycle);
motorcycle.setNext(car);

// Перевірка можливості руху по різних типах доріг
bicycle.move('асфальт');
bicycle.move('гравій');
bicycle.move('бездоріжжя');
bicycle.move('ліс');