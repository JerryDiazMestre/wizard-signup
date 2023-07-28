import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  newsletters: boolean;
}

export default function UserInformationFormRHF() {
  const { register, handleSubmit, formState: {errors} } = useForm<FormValues>();
  
  const onSubmit = handleSubmit((data) => {
    console.log( data );
  });

  return (
    <form onSubmit={onSubmit}>
      <h3>User Information</h3>
      <p>
        <label htmlFor="userEmail">Name: </label>
        <input type="email" 
          autoFocus 
          id="userEmail" 
          placeholder="address@example.com" 
          {...register("email", 
                      {
                        required: "You must enter your email", 
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                          message: "You must enter your email"
                        } 
                      }
                      )
                    } 
        />
        {errors.email &&
        <span role="alert" className="field-errors">{errors.email.message}</span>}
      </p>
      <p>
        <label htmlFor="password1">Password: </label>
        <input type="password" id="password1" {...register("password")} required/>
      </p>
      <p>
        <label htmlFor="password2">Confirm Password: </label>
        <input type="password" id="password2" {...register("confirmPassword")} required/>
      </p>
      <p>
        <input type="checkbox" id="terms" {...register("terms")} required/>
        <label htmlFor="terms"> I accept the terms and conditions</label>
      </p>
      <p>
        <input type="checkbox" id="newsletters" {...register("terms")}/>
        <label htmlFor="newsletters"> I would like to receive newsletters</label>
      </p>
      <p>
        <button type="submit">Get started</button>
      </p>
    </form>
  )
}

