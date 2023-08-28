let profession = "teacher";

console.log("Profession: " + profession)

switch(profession) {
    case 'inspector':
        console.log("Your shirt will be GREEN.");
        break; // * O "break" serve para prevenir que vá para os outros casos
    case 'fireman':
        console.log("Your shirt will be RED.");
        break;
    case 'police officer':
        console.log("Your shirt will be GRAY.");
        break;
    default: // * Se nenhuma das condições acima for atendida
        console.log("Your shirt will be WHITE.");
        break;
}