import { useForm, SubmitHandler  } from 'react-hook-form';

enum Alignment {
  GOOD = "Good",
  EVIL = "Evil"
}

const WIZARD_SCHOOLS = [
  "Abjuration",
  "Conjuration",
  "Divination",
  "Enchantment",
  "Evocation",
  "Illusion",
  "Necromancy",
  "Transmutation"
];

export interface Wizard {
  name: string;
  level: number;
  school: string;
  alignment: Alignment;
}

interface Props {
  onComplete: (wizard: Wizard) => void;
}


export default function YourWizardForm({onComplete}:Props) {
  const { register, handleSubmit, getValues, formState: {errors} } = useForm<Wizard>();
  
  const onSubmit = handleSubmit((data) => {
    onComplete(data);
  });

  return (
    <form onSubmit={onSubmit}>

      <h3>Your Wizard</h3>

      <p>
        <label htmlFor="name">Name: </label>
        <input type="text" 
          autoFocus
          id = "wizardName"
          placeholder="Your Wizard name" 
          {...register("name", {
              required: "You must enter your Wizard's name.",
              minLength:{
                value: 6,
                message: "Min length is 6 chars"
              },
              maxLength:{
                value: 18,
                message: "Max length is 18 chars"
              },
              validate: (value) => {
                return (
                  [/^[a-zA-Z0-9]+$/].every((pattern) =>
                    pattern.test(value)
                  ) || "Only letters and numbers are allowed"
                );
              },
            })}
        />
        {errors.name &&
        <span role="alert" className="field-errors">{errors.name.message}</span>}
      </p>

      <p>
        <label htmlFor="Level">Level: </label>
        <input type="number"
          id="level" 
          {...register("level", {
            required: 'Your Wizard\'s level is required',
            min: {
              value: 0,
              message: "Min value allowed is 0"
            },
            max: {
              value: 20,
              message: "Min value allowed is 20"
            },
            })} />
        {errors.level &&
        <span role="alert" className="field-errors">{errors.level.message}</span>}
      </p>

      <p>
        <label htmlFor="school">School: </label>
        <select
          id="school" 
          {...register("school", 
            {
              validate: (value) => {
                return (
                  WIZARD_SCHOOLS.indexOf(value) >= 0 || "Select the appropiate school"
                );
              },
            })
          } 
        >
          <option value="">Select name...</option>
          {WIZARD_SCHOOLS.map((x) => <option key={x}>{x}</option>)}
        </select>
        {errors.school &&
        <span role="alert" className="field-errors">{errors.school.message}</span>}
      </p>

      <p>
        <label>Alignment: </label>
        <label htmlFor="field-good">
          <input 
            type="radio"
            id="field-good"
            value = {Alignment.GOOD}
            {...register("alignment")}
            checked
          />
          {Alignment.GOOD}
        </label>
        <label htmlFor="field-evil">
          <input 
            type="radio"
            id="field-evil"
            value = {Alignment.EVIL}
            {...register("alignment")}
          />
          {Alignment.EVIL}
        </label>
      </p>

      <p>
        <button type="submit">Next</button>
      </p>
    </form>
  )
}

