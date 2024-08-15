import React, { useContext } from 'react'
import LightDarkMode from '../light-dark-mode'
import TicTacToe from '../tictactoe'
import Accordian from "../accordian"
import { FeatureFlagContext } from './context'


const FeatureFlag = () => {

    const { loading, enabledFlags } = useContext(FeatureFlagContext);
    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />
        },
        {
            key: "ShowAccordian",
            component: <Accordian />
        },
        {
            key: "showTickTacToe",
            component: <TicTacToe />
        },
    ]

    function checkFlag(currentFlagKey) {
        console.log(enabledFlags)
        return enabledFlags ? enabledFlags[currentFlagKey] : false;
    }

    if (loading) return (<h1>Loading...</h1>)
    return (
        <div>
            <h1> Featrue Flag</h1>
            {
                componentsToRender.map(
                    componentItem => checkFlag(componentItem.key) ? componentItem.component : null
                )
            }
        </div>
    )
}

export default FeatureFlag
