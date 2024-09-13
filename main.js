#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let flag = true;
while (flag) {
    let myBalance = 10000;
    let myPin = 1212;
    console.log("/n");
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }
    ]);
    if (pinAnswer.pin === myPin) {
        console.log(chalk.greenBright.bold("/nCorrect pin code!!!/n"));
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance", "fast cash"]
            }
        ]);
        console.log(operationAns);
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
            if (amountAns.amount <= myBalance)
                myBalance -= amountAns.amount;
            console.log(chalk.yellowBright.italic.bold(chalk.yellow.bgGreen(`Your remaining balance is: ${myBalance}`)));
            console.log("your remaining balance is: " + myBalance);
        }
        else if (operationAns.operation === "check balance") {
            console.log("your balance is :" + myBalance);
        }
    }
    else {
        console.log(chalk.red.bold.italic("\nIncorrect pin number"));
    }
    ;
    console.log("\n");
    let retry = await inquirer.prompt([
        {
            name: "restart",
            message: "press enter to repeat the process or press N to quite:",
            type: "confirm",
            default: true
        }
    ]);
    console.log("\n");
    flag = retry.restart;
}
