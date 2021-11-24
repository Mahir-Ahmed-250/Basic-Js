//-------------------------------------------- Problem 1--------------------------------------------//

function seerToMon(seers) {
    // Condition No 1
    if (typeof seers != "number") {
        return "Please Input Valid Number";
    }
    // Condition No 2 
    if (seers < 0) {
        return "Please Input Valid Number";
    }
    // Condition No 3
    else if (seers == 0) {
        const mon = seers * 0;
        return mon;
    }
    // Condition No 4
    else {
        const mon = seers * 0.025;
        return mon;
    }
}

// Output
const InputSeer = 40
const totalMon = seerToMon(InputSeer);
console.log(totalMon);

//-------------------------------------------- Problem 2--------------------------------------------//

function totalSales(ShirtQuantity, PantQuantity, ShoeQuantity) {
    // Condition No 1

    if (ShirtQuantity < 0) {
        return "Please Input Valid Number";
    }
    // Condition No 2

    else if (PantQuantity < 0) {
        return "Please Input Valid Number";
    }
    // Condition No 3

    else if (ShoeQuantity < 0) {
        return "Please Input Valid Number";
    }
    // Condition No 4
    else {
        const shirtPrice = ShirtQuantity * 100;
        const pantPrice = PantQuantity * 200;
        const shoePrice = ShoeQuantity * 500;
        const TotalSales = shirtPrice + pantPrice + shoePrice;
        return TotalSales;
    }
}
// Input Section

const NumberOfShirts = 1
const NumberOfPants = 1
const NumberOfShoes = 1
const Sales = totalSales(NumberOfShirts, NumberOfPants, NumberOfShoes);

// Output Section

console.log(Sales)

//-------------------------------------------- Problem 3--------------------------------------------//

function deliveryCost(range) {
    // Condition No 1
    if (typeof range != "number") {
        return "Please Input Valid Number";
    }
    // Condition No 2
    else if (range < 0) {
        return "Please Input Valid Number";
    }
    // Condition No 3
    else if (range <= 100) {
        const priceforfirst100 = range * for100;
        return priceforfirst100;
    }
    // Condition No 4
    else if (range <= 200) {
        const priceforfirst100 = 100 * for100;
        const restRange = range - 100;
        const priceforsecond100 = restRange * for200;
        const TotalPriceForLessThen200 = priceforfirst100 + priceforsecond100;
        return TotalPriceForLessThen200;
    }
    // Condition No 5
    else {
        const priceforfirst100 = 100 * for100;
        const priceforsecond100 = 100 * for200;
        const restRange = range - 200;
        const priceforRest = restRange * forRest;
        const RestTotal = priceforfirst100 + priceforsecond100 + priceforRest;
        return RestTotal;
    }
}
// Input Section

const for100 = 100;
const for200 = 80;
const forRest = 50;
const NoOfDelivery = 201;
const DeliveryCostCounter = deliveryCost(NoOfDelivery);

// Output Section

console.log(DeliveryCostCounter);


//-------------------------------------------- Problem 4--------------------------------------------//

function perfectFriend(friendsName) {
    for (const friend of friendsName) {
        // Condition No 1
        if (typeof friend != "string") {
            return "You Put Some Unexpected Value in List Of Friends"
        }
        // Condition No 2
        else {
            if (friend.length == 5) {
                var result = friend;
                break;
            }
            else {
                result = "There is No Best Friend";
            }
        }
    }
    return result;
}

// Input Section

const listOfFriends = ["Rafiqul", "Jami", "Sami", "Robi", "Nafi", "Mahir", "Safi", "Mojnu"];
const BestOne = perfectFriend(listOfFriends);

// Output Section

console.log(BestOne);