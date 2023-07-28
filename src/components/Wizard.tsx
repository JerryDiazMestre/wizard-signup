import React, {useState, FormEvent} from 'react';

export default function WizardFormControlled() {
  const [name, setName] = useState('');
  const [Level, setPassword] = useState('');
  const [School, setSchool] = useState('');
  const [terms, setTerms] = useState('');
  const [newsletter, setNewsletter] = useState('');
  
  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    const data = {
      name, Level, School, terms, newsletter
    }
    console.log( data );
  }

  return (
    <form onSubmit={handleSubmit}>

    </form>
  )
}

