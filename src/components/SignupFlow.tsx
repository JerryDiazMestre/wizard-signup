import React, {useState} from "react";

import UserInformationForm, {User} from './UserInformationForm';
import YourWizardForm, { Wizard } from './YourWizardForm';
import YourSidekickForm, { Sidekick } from './YourSidekickForm';

var user: User;
var wizard: Wizard;
var sidekick: Sidekick;

interface userValues {
    user: User, 
    wizard: Wizard, 
    sidekick: Sidekick
}

// var myUservAlues: userValues;

const forms = [
    UserInformationForm,
    YourWizardForm,
    YourSidekickForm
]

export default function SignupFlow() {
    const [formIndex, setFormIndex] = useState(0);
    const [myUservAlues, setMyUserValues] = useState<userValues>({user, wizard, sidekick});
    const [test, setTest] = useState<string>('');
    console.log({test:test, myUservAlues:myUservAlues});

    const setNextForm = () => setFormIndex( formIndex + 1);

    const updateUserUserValues = (values: User): void => {
        myUservAlues.user = values;
        setNextForm();
    }

    const updateWizardUserValues = (values: Wizard): void => {
        myUservAlues.wizard = values;
        setNextForm()
    }

    const updateSidekickUserValues = (values: Sidekick): void => {
        myUservAlues.sidekick = values;
        setNextForm()
    }

    return (
        <div>
            { 
                {
                    0: <UserInformationForm />,
                    1: <YourWizardForm />,
                    2: <YourSidekickForm />
                }[formIndex]
            }
        </div>
    )
}