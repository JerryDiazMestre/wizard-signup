import React, {useState} from "react";

import UserInformationForm, {User} from './UserInformationForm';
import YourWizardForm, { Wizard } from './YourWizardForm';
import YourSidekickForm, { Sidekick } from './YourSidekickForm';
import ConfirmationStep from "./ConfirmationStep";

var user: User;
var wizard: Wizard;
var sidekick: Sidekick;

interface userValues {
    user: User, 
    wizard: Wizard, 
    sidekick: Sidekick
}

const forms = [
    UserInformationForm,
    YourWizardForm,
    YourSidekickForm
]

export default function SignupFlow() {
    const [formIndex, setFormIndex] = useState(0);
    const [myUserValues, setMyUserValues] = useState<userValues>({user, wizard, sidekick});
    const [test, setTest] = useState<string>('');
    console.log({test:test, myUserValues:myUserValues});

    const setNextForm = () => setFormIndex( formIndex + 1);

    const updateUserUserValues = (user: User): void => {
        myUserValues.user = user;
        console.log(myUserValues);
        setNextForm();
    }

    const updateWizardUserValues = (wizard: Wizard): void => {
        myUserValues.wizard = wizard;
        console.log(myUserValues);
        setNextForm()
    }

    const updateSidekickUserValues = (sidekick: Sidekick): void => {
        myUserValues.sidekick = sidekick;
        console.log(myUserValues);
        setNextForm()
    }

    return (
        <div>
            { 
                {
                    0: <UserInformationForm onComplete={updateUserUserValues}/>,
                    1: <YourWizardForm onComplete={updateWizardUserValues}/>,
                    2: <YourSidekickForm onComplete={updateSidekickUserValues}/>,
                    3: <ConfirmationStep user={myUserValues.user} wizard={myUserValues.wizard} sidekick={myUserValues.sidekick} />
                }[formIndex]
            }
        </div>
    )
}