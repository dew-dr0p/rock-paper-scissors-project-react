import React, { useState, createContext, useEffect } from 'react'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'
import PaperIcon from '../assets/images/icon-paper.svg'
import ScissorsIcon from '../assets/images/icon-scissors.svg'
import RockIcon from '../assets/images/icon-rock.svg'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    
    const components = {
        StepOne,
        StepTwo,
        StepThree,
    }
    
    const [component, setComponent] = useState('StepOne')

    const choices = ["rock", "paper", "scissors"]

    const map = {}
    // let map = new Map()
    // let map = new Object()

    console.log(map)

    choices.forEach((choice, i) => {
        // Using Record
        // map[choice] = {}
        // map[choice][choice] = "Tie"
        // map[choice][choices[(i+1)%3]] = choices[(i+1)%3]
        // map[choice][choices[(i+2)%3]] = choice
    
        // Using Map
        // map.set(choice, {})
        // map.set(choice, {choice: 'Tie'})
        // map.set(choice, {choices,[(i+1)%3]: choices[(i+1)%3]})
        // map.set(choice, {choices,[(i+2)%3]: choice})
    
        // Using Object
        map[choice] = {};
        map[choice][choice] = "Tie"
        map[choice][choices[(i+1)%3]] = choices[(i+1)%3]
        map[choice][choices[(i+2)%3]] = choice
    })

    const [rulesPopUp, setRulesPopUp] = useState(false)

    const [score, setScore] = useState(0)

    const [computerChoice, setComputerChoice] = useState('')
    const [userChoice, setUserChoice] = useState(null)

    const [userElement, setUserElement] = useState(null)
    const [computerElement, setComputerElement] = useState(null)

    const rockElement = `<img id="rock" src=${RockIcon} alt="">`
    const paperElement = `<img id="paper" src=${PaperIcon} alt="">`
    const scissorsElement = `<img id="scissors" src=${ScissorsIcon} alt="">`

    const showPopUp = () => {
        setRulesPopUp(true)
    }

    const closePopUp = () => {
        setRulesPopUp(false)
    }

    const getUserChoice = (event) => {
        const element = event.target
        console.log(event)
        console.log(element)
        console.log(element.localName)
        element.classList.remove('absolute')
        element.classList.remove('-top-20')
        element.classList.remove('-left-20')
        // element.classList.add('scale-150')
        if (element.localName === "div"){
            setUserElement(element.firstChild.outerHTML)
        } else {
            setUserElement(element.outerHTML)
        }
        setUserChoice(element.id)
        setComponent('StepTwo')
    }

    // useEffect(() => {
    //     console.log(userElement)
    //     console.log(userChoice)
    // }, [userElement, userChoice])
    
    const generateComputerChoice = () => {
        if (Math.random() < 0.33) {
            setComputerChoice('rock')
            setComputerElement(rockElement)
        } else if (Math.random() < 0.67) {
            setComputerChoice('paper')
            setComputerElement(paperElement)
        } else {
            setComputerChoice('scissors')
            setComputerElement(scissorsElement)
        }
        console.log(computerChoice)
        console.log(computerElement)
    }

    // Using Record or Object
    const getResult = (choice1, choice2) => (map[choice1] || {})[choice2] || "Invalid choice"

    const updateScore = (value) => {
        value === 'increase' ? setScore(score + 1) : (value === 'decrease' ? setScore(score - 1) : console.log("Invalid Score"))
    }

    // Using Map
    // const getResult = (choice1: string, choice2: string) => console.log(map.get(choice2))

    function resetAll() {
        setUserChoice('')
        setComputerChoice('')
        setUserElement(null)
        setComputerElement(null)
    }
    
    return (
        <AppContext.Provider value={{
            components,
            component,
            rulesPopUp,
            score,
            userElement,
            userChoice,
            computerElement,
            computerChoice,
            setComponent,
            showPopUp,
            closePopUp,
            generateComputerChoice,
            getResult,
            getUserChoice,
            updateScore,
            resetAll
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider