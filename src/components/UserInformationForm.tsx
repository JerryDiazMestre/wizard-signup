import { useForm, SubmitHandler  } from 'react-hook-form';

export interface User {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  newsletters: boolean;
}

interface Props {
  onComplete: (user: User) => void;
}

export default function UserInformationForm({onComplete}:Props) {
  const { register, handleSubmit, watch, getValues, formState: {errors} } = useForm<User>();
  
  const onSubmit = handleSubmit((data) => {
    onComplete(data);
  });

  return (
    <form onSubmit={onSubmit}>

      <h3>User Information</h3>
      <p>
        <label htmlFor="userEmail">Email: </label>
        <input type="email" 
          autoFocus
          id = "email"
          placeholder="address@example.com" 
          {...register("email", {
              required: "You must enter your email.",
              pattern: {
                value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: "Invalid email address"              }
            }
          )}
        />
        {errors.email &&
        <span role="alert" className="field-errors">{errors.email.message}</span>}
      </p>

      <p>
        <label htmlFor="password">Password: </label>
        <input type="password"
          id="password" 
          {...register("password", {
            required: 'Plase choose a password',
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
                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/, /[!@#$%^&*()]/].every((pattern) =>
                  pattern.test(value)
                ) || "Must contain lower, upper, number, and special chars"
              );
            },
          })} />
        {errors.password &&
        <span role="alert" className="field-errors">{errors.password.message}</span>}
      </p>

      <p>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="password"
          id="confirmPassword" 
          {...register("confirmPassword", {
            required: "Please type your password again here to confirm",
            validate: (val: string) => {
              if (watch('password') !== val) {
                return "Your passwords do no match";
              }
            },})} />
        {errors.confirmPassword &&
        <span role="alert" className="field-errors">{errors.confirmPassword.message}</span>}
      </p>

      <p>
        <input type="checkbox" 
          {...register("terms", {
            required: "You must acept terms to continue"
            })} />
        <label htmlFor="terms"> I accept the terms and conditions </label>
      {errors.terms &&
        <span role="alert" className="field-errors">{errors.terms.message}</span>}
      </p>

      <p>
        <input type="checkbox" {...register("newsletters")}/>
        <label htmlFor="newsletters"> I would like to receive newsletters </label>
      </p>

      <p>
        <button type="submit">Get started</button>
      </p>

    </form>
  )
}

