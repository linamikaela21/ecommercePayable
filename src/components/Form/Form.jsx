import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import './Form.style.scss';

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [inputs, setInputs] = useState([]);

  const onSubmit = async (data, e) => {
    e.target.reset();
    const info = { id: Math.trunc(Math.random() * 1000), ...data };
    await setInputs([...inputs, info]);
  };

  return (
    <div
      className="form-row justify-content-center align-items-center w-100"
      style={{ backgroundColor: 'rgb(221, 233, 233)' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="group">
        <div className="form-container">
          <h1 className="d-block f-1 font-weight-bold">
            DO YOU HAVE ANY QUESTION ?
          </h1>
        </div>
        <br />
        <div className="form-container">
          <span className="f-3">
            Please complete the following form and we will contact you as soon
            is possible
          </span>
        </div>
        <br />
        <div className="form-row align-items-center">
          <input
            type="text"
            name="firstName"
            {...register('firstName', {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
            placeholder="First name"
            className="form-input"
          />

          {errors.firstName && (
            <span className="form-control is-invalid text-danger">
              First name is required. Minimum 2 caracteres
            </span>
          )}
        </div>
        <div className="form-row align-items-center">
          <input
            type="text"
            name="lastName"
            {...register('lastName', {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
            placeholder="Last name"
            className="form-input"
          />

          {errors.lastName && (
            <span className="form-control is-invalid text-danger">
              Last name is required. Minimum 2 caracteres
            </span>
          )}
        </div>
        <div className="form-row align-items-center">
          <input
            type="email"
            name="email"
            {...register('email', {
              required: true,
              minLength: 10,
              maxLength: 50,
            })}
            placeholder="Email"
            className="form-input"
          />

          {errors.email && (
            <span className="form-control is-invalid text-danger">
              Email is required
            </span>
          )}
        </div>
        <div className="form-row align-items-center">
          <textarea
            id="text"
            name="text"
            {...register('text', {
              required: true,
              minLength: 10,
              maxLength: 200,
            })}
            placeholder="Questions"
            className="form-input"
            rows="4"
            cols="50"
          />

          {errors.text && (
            <span className="form-control is-invalid text-danger">
              Make your questions here !
            </span>
          )}
        </div>
        <div className="form-row justify-content-center align-items-center">
          <Button inverted childen={'SEND'} />
        </div>
        <div className={inputs.length ? 'd-flex card p-1 m-1 bg-dark' : null}>
          <div className="card text-lg f-2 m-1">
            {inputs.map((item) => (
              <div key={item.id} className="text-lg f-1 m-1">
                <h1 className="card-title text-lg f-2 m-1">
                  {item.firstName} {item.lastName}
                </h1>
                <h3>{item.email} </h3>
                <h5>{item.text}</h5>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
