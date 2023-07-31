import { useForm, SubmitHandler  } from 'react-hook-form';

export interface Sidekick {
    name: string;
    skill: string;
  }

  export default function YourSidekickForm() {
    const { register, handleSubmit, getValues, formState: {errors} } = useForm<Sidekick>();
    
    const onSubmit = handleSubmit((data) => {
      console.log( data );
    });
  
    return (
      <form onSubmit={onSubmit}>
  
        <h3>Your Sidekick</h3>
  
        <p>
          <label htmlFor="sidekickName">Name: </label>
          <input type="text" 
            autoFocus
            id = "sidekickName"
            placeholder="Your Sidekick name" 
            {...register("name", {
                required: "You must enter the your Sidekick's name.",
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
          <label htmlFor="skill">Skill (optional): </label>
          <input type="text" 
            id = "skill"
            {...register("skill")}
          />
        </p>

        <p>
          <button type="submit">Finish</button>
        </p>

      </form>
    )
  }
  