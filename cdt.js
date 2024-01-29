import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "UserInput",
    message: "please enter the amount of seconds"
});
let input = res.UserInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("timer has expired");
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        //console.log('${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}');
        console.log(`${minute.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
