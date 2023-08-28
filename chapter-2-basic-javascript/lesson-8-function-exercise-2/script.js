function calcPriceAppartment(lenght, roomsNumber) {
    squareMeterDefault = 3000;
    if (roomsNumber === 1) {
        return lenght * (squareMeterDefault * 1);
    } else if (roomsNumber === 2) {
        return lenght * (squareMeterDefault * 1.2);
    } else {
        return lenght * (squareMeterDefault * 1.5);
    }

    // * Se você quiser resolver o problema utilizando "switch-case"
    /* switch (roomsNumber) {
        case 1:
        default:
            return lenght * (squareMeterDefault * 1);
            break;
        case 2:
            return lenght * (squareMeterDefault * 1.2);
            break;
        case 3:
            return lenght * (squareMeterDefault * 1.5);
            break;
    } */
}

let appartmentLenght = 123;
let appartmentRoomNumbers = 3;
let appartmentPrice = calcPriceAppartment(appartmentLenght, appartmentRoomNumbers);

console.log(`The appartment costs R$ ${appartmentPrice}`);