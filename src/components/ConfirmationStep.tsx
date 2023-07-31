import React from 'react'
import UserInformationForm, {User} from './UserInformationForm';
import YourWizardForm, { Wizard } from './YourWizardForm';
import YourSidekickForm, { Sidekick } from './YourSidekickForm';

var user: User;
var wizard: Wizard;
var sidekick: Sidekick;

interface Props {
    user: User, 
    wizard: Wizard, 
    sidekick: Sidekick
}

export default function ConfirmationStep({user, wizard, sidekick}: Props) {
    const clickAlert = () => {
        alert('Submitted');
    }
    return (
        <>
            <h3>Confirm your Registration</h3>

            <h4>User details</h4>
                <div>
                    <p>Email: {user.email} </p>
                    <p>Receive newsletter: {user.newsletters ? 'Yes' : 'No'} </p>
                </div>
            <h4>Wizard</h4>
                <div>
                    <p>Name: {wizard.name} </p>
                    <p>Level: {wizard.level} </p>
                    <p>School: {wizard.school} </p>
                    <p>Alignment: {wizard.alignment} </p>
                </div>
            <h4>Sidekick</h4>
                <div>
                    <p>Name: {sidekick.name} </p>
                    <p>Skill: {sidekick.skill} </p>               
                </div>

            <p>
                <button onClick = {clickAlert}>Confirm and Sign Up!</button>
            </p>
        </>
  )
}

