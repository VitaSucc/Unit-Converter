console.log('Hello!');

function logToConsole(event) {
    const value = event.target.value
    const unit = event.target.id

    const centimeter = convertFromTo(unit, "centimeter", value)
    const meter = convertFromTo(unit, "meter", value)
    const inch = convertFromTo(unit, "inch", value)
    const feet = convertFromTo(unit, "feet", value)

    for (const input of inputElements) {
      switch (input.id) {
            case "centimeter":
                input.value = centimeter
                break;
            case "meter":
                input.value = meter
                break;
            case "inch":
                input.value = inch
                break;
            case "feet":
                input.value = feet
                break;

             }

        }

    }

function convertFromTo(from, to, value) {
    let result = 0

    switch (from) {
        case "meter":
            switch (to) {
                case "meter":
                    result = value
                    break;
                case "centimeter":
                    result = value * 100
                    break;
                case "inch":
                    result = value * 39.3700787
                    break;
                case "feet":
                    result = value * 3.28083989
                    break;
            }
    }
    return result
}

const inputElements = document.getElementsByClassName("input-element")

for (const input of inputElements) {
    input.addEventListener("input", logToConsole)
}