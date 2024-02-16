import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../gql-constants";
import { AuthContext } from "../context/auth";
import { useUserForm } from "../utils/hooks/hooks";
import loadingIcon from "../icons/loadingIcon.svg";

const Register = (props) => {
	const context = useContext(AuthContext);
	const [errors, setErrors] = useState({});

	const { onChange, onSubmit, values, formErrors } = useUserForm(registerUser, {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [addUser, { loading }] = useMutation(REGISTER_USER, {
		update(_, { data: { register: userData } }) {
			context.login(userData);
			props.history.push("/dashboard");
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
		variables: values,
	});

	function registerUser() {
		addUser();
	}

	return (
		<div className='h-screen'>
			<div className='flex min-h-full'>
				<div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='mx-auto w-full max-w-sm lg:w-96'>
						<div>
							<img
								className='h-12 w-auto'
								src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
								alt='Your Company'
							/>
							<h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900'>
								Sign up for an account
							</h2>
						</div>

						<div className='mt-8'>
							<div className='mt-6'>
								<form className='space-y-6' onSubmit={onSubmit} noValidate>
									<div>
										<label
											htmlFor='username'
											className='block text-sm font-medium text-gray-700'>
											Username
										</label>
										<input
											label='Username'
											id='username'
											placeholder='Username...'
											name='username'
											type='text'
											value={values.username}
											error={errors.username ? true : false}
											onChange={onChange}
											required
											className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
										/>
									</div>
									<div className='space-y-1'>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-700'>
											Email address
										</label>
										<div className='mt-1'>
											<input
												label='Email'
												placeholder='example@email.com'
												value={values.email}
												error={errors.email ? true : false}
												onChange={onChange}
												id='email'
												name='email'
												type='email'
												autoComplete='email'
												required
												className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
											/>
										</div>
									</div>

									<div className='space-y-1'>
										<label
											htmlFor='password'
											className='block text-sm font-medium text-gray-700'>
											Password
										</label>
										<div className='mt-1'>
											<input
												label='Password'
												placeholder='Password...'
												value={values.password}
												error={errors.password ? true : false}
												onChange={onChange}
												id='password'
												name='password'
												type='password'
												autoComplete='current-password'
												required
												className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
											/>
										</div>
									</div>
									<div className='space-y-1'>
										<label
											htmlFor='confirmPassword'
											className='block text-sm font-medium text-gray-700'>
											Confirm Password
										</label>
										<input
											label='Confirm Password'
											placeholder='Confirm Password...'
											name='confirmPassword'
											id='confirmPassword'
											type='password'
											value={values.confirmPassword}
											error={errors.confirmPassword ? true : false}
											onChange={onChange}
											required
											className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
										/>
									</div>

									{!loading ? (
										<div>
											<button
												type='submit'
												className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
												Register
											</button>
										</div>
									) : (
										<div>
											<button
												disabled
												type='submit'
												className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
												<img src={loadingIcon} alt='Loading Icon' />
											</button>
										</div>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className='relative hidden w-0 flex-1 lg:block'>
					<img
						className='absolute inset-0 h-full w-full object-cover'
						src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
						alt=''
					/>
				</div>
			</div>
			{/* {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
     )}  */}
		</div>
	);
};

export default Register;
