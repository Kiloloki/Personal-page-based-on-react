import { useState } from "react";
import styled from "styled-components";

const CalculatorContainer = styled.div`
    margin-top: 5vh;
    padding: 5vw;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 2vw;
    text-align: center;

    input {
        padding: 1vw;
        margin: 1vh;
        border: none;
        border-radius: 60vw;
        width: 15vw;
    }

    .button-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1vw;
        margin-top: 2vh;
    }

    button {
        padding: 1vh 1vw;
        border: none;
        border-radius: 10vw;
        background-color: #ffffff;
        color: #6a11cb;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }

    #output {
        margin-top: 4vh;
        font-size: 3vw;
    }
`;

export default function Calculator() {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);

    function displayResult(value: number) {
        setResult(value);
    }

    function add() {
        const x = parseFloat(num1);
        const y = parseFloat(num2);
        displayResult(x + y);
    }

    function subtract() {
        const x = parseFloat(num1);
        const y = parseFloat(num2);
        displayResult(x - y);
    }

    function multiply() {
        const x = parseFloat(num1);
        const y = parseFloat(num2);
        displayResult(x * y);
    }

    function divide() {
        const x = parseFloat(num1);
        const y = parseFloat(num2);
        displayResult(x / y);
    }

    function power() {
        const x = parseFloat(num1);
        const y = parseInt(num2);
        let res = 1;
        for (let i = 0; i < y; i++) {
            res *= x;
        }
        displayResult(res);
    }

    function clearInput() {
        setNum1("");
        setNum2("");
        setResult(null);
    }

    return (
        <CalculatorContainer>
            <h3>Simple Calculator</h3>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />

            <div className="button-group">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
                <button onClick={power}>Power</button>
                <button onClick={clearInput}>Clear</button>
            </div>

            {result !== null && (
                <div id="output" style={{ color: result < 0 ? "red" : "white" }}>
                    {result}
                </div>
            )}
        </CalculatorContainer>
    );
}
